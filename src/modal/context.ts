import * as React from 'react';

interface ModalContextProps {}

export const ModalContext = React.createContext<ModalContextProps>(null);

export const useModal = () => {
	if (!React.useContext(ModalContext)) {
		throw new Error('useModal must be used within a ModalProvider');
	}
	return React.useContext(ModalContext);
};
