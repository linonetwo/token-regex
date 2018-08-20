# Token Regex

Data extraction on tokens of segmented sentences.

## Usage

With segmented sentence:

```text
小米新品<公司名> 公司<名词 名语素> 2017年<时间词> 的<助词 助语素> 营业<动词 动语素> 成本<名词 名语素> 比<介词> 上<方位词 方位语素> 一年<数量词> 增长<动词 动语素> 了<助词 助语素> 17%<数词 数语素> 。<标点符号>
```

match parts you want ↓🔬

```js
import tokenRegex from 'token-regex';

const rules = [`companyName:公司名 营业成本 changeDirection:动词<增长>`];
const tokens = [
  { word: '小米新品', pos: 'ntc' },
  { word: '公司', pos: 'n' },
  { word: '2017年', pos: 't' },
  { word: '的', pos: 'u' },
  { word: '营业', pos: 'v' },
  { word: '成本', pos: 'n' },
  { word: '比', pos: 'p' },
  { word: '上', pos: 'f' },
  { word: '一年', pos: 'mq' },
  { word: '增长', pos: 'v' },
  { word: '了', pos: 'u' },
  { word: '17%', pos: 'm' },
  { word: '。', pos: 'w' },
];
const { companyName, changeDirection } = tokenRegex({ rules })(tokens);

console.log({ companyName, changeDirection });
// { companyName: '小米新品', changeDirection: '增长' }
```

## How to get tokens

Use sentence segment package likes [segmentit](https://github.com/linonetwo/segmentit).

You can use [nodejieba](https://github.com/yanyiwu/nodejieba) too. But if you don't run this package in the browser, why would you need this package? You should try [stanford NLP](https://nlp.stanford.edu/software/tokensregex.html#TokensRegexRules).
