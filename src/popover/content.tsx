import * as React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

import Animated, { useAnimatedStyle, withTiming, FadeInDown } from 'react-native-reanimated';

import useFocusTrap from '@wcpos/hooks/src/use-focus-trap';
import useMeasure, { Measurements } from '@wcpos/hooks/src/use-measure';
import useMergedRef from '@wcpos/hooks/src/use-merged-ref';
import usePressOutside from '@wcpos/hooks/src/use-press-outside';

import { Arrow } from './arrow';
import { PopoverContext } from './context';
import {
	PopoverPlacement,
	isBottom,
	isLeft,
	isRight,
	isTop,
	getPopoverPosition,
} from './placements';
import * as Styled from './styles';
import Portal from '../portal';

/**
 *
 */
export interface PopoverContentProps {
	/** The content of the Popover. */
	children: React.ReactNode;

	style?: StyleProp<ViewStyle>;
}

/**
 *
 */
export const Content = ({ children, style }: PopoverContentProps) => {
	const {
		closeOnPressOutside,
		contentMeasurements,
		matchWidth,
		onClose,
		placement,
		targetMeasurements,
		withArrow,
		withinPortal,
	} = React.useContext(PopoverContext);
	const ref = React.useRef<Animated.View>(null);
	const onMeasure = (val: Measurements) => {
		contentMeasurements.value = val;
	};

	const { measurements, onLayout, forceMeasure } = useMeasure({ ref, onMeasure });
	// const focusTrapRef = useFocusTrap();
	const pressRef = usePressOutside(() => {
		if (closeOnPressOutside) {
			onClose && onClose();
		}
	});

	const mergedRef = useMergedRef(ref, pressRef);

	/**
	 *
	 */
	const containerStyle = useAnimatedStyle(() => {
		if (!targetMeasurements.value || !contentMeasurements.value) {
			return {}; // @TODO why is measurements.value undefined in react-native.
		}

		// @TODO - use `entering` when reanimated is stable
		const opacity = withTiming(1, { duration: 200 });
		const position = getPopoverPosition(
			placement,
			targetMeasurements.value,
			contentMeasurements.value,
			withinPortal
		);
		return { opacity, ...position };
	});

	/**
	 *
	 */
	const MaybePortal = withinPortal ? Portal : React.Fragment;

	return (
		<MaybePortal {...(withinPortal ? { keyPrefix: 'Popover' } : {})}>
			<Styled.Container
				ref={mergedRef}
				as={Animated.View}
				style={[
					{ width: matchWidth ? targetMeasurements.value.width : 'auto', opacity: 0 },
					containerStyle,
				]}
				onLayout={onLayout}
				entering={FadeInDown} // Reanimated LayoutAnimation doesn't work on web, yet
			>
				{withArrow && (isBottom(placement) || isRight(placement)) && (
					<Arrow placement={placement} style={style} />
				)}

				<Styled.Popover
					// ref={focusTrapRef}
					style={[{ width: matchWidth ? '100%' : 'max-content' }, style]}
				>
					{children}
				</Styled.Popover>

				{withArrow && (isTop(placement) || isLeft(placement)) && (
					<Arrow placement={placement} style={style} />
				)}
			</Styled.Container>
		</MaybePortal>
	);
};
