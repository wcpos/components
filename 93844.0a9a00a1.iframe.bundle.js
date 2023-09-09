(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[93844,81528,45776],{"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/gesture-detector/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"GestureEventProvider",{enumerable:!0,get:function get(){return _provider.default}}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _useGesture.useGesture}});var _provider=_interopRequireDefault(__webpack_require__("./src/gesture-detector/provider.tsx")),_useGesture=__webpack_require__("./src/gesture-detector/use-gesture.ts")},"./src/gesture-detector/provider.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.GestureContext=void 0;var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_reactNativeGestureHandler=__webpack_require__("./node_modules/react-native-gesture-handler/lib/module/index.js"),_rxjs=__webpack_require__("./node_modules/rxjs/dist/cjs/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var GestureContext=React.createContext(null);exports.GestureContext=GestureContext;var tapEventSubject=new _rxjs.Subject,_worklet_161775177579_init_data={code:"function anonymous(event) {\n  const {\n    tapEventSubject\n  } = this._closure;\n  tapEventSubject.next(event);\n}",location:"/home/runner/work/components/components/src/gesture-detector/provider.tsx",sourceMap:'{"version":3,"names":["anonymous","event","tapEventSubject","_closure","next"],"sources":["/home/runner/work/components/components/src/gesture-detector/provider.tsx"],"mappings":"AA+Bc,SAAAA,SAAUA,CAAAC,KAAA;EAAA;IAAAC;EAAA,SAAAC,QAAA;EACnBD,eAAe,CAACE,IAAI,CAACH,KAAK,CAAC;AAC5B"}'},_default=function GestureEventProvider(_ref){var children=_ref.children,gesture=React.useMemo((function(){return _reactNativeGestureHandler.Gesture.Tap().maxDuration(250).onStart((_e=[new __webpack_require__.g.Error,-2,-27],(_f=function _f(event){tapEventSubject.next(event)})._closure={tapEventSubject},_f.__initData=_worklet_161775177579_init_data,_f.__workletHash=161775177579,_f.__stackDetails=_e,_f.__version="3.3.0",_f));var _e,_f}),[]),value=React.useMemo((function(){return{tapEvent$:tapEventSubject.asObservable()}}),[]);return(0,_jsxRuntime.jsx)(GestureContext.Provider,{value,children:(0,_jsxRuntime.jsx)(_reactNativeGestureHandler.GestureDetector,{gesture,children:(0,_jsxRuntime.jsx)(_View.default,{style:{flex:1},children})})})};exports.default=_default;try{provider.displayName="provider",provider.__docgenInfo={description:"",displayName:"provider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/gesture-detector/provider.tsx#provider"]={docgenInfo:provider.__docgenInfo,name:"provider",path:"src/gesture-detector/provider.tsx#provider"})}catch(__react_docgen_typescript_loader_error){}},"./src/gesture-detector/use-gesture.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useGesture=void 0;var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_provider=__webpack_require__("./src/gesture-detector/provider.tsx");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}exports.useGesture=function useGesture(){var context=React.useContext(_provider.GestureContext);if(!context)throw new Error("useGesture must be called within GestureEventProvider");return context}}}]);