import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgTruck = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <Path d="M368 0c26.5 0 48 21.49 48 48v48h50.7c17 0 32.4 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c0 53-43 96-96 96-53.9 0-96-43-96-96H256c0 53-43 96-96 96-53.9 0-96-43-96-96H48c-26.51 0-48-21.5-48-48V48C0 21.49 21.49 0 48 0h320zm48 160v96h128v-18.7L466.7 160H416zM160 368c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm320 96c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z" />
  </Svg>
);

export default SvgTruck;
