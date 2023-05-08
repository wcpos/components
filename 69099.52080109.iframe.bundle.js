(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[69099,1896,56589,98454,8757,25455],{"./src/drag-resize/drag.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Drag=Drag;var React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_reactNativeGestureHandler=__webpack_require__("./node_modules/react-native-gesture-handler/lib/module/index.js"),_reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/index.web.js")),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var _f,clamp=((_f=function _f(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound)})._closure={},_f.asString="function _f(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound);}",_f.__workletHash=5192855762164,_f.__location="/home/runner/work/components/components/src/drag-resize/drag.tsx (13:14)",_f);function Drag(props){var _heightRef$current,_widthRef$current,x=props.x,y=props.y,limitationHeight=props.limitationHeight,limitationWidth=props.limitationWidth,_props$height=props.height,height=void 0===_props$height?100:_props$height,_props$width=props.width,width=void 0===_props$width?100:_props$width,_props$minHeight=props.minHeight,minHeight=void 0===_props$minHeight?height/2:_props$minHeight,_props$minWidth=props.minWidth,minWidth=void 0===_props$minWidth?width/2:_props$minWidth,onDragEnd=props.onDragEnd,onResizeEnd=props.onResizeEnd,children=props.children,_props$resizable=props.resizable,resizable=void 0===_props$resizable||_props$resizable,_props$draggable=props.draggable,draggable=void 0===_props$draggable||_props$draggable,_props$resizerImageSo=props.resizerImageSource,xRef=(void 0===_props$resizerImageSo&&__webpack_require__("./src/drag-resize/resize.png"),React.useRef(x)),yRef=React.useRef(y),heightRef=React.useRef(height),widthRef=React.useRef(width),boxX=(0,_reactNativeReanimated.useSharedValue)(0),boxY=(0,_reactNativeReanimated.useSharedValue)(0),boxHeight=(0,_reactNativeReanimated.useSharedValue)(null!=(_heightRef$current=heightRef.current)?_heightRef$current:100),boxWidth=(0,_reactNativeReanimated.useSharedValue)(null!=(_widthRef$current=widthRef.current)?_widthRef$current:100);React.useEffect((function(){boxX.value=(0,_reactNativeReanimated.withTiming)(xRef.current),boxY.value=(0,_reactNativeReanimated.withTiming)(yRef.current)}),[boxX,boxY]);var gestureHandler=(0,_reactNativeReanimated.useAnimatedGestureHandler)({onStart:function(){var _f=function _f(_ev,ctx){ctx.offsetX=boxX.value,ctx.offsetY=boxY.value};return _f._closure={boxX,boxY},_f.asString="function _f(_ev,ctx){const{boxX,boxY}=jsThis._closure;{ctx.offsetX=boxX.value;ctx.offsetY=boxY.value;}}",_f.__workletHash=0x9cdf857c745,_f.__location="/home/runner/work/components/components/src/drag-resize/drag.tsx (76:11)",_f}(),onActive:function(){var _f=function _f(ev,ctx){draggable&&(boxX.value=clamp(ctx.offsetX+ev.translationX,0,limitationWidth-boxWidth.value),boxY.value=clamp(ctx.offsetY+ev.translationY,0,limitationHeight-boxHeight.value))};return _f._closure={draggable,boxX,clamp,limitationWidth,boxWidth,boxY,limitationHeight,boxHeight},_f.asString="function _f(ev,ctx){const{draggable,boxX,clamp,limitationWidth,boxWidth,boxY,limitationHeight,boxHeight}=jsThis._closure;{if(!draggable){return;}boxX.value=clamp(ctx.offsetX+ev.translationX,0,limitationWidth-boxWidth.value);boxY.value=clamp(ctx.offsetY+ev.translationY,0,limitationHeight-boxHeight.value);}}",_f.__workletHash=0xdc40a61bb30,_f.__location="/home/runner/work/components/components/src/drag-resize/drag.tsx (80:12)",_f}(),onFinish:function(){var _f=function _f(){onDragEnd&&(0,_reactNativeReanimated.runOnJS)(onDragEnd)({x:boxX.value,y:boxY.value,height:boxHeight.value,width:boxWidth.value})};return _f._closure={onDragEnd,runOnJS:_reactNativeReanimated.runOnJS,boxX,boxY,boxHeight,boxWidth},_f.asString="function _f(){const{onDragEnd,runOnJS,boxX,boxY,boxHeight,boxWidth}=jsThis._closure;{if(onDragEnd){runOnJS(onDragEnd)({x:boxX.value,y:boxY.value,height:boxHeight.value,width:boxWidth.value});}}}",_f.__workletHash=0xe8df8848d4,_f.__location="/home/runner/work/components/components/src/drag-resize/drag.tsx (87:12)",_f}()}),resizeHandler=(0,_reactNativeReanimated.useAnimatedGestureHandler)({onStart:function(){var _f=function _f(_ev,ctx){ctx.boxWidth=boxWidth.value,ctx.boxHeight=boxHeight.value,ctx.offsetX=boxX.value,ctx.offsetY=boxY.value};return _f._closure={boxWidth,boxHeight,boxX,boxY},_f.asString="function _f(_ev,ctx){const{boxWidth,boxHeight,boxX,boxY}=jsThis._closure;{ctx.boxWidth=boxWidth.value;ctx.boxHeight=boxHeight.value;ctx.offsetX=boxX.value;ctx.offsetY=boxY.value;}}",_f.__workletHash=0xe27fd725cfc,_f.__location="/home/runner/work/components/components/src/drag-resize/drag.tsx (100:11)",_f}(),onActive:function(){var _f=function _f(ev,ctx){resizable&&(boxWidth.value=clamp(ctx.boxWidth+ev.translationX,minWidth,limitationWidth-boxX.value),boxHeight.value=clamp(ctx.boxHeight+ev.translationY,minHeight,limitationHeight-boxY.value))};return _f._closure={resizable,boxWidth,clamp,minWidth,limitationWidth,boxX,boxHeight,minHeight,limitationHeight,boxY},_f.asString="function _f(ev,ctx){const{resizable,boxWidth,clamp,minWidth,limitationWidth,boxX,boxHeight,minHeight,limitationHeight,boxY}=jsThis._closure;{if(!resizable){return;}boxWidth.value=clamp(ctx.boxWidth+ev.translationX,minWidth,limitationWidth-boxX.value);boxHeight.value=clamp(ctx.boxHeight+ev.translationY,minHeight,limitationHeight-boxY.value);}}",_f.__workletHash=0xd901826c208,_f.__location="/home/runner/work/components/components/src/drag-resize/drag.tsx (106:12)",_f}(),onFinish:function(){var _f=function _f(){onResizeEnd&&(0,_reactNativeReanimated.runOnJS)(onResizeEnd)({x:boxX.value,y:boxY.value,height:boxHeight.value,width:boxWidth.value})};return _f._closure={onResizeEnd,runOnJS:_reactNativeReanimated.runOnJS,boxX,boxY,boxHeight,boxWidth},_f.asString="function _f(){const{onResizeEnd,runOnJS,boxX,boxY,boxHeight,boxWidth}=jsThis._closure;{if(onResizeEnd){runOnJS(onResizeEnd)({x:boxX.value,y:boxY.value,height:boxHeight.value,width:boxWidth.value});}}}",_f.__workletHash=8715381832022,_f.__location="/home/runner/work/components/components/src/drag-resize/drag.tsx (121:12)",_f}()}),animatedStyle=(0,_reactNativeReanimated.useAnimatedStyle)(function(){var _f=function _f(){return{transform:[{translateX:boxX.value},{translateY:boxY.value}],height:boxHeight.value,width:boxWidth.value,position:"absolute"}};return _f._closure={boxX,boxY,boxHeight,boxWidth},_f.asString="function _f(){const{boxX,boxY,boxHeight,boxWidth}=jsThis._closure;{return{transform:[{translateX:boxX.value},{translateY:boxY.value}],height:boxHeight.value,width:boxWidth.value,position:'absolute'};}}",_f.__workletHash=5997519140576,_f.__location="/home/runner/work/components/components/src/drag-resize/drag.tsx (135:40)",_f.__optimalization=3,_f}()),styles=React.useMemo((function(){return _StyleSheet.default.create({resizeBoxStyle:{position:"absolute",zIndex:1,right:-7,bottom:-7},imageStyle:{height:28,width:28}})}),[]);return(0,_jsxRuntime.jsx)(_reactNativeGestureHandler.PanGestureHandler,{onGestureEvent:gestureHandler,children:(0,_jsxRuntime.jsxs)(_reactNativeReanimated.default.View,{style:animatedStyle,children:[(0,_jsxRuntime.jsx)(_reactNativeGestureHandler.PanGestureHandler,{onGestureEvent:resizeHandler,children:(0,_jsxRuntime.jsx)(_reactNativeReanimated.default.View,{style:styles.resizeBoxStyle,children:(0,_jsxRuntime.jsx)(_icon.default,{name:"resize"})})}),children]})})}try{Drag.displayName="Drag",Drag.__docgenInfo={description:"",displayName:"Drag",props:{x:{defaultValue:null,description:"",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!0,type:{name:"number"}},limitationHeight:{defaultValue:null,description:"",name:"limitationHeight",required:!0,type:{name:"number"}},limitationWidth:{defaultValue:null,description:"",name:"limitationWidth",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"number"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!0,type:{name:"(response: Response) => void"}},onResizeEnd:{defaultValue:null,description:"",name:"onResizeEnd",required:!0,type:{name:"(response: Response) => void"}},resizable:{defaultValue:null,description:"",name:"resizable",required:!1,type:{name:"boolean"}},draggable:{defaultValue:null,description:"",name:"draggable",required:!1,type:{name:"boolean"}},resizerImageSource:{defaultValue:null,description:"",name:"resizerImageSource",required:!1,type:{name:"ImageSourcePropType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/drag-resize/drag.tsx#Drag"]={docgenInfo:Drag.__docgenInfo,name:"Drag",path:"src/drag-resize/drag.tsx#Drag"})}catch(__react_docgen_typescript_loader_error){}},"./src/icon/icon.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.IconSkeleton=exports.Icon=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _get=_interopRequireDefault(__webpack_require__("./node_modules/lodash/get.js")),_reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/index.web.js"),_native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),Svgs=_interopRequireWildcard(__webpack_require__("./src/icon/components/fontawesome/solid/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_ripple=_interopRequireDefault(__webpack_require__("./src/ripple/index.ts")),_skeleton=_interopRequireDefault(__webpack_require__("./src/skeleton/index.ts")),_tooltip=_interopRequireDefault(__webpack_require__("./src/tooltip/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Icon=function Icon(_ref){_ref.color,_ref.disabled;var name=_ref.name,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,width=_ref.width,height=_ref.height,onPress=_ref.onPress,onLongPress=_ref.onLongPress,tooltip=_ref.tooltip,_ref$tooltipPlacement=_ref.tooltipPlacement,tooltipPlacement=void 0===_ref$tooltipPlacement?"top":_ref$tooltipPlacement,_ref$backgroundStyle=_ref.backgroundStyle,backgroundStyle=void 0===_ref$backgroundStyle?"ripple":_ref$backgroundStyle,type=_ref.type,theme=(_ref.spin,_ref.loading,(0,_native.useTheme)()),iconColor=(0,_get.default)(theme,["colors",type],theme.colors.text),SvgIcon=(0,_get.default)(Svgs,name,Svgs.circleExclamation),showRipple=(0,_reactNativeReanimated.useSharedValue)(!1),IconComponent=(0,_jsxRuntime.jsx)(SvgIcon,{width:width||theme.iconSizes[size],height:height||theme.iconSizes[size],fill:iconColor});return(onPress||onLongPress)&&(IconComponent=(0,_jsxRuntime.jsxs)(_pressable.default,{onPress,onLongPress,onHoverIn:function onHoverIn(){showRipple.value=!0},onHoverOut:function onHoverOut(){showRipple.value=!1},style:["none"!==backgroundStyle&&"ripple"!==backgroundStyle&&backgroundStyle],children:["ripple"===backgroundStyle&&(0,_jsxRuntime.jsx)(_ripple.default,{showRipple}),IconComponent]})),tooltip&&(IconComponent=(0,_jsxRuntime.jsx)(_tooltip.default,{content:tooltip,placement:tooltipPlacement,children:IconComponent})),IconComponent};exports.Icon=Icon;var IconSkeleton=function IconSkeleton(_ref2){var _ref2$size=_ref2.size,size=void 0===_ref2$size?"normal":_ref2$size,theme=(0,_native.useTheme)();return(0,_jsxRuntime.jsx)(_skeleton.default,{border:"circular",width:theme.iconSizes[size],height:theme.iconSizes[size]})};exports.IconSkeleton=IconSkeleton,Icon.Skeleton=IconSkeleton;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"Icon component\n\nTODO: how to animate svgs?\nhttps://medium.com/tribalscale/intro-to-svg-animations-with-react-native-reanimated-2-78bd87438129",displayName:"Icon",props:{color:{defaultValue:null,description:"Icon colour",name:"color",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Set to `true` to disable.",name:"disabled",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"Set icon height.",name:"height",required:!1,type:{name:"NumberProp"}},width:{defaultValue:null,description:"Set icon width.",name:"width",required:!1,type:{name:"NumberProp"}},name:{defaultValue:null,description:"Icon key.",name:"name",required:!0,type:{name:"enum",value:[{value:'"list"'},{value:'"grid"'},{value:'"circle"'},{value:'"addressCard"'},{value:'"arrowDown"'},{value:'"arrowLeft"'},{value:'"arrowRightFromBracket"'},{value:'"arrowRight"'},{value:'"arrowRotateLeft"'},{value:'"arrowRotateRight"'},{value:'"arrowUp"'},{value:'"badgeDollar"'},{value:'"badgePercent"'},{value:'"ban"'},{value:'"barcode"'},{value:'"bars"'},{value:'"basketShopping"'},{value:'"bell"'},{value:'"bookmark"'},{value:'"boxOpenFull"'},{value:'"boxesStacked"'},{value:'"calculatorSimple"'},{value:'"calculator"'},{value:'"calendarDays"'},{value:'"calendar"'},{value:'"caretDown"'},{value:'"caretLeft"'},{value:'"caretRight"'},{value:'"caretUp"'},{value:'"cartPlus"'},{value:'"cartShopping"'},{value:'"cashRegister"'},{value:'"check"'},{value:'"circleCheck"'},{value:'"circleChevronRight"'},{value:'"circleDollar"'},{value:'"circleEllipsis"'},{value:'"circleExclamation"'},{value:'"circleInfo"'},{value:'"circleMinus"'},{value:'"circlePause"'},{value:'"circlePlus"'},{value:'"circleQuestion"'},{value:'"circleXmark"'},{value:'"clock"'},{value:'"commentQuestion"'},{value:'"commentsQuestion"'},{value:'"creditCard"'},{value:'"deleteLeft"'},{value:'"divide"'},{value:'"download"'},{value:'"ellipsisVertical"'},{value:'"equals"'},{value:'"eyeSlash"'},{value:'"eye"'},{value:'"fileInvoiceDollar"'},{value:'"folders"'},{value:'"gear"'},{value:'"giftCard"'},{value:'"gift"'},{value:'"gifts"'},{value:'"grid2Plus"'},{value:'"grid2"'},{value:'"gripLinesVertical"'},{value:'"icons"'},{value:'"lifeRing"'},{value:'"listTree"'},{value:'"magnifyingGlass"'},{value:'"minus"'},{value:'"noteSticky"'},{value:'"penToSquare"'},{value:'"percent"'},{value:'"plusMinus"'},{value:'"plus"'},{value:'"receipt"'},{value:'"rectangleBarcode"'},{value:'"rightLeft"'},{value:'"shop"'},{value:'"sliders"'},{value:'"starOfLife"'},{value:'"star"'},{value:'"store"'},{value:'"tag"'},{value:'"tags"'},{value:'"trash"'},{value:'"triangleExclamation"'},{value:'"truck"'},{value:'"userPlus"'},{value:'"user"'},{value:'"users"'},{value:'"wordpressSimple"'},{value:'"wordpress"'},{value:'"xmark"'}]}},size:{defaultValue:{value:"normal"},description:"Set icon size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},onPress:{defaultValue:null,description:"Turns icon into a button. Called when icon is pressed.",name:"onPress",required:!1,type:{name:"((event: GestureResponderEvent) => void) | null"}},onLongPress:{defaultValue:null,description:"Turns icon into a button. Called when icon is long pressed.",name:"onLongPress",required:!1,type:{name:"((event: GestureResponderEvent) => void) | null"}},tooltip:{defaultValue:null,description:"Wraps the icon in a Tooltip component",name:"tooltip",required:!1,type:{name:"string"}},tooltipPlacement:{defaultValue:{value:"top"},description:"Tooltip placement",name:"tooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'}]}},backgroundStyle:{defaultValue:{value:"ripple"},description:"Styling for Pressable icons",name:"backgroundStyle",required:!1,type:{name:'ViewStyle | "none" | "ripple"'}},type:{defaultValue:null,description:"Icon colour *",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},spin:{defaultValue:{value:"false"},description:"Animate the icon into a 'loading' state",name:"spin",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/icon/icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}try{Skeleton.displayName="Icon.Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Icon.Skeleton",props:{size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/icon.tsx#Icon.Skeleton"]={docgenInfo:Icon.Skeleton.__docgenInfo,name:"Icon.Skeleton",path:"src/icon/icon.tsx#Icon.Skeleton"})}catch(__react_docgen_typescript_loader_error){}try{IconSkeleton.displayName="IconSkeleton",IconSkeleton.__docgenInfo={description:"",displayName:"IconSkeleton",props:{size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/icon.tsx#IconSkeleton"]={docgenInfo:IconSkeleton.__docgenInfo,name:"IconSkeleton",path:"src/icon/icon.tsx#IconSkeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/icon/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _icon.Icon}});var _icon=__webpack_require__("./src/icon/icon.tsx")},"./src/ripple/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _ripple.Ripple}});var _ripple=__webpack_require__("./src/ripple/ripple.tsx")},"./src/ripple/ripple.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Ripple=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/index.web.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/ripple/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Ripple=function Ripple(_ref){var _f,showRipple=_ref.showRipple,rippleScale=(0,_reactNativeReanimated.useAnimatedStyle)(((_f=function _f(){return{transform:[{scale:(0,_reactNativeReanimated.withTiming)(showRipple.value?1.5:0,{duration:200,easing:_reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.quad)})}]}})._closure={withTiming:_reactNativeReanimated.withTiming,showRipple,Easing:{out:_reactNativeReanimated.Easing.out,quad:_reactNativeReanimated.Easing.quad}},_f.asString="function _f(){const{withTiming,showRipple,Easing}=jsThis._closure;{return{transform:[{scale:withTiming(showRipple.value?1.5:0,{duration:200,easing:Easing.out(Easing.quad)})}]};}}",_f.__workletHash=0xff1e85308fb,_f.__location="/home/runner/work/components/components/src/ripple/ripple.tsx (12:38)",_f.__optimalization=2,_f));return(0,_jsxRuntime.jsx)(Styled.RippleEffect,{as:_reactNativeReanimated.default.View,style:rippleScale,pointerEvents:"none"})};exports.Ripple=Ripple;try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{showRipple:{defaultValue:null,description:"",name:"showRipple",required:!0,type:{name:"SharedValue<boolean>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ripple/ripple.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"src/ripple/ripple.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}},"./src/ripple/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.RippleEffect=void 0;var _templateObject,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js")),RippleEffect=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")).default.View(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n\tz-index: -1;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: ",";\n\tbackground-color: rgba(0, 0, 0, 0.1);\n"])),(function(_ref){return _ref.theme.rounding.circle+"px"}));exports.RippleEffect=RippleEffect},"./src/tooltip/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _tooltip.Tooltip}});var _tooltip=__webpack_require__("./src/tooltip/tooltip.tsx")},"./src/tooltip/tooltip.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Tooltip=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_popover=_interopRequireDefault(__webpack_require__("./src/popover/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","placement"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Tooltip=function Tooltip(_ref){var children=_ref.children,_ref$placement=_ref.placement,placement=void 0===_ref$placement?"top":_ref$placement,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),_React$useState=React.useState(!1),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),opened=_React$useState2[0],setOpened=_React$useState2[1],content="string"==typeof props.content?(0,_jsxRuntime.jsx)(_text.default,{type:"inverse",children:props.content}):props.content;return(0,_jsxRuntime.jsxs)(_popover.default,Object.assign({opened,placement,trigger:"hover",style:{backgroundColor:"black"},withinPortal:!0,onClose:function onClose(){return setOpened(!1)},onOpen:function onOpen(){return setOpened(!0)},closeOnPressOutside:!1},props,{children:[(0,_jsxRuntime.jsx)(_popover.default.Target,{children}),(0,_jsxRuntime.jsx)(_popover.default.Content,{style:{backgroundColor:"black"},children:content})]}))};exports.Tooltip=Tooltip;try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"Tooltip is a special type of Popover\nTODO - set timeout for native tooltips, need onOpen or similar\nFIME - tooltips can get stuck sometimes",displayName:"Tooltip",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},placement:{defaultValue:{value:"top"},description:'Preferred placement of the Popover. The Popover will try to place itself according to this\nproperty. However, if there is not enough space left there to show up, it will show itself\nin opposite direction.\n\nFor example, if we set `placement="top"`, and there is not enough space for the Popover\nto show itself above the triggering view, it will show at the bottom of it.',name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'}]}},opened:{defaultValue:null,description:"Controlled menu opened state. Note: Popover can be controlled or uncontrolled",name:"opened",required:!1,type:{name:"boolean"}},defaultOpened:{defaultValue:null,description:"Uncontrolled menu initial opened state",name:"defaultOpened",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Called when menu opened state changes",name:"onChange",required:!1,type:{name:"((opened: boolean) => void)"}},onOpen:{defaultValue:null,description:"Called when Menu is opened\nCalled when popover opens",name:"onOpen",required:!1,type:{name:"{ (): void; (): void; }"}},onClose:{defaultValue:null,description:"Called when Menu is closed\nCalled when popover closes",name:"onClose",required:!1,type:{name:"{ (): void; (): void; }"}},trigger:{defaultValue:null,description:"Method for activating an uncontrolled Popover.",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"longpress"'},{value:'"press"'},{value:'"hover"'}]}},withArrow:{defaultValue:null,description:"Show arrow pointing to the target.",name:"withArrow",required:!1,type:{name:"boolean"}},withinPortal:{defaultValue:null,description:"Determines whether Popover should be rendered within Portal, defaults to true",name:"withinPortal",required:!1,type:{name:"boolean"}},closeOnPressOutside:{defaultValue:null,description:"Determines whether dropdown should be closed on outside clicks, default to true",name:"closeOnPressOutside",required:!1,type:{name:"boolean"}},matchWidth:{defaultValue:null,description:"Force popover to match the width of the triggering view.",name:"matchWidth",required:!1,type:{name:"boolean"}},primaryAction:{defaultValue:null,description:"",name:"primaryAction",required:!1,type:{name:"PopoverFooterActionProps"}},secondaryActions:{defaultValue:null,description:"",name:"secondaryActions",required:!1,type:{name:"PopoverFooterActionProps[]"}},context:{defaultValue:null,description:"contexted passed  down to the portal",name:"context",required:!1,type:{name:"Record<string, unknown>"}},children:{defaultValue:null,description:"The content which will trigger the Popover. The Popover will be anchored to this component.",name:"children",required:!0,type:{name:"ReactNode"}},content:{defaultValue:null,description:"The content to display inside the Popover.",name:"content",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tooltip/tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/tooltip/tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/drag-resize/resize.png":module=>{"use strict";module.exports="data:image/png;base64,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"}}]);