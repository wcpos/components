import * as React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

import {
	useAnimatedStyle,
	withDelay,
	withTiming,
	Easing,
	useSharedValue,
	FadeInDown,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import useMeasure from '@wcpos/hooks/src/use-measure';
import Platform from '@wcpos/utils/src/platform';

import { Arrow } from './arrow';
import { usePopover } from './context';
import Footer from './footer';
import {
	isPressInsideElement,
	isBottom,
	isLeft,
	isRight,
	isTop,
	getPopoverPosition,
	adjustPlacement,
} from './helpers';
import * as Styled from './styles';
import Backdrop from '../backdrop';
import ErrorBoundary from '../error-boundary';

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
	const theme = useTheme();
	const {
		contentMeasurements,
		matchWidth,
		onClose,
		placement,
		targetMeasurements,
		withArrow,
		withinPortal,
		clickThrough,
	} = usePopover();
	const [adjustedPlacement, setAdjustedPlacement] = React.useState(placement);

	/**
	 *
	 */
	const onMeasure = React.useCallback(
		(val) => {
			contentMeasurements.value = val;

			const adjusted = adjustPlacement(
				adjustedPlacement,
				getPopoverPosition(
					adjustedPlacement,
					targetMeasurements.value,
					contentMeasurements.value.width,
					contentMeasurements.value.height,
					withinPortal
				),
				targetMeasurements.value,
				contentMeasurements.value.width,
				contentMeasurements.value.height,
				withinPortal
			);

			if (adjusted !== adjustedPlacement) {
				setAdjustedPlacement(adjusted);
			}
		},
		[adjustedPlacement, contentMeasurements, targetMeasurements.value, withinPortal]
	);

	/**
	 *
	 */
	const { MeasureWrapper, forceMeasure } = useMeasure({ onMeasure });

	/**
	 * Positioning
	 */
	const positionStyle = useAnimatedStyle(() => {
		if (!targetMeasurements.value || !contentMeasurements.value) {
			return { left: 0, top: 0 }; // default initial position
		}

		const newPosition = getPopoverPosition(
			adjustedPlacement,
			targetMeasurements.value,
			contentMeasurements.value.width,
			contentMeasurements.value.height,
			withinPortal
		);

		// Update contentMeasurements.value with new position values
		contentMeasurements.value.pageX = newPosition.left;
		contentMeasurements.value.pageY = newPosition.top;

		return newPosition;
	});

	/**
	 * Fade in animation
	 */
	const opacity = useSharedValue(0);

	React.useEffect(() => {
		opacity.value = withTiming(1, { duration: 200, easing: Easing.inOut(Easing.ease) });
	}, [opacity]);

	const fadeInStyle = useAnimatedStyle(() => {
		return {
			opacity: opacity.value,
		};
	});

	/**
	 *
	 */
	return (
		<Backdrop
			onPress={() => {
				onClose && onClose();
			}}
			invisible
			clickThrough={clickThrough}
		>
			<MeasureWrapper
				style={[
					{ position: 'absolute', zIndex: theme.zIndex.popover },
					{ width: matchWidth ? targetMeasurements.value.width || 100 : 'auto' },
					positionStyle,
					fadeInStyle,
				]}
				// entering={FadeInDown} // Reanimated LayoutAnimation doesn't work on web, yet
			>
				{withArrow && (isBottom(adjustedPlacement) || isRight(adjustedPlacement)) && (
					<Arrow placement={adjustedPlacement} style={style} />
				)}

				<Styled.RaisedBox>
					<Styled.Popover
						// ref={focusTrapRef}
						/**
						 * FIXME: `max-content` is not supported in react-native
						 */
						style={[
							{ width: matchWidth ? '100%' : Platform.isNative ? 'auto' : 'max-content' },
							{ zIndex: 2 }, // NOTE: This is to make sure the popover is above the footer
							style,
						]}
					>
						<ErrorBoundary>{children}</ErrorBoundary>
					</Styled.Popover>
					<Footer />
				</Styled.RaisedBox>

				{withArrow && (isTop(adjustedPlacement) || isLeft(adjustedPlacement)) && (
					<Arrow placement={adjustedPlacement} style={style} />
				)}
			</MeasureWrapper>
		</Backdrop>
	);
};
