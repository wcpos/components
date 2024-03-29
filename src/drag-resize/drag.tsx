import * as React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
	runOnJS,
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';

import Icon from '../icon';

const clamp = (value: number, lowerBound: number, upperBound: number) => {
	'worklet';

	return Math.min(Math.max(lowerBound, value), upperBound);
};

export type Response = {
	x: number;
	y: number;
	width: number;
	height: number;
};

export type DragProps = {
	x: number;
	y: number;
	limitationHeight: number;
	limitationWidth: number;
	height?: number;
	width?: number;
	minHeight?: number;
	minWidth?: number;
	onDragEnd: (response: Response) => void;
	onResizeEnd: (response: Response) => void;
	children: any;
	resizable?: boolean;
	draggable?: boolean;
	resizerImageSource?: ImageSourcePropType;
};

export function Drag(props: DragProps) {
	const {
		x,
		y,
		limitationHeight,
		limitationWidth,
		height = 100,
		width = 100,
		minHeight = height / 2,
		minWidth = width / 2,
		onDragEnd,
		onResizeEnd,
		children,
		resizable = true,
		draggable = true,
		resizerImageSource = require('./resize.png'),
	} = props;

	const xRef = React.useRef(x);
	const yRef = React.useRef(y);
	const heightRef = React.useRef(height);
	const widthRef = React.useRef(width);
	const boxX = useSharedValue(0);
	const boxY = useSharedValue(0);
	const boxHeight = useSharedValue(heightRef.current ?? 100);
	const boxWidth = useSharedValue(widthRef.current ?? 100);

	React.useEffect(() => {
		boxX.value = withTiming(xRef.current);
		boxY.value = withTiming(yRef.current);
	}, [boxX, boxY]);

	const gestureHandler = useAnimatedGestureHandler({
		onStart: (_ev, ctx: any) => {
			ctx.offsetX = boxX.value;
			ctx.offsetY = boxY.value;
		},
		onActive: (ev, ctx: any) => {
			if (!draggable) {
				return;
			}
			boxX.value = clamp(ctx.offsetX + ev.translationX, 0, limitationWidth - boxWidth.value);
			boxY.value = clamp(ctx.offsetY + ev.translationY, 0, limitationHeight - boxHeight.value);
		},
		onFinish: () => {
			if (onDragEnd) {
				runOnJS(onDragEnd)({
					x: boxX.value,
					y: boxY.value,
					height: boxHeight.value,
					width: boxWidth.value,
				});
			}
		},
	});

	const resizeHandler = useAnimatedGestureHandler({
		onStart: (_ev, ctx: any) => {
			ctx.boxWidth = boxWidth.value;
			ctx.boxHeight = boxHeight.value;
			ctx.offsetX = boxX.value;
			ctx.offsetY = boxY.value;
		},
		onActive: (ev, ctx: any) => {
			if (!resizable) {
				return;
			}
			boxWidth.value = clamp(
				ctx.boxWidth + ev.translationX,
				minWidth,
				limitationWidth - boxX.value
			);
			boxHeight.value = clamp(
				ctx.boxHeight + ev.translationY,
				minHeight,
				limitationHeight - boxY.value
			);
		},
		onFinish: () => {
			'worklet';

			if (onResizeEnd) {
				runOnJS(onResizeEnd)({
					x: boxX.value,
					y: boxY.value,
					height: boxHeight.value,
					width: boxWidth.value,
				});
			}
		},
	});

	const animatedStyle = useAnimatedStyle(() => ({
		transform: `translateX(${boxX.value}px) translateY(${boxY.value}px)`,
		height: `${boxHeight.value}px`,
		width: `${boxWidth.value}px`,
		position: 'absolute',
	}));

	const styles = React.useMemo(
		() =>
			StyleSheet.create({
				resizeBoxStyle: {
					position: 'absolute',
					zIndex: 1,
					right: -28 / 4,
					bottom: -28 / 4,
				},
				imageStyle: {
					height: 28,
					width: 28,
				},
			}),
		[]
	);

	return (
		<PanGestureHandler onGestureEvent={gestureHandler}>
			<Animated.View style={animatedStyle}>
				<PanGestureHandler onGestureEvent={resizeHandler}>
					<Animated.View style={styles.resizeBoxStyle}>
						<Icon name="resize" />
					</Animated.View>
				</PanGestureHandler>
				{children}
			</Animated.View>
		</PanGestureHandler>
	);
}
