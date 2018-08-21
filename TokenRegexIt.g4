grammar TokenRegexIt;

refinement: '<' STRING '>';

tokenRegex: tokenRegexBlock tokenRegex | EOF;

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
STRING: (ESCAPED_CHAR | HEX)+;
INT: [0-9]+;

fragment ESCAPED_CHAR: '\\' (["\\/bfnrt] | UNICODE);
fragment UNICODE: 'u' HEX HEX HEX HEX;
fragment HEX: [0-9a-fA-F];