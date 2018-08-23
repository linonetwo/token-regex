// @ts-check @flow
import { override } from 'core-decorators';
import { TokenRegexItParser } from '../antlrGeneratedParser/TokenRegexItParser';
import { TokenRegexItListener } from '../antlrGeneratedParser/TokenRegexItListener';

export interface Marker {
  rootPosition: string | number;
  getLastPositions: (position: number | string) => Array<number>;
  getFirstPositions: (position: number | string) => Array<number>;
  setFollowPosition: (position: number | string, followPositions: Array<number>) => void;
  leaf(token: string | null, position: number, nullable?: boolean): void;
  concat(leftPosition: number, rightPosition: number): void;
  concatPositionIndex(leftPosition: number, rightPosition: number): string;
}
interface Symbol { tokenIndex: number; text: string }

export default class Listener extends TokenRegexItListener {
  marker: Marker;

  calculateFollowPosition: boolean;

  constructor(positionMarker: Marker, calculateFollowPosition?: boolean) {
    super();
    this.marker = positionMarker;
    this.calculateFollowPosition = !!calculateFollowPosition;
  }

  @override
  exitLiteral(context: TokenRegexItParser.LiteralContext): void {
    if (!this.calculateFollowPosition) {
      const { tokenIndex, text }: Symbol = context.STRING().symbol;
      // pass position index up to parent, so TokenRegex node can get it as leftPosition or rightPosition
      context.tokenIndex = tokenIndex;
      this.marker.leaf(text, tokenIndex);
    }
  }

  @override
  exitTokenRegex(context: TokenRegexItParser.TokenRegexContext): void {
    // For node that concat two tokens
    if (context.getChildCount() === 2) {
      const leftPosition = context.getChild(0).tokenIndex;
      const rightPosition = context.getChild(1).tokenIndex;
      const currentPosition = this.marker.concatPositionIndex(leftPosition, rightPosition);
      context.tokenIndex = currentPosition;
      if (!this.calculateFollowPosition) {
        // first pass
        this.marker.concat(leftPosition, rightPosition);
        this.marker.rootPosition = currentPosition;
      } else {
        /** Second pass. Calculate follow position for tokens based on firstPosition, lastPosition and nullable. Reference: http://sist.shanghaitech.edu.cn/faculty/songfu/course/spring2017/cs131/ch3.pdf#page=111 */
        for (const position of this.marker.getLastPositions(leftPosition)) {
          this.marker.setFollowPosition(position, this.marker.getFirstPositions(rightPosition));
        }
      }
    } else if (context.getChildCount() === 1 && context.getChild(0).symbol.type === -1) {
      // EOF, means argument "#", according to http://sist.shanghaitech.edu.cn/faculty/songfu/course/spring2017/cs131/ch3.pdf#page=107
      const { tokenIndex } = context.getChild(0).symbol;
      context.tokenIndex = tokenIndex;
      this.marker.leaf(null, tokenIndex);
    } else {
      console.log('context.getChildCount()', context.getChildCount());
    }
  }
}
