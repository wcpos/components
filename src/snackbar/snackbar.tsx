import * as React from 'react';

import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	Easing,
	interpolate,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import Box from '../box';
import Button from '../button';
import Icon from '../icon';
import Text from '../text';

export interface SnackbarProps {
	/**
	 * Unique identifier for the snackbar.
	 */
	id: string;
	/**
	 * Message to display on the Snackbar.
	 */
	message: string;
	/**
	 * Optional action. Clicking it will dismiss the Snackbar.
	 */
	action?: { label: string; action?: () => void };
	/**
	 * Duration the Snackbar is displayed.
	 */
	duration?: 'default' | 'longer';
	/**
	 * Function to call when the Snackbar is dismissed.
	 */
	onDismiss: (id: string) => void;
	/**
	 * Function to call when the Snackbar is dismissed.
	 */
	dismissable?: boolean;
	/**
	 * Changes the background color of the Snackbar.
	 */
	type?: import('@wcpos/themes').ColorTypes;
}

const durationValues = {
	shorter: 4000,
	default: 7000,
	longer: 10000,
};

export const Snackbar = ({
	id,
	message,
	action,
	duration = 'default',
	onDismiss,
	dismissable = true,
	type,
}: SnackbarProps) => {
	const theme = useTheme();
	const progress = useSharedValue(0);

	/**
	 *
	 */
	const dismiss = React.useCallback(() => {
		onDismiss(id);
	}, [id, onDismiss]);

	/**
	 * Auto dismiss the Snackbar after a certain amount of time.
	 */
	// useTimeout(dismiss, durationValues[duration]);

	/**
	 *
	 */
	const onActionClick = React.useCallback(() => {
		if (action && action.action) {
			action.action();
		}
		dismiss(); // Dismiss when user clicks action
	}, [action, dismiss]);

	/**
	 *
	 */
	React.useEffect(() => {
		progress.value = withTiming(1, {
			duration: 300,
			easing: Easing.bezier(0.0, 0.0, 0.58, 1.0),
		});

		const timer = setTimeout(() => {
			onDismiss?.(id);
		}, durationValues[duration] || durationValues['default']);

		return () => {
			clearTimeout(timer);
		};
	}, [duration, id, onDismiss, progress]);

	/**
	 *
	 */
	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: `translateX(${interpolate(progress.value, [0, 1], [-100, 0])}px)`,
			opacity: progress.value,
		};
	});

	/**
	 *
	 */
	return (
		<Animated.View style={[{ flexDirection: 'row' }, animatedStyle]}>
			<Box
				paddingX="medium"
				paddingY="small"
				space="medium"
				rounding="large"
				style={{
					backgroundColor: type ? theme.colors[type] : theme.colors.headerBackground,
					maxWidth: 'fit-content',
					pointerEvents: 'auto',
				}}
				horizontal
				align="center"
			>
				<Text type="inverse" style={{ flexWrap: 'wrap', display: 'flex', wordBreak: 'break-all' }}>
					{message}
				</Text>
				{action ? (
					<Button type="primary" size="small" onPress={onActionClick}>
						{action.label}
					</Button>
				) : null}
				{dismissable ? <Icon type="inverse" name="xmark" onPress={dismiss} /> : null}
			</Box>
		</Animated.View>
	);
};
