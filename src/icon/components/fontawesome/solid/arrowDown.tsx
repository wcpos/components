import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgArrowDown = (props: SvgProps) => (
  <Svg viewBox="0 0 384 512" {...props}>
    <Path d="m374.6 310.6-160 160c-6.2 6.3-14.4 9.4-22.6 9.4s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.45 32.7-.05 45.2z" />
  </Svg>
);
export default SvgArrowDown;
