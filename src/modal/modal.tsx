import * as React from 'react';
import { KeyboardAvoidingView, StyleSheet, ViewStyle } from 'react-native';

import Platform from '@wcpos/utils/src/platform';

import { Container } from './container';
import { Content } from './content';
import { Footer, ModalFooterProps } from './footer';
import { Header } from './header';
import { PortalWrapper } from './portal';
import Backdrop from '../backdrop';

/**
 *
 */
export type ModalProps = {
	/** Content to be shown in the modal */
	children: React.ReactNode;

	/** Mounts modal if true */
	opened: boolean;

	/** Called when close button clicked and when escape key is pressed */
	onClose(): void;

	/** Modal title, displayed in header before close button */
	title?: React.ReactNode;

	/** Hides close button if set to false, modal still can be closed with escape key and by clicking outside */
	withCloseButton?: boolean;

	/** Modal body width */
	size?: string | number;

	/**
	 * Define if Modal should use the react-native implementation of Modal.
	 * Note: react-native-web uses a Portal, very similar to the one used in this component.
	 * @default false
	 */
	withReactModal?: boolean;

	/** */
	primaryAction?: ModalFooterProps['primaryAction'];

	/** */
	secondaryActions?: ModalFooterProps['secondaryActions'];

	/** */
	style?: ViewStyle;
};

/**
 *
 */
export const Modal = ({
	children,
	opened,
	title,
	onClose,
	withCloseButton = true,
	withReactModal = false,
	primaryAction,
	secondaryActions,
}: ModalProps) => {
	const hasHeader = !!title || withCloseButton;
	/**
	 *
	 */
	// const handleBackdropPress = (): void => {
	// 	// handleClose();
	// };

	/**
	 *
	 */
	return opened ? (
		<PortalWrapper withReactModal={withReactModal}>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={[{ flex: 1 }, StyleSheet.absoluteFill]}
			>
				<Backdrop onPress={onClose} />

				<Container>
					{hasHeader ? <Header onClose={onClose}>{title}</Header> : null}
					<Content>{children}</Content>
					{primaryAction ? (
						<Footer primaryAction={primaryAction} secondaryActions={secondaryActions} />
					) : null}
				</Container>
			</KeyboardAvoidingView>
		</PortalWrapper>
	) : null;
};
