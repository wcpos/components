(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[89909,56589,98454,22425,18359,8757],{"./src/tabs/tabs.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Scrollable=exports.BasicUsage=void 0;var _BasicUsage$parameter,_BasicUsage$parameter2,_BasicUsage$parameter3,_Scrollable$parameter,_Scrollable$parameter2,_Scrollable$parameter3,_slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_tabs=__webpack_require__("./src/tabs/tabs.tsx"),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var meta={title:"Components/Tabs",component:_tabs.Tabs},FirstRoute=function FirstRoute(){return(0,_jsxRuntime.jsx)(_View.default,{style:{backgroundColor:"#ff4081",width:100,height:100}})},SecondRoute=function SecondRoute(){return(0,_jsxRuntime.jsx)(_View.default,{style:{backgroundColor:"#673ab7",width:100,height:100}})},Default=function Default(){return(0,_jsxRuntime.jsx)(_View.default,{style:{backgroundColor:"#000000",width:100,height:100}})},renderScene=function renderScene(_ref){switch(_ref.route.key){case"first":return(0,_jsxRuntime.jsx)(FirstRoute,{});case"second":return(0,_jsxRuntime.jsx)(SecondRoute,{});default:return(0,_jsxRuntime.jsx)(Default,{})}},routes=[{key:"first",title:"First"},{key:"second",title:"Second"}],BasicUsage=function BasicUsage(props){var _React$useState=React.useState(0),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),index=_React$useState2[0],setIndex=_React$useState2[1];return(0,_jsxRuntime.jsx)(_tabs.Tabs,Object.assign({navigationState:{index,routes},renderScene,onIndexChange:setIndex},props))};exports.BasicUsage=BasicUsage;var Scrollable=function Scrollable(props){var _React$useState3=React.useState(0),_React$useState4=(0,_slicedToArray2.default)(_React$useState3,2),index=_React$useState4[0],setIndex=_React$useState4[1];return(0,_jsxRuntime.jsx)(_View.default,{style:{width:"100%",overflow:"hidden"},children:(0,_jsxRuntime.jsx)(_tabs.Tabs,Object.assign({navigationState:{index,routes:props.routes},renderScene:function renderScene(_ref2){var route=_ref2.route;return(0,_jsxRuntime.jsx)(_View.default,{style:{backgroundColor:"#000000",width:"100%",height:100},children:(0,_jsxRuntime.jsx)(_text.default,{type:"inverse",children:route.title})})},onIndexChange:setIndex},props))})};exports.Scrollable=Scrollable,Scrollable.args={routes:[{key:"first",title:"First"},{key:"second",title:"Second"},{key:"third",title:"Third"},{key:"fourth",title:"Fourth"},{key:"fifth",title:"Fifth"},{key:"sixth",title:"Sixth"},{key:"seventh",title:"Seventh"},{key:"eighth",title:"Eighth"},{key:"ninth",title:"Ninth"},{key:"tenth",title:"Tenth"}]};var _default=meta;exports.default=_default,BasicUsage.parameters=Object.assign({},BasicUsage.parameters,{docs:Object.assign({},null==(_BasicUsage$parameter=BasicUsage.parameters)?void 0:_BasicUsage$parameter.docs,{source:Object.assign({originalSource:"(props: TabsProps<(typeof routes)[number]>) => {\n  const [index, setIndex] = React.useState(0);\n  return <Tabs<(typeof routes)[number]> navigationState={{\n    index,\n    routes\n  }} renderScene={renderScene} onIndexChange={setIndex} {...props} />;\n}"},null==(_BasicUsage$parameter2=BasicUsage.parameters)||null==(_BasicUsage$parameter3=_BasicUsage$parameter2.docs)?void 0:_BasicUsage$parameter3.source)})}),Scrollable.parameters=Object.assign({},Scrollable.parameters,{docs:Object.assign({},null==(_Scrollable$parameter=Scrollable.parameters)?void 0:_Scrollable$parameter.docs,{source:Object.assign({originalSource:"(props: TabsProps) => {\n  const [index, setIndex] = React.useState(0);\n  return <View style={{\n    width: '100%',\n    overflow: 'hidden'\n  }}>\n            <Tabs<(typeof routes)[number]> navigationState={{\n      index,\n      routes: props.routes\n    }} renderScene={({\n      route\n    }) => <View style={{\n      backgroundColor: '#000000',\n      width: '100%',\n      height: 100\n    }}>\n                        <Text type=\"inverse\">{route.title}</Text>\n                    </View>} onIndexChange={setIndex} {...props} />\n        </View>;\n}"},null==(_Scrollable$parameter2=Scrollable.parameters)||null==(_Scrollable$parameter3=_Scrollable$parameter2.docs)?void 0:_Scrollable$parameter3.source)})});try{BasicUsage.displayName="BasicUsage",BasicUsage.__docgenInfo={description:"",displayName:"BasicUsage",props:{onIndexChange:{defaultValue:null,description:"",name:"onIndexChange",required:!0,type:{name:"(index: number) => void"}},navigationState:{defaultValue:null,description:"",name:"navigationState",required:!0,type:{name:"NavigationState<{ key: string; title: string; }>"}},renderScene:{defaultValue:null,description:"",name:"renderScene",required:!0,type:{name:"(props: { route: { key: string; title: string; }; }) => ReactNode"}},renderLazyPlaceholder:{defaultValue:null,description:"",name:"renderLazyPlaceholder",required:!1,type:{name:"((props: { route: { key: string; title: string; }; }) => ReactNode)"}},renderTabBar:{defaultValue:null,description:"",name:"renderTabBar",required:!1,type:{name:"((props: { navigationState: NavigationState<{ key: string; title: string; }>; }) => ReactNode)"}},tabBarPosition:{defaultValue:null,description:"",name:"tabBarPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},sceneContainerStyle:{defaultValue:null,description:"",name:"sceneContainerStyle",required:!1,type:{name:"StyleProp<ViewStyle>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tabs/tabs.stories.tsx#BasicUsage"]={docgenInfo:BasicUsage.__docgenInfo,name:"BasicUsage",path:"src/tabs/tabs.stories.tsx#BasicUsage"})}catch(__react_docgen_typescript_loader_error){}try{Scrollable.displayName="Scrollable",Scrollable.__docgenInfo={description:"",displayName:"Scrollable",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tabs/tabs.stories.tsx#Scrollable"]={docgenInfo:Scrollable.__docgenInfo,name:"Scrollable",path:"src/tabs/tabs.stories.tsx#Scrollable"})}catch(__react_docgen_typescript_loader_error){}},"./src/icon/icon.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.IconSkeleton=exports.Icon=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _get=_interopRequireDefault(__webpack_require__("./node_modules/lodash/get.js")),_reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/index.web.js"),_native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),Svgs=_interopRequireWildcard(__webpack_require__("./src/icon/components/fontawesome/solid/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_ripple=_interopRequireDefault(__webpack_require__("./src/ripple/index.ts")),_skeleton=_interopRequireDefault(__webpack_require__("./src/skeleton/index.ts")),_tooltip=_interopRequireDefault(__webpack_require__("./src/tooltip/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Icon=function Icon(_ref){_ref.color,_ref.disabled;var name=_ref.name,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,width=_ref.width,height=_ref.height,onPress=_ref.onPress,onLongPress=_ref.onLongPress,tooltip=_ref.tooltip,_ref$tooltipPlacement=_ref.tooltipPlacement,tooltipPlacement=void 0===_ref$tooltipPlacement?"top":_ref$tooltipPlacement,_ref$backgroundStyle=_ref.backgroundStyle,backgroundStyle=void 0===_ref$backgroundStyle?"ripple":_ref$backgroundStyle,type=_ref.type,theme=(_ref.spin,(0,_native.useTheme)()),iconColor=(0,_get.default)(theme,["colors",type],theme.colors.text),SvgIcon=(0,_get.default)(Svgs,name,Svgs.circleExclamation),showRipple=(0,_reactNativeReanimated.useSharedValue)(!1),IconComponent=(0,_jsxRuntime.jsx)(SvgIcon,{width:width||theme.iconSizes[size],height:height||theme.iconSizes[size],fill:iconColor});return(onPress||onLongPress)&&(IconComponent=(0,_jsxRuntime.jsxs)(_pressable.default,{onPress,onLongPress,onHoverIn:function onHoverIn(){showRipple.value=!0},onHoverOut:function onHoverOut(){showRipple.value=!1},style:["none"!==backgroundStyle&&"ripple"!==backgroundStyle&&backgroundStyle],children:["ripple"===backgroundStyle&&(0,_jsxRuntime.jsx)(_ripple.default,{showRipple}),IconComponent]})),tooltip&&(IconComponent=(0,_jsxRuntime.jsx)(_tooltip.default,{content:tooltip,placement:tooltipPlacement,children:IconComponent})),IconComponent};exports.Icon=Icon;var IconSkeleton=function IconSkeleton(_ref2){var _ref2$size=_ref2.size,size=void 0===_ref2$size?"normal":_ref2$size,theme=(0,_native.useTheme)();return(0,_jsxRuntime.jsx)(_skeleton.default,{border:"circular",width:theme.iconSizes[size],height:theme.iconSizes[size]})};exports.IconSkeleton=IconSkeleton,Icon.Skeleton=IconSkeleton;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"Icon component",displayName:"Icon",props:{color:{defaultValue:null,description:"Icon colour",name:"color",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Set to `true` to disable.",name:"disabled",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"Set icon height.",name:"height",required:!1,type:{name:"NumberProp"}},width:{defaultValue:null,description:"Set icon width.",name:"width",required:!1,type:{name:"NumberProp"}},name:{defaultValue:null,description:"Icon key.",name:"name",required:!0,type:{name:"enum",value:[{value:'"list"'},{value:'"grid"'},{value:'"circle"'},{value:'"addressCard"'},{value:'"arrowDown"'},{value:'"arrowLeft"'},{value:'"arrowRightFromBracket"'},{value:'"arrowRight"'},{value:'"arrowRotateLeft"'},{value:'"arrowRotateRight"'},{value:'"arrowUp"'},{value:'"badgeDollar"'},{value:'"badgePercent"'},{value:'"ban"'},{value:'"barcode"'},{value:'"bars"'},{value:'"basketShopping"'},{value:'"bell"'},{value:'"bookmark"'},{value:'"boxOpenFull"'},{value:'"boxesStacked"'},{value:'"calculatorSimple"'},{value:'"calculator"'},{value:'"calendarDays"'},{value:'"calendar"'},{value:'"caretDown"'},{value:'"caretLeft"'},{value:'"caretRight"'},{value:'"caretUp"'},{value:'"cartPlus"'},{value:'"cartShopping"'},{value:'"cashRegister"'},{value:'"check"'},{value:'"circleCheck"'},{value:'"circleChevronRight"'},{value:'"circleDollar"'},{value:'"circleEllipsis"'},{value:'"circleExclamation"'},{value:'"circleInfo"'},{value:'"circleMinus"'},{value:'"circlePause"'},{value:'"circlePlus"'},{value:'"circleQuestion"'},{value:'"circleXmark"'},{value:'"clock"'},{value:'"commentQuestion"'},{value:'"commentsQuestion"'},{value:'"creditCard"'},{value:'"deleteLeft"'},{value:'"divide"'},{value:'"download"'},{value:'"ellipsisVertical"'},{value:'"equals"'},{value:'"eyeSlash"'},{value:'"eye"'},{value:'"fileInvoiceDollar"'},{value:'"folders"'},{value:'"gear"'},{value:'"giftCard"'},{value:'"gift"'},{value:'"gifts"'},{value:'"grid2Plus"'},{value:'"grid2"'},{value:'"gripLinesVertical"'},{value:'"icons"'},{value:'"lifeRing"'},{value:'"listTree"'},{value:'"magnifyingGlass"'},{value:'"minus"'},{value:'"penToSquare"'},{value:'"percent"'},{value:'"plusMinus"'},{value:'"plus"'},{value:'"receipt"'},{value:'"rectangleBarcode"'},{value:'"shop"'},{value:'"sliders"'},{value:'"starOfLife"'},{value:'"star"'},{value:'"store"'},{value:'"tag"'},{value:'"tags"'},{value:'"trash"'},{value:'"triangleExclamation"'},{value:'"truck"'},{value:'"userPlus"'},{value:'"user"'},{value:'"users"'},{value:'"wordpressSimple"'},{value:'"wordpress"'},{value:'"xmark"'}]}},size:{defaultValue:{value:"normal"},description:"Set icon size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},onPress:{defaultValue:null,description:"Turns icon into a button. Called when icon is pressed.",name:"onPress",required:!1,type:{name:"((event: GestureResponderEvent) => void) | null"}},onLongPress:{defaultValue:null,description:"Turns icon into a button. Called when icon is long pressed.",name:"onLongPress",required:!1,type:{name:"((event: GestureResponderEvent) => void) | null"}},tooltip:{defaultValue:null,description:"Wraps the icon in a Tooltip component",name:"tooltip",required:!1,type:{name:"string"}},tooltipPlacement:{defaultValue:{value:"top"},description:"Tooltip placement",name:"tooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'}]}},backgroundStyle:{defaultValue:{value:"ripple"},description:"Styling for Pressable icons",name:"backgroundStyle",required:!1,type:{name:'ViewStyle | "none" | "ripple"'}},type:{defaultValue:null,description:"Icon colour *",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},spin:{defaultValue:{value:"false"},description:"Animate the icon into a 'loading' state",name:"spin",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/icon/icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}try{Skeleton.displayName="Icon.Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Icon.Skeleton",props:{size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/icon.tsx#Icon.Skeleton"]={docgenInfo:Icon.Skeleton.__docgenInfo,name:"Icon.Skeleton",path:"src/icon/icon.tsx#Icon.Skeleton"})}catch(__react_docgen_typescript_loader_error){}try{IconSkeleton.displayName="IconSkeleton",IconSkeleton.__docgenInfo={description:"",displayName:"IconSkeleton",props:{size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/icon.tsx#IconSkeleton"]={docgenInfo:IconSkeleton.__docgenInfo,name:"IconSkeleton",path:"src/icon/icon.tsx#IconSkeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/icon/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _icon.Icon}});var _icon=__webpack_require__("./src/icon/icon.tsx")},"./src/ripple/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _ripple.Ripple}});var _ripple=__webpack_require__("./src/ripple/ripple.tsx")},"./src/ripple/ripple.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Ripple=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/index.web.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/ripple/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Ripple=function Ripple(_ref){var _f,showRipple=_ref.showRipple,rippleScale=(0,_reactNativeReanimated.useAnimatedStyle)(((_f=function _f(){return{transform:[{scale:(0,_reactNativeReanimated.withTiming)(showRipple.value?1.5:0,{duration:200,easing:_reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.quad)})}]}})._closure={withTiming:_reactNativeReanimated.withTiming,showRipple,Easing:{out:_reactNativeReanimated.Easing.out,quad:_reactNativeReanimated.Easing.quad}},_f.asString="function _f(){const{withTiming,showRipple,Easing}=jsThis._closure;{return{transform:[{scale:withTiming(showRipple.value?1.5:0,{duration:200,easing:Easing.out(Easing.quad)})}]};}}",_f.__workletHash=0xff1e85308fb,_f.__location="/home/runner/work/components/components/src/ripple/ripple.tsx (12:38)",_f.__optimalization=2,_f));return(0,_jsxRuntime.jsx)(Styled.RippleEffect,{as:_reactNativeReanimated.default.View,style:rippleScale,pointerEvents:"none"})};exports.Ripple=Ripple;try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{showRipple:{defaultValue:null,description:"",name:"showRipple",required:!0,type:{name:"SharedValue<boolean>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ripple/ripple.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"src/ripple/ripple.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}},"./src/ripple/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.RippleEffect=void 0;var _templateObject,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js")),RippleEffect=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")).default.View(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n\tz-index: -1;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: ",";\n\tbackground-color: rgba(0, 0, 0, 0.1);\n"])),(function(_ref){return _ref.theme.rounding.circle+"px"}));exports.RippleEffect=RippleEffect},"./src/tabs/tab-bar.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TabBar=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_ScrollView=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/ScrollView/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/index.web.js"),_platform=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/utils/src/platform/index.web.ts")),_tabItem=__webpack_require__("./src/tabs/tab-item.tsx"),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_button=_interopRequireDefault(__webpack_require__("./src/button/index.ts")),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var TabBar=function TabBar(_ref){var _f,routes=_ref.routes,onIndexChange=_ref.onIndexChange,_ref$direction=_ref.direction,direction=void 0===_ref$direction?"horizontal":_ref$direction,focusedIndex=_ref.focusedIndex,style=_ref.style,scrollViewRef=(0,_reactNativeReanimated.useAnimatedRef)(),scroll=(0,_reactNativeReanimated.useSharedValue)(0),totalWidth=(0,_reactNativeReanimated.useSharedValue)(0),containerWidth=(0,_reactNativeReanimated.useSharedValue)(0),tabRefs=React.useMemo((function(){return routes.map((function(){return React.createRef()}))}),[routes]),_React$useState=React.useState(!1),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),scrollable=_React$useState2[0],setScrollable=_React$useState2[1];return(0,_reactNativeReanimated.useDerivedValue)(((_f=function _f(){"web"===_platform.default.OS?scrollViewRef&&scrollViewRef.current&&scrollViewRef.current.scrollTo({x:scroll.value}):(0,_reactNativeReanimated.scrollTo)(scrollViewRef,scroll.value,0,!0)})._closure={Platform:{OS:_platform.default.OS},scrollViewRef,scroll,scrollTo:_reactNativeReanimated.scrollTo},_f.asString="function _f(){const{Platform,scrollViewRef,scroll,scrollTo}=jsThis._closure;{if(Platform.OS==='web'){if(scrollViewRef&&scrollViewRef.current){scrollViewRef.current.scrollTo({x:scroll.value});}}else{scrollTo(scrollViewRef,scroll.value,0,true);}}}",_f.__workletHash=0xaa2b0fbd527,_f.__location="/home/runner/work/components/components/src/tabs/tab-bar.tsx (52:17)",_f)),(0,_reactNativeReanimated.useAnimatedReaction)(function(){var _f=function _f(){return totalWidth.value>containerWidth.value};return _f._closure={totalWidth,containerWidth},_f.asString="function _f(){const{totalWidth,containerWidth}=jsThis._closure;{return totalWidth.value>containerWidth.value;}}",_f.__workletHash=0xd5328c35fc4,_f.__location="/home/runner/work/components/components/src/tabs/tab-bar.tsx (68:2)",_f}(),function(){var _f=function _f(result,previous){result!==previous&&(0,_reactNativeReanimated.runOnJS)(setScrollable)(result)};return _f._closure={runOnJS:_reactNativeReanimated.runOnJS,setScrollable},_f.asString="function _f(result,previous){const{runOnJS,setScrollable}=jsThis._closure;{if(result!==previous){runOnJS(setScrollable)(result);}}}",_f.__workletHash=333683309884,_f.__location="/home/runner/work/components/components/src/tabs/tab-bar.tsx (71:2)",_f}(),[totalWidth,containerWidth,setScrollable]),React.useEffect((function(){if(focusedIndex>=0){var activeTabRef=tabRefs[focusedIndex].current;activeTabRef&&activeTabRef.measure((function(x,y,width,height,pageX,pageY){scroll.value=x-containerWidth.value/2+width/2}))}}),[containerWidth.value,focusedIndex,scroll,tabRefs]),(0,_jsxRuntime.jsxs)(_View.default,{style:{flexDirection:"row",width:"vertical"===direction?200:"auto"},children:[(0,_jsxRuntime.jsx)(_ScrollView.default,{onLayout:function onLayout(_ref2){var nativeEvent=_ref2.nativeEvent;containerWidth.value=nativeEvent.layout.width},ref:scrollViewRef,horizontal:"horizontal"===direction,showsHorizontalScrollIndicator:!1,onContentSizeChange:function onContentSizeChange(w,h){totalWidth.value=w},style:{width:"100%"},children:(0,_jsxRuntime.jsx)(_box.default,{horizontal:"horizontal"===direction,space:"xSmall",padding:"xSmall",style:[{width:"100%"},style],children:routes.map((function(route,i){var focused=i===focusedIndex;return(0,_jsxRuntime.jsx)(_View.default,{ref:tabRefs[i],children:(0,_jsxRuntime.jsx)(_tabItem.TabItem,{title:route.title,onPress:function onPress(){return onIndexChange(i)},focused})},route.key)}))})}),scrollable&&(0,_jsxRuntime.jsxs)(_box.default,{horizontal:!0,space:"xSmall",padding:"xSmall",style,children:[(0,_jsxRuntime.jsx)(_button.default,{onPress:function onPress(){focusedIndex>0&&onIndexChange(focusedIndex-1)},children:(0,_jsxRuntime.jsx)(_icon.default,{name:"caretLeft",type:"inverse"})}),(0,_jsxRuntime.jsx)(_button.default,{onPress:function onPress(){focusedIndex<routes.length-1&&onIndexChange(focusedIndex+1)},children:(0,_jsxRuntime.jsx)(_icon.default,{name:"caretRight",type:"inverse"})})]})]})};exports.TabBar=TabBar;try{TabBar.displayName="TabBar",TabBar.__docgenInfo={description:"",displayName:"TabBar",props:{routes:{defaultValue:null,description:"",name:"routes",required:!0,type:{name:"Route[]"}},onIndexChange:{defaultValue:null,description:"",name:"onIndexChange",required:!0,type:{name:"(index: number) => void"}},direction:{defaultValue:{value:"horizontal"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},focusedIndex:{defaultValue:null,description:"",name:"focusedIndex",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tabs/tab-bar.tsx#TabBar"]={docgenInfo:TabBar.__docgenInfo,name:"TabBar",path:"src/tabs/tab-bar.tsx#TabBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/tabs/tab-item.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TabItem=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_isFunction=(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/lodash/isFunction.js"))),_button=_interopRequireDefault(__webpack_require__("./src/button/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["onPress","focused"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var TabItem=function TabItem(_ref){var onPress=_ref.onPress,focused=_ref.focused,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),title=(0,_isFunction.default)(props.title)?props.title({focused}):props.title;return(0,_jsxRuntime.jsx)(_button.default,{onPress,background:focused?"solid":"clear",children:"string"==typeof title?(0,_jsxRuntime.jsx)(_text.default,{type:focused?"inverse":"primary",children:title}):title})};exports.TabItem=TabItem;try{TabItem.displayName="TabItem",TabItem.__docgenInfo={description:"",displayName:"TabItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string | ((props: { focused: boolean; }) => ReactNode)"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}},focused:{defaultValue:null,description:"",name:"focused",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tabs/tab-item.tsx#TabItem"]={docgenInfo:TabItem.__docgenInfo,name:"TabItem",path:"src/tabs/tab-item.tsx#TabItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/tabs/tabs.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Tabs=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _tabBar=__webpack_require__("./src/tabs/tab-bar.tsx"),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Tabs=function Tabs(_ref){var onIndexChange=_ref.onIndexChange,navigationState=_ref.navigationState,renderScene=_ref.renderScene,_ref$tabBarPosition=_ref.tabBarPosition,tabBarPosition=void 0===_ref$tabBarPosition?"top":_ref$tabBarPosition,style=_ref.style;return(0,_jsxRuntime.jsxs)(_box.default,{horizontal:"left"===tabBarPosition||"right"===tabBarPosition,reverse:"bottom"===tabBarPosition||"right"===tabBarPosition,style,children:[(0,_jsxRuntime.jsx)(_tabBar.TabBar,{routes:navigationState.routes,onIndexChange,direction:"left"===tabBarPosition||"right"===tabBarPosition?"vertical":"horizontal",focusedIndex:navigationState.index}),(0,_jsxRuntime.jsx)(_box.default,{style:{flexGrow:1,flexShrink:1,flexBasis:"0%"},children:renderScene({route:navigationState.routes[navigationState.index]})})]})};exports.Tabs=Tabs;try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{onIndexChange:{defaultValue:null,description:"",name:"onIndexChange",required:!0,type:{name:"(index: number) => void"}},navigationState:{defaultValue:null,description:"",name:"navigationState",required:!0,type:{name:"NavigationState<T>"}},renderScene:{defaultValue:null,description:"",name:"renderScene",required:!0,type:{name:"(props: { route: T; }) => ReactNode"}},renderLazyPlaceholder:{defaultValue:null,description:"",name:"renderLazyPlaceholder",required:!1,type:{name:"((props: { route: T; }) => ReactNode)"}},renderTabBar:{defaultValue:null,description:"",name:"renderTabBar",required:!1,type:{name:"((props: { navigationState: NavigationState<T>; }) => ReactNode)"}},tabBarPosition:{defaultValue:{value:"top"},description:"",name:"tabBarPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},sceneContainerStyle:{defaultValue:null,description:"",name:"sceneContainerStyle",required:!1,type:{name:"StyleProp<ViewStyle>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tabs/tabs.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"src/tabs/tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}},"./src/tooltip/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _tooltip.Tooltip}});var _tooltip=__webpack_require__("./src/tooltip/tooltip.tsx")}}]);