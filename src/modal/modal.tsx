import * as React from 'react';
import { KeyboardAvoidingView, StyleSheet, ViewStyle } from 'react-native';

import wrap from 'lodash/wrap';

import Platform from '@wcpos/utils/src/platform';

import { Container, ModalContainerProps } from './container';
import { Content } from './content';
import { ModalContext } from './context';
import { Footer, ModalFooterProps } from './footer';
import { Header } from './header';
import { PortalWrapper } from './portal';

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
	size?: ModalContainerProps['size'];

	/** Set false to hide the backdrop */
	withBackdrop?: boolean;

	/** Set false to use modal without portal, eg: react-navigation Stack.Screen */
	withPortal?: boolean;

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
	onClose,
	opened,
	primaryAction,
	secondaryActions,
	size,
	withCloseButton = true,
	withReactModal = false,
	withBackdrop = true,
	withPortal = true,
	style,
	...props
}: ModalProps) => {
	const [title, setTitle] = React.useState(props.title);
	const hasHeader = !!title || withCloseButton;
	const primaryActionRef = React.useRef();
	const secondaryActionRef = React.useRef();

	/**
	 *
	 */
	if (primaryAction) {
		const orig = primaryAction.action;
		primaryAction.action = () => {
			const func = primaryActionRef.current;
			func && func();
			orig && orig();
		};
	}

	/**
	 *
	 */
	if (secondaryActions) {
		secondaryActions.forEach((action) => {
			const orig = action.action;
			action.action = () => {
				const func = secondaryActionRef.current;
				func && func(action);
				orig && orig();
			};
		});
	}

	/**
	 *
	 */
	const MaybePortal = withPortal ? PortalWrapper : React.Fragment;
	const portalProps = withPortal ? { withReactModal } : {};

	/**
	 *
	 */
	return opened ? (
		<ModalContext.Provider
			value={{
				setTitle,
				onPrimaryAction: (func) => {
					primaryActionRef.current = func;
				},
				onSecondaryAction: (func) => {
					secondaryActionRef.current = func;
				},
			}}
		>
			<MaybePortal {...portalProps}>
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					style={[{ flex: 1 }, StyleSheet.absoluteFill]}
				>
					<Container size={size} withBackdrop={withBackdrop} style={style}>
						{hasHeader ? <Header onClose={onClose}>{title}</Header> : null}
						<Content>{children}</Content>
						{primaryAction ? (
							<Footer primaryAction={primaryAction} secondaryActions={secondaryActions} />
						) : null}
					</Container>
				</KeyboardAvoidingView>
			</MaybePortal>
		</ModalContext.Provider>
	) : null;
};
