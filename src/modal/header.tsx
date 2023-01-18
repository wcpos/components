import * as React from 'react';

import Box from '../box';
import Icon from '../icon';
import Text from '../text';

/**
 *
 */
export interface ModalHeaderProps {
	/** Modal title, displayed in header before close button */
	children: React.ReactNode;

	/** Called when close button clicked and when escape key is pressed */
	onClose(): void;
}

/**
 *
 */
export const Header = ({ children, onClose }: ModalHeaderProps) => {
	const title = React.isValidElement(children) ? (
		children
	) : (
		<Text size="large" weight="medium">
			{children}
		</Text>
	);

	return (
		<Box horizontal padding="medium" space="medium" paddingBottom="none">
			<Box fill>{title}</Box>
			<Box>
				<Icon name="xmark" onPress={onClose} />
			</Box>
		</Box>
	);
};
