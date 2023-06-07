import * as React from 'react';

import { action } from '@storybook/addon-actions';
import Animated, {
	useAnimatedGestureHandler,
	useSharedValue,
	useAnimatedStyle,
	withSpring,
} from 'react-native-reanimated';

import { Draggable, DraggableProps } from './draggable';
import Icon from '../icon';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Draggable> = {
	title: 'Components/Draggable',
	component: Draggable,
};

export const BasicUsage = (props: DraggableProps) => {
	const posX = useSharedValue(0);
	const posY = useSharedValue(0);

	const onStart = (event, ctx) => {
		ctx.posX = posX.value;
		ctx.posY = posY.value;
		props.onStart(event, ctx);
	};

	const onActive = (event, ctx) => {
		posX.value = ctx.posX + event.translationX;
		posY.value = ctx.posY + event.translationY;
		props.onActive(event, ctx);
	};

	const onEnd = (event, ctx) => {
		posX.value = withSpring(0);
		posY.value = withSpring(0);
		props.onEnd(event, ctx);
	};

	const positionStyle = useAnimatedStyle(() => ({
		transform: `translateX(${posX.value}px) translateY(${posY.value}px)`,
	}));

	return (
		<Draggable onStart={onStart} onActive={onActive} onEnd={onEnd}>
			<Animated.View style={[{ width: 120, height: 120, backgroundColor: 'red' }, positionStyle]} />
		</Draggable>
	);
};
BasicUsage.args = {
	onStart: action('Start'),
	onActive: action('Active'),
	onEnd: action('End'),
};

export const ColumnResize = (props: DraggableProps) => {
	const posX = useSharedValue(0);

	const onStart = (event, ctx) => {
		ctx.posX = posX.value;
		props.onStart(event, ctx);
	};
	const onActive = (event, ctx) => {
		posX.value = ctx.posX + event.translationX;
		props.onActive(event, ctx);
	};

	const onEnd = (event, ctx) => {
		// posX.value = withSpring(0);
		props.onEnd(event, ctx);
	};

	const positionStyle = useAnimatedStyle(() => ({
		transform: `translateX(${posX.value}px)`,
	}));

	return (
		<Draggable onStart={onStart} onActive={onActive} onEnd={onEnd}>
			<Animated.View style={positionStyle}>
				<Icon name="more-vert" />
			</Animated.View>
		</Draggable>
	);
};
ColumnResize.args = {
	onStart: action('Start'),
	onActive: action('Active'),
	onEnd: action('End'),
};

export default meta;
