(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[61367,29299,46735,9685],{"./node_modules/@wcpos/hooks/src/use-merged-ref/assign-ref.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.assignRef=function assignRef(ref,value){"function"==typeof ref?ref(value):"object"==typeof ref&&null!==ref&&"current"in ref&&(ref.current=value)}},"./node_modules/@wcpos/hooks/src/use-merged-ref/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _useMergedRef.useMergedRef}});var _useMergedRef=__webpack_require__("./node_modules/@wcpos/hooks/src/use-merged-ref/use-merged-ref.ts")},"./node_modules/@wcpos/hooks/src/use-merged-ref/use-merged-ref.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeRefs=mergeRefs,exports.useMergedRef=function useMergedRef(){for(var _len2=arguments.length,refs=new Array(_len2),_key2=0;_key2<_len2;_key2++)refs[_key2]=arguments[_key2];return React.useCallback(mergeRefs.apply(void 0,refs),refs)};var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_assignRef=__webpack_require__("./node_modules/@wcpos/hooks/src/use-merged-ref/assign-ref.ts");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function mergeRefs(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(node){refs.forEach((function(ref){return(0,_assignRef.assignRef)(ref,node)}))}}},"./src/textarea/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _textarea.TextArea}});var _textarea=__webpack_require__("./src/textarea/textarea.tsx")},"./src/textarea/textarea.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextArea=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_textinput=_interopRequireDefault(__webpack_require__("./src/textinput/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["numberOfLines"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var TextArea=React.forwardRef((function(_ref,ref){var _ref$numberOfLines=_ref.numberOfLines,numberOfLines=void 0===_ref$numberOfLines?3:_ref$numberOfLines,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);return(0,_jsxRuntime.jsx)(_textinput.default,Object.assign({multiline:!0,numberOfLines},props,{ref}))}));exports.TextArea=TextArea;try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{type:{defaultValue:null,description:"Type of the TextField.\n\nWill define a logical `autoCapitalize` value if not set.\n\nAlso defines the type of keyboard displayed and the value for autocomplete/autofill properties.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"url"'},{value:'"email"'},{value:'"username"'},{value:'"password"'},{value:'"new-password"'},{value:'"first-name"'},{value:'"last-name"'},{value:'"integer"'}]}},disabled:{defaultValue:null,description:"Set to `true` to disable.",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"Set to `true` to disable.",name:"readonly",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Set to `true` for loading state.",name:"loading",required:!1,type:{name:"boolean"}},clearable:{defaultValue:null,description:"Set to `true` to add icon for clearing textfield.",name:"clearable",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Put input into error state.",name:"error",required:!1,type:{name:"boolean"}},focused:{defaultValue:null,description:"Set to `true` to focus the field and to `false` to blur it.\n\nTo initially focus this field when arriving on this screen, simply use\n\n```tsx\n<TextField focused />\n```",name:"focused",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"Called when the clear icon is pressed",name:"onClear",required:!1,type:{name:"(() => void)"}},prefix:{defaultValue:null,description:"Display a prefix label on the input.",name:"prefix",required:!1,type:{name:"string"}},leftAccessory:{defaultValue:null,description:"Adds functionality to the TextInput, eg: buttons, pills, etc.",name:"leftAccessory",required:!1,type:{name:"ReactNode"}},rightAccessory:{defaultValue:null,description:"Adds functionality to the TextInput, eg: action buttons",name:"rightAccessory",required:!1,type:{name:"ReactNode"}},containerStyle:{defaultValue:null,description:"",name:"containerStyle",required:!1,type:{name:"StyleProp<TextStyle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/textarea/textarea.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"src/textarea/textarea.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}},"./src/textinput/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"TextInputContainer",{enumerable:!0,get:function get(){return _container.TextInputContainer}}),Object.defineProperty(exports,"TextInputWithLabel",{enumerable:!0,get:function get(){return _withLabel.TextInputWithLabel}}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _textinput.TextInput}});var _textinput=__webpack_require__("./src/textinput/textinput.tsx"),_withLabel=__webpack_require__("./src/textinput/with-label.tsx"),_container=__webpack_require__("./src/textinput/container.tsx")}}]);