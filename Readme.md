# Token Regex

Data extraction on tokens of segmented sentences. In any JS environment (browser, election, IOT...)

## Usage

With segmented sentence:

```text
小米新品<公司名> 公司<名词 名语素> 2017年<时间词> 的<助词 助语素> 营业<动词 动语素> 成本<名词 名语素> 比<介词> 上<方位词 方位语素> 一年<数量词> 增长<动词 动语素> 了<助词 助语素> 17%<数词 数语素> 。<标点符号>
```

match parts you want ↓🔬

```js
import tokenRegex from 'token-regex-it';

const rules = [`companyName:#公司名 营业成本 changeDirection:#动词<增长>`];
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

## Syntax of rules

Rule is space separated tokens.

### Match POS tag

`#公司名 #时间词 #助词` will match `公司2017年的`.
  
Placed after the colon is the POS tag you want to match.
  
`#公司名 #助词` will match `公司2017年的` too.

You can omit some intermediate POS tag, rule will still match.

### Named capture

`companyName:#公司名 #助词` will put matching result of `#公司名` into result JSON, under the key `companyName`.

This works like destructuring assignment syntax in JavaScript: `const { companyName } = result;`.

### Refinement

`#动词<增长>` will match `增长` or `降低`.

This works like generic types, where you tell it only match token similar to `增长`. This feature is power by synonym dictionary and your custom dictionaries.

### Literal

`营业 成本` will match `营业成本` or `营业的成本`.

Just like we can match POS tag, we can match literal too.

`营业 本钱` will match `营业成本`.

If literal matching failed, it will try to match token that is similar to that literal. This feature is power by synonym dictionary and your custom dictionaries.

### Group

`companyName:(#公司名 #助词)` will put matching result of `#公司名 #助词`, which is `公司2017年的`, into result JSON, under the key `companyName`.

What in the parentheses can be some legal token-regex-it tokens.

### Or

`#公司名|#时间词 #助词` will match `公司的` or `2017年的`.

Working likes regex's `|`.

### Optional

`#公司名? #助词` will match `公司的` or `的`.

Working likes regex's `?`.

## Constrain

- Only support sentence level extraction. Longer text will be slow.

## Development

1. If you need to modify syntax, Install [Antlr4](http://macappstore.org/antlr/), and run `yarn generate-parser`
1. To start development, run `yarn dev`

## How to get tokens

Use sentence segment package likes [segmentit](https://github.com/linonetwo/segmentit).

You can use [nodejieba](https://github.com/yanyiwu/nodejieba) too. But if you don't run this package in the browser, why would you need this package? You should try [stanford NLP](https://nlp.stanford.edu/software/tokensregex.html#TokensRegexRules).
