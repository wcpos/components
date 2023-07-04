import * as React from 'react';
import { StyleProp, ViewProps } from 'react-native';

import Svg, { Path, G, Defs, Use, Symbol, SvgProps } from 'react-native-svg';

interface Props extends SvgProps {
	animate?: boolean;
}

const Logo: React.FC<Props> = ({ animate, width = 100, height = 100, ...props }) => {
	// const scaleY = React.useRef(new Animated.Value(1));

	// const pulse = () => {
	// 	Animated.loop(
	// 		Animated.sequence([
	// 			Animated.timing(scaleY.current, { toValue: 0.7, useNativeDriver: true }),
	// 			Animated.timing(scaleY.current, { toValue: 1, useNativeDriver: true }),
	// 		])
	// 	).start();
	// };

	// React.useEffect(() => {
	// 	if (animate) {
	// 		pulse();
	// 	} else {
	// 		scaleY.current.stopAnimation();
	// 	}
	// }, [animate]);

	return (
		<Svg viewBox="0 0 1260 1260" width={width} height={height} {...props}>
			<Path
				d="m0,90q0,-90 90,-90l1080,0q90,0 90,90l0,810q0,90 -90,90l-810,0l-360,270l0,-1170z"
				fill="#323A46"
			/>
			<G fill="#CD2C24">
				<Path d="m0,90q0,-90 90,-90l90,0l0,270a90,90 0 1 1 -180,0l0,-180zm360,-90l180,0l0,270a90,90 0 1 1 -180,0l0,-270zm360,0l180,0l0,270a90,90 0 1 1 -180,0l0,-270zm360,0l90,0q90,0 90,90l0,180a90,90 0 1 1 -180,0l0,-270z" />
			</G>
			<G fill="#F5E5C0">
				<Path d="m180,0l180,0l0,270a90,90 0 1 1 -180,0l0,-270zm360,0l180,0l0,270a90,90 0 1 1 -180,0l0,-270zm360,0l180,0l0,270a90,90 0 1 1 -180,0l0,-270z" />
			</G>
			<Path
				d="m130,923.5l0,-391.5m0,130.5a130.5,130.5 0 1 0 261,0a130.5,130.5 0 1 0 -261,0"
				fill="#FFF"
				fill-opacity="0"
				stroke="#FFF"
				stroke-linecap="round"
				stroke-width="55"
			/>
			<Path
				d="m630,531m-131,131a131,131 0 1 0 262,0a131,131 0 1 0 -262,0"
				fill="#FFF"
				fill-opacity="0"
				stroke="#FFF"
				stroke-linecap="round"
				stroke-width="55"
			/>
			<Path
				d="m1131,565.8c-21.75,-13.05 -65.25,-34.8 -130.5,-34.8q-130.5,0 -130.5,65.25t130.5,65.25t130.5,65.25t-130.5,65.25c-65.25,0 -108.75,-21.75 -130.5,-34.8"
				fill="#FFF"
				fill-opacity="0"
				stroke="#FFF"
				stroke-linecap="round"
				stroke-width="55"
			/>
		</Svg>
	);
};

export default Logo;
