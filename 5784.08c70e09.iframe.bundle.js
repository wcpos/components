(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[5784],{"./src/base-input-del/base-input.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.BaseInput=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var Styled=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./src/base-input-del/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var BaseInput=function BaseInput(_ref){var value=_ref.value,placeholder=_ref.placeholder,onPress=_ref.onPress,disabled=(_ref.focused,_ref.disabled),leftAccessory=_ref.leftAccessory,rightAccessory=_ref.rightAccessory,style=_ref.style,showPlaceholder=!value||0===value.length;return(0,_jsxRuntime.jsxs)(Styled.InputAndAccessoryContainer,{onPress,disabled,style,children:[leftAccessory,(0,_jsxRuntime.jsx)(Styled.InputText,{type:showPlaceholder?"secondary":void 0,children:showPlaceholder?placeholder:value}),rightAccessory]})};exports.BaseInput=BaseInput;try{BaseInput.displayName="BaseInput",BaseInput.__docgenInfo={description:"Gives the look of a basic Input component. Use for components that look like a `TextField` but are not.",displayName:"BaseInput",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}},focused:{defaultValue:null,description:"",name:"focused",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},leftAccessory:{defaultValue:null,description:"Adds functionality to the TextInput, eg: buttons, tags",name:"leftAccessory",required:!1,type:{name:"ReactNode"}},rightAccessory:{defaultValue:null,description:"Adds functionality to the TextInput, eg: buttons, tags",name:"rightAccessory",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"Styles for the textinput container",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/base-input-del/base-input.tsx#BaseInput"]={docgenInfo:BaseInput.__docgenInfo,name:"BaseInput",path:"src/base-input-del/base-input.tsx#BaseInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/base-input-del/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"BaseInputContainer",{enumerable:!0,get:function get(){return _baseInputContainer.BaseInputContainer}}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _baseInput.BaseInput}});var _baseInput=__webpack_require__("./src/base-input-del/base-input.tsx"),_baseInputContainer=__webpack_require__("./src/base-input-del/base-input-container.tsx")},"./src/base-input-del/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.InputText=exports.InputAndAccessoryContainer=void 0;var _templateObject,_templateObject2,_templateObject3,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js")),_native=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")),_platform=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/utils/src/platform/index.web.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_styles=__webpack_require__("./src/text/styles.ts");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var InputAndAccessoryContainer=(0,_native.default)(_pressable.default)(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n\tflex-direction: row;\n\talign-items: center;\n\tbackground: ",";\n\tborder-width: ",";\n\tborder-color: ",";\n\tborder-style: solid;\n\tborder-radius: ",";\n\tpadding: ",";\n\n\t","\n"])),(function(_ref){return _ref.theme.colors.inputBackground}),(function(_ref2){return _ref2.theme.border.thinner+"px"}),(function(_ref3){return _ref3.theme.colors.border}),(function(_ref4){return _ref4.theme.rounding.small+"px"}),(function(_ref5){return _ref5.theme.spacing.small+"px"}),"ios"===_platform.default.OS&&(0,_native.css)(_templateObject2||(_templateObject2=(0,_taggedTemplateLiteralLoose2.default)(["\n\t\theight: 30px;\n\t"]))));exports.InputAndAccessoryContainer=InputAndAccessoryContainer;var InputText=(0,_native.default)(_styles.Text)(_templateObject3||(_templateObject3=(0,_taggedTemplateLiteralLoose2.default)(["\n\tflex: 1;\n"])));exports.InputText=InputText}}]);