(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[69102,46783],{"./node_modules/@babel/runtime/helpers/arrayWithHoles.js":module=>{module.exports=function _arrayWithHoles(arr){if(Array.isArray(arr))return arr},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":module=>{module.exports=function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/nonIterableRest.js":module=>{module.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/slicedToArray.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayWithHoles=__webpack_require__("./node_modules/@babel/runtime/helpers/arrayWithHoles.js"),iterableToArrayLimit=__webpack_require__("./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"),unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"),nonIterableRest=__webpack_require__("./node_modules/@babel/runtime/helpers/nonIterableRest.js");module.exports=function _slicedToArray(arr,i){return arrayWithHoles(arr)||iterableToArrayLimit(arr,i)||unsupportedIterableToArray(arr,i)||nonIterableRest()},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@wcpos/hooks/src/use-uncontrolled-state.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.useUncontrolledState=exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_react=__webpack_require__("./node_modules/react/index.js"),useUncontrolledState=function useUncontrolledState(stateProp,callback){var _useState=(0,_react.useState)(stateProp),_useState2=(0,_slicedToArray2.default)(_useState,2),state=_useState2[0],setState=_useState2[1],setStateWrapper=(0,_react.useCallback)((function(newState){setState(newState),null==callback||callback(newState)}),[callback,setState]);return[callback?stateProp:state,setStateWrapper]};exports.useUncontrolledState=useUncontrolledState;var _default=useUncontrolledState;exports.default=_default},"./src/switch/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _switch.Switch}});var _switch=__webpack_require__("./src/switch/switch.tsx")},"./src/switch/switch.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Switch=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_Switch=(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Switch/index.js"))),_platform=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/utils/src/platform/index.web.ts")),_useUncontrolledState3=__webpack_require__("./node_modules/@wcpos/hooks/src/use-uncontrolled-state.ts"),_native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Switch=function Switch(_ref){var _ref$checked=_ref.checked,checkedRaw=void 0!==_ref$checked&&_ref$checked,onCheckedRaw=_ref.onChecked,_useUncontrolledState=((0,_native.useTheme)(),(0,_useUncontrolledState3.useUncontrolledState)(checkedRaw,onCheckedRaw)),_useUncontrolledState2=(0,_slicedToArray2.default)(_useUncontrolledState,2),checked=_useUncontrolledState2[0],onChecked=_useUncontrolledState2[1];return(0,_jsxRuntime.jsx)(_Switch.default,{trackColor:"ios"===_platform.default.OS?{true:"blue",false:"green"}:{true:"black",false:"red"},thumbColor:"ios"===_platform.default.OS?void 0:checked?"blue":"green",onValueChange:onChecked,value:checked})};exports.Switch=Switch;try{Switch.displayName="Switch",Switch.__docgenInfo={description:"Used to toggle yes/no enabled/disabled options.\n\n>**Note:** The look of this component is very different depending if you are on Web, Android or iOS.",displayName:"Switch",props:{checked:{defaultValue:null,description:"Set to true if options is enabled.",name:"checked",required:!1,type:{name:"boolean"}},onChecked:{defaultValue:null,description:"Called when `checked` property is changed. `checked` property should reflect change.\n\nIf not set, component will be an uncontrolled component. @see https://reactjs.org/docs/uncontrolled-components.html",name:"onChecked",required:!1,type:{name:"((checked: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/switch/switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/switch/switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}}}]);