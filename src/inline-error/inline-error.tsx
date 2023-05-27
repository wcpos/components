import React from 'react';

import Box from '../box';
import Icon from '../icon';
import Text from '../text';

export interface InlineErrorProps {
	/** Error message. */
	message: string;

	/** Size */
	size?: import('@wcpos/themes').FontSizeTypes;
}

/**
 *
 */
export const InlineError = ({ message, size = 'normal' }: InlineErrorProps) => (
	<Box horizontal space="xSmall" align="center">
		<Icon name="triangleExclamation" type="critical" size={size} />
		<Text type="critical" size={size}>
			{message}
		</Text>
	</Box>
);
