(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[68570,1050],{"./node_modules/react-error-boundary/dist/react-error-boundary.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ErrorBoundary:()=>ErrorBoundary,ErrorBoundaryContext:()=>ErrorBoundaryContext,useErrorBoundary:()=>useErrorBoundary,withErrorBoundary:()=>withErrorBoundary});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ErrorBoundaryContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),initialState={didCatch:!1,error:null};class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=initialState}static getDerivedStateFromError(error){return{didCatch:!0,error}}resetErrorBoundary(){const{error}=this.state;if(null!==error){for(var _this$props$onReset,_this$props,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];null===(_this$props$onReset=(_this$props=this.props).onReset)||void 0===_this$props$onReset||_this$props$onReset.call(_this$props,{args,reason:"imperative-api"}),this.setState(initialState)}}componentDidCatch(error,info){var _this$props$onError,_this$props2;null===(_this$props$onError=(_this$props2=this.props).onError)||void 0===_this$props$onError||_this$props$onError.call(_this$props2,error,info)}componentDidUpdate(prevProps,prevState){const{didCatch}=this.state,{resetKeys}=this.props;var _this$props$onReset2,_this$props3;didCatch&&null!==prevState.error&&function hasArrayChanged(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return a.length!==b.length||a.some(((item,index)=>!Object.is(item,b[index])))}(prevProps.resetKeys,resetKeys)&&(null===(_this$props$onReset2=(_this$props3=this.props).onReset)||void 0===_this$props$onReset2||_this$props$onReset2.call(_this$props3,{next:resetKeys,prev:prevProps.resetKeys,reason:"keys"}),this.setState(initialState))}render(){const{children,fallbackRender,FallbackComponent,fallback}=this.props,{didCatch,error}=this.state;let childToRender=children;if(didCatch){const props={error,resetErrorBoundary:this.resetErrorBoundary};if((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(fallback))childToRender=fallback;else if("function"==typeof fallbackRender)childToRender=fallbackRender(props);else{if(!FallbackComponent)throw error;childToRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FallbackComponent,props)}}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorBoundaryContext.Provider,{value:{didCatch,error,resetErrorBoundary:this.resetErrorBoundary}},childToRender)}}function useErrorBoundary(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ErrorBoundaryContext);!function assertErrorBoundaryContext(value){if(null==value||"boolean"!=typeof value.didCatch||"function"!=typeof value.resetErrorBoundary)throw new Error("ErrorBoundaryContext not found");return!0}(context);const[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({error:null,hasError:!1}),memoized=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({resetBoundary:()=>{null==context||context.resetErrorBoundary(),setState({error:null,hasError:!1})},showBoundary:error=>setState({error,hasError:!0})})),[null==context?void 0:context.resetErrorBoundary]);if(state.hasError)throw state.error;return memoized}function withErrorBoundary(component,errorBoundaryProps){const Wrapped=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorBoundary,errorBoundaryProps,(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component,{...props,ref})))),name=component.displayName||component.name||"Unknown";return Wrapped.displayName="withErrorBoundary(".concat(name,")"),Wrapped}},"./src/error-boundary/index.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_reactErrorBoundary=(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),__webpack_require__("./node_modules/react-error-boundary/dist/react-error-boundary.esm.js")),_fallback=_interopRequireDefault(__webpack_require__("./src/error-boundary/fallback.tsx")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["FallbackComponent"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var _default=function Boundary(_ref){var _ref$FallbackComponen=_ref.FallbackComponent,FallbackComponent=void 0===_ref$FallbackComponen?_fallback.default:_ref$FallbackComponen,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);return(0,_jsxRuntime.jsx)(_reactErrorBoundary.ErrorBoundary,Object.assign({FallbackComponent},props))};exports.default=_default;try{errorboundary.displayName="errorboundary",errorboundary.__docgenInfo={description:"",displayName:"errorboundary",props:{onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((error: Error, info: ErrorInfo) => void)"}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"undefined"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:'((details: { reason: "imperative-api"; args: any[]; } | { reason: "keys"; prev: any[]; next: any[]; }) => void) | undefined'}},resetKeys:{defaultValue:null,description:"",name:"resetKeys",required:!1,type:{name:"any[]"}},fallbackRender:{defaultValue:null,description:"",name:"fallbackRender",required:!1,type:{name:"undefined"}},FallbackComponent:{defaultValue:null,description:"",name:"FallbackComponent",required:!1,type:{name:"ComponentType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/error-boundary/index.tsx#errorboundary"]={docgenInfo:errorboundary.__docgenInfo,name:"errorboundary",path:"src/error-boundary/index.tsx#errorboundary"})}catch(__react_docgen_typescript_loader_error){}},"./src/loader/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _loader.default}});var _loader=_interopRequireDefault(__webpack_require__("./src/loader/loader.tsx"))},"./src/loader/loader.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_ActivityIndicator=(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/ActivityIndicator/index.js"))),_native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["type","size"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var _default=function Loader(_ref){var type=_ref.type,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),theme=(0,_native.useTheme)(),color=theme.colors[type||"primary"];return(0,_jsxRuntime.jsx)(_ActivityIndicator.default,Object.assign({color,size:parseFloat(theme.iconSizes[size])},props))};exports.default=_default;try{loader.displayName="loader",loader.__docgenInfo={description:"",displayName:"loader",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},size:{defaultValue:{value:"normal"},description:"Make ActivityIndicator size compatible with Icon component",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/loader/loader.tsx#loader"]={docgenInfo:loader.__docgenInfo,name:"loader",path:"src/loader/loader.tsx#loader"})}catch(__react_docgen_typescript_loader_error){}},"./src/pressable/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _pressable.Pressable}});var _pressable=__webpack_require__("./src/pressable/pressable.tsx")},"./src/pressable/pressable.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Pressable=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_Pressable=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Pressable/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["style"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Pressable=React.forwardRef((function(props,ref){var style=props.style,rest=(0,_objectWithoutProperties2.default)(props,_excluded),resolvedStyle=React.useCallback((function(state){var finalStyle=[];"function"==typeof style?finalStyle=[style(state),{flexDirection:"row"}]:finalStyle=[{flexDirection:"row"},style];return finalStyle}),[style]);return(0,_jsxRuntime.jsx)(_Pressable.default,Object.assign({style:resolvedStyle,ref},rest))}));exports.Pressable=Pressable;try{Pressable.displayName="Pressable",Pressable.__docgenInfo={description:"",displayName:"Pressable",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pressable/pressable.tsx#Pressable"]={docgenInfo:Pressable.__docgenInfo,name:"Pressable",path:"src/pressable/pressable.tsx#Pressable"})}catch(__react_docgen_typescript_loader_error){}}}]);