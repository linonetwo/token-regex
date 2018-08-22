// @ts-check @flow
import { InputStream, CommonTokenStream } from 'antlr4';
import { ParseTreeWalker } from 'antlr4/tree';
import { flow } from 'lodash';

import { TokenRegexItLexer } from '../antlrGeneratedParser/TokenRegexItLexer';
import { TokenRegexItParser } from '../antlrGeneratedParser/TokenRegexItParser';
import Listener,  { type Marker } from './Listener';
import PositionMarker from './PositionMarker';

function parse(coolProgram: string) {
  const inputStream = new InputStream(coolProgram);
  const lexer = new TokenRegexItLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new TokenRegexItParser(tokenStream);
  parser.buildParseTrees = true;
  const tokenRegexItAst = parser.tokenRegex();
  return tokenRegexItAst;
}

function visitAST(ast): Marker {
  const positionMarker: Marker = new PositionMarker();
  const listener = new Listener(positionMarker);
  // working in AST and trigger methods in listener, listener will add marks to marker
  const walker = new ParseTreeWalker();
  walker.walk(listener, ast);
  // return position marks for DFA building
  return positionMarker;
}

export default (tokenRegexString: string) =>
  flow(
    parse,
    visitAST,
  )(tokenRegexString);
