import * as React from 'react';

import useFocusTrap from '@wcpos/hooks/src/use-focus-trap';
import Platform from '@wcpos/utils/src/platform';

import Box from '../box';
import ErrorBoundary from '../error-boundary';
import ScrollView from '../scrollview';

/**
 *
 */
export interface ModalContentProps {
	/** */
	children: React.ReactNode;
}

/**
 *
 */
export const Content = ({ children }: ModalContentProps) => {
	const focusTrapRef = useFocusTrap();

	return (
		<Box
			padding="medium"
			// - this causes problem on iOS
			// TODO - test with ScrollView contentContainerStyle
			style={[
				Platform.isNative ? undefined : { flex: 1 },
				{ zIndex: 2 }, // same as Popover, make sure content is above the footer
			]}
		>
			<ScrollView ref={focusTrapRef} contentContainerStyle={{ flexBasis: '100%' }}>
				<ErrorBoundary>{children}</ErrorBoundary>
			</ScrollView>
		</Box>
	);
};
