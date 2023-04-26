import * as React from 'react';
import { View } from 'react-native';

import {
	GestureDetector,
	Gesture,
	GestureStateChangeEvent,
	TapGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { Subject } from 'rxjs';

interface GestureContextProps {
	tapEvent$: Subject<GestureStateChangeEvent<TapGestureHandlerEventPayload>>;
}

export const GestureContext = React.createContext<GestureContextProps>(null);

interface GestureEventProviderProps {
	children: React.ReactNode;
}

const tapEventSubject = new Subject<GestureStateChangeEvent<TapGestureHandlerEventPayload>>();

const GestureEventProvider = ({ children }: GestureEventProviderProps) => {
	/**
	 *
	 */
	const gesture = React.useMemo(
		() =>
			Gesture.Tap()
				.maxDuration(250)
				.onStart((event) => {
					tapEventSubject.next(event);
				}),
		[]
	);

	/**
	 *
	 */
	const value = React.useMemo(
		() => ({
			tapEvent$: tapEventSubject.asObservable(),
		}),
		[]
	);

	return (
		<GestureContext.Provider value={value}>
			<GestureDetector gesture={gesture}>
				<View style={{ flex: 1 }}>{children}</View>
			</GestureDetector>
		</GestureContext.Provider>
	);
};

export default GestureEventProvider;
