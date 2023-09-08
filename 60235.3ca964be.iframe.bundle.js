(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[60235,56589,83214,77142,24420],{"./src/tree/tree.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.BasicUsage=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _BasicUsage$parameter,_BasicUsage$parameter2,_BasicUsage$parameter3,_addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_tree=__webpack_require__("./src/tree/tree.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var meta={title:"Components/Tree",component:_tree.Tree},BasicUsage=function BasicUsage(props){return(0,_jsxRuntime.jsx)(_tree.Tree,Object.assign({},props))};exports.BasicUsage=BasicUsage,BasicUsage.args={data:{foo:"bar",baz:{foo:"bar",baz:{foo:"bar",baz:{foo:"bar",baz:{foo:"bar"}}}},bam:["foo","bar"],zero:[]},onExpand:(0,_addonActions.action)("Expand")};var _default=meta;exports.default=_default,BasicUsage.parameters=Object.assign({},BasicUsage.parameters,{docs:Object.assign({},null==(_BasicUsage$parameter=BasicUsage.parameters)?void 0:_BasicUsage$parameter.docs,{source:Object.assign({originalSource:"(props: TreeProps) => {\n  return <Tree {...props} />;\n}"},null==(_BasicUsage$parameter2=BasicUsage.parameters)||null==(_BasicUsage$parameter3=_BasicUsage$parameter2.docs)?void 0:_BasicUsage$parameter3.source)})});try{BasicUsage.displayName="BasicUsage",BasicUsage.__docgenInfo={description:"",displayName:"BasicUsage",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}},rootName:{defaultValue:null,description:"",name:"rootName",required:!1,type:{name:"string"}},isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!1,type:{name:"((keyPath: string[], deep: number, data: any) => boolean)"}},onExpand:{defaultValue:null,description:"",name:"onExpand",required:!1,type:{name:"((keyPath: string[], deep: number, data: any) => void)"}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tree/tree.stories.tsx#BasicUsage"]={docgenInfo:BasicUsage.__docgenInfo,name:"BasicUsage",path:"src/tree/tree.stories.tsx#BasicUsage"})}catch(__react_docgen_typescript_loader_error){}},"./src/icon/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _icon.Icon}});var _icon=__webpack_require__("./src/icon/icon.tsx")},"./src/tree/json/array.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.JSONArray=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_toConsumableArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_arrow=_interopRequireDefault(__webpack_require__("./src/arrow/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),Styled=_interopRequireWildcard(__webpack_require__("./src/tree/json/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var JSONArray=function JSONArray(_ref){var data=_ref.data,name=_ref.name,isCollapsed=_ref.isCollapsed,onExpand=_ref.onExpand,_ref$keyPath=_ref.keyPath,keyPath=void 0===_ref$keyPath?[]:_ref$keyPath,_ref$deep=_ref.deep,deep=void 0===_ref$deep?0:_ref$deep,registry=_ref.registry,_keyPath=-1===deep?[]:[].concat((0,_toConsumableArray2.default)(keyPath),[name]),nextDeep=deep+1,_React$useState=React.useState(isCollapsed(_keyPath,deep,data)),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),collapsed=_React$useState2[0],setCollapsed=_React$useState2[1],JSONNode=registry.node;return(0,_jsxRuntime.jsxs)(Styled.ObjectNode,{children:[(0,_jsxRuntime.jsxs)(_View.default,{style:{flexDirection:"row"},children:[(0,_jsxRuntime.jsxs)(_pressable.default,{onPress:function handleCollapse(){collapsed&&onExpand(_keyPath,deep,data),setCollapsed(!collapsed)},style:{flexDirection:"row",alignItems:"center"},children:[(0,_jsxRuntime.jsx)(_arrow.default,{size:"small",direction:collapsed?"right":"down"}),(0,_jsxRuntime.jsxs)(_text.default,{type:"info",children:[name," :"]})]}),collapsed?function renderCollapsed(){var numberOfItems=data.length,itemName=0===numberOfItems||numberOfItems>1?"items":"item";return(0,_jsxRuntime.jsxs)(_text.default,{type:"secondary",children:[" [...]"," ",numberOfItems," ",itemName]})}():(0,_jsxRuntime.jsx)(_text.default,{children:" ["})]}),!collapsed&&function renderNotCollapsed(){Object.getOwnPropertyNames(data);var list=data.map((function(item,index){return(0,_jsxRuntime.jsx)(JSONNode,{name:"".concat(index),data:item,keyPath:_keyPath,deep:nextDeep,isCollapsed,onExpand,registry},index)}));return(0,_jsxRuntime.jsx)(_View.default,{children:list})}(),!collapsed&&(0,_jsxRuntime.jsx)(_text.default,{children:"]"})]})};exports.JSONArray=JSONArray;try{JSONArray.displayName="JSONArray",JSONArray.__docgenInfo={description:"",displayName:"JSONArray",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!0,type:{name:"(keyPath: string[], deep: number, data: any) => boolean"}},onExpand:{defaultValue:null,description:"",name:"onExpand",required:!0,type:{name:"(keyPath: string[], deep: number, data: any) => void"}},keyPath:{defaultValue:{value:"[]"},description:"",name:"keyPath",required:!1,type:{name:"string[]"}},deep:{defaultValue:{value:"0"},description:"",name:"deep",required:!1,type:{name:"number"}},registry:{defaultValue:null,description:"",name:"registry",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tree/json/array.tsx#JSONArray"]={docgenInfo:JSONArray.__docgenInfo,name:"JSONArray",path:"src/tree/json/array.tsx#JSONArray"})}catch(__react_docgen_typescript_loader_error){}},"./src/tree/json/node.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.JSONNode=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _utils=__webpack_require__("./src/tree/json/utils.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var dataTypeToComponent={string:"string",number:"string",boolean:"string",date:"string",null:"string",undefined:"string",array:"array",object:"object"},JSONNode=function JSONNode(_ref){var value,data=_ref.data,name=_ref.name,_ref$isCollapsed=_ref.isCollapsed,isCollapsed=void 0===_ref$isCollapsed?function(keyPath){return keyPath.length>0}:_ref$isCollapsed,_ref$onExpand=_ref.onExpand,onExpand=void 0===_ref$onExpand?function(){}:_ref$onExpand,_ref$keyPath=_ref.keyPath,keyPath=void 0===_ref$keyPath?[]:_ref$keyPath,_ref$deep=_ref.deep,deep=void 0===_ref$deep?0:_ref$deep,registry=_ref.registry,dataType=(0,_utils.getObjectType)(data).toLowerCase(),Component=registry[dataTypeToComponent[dataType]];switch(dataType){case"string":value="".concat(data);break;case"boolean":value=!!data;break;case"date":value=data.toISOString();break;case"null":value=null;break;case"undefined":value=void 0;break;default:value=data}return(0,_jsxRuntime.jsx)(Component,{name,data:value,keyPath,deep,isCollapsed,onExpand,registry})};exports.JSONNode=JSONNode;try{JSONNode.displayName="JSONNode",JSONNode.__docgenInfo={description:"",displayName:"JSONNode",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isCollapsed:{defaultValue:{value:"(keyPath: string[]) => keyPath.length > 0"},description:"",name:"isCollapsed",required:!1,type:{name:"((keyPath: string[], deep: number, data: any) => boolean)"}},onExpand:{defaultValue:{value:"() => {}"},description:"",name:"onExpand",required:!1,type:{name:"((keyPath: string[], deep: number, data: any) => void)"}},keyPath:{defaultValue:{value:"[]"},description:"",name:"keyPath",required:!1,type:{name:"string[]"}},deep:{defaultValue:{value:"0"},description:"",name:"deep",required:!1,type:{name:"number"}},registry:{defaultValue:null,description:"",name:"registry",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tree/json/node.tsx#JSONNode"]={docgenInfo:JSONNode.__docgenInfo,name:"JSONNode",path:"src/tree/json/node.tsx#JSONNode"})}catch(__react_docgen_typescript_loader_error){}},"./src/tree/json/object.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.JSONObject=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_toConsumableArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_arrow=_interopRequireDefault(__webpack_require__("./src/arrow/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),Styled=_interopRequireWildcard(__webpack_require__("./src/tree/json/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var JSONObject=function JSONObject(_ref){var data=_ref.data,name=_ref.name,isCollapsed=_ref.isCollapsed,onExpand=_ref.onExpand,_ref$keyPath=_ref.keyPath,keyPath=void 0===_ref$keyPath?[]:_ref$keyPath,_ref$deep=_ref.deep,deep=void 0===_ref$deep?0:_ref$deep,registry=_ref.registry,_keyPath=-1===deep?[]:[].concat((0,_toConsumableArray2.default)(keyPath),[name]),nextDeep=deep+1,_React$useState=React.useState(isCollapsed(_keyPath,deep,data)),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),collapsed=_React$useState2[0],setCollapsed=_React$useState2[1],JSONNode=registry.node;return(0,_jsxRuntime.jsxs)(Styled.ObjectNode,{children:[(0,_jsxRuntime.jsxs)(_View.default,{style:{flexDirection:"row"},children:[(0,_jsxRuntime.jsxs)(_pressable.default,{onPress:function handleCollapse(){collapsed&&onExpand(_keyPath,deep,data),setCollapsed(!collapsed)},style:{flexDirection:"row",alignItems:"center"},children:[(0,_jsxRuntime.jsx)(_arrow.default,{size:"small",direction:collapsed?"right":"down"}),(0,_jsxRuntime.jsxs)(_text.default,{type:"info",children:[name," :"]})]}),collapsed?function renderCollapsed(){var numberOfItems=Object.getOwnPropertyNames(data).length,itemName=0===numberOfItems||numberOfItems>1?"keys":"key";return(0,_jsxRuntime.jsxs)(_text.default,{type:"secondary",children:[" {...}"," ",numberOfItems," ",itemName]})}():(0,_jsxRuntime.jsx)(_text.default,{children:" {"})]}),!collapsed&&function renderNotCollapsed(){var list=Object.getOwnPropertyNames(data).map((function(key){return(0,_jsxRuntime.jsx)(JSONNode,{name:key,data:data[key],keyPath:_keyPath,deep:nextDeep,isCollapsed,onExpand,registry},key)}));return(0,_jsxRuntime.jsx)(_View.default,{children:list})}(),!collapsed&&(0,_jsxRuntime.jsx)(_text.default,{children:"}"})]})};exports.JSONObject=JSONObject;try{JSONObject.displayName="JSONObject",JSONObject.__docgenInfo={description:"",displayName:"JSONObject",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!0,type:{name:"(keyPath: string[], deep: number, data: any) => boolean"}},onExpand:{defaultValue:null,description:"",name:"onExpand",required:!0,type:{name:"(keyPath: string[], deep: number, data: any) => void"}},keyPath:{defaultValue:{value:"[]"},description:"",name:"keyPath",required:!1,type:{name:"string[]"}},deep:{defaultValue:{value:"0"},description:"",name:"deep",required:!1,type:{name:"number"}},registry:{defaultValue:null,description:"",name:"registry",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tree/json/object.tsx#JSONObject"]={docgenInfo:JSONObject.__docgenInfo,name:"JSONObject",path:"src/tree/json/object.tsx#JSONObject"})}catch(__react_docgen_typescript_loader_error){}},"./src/tree/json/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);var _templateObject,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),exports.ObjectNode=void 0;var ObjectNode=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")).default.View(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\tpadding-left: 20px;\n"])));exports.ObjectNode=ObjectNode},"./src/tree/json/utils.ts":(__unused_webpack_module,exports)=>{function getObjectType(obj){return null===obj||"object"!=typeof obj||Array.isArray(obj)||"function"!=typeof obj[Symbol.iterator]?Object.prototype.toString.call(obj).slice(8,-1):"Iterable"}function parse(string){var result=string;if(0===result.indexOf("function"))return eval("(".concat(result,")"));try{result=JSON.parse(string)}catch(e){}return result}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getObjectType=getObjectType,exports.parse=parse},"./src/tree/json/value.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.JSONValue=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),Styled=_interopRequireWildcard(__webpack_require__("./src/tree/json/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var JSONValue=function JSONValue(_ref){var name=_ref.name,data=_ref.data;_ref.keyPath,_ref.deep;return(0,_jsxRuntime.jsxs)(Styled.ObjectNode,{style:{flexDirection:"row"},children:[(0,_jsxRuntime.jsxs)(_text.default,{type:"info",children:[name," : "]}),(0,_jsxRuntime.jsx)(_text.default,{children:String(data)})]})};exports.JSONValue=JSONValue;try{JSONValue.displayName="JSONValue",JSONValue.__docgenInfo={description:"",displayName:"JSONValue",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}},originalValue:{defaultValue:null,description:"",name:"originalValue",required:!0,type:{name:"any"}},keyPath:{defaultValue:{value:"[]"},description:"",name:"keyPath",required:!1,type:{name:"string[]"}},deep:{defaultValue:{value:"0"},description:"",name:"deep",required:!1,type:{name:"number"}},isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!0,type:{name:"(keyPath: string[], deep: number, data: any) => boolean"}},onExpand:{defaultValue:null,description:"",name:"onExpand",required:!0,type:{name:"(keyPath: string[], deep: number, data: any) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tree/json/value.tsx#JSONValue"]={docgenInfo:JSONValue.__docgenInfo,name:"JSONValue",path:"src/tree/json/value.tsx#JSONValue"})}catch(__react_docgen_typescript_loader_error){}},"./src/tree/raw.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Raw=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var Styled=_interopRequireWildcard(__webpack_require__("./src/tree/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Raw=function Raw(_ref){var data=_ref.data,raw=JSON.stringify(data,null,"  ");return(0,_jsxRuntime.jsx)(Styled.Raw,{multiline:!0,numberOfLines:raw.split("\n").length,editable:!1,value:raw})};exports.Raw=Raw;try{Raw.displayName="Raw",Raw.__docgenInfo={description:"",displayName:"Raw",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tree/raw.tsx#Raw"]={docgenInfo:Raw.__docgenInfo,name:"Raw",path:"src/tree/raw.tsx#Raw"})}catch(__react_docgen_typescript_loader_error){}},"./src/tree/registry.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _array=__webpack_require__("./src/tree/json/array.tsx"),_node=__webpack_require__("./src/tree/json/node.tsx"),_object=__webpack_require__("./src/tree/json/object.tsx"),_value=__webpack_require__("./src/tree/json/value.tsx"),_default={node:_node.JSONNode,string:_value.JSONValue,object:_object.JSONObject,array:_array.JSONArray};exports.default=_default},"./src/tree/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);var _templateObject,_templateObject2,_templateObject3,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),exports.RawButtonContainer=exports.Raw=exports.Container=void 0;var _native=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")),Raw=_native.default.TextInput(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\tbackground-color: ",";\n\tborder-color: ",";\n\tborder-radius: ",";\n\tborder-width: ",";\n\tfont-family: monospace;\n"])),(function(_ref){return _ref.theme.colors.lightestGrey}),(function(_ref2){return _ref2.theme.colors.grey}),(function(_ref3){var theme=_ref3.theme;return"".concat(theme.rounding.small,"px")}),(function(_ref4){var theme=_ref4.theme;return"".concat(theme.border.thinner,"px")}));exports.Raw=Raw;var Container=_native.default.View(_templateObject2||(_templateObject2=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\tposition: relative;\n\twidth: 100%;\n"])));exports.Container=Container;var RawButtonContainer=_native.default.View(_templateObject3||(_templateObject3=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n"])));exports.RawButtonContainer=RawButtonContainer},"./src/tree/tree.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Tree=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_button=_interopRequireDefault(__webpack_require__("./src/button/index.ts")),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_raw=__webpack_require__("./src/tree/raw.tsx"),_registry=_interopRequireDefault(__webpack_require__("./src/tree/registry.ts")),Styled=_interopRequireWildcard(__webpack_require__("./src/tree/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Tree=function Tree(_ref){var data=_ref.data,_ref$rootName=_ref.rootName,rootName=void 0===_ref$rootName?"root":_ref$rootName,isCollapsed=_ref.isCollapsed,onExpand=_ref.onExpand,_React$useState=(_ref.fallback,React.useState(!1)),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),raw=_React$useState2[0],setRaw=_React$useState2[1],JSONNode=_registry.default.node;return(0,_jsxRuntime.jsxs)(_box.default,{paddingY:"small",children:[raw?(0,_jsxRuntime.jsx)(_raw.Raw,{data}):(0,_jsxRuntime.jsx)(JSONNode,{data,name:rootName,deep:-1,isCollapsed,onExpand,registry:_registry.default}),(0,_jsxRuntime.jsx)(Styled.RawButtonContainer,{children:(0,_jsxRuntime.jsx)(_button.default,{title:"raw",type:"secondary",background:"outline",size:"small",onPress:function onPress(){return setRaw(!raw)},accessoryLeft:raw?(0,_jsxRuntime.jsx)(_icon.default,{size:"small",name:"eyeSlash"}):(0,_jsxRuntime.jsx)(_icon.default,{size:"small",name:"eye"})})})]})};exports.Tree=Tree;try{Tree.displayName="Tree",Tree.__docgenInfo={description:"",displayName:"Tree",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}},rootName:{defaultValue:{value:"root"},description:"",name:"rootName",required:!1,type:{name:"string"}},isCollapsed:{defaultValue:null,description:"",name:"isCollapsed",required:!1,type:{name:"((keyPath: string[], deep: number, data: any) => boolean)"}},onExpand:{defaultValue:null,description:"",name:"onExpand",required:!1,type:{name:"((keyPath: string[], deep: number, data: any) => void)"}},fallback:{defaultValue:{value:"null"},description:"",name:"fallback",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tree/tree.tsx#Tree"]={docgenInfo:Tree.__docgenInfo,name:"Tree",path:"src/tree/tree.tsx#Tree"})}catch(__react_docgen_typescript_loader_error){}}}]);