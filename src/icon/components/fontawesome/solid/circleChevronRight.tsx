import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgCircleChevronRight = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm102.6 278.6-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256l-89.4-89.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256s-3.1 16.4-9.4 22.6z" />
  </Svg>
);
export default SvgCircleChevronRight;
