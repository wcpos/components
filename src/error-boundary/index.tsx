import * as React from 'react';
import {
	ErrorBoundary,
	ErrorBoundaryPropsWithComponent,
	FallbackProps,
} from 'react-error-boundary';
import Fallback from './fallback';

type Props = Omit<ErrorBoundaryPropsWithComponent, 'FallbackComponent'> & {
	FallbackComponent?: React.ComponentType<FallbackProps>;
};

const Boundary = (props: Props) => {
	return <ErrorBoundary {...props} FallbackComponent={props.FallbackComponent || Fallback} />;
};

export default Boundary;
