import * as React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

import * as Styled from './styles';
import Backdrop from '../backdrop';
import Box from '../box';
import ErrorBoundary from '../error-boundary';

import type { ModalContentProps } from './content';
import type { ModalFooterProps } from './footer';
import type { ModalHeaderProps } from './header';

/**
 *
 */
export interface ModalContainerProps {
	/** Modal body width */
	children: (React.ReactElement<ModalHeaderProps | ModalContentProps | ModalFooterProps> | null)[];

	/** Modal body width */
	size?: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge';

	/** Set false to hide the backdrop */
	withBackdrop?: boolean;

	/** Modal body style */
	style?: StyleProp<ViewStyle>;
}

/**
 *
 */
const sizes = {
	xSmall: 320,
	small: 380,
	medium: 440,
	large: 620,
	xLarge: 780,
	xxLarge: 900,
};

/**
 *
 */
export const Container = ({
	children,
	size = 'medium',
	withBackdrop = true,
	style,
}: ModalContainerProps) => {
	const width = sizes[size];

	/**
	 *
	 */
	const MaybeBackdrop = withBackdrop ? Backdrop : React.Fragment;

	/**
	 *
	 */
	return (
		<MaybeBackdrop
		// style={{ zIndex: theme.zIndex.modal }}
		>
			<Box
				raised
				rounding="medium"
				style={[
					{
						width,
						maxWidth: '95%',
						backgroundColor: 'white',
						maxHeight: '90%',
					},
					style,
				]}
			>
				<ErrorBoundary>{children}</ErrorBoundary>
			</Box>
		</MaybeBackdrop>
	);
};
