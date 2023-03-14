import * as React from 'react';

import Box from '../box';
import Icon from '../icon';
import Text from '../text';

interface CollapsibleHeaderProps {
	/**
	 *
	 */
	title: string | React.ReactNode;
	/**
	 *
	 */
	size?: import('@wcpos/themes').FontSizeTypes;
	/**
	 *
	 */
	open: boolean;
}

export const CollapsibleHeader = ({ open, size = 'normal', ...props }: CollapsibleHeaderProps) => {
	const icon = open ? 'caretUp' : 'caretDown';
	const title =
		typeof props.title === 'string' ? <Text size={size}>{props.title}</Text> : props.title;

	return (
		<Box fill marginBottom="normal" borderBottom="border">
			<Box horizontal space="small" paddingBottom="small" align="center">
				<Box>{title}</Box>
				<Icon name={icon} />
			</Box>
		</Box>
	);
};
