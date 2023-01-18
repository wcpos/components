import * as React from 'react';
import { Modal as RNModal } from 'react-native';

import Portal from '../portal';

export interface ModalPortalProps {
	/** */
	children: React.ReactNode;

	/** */
	withReactModal?: boolean;
}

export const PortalWrapper = ({ children, withReactModal }: ModalPortalProps) => {
	const SwitchPortal = withReactModal ? RNModal : Portal;
	const portalProps = withReactModal
		? {
				supportedOrientations: ['landscape', 'portrait', 'portrait-upside-down'],
				// onRequestClose={onClose}
				hardwareAccelerated: true,
				visible: true,
				transparent: true,
		  }
		: {
				keyPrefix: 'Modal',
		  };

	return <SwitchPortal {...portalProps}>{children}</SwitchPortal>;
};
