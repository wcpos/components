(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[81794,10282,97741,96387,89101,56589,98454,8757],{"./node_modules/@wcpos/hooks/src/use-on-layout.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.useOnLayout=exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var useOnLayout=function useOnLayout(){var defaultHeight=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,defaultWidth=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,_React$useState=React.useState({height:defaultHeight,width:defaultWidth,x:0,y:0,measured:!1}),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),layout=_React$useState2[0],setLayout=_React$useState2[1],onLayout=React.useCallback((function(_ref){var _nativeEvent$layout=_ref.nativeEvent.layout,height=_nativeEvent$layout.height,width=_nativeEvent$layout.width,x=_nativeEvent$layout.x,y=_nativeEvent$layout.y;height===layout.height&&width===layout.width||setLayout({height,width,x,y,measured:!0})}),[layout.height,layout.width]);return[layout,onLayout]};exports.useOnLayout=useOnLayout;var _default=useOnLayout;exports.default=_default},"./src/accordion/accordion.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.BasicUsage=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _BasicUsage$parameter,_BasicUsage$parameter2,_BasicUsage$parameter3,_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_accordion=__webpack_require__("./src/accordion/accordion.tsx"),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var meta={title:"Components/Accordion",component:_accordion.Accordion},LOREM_IPSUM="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",BasicUsage=function BasicUsage(props){return(0,_jsxRuntime.jsx)(_View.default,{style:{width:300},children:(0,_jsxRuntime.jsx)(_accordion.Accordion,Object.assign({},props))})};exports.BasicUsage=BasicUsage,BasicUsage.args={items:[{title:"Label 1",content:(0,_jsxRuntime.jsx)(_text.default,{children:LOREM_IPSUM})},{title:"Label 2",content:(0,_jsxRuntime.jsx)(_text.default,{children:LOREM_IPSUM})},{title:"Label 3",content:(0,_jsxRuntime.jsx)(_text.default,{children:LOREM_IPSUM})}]};var _default=meta;exports.default=_default,BasicUsage.parameters=Object.assign({},BasicUsage.parameters,{docs:Object.assign({},null==(_BasicUsage$parameter=BasicUsage.parameters)?void 0:_BasicUsage$parameter.docs,{source:Object.assign({originalSource:"(props: AccordionProps) => <View style={{\n  width: 300\n}}>\n        <Accordion {...props} />\n    </View>"},null==(_BasicUsage$parameter2=BasicUsage.parameters)||null==(_BasicUsage$parameter3=_BasicUsage$parameter2.docs)?void 0:_BasicUsage$parameter3.source)})});try{BasicUsage.displayName="BasicUsage",BasicUsage.__docgenInfo={description:"",displayName:"BasicUsage",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AccordionItemProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/accordion/accordion.stories.tsx#BasicUsage"]={docgenInfo:BasicUsage.__docgenInfo,name:"BasicUsage",path:"src/accordion/accordion.stories.tsx#BasicUsage"})}catch(__react_docgen_typescript_loader_error){}},"./src/accordion/accordion.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Accordion=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_collapsible=_interopRequireDefault(__webpack_require__("./src/collapsible/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Accordion=function Accordion(_ref){var items=_ref.items,_React$useState=React.useState(null),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),currentIndex=_React$useState2[0],setCurrentIndex=_React$useState2[1];return(0,_jsxRuntime.jsx)(_box.default,{children:items.map((function(_ref2,index){var title=_ref2.title,content=_ref2.content;return(0,_jsxRuntime.jsx)(_collapsible.default,{title,initExpand:index===currentIndex,onChangeState:function onChangeState(open){open&&setCurrentIndex(index)},children:content},index)}))})};exports.Accordion=Accordion;try{Accordion.displayName="Accordion",Accordion.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AccordionItemProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/accordion/accordion.tsx#Accordion"]={docgenInfo:Accordion.__docgenInfo,name:"Accordion",path:"src/accordion/accordion.tsx#Accordion"})}catch(__react_docgen_typescript_loader_error){}},"./src/collapsible/collapsible.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Collapsible=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/index.web.js")),_useOnLayout3=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/hooks/src/use-on-layout.ts")),_header=__webpack_require__("./src/collapsible/header.tsx"),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Collapsible=function Collapsible(_ref){var _f,children=_ref.children,title=_ref.title,_ref$initExpand=_ref.initExpand,initExpand=void 0!==_ref$initExpand&&_ref$initExpand,onChangeState=_ref.onChangeState,_useOnLayout=(0,_useOnLayout3.default)(),_useOnLayout2=(0,_slicedToArray2.default)(_useOnLayout,2),layout=_useOnLayout2[0],onLayout=_useOnLayout2[1],_React$useState=React.useState(initExpand),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),open=_React$useState2[0],setOpen=_React$useState2[1],progress=(0,_reactNativeReanimated.useDerivedValue)(((_f=function _f(){return open?(0,_reactNativeReanimated.withTiming)(1):(0,_reactNativeReanimated.withTiming)(0)})._closure={open,withTiming:_reactNativeReanimated.withTiming},_f.asString="function _f(){const{open,withTiming}=jsThis._closure;{return open?withTiming(1):withTiming(0);}}",_f.__workletHash=0xdfa6b0f450c,_f.__location="/home/runner/work/components/components/src/collapsible/collapsible.tsx (53:34)",_f)),style=(0,_reactNativeReanimated.useAnimatedStyle)(function(){var _f=function _f(){return{height:layout.height*progress.value+1,opacity:0===progress.value?0:1,overflow:1===progress.value?"visible":"hidden"}};return _f._closure={layout:{height:layout.height},progress},_f.asString="function _f(){const{layout,progress}=jsThis._closure;{return{height:layout.height*progress.value+1,opacity:progress.value===0?0:1,overflow:progress.value===1?'visible':'hidden'};}}",_f.__workletHash=0xe2193bbfd3c,_f.__location="/home/runner/work/components/components/src/collapsible/collapsible.tsx (58:66)",_f.__optimalization=3,_f}()),toggleAccordion=React.useCallback((function(){setOpen(!open),onChangeState&&onChangeState(!open)}),[onChangeState,open]);return(0,_jsxRuntime.jsxs)(_box.default,{children:[(0,_jsxRuntime.jsx)(_pressable.default,{onPress:toggleAccordion,children:(0,_jsxRuntime.jsx)(_header.CollapsibleHeader,{title,open})}),(0,_jsxRuntime.jsx)(_reactNativeReanimated.default.View,{style:[style],children:(0,_jsxRuntime.jsx)(_View.default,{onLayout,children})})]})};exports.Collapsible=Collapsible;try{Collapsible.displayName="Collapsible",Collapsible.__docgenInfo={description:"Make long sections of information available in a block that can expand or collapse.\n\nShould not wrap views with shadows, as shadow will be clipped.",displayName:"Collapsible",props:{children:{defaultValue:null,description:"Content that should be collapsible.",name:"children",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Content that should be collapsible.",name:"title",required:!0,type:{name:"ReactNode"}},initExpand:{defaultValue:{value:"false"},description:"Start with expanded content.",name:"initExpand",required:!1,type:{name:"boolean"}},onChangeState:{defaultValue:null,description:"Start with expanded content.",name:"onChangeState",required:!1,type:{name:"((open: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/collapsible/collapsible.tsx#Collapsible"]={docgenInfo:Collapsible.__docgenInfo,name:"Collapsible",path:"src/collapsible/collapsible.tsx#Collapsible"})}catch(__react_docgen_typescript_loader_error){}},"./src/collapsible/header.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollapsibleHeader=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_box=(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./src/box/index.ts"))),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["open","size"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var CollapsibleHeader=function CollapsibleHeader(_ref){var open=_ref.open,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),icon=open?"caretUp":"caretDown",title="string"==typeof props.title?(0,_jsxRuntime.jsx)(_text.default,{size,children:props.title}):props.title;return(0,_jsxRuntime.jsx)(_box.default,{fill:!0,marginBottom:"normal",borderBottom:"border",children:(0,_jsxRuntime.jsxs)(_box.default,{horizontal:!0,space:"small",paddingBottom:"small",align:"center",children:[(0,_jsxRuntime.jsx)(_box.default,{children:title}),(0,_jsxRuntime.jsx)(_icon.default,{name:icon})]})})};exports.CollapsibleHeader=CollapsibleHeader;try{CollapsibleHeader.displayName="CollapsibleHeader",CollapsibleHeader.__docgenInfo={description:"",displayName:"CollapsibleHeader",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/collapsible/header.tsx#CollapsibleHeader"]={docgenInfo:CollapsibleHeader.__docgenInfo,name:"CollapsibleHeader",path:"src/collapsible/header.tsx#CollapsibleHeader"})}catch(__react_docgen_typescript_loader_error){}},"./src/collapsible/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _collapsible.Collapsible}});var _collapsible=__webpack_require__("./src/collapsible/collapsible.tsx")},"./src/icon/icon.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.IconSkeleton=exports.Icon=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _get=_interopRequireDefault(__webpack_require__("./node_modules/lodash/get.js")),_reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/index.web.js"),_native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),Svgs=_interopRequireWildcard(__webpack_require__("./src/icon/components/fontawesome/solid/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_ripple=_interopRequireDefault(__webpack_require__("./src/ripple/index.ts")),_skeleton=_interopRequireDefault(__webpack_require__("./src/skeleton/index.ts")),_tooltip=_interopRequireDefault(__webpack_require__("./src/tooltip/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Icon=function Icon(_ref){_ref.color,_ref.disabled;var name=_ref.name,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,width=_ref.width,height=_ref.height,onPress=_ref.onPress,onLongPress=_ref.onLongPress,tooltip=_ref.tooltip,_ref$tooltipPlacement=_ref.tooltipPlacement,tooltipPlacement=void 0===_ref$tooltipPlacement?"top":_ref$tooltipPlacement,_ref$backgroundStyle=_ref.backgroundStyle,backgroundStyle=void 0===_ref$backgroundStyle?"ripple":_ref$backgroundStyle,type=_ref.type,theme=(_ref.spin,(0,_native.useTheme)()),iconColor=(0,_get.default)(theme,["colors",type],theme.colors.text),SvgIcon=(0,_get.default)(Svgs,name,Svgs.circleExclamation),showRipple=(0,_reactNativeReanimated.useSharedValue)(!1),IconComponent=(0,_jsxRuntime.jsx)(SvgIcon,{width:width||theme.iconSizes[size],height:height||theme.iconSizes[size],fill:iconColor});return(onPress||onLongPress)&&(IconComponent=(0,_jsxRuntime.jsxs)(_pressable.default,{onPress,onLongPress,onHoverIn:function onHoverIn(){showRipple.value=!0},onHoverOut:function onHoverOut(){showRipple.value=!1},style:["none"!==backgroundStyle&&"ripple"!==backgroundStyle&&backgroundStyle],children:["ripple"===backgroundStyle&&(0,_jsxRuntime.jsx)(_ripple.default,{showRipple}),IconComponent]})),tooltip&&(IconComponent=(0,_jsxRuntime.jsx)(_tooltip.default,{content:tooltip,placement:tooltipPlacement,children:IconComponent})),IconComponent};exports.Icon=Icon;var IconSkeleton=function IconSkeleton(_ref2){var _ref2$size=_ref2.size,size=void 0===_ref2$size?"normal":_ref2$size,theme=(0,_native.useTheme)();return(0,_jsxRuntime.jsx)(_skeleton.default,{border:"circular",width:theme.iconSizes[size],height:theme.iconSizes[size]})};exports.IconSkeleton=IconSkeleton,Icon.Skeleton=IconSkeleton;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"Icon component",displayName:"Icon",props:{color:{defaultValue:null,description:"Icon colour",name:"color",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Set to `true` to disable.",name:"disabled",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"Set icon height.",name:"height",required:!1,type:{name:"NumberProp"}},width:{defaultValue:null,description:"Set icon width.",name:"width",required:!1,type:{name:"NumberProp"}},name:{defaultValue:null,description:"Icon key.",name:"name",required:!0,type:{name:"enum",value:[{value:'"list"'},{value:'"grid"'},{value:'"circle"'},{value:'"addressCard"'},{value:'"arrowDown"'},{value:'"arrowLeft"'},{value:'"arrowRightFromBracket"'},{value:'"arrowRight"'},{value:'"arrowRotateLeft"'},{value:'"arrowRotateRight"'},{value:'"arrowUp"'},{value:'"badgeDollar"'},{value:'"badgePercent"'},{value:'"ban"'},{value:'"barcode"'},{value:'"bars"'},{value:'"basketShopping"'},{value:'"bell"'},{value:'"bookmark"'},{value:'"boxOpenFull"'},{value:'"boxesStacked"'},{value:'"calculatorSimple"'},{value:'"calculator"'},{value:'"calendarDays"'},{value:'"calendar"'},{value:'"caretDown"'},{value:'"caretLeft"'},{value:'"caretRight"'},{value:'"caretUp"'},{value:'"cartPlus"'},{value:'"cartShopping"'},{value:'"cashRegister"'},{value:'"check"'},{value:'"circleCheck"'},{value:'"circleChevronRight"'},{value:'"circleDollar"'},{value:'"circleEllipsis"'},{value:'"circleExclamation"'},{value:'"circleInfo"'},{value:'"circleMinus"'},{value:'"circlePause"'},{value:'"circlePlus"'},{value:'"circleQuestion"'},{value:'"circleXmark"'},{value:'"clock"'},{value:'"commentsQuestion"'},{value:'"creditCard"'},{value:'"deleteLeft"'},{value:'"divide"'},{value:'"download"'},{value:'"ellipsisVertical"'},{value:'"equals"'},{value:'"eyeSlash"'},{value:'"eye"'},{value:'"fileInvoiceDollar"'},{value:'"folders"'},{value:'"gear"'},{value:'"giftCard"'},{value:'"gift"'},{value:'"gifts"'},{value:'"grid2Plus"'},{value:'"grid2"'},{value:'"gripLinesVertical"'},{value:'"icons"'},{value:'"lifeRing"'},{value:'"listTree"'},{value:'"magnifyingGlass"'},{value:'"minus"'},{value:'"penToSquare"'},{value:'"percent"'},{value:'"plusMinus"'},{value:'"plus"'},{value:'"receipt"'},{value:'"rectangleBarcode"'},{value:'"shop"'},{value:'"sliders"'},{value:'"starOfLife"'},{value:'"star"'},{value:'"store"'},{value:'"tag"'},{value:'"tags"'},{value:'"trash"'},{value:'"triangleExclamation"'},{value:'"truck"'},{value:'"userPlus"'},{value:'"user"'},{value:'"users"'},{value:'"wordpressSimple"'},{value:'"wordpress"'},{value:'"xmark"'}]}},size:{defaultValue:{value:"normal"},description:"Set icon size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},onPress:{defaultValue:null,description:"Turns icon into a button. Called when icon is pressed.",name:"onPress",required:!1,type:{name:"((event: GestureResponderEvent) => void) | null"}},onLongPress:{defaultValue:null,description:"Turns icon into a button. Called when icon is long pressed.",name:"onLongPress",required:!1,type:{name:"((event: GestureResponderEvent) => void) | null"}},tooltip:{defaultValue:null,description:"Wraps the icon in a Tooltip component",name:"tooltip",required:!1,type:{name:"string"}},tooltipPlacement:{defaultValue:{value:"top"},description:"Tooltip placement",name:"tooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'}]}},backgroundStyle:{defaultValue:{value:"ripple"},description:"Styling for Pressable icons",name:"backgroundStyle",required:!1,type:{name:'ViewStyle | "none" | "ripple"'}},type:{defaultValue:null,description:"Icon colour *",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},spin:{defaultValue:{value:"false"},description:"Animate the icon into a 'loading' state",name:"spin",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/icon/icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}try{Skeleton.displayName="Icon.Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Icon.Skeleton",props:{size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/icon.tsx#Icon.Skeleton"]={docgenInfo:Icon.Skeleton.__docgenInfo,name:"Icon.Skeleton",path:"src/icon/icon.tsx#Icon.Skeleton"})}catch(__react_docgen_typescript_loader_error){}try{IconSkeleton.displayName="IconSkeleton",IconSkeleton.__docgenInfo={description:"",displayName:"IconSkeleton",props:{size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/icon.tsx#IconSkeleton"]={docgenInfo:IconSkeleton.__docgenInfo,name:"IconSkeleton",path:"src/icon/icon.tsx#IconSkeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/icon/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _icon.Icon}});var _icon=__webpack_require__("./src/icon/icon.tsx")},"./src/ripple/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _ripple.Ripple}});var _ripple=__webpack_require__("./src/ripple/ripple.tsx")},"./src/ripple/ripple.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Ripple=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/index.web.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/ripple/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Ripple=function Ripple(_ref){var _f,showRipple=_ref.showRipple,rippleScale=(0,_reactNativeReanimated.useAnimatedStyle)(((_f=function _f(){return{transform:[{scale:(0,_reactNativeReanimated.withTiming)(showRipple.value?1.5:0,{duration:200,easing:_reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.quad)})}]}})._closure={withTiming:_reactNativeReanimated.withTiming,showRipple,Easing:{out:_reactNativeReanimated.Easing.out,quad:_reactNativeReanimated.Easing.quad}},_f.asString="function _f(){const{withTiming,showRipple,Easing}=jsThis._closure;{return{transform:[{scale:withTiming(showRipple.value?1.5:0,{duration:200,easing:Easing.out(Easing.quad)})}]};}}",_f.__workletHash=0xff1e85308fb,_f.__location="/home/runner/work/components/components/src/ripple/ripple.tsx (12:38)",_f.__optimalization=2,_f));return(0,_jsxRuntime.jsx)(Styled.RippleEffect,{as:_reactNativeReanimated.default.View,style:rippleScale,pointerEvents:"none"})};exports.Ripple=Ripple;try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{showRipple:{defaultValue:null,description:"",name:"showRipple",required:!0,type:{name:"SharedValue<boolean>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ripple/ripple.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"src/ripple/ripple.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}},"./src/ripple/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.RippleEffect=void 0;var _templateObject,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js")),RippleEffect=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")).default.View(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n\tz-index: -1;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: ",";\n\tbackground-color: rgba(0, 0, 0, 0.1);\n"])),(function(_ref){return _ref.theme.rounding.circle+"px"}));exports.RippleEffect=RippleEffect},"./src/tooltip/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _tooltip.Tooltip}});var _tooltip=__webpack_require__("./src/tooltip/tooltip.tsx")}}]);