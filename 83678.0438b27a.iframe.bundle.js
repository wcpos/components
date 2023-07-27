(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[83678,51624,91939,29628],{"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,{Z:()=>_taggedTemplateLiteral})},"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/skeleton/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _skeleton.Skeleton}});var _skeleton=__webpack_require__("./src/skeleton/skeleton.tsx")},"./src/skeleton/skeleton.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Skeleton=void 0;var React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/skeleton/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var _worklet_14927644262409_init_data={code:"function anonymous() {\n  const {\n    opacity\n  } = this._closure;\n  return {\n    opacity: opacity.value\n  };\n}",location:"/home/runner/work/components/components/src/skeleton/skeleton.tsx",sourceMap:'{"version":3,"names":["anonymous","opacity","_closure","value"],"sources":["/home/runner/work/components/components/src/skeleton/skeleton.tsx"],"mappings":"AAwDwC,SAAAA,UAAA;EAAA;IAAAC;EAAA,SAAAC,QAAA;EAAA,OAAO;IAC7CD,OAAO,EAAEA,OAAO,CAACE;EAClB,CAAC;AAAA"}'},Skeleton=function Skeleton(_ref){var width=_ref.width,height=_ref.height,_ref$border=_ref.border,border=void 0===_ref$border?"rounded":_ref$border,style=_ref.style,opacity=(0,_reactNativeReanimated.useSharedValue)(.6);React.useEffect((function(){opacity.value=(0,_reactNativeReanimated.withRepeat)((0,_reactNativeReanimated.withTiming)(1,{duration:1e3,easing:_reactNativeReanimated.Easing.ease}),-1,!0)}),[opacity]);var _e,_f,animatedStyle=(0,_reactNativeReanimated.useAnimatedStyle)((_e=[new __webpack_require__.g.Error,-2,-27],(_f=function _f(){return{opacity:opacity.value}})._closure={opacity},_f.__initData=_worklet_14927644262409_init_data,_f.__workletHash=0xd939cef0009,_f.__stackDetails=_e,_f.__version="3.3.0",_f));return(0,_jsxRuntime.jsx)(Styled.Container,{as:_reactNativeReanimated.default.View,style:[{width,height},style,animatedStyle],border})};exports.Skeleton=Skeleton;try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},border:{defaultValue:{value:"rounded"},description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"rounded"'},{value:'"circular"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"ViewStyle"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/skeleton/skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/skeleton/skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/skeleton/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);var _templateObject,_templateObject2,_templateObject3,_templateObject4,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),exports.Container=void 0;var _native=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Container=_native.default.View(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\toverflow: hidden;\n\tbackground-color: ",";\n\n\t","\n"])),(function(_ref){return _ref.theme.colors.darkGrey}),(function(_ref2){var border=_ref2.border,theme=_ref2.theme;switch(border){case"rounded":return(0,_native.css)(_templateObject2||(_templateObject2=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\t\t\t\t\tborder-radius: ","px;\n\t\t\t\t"])),theme.rounding.small);case"circular":return(0,_native.css)(_templateObject3||(_templateObject3=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\t\t\t\t\tborder-radius: ","px;\n\t\t\t\t"])),theme.rounding.circle);default:return(0,_native.css)(_templateObject4||(_templateObject4=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\t\t\t\t\tborder-radius: ","px;\n\t\t\t\t"])),theme.rounding.none)}}));exports.Container=Container},"./src/text/skeleton.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextSkeleton=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _skeleton=_interopRequireDefault(__webpack_require__("./src/skeleton/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var lengthMap={default:120,short:60,long:240},TextSkeleton=function TextSkeleton(_ref){var _ref$length=_ref.length,length=void 0===_ref$length?"default":_ref$length;return(0,_jsxRuntime.jsx)(_skeleton.default,{width:lengthMap[length],height:20})};exports.TextSkeleton=TextSkeleton;try{TextSkeleton.displayName="TextSkeleton",TextSkeleton.__docgenInfo={description:"",displayName:"TextSkeleton",props:{length:{defaultValue:{value:"default"},description:"",name:"length",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"short"'},{value:'"long"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/text/skeleton.tsx#TextSkeleton"]={docgenInfo:TextSkeleton.__docgenInfo,name:"TextSkeleton",path:"src/text/skeleton.tsx#TextSkeleton"})}catch(__react_docgen_typescript_loader_error){}}}]);