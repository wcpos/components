import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgUsers = (props: SvgProps) => (
  <Svg viewBox="0 0 640 512" {...props}>
    <Path d="M144 0a80 80 0 1 1 0 160 80 80 0 1 1 0-160m368 0a80 80 0 1 1 0 160 80 80 0 1 1 0-160M0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7-1.3 7.2-1.9 14.7-1.9 22.3 0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7M405.3 320h-.7c26.6-23.5 43.3-57.8 43.3-96 0-7.6-.7-15-1.9-22.3 13.6-6.3 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7 0 11.8-9.6 21.3-21.3 21.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1-192 0m-96 261.3c0-73.6 59.7-133.3 133.3-133.3h117.4c73.6 0 133.3 59.7 133.3 133.3 0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7" />
  </Svg>
);
export default SvgUsers;
