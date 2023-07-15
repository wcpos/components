import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps, Svg, Path } from "react-native-svg";
const SvgBan = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM99.5 144.8C77.15 176.1 64 214.5 64 256c0 106 85.1 192 192 192 41.5 0 79.9-13.1 111.2-35.5L99.5 144.8zM448 256c0-106.9-86-192-192-192-41.5 0-79.9 13.15-111.2 35.5l267.7 267.7C434.9 335.9 448 297.5 448 256z" />
  </Svg>
);
export default SvgBan;
