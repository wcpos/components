import * as React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

import { useAnimatedStyle, withTiming, FadeInDown, runOnJS } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import useMeasure from '@wcpos/hooks/src/use-measure';
import Platform from '@wcpos/utils/src/platform';

import { Arrow } from './arrow';
import { usePopover } from './context';
import Footer from './footer';
import { isBottom, isLeft, isRight, isTop, getPopoverPosition, adjustPlacement } from './helpers';
import * as Styled from './styles';
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
	} = usePopover();
	const { MeasureWrapper, forceMeasure } = useMeasure({
		onMeasure: (val) => {
			contentMeasurements.value = val;
		},
	});

	/**
	 *
	 */
	const [adjustedPlacement, setAdjustedPlacement] = React.useState(placement);

	/**
	 *
	 */
	const containerStyle = useAnimatedStyle(() => {
		if (!targetMeasurements.value || !contentMeasurements.value) {
			return {}; // TODO why is measurements.value undefined in react-native.
		}

		const adjusted = adjustPlacement(
			placement,
			getPopoverPosition(
				placement,
				targetMeasurements.value,
				contentMeasurements.value,
				withinPortal
			),
			targetMeasurements.value,
			contentMeasurements.value,
			withinPortal
		);

		runOnJS(setAdjustedPlacement)(adjusted);

		// TODO - use `entering` when reanimated is stable
		const opacity = withTiming(1, { duration: 200 }, (isFinished) => {
			if (isFinished) {
				// animation finished
			}
		});

		const position = getPopoverPosition(
			adjusted,
			targetMeasurements.value,
			contentMeasurements.value,
			withinPortal
		);
		return { opacity, ...position };
	});

	/**
	 *
	 */
	return (
		<MeasureWrapper
			style={[
				{ position: 'absolute', zIndex: theme.zIndex.popover },
				{ width: matchWidth ? targetMeasurements.value.width || 100 : 'auto', opacity: 0 },
				containerStyle,
			]}
			entering={FadeInDown} // Reanimated LayoutAnimation doesn't work on web, yet
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
	);
};
