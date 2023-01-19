import * as React from 'react';
import {
	ScrollView as RNScrollView,
	ScrollViewProps,
	NativeScrollEvent,
	NativeSyntheticEvent,
} from 'react-native';

interface ScrollListener {
	(event: NativeScrollEvent): void;
}

interface ScrollEventHandler {
	latest: NativeScrollEvent | null;
	subscribe(scrollListener: (event: NativeScrollEvent) => void): () => void;
}

const defaultScrollEventHandler: ScrollEventHandler = {
	get latest() {
		console.warn(
			'Warning: tried to read the latest scroll event from outside a scrollable context'
		);
		return null;
	},
	subscribe() {
		if (__DEV__) {
			// console.log('Info: tried to add a scroll event listener from outside a scrollable context');
		}
		return () => {};
	},
};

const ScrollEventsContext = React.createContext<ScrollEventHandler>(defaultScrollEventHandler);

export function useScrollEvents() {
	return React.useContext(ScrollEventsContext);
}

/**
 *
 */
export const ScrollView = React.forwardRef<RNScrollView, ScrollViewProps>((props, ref) => {
	const scrollEventListenersRef = React.useRef(new Set<ScrollListener>());
	const scrollEventHandlerRef = React.useRef<ScrollEventHandler>();
	if (scrollEventHandlerRef.current == null) {
		scrollEventHandlerRef.current = {
			latest: null,
			subscribe(listener: ScrollListener) {
				scrollEventListenersRef.current.add(listener);
				return () => {
					scrollEventListenersRef.current.delete(listener);
				};
			},
		};
	}

	const onScroll = React.useCallback(
		function topLevelScrollListener(e: NativeSyntheticEvent<NativeScrollEvent>) {
			const scrollEvent = e.nativeEvent;
			(scrollEventHandlerRef.current as ScrollEventHandler).latest = scrollEvent;
			props.onScroll?.(e);
			// eslint-disable-next-line no-restricted-syntax
			for (const listener of scrollEventListenersRef.current) {
				listener(scrollEvent);
			}
		},
		[props]
	);

	return (
		<ScrollEventsContext.Provider value={scrollEventHandlerRef.current}>
			<RNScrollView ref={ref} scrollEventThrottle={16} {...props} onScroll={onScroll} />
		</ScrollEventsContext.Provider>
	);
});
