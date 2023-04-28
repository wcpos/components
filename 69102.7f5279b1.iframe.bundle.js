(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[69102,46783],{"./src/switch/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _switch.Switch}});var _switch=__webpack_require__("./src/switch/switch.tsx")},"./src/switch/switch.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Switch=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _Switch=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Switch/index.js")),_native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),_platform=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/utils/src/platform/index.web.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Switch=function Switch(_ref){var value=_ref.value,onChange=_ref.onChange;(0,_native.useTheme)();return(0,_jsxRuntime.jsx)(_Switch.default,{trackColor:"ios"===_platform.default.OS?{true:"blue",false:"green"}:{true:"black",false:"red"},thumbColor:"ios"===_platform.default.OS?void 0:checked?"blue":"green",onValueChange:onChange,value})};exports.Switch=Switch;try{Switch.displayName="Switch",Switch.__docgenInfo={description:"Used to toggle yes/no enabled/disabled options.\n\n>**Note:** The look of this component is very different depending if you are on Web, Android or iOS.",displayName:"Switch",props:{checked:{defaultValue:null,description:"Set to true if options is enabled.",name:"checked",required:!1,type:{name:"boolean"}},onChecked:{defaultValue:null,description:"Called when `checked` property is changed. `checked` property should reflect change.",name:"onChecked",required:!1,type:{name:"((checked: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/switch/switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/switch/switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}}}]);