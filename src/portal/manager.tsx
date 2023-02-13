import * as React from 'react';

import values from 'lodash/values';

import { PortalContext } from './provider';
import ErrorBoundary from '../error-boundary';

const Manager = () => {
	const { components } = React.useContext(PortalContext);
	return <ErrorBoundary>{values(components)}</ErrorBoundary>;
};

export default Manager;
