import * as React from 'react';
import { Modal as RNModal } from 'react-native';

import { PortalContext } from './context';
import Portal from '../portal';

export interface ModalPortalProps {
	/** */
	children: React.ReactNode;

	/** */
	withReactModal?: boolean;

	/** */
	context: any;
}

/**
 * TODO: do I need to use React Native Modal?
 */
export const PortalWrapper = ({ children, withReactModal, context }: ModalPortalProps) => {
	return (
		<Portal keyPrefix="Modal">
			<PortalContext.Provider value={context}>{children}</PortalContext.Provider>
		</Portal>
	);
};

// export const PortalWrapper = ({ children, withReactModal }: ModalPortalProps) => {
// 	const SwitchPortal = withReactModal ? RNModal : Portal;
// 	const portalProps = withReactModal
// 		? {
// 				supportedOrientations: ['landscape', 'portrait', 'portrait-upside-down'],
// 				// onRequestClose={onClose}
// 				hardwareAccelerated: true,
// 				visible: true,
// 				transparent: true,
// 		  }
// 		: {
// 				keyPrefix: 'Modal',
// 		  };

// 	return <SwitchPortal {...portalProps}>{children}</SwitchPortal>;
// };
