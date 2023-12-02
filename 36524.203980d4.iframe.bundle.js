(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[36524,6479,74656,93708,48461,67205,51624,91939,29628,31967,83678,11999,6317],{"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/ripple/ripple.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.BasicUsage=void 0;(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n})(__webpack_require__("./node_modules/react/index.js"));var _BasicUsage$parameter,_BasicUsage$parameter2,_BasicUsage$parameter3,_reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js"),_ripple=__webpack_require__("./src/ripple/ripple.tsx"),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var meta={title:"Components/Ripple",component:_ripple.Ripple},BasicUsage=exports.BasicUsage=function BasicUsage(props){var showRipple=(0,_reactNativeReanimated.useSharedValue)(!1);return(0,_jsxRuntime.jsxs)(_pressable.default,{onHoverIn:function onHoverIn(){showRipple.value=!0},onHoverOut:function onHoverOut(){showRipple.value=!1},children:[(0,_jsxRuntime.jsx)(_text.default,{children:"Press me"}),(0,_jsxRuntime.jsx)(_ripple.Ripple,Object.assign({},props,{showRipple}))]})};BasicUsage.args={};exports.default=meta;BasicUsage.parameters=Object.assign({},BasicUsage.parameters,{docs:Object.assign({},null==(_BasicUsage$parameter=BasicUsage.parameters)?void 0:_BasicUsage$parameter.docs,{source:Object.assign({originalSource:"(props: RippleProps) => {\n  const showRipple = useSharedValue(false);\n  return <Pressable onHoverIn={() => {\n    showRipple.value = true;\n  }} onHoverOut={() => {\n    showRipple.value = false;\n  }}>\n            <Text>Press me</Text>\n            <Ripple {...props} showRipple={showRipple} />\n        </Pressable>;\n}"},null==(_BasicUsage$parameter2=BasicUsage.parameters)||null==(_BasicUsage$parameter3=_BasicUsage$parameter2.docs)?void 0:_BasicUsage$parameter3.source)})});try{BasicUsage.displayName="BasicUsage",BasicUsage.__docgenInfo={description:"",displayName:"BasicUsage",props:{showRipple:{defaultValue:null,description:"",name:"showRipple",required:!0,type:{name:"SharedValue<boolean>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ripple/ripple.stories.tsx#BasicUsage"]={docgenInfo:BasicUsage.__docgenInfo,name:"BasicUsage",path:"src/ripple/ripple.stories.tsx#BasicUsage"})}catch(__react_docgen_typescript_loader_error){}},"./src/pressable/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _pressable.Pressable}});var _pressable=__webpack_require__("./src/pressable/pressable.tsx")},"./src/pressable/pressable.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Pressable=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_Pressable=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Pressable/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["style"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var Pressable=exports.Pressable=React.forwardRef((function(props,ref){var style=props.style,rest=(0,_objectWithoutProperties2.default)(props,_excluded),resolvedStyle=React.useCallback((function(state){var finalStyle=[];"function"==typeof style?finalStyle=[style(state),{flexDirection:"row"}]:finalStyle=[{flexDirection:"row"},style];return finalStyle}),[style]);return(0,_jsxRuntime.jsx)(_Pressable.default,Object.assign({style:resolvedStyle,ref},rest))}));try{Pressable.displayName="Pressable",Pressable.__docgenInfo={description:"",displayName:"Pressable",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pressable/pressable.tsx#Pressable"]={docgenInfo:Pressable.__docgenInfo,name:"Pressable",path:"src/pressable/pressable.tsx#Pressable"})}catch(__react_docgen_typescript_loader_error){}},"./src/ripple/ripple.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Ripple=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/ripple/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var _worklet_2887425239754_init_data={code:'function anonymous(){const{withTiming,showRipple,Easing}=this.__closure;return{transform:"scale("+withTiming(showRipple.value?1.5:0,{duration:200,easing:Easing.out(Easing.quad)})+")"};}',location:"/home/runner/work/components/components/src/ripple/ripple.tsx",sourceMap:'{"version":3,"names":["anonymous","withTiming","showRipple","Easing","__closure","transform","value","duration","easing","out","quad"],"sources":["/home/runner/work/components/components/src/ripple/ripple.tsx"],"mappings":"AAgBsC,SAAAA,UAAA,QAAAC,UAAA,CAAAC,UAAA,CAAAC,MAAA,OAAAC,SAAA,OAAO,CAC3CC,SAAS,UAAWJ,UAAU,CAACC,UAAU,CAACI,KAAK,CAAG,GAAG,CAAG,CAAC,CAAE,CAC1DC,QAAQ,CAAE,GAAG,CACbC,MAAM,CAAEL,MAAM,CAACM,GAAG,CAACN,MAAM,CAACO,IAAI,CAC/B,CAAC,CAAE,IACJ,CAAC"}',version:"3.5.4"},Ripple=exports.Ripple=function Ripple(_ref){var _e,anonymous,showRipple=_ref.showRipple,rippleScale=(0,_reactNativeReanimated.useAnimatedStyle)((_e=[new __webpack_require__.g.Error,-4,-27],(anonymous=function anonymous(){return{transform:"scale(".concat((0,_reactNativeReanimated.withTiming)(showRipple.value?1.5:0,{duration:200,easing:_reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.quad)}),")")}}).__closure={withTiming:_reactNativeReanimated.withTiming,showRipple,Easing:_reactNativeReanimated.Easing},anonymous.__initData=_worklet_2887425239754_init_data,anonymous.__workletHash=2887425239754,anonymous.__stackDetails=_e,anonymous));return(0,_jsxRuntime.jsx)(Styled.RippleEffect,{as:_reactNativeReanimated.default.View,style:[{pointerEvents:"none"},rippleScale]})};try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{showRipple:{defaultValue:null,description:"",name:"showRipple",required:!0,type:{name:"SharedValue<boolean>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ripple/ripple.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"src/ripple/ripple.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}},"./src/ripple/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.RippleEffect=void 0;var _native=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"));exports.RippleEffect=_native.default.View.withConfig({displayName:"styles__RippleEffect",componentId:"sc-1d94hgw-0"})(["z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:",";background-color:rgba(0,0,0,0.1);"],(function(_ref){var theme=_ref.theme;return"".concat(theme.rounding.circle,"px")}))},"./src/skeleton/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _skeleton.Skeleton}});var _skeleton=__webpack_require__("./src/skeleton/skeleton.tsx")},"./src/skeleton/skeleton.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Skeleton=void 0;var React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/skeleton/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var _worklet_8964404333244_init_data={code:"function anonymous(){const{opacity}=this.__closure;return{opacity:opacity.value};}",location:"/home/runner/work/components/components/src/skeleton/skeleton.tsx",sourceMap:'{"version":3,"names":["anonymous","opacity","__closure","value"],"sources":["/home/runner/work/components/components/src/skeleton/skeleton.tsx"],"mappings":"AAwDwC,SAAAA,UAAA,QAAAC,OAAA,OAAAC,SAAA,OAAO,CAC7CD,OAAO,CAAEA,OAAO,CAACE,KAClB,CAAC"}',version:"3.5.4"},Skeleton=exports.Skeleton=function Skeleton(_ref){var width=_ref.width,height=_ref.height,_ref$border=_ref.border,border=void 0===_ref$border?"rounded":_ref$border,style=_ref.style,opacity=(0,_reactNativeReanimated.useSharedValue)(.6);React.useEffect((function(){opacity.value=(0,_reactNativeReanimated.withRepeat)((0,_reactNativeReanimated.withTiming)(1,{duration:1e3,easing:_reactNativeReanimated.Easing.ease}),-1,!0)}),[opacity]);var _e,anonymous,animatedStyle=(0,_reactNativeReanimated.useAnimatedStyle)((_e=[new __webpack_require__.g.Error,-2,-27],(anonymous=function anonymous(){return{opacity:opacity.value}}).__closure={opacity},anonymous.__initData=_worklet_8964404333244_init_data,anonymous.__workletHash=8964404333244,anonymous.__stackDetails=_e,anonymous));return(0,_jsxRuntime.jsx)(Styled.Container,{as:_reactNativeReanimated.default.View,style:[{width,height},style,animatedStyle],border})};try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},border:{defaultValue:{value:"rounded"},description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"circular"'},{value:'"square"'},{value:'"rounded"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"ViewStyle"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/skeleton/skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/skeleton/skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/skeleton/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Container=void 0;var _native=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}exports.Container=_native.default.View.withConfig({displayName:"styles__Container",componentId:"sc-1xso20a-0"})(["overflow:hidden;background-color:",";",""],(function(_ref){return _ref.theme.colors.darkGrey}),(function(_ref2){var border=_ref2.border,theme=_ref2.theme;switch(border){case"rounded":return(0,_native.css)(["border-radius:","px;"],theme.rounding.small);case"circular":return(0,_native.css)(["border-radius:","px;"],theme.rounding.circle);default:return(0,_native.css)(["border-radius:","px;"],theme.rounding.none)}}))},"./src/text/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _skeleton=__webpack_require__("./src/text/skeleton.tsx"),_text=__webpack_require__("./src/text/text.tsx");exports.default=Object.assign(_text.Text,{Skeleton:_skeleton.TextSkeleton})},"./src/text/skeleton.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextSkeleton=void 0;(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n})(__webpack_require__("./node_modules/react/index.js"));var _skeleton=_interopRequireDefault(__webpack_require__("./src/skeleton/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var lengthMap={default:120,short:60,long:240},TextSkeleton=exports.TextSkeleton=function TextSkeleton(_ref){var _ref$length=_ref.length,length=void 0===_ref$length?"default":_ref$length;return(0,_jsxRuntime.jsx)(_skeleton.default,{width:lengthMap[length],height:20})};try{TextSkeleton.displayName="TextSkeleton",TextSkeleton.__docgenInfo={description:"",displayName:"TextSkeleton",props:{length:{defaultValue:{value:"default"},description:"",name:"length",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"short"'},{value:'"long"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/text/skeleton.tsx#TextSkeleton"]={docgenInfo:TextSkeleton.__docgenInfo,name:"TextSkeleton",path:"src/text/skeleton.tsx#TextSkeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/text/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Text=void 0;var _native=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"));exports.Text=_native.default.Text.withConfig({displayName:"styles__Text",componentId:"sc-suhnc5-0"})(["color:",";font-family:",";font-style:",";font-weight:",";font-size:",";line-height:",";text-align:",";text-transform:",";"],(function(_ref){var type=_ref.type,theme=_ref.theme;return theme.colors[type]||theme.colors.text}),(function(_ref2){return _ref2.theme.font.family}),(function(_ref3){return _ref3.italic?"italic":"normal"}),(function(_ref4){var weight=_ref4.weight;return _ref4.theme.font.weight[weight||"normal"]}),(function(_ref5){var size=_ref5.size;return _ref5.theme.font.size[size||"normal"]}),(function(_ref6){var size=_ref6.size;return _ref6.theme.font.lineHeight[size||"normal"]}),(function(_ref7){return _ref7.align||"left"}),(function(_ref8){return _ref8.uppercase?"uppercase":"none"}))},"./src/text/text.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Text=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_htmlEntities=__webpack_require__("./node_modules/html-entities/lib/index.js"),_native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),Styled=_interopRequireWildcard(__webpack_require__("./src/text/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["align","children","italic","onPress","size","type","uppercase","weight","backgroundType"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var Text=exports.Text=function Text(_ref){var _ref$align=_ref.align,align=void 0===_ref$align?"left":_ref$align,children=_ref.children,italic=_ref.italic,onPress=_ref.onPress,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,type=_ref.type,uppercase=_ref.uppercase,_ref$weight=_ref.weight,weight=void 0===_ref$weight?"normal":_ref$weight,backgroundType=_ref.backgroundType,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),theme=(0,_native.useTheme)(),adjustedType="inverse"===type&&backgroundType?theme.inverseColors[backgroundType]:type,decodedChildren=React.Children.map(children,(function(child){return"string"==typeof child?(0,_htmlEntities.decode)(child):child}));return(0,_jsxRuntime.jsx)(Styled.Text,Object.assign({align,italic,onPress,size,type:adjustedType,uppercase,weight},props,{children:decodedChildren}))};try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"justify"'}]}},italic:{defaultValue:null,description:"",name:"italic",required:!1,type:{name:"boolean"}},onPress:{defaultValue:null,description:"This function is called on press.\nText intrinsically supports press handling with a default highlight state (which can be disabled with suppressHighlighting).",name:"onPress",required:!1,type:{name:"(() => void)"}},size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<TextStyle>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},backgroundType:{defaultValue:null,description:"",name:"backgroundType",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},uppercase:{defaultValue:null,description:"",name:"uppercase",required:!1,type:{name:"boolean"}},weight:{defaultValue:{value:"normal"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"bold"'},{value:'"light"'},{value:'"medium"'},{value:'"thin"'},{value:'"xLight"'},{value:'"semiBold"'},{value:'"xBold"'},{value:'"black"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/text/text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/text/text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}}}]);