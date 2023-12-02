(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[89705,6479,76553,48013,36409,73552,37091,8752],{"./node_modules/@babel/runtime/helpers/arrayWithHoles.js":module=>{module.exports=function _arrayWithHoles(arr){if(Array.isArray(arr))return arr},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":module=>{module.exports=function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/nonIterableRest.js":module=>{module.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/slicedToArray.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayWithHoles=__webpack_require__("./node_modules/@babel/runtime/helpers/arrayWithHoles.js"),iterableToArrayLimit=__webpack_require__("./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"),unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"),nonIterableRest=__webpack_require__("./node_modules/@babel/runtime/helpers/nonIterableRest.js");module.exports=function _slicedToArray(arr,i){return arrayWithHoles(arr)||iterableToArrayLimit(arr,i)||unsupportedIterableToArray(arr,i)||nonIterableRest()},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/text/auto-size/group.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Group=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","style"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var Group=exports.Group=function Group(props){var _React$useState=React.useState(1e3),maxSize=(0,_slicedToArray2.default)(_React$useState,1)[0],children=props.children,style=props.style,rest=(0,_objectWithoutProperties2.default)(props,_excluded);return(0,_jsxRuntime.jsx)(_Text.default,Object.assign({testID:"group",adjustsFontSizeToFit:!0,numberOfLines:maxSize,style:[style,{fontSize:maxSize}]},rest,{children}))};try{Group.displayName="Group",Group.__docgenInfo={description:"",displayName:"Group",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/text/auto-size/group.tsx#Group"]={docgenInfo:Group.__docgenInfo,name:"Group",path:"src/text/auto-size/group.tsx#Group"})}catch(__react_docgen_typescript_loader_error){}},"./src/text/auto-size/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _group=__webpack_require__("./src/text/auto-size/group.tsx"),_maxLines=__webpack_require__("./src/text/auto-size/max-lines.tsx"),_minFontSize=__webpack_require__("./src/text/auto-size/min-font-size.tsx"),_overflowReplacement=__webpack_require__("./src/text/auto-size/overflow-replacement.tsx"),_presentFontSizes=__webpack_require__("./src/text/auto-size/present-font-sizes.tsx"),_stepGranularity=__webpack_require__("./src/text/auto-size/step-granularity.tsx");exports.default={Group:_group.Group,MaxLines:_maxLines.MaxLines,MinFontSize:_minFontSize.MinFontSize,OverflowReplacement:_overflowReplacement.OverflowReplacement,PresetFontSizes:_presentFontSizes.PresetFontSizes,StepGranularity:_stepGranularity.StepGranularity}},"./src/text/auto-size/max-lines.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.MaxLines=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["fontSize","children","style","numberOfLines"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var MaxLines=exports.MaxLines=function MaxLines(props){var fontSize=props.fontSize,children=props.children,style=props.style,numberOfLines=props.numberOfLines,rest=(0,_objectWithoutProperties2.default)(props,_excluded),_React$useState=React.useState(fontSize),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),currentFont=_React$useState2[0],setCurrentFont=_React$useState2[1];return(0,_jsxRuntime.jsx)(_Text.default,Object.assign({testID:"max-lines",numberOfLines,adjustsFontSizeToFit:!0,style:[style,{fontSize:currentFont}]},rest,{onTextLayout:function handleResizing(e){e.nativeEvent.lines.length>numberOfLines&&setCurrentFont(currentFont-1)},children}))};try{MaxLines.displayName="MaxLines",MaxLines.__docgenInfo={description:"",displayName:"MaxLines",props:{fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/text/auto-size/max-lines.tsx#MaxLines"]={docgenInfo:MaxLines.__docgenInfo,name:"MaxLines",path:"src/text/auto-size/max-lines.tsx#MaxLines"})}catch(__react_docgen_typescript_loader_error){}},"./src/text/auto-size/min-font-size.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.MinFontSize=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_Platform=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Platform/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["fontSize","children","style","numberOfLines","minFontSize"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var MinFontSize=exports.MinFontSize=function MinFontSize(props){var fontSize=props.fontSize,children=props.children,style=props.style,numberOfLines=props.numberOfLines,minFontSize=props.minFontSize,rest=(0,_objectWithoutProperties2.default)(props,_excluded),_React$useState=React.useState(fontSize),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),currentFont=_React$useState2[0],setCurrentFont=_React$useState2[1];return(0,_jsxRuntime.jsx)(_Text.default,Object.assign({testID:"min-font-size",numberOfLines:function handleNumberOfLines(){if("ios"===_Platform.default.OS&&currentFont===minFontSize||"android"===_Platform.default.OS)return numberOfLines}(),style:[style,{fontSize:currentFont}]},rest,{onTextLayout:function handleResizing(e){e.nativeEvent.lines.length>numberOfLines&&currentFont>minFontSize&&setCurrentFont(currentFont-1)},children}))};try{MinFontSize.displayName="MinFontSize",MinFontSize.__docgenInfo={description:"",displayName:"MinFontSize",props:{fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"number"}},minFontSize:{defaultValue:null,description:"",name:"minFontSize",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/text/auto-size/min-font-size.tsx#MinFontSize"]={docgenInfo:MinFontSize.__docgenInfo,name:"MinFontSize",path:"src/text/auto-size/min-font-size.tsx#MinFontSize"})}catch(__react_docgen_typescript_loader_error){}},"./src/text/auto-size/overflow-replacement.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.OverflowReplacement=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["fontSize","children","style","numberOfLines","overflowReplacement"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var OverflowReplacement=exports.OverflowReplacement=function OverflowReplacement(props){var fontSize=props.fontSize,children=props.children,style=props.style,numberOfLines=props.numberOfLines,overflowReplacement=props.overflowReplacement,rest=(0,_objectWithoutProperties2.default)(props,_excluded),_React$useState=React.useState(""),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),currentText=_React$useState2[0],setCurrentText=_React$useState2[1];return(0,_jsxRuntime.jsx)(_Text.default,Object.assign({testID:"overflow-replacement",style:[style,{fontSize}]},rest,{onTextLayout:function handleResizing(e){e.nativeEvent.lines.length>numberOfLines?setCurrentText(overflowReplacement):setCurrentText(currentText)},children:currentText||children}))};try{OverflowReplacement.displayName="OverflowReplacement",OverflowReplacement.__docgenInfo={description:"",displayName:"OverflowReplacement",props:{fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"number"}},overflowReplacement:{defaultValue:null,description:"",name:"overflowReplacement",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/text/auto-size/overflow-replacement.tsx#OverflowReplacement"]={docgenInfo:OverflowReplacement.__docgenInfo,name:"OverflowReplacement",path:"src/text/auto-size/overflow-replacement.tsx#OverflowReplacement"})}catch(__react_docgen_typescript_loader_error){}},"./src/text/auto-size/present-font-sizes.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.PresetFontSizes=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_Platform=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Platform/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["fontSizePresets","children","style","numberOfLines"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var PresetFontSizes=exports.PresetFontSizes=function PresetFontSizes(props){var fontSizePresets=props.fontSizePresets,children=props.children,style=props.style,numberOfLines=props.numberOfLines,rest=(0,_objectWithoutProperties2.default)(props,_excluded),_React$useState=React.useState(fontSizePresets[0]),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),currentFont=_React$useState2[0],setCurrentFont=_React$useState2[1],_React$useState3=React.useState(0),_React$useState4=(0,_slicedToArray2.default)(_React$useState3,2),currentIndex=_React$useState4[0],setCurrentIndex=_React$useState4[1];return(0,_jsxRuntime.jsx)(_Text.default,Object.assign({testID:"preset-font-sizes",numberOfLines:function handleNumberOfLines(){if("ios"===_Platform.default.OS&&currentIndex===fontSizePresets.length-1||"android"===_Platform.default.OS)return numberOfLines}(),style:[style,{fontSize:currentFont}],onTextLayout:function handleResizing(e){if(e.nativeEvent.lines.length>numberOfLines&&currentIndex<fontSizePresets.length-1){var updatedIndex=currentIndex+1;setCurrentIndex(updatedIndex),setCurrentFont(fontSizePresets[updatedIndex])}}},rest,{children}))};try{PresetFontSizes.displayName="PresetFontSizes",PresetFontSizes.__docgenInfo={description:"",displayName:"PresetFontSizes",props:{fontSizePresets:{defaultValue:null,description:"",name:"fontSizePresets",required:!0,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/text/auto-size/present-font-sizes.tsx#PresetFontSizes"]={docgenInfo:PresetFontSizes.__docgenInfo,name:"PresetFontSizes",path:"src/text/auto-size/present-font-sizes.tsx#PresetFontSizes"})}catch(__react_docgen_typescript_loader_error){}},"./src/text/auto-size/step-granularity.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.StepGranularity=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_Platform=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Platform/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["fontSize","children","style","numberOfLines","granularity"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var StepGranularity=exports.StepGranularity=function StepGranularity(props){var fontSize=props.fontSize,children=props.children,style=props.style,numberOfLines=props.numberOfLines,granularity=props.granularity,rest=(0,_objectWithoutProperties2.default)(props,_excluded),_React$useState=React.useState(fontSize),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),currentFont=_React$useState2[0],setCurrentFont=_React$useState2[1];return(0,_jsxRuntime.jsx)(_Text.default,Object.assign({testID:"step-granularity",numberOfLines:function handleNumberOfLines(){if("android"===_Platform.default.OS)return numberOfLines}(),style:[style,{fontSize:currentFont}],onTextLayout:function handleResizing(e){e.nativeEvent.lines.length>numberOfLines&&setCurrentFont(currentFont-granularity)}},rest,{children}))};try{StepGranularity.displayName="StepGranularity",StepGranularity.__docgenInfo={description:"",displayName:"StepGranularity",props:{fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"number"}},granularity:{defaultValue:null,description:"",name:"granularity",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/text/auto-size/step-granularity.tsx#StepGranularity"]={docgenInfo:StepGranularity.__docgenInfo,name:"StepGranularity",path:"src/text/auto-size/step-granularity.tsx#StepGranularity"})}catch(__react_docgen_typescript_loader_error){}}}]);