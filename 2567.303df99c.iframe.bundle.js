(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[2567,77037,9685,24749],{"./node_modules/@wcpos/hooks/src/use-merged-ref/assign-ref.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.assignRef=function assignRef(ref,value){"function"==typeof ref?ref(value):"object"==typeof ref&&null!==ref&&"current"in ref&&(ref.current=value)}},"./node_modules/@wcpos/hooks/src/use-merged-ref/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _useMergedRef.useMergedRef}});var _useMergedRef=__webpack_require__("./node_modules/@wcpos/hooks/src/use-merged-ref/use-merged-ref.ts")},"./node_modules/@wcpos/hooks/src/use-merged-ref/use-merged-ref.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeRefs=mergeRefs,exports.useMergedRef=function useMergedRef(){for(var _len2=arguments.length,refs=new Array(_len2),_key2=0;_key2<_len2;_key2++)refs[_key2]=arguments[_key2];return React.useCallback(mergeRefs.apply(void 0,refs),refs)};var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_assignRef=__webpack_require__("./node_modules/@wcpos/hooks/src/use-merged-ref/assign-ref.ts");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function mergeRefs(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(node){refs.forEach((function(ref){return(0,_assignRef.assignRef)(ref,node)}))}}},"./src/form-layout/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"InputWithLabel",{enumerable:!0,get:function get(){return _inputWithLabel.InputWithLabel}});var _inputWithLabel=__webpack_require__("./src/form-layout/input-with-label.tsx")},"./src/form-layout/input-with-label.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.InputWithLabel=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _TouchableWithoutFeedback=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/TouchableWithoutFeedback/index.js")),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_inlineError=_interopRequireDefault(__webpack_require__("./src/inline-error/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InputWithLabel=function InputWithLabel(_ref){var label=_ref.label,error=_ref.error,helpText=_ref.helpText,disabled=_ref.disabled,children=_ref.children,onLabelPress=_ref.onLabelPress;return(0,_jsxRuntime.jsxs)(_box.default,{space:"xSmall",children:[label&&(0,_jsxRuntime.jsx)(_TouchableWithoutFeedback.default,{onPress:onLabelPress,disabled,children:(0,_jsxRuntime.jsx)(_box.default,{children:(0,_jsxRuntime.jsx)(_text.default,{uppercase:!0,size:"small",numberOfLines:1,type:"textMuted",children:label})})}),children,error&&(0,_jsxRuntime.jsx)(_box.default,{children:(0,_jsxRuntime.jsx)(_inlineError.default,{message:"string"==typeof error?error:""})}),helpText&&(0,_jsxRuntime.jsx)(_box.default,{children:(0,_jsxRuntime.jsx)(_text.default,{type:"secondary",size:"small",children:helpText})})]})};exports.InputWithLabel=InputWithLabel;try{InputWithLabel.displayName="InputWithLabel",InputWithLabel.__docgenInfo={description:"Wraps a basic Input field with label, helpText and error features.",displayName:"InputWithLabel",props:{label:{defaultValue:null,description:"Label shown above the input.",name:"label",required:!1,type:{name:"string"}},onLabelPress:{defaultValue:null,description:"Callback called on click of the label.",name:"onLabelPress",required:!1,type:{name:"(() => void)"}},helpText:{defaultValue:null,description:"Additional text to help the user.",name:"helpText",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Display an error state.",name:"error",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disable the input.",name:"disabled",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"TextInput component.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-layout/input-with-label.tsx#InputWithLabel"]={docgenInfo:InputWithLabel.__docgenInfo,name:"InputWithLabel",path:"src/form-layout/input-with-label.tsx#InputWithLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/inline-error/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _inlineError.InlineError}});var _inlineError=__webpack_require__("./src/inline-error/inline-error.tsx")},"./src/inline-error/inline-error.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.InlineError=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InlineError=function InlineError(_ref){var message=_ref.message;return(0,_jsxRuntime.jsxs)(_box.default,{horizontal:!0,space:"xSmall",align:"center",children:[(0,_jsxRuntime.jsx)(_icon.default,{name:"triangleExclamation",type:"critical",size:"small"}),(0,_jsxRuntime.jsx)(_text.default,{type:"critical",size:"small",children:message})]})};exports.InlineError=InlineError;try{InlineError.displayName="InlineError",InlineError.__docgenInfo={description:"Brief, in-context messages telling the user that something went wrong\nwith a single or group of inputs in a form.\n\nUse to let users know why a form input is invalid and how to fix it.\n\n> Used in `TextField` component to display error message.",displayName:"InlineError",props:{message:{defaultValue:null,description:"Error message.",name:"message",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/inline-error/inline-error.tsx#InlineError"]={docgenInfo:InlineError.__docgenInfo,name:"InlineError",path:"src/inline-error/inline-error.tsx#InlineError"})}catch(__react_docgen_typescript_loader_error){}},"./src/textarea/textarea.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextArea=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_textinput=_interopRequireDefault(__webpack_require__("./src/textinput/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["numberOfLines"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var TextArea=React.forwardRef((function(_ref,ref){var _ref$numberOfLines=_ref.numberOfLines,numberOfLines=void 0===_ref$numberOfLines?3:_ref$numberOfLines,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);return(0,_jsxRuntime.jsx)(_textinput.default,Object.assign({multiline:!0,numberOfLines},props,{ref}))}));exports.TextArea=TextArea;try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{type:{defaultValue:null,description:"Type of the TextField.\n\nWill define a logical `autoCapitalize` value if not set.\n\nAlso defines the type of keyboard displayed and the value for autocomplete/autofill properties.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"url"'},{value:'"email"'},{value:'"username"'},{value:'"password"'},{value:'"new-password"'},{value:'"first-name"'},{value:'"last-name"'},{value:'"integer"'}]}},disabled:{defaultValue:null,description:"Set to `true` to disable.",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"Set to `true` to disable.",name:"readonly",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Set to `true` for loading state.",name:"loading",required:!1,type:{name:"boolean"}},clearable:{defaultValue:null,description:"Set to `true` to add icon for clearing textfield.",name:"clearable",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Put input into error state.",name:"error",required:!1,type:{name:"boolean"}},focused:{defaultValue:null,description:"Set to `true` to focus the field and to `false` to blur it.\n\nTo initially focus this field when arriving on this screen, simply use\n\n```tsx\n<TextField focused />\n```",name:"focused",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"Called when the clear icon is pressed",name:"onClear",required:!1,type:{name:"(() => void)"}},prefix:{defaultValue:null,description:"Display a prefix label on the input.",name:"prefix",required:!1,type:{name:"string"}},leftAccessory:{defaultValue:null,description:"Adds functionality to the TextInput, eg: buttons, pills, etc.",name:"leftAccessory",required:!1,type:{name:"ReactNode"}},rightAccessory:{defaultValue:null,description:"Adds functionality to the TextInput, eg: action buttons",name:"rightAccessory",required:!1,type:{name:"ReactNode"}},containerStyle:{defaultValue:null,description:"",name:"containerStyle",required:!1,type:{name:"StyleProp<TextStyle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/textarea/textarea.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"src/textarea/textarea.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}},"./src/textinput/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"TextInputContainer",{enumerable:!0,get:function get(){return _container.TextInputContainer}}),Object.defineProperty(exports,"TextInputWithLabel",{enumerable:!0,get:function get(){return _withLabel.TextInputWithLabel}}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _textinput.TextInput}});var _textinput=__webpack_require__("./src/textinput/textinput.tsx"),_withLabel=__webpack_require__("./src/textinput/with-label.tsx"),_container=__webpack_require__("./src/textinput/container.tsx")},"./src/textinput/with-label.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextInputWithLabel=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_useMergedRef=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/hooks/src/use-merged-ref/index.ts")),_textinput=__webpack_require__("./src/textinput/textinput.tsx"),_formLayout=__webpack_require__("./src/form-layout/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["label","helpText","error","onLabelPress"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var TextInputWithLabel=React.forwardRef((function(_ref,ref){var label=_ref.label,helpText=_ref.helpText,error=_ref.error,onLabelPress=_ref.onLabelPress,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),mergedRef=(0,_useMergedRef.default)(React.useRef(null),ref),handleLabelPress=React.useCallback((function(){var _mergedRef$current;null==(_mergedRef$current=mergedRef.current)||_mergedRef$current.focus(),onLabelPress&&onLabelPress()}),[mergedRef,onLabelPress]);return(0,_jsxRuntime.jsx)(_formLayout.InputWithLabel,{label,helpText,error,onLabelPress:handleLabelPress,children:(0,_jsxRuntime.jsx)(_textinput.TextInput,Object.assign({},props,{ref:mergedRef}))})}));exports.TextInputWithLabel=TextInputWithLabel;try{TextInputWithLabel.displayName="TextInputWithLabel",TextInputWithLabel.__docgenInfo={description:"",displayName:"TextInputWithLabel",props:{type:{defaultValue:null,description:"Type of the TextField.\n\nWill define a logical `autoCapitalize` value if not set.\n\nAlso defines the type of keyboard displayed and the value for autocomplete/autofill properties.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"url"'},{value:'"email"'},{value:'"username"'},{value:'"password"'},{value:'"new-password"'},{value:'"first-name"'},{value:'"last-name"'},{value:'"integer"'}]}},disabled:{defaultValue:null,description:"Set to `true` to disable.\nDisable the input.",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"Set to `true` to disable.",name:"readonly",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Set to `true` for loading state.",name:"loading",required:!1,type:{name:"boolean"}},clearable:{defaultValue:null,description:"Set to `true` to add icon for clearing textfield.",name:"clearable",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Put input into error state.\nDisplay an error state.",name:"error",required:!1,type:{name:"undefined"}},focused:{defaultValue:null,description:"Set to `true` to focus the field and to `false` to blur it.\n\nTo initially focus this field when arriving on this screen, simply use\n\n```tsx\n<TextField focused />\n```",name:"focused",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"Called when the clear icon is pressed",name:"onClear",required:!1,type:{name:"(() => void)"}},prefix:{defaultValue:null,description:"Display a prefix label on the input.",name:"prefix",required:!1,type:{name:"string"}},leftAccessory:{defaultValue:null,description:"Adds functionality to the TextInput, eg: buttons, pills, etc.",name:"leftAccessory",required:!1,type:{name:"ReactNode"}},rightAccessory:{defaultValue:null,description:"Adds functionality to the TextInput, eg: action buttons",name:"rightAccessory",required:!1,type:{name:"ReactNode"}},containerStyle:{defaultValue:null,description:"",name:"containerStyle",required:!1,type:{name:"StyleProp<TextStyle>"}},label:{defaultValue:null,description:"Label shown above the input.",name:"label",required:!1,type:{name:"string"}},onLabelPress:{defaultValue:null,description:"Callback called on click of the label.",name:"onLabelPress",required:!1,type:{name:"(() => void)"}},helpText:{defaultValue:null,description:"Additional text to help the user.",name:"helpText",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/textinput/with-label.tsx#TextInputWithLabel"]={docgenInfo:TextInputWithLabel.__docgenInfo,name:"TextInputWithLabel",path:"src/textinput/with-label.tsx#TextInputWithLabel"})}catch(__react_docgen_typescript_loader_error){}}}]);