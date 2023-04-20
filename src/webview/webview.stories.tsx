import * as React from 'react';
import { View } from 'react-native';

import { action } from '@storybook/addon-actions';

import onMessageHTML from './onMessage.html';
import postMessageHTML from './postMessage.html';
import { WebView, WebViewProps } from './webview.web';
import Button from '../button';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof WebView> = {
	title: 'Components/WebView',
	component: WebView,
};

/**
 *
 */
export const basicUsage = () => <WebView src="https://wcpos.com" onLoad={action('onLoad')} />;

/**
 *
 */
export const error = () => (
	<WebView src="https://example.com/404.html" onError={action('onError')} />
);

/**
 *
 */
export const onMessage = () => (
	<WebView srcDoc={onMessageHTML} onError={action('onError')} onMessage={action('onMessage')} />
);

/**
 *
 */
export const postMessage = () => {
	const webviewRef = React.useRef<typeof WebView>(null);

	return (
		<View style={{ flexDirection: 'column' }}>
			<Button
				title="Post Message"
				onPress={() => {
					webviewRef?.current?.contentWindow?.postMessage('Hello World');
				}}
			/>
			<WebView ref={webviewRef} srcDoc={postMessageHTML} />
		</View>
	);
};

/**
 *
 */
export const injectedJavascript = (props: WebViewProps) => {
	const runFirst = `
		document.body.style.backgroundColor = 'red';
		setTimeout(function() { window.alert('hi') }, 2000);
		true; // note: this is required, or you'll sometimes get silent failures
	`;

	return (
		<View style={{ flex: 1 }}>
			<WebView
				onMessage={action('onMessage')}
				onLoad={action('onLoad')}
				injectedJavaScript={runFirst}
				{...props}
			/>
		</View>
	);
};
injectedJavascript.args = {
	src: 'https://example.com',
};

export default meta;
