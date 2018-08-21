grammar TokenRegexIt;

refinement: '<' STRING '>';

tokenRegex: tokenRegexBlock+;

tokenRegexBlock:
	'#' STRING (refinement)?				# posTag
	| STRING ':' tokenRegexBlock			# namedCapture
	| '(' tokenRegexBlock ')'				# group
	| STRING								# listral
	| tokenRegexBlock '|' tokenRegexBlock	# or
	| tokenRegexBlock '?'					# optional;

// skip spaces, tabs, newlines, note that \v is not suppoted in antlr
WHITESPACE: [ \t\r\n\f]+ -> skip;

// premitives
STRING: (ESCAPED_CHAR | HEX | CHINESE)+;
INT: [0-9]+;

fragment ESCAPED_CHAR: '\\' (["\\/bfnrt] | UNICODE);
fragment UNICODE: 'u' HEX HEX HEX HEX;
fragment HEX: [0-9a-fA-F];
fragment CHINESE: [\u3006\u3007\u3021-\u3029\u3038-\u303A\u3400-\u4DB5\u4E00-\u9FEA\uF900-\uFA6D\uFA70-\uFAD9\u17000-\u187EC\u18800-\u18AF2\u1B170-\u1B2FB\u20000-\u2A6D6\u2A700-\u2B734\u2B740-\u2B81D\u2B820-\u2CEA1\u2CEB0-\u2EBE0\u2F800-\u2FA1D];