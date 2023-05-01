import * as React from 'react';

import uniqueId from 'lodash/uniqueId';
import wrap from 'lodash/wrap';

import { SnackbarProps, Snackbar } from './snackbar';
import Box from '../box';
import ErrorBoundary from '../error-boundary';

const SnackbarListBase = (_, ref) => {
	const [snackbarOptions, setSnackbarOptions] = React.useState<SnackbarProps[]>([]);

	/**
	 *
	 */
	React.useImperativeHandle(ref, () => ({
		add(options: SnackbarProps): void {
			options.onDismiss = wrap(options.onDismiss, (origOnDismiss, id) => {
				origOnDismiss?.(id);
				setSnackbarOptions((prev) => prev.filter((s) => s.id !== id));
			}) as () => void;

			// add unique id to the options
			options.id = uniqueId('snackbar-');
			setSnackbarOptions((prev) => [...prev, options]);
		},
	}));

	if (snackbarOptions.length === 0) {
		return null;
	}

	/**
	 * Simple fade in/out animation
	 */

	return (
		<Box space="small" style={{ width: '100%' }}>
			{snackbarOptions.map((opts, index) => (
				<ErrorBoundary key={opts.id}>
					<Snackbar {...opts} />
				</ErrorBoundary>
			))}
		</Box>
	);
};

export const SnackbarList = React.forwardRef(SnackbarListBase);
