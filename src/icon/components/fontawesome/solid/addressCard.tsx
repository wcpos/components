import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps, Svg, Path } from "react-native-svg";
const SvgAddressCard = (props: SvgProps) => (
  <Svg viewBox="0 0 576 512" {...props}>
    <Path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-336 96c35.35 0 64 28.65 64 64s-28.65 64-64 64-64-28.65-64-64 28.7-64 64-64zm96 256H80c-8.84 0-16-7.2-16-16 0-44.2 35.82-80 80-80h64c44.18 0 80 35.82 80 80 0 8.8-7.2 16-16 16zm224-64H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0-64H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0-64H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
  </Svg>
);
export default SvgAddressCard;
