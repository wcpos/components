import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgFolders = (props: SvgProps) => (
  <Svg viewBox="0 0 640 512" {...props}>
    <Path d="M560 96H368l-64-64H176c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zm-72 384H152c-66.17 0-120-53.8-120-120V120c0-13.2 10.75-24 24-24s24 10.8 24 24v240c0 39.7 32.3 72 72 72h336c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
  </Svg>
);
export default SvgFolders;
