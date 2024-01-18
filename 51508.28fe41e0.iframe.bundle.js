(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[51508,29628],{"./src/skeleton/skeleton.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Skeleton=void 0;var React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/skeleton/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var _worklet_8964404333244_init_data={code:"function anonymous(){const{opacity}=this.__closure;return{opacity:opacity.value};}"},Skeleton=exports.Skeleton=function Skeleton(_ref){var width=_ref.width,height=_ref.height,_ref$border=_ref.border,border=void 0===_ref$border?"rounded":_ref$border,style=_ref.style,opacity=(0,_reactNativeReanimated.useSharedValue)(.6);React.useEffect((function(){opacity.value=(0,_reactNativeReanimated.withRepeat)((0,_reactNativeReanimated.withTiming)(1,{duration:1e3,easing:_reactNativeReanimated.Easing.ease}),-1,!0)}),[opacity]);var anonymous,animatedStyle=(0,_reactNativeReanimated.useAnimatedStyle)(((anonymous=function anonymous(){return{opacity:opacity.value}}).__closure={opacity},anonymous.__workletHash=8964404333244,anonymous.__initData=_worklet_8964404333244_init_data,anonymous));return(0,_jsxRuntime.jsx)(Styled.Container,{as:_reactNativeReanimated.default.View,style:[{width,height},style,animatedStyle],border})};try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},border:{defaultValue:{value:"rounded"},description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"circular"'},{value:'"square"'},{value:'"rounded"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"ViewStyle"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/skeleton/skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/skeleton/skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/skeleton/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Container=void 0;var _native=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}exports.Container=_native.default.View.withConfig({displayName:"styles__Container",componentId:"sc-1xso20a-0"})(["overflow:hidden;background-color:",";",""],(function(_ref){return _ref.theme.colors.darkGrey}),(function(_ref2){var border=_ref2.border,theme=_ref2.theme;switch(border){case"rounded":return(0,_native.css)(["border-radius:","px;"],theme.rounding.small);case"circular":return(0,_native.css)(["border-radius:","px;"],theme.rounding.circle);default:return(0,_native.css)(["border-radius:","px;"],theme.rounding.none)}}))}}]);