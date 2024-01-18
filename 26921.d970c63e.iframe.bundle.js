(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[26921],{"./src/touchable/touchable.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_Platform=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Platform/index.js")),_TouchableNativeFeedback=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/TouchableNativeFeedback/index.js")),_TouchableOpacity=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["borderlessRipple","delayPressIn","disabled","noRipple","onLongPress","onPress","onMouseEnter","onMouseLeave","rippleColor","style","width"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}exports.default=function Touchable(_ref){var _ref$borderlessRipple=_ref.borderlessRipple,borderlessRipple=void 0!==_ref$borderlessRipple&&_ref$borderlessRipple,delayPressIn=_ref.delayPressIn,disabled=_ref.disabled,noRipple=_ref.noRipple,onLongPress=_ref.onLongPress,onPress=_ref.onPress,_ref$rippleColor=(_ref.onMouseEnter,_ref.onMouseLeave,_ref.rippleColor),rippleColor=void 0===_ref$rippleColor?"rgba(0, 0, 0, 0.32)":_ref$rippleColor,style=_ref.style,width=_ref.width,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),children=React.Children.only(props.children);if(function supportsRippleEffect(){return!0!==noRipple&&("android"===_Platform.default.OS&&_Platform.default.Version>=21)}()){var useForeground=_TouchableNativeFeedback.default.canUseNativeForeground();return borderlessRipple&&(useForeground=!1),(0,_jsxRuntime.jsx)(_TouchableNativeFeedback.default,{onPress,onLongPress,delayPressIn,style:{width},useForeground,background:_TouchableNativeFeedback.default.Ripple(rippleColor,borderlessRipple),children})}return(0,_jsxRuntime.jsx)(_TouchableOpacity.default,{disabled,onPress,onLongPress,delayPressIn,activeOpacity:.5,style:Object.assign({},style,{width}),children:(0,_jsxRuntime.jsx)(_View.default,{children})})};try{touchable.displayName="touchable",touchable.__docgenInfo={description:"A Touchable component simply handles the touch gestures on native platforms\non Android it will apply a ripple effect on the backrgound\non iOS and web it will change the opacity of the children\n\nA Touchable component must have a single child View component",displayName:"touchable",props:{borderlessRipple:{defaultValue:{value:"false"},description:"",name:"borderlessRipple",required:!1,type:{name:"boolean"}},delayPressIn:{defaultValue:null,description:"",name:"delayPressIn",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},noRipple:{defaultValue:null,description:"",name:"noRipple",required:!1,type:{name:"boolean"}},onLongPress:{defaultValue:null,description:"",name:"onLongPress",required:!1,type:{name:"((event: GestureResponderEvent) => void)"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!1,type:{name:"((event: GestureResponderEvent) => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"((event: GestureResponderEvent) => void)"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"((event: GestureResponderEvent) => void)"}},rippleColor:{defaultValue:{value:"rgba(0, 0, 0, 0.32)"},description:"",name:"rippleColor",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{}"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/touchable/touchable.tsx#touchable"]={docgenInfo:touchable.__docgenInfo,name:"touchable",path:"src/touchable/touchable.tsx#touchable"})}catch(__react_docgen_typescript_loader_error){}}}]);