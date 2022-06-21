import * as React from 'react';
import { WebView as RNWebView, WebViewProps as RNWebViewProps } from 'react-native-webview';
import noop from 'lodash/noop';

type WebViewMessage = import('react-native-webview/lib/WebViewTypes').WebViewMessage;
type WebViewError = import('react-native-webview/lib/WebViewTypes').WebViewError;
type WebViewNavigation = import('react-native-webview/lib/WebViewTypes').WebViewNavigation;

type WebViewProps = {
	src: string;
	title?: string;
	onMessage?: (ev: WebViewMessage) => void;
	onError?: (ev: WebViewError) => void;
	onLoad?: (ev: WebViewNavigation) => void;
} & RNWebViewProps;

const WebViewBase = (
	{ src, title, onMessage = noop, onError = noop, onLoad = noop, ...props }: WebViewProps,
	ref: RNWebView
) => {
	return (
		<RNWebView
			ref={ref}
			source={{ uri: src }}
			onMessage={({ nativeEvent }) => {
				onMessage(nativeEvent);
			}}
			onError={({ nativeEvent }) => {
				onError(nativeEvent);
			}}
			onLoad={({ nativeEvent }) => {
				onLoad(nativeEvent);
			}}
			{...props}
		/>
	);
};

export const WebView = React.forwardRef(WebViewBase);
