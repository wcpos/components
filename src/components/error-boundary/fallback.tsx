import * as React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { View, Text } from 'react-native';
import Icon from '../icon';
import Button from '../button';

/**
 *
 */
const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => (
	<View>
		<Icon name="error" />
		<Text>Error Boundary Fallback</Text>
		{/* <p>We're sorry — something's gone wrong.</p>
		<p>Our team has been notified, but click here fill out a report.</p> */}
		{/* {error && (
			<pre>
				{error.toString()}
				<br />
				<br />
				This is located at: {componentStack}
			</pre>
		)} */}
		<Text>Something went wrong:</Text>
		<Text>{error.message}</Text>
		{/* <Text>{componentStack}</Text> */}
		<Button onPress={resetErrorBoundary} title="Try again" />
	</View>
);

export default Fallback;
