import * as React from 'react';

import type { ModalProps } from './modal';

interface ModalContextProps {
	setTitle: React.Dispatch<React.SetStateAction<string>>;
	setPrimaryAction: React.Dispatch<React.SetStateAction<ModalProps['primaryAction']>>;
	setSecondaryActions: React.Dispatch<React.SetStateAction<ModalProps['secondaryActions']>>;
}

export const ModalContext = React.createContext<ModalContextProps>(null);
export const PortalContext = React.createContext(null);

export const useModal = () => {
	const modalContext = React.useContext(ModalContext);
	const portalContext = React.useContext(PortalContext);
	const context = modalContext || portalContext;

	if (!context) {
		throw new Error(`useModal must be called within the right context`);
	}

	return context;
};
