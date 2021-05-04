import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { StoryWrapper } from '@storybook/addons';
import Icon from '@wcpos/common/src/components/icon';
import Button from '@wcpos/common/src/components/button';
import { AppProviderSizeProvider } from '@wcpos/common/src/hooks/use-position-in-app';
import { Popover, PopoverProps } from './popover';
import Portal from '../portal';

/**
 * Popovers require
 * - SafeAreaProvider
 * - Portals
 * - AppProviderSizeProvider
 */
const AppProvider: StoryWrapper = (Story, context) => {
	return (
		<SafeAreaProvider>
			<AppProviderSizeProvider>
				<Portal.Provider>
					<Story {...context} />
					<Portal.Manager />
				</Portal.Provider>
			</AppProviderSizeProvider>
		</SafeAreaProvider>
	);
};

export default {
	title: 'Components/Popover',
	component: Popover,
	subcomponents: { 'Popover.Item': Popover.Item },
	decorators: [AppProvider],
	parameters: {
		chromatic: { pauseAnimationAtEnd: true, delay: 300 },
	},
};

export const BasicUsage: React.FC<PopoverProps> = (props) => {
	const [visible, setVisible] = React.useState(false);

	return (
		<View style={{ width: 600, height: 600 }}>
			<View style={{ width: 300, height: 300 }}>
				<Popover
					{...props}
					open={visible}
					onRequestClose={() => setVisible(false)}
					activator={<Button title="Open" onPress={() => setVisible(true)} />}
				/>
			</View>
		</View>
	);
};
BasicUsage.args = {
	placement: 'left-end',
	actions: [
		{ label: 'Edit', action: action('Option selected: Edit'), icon: 'edit' },
		{
			label: 'Link',
			action: action('Option selected: Link'),
			icon: 'link',
			color: 'accent',
		},
	],
};
BasicUsage.argTypes = {
	open: { control: null },
	children: { control: null },
	activator: { control: null },
};

export const UsingChildrenItems: React.FC<PopoverProps> = () => {
	const [visible, setVisible] = React.useState(false);

	return (
		<View>
			<Popover
				open={visible}
				onRequestClose={() => setVisible(false)}
				activator={<Button title="more" onPress={() => setVisible(true)} />}
			>
				<Popover.Item label="Edit" icon="edit" onSelect={action('Edit selected')} />
				<Popover.Item
					label="Unlink"
					icon="link"
					iconColor="accent"
					onSelect={action('Unlink selected')}
				/>
			</Popover>
		</View>
	);
};

export const MatchWidth: React.FC = () => {
	const [visible, setVisible] = React.useState(false);

	return (
		<View>
			<Popover
				matchWidth
				open={visible}
				onRequestClose={() => setVisible(false)}
				activator={<Button onPress={() => setVisible(true)}>Show Popover</Button>}
				actions={[
					{ label: 'A pizza', action: action('Option selected: A pizza') },
					{ label: 'A taco', action: action('Option selected: A taco') },
				]}
			/>
		</View>
	);
};

export const AboveActivatorAndHideBackdrop: React.FC = () => {
	const [visible, setVisible] = React.useState(false);

	return (
		<View>
			<Popover
				aboveActivator
				hideBackdrop
				placement="bottom-end"
				open={visible}
				onRequestClose={() => setVisible(false)}
				activator={<Button title="more" onPress={() => setVisible(true)} />}
				actions={[
					{ label: 'A pizza', action: action('Option selected: A pizza') },
					{ label: 'A taco', action: action('Option selected: A taco') },
				]}
			/>
		</View>
	);
};

export const AutomaticPlacementCorrection: React.FC<PopoverProps> = () => {
	const [visible, setVisible] = React.useState(false);

	return (
		<View>
			<Popover
				open={visible}
				onRequestClose={() => setVisible(false)}
				activator={<Button onPress={() => setVisible(true)}>Show Popover</Button>}
				actions={[
					{ label: 'A pizza', action: action('Option selected: A pizza') },
					{ label: 'A taco', action: action('Option selected: A taco') },
				]}
			/>
		</View>
	);
};

AutomaticPlacementCorrection.story = {
	parameters: {
		docs: {
			storyDescription:
				'The Popover will automatically replace itself so it does not go outside the Window. In this example, the Popover should be displayed below button, but instead goes on top of it.',
		},
	},
};

// export const CustomContent: React.FC<PopoverProps> = () => {
// 	const [visible, setVisible] = React.useState(false);

// 	return (
// 		<Screen>
// 			<Box fill distribution="center">
// 				<Popover
// 					open={visible}
// 					onRequestClose={() => setVisible(false)}
// 					activator={<Button onPress={() => setVisible(true)}>Show Popover</Button>}
// 				>
// 					<Box padding="medium" space="large">
// 						<TextContainer>
// 							<DisplayText>Custom content</DisplayText>
// 							<BodyText>{LOREM_IPSUM}</BodyText>
// 						</TextContainer>
// 						<Button onClick={action('Button clicked')}>Click me!</Button>
// 					</Box>
// 				</Popover>
// 			</Box>
// 		</Screen>
// 	);
// };
