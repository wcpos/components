(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[35389,53670,72851,51573,77293,25668],{"./node_modules/@wcpos/hooks/src/use-merged-ref/assign-ref.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.assignRef=function assignRef(ref,value){"function"==typeof ref?ref(value):"object"==typeof ref&&null!==ref&&"current"in ref&&(ref.current=value)}},"./node_modules/@wcpos/hooks/src/use-merged-ref/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _useMergedRef.useMergedRef}});var _useMergedRef=__webpack_require__("./node_modules/@wcpos/hooks/src/use-merged-ref/use-merged-ref.ts")},"./node_modules/@wcpos/hooks/src/use-merged-ref/use-merged-ref.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeRefs=mergeRefs,exports.useMergedRef=function useMergedRef(){for(var _len2=arguments.length,refs=new Array(_len2),_key2=0;_key2<_len2;_key2++)refs[_key2]=arguments[_key2];return React.useCallback(mergeRefs.apply(void 0,refs),refs)};var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_assignRef=__webpack_require__("./node_modules/@wcpos/hooks/src/use-merged-ref/assign-ref.ts");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function mergeRefs(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(node){refs.forEach((function(ref){return(0,_assignRef.assignRef)(ref,node)}))}}},"./node_modules/lodash/_assignValue.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseAssignValue=__webpack_require__("./node_modules/lodash/_baseAssignValue.js"),eq=__webpack_require__("./node_modules/lodash/eq.js"),hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function assignValue(object,key,value){var objValue=object[key];hasOwnProperty.call(object,key)&&eq(objValue,value)&&(void 0!==value||key in object)||baseAssignValue(object,key,value)}},"./node_modules/lodash/_baseDelay.js":module=>{module.exports=function baseDelay(func,wait,args){if("function"!=typeof func)throw new TypeError("Expected a function");return setTimeout((function(){func.apply(void 0,args)}),wait)}},"./node_modules/lodash/_baseFlatten.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayPush=__webpack_require__("./node_modules/lodash/_arrayPush.js"),isFlattenable=__webpack_require__("./node_modules/lodash/_isFlattenable.js");module.exports=function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;for(predicate||(predicate=isFlattenable),result||(result=[]);++index<length;){var value=array[index];depth>0&&predicate(value)?depth>1?baseFlatten(value,depth-1,predicate,isStrict,result):arrayPush(result,value):isStrict||(result[result.length]=value)}return result}},"./node_modules/lodash/_basePick.js":(module,__unused_webpack_exports,__webpack_require__)=>{var basePickBy=__webpack_require__("./node_modules/lodash/_basePickBy.js"),hasIn=__webpack_require__("./node_modules/lodash/hasIn.js");module.exports=function basePick(object,paths){return basePickBy(object,paths,(function(value,path){return hasIn(object,path)}))}},"./node_modules/lodash/_basePickBy.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseGet=__webpack_require__("./node_modules/lodash/_baseGet.js"),baseSet=__webpack_require__("./node_modules/lodash/_baseSet.js"),castPath=__webpack_require__("./node_modules/lodash/_castPath.js");module.exports=function basePickBy(object,paths,predicate){for(var index=-1,length=paths.length,result={};++index<length;){var path=paths[index],value=baseGet(object,path);predicate(value,path)&&baseSet(result,castPath(path,object),value)}return result}},"./node_modules/lodash/_baseSet.js":(module,__unused_webpack_exports,__webpack_require__)=>{var assignValue=__webpack_require__("./node_modules/lodash/_assignValue.js"),castPath=__webpack_require__("./node_modules/lodash/_castPath.js"),isIndex=__webpack_require__("./node_modules/lodash/_isIndex.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),toKey=__webpack_require__("./node_modules/lodash/_toKey.js");module.exports=function baseSet(object,path,value,customizer){if(!isObject(object))return object;for(var index=-1,length=(path=castPath(path,object)).length,lastIndex=length-1,nested=object;null!=nested&&++index<length;){var key=toKey(path[index]),newValue=value;if("__proto__"===key||"constructor"===key||"prototype"===key)return object;if(index!=lastIndex){var objValue=nested[key];void 0===(newValue=customizer?customizer(objValue,key,nested):void 0)&&(newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{})}assignValue(nested,key,newValue),nested=nested[key]}return object}},"./node_modules/lodash/_baseTrim.js":(module,__unused_webpack_exports,__webpack_require__)=>{var trimmedEndIndex=__webpack_require__("./node_modules/lodash/_trimmedEndIndex.js"),reTrimStart=/^\s+/;module.exports=function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,""):string}},"./node_modules/lodash/_baseValues.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayMap=__webpack_require__("./node_modules/lodash/_arrayMap.js");module.exports=function baseValues(object,props){return arrayMap(props,(function(key){return object[key]}))}},"./node_modules/lodash/_flatRest.js":(module,__unused_webpack_exports,__webpack_require__)=>{var flatten=__webpack_require__("./node_modules/lodash/flatten.js"),overRest=__webpack_require__("./node_modules/lodash/_overRest.js"),setToString=__webpack_require__("./node_modules/lodash/_setToString.js");module.exports=function flatRest(func){return setToString(overRest(func,void 0,flatten),func+"")}},"./node_modules/lodash/_isFlattenable.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Symbol=__webpack_require__("./node_modules/lodash/_Symbol.js"),isArguments=__webpack_require__("./node_modules/lodash/isArguments.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),spreadableSymbol=Symbol?Symbol.isConcatSpreadable:void 0;module.exports=function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol])}},"./node_modules/lodash/_trimmedEndIndex.js":module=>{var reWhitespace=/\s/;module.exports=function trimmedEndIndex(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index}},"./node_modules/lodash/delay.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseDelay=__webpack_require__("./node_modules/lodash/_baseDelay.js"),baseRest=__webpack_require__("./node_modules/lodash/_baseRest.js"),toNumber=__webpack_require__("./node_modules/lodash/toNumber.js"),delay=baseRest((function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args)}));module.exports=delay},"./node_modules/lodash/flatten.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseFlatten=__webpack_require__("./node_modules/lodash/_baseFlatten.js");module.exports=function flatten(array){return(null==array?0:array.length)?baseFlatten(array,1):[]}},"./node_modules/lodash/pick.js":(module,__unused_webpack_exports,__webpack_require__)=>{var basePick=__webpack_require__("./node_modules/lodash/_basePick.js"),pick=__webpack_require__("./node_modules/lodash/_flatRest.js")((function(object,paths){return null==object?{}:basePick(object,paths)}));module.exports=pick},"./node_modules/lodash/toNumber.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseTrim=__webpack_require__("./node_modules/lodash/_baseTrim.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isSymbol=__webpack_require__("./node_modules/lodash/isSymbol.js"),reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=function toNumber(value){if("number"==typeof value)return value;if(isSymbol(value))return NaN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NaN:+value}},"./node_modules/lodash/uniqueId.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}},"./node_modules/lodash/values.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseValues=__webpack_require__("./node_modules/lodash/_baseValues.js"),keys=__webpack_require__("./node_modules/lodash/keys.js");module.exports=function values(object){return null==object?[]:baseValues(object,keys(object))}},"./src/icon/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _icon.Icon}});var _icon=__webpack_require__("./src/icon/icon.tsx")},"./src/textinput/container.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextInputContainer=void 0;(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n})(__webpack_require__("./node_modules/react/index.js"));var _native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var paddingMap={small:"xSmall",normal:"small"},TextInputContainer=exports.TextInputContainer=function TextInputContainer(_ref){var children=_ref.children,showClear=_ref.showClear,leftAccessory=_ref.leftAccessory,prefix=_ref.prefix,rightAccessory=_ref.rightAccessory,style=_ref.style,onClear=_ref.onClear,onPress=_ref.onPress,onLongPress=_ref.onLongPress,onHoverIn=_ref.onHoverIn,onHoverOut=_ref.onHoverOut,onFocus=_ref.onFocus,onBlur=_ref.onBlur,hasFocus=_ref.hasFocus,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,theme=(0,_native.useTheme)(),input="string"==typeof children?(0,_jsxRuntime.jsx)(_text.default,{children}):children;return(0,_jsxRuntime.jsx)(_pressable.default,{onPress,onLongPress,onHoverIn,onHoverOut,onFocus,onBlur,style,children:(0,_jsxRuntime.jsxs)(_box.default,{fill:!0,horizontal:!0,border:!0,rounding:"small",align:"center",style:[{flex:1,backgroundColor:theme.colors.inputBackground,borderColor:hasFocus?theme.colors.primary:theme.colors.border}],children:[leftAccessory,prefix&&(0,_jsxRuntime.jsx)(_box.default,{padding:paddingMap[size]||"small",paddingRight:"none",children:(0,_jsxRuntime.jsx)(_text.default,{children:prefix})}),(0,_jsxRuntime.jsx)(_box.default,{padding:paddingMap[size]||"small",style:{flex:1},children:input}),showClear&&(0,_jsxRuntime.jsx)(_box.default,{padding:paddingMap[size]||"small",children:(0,_jsxRuntime.jsx)(_icon.default,{name:"xmark",size:"small",onPress:onClear})}),rightAccessory]})})};try{TextInputContainer.displayName="TextInputContainer",TextInputContainer.__docgenInfo={description:"",displayName:"TextInputContainer",props:{children:{defaultValue:null,description:"Usually this will be the TextInput component, but can be plain text, eg: for Select component",name:"children",required:!0,type:{name:"ReactNode"}},showClear:{defaultValue:null,description:"Set to `true` to add clear icon.",name:"showClear",required:!1,type:{name:"boolean"}},leftAccessory:{defaultValue:null,description:"",name:"leftAccessory",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},rightAccessory:{defaultValue:null,description:"",name:"rightAccessory",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},onClear:{defaultValue:null,description:"Called when the clear icon is pressed",name:"onClear",required:!1,type:{name:"(() => void)"}},hasFocus:{defaultValue:null,description:"",name:"hasFocus",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/textinput/container.tsx#TextInputContainer"]={docgenInfo:TextInputContainer.__docgenInfo,name:"TextInputContainer",path:"src/textinput/container.tsx#TextInputContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/textinput/modifiers.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.getModifiers=void 0;var _get=_interopRequireDefault(__webpack_require__("./node_modules/lodash/get.js")),modifiers={text:{textContentType:"none",autoCapitalize:"none"},email:{inputMode:"email-address",textContentType:"emailAddress",autoComplete:"email",autoCapitalize:"none"},password:{textContentType:"password",autoComplete:"password",autoCapitalize:"none",secureTextEntry:!0},"new-password":{textContentType:"password",autoComplete:"password",autoCapitalize:"none",secureTextEntry:!0},"first-name":{textContentType:"name",autoCapitalize:"words"},"last-name":{textContentType:"familyName",autoCapitalize:"words"},integer:{textContentType:"none",inputMode:"number-pad"},url:{textContentType:"URL",inputMode:"url",autoCapitalize:"none",autoComplete:"off"},username:{textContentType:"none",autoCapitalize:"none"}};exports.getModifiers=function getModifiers(){var type=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"text",autoCapitalize=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",obj=(0,_get.default)(modifiers,type,modifiers.text);return autoCapitalize?Object.assign({},obj,{autoCapitalize}):obj}},"./src/textinput/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextInput=void 0;var _native=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")),_platform=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/utils/src/platform/index.web.ts"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}exports.TextInput=_native.default.TextInput.withConfig({displayName:"styles__TextInput",componentId:"sc-1s500cc-0"})(["font-family:",";font-size:",";line-height:",";padding:0;margin:0;",""],(function(_ref){return _ref.theme.font.family}),(function(_ref2){var theme=_ref2.theme,size=_ref2.size;return theme.font.size[size]}),(function(_ref3){var theme=_ref3.theme,size=_ref3.size;return theme.font.lineHeight[size]}),"ios"!==_platform.default.OS&&"android"!==_platform.default.OS&&(0,_native.css)(["outline-width:0;outline-style:none;outline-color:transparent;::-moz-focus-inner{border:0;}"]))},"./src/textinput/textinput.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextInput=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_isFunction=_interopRequireDefault(__webpack_require__("./node_modules/lodash/isFunction.js")),_native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),_useMergedRef=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/hooks/src/use-merged-ref/index.ts")),_container=__webpack_require__("./src/textinput/container.tsx"),_modifiers=__webpack_require__("./src/textinput/modifiers.ts"),Styled=_interopRequireWildcard(__webpack_require__("./src/textinput/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["value","onChangeText","type","placeholder","disabled","readonly","error","focused","onClear","autoCapitalize","prefix","leftAccessory","rightAccessory","onFocus","onBlur","clearable","style","loading","containerStyle","size"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var TextInput=exports.TextInput=React.forwardRef((function(_ref,ref){var _ref$value=_ref.value,value=void 0===_ref$value?"":_ref$value,onChangeText=_ref.onChangeText,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,placeholder=_ref.placeholder,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$readonly=_ref.readonly,readonly=void 0!==_ref$readonly&&_ref$readonly,_ref$focused=(_ref.error,_ref.focused),focused=void 0!==_ref$focused&&_ref$focused,onClear=_ref.onClear,autoCapitalize=_ref.autoCapitalize,prefix=_ref.prefix,leftAccessory=_ref.leftAccessory,rightAccessory=_ref.rightAccessory,onFocusProp=_ref.onFocus,onBlurProp=_ref.onBlur,_ref$clearable=_ref.clearable,clearable=void 0!==_ref$clearable&&_ref$clearable,style=_ref.style,containerStyle=(_ref.loading,_ref.containerStyle),_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),theme=(0,_native.useTheme)(),_React$useState=React.useState(focused),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),hasFocus=_React$useState2[0],setHasFocus=_React$useState2[1],inputRef=React.useRef(null),mergedRef=(0,_useMergedRef.default)(ref,inputRef),onFocus=React.useCallback((function(e){null==onFocusProp||onFocusProp(e),setHasFocus(!0)}),[onFocusProp]),onBlur=React.useCallback((function(e){null==onBlurProp||onBlurProp(e),setHasFocus(!1)}),[onBlurProp]),handleClear=React.useCallback((function(){var _inputRef$current;null==(_inputRef$current=inputRef.current)||_inputRef$current.focus(),(0,_isFunction.default)(onClear)?onClear():(0,_isFunction.default)(onChangeText)&&onChangeText("")}),[inputRef,onChangeText,onClear]),onContainerFocus=React.useCallback((function(){var _inputRef$current2;null==(_inputRef$current2=inputRef.current)||_inputRef$current2.focus()}),[inputRef]),handleKeyPress=React.useCallback((function(e){"Enter"===e.nativeEvent.key&&(null==props.onReturnKeyPress||props.onReturnKeyPress()),null==props.onKeyPress||props.onKeyPress(e)}),[props]);return(0,_jsxRuntime.jsx)(_container.TextInputContainer,{showClear:clearable&&""!==value,onClear:handleClear,prefix,leftAccessory,rightAccessory,onFocus:onContainerFocus,hasFocus,style:containerStyle,size,children:(0,_jsxRuntime.jsx)(Styled.TextInput,Object.assign({ref:mergedRef},(0,_modifiers.getModifiers)(type,autoCapitalize),{placeholder,placeholderTextColor:theme.colors.textMuted,editable:!disabled&&!readonly,value,onChangeText,onFocus,onBlur,onKeyPress:handleKeyPress,style,size},props))})}));try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"Input field that users can type into.",displayName:"TextInput",props:{type:{defaultValue:{value:"text"},description:"Type of the TextField.\n\nWill define a logical `autoCapitalize` value if not set.\n\nAlso defines the type of keyboard displayed and the value for autocomplete/autofill properties.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"email"'},{value:'"new-password"'},{value:'"password"'},{value:'"url"'},{value:'"username"'},{value:'"first-name"'},{value:'"last-name"'},{value:'"integer"'}]}},disabled:{defaultValue:{value:"false"},description:"Set to `true` to disable.",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:{value:"false"},description:"Set to `true` to disable.",name:"readonly",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Set to `true` for loading state.",name:"loading",required:!1,type:{name:"boolean"}},clearable:{defaultValue:{value:"false"},description:"Set to `true` to add icon for clearing textfield.",name:"clearable",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"Put input into error state.",name:"error",required:!1,type:{name:"boolean"}},focused:{defaultValue:{value:"false"},description:"Set to `true` to focus the field and to `false` to blur it.\n\nTo initially focus this field when arriving on this screen, simply use\n\n```tsx\n<TextField focused />\n```",name:"focused",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"Called when the clear icon is pressed",name:"onClear",required:!1,type:{name:"(() => void)"}},prefix:{defaultValue:null,description:"Display a prefix label on the input.",name:"prefix",required:!1,type:{name:"string"}},leftAccessory:{defaultValue:null,description:"Adds functionality to the TextInput, eg: buttons, pills, etc.",name:"leftAccessory",required:!1,type:{name:"ReactNode"}},rightAccessory:{defaultValue:null,description:"Adds functionality to the TextInput, eg: action buttons",name:"rightAccessory",required:!1,type:{name:"ReactNode"}},containerStyle:{defaultValue:null,description:"",name:"containerStyle",required:!1,type:{name:"StyleProp<TextStyle>"}},size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},onReturnKeyPress:{defaultValue:null,description:"",name:"onReturnKeyPress",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/textinput/textinput.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"src/textinput/textinput.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}}}]);