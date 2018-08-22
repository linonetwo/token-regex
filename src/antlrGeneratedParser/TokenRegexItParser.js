// Generated from /Users/linonetwo/Desktop/repo/token-regex/TokenRegexIt.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TokenRegexItListener = require('./TokenRegexItListener').TokenRegexItListener;
var TokenRegexItVisitor = require('./TokenRegexItVisitor').TokenRegexItVisitor;

var grammarFileName = "TokenRegexIt.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\r-\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003\u0011\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u0017\n\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004!\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004(\n\u0004\f\u0004\u000e\u0004+\u000b",
    "\u0004\u0003\u0004\u0002\u0003\u0006\u0005\u0002\u0004\u0006\u0002\u0002",
    "\u00020\u0002\b\u0003\u0002\u0002\u0002\u0004\u0010\u0003\u0002\u0002",
    "\u0002\u0006 \u0003\u0002\u0002\u0002\b\t\u0007\u0003\u0002\u0002\t",
    "\n\u0007\f\u0002\u0002\n\u000b\u0007\u0004\u0002\u0002\u000b\u0003\u0003",
    "\u0002\u0002\u0002\f\r\u0005\u0006\u0004\u0002\r\u000e\u0005\u0004\u0003",
    "\u0002\u000e\u0011\u0003\u0002\u0002\u0002\u000f\u0011\u0007\u0002\u0002",
    "\u0003\u0010\f\u0003\u0002\u0002\u0002\u0010\u000f\u0003\u0002\u0002",
    "\u0002\u0011\u0005\u0003\u0002\u0002\u0002\u0012\u0013\b\u0004\u0001",
    "\u0002\u0013\u0014\u0007\u0005\u0002\u0002\u0014\u0016\u0007\f\u0002",
    "\u0002\u0015\u0017\u0005\u0002\u0002\u0002\u0016\u0015\u0003\u0002\u0002",
    "\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017!\u0003\u0002\u0002",
    "\u0002\u0018\u0019\u0007\f\u0002\u0002\u0019\u001a\u0007\u0006\u0002",
    "\u0002\u001a!\u0005\u0006\u0004\u0007\u001b\u001c\u0007\u0007\u0002",
    "\u0002\u001c\u001d\u0005\u0004\u0003\u0002\u001d\u001e\u0007\b\u0002",
    "\u0002\u001e!\u0003\u0002\u0002\u0002\u001f!\u0007\f\u0002\u0002 \u0012",
    "\u0003\u0002\u0002\u0002 \u0018\u0003\u0002\u0002\u0002 \u001b\u0003",
    "\u0002\u0002\u0002 \u001f\u0003\u0002\u0002\u0002!)\u0003\u0002\u0002",
    "\u0002\"#\f\u0004\u0002\u0002#$\u0007\t\u0002\u0002$(\u0005\u0006\u0004",
    "\u0005%&\f\u0003\u0002\u0002&(\u0007\n\u0002\u0002\'\"\u0003\u0002\u0002",
    "\u0002\'%\u0003\u0002\u0002\u0002(+\u0003\u0002\u0002\u0002)\'\u0003",
    "\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*\u0007\u0003\u0002\u0002",
    "\u0002+)\u0003\u0002\u0002\u0002\u0007\u0010\u0016 \')"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'<'", "'>'", "'#'", "':'", "'('", "')'", "'|'", 
                     "'?'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      "WHITESPACE", "STRING", "INT" ];

var ruleNames =  [ "refinement", "tokenRegex", "tokenRegexBlock" ];

function TokenRegexItParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TokenRegexItParser.prototype = Object.create(antlr4.Parser.prototype);
TokenRegexItParser.prototype.constructor = TokenRegexItParser;

Object.defineProperty(TokenRegexItParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

TokenRegexItParser.EOF = antlr4.Token.EOF;
TokenRegexItParser.T__0 = 1;
TokenRegexItParser.T__1 = 2;
TokenRegexItParser.T__2 = 3;
TokenRegexItParser.T__3 = 4;
TokenRegexItParser.T__4 = 5;
TokenRegexItParser.T__5 = 6;
TokenRegexItParser.T__6 = 7;
TokenRegexItParser.T__7 = 8;
TokenRegexItParser.WHITESPACE = 9;
TokenRegexItParser.STRING = 10;
TokenRegexItParser.INT = 11;

TokenRegexItParser.RULE_refinement = 0;
TokenRegexItParser.RULE_tokenRegex = 1;
TokenRegexItParser.RULE_tokenRegexBlock = 2;

function RefinementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TokenRegexItParser.RULE_refinement;
    return this;
}

RefinementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RefinementContext.prototype.constructor = RefinementContext;

