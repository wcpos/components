import * as React from 'react';
import { View } from 'react-native';
import { Tabs, TabsProps } from './tabs';
import Text from '../text';

export default {
	title: 'Components/Tabs',
	component: Tabs,
};

const FirstRoute = () => <View style={{ backgroundColor: '#ff4081', width: 100, height: 100 }} />;

const SecondRoute = () => <View style={{ backgroundColor: '#673ab7', width: 100, height: 100 }} />;

const Default = () => <View style={{ backgroundColor: '#000000', width: 100, height: 100 }} />;

const renderScene = ({ route }) => {
	switch (route.key) {
		case 'first':
			return <FirstRoute />;
		case 'second':
			return <SecondRoute />;
		default:
			return <Default />;
	}
};

const routes = [
	{ key: 'first', title: 'First' },
	{ key: 'second', title: 'Second' },
];

export const BasicUsage = (props: TabsProps<typeof routes[number]>) => {
	const [index, setIndex] = React.useState(0);

	return (
		<Tabs<typeof routes[number]>
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			{...props}
		/>
	);
};

export const Scrollable = (props: TabsProps) => {
	const [index, setIndex] = React.useState(0);

	return (
		<View style={{ width: '100%', overflow: 'hidden' }}>
			<Tabs<typeof routes[number]>
				navigationState={{ index, routes: props.routes }}
				renderScene={({ route }) => (
					<View style={{ backgroundColor: '#000000', width: '100%', height: 100 }}>
						<Text type="inverse">{route.title}</Text>
					</View>
				)}
				onIndexChange={setIndex}
				{...props}
			/>
		</View>
	);
};
Scrollable.args = {
	routes: [
		{ key: 'first', title: 'First' },
		{ key: 'second', title: 'Second' },
		{ key: 'third', title: 'Third' },
		{ key: 'fourth', title: 'Fourth' },
		{ key: 'fifth', title: 'Fifth' },
		{ key: 'sixth', title: 'Sixth' },
		{ key: 'seventh', title: 'Seventh' },
		{ key: 'eighth', title: 'Eighth' },
		{ key: 'ninth', title: 'Ninth' },
		{ key: 'tenth', title: 'Tenth' },
	],
};
