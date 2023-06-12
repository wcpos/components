import * as React from 'react';

import Box from '../box';
import Loader from '../loader';

const LoadingRow = () => {
	return (
		<Box padding="small">
			<Loader />
		</Box>
	);
};

export default LoadingRow;
