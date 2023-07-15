(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[26766,56589],{"./src/checkbox/icon.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function CheckboxIcon(_ref){var checked=_ref.checked,disabled=(_ref.hasError,_ref.disabled),size=(_ref.focused,_ref.hovered,_ref.pressed,_ref.size),sizeInPx=(0,_native.useTheme)().font.size[size];return(0,_jsxRuntime.jsx)(Styled.Box,{checked,style:{width:sizeInPx,height:sizeInPx},children:checked&&(0,_jsxRuntime.jsx)(_icon.default,{name:"check",disabled,type:"inverse",width:sizeInPx,height:sizeInPx})})};_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),Styled=_interopRequireWildcard(__webpack_require__("./src/checkbox/styles.ts")),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}try{icon.displayName="icon",icon.__docgenInfo={description:"",displayName:"icon",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},focused:{defaultValue:null,description:"",name:"focused",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"",name:"hovered",required:!1,type:{name:"boolean"}},pressed:{defaultValue:null,description:"",name:"pressed",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/checkbox/icon.tsx#icon"]={docgenInfo:icon.__docgenInfo,name:"icon",path:"src/checkbox/icon.tsx#icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/checkbox/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Box=void 0;var _templateObject,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js")),Box=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")).default.View(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n\tflex: 0 1 auto;\n\talign-items: center;\n\tjustify-content: center;\n\tborder-style: solid;\n\tbackground-color: ",";\n\tborder-width: ",";\n\tborder-color: ",";\n\tborder-radius: ",";\n"])),(function(_ref){var theme=_ref.theme;return _ref.checked?theme.colors.primary:"transparent"}),(function(_ref2){return _ref2.theme.border.thinner+"px"}),(function(_ref3){var theme=_ref3.theme;return _ref3.checked?theme.colors.primary:theme.colors.border}),(function(_ref4){return _ref4.theme.rounding.small+"px"}));exports.Box=Box},"./src/icon/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _icon.Icon}});var _icon=__webpack_require__("./src/icon/icon.tsx")}}]);