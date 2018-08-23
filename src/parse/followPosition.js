// @flow
import type { PositionSet } from './PositionMarker';

/** Calculate follow position for tokens based on firstPosition, lastPosition and nullable. Reference: http://sist.shanghaitech.edu.cn/faculty/songfu/course/spring2017/cs131/ch3.pdf#page=111 */
export default function followPosition(positionSet: PositionSet): { [position: string | number]: number[] } {
  console.log(positionSet)
  return {};
}
