import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgBookmark = (props: SvgProps) => (
  <Svg viewBox="0 0 384 512" {...props}>
    <Path d="M384 48v464L192 400 0 512V48C0 21.5 21.5 0 48 0h288c26.5 0 48 21.5 48 48z" />
  </Svg>
);
export default SvgBookmark;
