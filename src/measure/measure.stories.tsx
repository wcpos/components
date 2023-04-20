import * as React from 'react';
import { View } from 'react-native';

import Measure from '.';
import Text from '../text';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Measure> = {
	title: 'Components/Measure',
};

export const basicUsage = () => {
	const [measurements, onMeasure] = React.useState();

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Measure onMeasure={onMeasure}>
				<View>
					<Text>
						height:
						{measurements?.height}
					</Text>
					<Text>
						pageX:
						{measurements?.pageX}
					</Text>
					<Text>
						pageY:
						{measurements?.pageY}
					</Text>
					<Text>
						width:
						{measurements?.width}
					</Text>
					<Text>
						x:
						{measurements?.x}
					</Text>
					<Text>
						y:
						{measurements?.y}
					</Text>
				</View>
			</Measure>
		</View>
	);
};

export default meta;
