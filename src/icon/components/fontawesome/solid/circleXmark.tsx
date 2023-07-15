import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps, Svg, Path } from "react-native-svg";
const SvgCircleXmark = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm175-47.9 47.1 47L175 303c-9.3 9.4-9.3 24.6 0 33.1 9.4 10.2 24.6 10.2 33.1 0l47-46.2 47.9 46.2c9.4 10.2 24.6 10.2 33.1 0 10.2-8.5 10.2-23.7 0-33.1l-46.2-47.9 46.2-47c10.2-8.5 10.2-23.7 0-33.1-8.5-9.3-23.7-9.3-33.1 0l-47.9 47.1-47-47.1c-8.5-9.3-23.7-9.3-33.1 0-9.3 9.4-9.3 24.6 0 33.1z" />
  </Svg>
);
export default SvgCircleXmark;
