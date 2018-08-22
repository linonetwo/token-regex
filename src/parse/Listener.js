// @ts-check @flow
import { override } from 'core-decorators';
import { TokenRegexItParser } from '../antlrGeneratedParser/TokenRegexItParser';
import { TokenRegexItListener } from '../antlrGeneratedParser/TokenRegexItListener';

export interface Marker {
  leaf(token: string | null, position: number, nullable?: boolean): void;
  concat(leftPosition: number, rightPosition: number): void;
  concatPositionIndex(leftPosition: number, rightPosition: number): string;
}
interface Symbol { tokenIndex: number; text: string }

export default class Listener extends TokenRegexItListener {
  marker: Marker;

  constructor(positionMarker: Marker) {
    super();
    this.marker = positionMarker;
  }

  @override
  exitLiteral(context: TokenRegexItParser.LiteralContext): void {
    const { tokenIndex, text }: Symbol = context.STRING().symbol;
    // pass position index up to parent, so TokenRegex node can get it as leftPosition or rightPosition
    context.tokenIndex = tokenIndex;
    this.marker.leaf(text, tokenIndex);
  }

  @override
  exitTokenRegex(context: TokenRegexItParser.TokenRegexContext): void {
    // For node that concat two tokens
    if (context.getChildCount() === 2) {
      const leftPosition = context.getChild(0).tokenIndex;
      const rightPosition = context.getChild(1).tokenIndex;
      context.tokenIndex = this.marker.concatPositionIndex(leftPosition, rightPosition);
      this.marker.concat(leftPosition, rightPosition)
    } else if (context.getChildCount() === 1 && context.getChild(0).symbol.type === -1) {
      // EOF
      const { tokenIndex } = context.getChild(0).symbol;
      context.tokenIndex = tokenIndex;
      this.marker.leaf(null, tokenIndex, true);
    } else {
      console.log('context.getChildCount()', context.getChildCount());
    }
  }
}
