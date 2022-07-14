import React from 'react';
import type { WebViewSharedProps } from 'react-native-webview/lib/WebViewTypes';

export interface WebViewProps extends Omit<WebViewSharedProps, 'style'> {
	style?: React.CSSProperties;
	/**
	 * Source URI helper
	 */
	src?: string;
	/**
	 * A string that represents the content to display in the frame.
	 */
	srcDoc?: string;
}

/**
 *
 */
const WebViewBase = (
	{
		style,
		src,
		source,
		onMessage,
		onLoad,
		injectedJavaScript, // not working at the moment
		onNavigationStateChange,
		onError,
		srcDoc,
	}: WebViewProps,
	ref
) => {
	const iframeRef = React.useRef<HTMLIFrameElement>(null);
	React.useImperativeHandle(ref, () => iframeRef.current);

	// const onIframeLoad = function () {
	//   try {
	//     const location = iframeRef.current?.contentWindow?.location;
	//     console.log("onIframeLoad location", location);

	//     onNavigationStateChange?.({
	//       url: location?.href || "",
	//       navigationType: "other",
	//       loading: false,
	//       title: "",
	//       canGoBack: false,
	//       canGoForward: false,
	//       lockIdentifier: 0,
	//     });
	//   } catch (e) {
	//     throw new Error(e);
	//   }
	// };

	/**
	 * attach message listener
	 */
	React.useEffect(() => {
		const onIframeMessage = (event: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
			const { origin, data } = event;

			const message = {
				nativeEvent: {
					data,
					url: origin,
					loading: false,
					title: '',
					canGoBack: false,
					canGoForward: false,
					lockIdentifier: 0,
				},
				currentTarget: 0,
				target: 0,
				bubbles: false,
				cancelable: false,
				defaultPrevented: false,
				eventPhase: 0,
				isTrusted: false,
				preventDefault: () => null,
				stopPropagation: () => null,
				isDefaultPrevented: () => false,
				isPropagationStopped: () => false,
				timeStamp: new Date().valueOf(),
				type: '',
				persist: () => null,
			};

			onMessage?.(message as any);
		};

		iframeRef?.current?.addEventListener('message', onIframeMessage, true);
		// (window as any).attachEvent('onmessage', onIframeMessage);

		return () => {
			iframeRef?.current?.removeEventListener('message', onIframeMessage, true);
			// TODO: need to remove attachEvent?
		};
	}, [onMessage]);

	/**
	 * attach message listener
	 */

	return (
		<iframe
			title="test"
			ref={iframeRef}
			src={source?.uri || src}
			srcDoc={srcDoc}
			onLoad={onLoad}
			frameBorder="0"
			style={style}
		/>
	);
};

export const WebView = React.forwardRef<HTMLIFrameElement, WebViewProps>(WebViewBase);
