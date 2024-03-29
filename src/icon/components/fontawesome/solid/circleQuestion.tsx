import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgCircleQuestion = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32s-14.9 32-32 32zm69.1-142L280 286v2c0 13-11 24-24 24s-24-11-24-24v-16c0-8 4-16 12-21l57-34c7-4 11-11 11-19 0-12-10.9-22-22.9-22H238c-12.9 0-22 10-22 22 0 13-11 24-24 24s-24-11-24-24c0-39 31-70 69.1-70h51.1c40.8 0 71.8 31 71.8 70 0 24-13 47-34.9 60z" />
  </Svg>
);
export default SvgCircleQuestion;
