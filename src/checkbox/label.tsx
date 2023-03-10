import * as React from 'react';

import Box from '../box';
import Text from '../text';

export interface CheckboxLabelProps {
	/**  */
	children?: React.ReactNode;

	/**  */
	checked?: boolean;

	/**  */
	info?: React.ReactNode;

	/**  */
	size: import('@wcpos/themes').FontSizeTypes;

	/**  */
	type: import('@wcpos/themes').ColorTypes;
}

const Label = ({ children, checked, info, size, type }: CheckboxLabelProps) => {
	const label =
		typeof children === 'string' ? (
			<Text size={size} type={type}>
				{children}
			</Text>
		) : (
			children
		);

	return (
		<Box space="small">
			{label}
			{info && <Text>{info}</Text>}
		</Box>
	);
};

export default Label;
