(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[45776,6479,81528],{"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/gesture-detector/provider.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.GestureContext=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_reactNativeGestureHandler=__webpack_require__("./node_modules/react-native-gesture-handler/lib/module/index.js"),_rxjs=__webpack_require__("./node_modules/rxjs/dist/cjs/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var GestureContext=exports.GestureContext=React.createContext(null),tapEventSubject=new _rxjs.Subject,_worklet_13348340762462_init_data={code:"function anonymous(event){const{tapEventSubject}=this.__closure;tapEventSubject.next(event);}",location:"/home/runner/work/components/components/src/gesture-detector/provider.tsx",sourceMap:'{"version":3,"names":["anonymous","event","tapEventSubject","__closure","next"],"sources":["/home/runner/work/components/components/src/gesture-detector/provider.tsx"],"mappings":"AA+Bc,SAAAA,SAAUA,CAAAC,KAAA,QAAAC,eAAA,OAAAC,SAAA,CACnBD,eAAe,CAACE,IAAI,CAACH,KAAK,CAAC,CAC5B"}',version:"3.5.4"};exports.default=function GestureEventProvider(_ref){var children=_ref.children,gesture=React.useMemo((function(){return _reactNativeGestureHandler.Gesture.Tap().maxDuration(250).onStart((_e=[new __webpack_require__.g.Error,-2,-27],(anonymous=function anonymous(event){tapEventSubject.next(event)}).__closure={tapEventSubject},anonymous.__initData=_worklet_13348340762462_init_data,anonymous.__workletHash=0xc23e71c075e,anonymous.__stackDetails=_e,anonymous));var _e,anonymous}),[]),value=React.useMemo((function(){return{tapEvent$:tapEventSubject.asObservable()}}),[]);return(0,_jsxRuntime.jsx)(GestureContext.Provider,{value,children:(0,_jsxRuntime.jsx)(_reactNativeGestureHandler.GestureDetector,{gesture,children:(0,_jsxRuntime.jsx)(_View.default,{style:{flex:1},children})})})};try{provider.displayName="provider",provider.__docgenInfo={description:"",displayName:"provider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/gesture-detector/provider.tsx#provider"]={docgenInfo:provider.__docgenInfo,name:"provider",path:"src/gesture-detector/provider.tsx#provider"})}catch(__react_docgen_typescript_loader_error){}},"./src/gesture-detector/use-gesture.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useGesture=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_provider=__webpack_require__("./src/gesture-detector/provider.tsx");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}exports.useGesture=function useGesture(){var context=React.useContext(_provider.GestureContext);if(!context)throw new Error("useGesture must be called within GestureEventProvider");return context}}}]);