RefinementContext.prototype.STRING = function() {
    return this.getToken(TokenRegexItParser.STRING, 0);
};

RefinementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TokenRegexItListener ) {
        listener.enterRefinement(this);
	}
};

RefinementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TokenRegexItListener ) {
        listener.exitRefinement(this);
	}
};

RefinementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TokenRegexItVisitor ) {
        return visitor.visitRefinement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TokenRegexItParser.RefinementContext = RefinementContext;

TokenRegexItParser.prototype.refinement = function() {

    var localctx = new RefinementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TokenRegexItParser.RULE_refinement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 6;
        this.match(TokenRegexItParser.T__0);
        this.state = 7;
        this.match(TokenRegexItParser.STRING);
        this.state = 8;
        this.match(TokenRegexItParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TokenRegexContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TokenRegexItParser.RULE_tokenRegex;
    return this;
}

TokenRegexContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TokenRegexContext.prototype.constructor = TokenRegexContext;

TokenRegexContext.prototype.tokenRegexBlock = function() {
    return this.getTypedRuleContext(TokenRegexBlockContext,0);
};

TokenRegexContext.prototype.tokenRegex = function() {
    return this.getTypedRuleContext(TokenRegexContext,0);
};

TokenRegexContext.prototype.EOF = function() {
    return this.getToken(TokenRegexItParser.EOF, 0);
};

TokenRegexContext.prototype.enterRule = function(listener) {
    if(listener instanceof TokenRegexItListener ) {
        listener.enterTokenRegex(this);
	}
};

TokenRegexContext.prototype.exitRule = function(listener) {
    if(listener instanceof TokenRegexItListener ) {
        listener.exitTokenRegex(this);
	}
};

TokenRegexContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TokenRegexItVisitor ) {
        return visitor.visitTokenRegex(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TokenRegexItParser.TokenRegexContext = TokenRegexContext;

TokenRegexItParser.prototype.tokenRegex = function() {

    var localctx = new TokenRegexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, TokenRegexItParser.RULE_tokenRegex);
    try {
        this.state = 14;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TokenRegexItParser.T__2:
        case TokenRegexItParser.T__4:
        case TokenRegexItParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 10;
            this.tokenRegexBlock(0);
            this.state = 11;
            this.tokenRegex();
            break;
        case TokenRegexItParser.EOF:
            this.enterOuterAlt(localctx, 2);
            this.state = 13;
            this.match(TokenRegexItParser.EOF);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TokenRegexBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TokenRegexItParser.RULE_tokenRegexBlock;
    return this;
}

TokenRegexBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TokenRegexBlockContext.prototype.constructor = TokenRegexBlockContext;


 
TokenRegexBlockContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function NamedCaptureContext(parser, ctx) {
	TokenRegexBlockContext.call(this, parser);
    TokenRegexBlockContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NamedCaptureContext.prototype = Object.create(TokenRegexBlockContext.prototype);
NamedCaptureContext.prototype.constructor = NamedCaptureContext;

TokenRegexItParser.NamedCaptureContext = NamedCaptureContext;

NamedCaptureContext.prototype.STRING = function() {
    return this.getToken(TokenRegexItParser.STRING, 0);
};

NamedCaptureContext.prototype.tokenRegexBlock = function() {
    return this.getTypedRuleContext(TokenRegexBlockContext,0);
};
NamedCaptureContext.prototype.enterRule = function(listener) {
    if(listener instanceof TokenRegexItListener ) {
        listener.enterNamedCapture(this);
	}
};

NamedCaptureContext.prototype.exitRule = function(listener) {
    if(listener instanceof TokenRegexItListener ) {
        listener.exitNamedCapture(this);
	}
};

NamedCaptureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TokenRegexItVisitor ) {
        return visitor.visitNamedCapture(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OrContext(parser, ctx) {
	TokenRegexBlockContext.call(this, parser);
    TokenRegexBlockContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrContext.prototype = Object.create(TokenRegexBlockContext.prototype);
OrContext.prototype.constructor = OrContext;

TokenRegexItParser.OrContext = OrContext;

OrContext.prototype.tokenRegexBlock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TokenRegexBlockContext);
    } else {
        return this.getTypedRuleContext(TokenRegexBlockContext,i);
    }
};
OrContext.prototype.enterRule = function(listener) {
    if(listener instanceof TokenRegexItListener ) {
        listener.enterOr(this);
	}
};

OrContext.prototype.exitRule = function(listener) {
    if(listener instanceof TokenRegexItListener ) {
        listener.exitOr(this);
	}
};

OrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TokenRegexItVisitor ) {
        return visitor.visitOr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PosTagContext(parser, ctx) {
	TokenRegexBlockContext.call(this, parser);
    TokenRegexBlockContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PosTagContext.prototype = Object.create(TokenRegexBlockContext.prototype);
PosTagContext.prototype.constructor = PosTagContext;

TokenRegexItParser.PosTagContext = PosTagContext;

PosTagContext.prototype.STRING = function() {
    return this.getToken(TokenRegexItParser.STRING, 0);
};

PosTagContext.prototype.refinement = function() {
    return this.getTypedRuleContext(RefinementContext,0);
};
PosTagContext.prototype.enterRule = function(listener) {
    if(listener instanceof TokenRegexItListener ) {
        listener.enterPosTag(this);
	}
};

PosTagContext.prototype.exitRule = function(listener) {
    if(listener instanceof TokenRegexItListener ) {
        listener.exitPosTag(this);
	}
};

PosTagContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TokenRegexItVisitor ) {
        return visitor.visitPosTag(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OptionalContext(parser, ctx) {
	TokenRegexBlockContext.call(this, parser);
    TokenRegexBlockContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OptionalContext.prototype = Object.create(TokenRegexBlockContext.prototype);
OptionalContext.prototype.constructor = OptionalContext;

TokenRegexItParser.OptionalContext = OptionalContext;

OptionalContext.prototype.tokenRegexBlock = function() {
    return this.getTypedRuleContext(TokenRegexBlockContext,0);
};
OptionalContext.prototype.enterRule = function(listener) {
    if(listener instanceof TokenRegexItListener ) {
        listener.enterOptional(this);
	}
};

OptionalContext.prototype.exitRule = function(listener) {
    if(listener instanceof TokenRegexItListener ) {
        listener.exitOptional(this);
	}
};

OptionalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TokenRegexItVisitor ) {
        return visitor.visitOptional(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GroupContext(parser, ctx) {
	TokenRegexBlockContext.call(this, parser);
    TokenRegexBlockContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GroupContext.prototype = Object.create(TokenRegexBlockContext.prototype);
GroupContext.prototype.constructor = GroupContext;

TokenRegexItParser.GroupContext = GroupContext;

GroupContext.prototype.tokenRegex = function() {
    return this.getTypedRuleContext(TokenRegexContext,0);
};
GroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof TokenRegexItListener ) {
        listener.enterGroup(this);
	}
};

GroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof TokenRegexItListener ) {
        listener.exitGroup(this);
	}
};

GroupContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TokenRegexItVisitor ) {
        return visitor.visitGroup(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LiteralContext(parser, ctx) {
	TokenRegexBlockContext.call(this, parser);
    TokenRegexBlockContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LiteralContext.prototype = Object.create(TokenRegexBlockContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

TokenRegexItParser.LiteralContext = LiteralContext;

LiteralContext.prototype.STRING = function() {
    return this.getToken(TokenRegexItParser.STRING, 0);
};
LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof TokenRegexItListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof TokenRegexItListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TokenRegexItVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};



TokenRegexItParser.prototype.tokenRegexBlock = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new TokenRegexBlockContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, TokenRegexItParser.RULE_tokenRegexBlock, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PosTagContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 17;
            this.match(TokenRegexItParser.T__2);
            this.state = 18;
            this.match(TokenRegexItParser.STRING);
            this.state = 20;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
            if(la_===1) {
                this.state = 19;
                this.refinement();

            }
            break;

        case 2:
            localctx = new NamedCaptureContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 22;
            this.match(TokenRegexItParser.STRING);
            this.state = 23;
            this.match(TokenRegexItParser.T__3);
            this.state = 24;
            this.tokenRegexBlock(5);
            break;

        case 3:
            localctx = new GroupContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 25;
            this.match(TokenRegexItParser.T__4);
            this.state = 26;
            this.tokenRegex();
            this.state = 27;
            this.match(TokenRegexItParser.T__5);
            break;

        case 4:
            localctx = new LiteralContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 29;
            this.match(TokenRegexItParser.STRING);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 39;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 37;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new OrContext(this, new TokenRegexBlockContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, TokenRegexItParser.RULE_tokenRegexBlock);
                    this.state = 32;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 33;
                    this.match(TokenRegexItParser.T__6);
                    this.state = 34;
                    this.tokenRegexBlock(3);
                    break;

                case 2:
                    localctx = new OptionalContext(this, new TokenRegexBlockContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, TokenRegexItParser.RULE_tokenRegexBlock);
                    this.state = 35;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 36;
                    this.match(TokenRegexItParser.T__7);
                    break;

                } 
            }
            this.state = 41;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


TokenRegexItParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.tokenRegexBlock_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

TokenRegexItParser.prototype.tokenRegexBlock_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.TokenRegexItParser = TokenRegexItParser;
