import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgUsers = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <Path d="M319.9 320c57.41 0 103.1-46.56 103.1-104s-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104-.9 57.4 45.7 104 103.1 104zm50 32h-99.8C191.6 352 128 411.7 128 485.3c0 14.8 12.7 26.7 28.4 26.7h327.2c15.7 0 28.4-11.9 28.4-26.7 0-73.6-63.6-133.3-142.1-133.3zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80s35.8 80 80 80zm-328.1 56c0-5.449.982-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3 0 295.6 7.887 304 17.62 304h199.5c-20.42-23.8-33.22-54.3-33.22-88zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80s35.82 80 80 80zm423.9 32h-61.84c-12.8 0-24.88 3.037-35.86 8.24.6 5.26 1.6 10.36 1.6 15.76 0 33.71-12.78 64.21-33.16 88h199.7c9.76 0 17.66-8.4 17.66-18.7 0-51.5-39.4-93.3-88.1-93.3z" />
  </Svg>
);

export default SvgUsers;