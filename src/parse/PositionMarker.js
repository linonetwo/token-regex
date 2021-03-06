/* eslint-disable class-methods-use-this */
// @flow
import { uniq } from 'lodash';
import type { Marker } from './Listener';

export type PositionSet = {
  [position: string | number]: {
    token?: string | null,
    nullable: boolean,
    first: number[],
    last: number[],
    follow?: number[],
  },
};

export default class PositionMarker implements Marker {
  positionSet: PositionSet = {};

  rootPosition: string | number = 0;

  getLastPositions(position: number | string) {
    return this.positionSet[position].last;
  }

  getFirstPositions(position: number | string) {
    return this.positionSet[position].first;
  }

  setFollowPosition(position: number | string, followPositions: number[]) {
    this.positionSet[position].follow = uniq([...(this.positionSet[position].follow || []), ...followPositions]);
  }

  /** evaluate firstPos, lastPos, nullable of a Leaf token */
  leaf(token: string | null, position: number, nullable?: boolean = false): void {
    const first = nullable ? [] : [position];
    const last = nullable ? [] : [position];

    this.positionSet[position] = {
      token,
      nullable,
      first,
      last,
      follow: [],
    };
  }

  // get index for inner nodes (operators)
  concatPositionIndex(leftPosition: number, rightPosition: number): string {
    return `${leftPosition}-${rightPosition}`;
  }

  /** evaluate firstPos, lastPos, nullable of a node concat several nodes */
  concat(leftPosition: number, rightPosition: number): void {
    const { nullable: leftNullable, first: leftFirst, last: leftLast } = this.positionSet[leftPosition];
    const { nullable: rightNullable, first: rightFirst, last: rightLast } = this.positionSet[rightPosition];

    // according to http://sist.shanghaitech.edu.cn/faculty/songfu/course/spring2017/cs131/ch3.pdf#page=111
    const nullable = leftNullable || rightNullable;
    const first = leftNullable ? [...leftFirst, ...rightFirst] : leftFirst;
    const last = rightNullable ? [...leftLast, ...rightLast] : rightLast;

    this.positionSet[this.concatPositionIndex(leftPosition, rightPosition)] = {
      nullable,
      first,
      last,
    };
  }
}
