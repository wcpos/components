import * as React from 'react';
import { Modal as RNModal, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import Platform from '@wcpos/utils/src/platform';
import Portal from '../portal';
import Backdrop from '../backdrop';
import ErrorBoundary from '../error-boundary';
import Button from '../button';
import Box from '../box';
import Header from './header';
import * as Styled from './styles';

export type Open = 'default' | 'top';
export type Close = 'default' | 'alwaysOpen';
export type Position = 'initial' | 'top';

export interface Action {
	/**
	 * Label to display.
	 */
	label: string;
	/**
	 * Action to execute on click.
	 */
	action?: () => void;
	/**
	 *
	 */
	type?: import('@wcpos/themes').ColorTypes;
}

export type ModalProps = {
	/**
	 * Using this props will show the modal all the time, and the number represents how expanded the modal has to be.
	 */
	alwaysOpen?: boolean | number;
	/**
	 * A React node that will define the content of the modal.
	 */
	children?: React.ReactNode;
	/**
	 *
	 */
	size?: 'small' | 'medium' | 'large' | 'full';
	/**
	 * Callback function when the `open` method is triggered.
	 */
	onOpen?(): void;

	/**
	 * Callback function when the modal is opened.
	 */
	onOpened?(): void;

	/**
	 * Callback function when the `close` method is triggered.
	 */
	onClose?(): void;

	/**
	 * Callback function when the modal is closed.
	 */
	onClosed?(): void;
	/**
	 * Define if Modalize has to be wrap with the Modal component from react-native.
	 * @default false
	 */
	withReactModal?: boolean;
	/**
	 *
	 */
	title?: string;
	/**
	 * A header component outside of the ScrollView, on top of the modal.
	 */
	HeaderComponent?: React.ReactNode;

	/**
	 * A footer component outside of the ScrollView, on top of the modal.
	 */
	FooterComponent?: React.ReactNode;
} & {
	primaryAction?: Action;
	secondaryActions?: Action[];
};

const modalSizes = {
	small: 300,
	medium: 500,
	large: 700,
	full: undefined,
};

/**
 *
 */
export const ModalBase = (
	{
		children,
		onOpen,
		onClose,
		withReactModal = false,
		alwaysOpen = false,
		size = 'medium',
		primaryAction,
		secondaryActions = [],
		HeaderComponent,
		title,
	}: ModalProps,
	ref
) => {
	const [isVisible, setIsVisible] = React.useState(false);

	const handleAnimateOpen = (dest: Open = 'default'): void => {
		setIsVisible(true);
		// setShowContent(true);
	};

	// eslint-disable-next-line default-param-last
	const handleAnimateClose = (dest: Close = 'default', callback?: () => void): void => {
		if (callback) {
			callback();
		}

		setIsVisible(false);
	};

	const handleClose = (dest?: Close, callback?: () => void): void => {
		if (onClose) {
			onClose();
		}

		handleAnimateClose(dest, callback);
	};

	const handleBackdropPress = (): void => {
		handleClose();
	};

	React.useImperativeHandle(ref, () => ({
		open(dest?: Open): void {
			if (onOpen) {
				onOpen();
			}

			handleAnimateOpen(dest);
		},

		close(dest?: Close, callback?: () => void): void {
			handleClose(dest, callback);
		},
	}));

	React.useEffect(() => {
		if (alwaysOpen) {
			handleAnimateOpen();
		}
	}, [alwaysOpen]);

	const renderElement = (Element: React.ReactNode): JSX.Element =>
		typeof Element === 'function' ? Element() : Element;

	const renderChildren = (): React.ReactNode => {
		return children;
	};

	const renderHeader = () => {
		if (HeaderComponent) {
			return renderElement(HeaderComponent);
		}
		if (title) {
			return <Header title={title} handleClose={handleClose} />;
		}
		return null;
	};

	const renderFooter = () => {
		if (primaryAction)
			return (
				<Box horizontal>
					{secondaryActions.map((secondaryAction, index) => (
						<Button
							key={secondaryAction.label}
							fill
							size="large"
							title={secondaryAction.label}
							onPress={secondaryAction.action}
							type={secondaryAction.type || 'secondary'}
							style={{
								flex: 1,
								borderTopLeftRadius: 0,
								borderTopRightRadius: 0,
								borderBottomRightRadius: 0,
							}}
						/>
					))}
					<Button
						fill
						size="large"
						title={primaryAction.label}
						onPress={primaryAction.action}
						type={primaryAction.type || 'primary'}
						style={{
							flex: 1,
							borderTopLeftRadius: 0,
							borderTopRightRadius: 0,
							borderBottomLeftRadius: 0,
						}}
					/>
				</Box>
			);
		return null;
	};

	const renderModal = (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={[{ flex: 1 }, StyleSheet.absoluteFill]}
		>
			<Backdrop onPress={handleBackdropPress} />

			<Styled.Container>
				<Box
					raised
					rounding="medium"
					style={{
						width: modalSizes[size],
						maxWidth: '80%',
						backgroundColor: 'white',
						maxHeight: '80%',
					}}
				>
					<ErrorBoundary>
						{renderHeader()}
						<Box padding="medium" style={{ flex: 1 }}>
							<ScrollView>
								<ErrorBoundary>{renderChildren()}</ErrorBoundary>
							</ScrollView>
						</Box>
						{renderFooter()}
					</ErrorBoundary>
				</Box>
			</Styled.Container>
		</KeyboardAvoidingView>
	);

	const renderReactModal = (child: JSX.Element): JSX.Element => (
		<RNModal
			supportedOrientations={['landscape', 'portrait', 'portrait-upside-down']}
			// onRequestClose={handleBackPress}
			hardwareAccelerated
			visible={isVisible}
			transparent
		>
			{child}
		</RNModal>
	);

	if (!isVisible) {
		return null;
	}

	if (withReactModal) {
		return renderReactModal(renderModal);
	}

	return <Portal keyPrefix="Modal">{renderModal}</Portal>;
};

export const Modal = React.forwardRef(ModalBase);
