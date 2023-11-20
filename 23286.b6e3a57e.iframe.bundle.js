(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[23286,1050,94725,33844],{"./node_modules/lodash/_baseValues.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayMap=__webpack_require__("./node_modules/lodash/_arrayMap.js");module.exports=function baseValues(object,props){return arrayMap(props,(function(key){return object[key]}))}},"./node_modules/lodash/uniqueId.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}},"./node_modules/lodash/values.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseValues=__webpack_require__("./node_modules/lodash/_baseValues.js"),keys=__webpack_require__("./node_modules/lodash/keys.js");module.exports=function values(object){return null==object?[]:baseValues(object,keys(object))}},"./node_modules/react-error-boundary/dist/react-error-boundary.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ErrorBoundary:()=>ErrorBoundary,ErrorBoundaryContext:()=>ErrorBoundaryContext,useErrorBoundary:()=>useErrorBoundary,withErrorBoundary:()=>withErrorBoundary});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ErrorBoundaryContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),initialState={didCatch:!1,error:null};class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=initialState}static getDerivedStateFromError(error){return{didCatch:!0,error}}resetErrorBoundary(){const{error}=this.state;if(null!==error){for(var _this$props$onReset,_this$props,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];null===(_this$props$onReset=(_this$props=this.props).onReset)||void 0===_this$props$onReset||_this$props$onReset.call(_this$props,{args,reason:"imperative-api"}),this.setState(initialState)}}componentDidCatch(error,info){var _this$props$onError,_this$props2;null===(_this$props$onError=(_this$props2=this.props).onError)||void 0===_this$props$onError||_this$props$onError.call(_this$props2,error,info)}componentDidUpdate(prevProps,prevState){const{didCatch}=this.state,{resetKeys}=this.props;var _this$props$onReset2,_this$props3;didCatch&&null!==prevState.error&&function hasArrayChanged(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return a.length!==b.length||a.some(((item,index)=>!Object.is(item,b[index])))}(prevProps.resetKeys,resetKeys)&&(null===(_this$props$onReset2=(_this$props3=this.props).onReset)||void 0===_this$props$onReset2||_this$props$onReset2.call(_this$props3,{next:resetKeys,prev:prevProps.resetKeys,reason:"keys"}),this.setState(initialState))}render(){const{children,fallbackRender,FallbackComponent,fallback}=this.props,{didCatch,error}=this.state;let childToRender=children;if(didCatch){const props={error,resetErrorBoundary:this.resetErrorBoundary};if((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(fallback))childToRender=fallback;else if("function"==typeof fallbackRender)childToRender=fallbackRender(props);else{if(!FallbackComponent)throw error;childToRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FallbackComponent,props)}}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorBoundaryContext.Provider,{value:{didCatch,error,resetErrorBoundary:this.resetErrorBoundary}},childToRender)}}function useErrorBoundary(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ErrorBoundaryContext);!function assertErrorBoundaryContext(value){if(null==value||"boolean"!=typeof value.didCatch||"function"!=typeof value.resetErrorBoundary)throw new Error("ErrorBoundaryContext not found");return!0}(context);const[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({error:null,hasError:!1}),memoized=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({resetBoundary:()=>{null==context||context.resetErrorBoundary(),setState({error:null,hasError:!1})},showBoundary:error=>setState({error,hasError:!0})})),[null==context?void 0:context.resetErrorBoundary]);if(state.hasError)throw state.error;return memoized}function withErrorBoundary(component,errorBoundaryProps){const Wrapped=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorBoundary,errorBoundaryProps,(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component,{...props,ref})))),name=component.displayName||component.name||"Unknown";return Wrapped.displayName="withErrorBoundary(".concat(name,")"),Wrapped}},"./src/portal/portal.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.BasicUsage=void 0;(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n})(__webpack_require__("./node_modules/react/index.js"));var _BasicUsage$parameter,_BasicUsage$parameter2,_BasicUsage$parameter3,_=_interopRequireDefault(__webpack_require__("./src/portal/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var AppProvider=function AppProvider(_ref){var children=_ref.children;return(0,_jsxRuntime.jsxs)(_.default.Provider,{children:[children,(0,_jsxRuntime.jsx)(_.default.Manager,{})]})},BasicUsage=exports.BasicUsage=function BasicUsage(){return(0,_jsxRuntime.jsxs)(AppProvider,{children:[(0,_jsxRuntime.jsx)(_text.default,{children:"In document flow"}),(0,_jsxRuntime.jsx)(_.default,{keyPrefix:"Test",children:(0,_jsxRuntime.jsx)(_text.default,{children:"Out of document flow"})}),(0,_jsxRuntime.jsx)(_text.default,{children:"In document flow"})]})};exports.default={title:"Components/Portal"};BasicUsage.parameters=Object.assign({},BasicUsage.parameters,{docs:Object.assign({},null==(_BasicUsage$parameter=BasicUsage.parameters)?void 0:_BasicUsage$parameter.docs,{source:Object.assign({originalSource:'() => {\n  return <AppProvider>\n            <Text>In document flow</Text>\n            <Portal keyPrefix="Test">\n                <Text>Out of document flow</Text>\n            </Portal>\n            <Text>In document flow</Text>\n        </AppProvider>;\n}'},null==(_BasicUsage$parameter2=BasicUsage.parameters)||null==(_BasicUsage$parameter3=_BasicUsage$parameter2.docs)?void 0:_BasicUsage$parameter3.source)})})},"./src/error-boundary/index.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_reactErrorBoundary=(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),__webpack_require__("./node_modules/react-error-boundary/dist/react-error-boundary.esm.js")),_fallback=_interopRequireDefault(__webpack_require__("./src/error-boundary/fallback.tsx")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["FallbackComponent"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}exports.default=function Boundary(_ref){var _ref$FallbackComponen=_ref.FallbackComponent,FallbackComponent=void 0===_ref$FallbackComponen?_fallback.default:_ref$FallbackComponen,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);return(0,_jsxRuntime.jsx)(_reactErrorBoundary.ErrorBoundary,Object.assign({FallbackComponent},props))};try{errorboundary.displayName="errorboundary",errorboundary.__docgenInfo={description:"",displayName:"errorboundary",props:{onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((error: Error, info: ErrorInfo) => void)"}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"undefined"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:'((details: { reason: "imperative-api"; args: any[]; } | { reason: "keys"; prev: any[]; next: any[]; }) => void) | undefined'}},resetKeys:{defaultValue:null,description:"",name:"resetKeys",required:!1,type:{name:"any[]"}},fallbackRender:{defaultValue:null,description:"",name:"fallbackRender",required:!1,type:{name:"undefined"}},FallbackComponent:{defaultValue:null,description:"",name:"FallbackComponent",required:!1,type:{name:"ComponentType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/error-boundary/index.tsx#errorboundary"]={docgenInfo:errorboundary.__docgenInfo,name:"errorboundary",path:"src/error-boundary/index.tsx#errorboundary"})}catch(__react_docgen_typescript_loader_error){}},"./src/portal/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _manager=_interopRequireDefault(__webpack_require__("./src/portal/manager.tsx")),_portal=_interopRequireDefault(__webpack_require__("./src/portal/portal.tsx")),_provider=_interopRequireDefault(__webpack_require__("./src/portal/provider.tsx"));exports.default=Object.assign(_portal.default,{Provider:_provider.default,Manager:_manager.default})},"./src/portal/manager.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_values=_interopRequireDefault(__webpack_require__("./node_modules/lodash/values.js")),_provider=__webpack_require__("./src/portal/provider.tsx"),_errorBoundary=_interopRequireDefault(__webpack_require__("./src/error-boundary/index.tsx")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}exports.default=function Manager(){var components=React.useContext(_provider.PortalContext).components;return(0,_jsxRuntime.jsx)(_errorBoundary.default,{children:(0,_values.default)(components)})}},"./src/portal/portal.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_uniqueId=_interopRequireDefault(__webpack_require__("./node_modules/lodash/uniqueId.js")),_provider=__webpack_require__("./src/portal/provider.tsx");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}exports.default=function Portal(_ref){var children=_ref.children,_ref$keyPrefix=_ref.keyPrefix,keyPrefix=void 0===_ref$keyPrefix?"":_ref$keyPrefix,key=React.useMemo((function(){return(0,_uniqueId.default)(keyPrefix)}),[keyPrefix]),setComponent=React.useContext(_provider.PortalContext).setComponent;return React.useEffect((function(){return setComponent(key,children)}),[children,setComponent,key]),React.useEffect((function(){return function(){setComponent(key,null)}}),[]),null};try{portal.displayName="portal",portal.__docgenInfo={description:"",displayName:"portal",props:{keyPrefix:{defaultValue:{value:""},description:"",name:"keyPrefix",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/portal/portal.tsx#portal"]={docgenInfo:portal.__docgenInfo,name:"portal",path:"src/portal/portal.tsx#portal"})}catch(__react_docgen_typescript_loader_error){}},"./src/portal/provider.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.PortalContext=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js")),_slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var PortalContext=exports.PortalContext=React.createContext({components:{},setComponent:function setComponent(){}});exports.default=function Provider(_ref){var children=_ref.children,_React$useState=React.useState({}),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),components=_React$useState2[0],setComponents=_React$useState2[1],setComponent=React.useCallback((function(key,component){setComponents((function(prev){return Object.assign({},prev,(0,_defineProperty2.default)({},key,component||null))}))}),[setComponents]);return(0,_jsxRuntime.jsx)(PortalContext.Provider,{value:{components,setComponent},children})};try{provider.displayName="provider",provider.__docgenInfo={description:"",displayName:"provider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/portal/provider.tsx#provider"]={docgenInfo:provider.__docgenInfo,name:"provider",path:"src/portal/provider.tsx#provider"})}catch(__react_docgen_typescript_loader_error){}}}]);