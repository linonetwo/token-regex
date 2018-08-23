// @ts-check @flow
import { InputStream, CommonTokenStream } from 'antlr4';
import { ParseTreeWalker } from 'antlr4/tree';
import { flow } from 'lodash';
import { _ } from 'param.macro';

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

export default (tokenRegexString: string) =>
  flow(
    parse,
    markPosition,
    // buildDFA(_.positionSet),
  )(tokenRegexString);
