(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[89307,1050],{"./node_modules/react-error-boundary/dist/react-error-boundary.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ErrorBoundary:()=>ErrorBoundary,ErrorBoundaryContext:()=>ErrorBoundaryContext,useErrorBoundary:()=>useErrorBoundary,withErrorBoundary:()=>withErrorBoundary});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ErrorBoundaryContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),initialState={didCatch:!1,error:null};class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=initialState}static getDerivedStateFromError(error){return{didCatch:!0,error}}resetErrorBoundary(...args){const{error}=this.state;null!==error&&(this.props.onReset?.({args,reason:"imperative-api"}),this.setState(initialState))}componentDidCatch(error,info){this.props.onError?.(error,info)}componentDidUpdate(prevProps,prevState){const{didCatch}=this.state,{resetKeys}=this.props;didCatch&&null!==prevState.error&&function hasArrayChanged(a=[],b=[]){return a.length!==b.length||a.some(((item,index)=>!Object.is(item,b[index])))}(prevProps.resetKeys,resetKeys)&&(this.props.onReset?.({next:resetKeys,prev:prevProps.resetKeys,reason:"keys"}),this.setState(initialState))}render(){const{children,fallbackRender,FallbackComponent,fallback}=this.props,{didCatch,error}=this.state;let childToRender=children;if(didCatch){const props={error,resetErrorBoundary:this.resetErrorBoundary};if((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(fallback))childToRender=fallback;else if("function"==typeof fallbackRender)childToRender=fallbackRender(props);else{if(!FallbackComponent)throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");childToRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FallbackComponent,props)}}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorBoundaryContext.Provider,{value:{didCatch,error,resetErrorBoundary:this.resetErrorBoundary}},childToRender)}}function useErrorBoundary(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ErrorBoundaryContext);!function assertErrorBoundaryContext(value){if(null==value||"boolean"!=typeof value.didCatch||"function"!=typeof value.resetErrorBoundary)throw new Error("ErrorBoundaryContext not found");return!0}(context);const[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({error:null,hasError:!1}),memoized=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({resetBoundary:()=>{context?.resetErrorBoundary(),setState({error:null,hasError:!1})},showBoundary:error=>setState({error,hasError:!0})})),[context?.resetErrorBoundary]);if(state.hasError)throw state.error;return memoized}function withErrorBoundary(component,errorBoundaryProps){const Wrapped=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorBoundary,errorBoundaryProps,(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component,{...props,ref})))),name=component.displayName||component.name||"Unknown";return Wrapped.displayName=`withErrorBoundary(${name})`,Wrapped}},"./src/error-boundary/error.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.WithFallback=exports.BasicUsage=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _BasicUsage$parameter,_BasicUsage$parameter2,_BasicUsage$parameter3,_WithFallback$paramet,_WithFallback$paramet2,_WithFallback$paramet3,_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_Button=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Button/index.js")),_addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_=_interopRequireDefault(__webpack_require__("./src/error-boundary/index.tsx")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var BuggyComponent=function BuggyComponent(){throw new Error("This is a bug")};function ErrorFallback(_ref){var error=_ref.error,resetErrorBoundary=_ref.resetErrorBoundary;return(0,_jsxRuntime.jsxs)(_View.default,{children:[(0,_jsxRuntime.jsx)(_Text.default,{children:"Something went wrong:"}),(0,_jsxRuntime.jsx)(_Text.default,{children:error.message}),(0,_jsxRuntime.jsx)(_Button.default,{onPress:resetErrorBoundary,title:"Try again"})]})}var BasicUsage=function BasicUsage(props){return(0,_jsxRuntime.jsx)(_.default,Object.assign({},props,{onError:(0,_addonActions.action)("error handler"),children:(0,_jsxRuntime.jsx)(BuggyComponent,{})}))};exports.BasicUsage=BasicUsage;var WithFallback=function WithFallback(props){return(0,_jsxRuntime.jsx)(_.default,Object.assign({},props,{FallbackComponent:ErrorFallback,children:(0,_jsxRuntime.jsx)(BuggyComponent,{})}))};exports.WithFallback=WithFallback;var _default={title:"Components/Error"};exports.default=_default,BasicUsage.parameters=Object.assign({},BasicUsage.parameters,{docs:Object.assign({},null==(_BasicUsage$parameter=BasicUsage.parameters)?void 0:_BasicUsage$parameter.docs,{source:Object.assign({originalSource:"props => <ErrorBoundary {...props} onError={action('error handler')}>\n        <BuggyComponent />\n    </ErrorBoundary>"},null==(_BasicUsage$parameter2=BasicUsage.parameters)||null==(_BasicUsage$parameter3=_BasicUsage$parameter2.docs)?void 0:_BasicUsage$parameter3.source)})}),WithFallback.parameters=Object.assign({},WithFallback.parameters,{docs:Object.assign({},null==(_WithFallback$paramet=WithFallback.parameters)?void 0:_WithFallback$paramet.docs,{source:Object.assign({originalSource:"props => <ErrorBoundary {...props} FallbackComponent={ErrorFallback}>\n        <BuggyComponent />\n    </ErrorBoundary>"},null==(_WithFallback$paramet2=WithFallback.parameters)||null==(_WithFallback$paramet3=_WithFallback$paramet2.docs)?void 0:_WithFallback$paramet3.source)})});try{BasicUsage.displayName="BasicUsage",BasicUsage.__docgenInfo={description:"",displayName:"BasicUsage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/error-boundary/error.stories.tsx#BasicUsage"]={docgenInfo:BasicUsage.__docgenInfo,name:"BasicUsage",path:"src/error-boundary/error.stories.tsx#BasicUsage"})}catch(__react_docgen_typescript_loader_error){}try{WithFallback.displayName="WithFallback",WithFallback.__docgenInfo={description:"",displayName:"WithFallback",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/error-boundary/error.stories.tsx#WithFallback"]={docgenInfo:WithFallback.__docgenInfo,name:"WithFallback",path:"src/error-boundary/error.stories.tsx#WithFallback"})}catch(__react_docgen_typescript_loader_error){}},"./src/error-boundary/index.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_reactErrorBoundary=(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),__webpack_require__("./node_modules/react-error-boundary/dist/react-error-boundary.esm.js")),_fallback=_interopRequireDefault(__webpack_require__("./src/error-boundary/fallback.tsx")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["FallbackComponent"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var _default=function Boundary(_ref){var _ref$FallbackComponen=_ref.FallbackComponent,FallbackComponent=void 0===_ref$FallbackComponen?_fallback.default:_ref$FallbackComponen,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);return(0,_jsxRuntime.jsx)(_reactErrorBoundary.ErrorBoundary,Object.assign({FallbackComponent},props))};exports.default=_default;try{errorboundary.displayName="errorboundary",errorboundary.__docgenInfo={description:"",displayName:"errorboundary",props:{onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((error: Error, info: { componentStack: string; }) => void)"}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"undefined"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:'((details: { reason: "imperative-api"; args: any[]; } | { reason: "keys"; prev: any[]; next: any[]; }) => void) | undefined'}},resetKeys:{defaultValue:null,description:"",name:"resetKeys",required:!1,type:{name:"any[]"}},fallbackRender:{defaultValue:null,description:"",name:"fallbackRender",required:!1,type:{name:"undefined"}},FallbackComponent:{defaultValue:null,description:"",name:"FallbackComponent",required:!1,type:{name:"ComponentType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/error-boundary/index.tsx#errorboundary"]={docgenInfo:errorboundary.__docgenInfo,name:"errorboundary",path:"src/error-boundary/index.tsx#errorboundary"})}catch(__react_docgen_typescript_loader_error){}}}]);