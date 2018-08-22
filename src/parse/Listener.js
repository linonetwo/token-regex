// @ts-check @flow
import { override } from 'core-decorators';
import { TokenRegexItParser } from '../antlrGeneratedParser/TokenRegexItParser';
import { TokenRegexItListener } from '../antlrGeneratedParser/TokenRegexItListener';

export interface Marker {
  firstPosition(position: number): void;
}

export default class Listener extends TokenRegexItListener {
  marker: Marker;

  constructor(positionMarker: Marker) {
    super();
    this.marker = positionMarker;
  }

  @override
  exitLiteral(context: TokenRegexItParser.LiteralContext): void {
    console.log(context);
    console.log(this.marker);
  }
}
