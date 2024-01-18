(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[59963,91206,67205],{"./src/ripple/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _ripple.Ripple}});var _ripple=__webpack_require__("./src/ripple/ripple.tsx")},"./src/ripple/ripple.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Ripple=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/ripple/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var _worklet_2887425239754_init_data={code:'function anonymous(){const{withTiming,showRipple,Easing}=this.__closure;return{transform:"scale("+withTiming(showRipple.value?1.5:0,{duration:200,easing:Easing.out(Easing.quad)})+")"};}'},Ripple=exports.Ripple=function Ripple(_ref){var anonymous,showRipple=_ref.showRipple,rippleScale=(0,_reactNativeReanimated.useAnimatedStyle)(((anonymous=function anonymous(){return{transform:"scale(".concat((0,_reactNativeReanimated.withTiming)(showRipple.value?1.5:0,{duration:200,easing:_reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.quad)}),")")}}).__closure={withTiming:_reactNativeReanimated.withTiming,showRipple,Easing:_reactNativeReanimated.Easing},anonymous.__workletHash=2887425239754,anonymous.__initData=_worklet_2887425239754_init_data,anonymous));return(0,_jsxRuntime.jsx)(Styled.RippleEffect,{as:_reactNativeReanimated.default.View,style:[{pointerEvents:"none"},rippleScale]})};try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{showRipple:{defaultValue:null,description:"",name:"showRipple",required:!0,type:{name:"SharedValue<boolean>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ripple/ripple.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"src/ripple/ripple.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}},"./src/ripple/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.RippleEffect=void 0;var _native=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"));exports.RippleEffect=_native.default.View.withConfig({displayName:"styles__RippleEffect",componentId:"sc-1d94hgw-0"})(["z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:",";background-color:rgba(0,0,0,0.1);"],(function(_ref){var theme=_ref.theme;return"".concat(theme.rounding.circle,"px")}))}}]);