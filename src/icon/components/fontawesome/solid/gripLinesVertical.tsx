import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgGripLinesVertical = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <Path d="M64 448c0 17.7-14.33 32-32 32S0 465.7 0 448V64c0-17.67 14.33-32 32-32s32 14.33 32 32v384zm128 0c0 17.7-14.3 32-32 32s-32-14.3-32-32V64c0-17.67 14.3-32 32-32s32 14.33 32 32v384z" />
  </Svg>
);

export default SvgGripLinesVertical;