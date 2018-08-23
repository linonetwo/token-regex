// @ts-check @flow
import { InputStream, CommonTokenStream } from 'antlr4';
import { ParseTreeWalker } from 'antlr4/tree';
import { flow, keys, compact, groupBy } from 'lodash';

import { TokenRegexItLexer } from '../antlrGeneratedParser/TokenRegexItLexer';
import { TokenRegexItParser } from '../antlrGeneratedParser/TokenRegexItParser';
import Listener, { type Marker } from './Listener';
import PositionMarker, { type PositionSet } from './PositionMarker';

function parse(coolProgram: string) {
  const inputStream = new InputStream(coolProgram);
  const lexer = new TokenRegexItLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new TokenRegexItParser(tokenStream);
  parser.buildParseTrees = true;
  const tokenRegexItAst = parser.tokenRegex();
  return tokenRegexItAst;
}

function markPosition(ast): Marker {
  const positionMarker: Marker = new PositionMarker();
  const walker = new ParseTreeWalker();
  // First pass. Walking in AST and triggering methods in listener, listener will add marks to marker
  walker.walk(new Listener(positionMarker), ast);
  // second pass, calculateFollowPosition

  walker.walk(new Listener(positionMarker, true), ast);
  // return position marks for DFA building
  return positionMarker;
}

function buildDFA(positionSet: PositionSet, rootPosition: string | number) {
  // console.log(positionSet);
  // console.log(rootPosition);
  // leaf node's tokens
  const tokens = compact(
    keys(positionSet).map(
      (position: string | number) =>
        typeof position === 'number' || !position.includes('-') ? { position, ...positionSet[position] } : null,
    ),
  );
  const unmarkedStateIndex: string[] = [];
  const states: { [id: string]: { positions: string[], edges: string[] } } = {};
  const edges: { [id: string]: { from: string, to: string } } = {};
  // Put firstpos(root) into the states of DFA as an unmarked state
  const stateName = positionSet[rootPosition].first.join('_');
  states[stateName] = { positions: positionSet[rootPosition].first.map(String), edges: [] };
  unmarkedStateIndex.push(stateName);
  // while (there is an unmarked state S in the states of DFA) do
  while (unmarkedStateIndex.length > 0) {
    // mark S
    const anUnmarkedStateIndex = unmarkedStateIndex.pop();
    // for each input symbol a do
    // let s1,...,sn are positions in S and symbols in those positions are a
    /** Group duplicate tokens in different positions into arrays, for example token 「小米」
     * { '小米':
        [ { position: '0',
            token: '小米',
            nullable: false,
            first: [Array],
            last: [Array],
            follow: [Array] } ] }
     */
    const tokensInState = groupBy(
      tokens.filter(
        ({ position }) =>
          states[anUnmarkedStateIndex].positions.includes(position) ||
          states[anUnmarkedStateIndex].positions.includes(String(position)),
      ),
      ({ token }) => token,
    );
    for (const token in tokensInState) {
      // S’ ← followpos(s1) U ... U followpos(sn)
      const newUnmarkedState = {
        positions: tokensInState[token].map(({ follow }) => follow).reduce((prev, current) => prev.concat(current), []),
      };
    }
  }
}

export default (tokenRegexString: string) =>
  flow(
    parse,
    markPosition,
    ({ positionSet, rootPosition }: Marker) => buildDFA(positionSet, rootPosition),
  )(tokenRegexString);
