import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgPlusMinus = (props: SvgProps) => (
  <Svg viewBox="0 0 384 512" {...props}>
    <Path d="M352 448H32c-17.69 0-32 14.31-32 32s14.31 31.1 32 31.1h320c17.69 0 32-14.31 32-31.1s-14.3-32-32-32zM48 208h112v111.1c0 17.69 14.31 31.1 32 31.1s32-14.31 32-31.1V208h112c17.69 0 32-14.32 32-32.01S353.69 144 336 144H224V32c0-17.69-14.31-32.01-32-32.01s-32 14.34-32 32.02v112H48c-17.69 0-32 14.31-32 31.99s14.31 32 32 32z" />
  </Svg>
);
export default SvgPlusMinus;
