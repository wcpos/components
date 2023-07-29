import * as React from 'react';
import { KeyboardAvoidingView, StyleSheet, ViewStyle } from 'react-native';

import { useObservableRef } from 'observable-hooks';

// import wrap from 'lodash/wrap';

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

	/** Anything you want to pass to useModal */
	context?: any;
};

/**
 *
 */
export const Modal = ({
	children,
	onClose,
	opened,
	size,
	withCloseButton = true,
	withReactModal = false,
	withBackdrop = true,
	withPortal = true,
	style,
	context,
	...props
}: ModalProps) => {
	const [title, setTitle] = React.useState(props.title);
	const [primaryActionRef, primaryAction$] = useObservableRef(props.primaryAction);
	const [secondaryActionsRef, secondaryActions$] = useObservableRef(props.secondaryActions);
	const hasHeader = !!title || withCloseButton;

	/**
	 * Convenience functions to set the primary and secondary actions
	 * Also, sync the refs with the props
	 */
	const setPrimaryAction = React.useCallback(
		(newPrimaryAction) => {
			primaryActionRef.current = newPrimaryAction;
		},
		[primaryActionRef]
	);

	const setSecondaryActions = React.useCallback(
		(newSecondaryActions) => {
			secondaryActionsRef.current = newSecondaryActions;
		},
		[secondaryActionsRef]
	);

	React.useEffect(() => {
		primaryActionRef.current = props.primaryAction;
	}, [props.primaryAction, primaryActionRef]);

	React.useEffect(() => {
		secondaryActionsRef.current = props.secondaryActions;
	}, [props.secondaryActions, secondaryActionsRef]);

	/**
	 * FIXME: I'm just using portal by default, is there a case to use React Native Modal?
	 */

	/**
	 *
	 */
	const _context = React.useMemo(
		() => ({
			setTitle,
			setPrimaryAction,
			setSecondaryActions,
			context,
		}),
		[context, setPrimaryAction, setSecondaryActions]
	);

	const MaybePortal = withPortal ? PortalWrapper : React.Fragment;
	const portalProps = withPortal ? { withReactModal, context: _context } : {};

	/**
	 *
	 */
	return opened ? (
		<ModalContext.Provider value={_context}>
			<MaybePortal {...portalProps}>
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					style={[{ flex: 1 }, StyleSheet.absoluteFill]}
				>
					<Container size={size} withBackdrop={withBackdrop} style={style}>
						{hasHeader ? <Header onClose={onClose}>{title}</Header> : null}
						<Content>{children}</Content>
						<Footer
							primaryActionRef={primaryActionRef}
							secondaryActionsRef={secondaryActionsRef}
							primaryAction$={primaryAction$}
							secondaryActions$={secondaryActions$}
						/>
					</Container>
				</KeyboardAvoidingView>
			</MaybePortal>
		</ModalContext.Provider>
	) : null;
};
