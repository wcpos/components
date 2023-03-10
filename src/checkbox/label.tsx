import * as React from 'react';

import Box from '../box';
import Text from '../text';

type Props = {
	/**  */
	children?: React.ReactNode;

	/**  */
	checked?: boolean;

	/**  */
	info?: React.ReactNode;

	/**  */
	size: import('@wcpos/themes').FontSizeTypes;
};

const Label = ({ children, checked, info, size }: Props) => {
	const label = typeof children === 'string' ? <Text size={size}>{children}</Text> : children;

	return (
		<Box space="small">
			{label}
			{info && <Text>{info}</Text>}
		</Box>
	);
};

export default Label;
