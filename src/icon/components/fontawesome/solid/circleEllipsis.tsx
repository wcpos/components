import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgCircleEllipsis = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm160 32c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm96-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm96 64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
  </Svg>
);
export default SvgCircleEllipsis;
