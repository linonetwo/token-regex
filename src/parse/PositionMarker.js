// @flow
import type { Marker } from './Listener';

export default class PositionMarker implements Marker {
  firstPosition(position: number) {
    console.log(position);
  }
}
