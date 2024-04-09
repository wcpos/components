import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgGiftCard = (props: SvgProps) => (
  <Svg viewBox="0 0 576 512" {...props}>
    <Path d="M353.5 68.8c7.6-12.9 21.4-20.8 36.3-20.8h2.2c22.1 0 40 17.9 40 40s-17.9 40-40 40h-73.3zm-131 0 34.8 59.2H184c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8m89.6-24.3-24.1 41-24.1-41C247.7 16.9 218.1 0 186.2 0H184c-48.6 0-88 39.4-88 88 0 14.4 3.5 28 9.6 40H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64h-41.6c6.1-12 9.6-25.6 9.6-40 0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4zM512 384v64H64v-64zm0-64H64V192h166.1l-40.5 48.6c-8.5 10.2-7.1 25.3 3.1 33.8s25.3 7.1 33.8-3.1l61.5-73.8 61.6 73.9c8.5 10.2 23.6 11.6 33.8 3.1s11.6-23.6 3.1-33.8L345.9 192H512z" />
  </Svg>
);
export default SvgGiftCard;
