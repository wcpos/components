(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[46334,56589,74732,63],{"./src/base-input-del/base-input-container.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.BaseInputContainer=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_inlineError=_interopRequireDefault(__webpack_require__("./src/inline-error/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),BaseInputContainer=function BaseInputContainer(_ref){var label=_ref.label,error=_ref.error,helpText=_ref.helpText,disabled=_ref.disabled,children=_ref.children,onLabelClick=_ref.onLabelClick,_ref$hideLabel=_ref.hideLabel,hideLabel=void 0!==_ref$hideLabel&&_ref$hideLabel;return(0,_jsxRuntime.jsxs)(_box.default,{space:"xSmall",children:[!hideLabel&&(0,_jsxRuntime.jsx)(_pressable.default,{onPress:onLabelClick,disabled,children:(0,_jsxRuntime.jsx)(_box.default,{children:(0,_jsxRuntime.jsx)(_text.default,{children:label})})}),children,error?(0,_jsxRuntime.jsx)(_box.default,{children:(0,_jsxRuntime.jsx)(_inlineError.default,{size:"small",message:"string"==typeof error?error:""})}):null,helpText?(0,_jsxRuntime.jsx)(_box.default,{children:(0,_jsxRuntime.jsx)(_text.default,{type:"secondary",size:"small",children:helpText})}):null]})};exports.BaseInputContainer=BaseInputContainer;try{BaseInputContainer.displayName="BaseInputContainer",BaseInputContainer.__docgenInfo={description:"Wraps a basic Input field with label, helpText and error features.",displayName:"BaseInputContainer",props:{label:{defaultValue:null,description:"Label shown above the input.",name:"label",required:!0,type:{name:"string"}},onLabelClick:{defaultValue:null,description:"Callback called on click of the label.",name:"onLabelClick",required:!0,type:{name:"() => void"}},helpText:{defaultValue:null,description:"Additional text to help the user.",name:"helpText",required:!0,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Display an error state.",name:"error",required:!0,type:{name:"string | boolean"}},disabled:{defaultValue:null,description:"Disable the input.",name:"disabled",required:!0,type:{name:"boolean"}},children:{defaultValue:null,description:"TextInput component.",name:"children",required:!0,type:{name:"ReactNode"}},hideLabel:{defaultValue:{value:"false"},description:"Hides the label.",name:"hideLabel",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/base-input-del/base-input-container.tsx#BaseInputContainer"]={docgenInfo:BaseInputContainer.__docgenInfo,name:"BaseInputContainer",path:"src/base-input-del/base-input-container.tsx#BaseInputContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/icon/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _icon.Icon}});var _icon=__webpack_require__("./src/icon/icon.tsx")},"./src/inline-error/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _inlineError.InlineError}});var _inlineError=__webpack_require__("./src/inline-error/inline-error.tsx")},"./src/inline-error/inline-error.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.InlineError=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InlineError=function InlineError(_ref){var message=_ref.message,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size;return(0,_jsxRuntime.jsxs)(_box.default,{horizontal:!0,space:"xSmall",align:"center",children:[(0,_jsxRuntime.jsx)(_icon.default,{name:"triangleExclamation",type:"critical",size}),(0,_jsxRuntime.jsx)(_text.default,{type:"critical",size,children:message})]})};exports.InlineError=InlineError;try{InlineError.displayName="InlineError",InlineError.__docgenInfo={description:"",displayName:"InlineError",props:{message:{defaultValue:null,description:"Error message.",name:"message",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/inline-error/inline-error.tsx#InlineError"]={docgenInfo:InlineError.__docgenInfo,name:"InlineError",path:"src/inline-error/inline-error.tsx#InlineError"})}catch(__react_docgen_typescript_loader_error){}}}]);