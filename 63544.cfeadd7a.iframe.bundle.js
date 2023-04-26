(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[63544,22303],{"./src/webview/index.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _webview.WebView}});var _webview=__webpack_require__("./src/webview/webview.web.tsx");try{webview.displayName="webview",webview.__docgenInfo={description:"",displayName:"webview",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onMessage:{defaultValue:null,description:"Function that is invoked when the webview calls `window.ReactNativeWebView.postMessage`.\nSetting this property will inject this global into your webview.\n\n`window.ReactNativeWebView.postMessage` accepts one argument, `data`, which will be\navailable on the event object, `event.nativeEvent.data`. `data` must be a string.",name:"onMessage",required:!1,type:{name:"(((ev: WebViewMessage) => void) & ((event: WebViewMessageEvent) => void))"}},onError:{defaultValue:null,description:"Function that is invoked when the `WebView` load fails.",name:"onError",required:!1,type:{name:"(((ev: WebViewError) => void) & ((event: WebViewErrorEvent) => void))"}},onLoad:{defaultValue:null,description:"Function that is invoked when the `WebView` has finished loading.",name:"onLoad",required:!1,type:{name:"(((ev: WebViewNavigation) => void) & ((event: WebViewNavigationEvent) => void))"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/webview/index.tsx#webview"]={docgenInfo:webview.__docgenInfo,name:"webview",path:"src/webview/index.tsx#webview"})}catch(__react_docgen_typescript_loader_error){}},"./src/webview/webview.web.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.WebView=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),WebView=_react.default.forwardRef((function WebViewBase(_ref,ref){var style=_ref.style,src=_ref.src,source=_ref.source,onMessage=_ref.onMessage,onLoad=_ref.onLoad,srcDoc=(_ref.injectedJavaScript,_ref.onNavigationStateChange,_ref.onError,_ref.srcDoc),iframeRef=_react.default.useRef(null);return _react.default.useImperativeHandle(ref,(function(){return iframeRef.current})),_react.default.useEffect((function(){var onIframeMessage=function onIframeMessage(event){var origin=event.origin,data=event.data;null==onMessage||onMessage({data,url:origin,loading:!1,title:"",canGoBack:!1,canGoForward:!1,lockIdentifier:0})};return window.addEventListener("message",onIframeMessage,!0),function(){window.removeEventListener("message",onIframeMessage,!0)}}),[onMessage]),(0,_jsxRuntime.jsx)("iframe",{ref:iframeRef,src:(null==source?void 0:source.uri)||src,srcDoc,onLoad,frameBorder:"0",style})}));exports.WebView=WebView;try{WebView.displayName="WebView",WebView.__docgenInfo={description:"",displayName:"WebView",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},src:{defaultValue:null,description:"Source URI helper",name:"src",required:!1,type:{name:"string"}},srcDoc:{defaultValue:null,description:"A string that represents the content to display in the frame.",name:"srcDoc",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/webview/webview.web.tsx#WebView"]={docgenInfo:WebView.__docgenInfo,name:"WebView",path:"src/webview/webview.web.tsx#WebView"})}catch(__react_docgen_typescript_loader_error){}}}]);