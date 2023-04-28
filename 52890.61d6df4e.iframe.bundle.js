(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[52890,53670,72851,83214,77142],{"./node_modules/lodash/_apply.js":module=>{module.exports=function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2])}return func.apply(thisArg,args)}},"./node_modules/lodash/_assignValue.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseAssignValue=__webpack_require__("./node_modules/lodash/_baseAssignValue.js"),eq=__webpack_require__("./node_modules/lodash/eq.js"),hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function assignValue(object,key,value){var objValue=object[key];hasOwnProperty.call(object,key)&&eq(objValue,value)&&(void 0!==value||key in object)||baseAssignValue(object,key,value)}},"./node_modules/lodash/_baseDelay.js":module=>{module.exports=function baseDelay(func,wait,args){if("function"!=typeof func)throw new TypeError("Expected a function");return setTimeout((function(){func.apply(void 0,args)}),wait)}},"./node_modules/lodash/_baseFlatten.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayPush=__webpack_require__("./node_modules/lodash/_arrayPush.js"),isFlattenable=__webpack_require__("./node_modules/lodash/_isFlattenable.js");module.exports=function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;for(predicate||(predicate=isFlattenable),result||(result=[]);++index<length;){var value=array[index];depth>0&&predicate(value)?depth>1?baseFlatten(value,depth-1,predicate,isStrict,result):arrayPush(result,value):isStrict||(result[result.length]=value)}return result}},"./node_modules/lodash/_basePick.js":(module,__unused_webpack_exports,__webpack_require__)=>{var basePickBy=__webpack_require__("./node_modules/lodash/_basePickBy.js"),hasIn=__webpack_require__("./node_modules/lodash/hasIn.js");module.exports=function basePick(object,paths){return basePickBy(object,paths,(function(value,path){return hasIn(object,path)}))}},"./node_modules/lodash/_basePickBy.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseGet=__webpack_require__("./node_modules/lodash/_baseGet.js"),baseSet=__webpack_require__("./node_modules/lodash/_baseSet.js"),castPath=__webpack_require__("./node_modules/lodash/_castPath.js");module.exports=function basePickBy(object,paths,predicate){for(var index=-1,length=paths.length,result={};++index<length;){var path=paths[index],value=baseGet(object,path);predicate(value,path)&&baseSet(result,castPath(path,object),value)}return result}},"./node_modules/lodash/_baseRest.js":(module,__unused_webpack_exports,__webpack_require__)=>{var identity=__webpack_require__("./node_modules/lodash/identity.js"),overRest=__webpack_require__("./node_modules/lodash/_overRest.js"),setToString=__webpack_require__("./node_modules/lodash/_setToString.js");module.exports=function baseRest(func,start){return setToString(overRest(func,start,identity),func+"")}},"./node_modules/lodash/_baseSet.js":(module,__unused_webpack_exports,__webpack_require__)=>{var assignValue=__webpack_require__("./node_modules/lodash/_assignValue.js"),castPath=__webpack_require__("./node_modules/lodash/_castPath.js"),isIndex=__webpack_require__("./node_modules/lodash/_isIndex.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),toKey=__webpack_require__("./node_modules/lodash/_toKey.js");module.exports=function baseSet(object,path,value,customizer){if(!isObject(object))return object;for(var index=-1,length=(path=castPath(path,object)).length,lastIndex=length-1,nested=object;null!=nested&&++index<length;){var key=toKey(path[index]),newValue=value;if("__proto__"===key||"constructor"===key||"prototype"===key)return object;if(index!=lastIndex){var objValue=nested[key];void 0===(newValue=customizer?customizer(objValue,key,nested):void 0)&&(newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{})}assignValue(nested,key,newValue),nested=nested[key]}return object}},"./node_modules/lodash/_baseSetToString.js":(module,__unused_webpack_exports,__webpack_require__)=>{var constant=__webpack_require__("./node_modules/lodash/constant.js"),defineProperty=__webpack_require__("./node_modules/lodash/_defineProperty.js"),identity=__webpack_require__("./node_modules/lodash/identity.js"),baseSetToString=defineProperty?function(func,string){return defineProperty(func,"toString",{configurable:!0,enumerable:!1,value:constant(string),writable:!0})}:identity;module.exports=baseSetToString},"./node_modules/lodash/_baseTrim.js":(module,__unused_webpack_exports,__webpack_require__)=>{var trimmedEndIndex=__webpack_require__("./node_modules/lodash/_trimmedEndIndex.js"),reTrimStart=/^\s+/;module.exports=function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,""):string}},"./node_modules/lodash/_baseValues.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayMap=__webpack_require__("./node_modules/lodash/_arrayMap.js");module.exports=function baseValues(object,props){return arrayMap(props,(function(key){return object[key]}))}},"./node_modules/lodash/_flatRest.js":(module,__unused_webpack_exports,__webpack_require__)=>{var flatten=__webpack_require__("./node_modules/lodash/flatten.js"),overRest=__webpack_require__("./node_modules/lodash/_overRest.js"),setToString=__webpack_require__("./node_modules/lodash/_setToString.js");module.exports=function flatRest(func){return setToString(overRest(func,void 0,flatten),func+"")}},"./node_modules/lodash/_isFlattenable.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Symbol=__webpack_require__("./node_modules/lodash/_Symbol.js"),isArguments=__webpack_require__("./node_modules/lodash/isArguments.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),spreadableSymbol=Symbol?Symbol.isConcatSpreadable:void 0;module.exports=function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol])}},"./node_modules/lodash/_overRest.js":(module,__unused_webpack_exports,__webpack_require__)=>{var apply=__webpack_require__("./node_modules/lodash/_apply.js"),nativeMax=Math.max;module.exports=function overRest(func,start,transform){return start=nativeMax(void 0===start?func.length-1:start,0),function(){for(var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);++index<length;)array[index]=args[start+index];index=-1;for(var otherArgs=Array(start+1);++index<start;)otherArgs[index]=args[index];return otherArgs[start]=transform(array),apply(func,this,otherArgs)}}},"./node_modules/lodash/_setToString.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseSetToString=__webpack_require__("./node_modules/lodash/_baseSetToString.js"),setToString=__webpack_require__("./node_modules/lodash/_shortOut.js")(baseSetToString);module.exports=setToString},"./node_modules/lodash/_shortOut.js":module=>{var nativeNow=Date.now;module.exports=function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=16-(stamp-lastCalled);if(lastCalled=stamp,remaining>0){if(++count>=800)return arguments[0]}else count=0;return func.apply(void 0,arguments)}}},"./node_modules/lodash/_trimmedEndIndex.js":module=>{var reWhitespace=/\s/;module.exports=function trimmedEndIndex(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index}},"./node_modules/lodash/constant.js":module=>{module.exports=function constant(value){return function(){return value}}},"./node_modules/lodash/delay.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseDelay=__webpack_require__("./node_modules/lodash/_baseDelay.js"),baseRest=__webpack_require__("./node_modules/lodash/_baseRest.js"),toNumber=__webpack_require__("./node_modules/lodash/toNumber.js"),delay=baseRest((function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args)}));module.exports=delay},"./node_modules/lodash/flatten.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseFlatten=__webpack_require__("./node_modules/lodash/_baseFlatten.js");module.exports=function flatten(array){return(null==array?0:array.length)?baseFlatten(array,1):[]}},"./node_modules/lodash/pick.js":(module,__unused_webpack_exports,__webpack_require__)=>{var basePick=__webpack_require__("./node_modules/lodash/_basePick.js"),pick=__webpack_require__("./node_modules/lodash/_flatRest.js")((function(object,paths){return null==object?{}:basePick(object,paths)}));module.exports=pick},"./node_modules/lodash/toNumber.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseTrim=__webpack_require__("./node_modules/lodash/_baseTrim.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isSymbol=__webpack_require__("./node_modules/lodash/isSymbol.js"),reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=function toNumber(value){if("number"==typeof value)return value;if(isSymbol(value))return NaN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NaN:+value}},"./node_modules/lodash/uniqueId.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}},"./node_modules/lodash/values.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseValues=__webpack_require__("./node_modules/lodash/_baseValues.js"),keys=__webpack_require__("./node_modules/lodash/keys.js");module.exports=function values(object){return null==object?[]:baseValues(object,keys(object))}},"./src/icon/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _icon.Icon}});var _icon=__webpack_require__("./src/icon/icon.tsx")},"./src/tree/json/array.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.JSONArray=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_toConsumableArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_arrow=_interopRequireDefault(__webpack_require__("./src/arrow/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),Styled=_interopRequireWildcard(__webpack_require__("./src/tree/json/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var JSONArray=function JSONArray(_ref){var data=_ref.data,name=_ref.name,isCollapsed=_ref.isCollapsed,onExpand=_ref.onExpand,_ref$keyPath=_ref.keyPath,keyPath=void 0===_ref$keyPath?[]:_ref$keyPath,_ref$deep=_ref.deep,deep=void 0===_ref$deep?0:_ref$deep,registry=_ref.registry,_keyPath=-1===deep?[]:[].concat((0,_toConsumableArray2.default)(keyPath),[name]),nextDeep=deep+1,_React$useState=React.useState(isCollapsed(_keyPath,deep,data)),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),collapsed=_React$useState2[0],setCollapsed=_React$useState2[1],JSONNode=registry.node;return(0,_jsxRuntime.jsxs)(Styled.ObjectNode,{children:[(0,_jsxRuntime.jsxs)(_View.default,{style:{flexDirection:"row"},children:[(0,_jsxRuntime.jsxs)(_pressable.default,{onPress:function handleCollapse(){collapsed&&onExpand(_keyPath,deep,data),setCollapsed(!collapsed)},style:{flexDirection:"row",alignItems:"center"},children:[(0,_jsxRuntime.jsx)(_arrow.default,{size:"small",direction:collapsed?"right":"down"}),(0,_jsxRuntime.jsxs)(_text.default,{type:"info",children:[name," :"]})]}),collapsed?function renderCollapsed(){var numberOfItems=data.length,itemName=0===numberOfItems||numberOfItems>1?"items":"item";return(0,_jsxRuntime.jsxs)(_text.default,{type:"secondary",children:[" [...]"," ",numberOfItems," ",itemName]})}():(0,_jsxRuntime.jsx)(_text.default,{children:" ["})]}),!collapsed&&function renderNotCollapsed(){Object.getOwnPropertyNames(data);var list=data.map((function(item,index){return(0,_jsxRuntime.jsx)(JSONNode,{name:""+index,data:item,keyPath:_keyPath,deep:nextDeep,isCollapsed,onExpand,registry},index)}));return(0,_jsxRuntime.jsx)(_View.default,{children:list})}(),!collapsed&&(0,_jsxRuntime.jsx)(_text.default,{children:"]"})]})};exports.JSONArray=JSONArray;try{JSONArray.displayName="JSONArray",JSONArray.__docgenInfo={description:"",displayName:"JSONArray",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!0,type:{name:"(keyPath: string[], deep: number, data: any) => boolean"}},onExpand:{defaultValue:null,description:"",name:"onExpand",required:!0,type:{name:"(keyPath: string[], deep: number, data: any) => void"}},keyPath:{defaultValue:{value:"[]"},description:"",name:"keyPath",required:!1,type:{name:"string[]"}},deep:{defaultValue:{value:"0"},description:"",name:"deep",required:!1,type:{name:"number"}},registry:{defaultValue:null,description:"",name:"registry",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tree/json/array.tsx#JSONArray"]={docgenInfo:JSONArray.__docgenInfo,name:"JSONArray",path:"src/tree/json/array.tsx#JSONArray"})}catch(__react_docgen_typescript_loader_error){}},"./src/tree/json/node.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.JSONNode=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _utils=__webpack_require__("./src/tree/json/utils.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var dataTypeToComponent={string:"string",number:"string",boolean:"string",date:"string",null:"string",undefined:"string",array:"array",object:"object"},JSONNode=function JSONNode(_ref){var value,data=_ref.data,name=_ref.name,_ref$isCollapsed=_ref.isCollapsed,isCollapsed=void 0===_ref$isCollapsed?function(keyPath){return keyPath.length>0}:_ref$isCollapsed,_ref$onExpand=_ref.onExpand,onExpand=void 0===_ref$onExpand?function(){}:_ref$onExpand,_ref$keyPath=_ref.keyPath,keyPath=void 0===_ref$keyPath?[]:_ref$keyPath,_ref$deep=_ref.deep,deep=void 0===_ref$deep?0:_ref$deep,registry=_ref.registry,dataType=(0,_utils.getObjectType)(data).toLowerCase(),Component=registry[dataTypeToComponent[dataType]];switch(dataType){case"string":value=""+data;break;case"boolean":value=!!data;break;case"date":value=data.toISOString();break;case"null":value=null;break;case"undefined":value=void 0;break;default:value=data}return(0,_jsxRuntime.jsx)(Component,{name,data:value,keyPath,deep,isCollapsed,onExpand,registry})};exports.JSONNode=JSONNode;try{JSONNode.displayName="JSONNode",JSONNode.__docgenInfo={description:"",displayName:"JSONNode",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isCollapsed:{defaultValue:{value:"(keyPath: string[]) => keyPath.length > 0"},description:"",name:"isCollapsed",required:!1,type:{name:"((keyPath: string[], deep: number, data: any) => boolean)"}},onExpand:{defaultValue:{value:"() => {}"},description:"",name:"onExpand",required:!1,type:{name:"((keyPath: string[], deep: number, data: any) => void)"}},keyPath:{defaultValue:{value:"[]"},description:"",name:"keyPath",required:!1,type:{name:"string[]"}},deep:{defaultValue:{value:"0"},description:"",name:"deep",required:!1,type:{name:"number"}},registry:{defaultValue:null,description:"",name:"registry",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tree/json/node.tsx#JSONNode"]={docgenInfo:JSONNode.__docgenInfo,name:"JSONNode",path:"src/tree/json/node.tsx#JSONNode"})}catch(__react_docgen_typescript_loader_error){}},"./src/tree/json/object.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.JSONObject=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_toConsumableArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_arrow=_interopRequireDefault(__webpack_require__("./src/arrow/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),Styled=_interopRequireWildcard(__webpack_require__("./src/tree/json/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var JSONObject=function JSONObject(_ref){var data=_ref.data,name=_ref.name,isCollapsed=_ref.isCollapsed,onExpand=_ref.onExpand,_ref$keyPath=_ref.keyPath,keyPath=void 0===_ref$keyPath?[]:_ref$keyPath,_ref$deep=_ref.deep,deep=void 0===_ref$deep?0:_ref$deep,registry=_ref.registry,_keyPath=-1===deep?[]:[].concat((0,_toConsumableArray2.default)(keyPath),[name]),nextDeep=deep+1,_React$useState=React.useState(isCollapsed(_keyPath,deep,data)),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),collapsed=_React$useState2[0],setCollapsed=_React$useState2[1],JSONNode=registry.node;return(0,_jsxRuntime.jsxs)(Styled.ObjectNode,{children:[(0,_jsxRuntime.jsxs)(_View.default,{style:{flexDirection:"row"},children:[(0,_jsxRuntime.jsxs)(_pressable.default,{onPress:function handleCollapse(){collapsed&&onExpand(_keyPath,deep,data),setCollapsed(!collapsed)},style:{flexDirection:"row",alignItems:"center"},children:[(0,_jsxRuntime.jsx)(_arrow.default,{size:"small",direction:collapsed?"right":"down"}),(0,_jsxRuntime.jsxs)(_text.default,{type:"info",children:[name," :"]})]}),collapsed?function renderCollapsed(){var numberOfItems=Object.getOwnPropertyNames(data).length,itemName=0===numberOfItems||numberOfItems>1?"keys":"key";return(0,_jsxRuntime.jsxs)(_text.default,{type:"secondary",children:[" {...}"," ",numberOfItems," ",itemName]})}():(0,_jsxRuntime.jsx)(_text.default,{children:" {"})]}),!collapsed&&function renderNotCollapsed(){var list=Object.getOwnPropertyNames(data).map((function(key){return(0,_jsxRuntime.jsx)(JSONNode,{name:key,data:data[key],keyPath:_keyPath,deep:nextDeep,isCollapsed,onExpand,registry},key)}));return(0,_jsxRuntime.jsx)(_View.default,{children:list})}(),!collapsed&&(0,_jsxRuntime.jsx)(_text.default,{children:"}"})]})};exports.JSONObject=JSONObject;try{JSONObject.displayName="JSONObject",JSONObject.__docgenInfo={description:"",displayName:"JSONObject",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!0,type:{name:"(keyPath: string[], deep: number, data: any) => boolean"}},onExpand:{defaultValue:null,description:"",name:"onExpand",required:!0,type:{name:"(keyPath: string[], deep: number, data: any) => void"}},keyPath:{defaultValue:{value:"[]"},description:"",name:"keyPath",required:!1,type:{name:"string[]"}},deep:{defaultValue:{value:"0"},description:"",name:"deep",required:!1,type:{name:"number"}},registry:{defaultValue:null,description:"",name:"registry",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tree/json/object.tsx#JSONObject"]={docgenInfo:JSONObject.__docgenInfo,name:"JSONObject",path:"src/tree/json/object.tsx#JSONObject"})}catch(__react_docgen_typescript_loader_error){}},"./src/tree/json/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.ObjectNode=void 0;var _templateObject,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js")),ObjectNode=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")).default.View(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n\tpadding-left: 20px;\n"])));exports.ObjectNode=ObjectNode},"./src/tree/json/utils.ts":(__unused_webpack_module,exports)=>{function getObjectType(obj){return null===obj||"object"!=typeof obj||Array.isArray(obj)||"function"!=typeof obj[Symbol.iterator]?Object.prototype.toString.call(obj).slice(8,-1):"Iterable"}function parse(string){var result=string;if(0===result.indexOf("function"))return eval("("+result+")");try{result=JSON.parse(string)}catch(e){}return result}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getObjectType=getObjectType,exports.parse=parse},"./src/tree/json/value.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.JSONValue=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),Styled=_interopRequireWildcard(__webpack_require__("./src/tree/json/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var JSONValue=function JSONValue(_ref){var name=_ref.name,data=_ref.data;_ref.keyPath,_ref.deep;return(0,_jsxRuntime.jsxs)(Styled.ObjectNode,{style:{flexDirection:"row"},children:[(0,_jsxRuntime.jsxs)(_text.default,{type:"info",children:[name," : "]}),(0,_jsxRuntime.jsx)(_text.default,{children:String(data)})]})};exports.JSONValue=JSONValue;try{JSONValue.displayName="JSONValue",JSONValue.__docgenInfo={description:"",displayName:"JSONValue",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}},originalValue:{defaultValue:null,description:"",name:"originalValue",required:!0,type:{name:"any"}},keyPath:{defaultValue:{value:"[]"},description:"",name:"keyPath",required:!1,type:{name:"string[]"}},deep:{defaultValue:{value:"0"},description:"",name:"deep",required:!1,type:{name:"number"}},isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!0,type:{name:"(keyPath: string[], deep: number, data: any) => boolean"}},onExpand:{defaultValue:null,description:"",name:"onExpand",required:!0,type:{name:"(keyPath: string[], deep: number, data: any) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tree/json/value.tsx#JSONValue"]={docgenInfo:JSONValue.__docgenInfo,name:"JSONValue",path:"src/tree/json/value.tsx#JSONValue"})}catch(__react_docgen_typescript_loader_error){}},"./src/tree/raw.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Raw=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var Styled=_interopRequireWildcard(__webpack_require__("./src/tree/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Raw=function Raw(_ref){var data=_ref.data,raw=JSON.stringify(data,null,"  ");return(0,_jsxRuntime.jsx)(Styled.Raw,{multiline:!0,numberOfLines:raw.split("\n").length,editable:!1,value:raw})};exports.Raw=Raw;try{Raw.displayName="Raw",Raw.__docgenInfo={description:"",displayName:"Raw",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tree/raw.tsx#Raw"]={docgenInfo:Raw.__docgenInfo,name:"Raw",path:"src/tree/raw.tsx#Raw"})}catch(__react_docgen_typescript_loader_error){}},"./src/tree/registry.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _array=__webpack_require__("./src/tree/json/array.tsx"),_node=__webpack_require__("./src/tree/json/node.tsx"),_object=__webpack_require__("./src/tree/json/object.tsx"),_value=__webpack_require__("./src/tree/json/value.tsx"),_default={node:_node.JSONNode,string:_value.JSONValue,object:_object.JSONObject,array:_array.JSONArray};exports.default=_default},"./src/tree/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.RawButtonContainer=exports.Raw=exports.Container=void 0;var _templateObject,_templateObject2,_templateObject3,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js")),_native=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")),Raw=_native.default.TextInput(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n\tbackground-color: ",";\n\tborder-color: ",";\n\tborder-radius: ",";\n\tborder-width: ",";\n\tfont-family: monospace;\n"])),(function(_ref){return _ref.theme.colors.lightestGrey}),(function(_ref2){return _ref2.theme.colors.grey}),(function(_ref3){return _ref3.theme.rounding.small+"px"}),(function(_ref4){return _ref4.theme.border.thinner+"px"}));exports.Raw=Raw;var Container=_native.default.View(_templateObject2||(_templateObject2=(0,_taggedTemplateLiteralLoose2.default)(["\n\tposition: relative;\n\twidth: 100%;\n"])));exports.Container=Container;var RawButtonContainer=_native.default.View(_templateObject3||(_templateObject3=(0,_taggedTemplateLiteralLoose2.default)(["\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n"])));exports.RawButtonContainer=RawButtonContainer},"./src/tree/tree.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Tree=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_button=_interopRequireDefault(__webpack_require__("./src/button/index.ts")),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_raw=__webpack_require__("./src/tree/raw.tsx"),_registry=_interopRequireDefault(__webpack_require__("./src/tree/registry.ts")),Styled=_interopRequireWildcard(__webpack_require__("./src/tree/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Tree=function Tree(_ref){var data=_ref.data,_ref$rootName=_ref.rootName,rootName=void 0===_ref$rootName?"root":_ref$rootName,isCollapsed=_ref.isCollapsed,onExpand=_ref.onExpand,_React$useState=(_ref.fallback,React.useState(!1)),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),raw=_React$useState2[0],setRaw=_React$useState2[1],JSONNode=_registry.default.node;return(0,_jsxRuntime.jsxs)(_box.default,{paddingY:"small",children:[raw?(0,_jsxRuntime.jsx)(_raw.Raw,{data}):(0,_jsxRuntime.jsx)(JSONNode,{data,name:rootName,deep:-1,isCollapsed,onExpand,registry:_registry.default}),(0,_jsxRuntime.jsx)(Styled.RawButtonContainer,{children:(0,_jsxRuntime.jsx)(_button.default,{title:"raw",type:"secondary",background:"outline",size:"small",onPress:function onPress(){return setRaw(!raw)},accessoryLeft:raw?(0,_jsxRuntime.jsx)(_icon.default,{size:"small",name:"eyeSlash"}):(0,_jsxRuntime.jsx)(_icon.default,{size:"small",name:"eye"})})})]})};exports.Tree=Tree;try{Tree.displayName="Tree",Tree.__docgenInfo={description:"",displayName:"Tree",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}},rootName:{defaultValue:{value:"root"},description:"",name:"rootName",required:!1,type:{name:"string"}},isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!1,type:{name:"((keyPath: string[], deep: number, data: any) => boolean)"}},onExpand:{defaultValue:null,description:"",name:"onExpand",required:!1,type:{name:"((keyPath: string[], deep: number, data: any) => void)"}},fallback:{defaultValue:{value:"null"},description:"",name:"fallback",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tree/tree.tsx#Tree"]={docgenInfo:Tree.__docgenInfo,name:"Tree",path:"src/tree/tree.tsx#Tree"})}catch(__react_docgen_typescript_loader_error){}}}]);