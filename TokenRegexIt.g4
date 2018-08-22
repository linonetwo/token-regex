grammar TokenRegexIt;

refinement: '<' STRING '>';

tokenRegex: tokenRegexBlock tokenRegex | EOF;

tokenRegexBlock:
	'#' STRING (refinement)?				# posTag
	| STRING ':' tokenRegexBlock			# namedCapture
	| '(' tokenRegex ')'				# group
	| STRING								# literal
	| tokenRegexBlock '|' tokenRegexBlock	# or
	| tokenRegexBlock '?'					# optional;

// skip spaces, tabs, newlines, note that \v is not suppoted in antlr
WHITESPACE: [ \t\r\n\f]+ -> skip;

// premitives
STRING: (ESCAPED_CHAR | [0-9a-zA-Z] | CHINESE)+;
INT: [0-9]+;

fragment ESCAPED_CHAR: '\\' (["\\/bfnrt] | UNICODE);
fragment UNICODE: 'u' HEX HEX HEX HEX;
fragment HEX: [0-9a-fA-F];
fragment CHINESE: [\u3006\u3007\u3021-\u3029\u3038-\u303A\u3400-\u4DB5\u4E00-\u9FEA\uF900-\uFA6D\uFA70-\uFAD9];