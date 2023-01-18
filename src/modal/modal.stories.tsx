import * as React from 'react';
import { View } from 'react-native';

import { action } from '@storybook/addon-actions';
import { StoryWrapper } from '@storybook/addons';

import { Container } from './container';
import { Content } from './content';
import { Footer } from './footer';
import { Header } from './header';
import { Modal, ModalProps } from './modal';
import Button from '../button';
import Icon from '../icon';
import Portal from '../portal';
import Text from '../text';

/**
 * Modal require
 * - Portals
 */
const AppProvider: StoryWrapper = (Story, context) => {
	return (
		<Portal.Provider>
			<View style={{ width: '100%', minHeight: 600 }}>
				<Story {...context} />
			</View>
			<Portal.Manager />
		</Portal.Provider>
	);
};

export default {
	title: 'Components/Modal',
	component: Modal,
	decorators: [AppProvider],
};

/**
 *
 */
export const BasicUsage = (props: ModalProps) => {
	const [opened, setOpened] = React.useState(false);

	return (
		<>
			<Button
				title="Open the modal"
				onPress={() => {
					setOpened(true);
				}}
			/>

			<Modal
				{...props}
				opened={opened}
				onClose={() => {
					setOpened(false);
				}}
			>
				<Text>Modal Content</Text>
			</Modal>
		</>
	);
};
BasicUsage.args = {
	title: 'Modal Title',
};

/**
 *
 */
export const WithoutHeader = (props: ModalProps) => {};

/**
 *
 */
export const WithPrimaryAction = (props: ModalProps) => {};

/**
 */
export const WithSecondaryActions = (props: ModalProps) => {};

/**
 *
 */
export const WithReactModal = (props: ModalProps) => {};

/**
 */
export const ModalSubComponents = () => {
	return (
		<View style={{ backgroundColor: 'grey', height: '100%' }}>
			<Container>
				<Header
					onClose={() => {
						action('Close');
					}}
				>
					Modal title
				</Header>
				<Content>
					<Text>Modal content</Text>
				</Content>
				<Footer
					primaryAction={{
						label: 'Do it!',
						action: () => {
							action('Do it!');
						},
					}}
					secondaryActions={[
						{
							label: 'Cancel',
							action: () => {
								action('Cancel');
							},
						},
					]}
				/>
			</Container>
		</View>
	);
};
