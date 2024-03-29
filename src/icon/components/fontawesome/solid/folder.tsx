import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgFolder = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path d="M464 96H272l-64-64H48C21.5 32 0 53.5 0 80v80h512v-16c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V192H0v240z" />
  </Svg>
);
export default SvgFolder;
