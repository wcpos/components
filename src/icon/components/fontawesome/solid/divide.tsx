import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgDivide = (props: SvgProps) => (
  <Svg viewBox="0 0 448 512" {...props}>
    <Path d="M400 224H48c-17.69 0-32 14.31-32 31.1s14.31 32 32 32h352c17.69 0 32-14.31 32-32S417.7 224 400 224zm-176-80c26.47 0 48-21.53 48-48s-21.53-48-48-48-48 21.53-48 48 21.5 48 48 48zm0 224c-26.47 0-48 21.53-48 48s21.53 48 48 48 48-21.53 48-48-21.5-48-48-48z" />
  </Svg>
);
export default SvgDivide;
