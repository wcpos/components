import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgCirclePause = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-32 191.1v128c0 18.6-14.3 32.9-32 32.9s-32-14.3-32-32V191.1c0-16.8 14.3-31.1 31.1-31.1s32.9 14.3 32.9 31.1zm128 0v128c0 18.6-14.3 32.9-32 32.9s-32-14.3-32-32V191.1c0-16.8 14.3-31.1 31.1-31.1s32.9 14.3 32.9 31.1z" />
  </Svg>
);
export default SvgCirclePause;
