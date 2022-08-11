import * as React from 'react';
import { useTheme } from 'styled-components/native';
import useTimeout from '@wcpos/hooks/src/use-timeout';
import Box from '../box';
import Text from '../text';
import Button from '../button';
import Icon from '../icon';

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
	shorter: 2500,
	default: 4000,
	longer: 6000,
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

	/**
	 *
	 */
	const dismiss = React.useCallback(() => {
		onDismiss(id);
	}, [id, onDismiss]);

	/**
	 * Auto dismiss the Snackbar after a certain amount of time.
	 */
	useTimeout(dismiss, durationValues[duration]);

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
	return (
		<Box
			paddingX="medium"
			paddingY="small"
			space="medium"
			rounding="large"
			style={{ backgroundColor: type ? theme.colors[type] : theme.colors.headerBackground }}
			horizontal
			align="center"
			pointerEvents="auto"
		>
			<Text type="inverse">{message}</Text>
			{action ? (
				<Button type="primary" size="small" onPress={onActionClick}>
					{action.label}
				</Button>
			) : null}
			{dismissable ? <Icon type="inverse" name="xmark" onPress={dismiss} /> : null}
		</Box>
	);
};
