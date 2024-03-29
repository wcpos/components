import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgPercent = (props: SvgProps) => (
  <Svg viewBox="0 0 384 512" {...props}>
    <Path d="M374.6 73.39c-12.5-12.5-32.75-12.5-45.25 0l-320 320c-12.5 12.5-12.5 32.75 0 45.25C15.63 444.9 23.81 448 32 448s16.38-3.125 22.62-9.375l320-320C387.1 106.1 387.1 85.89 374.6 73.39zM64 192c35.3 0 64-28.72 64-64S99.3 64.01 64 64.01 0 92.73 0 128s28.7 64 64 64zm256 128c-35.3 0-64 28.72-64 64s28.7 64 64 64 64-28.72 64-64-28.7-64-64-64z" />
  </Svg>
);
export default SvgPercent;
