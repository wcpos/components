import * as React from 'react';
// import PortalManager from './manager';

interface PortalContextProps {
	components: { [key: string]: React.ReactNode };
	setComponent: (key: string, component: null | React.ReactNode) => void;
}

export const PortalContext = React.createContext<PortalContextProps>({
	components: {},
	setComponent: () => {},
});

interface ProviderProps {
	children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
	const [components, setComponents] = React.useState<{ [key: string]: React.ReactNode }>({});

	const setComponent = React.useCallback<PortalContext['setComponent']>(
		(key, component) => {
			setComponents((prev) => ({ ...prev, [key]: component || null }));
		},
		[setComponents]
	);

	return (
		<PortalContext.Provider value={{ components, setComponent }}>
			{children}
			{/* <PortalManager /> */}
		</PortalContext.Provider>
	);
};

export default Provider;
