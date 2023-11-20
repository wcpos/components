(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[48461,67205],{"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,{Z:()=>_taggedTemplateLiteral})},"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/ripple/ripple.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Ripple=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/ripple/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var _worklet_2887425239754_init_data={code:'function anonymous(){const{withTiming,showRipple,Easing}=this.__closure;return{transform:"scale("+withTiming(showRipple.value?1.5:0,{duration:200,easing:Easing.out(Easing.quad)})+")"};}',location:"/home/runner/work/components/components/src/ripple/ripple.tsx",sourceMap:'{"version":3,"names":["anonymous","withTiming","showRipple","Easing","__closure","transform","value","duration","easing","out","quad"],"sources":["/home/runner/work/components/components/src/ripple/ripple.tsx"],"mappings":"AAgBsC,SAAAA,UAAA,QAAAC,UAAA,CAAAC,UAAA,CAAAC,MAAA,OAAAC,SAAA,OAAO,CAC3CC,SAAS,UAAWJ,UAAU,CAACC,UAAU,CAACI,KAAK,CAAG,GAAG,CAAG,CAAC,CAAE,CAC1DC,QAAQ,CAAE,GAAG,CACbC,MAAM,CAAEL,MAAM,CAACM,GAAG,CAACN,MAAM,CAACO,IAAI,CAC/B,CAAC,CAAE,IACJ,CAAC"}',version:"3.5.4"},Ripple=exports.Ripple=function Ripple(_ref){var _e,anonymous,showRipple=_ref.showRipple,rippleScale=(0,_reactNativeReanimated.useAnimatedStyle)((_e=[new __webpack_require__.g.Error,-4,-27],(anonymous=function anonymous(){return{transform:"scale(".concat((0,_reactNativeReanimated.withTiming)(showRipple.value?1.5:0,{duration:200,easing:_reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.quad)}),")")}}).__closure={withTiming:_reactNativeReanimated.withTiming,showRipple,Easing:_reactNativeReanimated.Easing},anonymous.__initData=_worklet_2887425239754_init_data,anonymous.__workletHash=2887425239754,anonymous.__stackDetails=_e,anonymous));return(0,_jsxRuntime.jsx)(Styled.RippleEffect,{as:_reactNativeReanimated.default.View,style:[{pointerEvents:"none"},rippleScale]})};try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{showRipple:{defaultValue:null,description:"",name:"showRipple",required:!0,type:{name:"SharedValue<boolean>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ripple/ripple.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"src/ripple/ripple.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}},"./src/ripple/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);var _templateObject,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),exports.RippleEffect=void 0;var _native=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"));exports.RippleEffect=_native.default.View(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\tz-index: -1;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: ",";\n\tbackground-color: rgba(0, 0, 0, 0.1);\n"])),(function(_ref){var theme=_ref.theme;return"".concat(theme.rounding.circle,"px")}))}}]);