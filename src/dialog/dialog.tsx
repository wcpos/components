import React from 'react';

import Modal, { ModalProps } from '../modal';
import Text from '../text';

export type DialogProps = ModalProps & {
	/** */
	onAccept?: () => void;
	/** */
	onDecline?: () => void;
};

/**
 * Show interactive content on top of an existing screen.
 * It should be used thoughtfully and sparingly, as it stops the user in its current flow.
 */
export const Dialog = ({ children, onClose, onAccept, onDecline, ...props }: DialogProps) => {
	const accept = () => {
		Promise.resolve(onAccept && onAccept()).then(() => {
			onClose();
		});
	};

	const decline = () => {
		Promise.resolve(onDecline && onDecline()).then(() => {
			onClose();
		});
	};

	return (
		<Modal
			size="small"
			onClose={onClose}
			withCloseButton={false}
			primaryAction={{ label: 'Confirm', action: accept, type: 'primary' }}
			secondaryActions={[{ label: 'Cancel', action: decline, type: 'secondary' }]}
			{...props}
		>
			{typeof children === 'string' ? <Text>{children}</Text> : children}
		</Modal>
	);
};
