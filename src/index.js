import preval from 'preval.macro';
import parse from './parse';

const input = preval`
  const { readFileSync } = require('fs');
  const { join } = require('path');
  module.exports = readFileSync(join(__dirname, '../examples/literal.txt'), 'utf8');
`;

console.log(parse(input));
