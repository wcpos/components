import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgShop = (props: SvgProps) => (
  <Svg viewBox="0 0 640 512" {...props}>
    <Path d="M36.8 192h566.4c20.3 0 36.8-16.5 36.8-36.8 0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192M64 224v240c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V224h-64v160H128V224zm448 0v256c0 17.7 14.3 32 32 32s32-14.3 32-32V224z" />
  </Svg>
);
export default SvgShop;
