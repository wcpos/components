(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[84010,26434,53184,74656,93708],{"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,{Z:()=>_taggedTemplateLiteral})},"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/backdrop/backdrop.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Backdrop=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_isFunction=_interopRequireDefault(__webpack_require__("./node_modules/lodash/isFunction.js")),_reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/backdrop/styles.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Backdrop=function Backdrop(_ref){var _ref$invisible=_ref.invisible,invisible=void 0!==_ref$invisible&&_ref$invisible,_ref$clickThrough=_ref.clickThrough,clickThrough=void 0!==_ref$clickThrough&&_ref$clickThrough,onPress=_ref.onPress,children=_ref.children,contentView=(0,_jsxRuntime.jsx)(Styled.Backdrop,{as:_reactNativeReanimated.default.View,entering:_reactNativeReanimated.FadeIn,exiting:_reactNativeReanimated.FadeOut,style:[invisible&&{backgroundColor:"transparent"},{pointerEvents:clickThrough?"none":"auto"}],children});return clickThrough?contentView:(0,_jsxRuntime.jsx)(_pressable.default,{style:Object.assign({},_StyleSheet.default.absoluteFillObject,{flex:1,cursor:"default"}),onPress:function handlePress(event){(0,_isFunction.default)(onPress)&&onPress(event)},children:contentView})};exports.Backdrop=Backdrop;try{Backdrop.displayName="Backdrop",Backdrop.__docgenInfo={description:"",displayName:"Backdrop",props:{invisible:{defaultValue:{value:"false"},description:"Determines if Popover is transparent or not.",name:"invisible",required:!1,type:{name:"boolean"}},clickThrough:{defaultValue:{value:"false"},description:"If true, the popover and its backdrop won't be clickable and won't receive mouse events.\n\nFor example, this is used by the `Tooltip` component. Prefer using the `Tooltip` component instead\nof this property.",name:"clickThrough",required:!1,type:{name:"boolean"}},onPress:{defaultValue:null,description:"Called when the Backdrop is pressed",name:"onPress",required:!1,type:{name:"((event: NativeSyntheticEvent<NativeTouchEvent>) => void)"}},children:{defaultValue:null,description:"Backdrop children",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/backdrop/backdrop.tsx#Backdrop"]={docgenInfo:Backdrop.__docgenInfo,name:"Backdrop",path:"src/backdrop/backdrop.tsx#Backdrop"})}catch(__react_docgen_typescript_loader_error){}},"./src/backdrop/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _backdrop.Backdrop}});var _backdrop=__webpack_require__("./src/backdrop/backdrop.tsx")},"./src/backdrop/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);var _templateObject,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),exports.Backdrop=void 0;var _StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),Backdrop=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")).default.View(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\t","\n\tflex: 1;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tz-index: ",";\n"])),Object.assign({},_StyleSheet.default.absoluteFillObject),(function(_ref){return _ref.theme.zIndex.backdrop}));exports.Backdrop=Backdrop},"./src/pressable/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _pressable.Pressable}});var _pressable=__webpack_require__("./src/pressable/pressable.tsx")},"./src/pressable/pressable.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Pressable=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_Pressable=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Pressable/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["style"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Pressable=React.forwardRef((function(props,ref){var style=props.style,rest=(0,_objectWithoutProperties2.default)(props,_excluded),resolvedStyle=React.useCallback((function(state){var finalStyle=[];"function"==typeof style?finalStyle=[style(state),{flexDirection:"row"}]:finalStyle=[{flexDirection:"row"},style];return finalStyle}),[style]);return(0,_jsxRuntime.jsx)(_Pressable.default,Object.assign({style:resolvedStyle,ref},rest))}));exports.Pressable=Pressable;try{Pressable.displayName="Pressable",Pressable.__docgenInfo={description:"",displayName:"Pressable",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pressable/pressable.tsx#Pressable"]={docgenInfo:Pressable.__docgenInfo,name:"Pressable",path:"src/pressable/pressable.tsx#Pressable"})}catch(__react_docgen_typescript_loader_error){}}}]);