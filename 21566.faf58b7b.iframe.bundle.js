(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[21566,53670,72851],{"./node_modules/lodash/_assignValue.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseAssignValue=__webpack_require__("./node_modules/lodash/_baseAssignValue.js"),eq=__webpack_require__("./node_modules/lodash/eq.js"),hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function assignValue(object,key,value){var objValue=object[key];hasOwnProperty.call(object,key)&&eq(objValue,value)&&(void 0!==value||key in object)||baseAssignValue(object,key,value)}},"./node_modules/lodash/_baseDelay.js":module=>{module.exports=function baseDelay(func,wait,args){if("function"!=typeof func)throw new TypeError("Expected a function");return setTimeout((function(){func.apply(void 0,args)}),wait)}},"./node_modules/lodash/_baseFlatten.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayPush=__webpack_require__("./node_modules/lodash/_arrayPush.js"),isFlattenable=__webpack_require__("./node_modules/lodash/_isFlattenable.js");module.exports=function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;for(predicate||(predicate=isFlattenable),result||(result=[]);++index<length;){var value=array[index];depth>0&&predicate(value)?depth>1?baseFlatten(value,depth-1,predicate,isStrict,result):arrayPush(result,value):isStrict||(result[result.length]=value)}return result}},"./node_modules/lodash/_basePick.js":(module,__unused_webpack_exports,__webpack_require__)=>{var basePickBy=__webpack_require__("./node_modules/lodash/_basePickBy.js"),hasIn=__webpack_require__("./node_modules/lodash/hasIn.js");module.exports=function basePick(object,paths){return basePickBy(object,paths,(function(value,path){return hasIn(object,path)}))}},"./node_modules/lodash/_basePickBy.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseGet=__webpack_require__("./node_modules/lodash/_baseGet.js"),baseSet=__webpack_require__("./node_modules/lodash/_baseSet.js"),castPath=__webpack_require__("./node_modules/lodash/_castPath.js");module.exports=function basePickBy(object,paths,predicate){for(var index=-1,length=paths.length,result={};++index<length;){var path=paths[index],value=baseGet(object,path);predicate(value,path)&&baseSet(result,castPath(path,object),value)}return result}},"./node_modules/lodash/_baseSet.js":(module,__unused_webpack_exports,__webpack_require__)=>{var assignValue=__webpack_require__("./node_modules/lodash/_assignValue.js"),castPath=__webpack_require__("./node_modules/lodash/_castPath.js"),isIndex=__webpack_require__("./node_modules/lodash/_isIndex.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),toKey=__webpack_require__("./node_modules/lodash/_toKey.js");module.exports=function baseSet(object,path,value,customizer){if(!isObject(object))return object;for(var index=-1,length=(path=castPath(path,object)).length,lastIndex=length-1,nested=object;null!=nested&&++index<length;){var key=toKey(path[index]),newValue=value;if("__proto__"===key||"constructor"===key||"prototype"===key)return object;if(index!=lastIndex){var objValue=nested[key];void 0===(newValue=customizer?customizer(objValue,key,nested):void 0)&&(newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{})}assignValue(nested,key,newValue),nested=nested[key]}return object}},"./node_modules/lodash/_baseTrim.js":(module,__unused_webpack_exports,__webpack_require__)=>{var trimmedEndIndex=__webpack_require__("./node_modules/lodash/_trimmedEndIndex.js"),reTrimStart=/^\s+/;module.exports=function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,""):string}},"./node_modules/lodash/_baseValues.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayMap=__webpack_require__("./node_modules/lodash/_arrayMap.js");module.exports=function baseValues(object,props){return arrayMap(props,(function(key){return object[key]}))}},"./node_modules/lodash/_flatRest.js":(module,__unused_webpack_exports,__webpack_require__)=>{var flatten=__webpack_require__("./node_modules/lodash/flatten.js"),overRest=__webpack_require__("./node_modules/lodash/_overRest.js"),setToString=__webpack_require__("./node_modules/lodash/_setToString.js");module.exports=function flatRest(func){return setToString(overRest(func,void 0,flatten),func+"")}},"./node_modules/lodash/_isFlattenable.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Symbol=__webpack_require__("./node_modules/lodash/_Symbol.js"),isArguments=__webpack_require__("./node_modules/lodash/isArguments.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),spreadableSymbol=Symbol?Symbol.isConcatSpreadable:void 0;module.exports=function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol])}},"./node_modules/lodash/_trimmedEndIndex.js":module=>{var reWhitespace=/\s/;module.exports=function trimmedEndIndex(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index}},"./node_modules/lodash/delay.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseDelay=__webpack_require__("./node_modules/lodash/_baseDelay.js"),baseRest=__webpack_require__("./node_modules/lodash/_baseRest.js"),toNumber=__webpack_require__("./node_modules/lodash/toNumber.js"),delay=baseRest((function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args)}));module.exports=delay},"./node_modules/lodash/flatten.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseFlatten=__webpack_require__("./node_modules/lodash/_baseFlatten.js");module.exports=function flatten(array){return(null==array?0:array.length)?baseFlatten(array,1):[]}},"./node_modules/lodash/pick.js":(module,__unused_webpack_exports,__webpack_require__)=>{var basePick=__webpack_require__("./node_modules/lodash/_basePick.js"),pick=__webpack_require__("./node_modules/lodash/_flatRest.js")((function(object,paths){return null==object?{}:basePick(object,paths)}));module.exports=pick},"./node_modules/lodash/toNumber.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseTrim=__webpack_require__("./node_modules/lodash/_baseTrim.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isSymbol=__webpack_require__("./node_modules/lodash/isSymbol.js"),reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=function toNumber(value){if("number"==typeof value)return value;if(isSymbol(value))return NaN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NaN:+value}},"./node_modules/lodash/uniqueId.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}},"./node_modules/lodash/values.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseValues=__webpack_require__("./node_modules/lodash/_baseValues.js"),keys=__webpack_require__("./node_modules/lodash/keys.js");module.exports=function values(object){return null==object?[]:baseValues(object,keys(object))}},"./src/icon/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _icon.Icon}});var _icon=__webpack_require__("./src/icon/icon.tsx")},"./src/menu/item.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Item=void 0;var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_isString=_interopRequireDefault(__webpack_require__("./node_modules/lodash/isString.js")),_native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var IconSpacer=function IconSpacer(){return(0,_jsxRuntime.jsx)(_box.default,{style:{width:16}})},Item=function Item(_ref){var children=_ref.children,icon=_ref.icon,iconSpacer=_ref.iconSpacer,accessoryRight=_ref.accessoryRight,onPress=_ref.onPress,type=_ref.type,style=_ref.style,theme=(0,_native.useTheme)(),accessoryLeft=(0,_isString.default)(icon)?(0,_jsxRuntime.jsx)(_icon.default,{name:icon,type}):icon,label=(0,_isString.default)(children)?(0,_jsxRuntime.jsx)(_text.default,{type,children}):children,calculatedStyled=React.useCallback((function(_ref2){var hovered=_ref2.hovered,hoverBackgroundColor=function convertHexToRGBA(hexCode){var opacity=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,hex=hexCode.replace("#","");3===hex.length&&(hex="".concat(hex[0]).concat(hex[0]).concat(hex[1]).concat(hex[1]).concat(hex[2]).concat(hex[2]));var r=parseInt(hex.substring(0,2),16),g=parseInt(hex.substring(2,4),16),b=parseInt(hex.substring(4,6),16);return opacity>1&&opacity<=100&&(opacity/=100),"rgba(".concat(r,",").concat(g,",").concat(b,",").concat(opacity,")")}(theme.colors[type||"primary"],.1);return[{backgroundColor:hovered?hoverBackgroundColor:"transparent"},style]}),[style,theme,type]);return(0,_jsxRuntime.jsx)(_pressable.default,{onPress,style:calculatedStyled,children:function children(_ref3){_ref3.hovered;return(0,_jsxRuntime.jsxs)(_box.default,{horizontal:!0,space:"small",padding:"small",children:[accessoryLeft||iconSpacer&&(0,_jsxRuntime.jsx)(IconSpacer,{}),(0,_jsxRuntime.jsx)(_box.default,{fill:!0,paddingRight:"small",children:label}),accessoryRight]})}})};exports.Item=Item;try{Item.displayName="Item",Item.__docgenInfo={description:"",displayName:"Item",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | IconName"}},iconSpacer:{defaultValue:null,description:"",name:"iconSpacer",required:!1,type:{name:"boolean"}},accessoryRight:{defaultValue:null,description:"",name:"accessoryRight",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!1,type:{name:"((value: any) => void)"}},type:{defaultValue:null,description:"Color of menu item",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"ViewStyle"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/menu/item.tsx#Item"]={docgenInfo:Item.__docgenInfo,name:"Item",path:"src/menu/item.tsx#Item"})}catch(__react_docgen_typescript_loader_error){}}}]);