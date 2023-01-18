import * as React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

import * as Styled from './styles';
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
	size?: string | number;

	/** Modal body style */
	style?: StyleProp<ViewStyle>;
}

/**
 *
 */
export const Container = ({ children, size, style }: ModalContainerProps) => {
	return (
		<Styled.Container>
			<Box
				raised
				rounding="medium"
				style={[
					{
						// width: '100%', size
						// maxWidth: '80%',
						backgroundColor: 'white',
						// maxHeight: '80%',
					},
					style,
				]}
			>
				<ErrorBoundary>{children}</ErrorBoundary>
			</Box>
		</Styled.Container>
	);
};
