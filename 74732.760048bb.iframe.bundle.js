(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[74732,56589,98454,63,8757,25455],{"./src/icon/icon.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.IconSkeleton=exports.Icon=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _get=_interopRequireDefault(__webpack_require__("./node_modules/lodash/get.js")),_reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/index.web.js"),_native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),Svgs=_interopRequireWildcard(__webpack_require__("./src/icon/components/fontawesome/solid/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_ripple=_interopRequireDefault(__webpack_require__("./src/ripple/index.ts")),_skeleton=_interopRequireDefault(__webpack_require__("./src/skeleton/index.ts")),_tooltip=_interopRequireDefault(__webpack_require__("./src/tooltip/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Icon=function Icon(_ref){_ref.color,_ref.disabled;var name=_ref.name,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,width=_ref.width,height=_ref.height,onPress=_ref.onPress,onLongPress=_ref.onLongPress,tooltip=_ref.tooltip,_ref$tooltipPlacement=_ref.tooltipPlacement,tooltipPlacement=void 0===_ref$tooltipPlacement?"top":_ref$tooltipPlacement,_ref$backgroundStyle=_ref.backgroundStyle,backgroundStyle=void 0===_ref$backgroundStyle?"ripple":_ref$backgroundStyle,type=_ref.type,theme=(_ref.spin,_ref.loading,(0,_native.useTheme)()),iconColor=(0,_get.default)(theme,["colors",type],theme.colors.text),SvgIcon=(0,_get.default)(Svgs,name,Svgs.circleExclamation),showRipple=(0,_reactNativeReanimated.useSharedValue)(!1),IconComponent=(0,_jsxRuntime.jsx)(SvgIcon,{width:width||theme.iconSizes[size],height:height||theme.iconSizes[size],fill:iconColor});return(onPress||onLongPress)&&(IconComponent=(0,_jsxRuntime.jsxs)(_pressable.default,{onPress,onLongPress,onHoverIn:function onHoverIn(){showRipple.value=!0},onHoverOut:function onHoverOut(){showRipple.value=!1},style:["none"!==backgroundStyle&&"ripple"!==backgroundStyle&&backgroundStyle],children:["ripple"===backgroundStyle&&(0,_jsxRuntime.jsx)(_ripple.default,{showRipple}),IconComponent]})),tooltip&&(IconComponent=(0,_jsxRuntime.jsx)(_tooltip.default,{content:tooltip,placement:tooltipPlacement,children:IconComponent})),IconComponent};exports.Icon=Icon;var IconSkeleton=function IconSkeleton(_ref2){var _ref2$size=_ref2.size,size=void 0===_ref2$size?"normal":_ref2$size,theme=(0,_native.useTheme)();return(0,_jsxRuntime.jsx)(_skeleton.default,{border:"circular",width:theme.iconSizes[size],height:theme.iconSizes[size]})};exports.IconSkeleton=IconSkeleton,Icon.Skeleton=IconSkeleton;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"Icon component\n\nTODO: how to animate svgs?\nhttps://medium.com/tribalscale/intro-to-svg-animations-with-react-native-reanimated-2-78bd87438129",displayName:"Icon",props:{color:{defaultValue:null,description:"Icon colour",name:"color",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Set to `true` to disable.",name:"disabled",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"Set icon height.",name:"height",required:!1,type:{name:"NumberProp"}},width:{defaultValue:null,description:"Set icon width.",name:"width",required:!1,type:{name:"NumberProp"}},name:{defaultValue:null,description:"Icon key.",name:"name",required:!0,type:{name:"enum",value:[{value:'"list"'},{value:'"grid"'},{value:'"circle"'},{value:'"addressCard"'},{value:'"arrowDown"'},{value:'"arrowLeft"'},{value:'"arrowRightFromBracket"'},{value:'"arrowRight"'},{value:'"arrowRotateLeft"'},{value:'"arrowRotateRight"'},{value:'"arrowUp"'},{value:'"badgeDollar"'},{value:'"badgePercent"'},{value:'"ban"'},{value:'"barcode"'},{value:'"bars"'},{value:'"basketShopping"'},{value:'"bell"'},{value:'"bookmark"'},{value:'"boxOpenFull"'},{value:'"boxesStacked"'},{value:'"calculatorSimple"'},{value:'"calculator"'},{value:'"calendarDays"'},{value:'"calendar"'},{value:'"caretDown"'},{value:'"caretLeft"'},{value:'"caretRight"'},{value:'"caretUp"'},{value:'"cartPlus"'},{value:'"cartShopping"'},{value:'"cashRegister"'},{value:'"check"'},{value:'"circleCheck"'},{value:'"circleChevronRight"'},{value:'"circleDollar"'},{value:'"circleEllipsis"'},{value:'"circleExclamation"'},{value:'"circleInfo"'},{value:'"circleMinus"'},{value:'"circlePause"'},{value:'"circlePlus"'},{value:'"circleQuestion"'},{value:'"circleXmark"'},{value:'"clock"'},{value:'"commentQuestion"'},{value:'"commentsQuestion"'},{value:'"creditCard"'},{value:'"deleteLeft"'},{value:'"divide"'},{value:'"download"'},{value:'"ellipsisVertical"'},{value:'"equals"'},{value:'"eyeSlash"'},{value:'"eye"'},{value:'"fileInvoiceDollar"'},{value:'"folders"'},{value:'"gear"'},{value:'"giftCard"'},{value:'"gift"'},{value:'"gifts"'},{value:'"grid2Plus"'},{value:'"grid2"'},{value:'"gripLinesVertical"'},{value:'"icons"'},{value:'"lifeRing"'},{value:'"listTree"'},{value:'"magnifyingGlass"'},{value:'"minus"'},{value:'"noteSticky"'},{value:'"penToSquare"'},{value:'"percent"'},{value:'"plusMinus"'},{value:'"plus"'},{value:'"receipt"'},{value:'"rectangleBarcode"'},{value:'"rightLeft"'},{value:'"shop"'},{value:'"sliders"'},{value:'"starOfLife"'},{value:'"star"'},{value:'"store"'},{value:'"tag"'},{value:'"tags"'},{value:'"trash"'},{value:'"triangleExclamation"'},{value:'"truck"'},{value:'"userPlus"'},{value:'"user"'},{value:'"users"'},{value:'"wordpressSimple"'},{value:'"wordpress"'},{value:'"xmark"'}]}},size:{defaultValue:{value:"normal"},description:"Set icon size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},onPress:{defaultValue:null,description:"Turns icon into a button. Called when icon is pressed.",name:"onPress",required:!1,type:{name:"((event: GestureResponderEvent) => void) | null"}},onLongPress:{defaultValue:null,description:"Turns icon into a button. Called when icon is long pressed.",name:"onLongPress",required:!1,type:{name:"((event: GestureResponderEvent) => void) | null"}},tooltip:{defaultValue:null,description:"Wraps the icon in a Tooltip component",name:"tooltip",required:!1,type:{name:"string"}},tooltipPlacement:{defaultValue:{value:"top"},description:"Tooltip placement",name:"tooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'}]}},backgroundStyle:{defaultValue:{value:"ripple"},description:"Styling for Pressable icons",name:"backgroundStyle",required:!1,type:{name:'ViewStyle | "none" | "ripple"'}},type:{defaultValue:null,description:"Icon colour *",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},spin:{defaultValue:{value:"false"},description:"Animate the icon into a 'loading' state",name:"spin",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/icon/icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}try{Skeleton.displayName="Icon.Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Icon.Skeleton",props:{size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/icon.tsx#Icon.Skeleton"]={docgenInfo:Icon.Skeleton.__docgenInfo,name:"Icon.Skeleton",path:"src/icon/icon.tsx#Icon.Skeleton"})}catch(__react_docgen_typescript_loader_error){}try{IconSkeleton.displayName="IconSkeleton",IconSkeleton.__docgenInfo={description:"",displayName:"IconSkeleton",props:{size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/icon.tsx#IconSkeleton"]={docgenInfo:IconSkeleton.__docgenInfo,name:"IconSkeleton",path:"src/icon/icon.tsx#IconSkeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/icon/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _icon.Icon}});var _icon=__webpack_require__("./src/icon/icon.tsx")},"./src/inline-error/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _inlineError.InlineError}});var _inlineError=__webpack_require__("./src/inline-error/inline-error.tsx")},"./src/inline-error/inline-error.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.InlineError=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InlineError=function InlineError(_ref){var message=_ref.message;return(0,_jsxRuntime.jsxs)(_box.default,{horizontal:!0,space:"xSmall",align:"center",children:[(0,_jsxRuntime.jsx)(_icon.default,{name:"triangleExclamation",type:"critical",size:"small"}),(0,_jsxRuntime.jsx)(_text.default,{type:"critical",size:"small",children:message})]})};exports.InlineError=InlineError;try{InlineError.displayName="InlineError",InlineError.__docgenInfo={description:"Brief, in-context messages telling the user that something went wrong\nwith a single or group of inputs in a form.\n\nUse to let users know why a form input is invalid and how to fix it.\n\n> Used in `TextField` component to display error message.",displayName:"InlineError",props:{message:{defaultValue:null,description:"Error message.",name:"message",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/inline-error/inline-error.tsx#InlineError"]={docgenInfo:InlineError.__docgenInfo,name:"InlineError",path:"src/inline-error/inline-error.tsx#InlineError"})}catch(__react_docgen_typescript_loader_error){}},"./src/ripple/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _ripple.Ripple}});var _ripple=__webpack_require__("./src/ripple/ripple.tsx")},"./src/ripple/ripple.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Ripple=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/index.web.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/ripple/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Ripple=function Ripple(_ref){var _f,showRipple=_ref.showRipple,rippleScale=(0,_reactNativeReanimated.useAnimatedStyle)(((_f=function _f(){return{transform:[{scale:(0,_reactNativeReanimated.withTiming)(showRipple.value?1.5:0,{duration:200,easing:_reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.quad)})}]}})._closure={withTiming:_reactNativeReanimated.withTiming,showRipple,Easing:{out:_reactNativeReanimated.Easing.out,quad:_reactNativeReanimated.Easing.quad}},_f.asString="function _f(){const{withTiming,showRipple,Easing}=jsThis._closure;{return{transform:[{scale:withTiming(showRipple.value?1.5:0,{duration:200,easing:Easing.out(Easing.quad)})}]};}}",_f.__workletHash=0xff1e85308fb,_f.__location="/home/runner/work/components/components/src/ripple/ripple.tsx (12:38)",_f.__optimalization=2,_f));return(0,_jsxRuntime.jsx)(Styled.RippleEffect,{as:_reactNativeReanimated.default.View,style:rippleScale,pointerEvents:"none"})};exports.Ripple=Ripple;try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{showRipple:{defaultValue:null,description:"",name:"showRipple",required:!0,type:{name:"SharedValue<boolean>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ripple/ripple.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"src/ripple/ripple.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}},"./src/ripple/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.RippleEffect=void 0;var _templateObject,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js")),RippleEffect=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")).default.View(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n\tz-index: -1;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: ",";\n\tbackground-color: rgba(0, 0, 0, 0.1);\n"])),(function(_ref){return _ref.theme.rounding.circle+"px"}));exports.RippleEffect=RippleEffect},"./src/tooltip/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _tooltip.Tooltip}});var _tooltip=__webpack_require__("./src/tooltip/tooltip.tsx")},"./src/tooltip/tooltip.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Tooltip=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_popover=_interopRequireDefault(__webpack_require__("./src/popover/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","placement"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Tooltip=function Tooltip(_ref){var children=_ref.children,_ref$placement=_ref.placement,placement=void 0===_ref$placement?"top":_ref$placement,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),_React$useState=React.useState(!1),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),opened=_React$useState2[0],setOpened=_React$useState2[1],content="string"==typeof props.content?(0,_jsxRuntime.jsx)(_text.default,{type:"inverse",children:props.content}):props.content;return(0,_jsxRuntime.jsxs)(_popover.default,Object.assign({opened,placement,trigger:"hover",style:{backgroundColor:"black"},withinPortal:!0,onClose:function onClose(){return setOpened(!1)},onOpen:function onOpen(){return setOpened(!0)},closeOnPressOutside:!1},props,{children:[(0,_jsxRuntime.jsx)(_popover.default.Target,{children}),(0,_jsxRuntime.jsx)(_popover.default.Content,{style:{backgroundColor:"black"},children:content})]}))};exports.Tooltip=Tooltip;try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"Tooltip is a special type of Popover\nTODO - set timeout for native tooltips, need onOpen or similar\nFIME - tooltips can get stuck sometimes",displayName:"Tooltip",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},placement:{defaultValue:{value:"top"},description:'Preferred placement of the Popover. The Popover will try to place itself according to this\nproperty. However, if there is not enough space left there to show up, it will show itself\nin opposite direction.\n\nFor example, if we set `placement="top"`, and there is not enough space for the Popover\nto show itself above the triggering view, it will show at the bottom of it.',name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'}]}},opened:{defaultValue:null,description:"Controlled menu opened state. Note: Popover can be controlled or uncontrolled",name:"opened",required:!1,type:{name:"boolean"}},defaultOpened:{defaultValue:null,description:"Uncontrolled menu initial opened state",name:"defaultOpened",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Called when menu opened state changes",name:"onChange",required:!1,type:{name:"((opened: boolean) => void)"}},onOpen:{defaultValue:null,description:"Called when Menu is opened\nCalled when popover opens",name:"onOpen",required:!1,type:{name:"{ (): void; (): void; }"}},onClose:{defaultValue:null,description:"Called when Menu is closed\nCalled when popover closes",name:"onClose",required:!1,type:{name:"{ (): void; (): void; }"}},trigger:{defaultValue:null,description:"Method for activating an uncontrolled Popover.",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"longpress"'},{value:'"press"'},{value:'"hover"'}]}},withArrow:{defaultValue:null,description:"Show arrow pointing to the target.",name:"withArrow",required:!1,type:{name:"boolean"}},withinPortal:{defaultValue:null,description:"Determines whether Popover should be rendered within Portal, defaults to true",name:"withinPortal",required:!1,type:{name:"boolean"}},closeOnPressOutside:{defaultValue:null,description:"Determines whether dropdown should be closed on outside clicks, default to true",name:"closeOnPressOutside",required:!1,type:{name:"boolean"}},matchWidth:{defaultValue:null,description:"Force popover to match the width of the triggering view.",name:"matchWidth",required:!1,type:{name:"boolean"}},primaryAction:{defaultValue:null,description:"",name:"primaryAction",required:!1,type:{name:"PopoverFooterActionProps"}},secondaryActions:{defaultValue:null,description:"",name:"secondaryActions",required:!1,type:{name:"PopoverFooterActionProps[]"}},context:{defaultValue:null,description:"contexted passed  down to the portal",name:"context",required:!1,type:{name:"Record<string, unknown>"}},children:{defaultValue:null,description:"The content which will trigger the Popover. The Popover will be anchored to this component.",name:"children",required:!0,type:{name:"ReactNode"}},content:{defaultValue:null,description:"The content to display inside the Popover.",name:"content",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tooltip/tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/tooltip/tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}}}]);