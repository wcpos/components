(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[79481],{"./node_modules/@babel/runtime/helpers/arrayWithHoles.js":module=>{module.exports=function _arrayWithHoles(arr){if(Array.isArray(arr))return arr},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":module=>{module.exports=function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/nonIterableRest.js":module=>{module.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/slicedToArray.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayWithHoles=__webpack_require__("./node_modules/@babel/runtime/helpers/arrayWithHoles.js"),iterableToArrayLimit=__webpack_require__("./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"),unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"),nonIterableRest=__webpack_require__("./node_modules/@babel/runtime/helpers/nonIterableRest.js");module.exports=function _slicedToArray(arr,i){return arrayWithHoles(arr)||iterableToArrayLimit(arr,i)||unsupportedIterableToArray(arr,i)||nonIterableRest()},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/error-boundary/react-error-boundary.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.ErrorBoundary=void 0,exports.useErrorHandler=useErrorHandler,exports.withErrorBoundary=function withErrorBoundary(Component,errorBoundaryProps){var Wrapped=function Wrapped(props){return(0,_jsxRuntime.jsx)(ErrorBoundary,Object.assign({},errorBoundaryProps,{children:(0,_jsxRuntime.jsx)(Component,Object.assign({},props))}))},name=Component.displayName||Component.name||"Unknown";return Wrapped.displayName="withErrorBoundary(".concat(name,")"),Wrapped};var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_classCallCheck2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js")),_createClass2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js")),_assertThisInitialized2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),_inherits2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),_defineProperty2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=(0,_getPrototypeOf2.default)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,_possibleConstructorReturn2.default)(this,result)}}var initialState={error:null},ErrorBoundary=function(_React$Component){(0,_inherits2.default)(ErrorBoundary,_React$Component);var _super=_createSuper(ErrorBoundary);function ErrorBoundary(props){var _this;return(0,_classCallCheck2.default)(this,ErrorBoundary),_this=_super.call(this,props),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"resetErrorBoundary",(function(){for(var _this$props,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];null==_this.props.onReset||(_this$props=_this.props).onReset.apply(_this$props,args),_this.reset()})),_this.state=initialState,_this}return(0,_createClass2.default)(ErrorBoundary,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState){var _this$props$onResetKe,_this$props2,error=this.state.error,resetKeys=this.props.resetKeys;null!==error&&null!==prevState.error&&function changedArray(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return a.length!==b.length||a.some((function(item,index){return!Object.is(item,b[index])}))}(prevProps.resetKeys,resetKeys)&&(null==(_this$props$onResetKe=(_this$props2=this.props).onResetKeysChange)||_this$props$onResetKe.call(_this$props2,prevProps.resetKeys,resetKeys),this.reset())}},{key:"componentDidCatch",value:function componentDidCatch(error,info){var _this$props$onError,_this$props3;null==(_this$props$onError=(_this$props3=this.props).onError)||_this$props$onError.call(_this$props3,error,info)}},{key:"reset",value:function reset(){this.setState(initialState)}},{key:"render",value:function render(){var error=this.state.error,_this$props4=this.props,fallbackRender=_this$props4.fallbackRender,FallbackComponent=_this$props4.FallbackComponent,fallback=_this$props4.fallback;if(null!==error){var _props={error,resetErrorBoundary:this.resetErrorBoundary};if(React.isValidElement(fallback))return fallback;if("function"==typeof fallbackRender)return fallbackRender(_props);if(FallbackComponent)return(0,_jsxRuntime.jsx)(FallbackComponent,Object.assign({},_props));throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children}}],[{key:"getDerivedStateFromError",value:function getDerivedStateFromError(error){return{error}}}]),ErrorBoundary}(React.Component);function useErrorHandler(givenError){var _React$useState=React.useState(null),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),error=_React$useState2[0],setError=_React$useState2[1];if(null!=givenError)throw givenError;if(null!=error)throw error;return setError}exports.ErrorBoundary=ErrorBoundary;try{ErrorBoundary.displayName="ErrorBoundary",ErrorBoundary.__docgenInfo={description:"",displayName:"ErrorBoundary",props:{onResetKeysChange:{defaultValue:null,description:"",name:"onResetKeysChange",required:!1,type:{name:"((prevResetKeys: unknown[], resetKeys: unknown[]) => void) | ((prevResetKeys: unknown[] | undefined, resetKeys: unknown[] | undefined) => void) | ((prevResetKeys: unknown[] | undefined, resetKeys: unknown[] | undefined) => void) | undefined"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"((...args: unknown[]) => void) | ((...args: unknown[]) => void) | ((...args: unknown[]) => void)"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((error: Error, info: { componentStack: string; }) => void) | ((error: Error, info: { componentStack: string; }) => void) | ((error: Error, info: { componentStack: string; }) => void)"}},resetKeys:{defaultValue:null,description:"",name:"resetKeys",required:!1,type:{name:"unknown[]"}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"ReactElement<unknown, string | typeof Component | FunctionComponent<{}>> | null"}},FallbackComponent:{defaultValue:null,description:"",name:"FallbackComponent",required:!1,type:{name:"ComponentType<FallbackProps>"}},fallbackRender:{defaultValue:null,description:"",name:"fallbackRender",required:!1,type:{name:"((props: FallbackProps) => ReactElement<unknown, string | typeof Component | FunctionComponent<{}>> | null)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/error-boundary/react-error-boundary.tsx#ErrorBoundary"]={docgenInfo:ErrorBoundary.__docgenInfo,name:"ErrorBoundary",path:"src/error-boundary/react-error-boundary.tsx#ErrorBoundary"})}catch(__react_docgen_typescript_loader_error){}try{useErrorHandler.displayName="useErrorHandler",useErrorHandler.__docgenInfo={description:"",displayName:"useErrorHandler",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/error-boundary/react-error-boundary.tsx#useErrorHandler"]={docgenInfo:useErrorHandler.__docgenInfo,name:"useErrorHandler",path:"src/error-boundary/react-error-boundary.tsx#useErrorHandler"})}catch(__react_docgen_typescript_loader_error){}}}]);