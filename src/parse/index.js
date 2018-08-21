// @ts-check @flow
import { InputStream, CommonTokenStream } from 'antlr4';
import { TokenRegexItLexer } from '../antlrGeneratedParser/TokenRegexItLexer';
import { TokenRegexItParser } from '../antlrGeneratedParser/TokenRegexItParser';

export default function parseTokenRegexIt(coolProgram: string) {
  const inputStream = new InputStream(coolProgram);
  const lexer = new TokenRegexItLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new TokenRegexItParser(tokenStream);
  parser.buildParseTrees = true;
  const tokenRegexItAst = parser.tokenRegex();
  return tokenRegexItAst;
}
