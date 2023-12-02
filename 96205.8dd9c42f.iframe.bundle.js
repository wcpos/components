(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[96205,54128,6479,32637],{"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/hoverable/hoverable.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.BasicUsage=void 0;(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n})(__webpack_require__("./node_modules/react/index.js"));var _BasicUsage$parameter,_BasicUsage$parameter2,_BasicUsage$parameter3,_addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_hoverable=__webpack_require__("./src/hoverable/hoverable.web.tsx"),_button=_interopRequireDefault(__webpack_require__("./src/button/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var meta={title:"Components/Hoverable",component:_hoverable.Hoverable},BasicUsage=exports.BasicUsage=function BasicUsage(props){return(0,_jsxRuntime.jsx)(_hoverable.Hoverable,Object.assign({},props,{children:(0,_jsxRuntime.jsxs)(_pressable.default,{onHoverIn:function onHoverIn(){return(0,_addonActions.action)("Pressable HoverIn")},onHoverOut:function onHoverOut(){return(0,_addonActions.action)("Pressable HoverOut")},style:{width:100,height:100},children:[(0,_jsxRuntime.jsx)(_text.default,{children:"Hover"}),(0,_jsxRuntime.jsx)(_button.default,{onPress:function onPress(){return(0,_addonActions.action)("Button Press")},children:"Button"})]})}))};BasicUsage.args={onHoverIn:(0,_addonActions.action)("HoverIn"),onHoverOut:(0,_addonActions.action)("HoverOut"),onPressIn:(0,_addonActions.action)("PressIn"),onPressOut:(0,_addonActions.action)("PressOut")};exports.default=meta;BasicUsage.parameters=Object.assign({},BasicUsage.parameters,{docs:Object.assign({},null==(_BasicUsage$parameter=BasicUsage.parameters)?void 0:_BasicUsage$parameter.docs,{source:Object.assign({originalSource:"(props: HoverableProps) => <Hoverable {...props}>\n        <Pressable onHoverIn={() => action('Pressable HoverIn')} onHoverOut={() => action('Pressable HoverOut')} style={{\n    width: 100,\n    height: 100\n  }}>\n            <Text>Hover</Text>\n            <Button onPress={() => action('Button Press')}>Button</Button>\n        </Pressable>\n    </Hoverable>"},null==(_BasicUsage$parameter2=BasicUsage.parameters)||null==(_BasicUsage$parameter3=_BasicUsage$parameter2.docs)?void 0:_BasicUsage$parameter3.source)})});try{BasicUsage.displayName="BasicUsage",BasicUsage.__docgenInfo={description:"",displayName:"BasicUsage",props:{onHoverIn:{defaultValue:null,description:"",name:"onHoverIn",required:!1,type:{name:"(() => void)"}},onHoverOut:{defaultValue:null,description:"",name:"onHoverOut",required:!1,type:{name:"(() => void)"}},onPressIn:{defaultValue:null,description:"",name:"onPressIn",required:!1,type:{name:"(() => void)"}},onPressOut:{defaultValue:null,description:"",name:"onPressOut",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hoverable/hoverable.stories.tsx#BasicUsage"]={docgenInfo:BasicUsage.__docgenInfo,name:"BasicUsage",path:"src/hoverable/hoverable.stories.tsx#BasicUsage"})}catch(__react_docgen_typescript_loader_error){}},"./src/button/group.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Group=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/button/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["alignment","style","type","size","background","fill"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var Group=exports.Group=function Group(_ref){var _ref$alignment=_ref.alignment,alignment=void 0===_ref$alignment?"start":_ref$alignment,style=_ref.style,_ref$type=_ref.type,type=void 0===_ref$type?"primary":_ref$type,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,_ref$background=_ref.background,background=void 0===_ref$background?"solid":_ref$background,_ref$fill=_ref.fill,fill=void 0!==_ref$fill&&_ref$fill,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),children=React.Children.toArray(props.children).filter(Boolean),childrenLength=React.Children.count(children),items=React.Children.map(children,(function(child,index){var style={borderTopRightRadius:0,borderBottomRightRadius:0,borderTopLeftRadius:0,borderBottomLeftRadius:0,borderRightWidth:1,borderRightColor:"#e0e0e0"};0===index&&(style={borderTopRightRadius:0,borderBottomRightRadius:0,borderRightWidth:1,borderRightColor:"#e0e0e0"}),index===childrenLength-1&&(style={borderTopLeftRadius:0,borderBottomLeftRadius:0}),1===childrenLength&&(style={}),fill&&(style.flexGrow=1,style.flexShrink=0,style.flexBasis="".concat(100/childrenLength,"%"));var newProps=Object.assign({size,type,background},child.props,{style});return React.cloneElement(child,newProps)}));return(0,_jsxRuntime.jsx)(Styled.Group,{alignment,style,fill,children:items})};try{Group.displayName="Group",Group.__docgenInfo={description:"Arrange `Button` components with consistent spacing.",displayName:"Group",props:{children:{defaultValue:null,description:"Children components (should be `Button` components).",name:"children",required:!0,type:{name:"ReactNode"}},alignment:{defaultValue:{value:"start"},description:"Alignment of the children.\n\n- `start` will align the buttons at the start.\n- `end` will align the buttons at the end.",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},fill:{defaultValue:{value:"false"},description:"",name:"fill",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Style for button group container",name:"style",required:!1,type:{name:"ViewStyle"}},type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},background:{defaultValue:{value:"solid"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"clear"'},{value:'"outline"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/group.tsx#Group"]={docgenInfo:Group.__docgenInfo,name:"Group",path:"src/button/group.tsx#Group"})}catch(__react_docgen_typescript_loader_error){}},"./src/button/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _button=_interopRequireDefault(__webpack_require__("./src/button/button.tsx")),_group=__webpack_require__("./src/button/group.tsx");exports.default=Object.assign(_button.default,{Group:_group.Group})},"./src/hoverable/hoverable.web.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Hoverable=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var _worklet_4321571672304_init_data={code:"function anonymous(){const{showHover,isHovered}=this.__closure;return showHover.value&&isHovered.value;}",location:"/home/runner/work/components/components/src/hoverable/hoverable.web.tsx",sourceMap:'{"version":3,"names":["anonymous","showHover","isHovered","__closure","value"],"sources":["/home/runner/work/components/components/src/hoverable/hoverable.web.tsx"],"mappings":"AAqCE,SAAAA,SAAMA,CAAA,QAAAC,SAAA,CAAAC,SAAA,OAAAC,SAAA,CACL,MAAO,CAAAF,SAAS,CAACG,KAAK,EAAIF,SAAS,CAACE,KAAK,CAC1C"}',version:"3.5.4"},_worklet_15755728995573_init_data={code:"function anonymous(hovered,previouslyHovered){const{hoverIn,hoverOut}=this.__closure;if(hovered!==previouslyHovered){if(hovered&&hoverIn.current){hoverIn.current();}else if(hoverOut.current){hoverOut.current();}}}",location:"/home/runner/work/components/components/src/hoverable/hoverable.web.tsx",sourceMap:'{"version":3,"names":["anonymous","hovered","previouslyHovered","hoverIn","hoverOut","__closure","current"],"sources":["/home/runner/work/components/components/src/hoverable/hoverable.web.tsx"],"mappings":"AAwCE,QAAC,CAAAA,SAAOA,CAAAC,OAAE,CAAAC,iBAAsB,QAAAC,OAAA,CAAAC,QAAA,OAAAC,SAAA,CAC/B,GAAIJ,OAAO,GAAKC,iBAAiB,CAAE,CAClC,GAAID,OAAO,EAAIE,OAAO,CAACG,OAAO,CAAE,CAE/BH,OAAO,CAACG,OAAO,CAAC,CAAC,CAClB,CAAC,IAAM,IAAIF,QAAQ,CAACE,OAAO,CAAE,CAC5BF,QAAQ,CAACE,OAAO,CAAC,CAAC,CACnB,CACD,CACD"}',version:"3.5.4"},Hoverable=exports.Hoverable=function Hoverable(_ref){var _e,anonymous,onHoverIn=_ref.onHoverIn,onHoverOut=_ref.onHoverOut,children=_ref.children,onPressIn=_ref.onPressIn,onPressOut=_ref.onPressOut,showHover=(0,_reactNativeReanimated.useSharedValue)(!0),isHovered=(0,_reactNativeReanimated.useSharedValue)(!1),hoverIn=React.useRef((function(){return null==onHoverIn?void 0:onHoverIn()})),hoverOut=React.useRef((function(){return null==onHoverOut?void 0:onHoverOut()})),pressIn=React.useRef((function(){return null==onPressIn?void 0:onPressIn()})),pressOut=React.useRef((function(){return null==onPressOut?void 0:onPressOut()}));hoverIn.current=onHoverIn,hoverOut.current=onHoverOut,pressIn.current=onPressIn,pressOut.current=onPressOut,(0,_reactNativeReanimated.useAnimatedReaction)((_e=[new __webpack_require__.g.Error,-3,-27],(anonymous=function anonymous(){return showHover.value&&isHovered.value}).__closure={showHover,isHovered},anonymous.__initData=_worklet_4321571672304_init_data,anonymous.__workletHash=4321571672304,anonymous.__stackDetails=_e,anonymous),function(){var _e=[new __webpack_require__.g.Error,-3,-27],anonymous=function anonymous(hovered,previouslyHovered){hovered!==previouslyHovered&&(hovered&&hoverIn.current?hoverIn.current():hoverOut.current&&hoverOut.current())};return anonymous.__closure={hoverIn,hoverOut},anonymous.__initData=_worklet_15755728995573_init_data,anonymous.__workletHash=0xe546aa144f5,anonymous.__stackDetails=_e,anonymous}(),[]);var handleMouseEnter=React.useCallback((function(){isHovered.value||(isHovered.value=!0)}),[isHovered]),handleMouseLeave=React.useCallback((function(){isHovered.value&&(isHovered.value=!1)}),[isHovered]),handleGrant=React.useCallback((function(){showHover.value=!1,null==pressIn.current||pressIn.current()}),[showHover]),handleRelease=React.useCallback((function(){showHover.value=!0,null==pressOut.current||pressOut.current()}),[showHover]);return React.cloneElement(React.Children.only(children),{onMouseEnter:handleMouseEnter,onMouseLeave:handleMouseLeave,onResponderGrant:handleGrant,onResponderRelease:handleRelease,onPressIn:handleGrant,onPressOut:handleRelease})};try{Hoverable.displayName="Hoverable",Hoverable.__docgenInfo={description:"",displayName:"Hoverable",props:{onHoverIn:{defaultValue:null,description:"",name:"onHoverIn",required:!1,type:{name:"(() => void)"}},onHoverOut:{defaultValue:null,description:"",name:"onHoverOut",required:!1,type:{name:"(() => void)"}},onPressIn:{defaultValue:null,description:"",name:"onPressIn",required:!1,type:{name:"(() => void)"}},onPressOut:{defaultValue:null,description:"",name:"onPressOut",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hoverable/hoverable.web.tsx#Hoverable"]={docgenInfo:Hoverable.__docgenInfo,name:"Hoverable",path:"src/hoverable/hoverable.web.tsx#Hoverable"})}catch(__react_docgen_typescript_loader_error){}}}]);