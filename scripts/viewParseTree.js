const antlr4 = require('antlr4');
const { TokenRegexItLexer } = require('../src/antlrGeneratedParser/TokenRegexItLexer');
const { TokenRegexItParser } = require('../src/antlrGeneratedParser/TokenRegexItParser');

const input = 'your text to parse here';
const chars = new antlr4.InputStream(input);
const lexer = new TokenRegexItLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new TokenRegexItParser(tokens);
parser.buildParseTrees = true;
const tree = parser.tokenRegex();
console.log(tree);
