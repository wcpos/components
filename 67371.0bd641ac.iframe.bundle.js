(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[67371,38476,53670,72851,53597,12906],{"./node_modules/lodash/_assignValue.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseAssignValue=__webpack_require__("./node_modules/lodash/_baseAssignValue.js"),eq=__webpack_require__("./node_modules/lodash/eq.js"),hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function assignValue(object,key,value){var objValue=object[key];hasOwnProperty.call(object,key)&&eq(objValue,value)&&(void 0!==value||key in object)||baseAssignValue(object,key,value)}},"./node_modules/lodash/_baseDelay.js":module=>{module.exports=function baseDelay(func,wait,args){if("function"!=typeof func)throw new TypeError("Expected a function");return setTimeout((function(){func.apply(void 0,args)}),wait)}},"./node_modules/lodash/_baseFlatten.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayPush=__webpack_require__("./node_modules/lodash/_arrayPush.js"),isFlattenable=__webpack_require__("./node_modules/lodash/_isFlattenable.js");module.exports=function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;for(predicate||(predicate=isFlattenable),result||(result=[]);++index<length;){var value=array[index];depth>0&&predicate(value)?depth>1?baseFlatten(value,depth-1,predicate,isStrict,result):arrayPush(result,value):isStrict||(result[result.length]=value)}return result}},"./node_modules/lodash/_basePick.js":(module,__unused_webpack_exports,__webpack_require__)=>{var basePickBy=__webpack_require__("./node_modules/lodash/_basePickBy.js"),hasIn=__webpack_require__("./node_modules/lodash/hasIn.js");module.exports=function basePick(object,paths){return basePickBy(object,paths,(function(value,path){return hasIn(object,path)}))}},"./node_modules/lodash/_basePickBy.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseGet=__webpack_require__("./node_modules/lodash/_baseGet.js"),baseSet=__webpack_require__("./node_modules/lodash/_baseSet.js"),castPath=__webpack_require__("./node_modules/lodash/_castPath.js");module.exports=function basePickBy(object,paths,predicate){for(var index=-1,length=paths.length,result={};++index<length;){var path=paths[index],value=baseGet(object,path);predicate(value,path)&&baseSet(result,castPath(path,object),value)}return result}},"./node_modules/lodash/_baseSet.js":(module,__unused_webpack_exports,__webpack_require__)=>{var assignValue=__webpack_require__("./node_modules/lodash/_assignValue.js"),castPath=__webpack_require__("./node_modules/lodash/_castPath.js"),isIndex=__webpack_require__("./node_modules/lodash/_isIndex.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),toKey=__webpack_require__("./node_modules/lodash/_toKey.js");module.exports=function baseSet(object,path,value,customizer){if(!isObject(object))return object;for(var index=-1,length=(path=castPath(path,object)).length,lastIndex=length-1,nested=object;null!=nested&&++index<length;){var key=toKey(path[index]),newValue=value;if("__proto__"===key||"constructor"===key||"prototype"===key)return object;if(index!=lastIndex){var objValue=nested[key];void 0===(newValue=customizer?customizer(objValue,key,nested):void 0)&&(newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{})}assignValue(nested,key,newValue),nested=nested[key]}return object}},"./node_modules/lodash/_baseTrim.js":(module,__unused_webpack_exports,__webpack_require__)=>{var trimmedEndIndex=__webpack_require__("./node_modules/lodash/_trimmedEndIndex.js"),reTrimStart=/^\s+/;module.exports=function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,""):string}},"./node_modules/lodash/_baseValues.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayMap=__webpack_require__("./node_modules/lodash/_arrayMap.js");module.exports=function baseValues(object,props){return arrayMap(props,(function(key){return object[key]}))}},"./node_modules/lodash/_flatRest.js":(module,__unused_webpack_exports,__webpack_require__)=>{var flatten=__webpack_require__("./node_modules/lodash/flatten.js"),overRest=__webpack_require__("./node_modules/lodash/_overRest.js"),setToString=__webpack_require__("./node_modules/lodash/_setToString.js");module.exports=function flatRest(func){return setToString(overRest(func,void 0,flatten),func+"")}},"./node_modules/lodash/_isFlattenable.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Symbol=__webpack_require__("./node_modules/lodash/_Symbol.js"),isArguments=__webpack_require__("./node_modules/lodash/isArguments.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),spreadableSymbol=Symbol?Symbol.isConcatSpreadable:void 0;module.exports=function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol])}},"./node_modules/lodash/_trimmedEndIndex.js":module=>{var reWhitespace=/\s/;module.exports=function trimmedEndIndex(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index}},"./node_modules/lodash/delay.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseDelay=__webpack_require__("./node_modules/lodash/_baseDelay.js"),baseRest=__webpack_require__("./node_modules/lodash/_baseRest.js"),toNumber=__webpack_require__("./node_modules/lodash/toNumber.js"),delay=baseRest((function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args)}));module.exports=delay},"./node_modules/lodash/flatten.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseFlatten=__webpack_require__("./node_modules/lodash/_baseFlatten.js");module.exports=function flatten(array){return(null==array?0:array.length)?baseFlatten(array,1):[]}},"./node_modules/lodash/pick.js":(module,__unused_webpack_exports,__webpack_require__)=>{var basePick=__webpack_require__("./node_modules/lodash/_basePick.js"),pick=__webpack_require__("./node_modules/lodash/_flatRest.js")((function(object,paths){return null==object?{}:basePick(object,paths)}));module.exports=pick},"./node_modules/lodash/toNumber.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseTrim=__webpack_require__("./node_modules/lodash/_baseTrim.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isSymbol=__webpack_require__("./node_modules/lodash/isSymbol.js"),reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=function toNumber(value){if("number"==typeof value)return value;if(isSymbol(value))return NaN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NaN:+value}},"./node_modules/lodash/uniqueId.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}},"./node_modules/lodash/values.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseValues=__webpack_require__("./node_modules/lodash/_baseValues.js"),keys=__webpack_require__("./node_modules/lodash/keys.js");module.exports=function values(object){return null==object?[]:baseValues(object,keys(object))}},"./src/form-layout/form-layout.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.BasicUsage=void 0;(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n})(__webpack_require__("./node_modules/react/index.js"));var _BasicUsage$parameter,_BasicUsage$parameter2,_BasicUsage$parameter3,_inputWithLabel=__webpack_require__("./src/form-layout/input-with-label.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var meta={title:"Components/InputContainer",component:_inputWithLabel.InputWithLabel},BasicUsage=exports.BasicUsage=function BasicUsage(props){return(0,_jsxRuntime.jsx)(_inputWithLabel.InputWithLabel,Object.assign({},props,{children:"hi"}))};BasicUsage.args={label:"Label",helpText:"Help text",error:"Error text"};exports.default=meta;BasicUsage.parameters=Object.assign({},BasicUsage.parameters,{docs:Object.assign({},null==(_BasicUsage$parameter=BasicUsage.parameters)?void 0:_BasicUsage$parameter.docs,{source:Object.assign({originalSource:"(props: InputWithLabelProps) => {\n  return <InputWithLabel {...props}>hi</InputWithLabel>;\n}"},null==(_BasicUsage$parameter2=BasicUsage.parameters)||null==(_BasicUsage$parameter3=_BasicUsage$parameter2.docs)?void 0:_BasicUsage$parameter3.source)})});try{BasicUsage.displayName="BasicUsage",BasicUsage.__docgenInfo={description:"",displayName:"BasicUsage",props:{label:{defaultValue:null,description:"Label shown above the input.",name:"label",required:!1,type:{name:"string"}},onLabelPress:{defaultValue:null,description:"Callback called on click of the label.",name:"onLabelPress",required:!1,type:{name:"(() => void)"}},helpText:{defaultValue:null,description:"Additional text to help the user.",name:"helpText",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Display an error state.",name:"error",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disable the input.",name:"disabled",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"TextInput component.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-layout/form-layout.stories.tsx#BasicUsage"]={docgenInfo:BasicUsage.__docgenInfo,name:"BasicUsage",path:"src/form-layout/form-layout.stories.tsx#BasicUsage"})}catch(__react_docgen_typescript_loader_error){}},"./src/form-layout/input-with-label.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.InputWithLabel=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_inlineError=_interopRequireDefault(__webpack_require__("./src/inline-error/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InputWithLabel=exports.InputWithLabel=function InputWithLabel(_ref){var label=_ref.label,error=_ref.error,helpText=_ref.helpText,disabled=_ref.disabled,children=_ref.children,onLabelPress=_ref.onLabelPress;return(0,_jsxRuntime.jsxs)(_box.default,{space:"xSmall",children:[label&&(0,_jsxRuntime.jsx)(_pressable.default,{onPress:onLabelPress,disabled,children:(0,_jsxRuntime.jsx)(_box.default,{children:(0,_jsxRuntime.jsx)(_text.default,{uppercase:!0,size:"small",numberOfLines:1,type:"textMuted",children:label})})}),children,error&&(0,_jsxRuntime.jsx)(_box.default,{children:(0,_jsxRuntime.jsx)(_inlineError.default,{size:"small",message:"string"==typeof error?error:""})}),helpText&&(0,_jsxRuntime.jsx)(_box.default,{children:(0,_jsxRuntime.jsx)(_text.default,{type:"secondary",size:"small",children:helpText})})]})};try{InputWithLabel.displayName="InputWithLabel",InputWithLabel.__docgenInfo={description:"Wraps a basic Input field with label, helpText and error features.",displayName:"InputWithLabel",props:{label:{defaultValue:null,description:"Label shown above the input.",name:"label",required:!1,type:{name:"string"}},onLabelPress:{defaultValue:null,description:"Callback called on click of the label.",name:"onLabelPress",required:!1,type:{name:"(() => void)"}},helpText:{defaultValue:null,description:"Additional text to help the user.",name:"helpText",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Display an error state.",name:"error",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disable the input.",name:"disabled",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"TextInput component.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-layout/input-with-label.tsx#InputWithLabel"]={docgenInfo:InputWithLabel.__docgenInfo,name:"InputWithLabel",path:"src/form-layout/input-with-label.tsx#InputWithLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/icon/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _icon.Icon}});var _icon=__webpack_require__("./src/icon/icon.tsx")},"./src/inline-error/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _inlineError.InlineError}});var _inlineError=__webpack_require__("./src/inline-error/inline-error.tsx")},"./src/inline-error/inline-error.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.InlineError=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InlineError=exports.InlineError=function InlineError(_ref){var message=_ref.message,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size;return(0,_jsxRuntime.jsxs)(_box.default,{horizontal:!0,space:"xSmall",align:"center",children:[(0,_jsxRuntime.jsx)(_icon.default,{name:"triangleExclamation",type:"critical",size}),(0,_jsxRuntime.jsx)(_text.default,{type:"critical",size,children:message})]})};try{InlineError.displayName="InlineError",InlineError.__docgenInfo={description:"",displayName:"InlineError",props:{message:{defaultValue:null,description:"Error message.",name:"message",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/inline-error/inline-error.tsx#InlineError"]={docgenInfo:InlineError.__docgenInfo,name:"InlineError",path:"src/inline-error/inline-error.tsx#InlineError"})}catch(__react_docgen_typescript_loader_error){}}}]);