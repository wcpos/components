(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[48618],{"./src/portal/provider.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.PortalContext=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js")),_slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var PortalContext=exports.PortalContext=React.createContext({components:{},setComponent:function setComponent(){}});exports.default=function Provider(_ref){var children=_ref.children,_React$useState=React.useState({}),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),components=_React$useState2[0],setComponents=_React$useState2[1],setComponent=React.useCallback((function(key,component){setComponents((function(prev){return Object.assign({},prev,(0,_defineProperty2.default)({},key,component||null))}))}),[setComponents]);return(0,_jsxRuntime.jsx)(PortalContext.Provider,{value:{components,setComponent},children})};try{provider.displayName="provider",provider.__docgenInfo={description:"",displayName:"provider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/portal/provider.tsx#provider"]={docgenInfo:provider.__docgenInfo,name:"provider",path:"src/portal/provider.tsx#provider"})}catch(__react_docgen_typescript_loader_error){}}}]);