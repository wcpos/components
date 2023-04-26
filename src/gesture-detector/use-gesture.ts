import * as React from 'react';

import { GestureContext } from './provider';

export const useGesture = () => {
	const context = React.useContext(GestureContext);
	if (!context) {
		throw new Error(`useGesture must be called within GestureEventProvider`);
	}

	return context;
};
