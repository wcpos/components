(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[84409,9006],{"./src/checkbox/checkbox.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Checkbox=void 0;var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_isFunction=_interopRequireDefault(__webpack_require__("./node_modules/lodash/isFunction.js")),_icon=_interopRequireDefault(__webpack_require__("./src/checkbox/icon.tsx")),_label=_interopRequireDefault(__webpack_require__("./src/checkbox/label.tsx")),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var spaceMap={xSmall:"xSmall",small:"xSmall",normal:"small",medium:"small",large:"normal",xLarge:"normal",xxLarge:"medium"},Checkbox=function Checkbox(_ref){var label=_ref.label,disabled=_ref.disabled,helpText=_ref.helpText,_ref$value=_ref.value,value=void 0!==_ref$value&&_ref$value,onChange=_ref.onChange,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,type=_ref.type,style=_ref.style,onPress=React.useCallback((function(){(0,_isFunction.default)(onChange)&&onChange(!value)}),[value,onChange]);return(0,_jsxRuntime.jsx)(_pressable.default,{disabled,onPress,children:(0,_jsxRuntime.jsxs)(_box.default,{horizontal:!0,space:spaceMap[size],style,children:[(0,_jsxRuntime.jsx)(_icon.default,{checked:value,disabled,size}),(0,_jsxRuntime.jsx)(_label.default,{checked:value,info:helpText,size,type,children:label})]})})};exports.Checkbox=Checkbox;try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"TODO - hover, focus states",displayName:"Checkbox",props:{value:{defaultValue:{value:"false"},description:"True if selected.",name:"value",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label to display next to the Checkbox.",name:"label",required:!0,type:{name:"ReactNode"}},helpText:{defaultValue:null,description:"Additional text to aid in use.",name:"helpText",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"Disables the input.",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Called when selection state changes. Should propagate change to `checked` prop.",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},size:{defaultValue:{value:"normal"},description:"Size of the Checkbox. Matches font sizes.",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},style:{defaultValue:null,description:"Style passed to surrounding box.",name:"style",required:!1,type:{name:"ViewStyle"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/checkbox/checkbox.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/checkbox/checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/checkbox/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _checkbox.Checkbox}});var _checkbox=__webpack_require__("./src/checkbox/checkbox.tsx")},"./src/checkbox/label.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var _default=function Label(_ref){var children=_ref.children,info=(_ref.checked,_ref.info),size=_ref.size,type=_ref.type,label="string"==typeof children?(0,_jsxRuntime.jsx)(_text.default,{size,type,children}):children;return(0,_jsxRuntime.jsxs)(_box.default,{space:"small",children:[label,info&&(0,_jsxRuntime.jsx)(_text.default,{children:info})]})};exports.default=_default;try{label.displayName="label",label.__docgenInfo={description:"",displayName:"label",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},info:{defaultValue:null,description:"",name:"info",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/checkbox/label.tsx#label"]={docgenInfo:label.__docgenInfo,name:"label",path:"src/checkbox/label.tsx#label"})}catch(__react_docgen_typescript_loader_error){}}}]);