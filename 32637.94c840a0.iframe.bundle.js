(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[32637],{"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/hoverable/hoverable.web.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Hoverable=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var _worklet_4321571672304_init_data={code:"function anonymous(){const{showHover,isHovered}=this.__closure;return showHover.value&&isHovered.value;}",location:"/home/runner/work/components/components/src/hoverable/hoverable.web.tsx",sourceMap:'{"version":3,"names":["anonymous","showHover","isHovered","__closure","value"],"sources":["/home/runner/work/components/components/src/hoverable/hoverable.web.tsx"],"mappings":"AAqCE,SAAAA,SAAMA,CAAA,QAAAC,SAAA,CAAAC,SAAA,OAAAC,SAAA,CACL,MAAO,CAAAF,SAAS,CAACG,KAAK,EAAIF,SAAS,CAACE,KAAK,CAC1C"}',version:"3.5.4"},_worklet_15755728995573_init_data={code:"function anonymous(hovered,previouslyHovered){const{hoverIn,hoverOut}=this.__closure;if(hovered!==previouslyHovered){if(hovered&&hoverIn.current){hoverIn.current();}else if(hoverOut.current){hoverOut.current();}}}",location:"/home/runner/work/components/components/src/hoverable/hoverable.web.tsx",sourceMap:'{"version":3,"names":["anonymous","hovered","previouslyHovered","hoverIn","hoverOut","__closure","current"],"sources":["/home/runner/work/components/components/src/hoverable/hoverable.web.tsx"],"mappings":"AAwCE,QAAC,CAAAA,SAAOA,CAAAC,OAAE,CAAAC,iBAAsB,QAAAC,OAAA,CAAAC,QAAA,OAAAC,SAAA,CAC/B,GAAIJ,OAAO,GAAKC,iBAAiB,CAAE,CAClC,GAAID,OAAO,EAAIE,OAAO,CAACG,OAAO,CAAE,CAE/BH,OAAO,CAACG,OAAO,CAAC,CAAC,CAClB,CAAC,IAAM,IAAIF,QAAQ,CAACE,OAAO,CAAE,CAC5BF,QAAQ,CAACE,OAAO,CAAC,CAAC,CACnB,CACD,CACD"}',version:"3.5.4"},Hoverable=exports.Hoverable=function Hoverable(_ref){var _e,anonymous,onHoverIn=_ref.onHoverIn,onHoverOut=_ref.onHoverOut,children=_ref.children,onPressIn=_ref.onPressIn,onPressOut=_ref.onPressOut,showHover=(0,_reactNativeReanimated.useSharedValue)(!0),isHovered=(0,_reactNativeReanimated.useSharedValue)(!1),hoverIn=React.useRef((function(){return null==onHoverIn?void 0:onHoverIn()})),hoverOut=React.useRef((function(){return null==onHoverOut?void 0:onHoverOut()})),pressIn=React.useRef((function(){return null==onPressIn?void 0:onPressIn()})),pressOut=React.useRef((function(){return null==onPressOut?void 0:onPressOut()}));hoverIn.current=onHoverIn,hoverOut.current=onHoverOut,pressIn.current=onPressIn,pressOut.current=onPressOut,(0,_reactNativeReanimated.useAnimatedReaction)((_e=[new __webpack_require__.g.Error,-3,-27],(anonymous=function anonymous(){return showHover.value&&isHovered.value}).__closure={showHover,isHovered},anonymous.__initData=_worklet_4321571672304_init_data,anonymous.__workletHash=4321571672304,anonymous.__stackDetails=_e,anonymous),function(){var _e=[new __webpack_require__.g.Error,-3,-27],anonymous=function anonymous(hovered,previouslyHovered){hovered!==previouslyHovered&&(hovered&&hoverIn.current?hoverIn.current():hoverOut.current&&hoverOut.current())};return anonymous.__closure={hoverIn,hoverOut},anonymous.__initData=_worklet_15755728995573_init_data,anonymous.__workletHash=0xe546aa144f5,anonymous.__stackDetails=_e,anonymous}(),[]);var handleMouseEnter=React.useCallback((function(){isHovered.value||(isHovered.value=!0)}),[isHovered]),handleMouseLeave=React.useCallback((function(){isHovered.value&&(isHovered.value=!1)}),[isHovered]),handleGrant=React.useCallback((function(){showHover.value=!1,null==pressIn.current||pressIn.current()}),[showHover]),handleRelease=React.useCallback((function(){showHover.value=!0,null==pressOut.current||pressOut.current()}),[showHover]);return React.cloneElement(React.Children.only(children),{onMouseEnter:handleMouseEnter,onMouseLeave:handleMouseLeave,onResponderGrant:handleGrant,onResponderRelease:handleRelease,onPressIn:handleGrant,onPressOut:handleRelease})};try{Hoverable.displayName="Hoverable",Hoverable.__docgenInfo={description:"",displayName:"Hoverable",props:{onHoverIn:{defaultValue:null,description:"",name:"onHoverIn",required:!1,type:{name:"(() => void)"}},onHoverOut:{defaultValue:null,description:"",name:"onHoverOut",required:!1,type:{name:"(() => void)"}},onPressIn:{defaultValue:null,description:"",name:"onPressIn",required:!1,type:{name:"(() => void)"}},onPressOut:{defaultValue:null,description:"",name:"onPressOut",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hoverable/hoverable.web.tsx#Hoverable"]={docgenInfo:Hoverable.__docgenInfo,name:"Hoverable",path:"src/hoverable/hoverable.web.tsx#Hoverable"})}catch(__react_docgen_typescript_loader_error){}}}]);