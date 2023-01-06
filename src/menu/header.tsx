import * as React from 'react';

import Box from '../box';
import Text from '../text';

export const Header = ({ children }: { children: string }) => {
	return (
		<Box padding="small">
			<Text size="small" type="secondary" uppercase>
				{children}
			</Text>
		</Box>
	);
};
