// Generated from /Users/linonetwo/Desktop/repo/token-regex/TokenRegexIt.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by TokenRegexItParser.

function TokenRegexItVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

TokenRegexItVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
TokenRegexItVisitor.prototype.constructor = TokenRegexItVisitor;

// Visit a parse tree produced by TokenRegexItParser#refinement.
TokenRegexItVisitor.prototype.visitRefinement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TokenRegexItParser#tokenRegex.
TokenRegexItVisitor.prototype.visitTokenRegex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TokenRegexItParser#namedCapture.
TokenRegexItVisitor.prototype.visitNamedCapture = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TokenRegexItParser#or.
TokenRegexItVisitor.prototype.visitOr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TokenRegexItParser#posTag.
TokenRegexItVisitor.prototype.visitPosTag = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TokenRegexItParser#listral.
TokenRegexItVisitor.prototype.visitListral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TokenRegexItParser#optional.
TokenRegexItVisitor.prototype.visitOptional = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TokenRegexItParser#group.
TokenRegexItVisitor.prototype.visitGroup = function(ctx) {
  return this.visitChildren(ctx);
};



exports.TokenRegexItVisitor = TokenRegexItVisitor;