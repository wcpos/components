(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[21373,70930],{"./src/combobox/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"ComboboxWithLabel",{enumerable:!0,get:function get(){return _withLabel.ComboboxWithLabel}}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _combobox.Combobox}});var _combobox=__webpack_require__("./src/combobox/combobox.tsx"),_withLabel=__webpack_require__("./src/combobox/with-label.tsx")},"./src/combobox/with-label.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.ComboboxWithLabel=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_combobox=(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),__webpack_require__("./src/combobox/combobox.tsx")),_formLayout=__webpack_require__("./src/form-layout/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["label","helpText","error","onLabelPress"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var ComboboxWithLabel=function ComboboxWithLabel(_ref){var label=_ref.label,helpText=_ref.helpText,error=_ref.error,onLabelPress=_ref.onLabelPress,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);return(0,_jsxRuntime.jsx)(_formLayout.InputWithLabel,{label,helpText,error,onLabelPress,children:(0,_jsxRuntime.jsx)(_combobox.Combobox,Object.assign({},props))})};exports.ComboboxWithLabel=ComboboxWithLabel;try{ComboboxWithLabel.displayName="ComboboxWithLabel",ComboboxWithLabel.__docgenInfo={description:"",displayName:"ComboboxWithLabel",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/combobox/with-label.tsx#ComboboxWithLabel"]={docgenInfo:ComboboxWithLabel.__docgenInfo,name:"ComboboxWithLabel",path:"src/combobox/with-label.tsx#ComboboxWithLabel"})}catch(__react_docgen_typescript_loader_error){}}}]);