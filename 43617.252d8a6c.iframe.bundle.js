(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[43617,56589,65033,29053],{"./src/icon/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _icon.Icon}});var _icon=__webpack_require__("./src/icon/icon.tsx")},"./src/pill/group.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.PillGroup=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _pill=__webpack_require__("./src/pill/pill.tsx"),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var spacingMap={xSmall:"xxSmall",small:"xxSmall",medium:"xSmall",normal:"xSmall",large:"small",xLarge:"small",xxLarge:"medium"},PillGroup=function PillGroup(_ref){var children=_ref.children,pills=_ref.pills,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,color=_ref.color,style=_ref.style;return(0,_jsxRuntime.jsx)(_box.default,{horizontal:!0,space:spacingMap[size],style:[{flexWrap:"wrap",maxWidth:"100%"},style],children:pills?pills.map((function(pill,i){return"string"==typeof pill?(0,_jsxRuntime.jsx)(_pill.Pill,{size,color,children:"pill"},i):(0,_jsxRuntime.jsx)(_pill.Pill,{size,onPress:pill.action,color,children:pill.label},pill.key||i)})):children})};exports.PillGroup=PillGroup;PillGroup.Skeleton=function PillGroupSkeleton(_ref2){var _ref2$number=_ref2.number,number=void 0===_ref2$number?3:_ref2$number,_ref2$size=_ref2.size,size=void 0===_ref2$size?"medium":_ref2$size;return(0,_jsxRuntime.jsx)(_box.default,{horizontal:!0,space:spacingMap[size],children:Array.from({length:number},(function(v,i){return(0,_jsxRuntime.jsx)(_pill.Pill.Skeleton,{size},i)}))})};try{PillGroup.displayName="PillGroup",PillGroup.__docgenInfo={description:"",displayName:"PillGroup",props:{pills:{defaultValue:null,description:"",name:"pills",required:!1,type:{name:"(string | TextAction)[]"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},color:{defaultValue:null,description:"Background color of the pill",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},style:{defaultValue:null,description:"Style passed to Box container",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pill/group.tsx#PillGroup"]={docgenInfo:PillGroup.__docgenInfo,name:"PillGroup",path:"src/pill/group.tsx#PillGroup"})}catch(__react_docgen_typescript_loader_error){}try{Skeleton.displayName="PillGroup.Skeleton",Skeleton.__docgenInfo={description:"",displayName:"PillGroup.Skeleton",props:{number:{defaultValue:{value:"3"},description:"",name:"number",required:!1,type:{name:"number"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pill/group.tsx#PillGroup.Skeleton"]={docgenInfo:PillGroup.Skeleton.__docgenInfo,name:"PillGroup.Skeleton",path:"src/pill/group.tsx#PillGroup.Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/pill/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _pill=__webpack_require__("./src/pill/pill.tsx"),_group=__webpack_require__("./src/pill/group.tsx"),_default=Object.assign(_pill.Pill,{Group:_group.PillGroup});exports.default=_default},"./src/pill/pill.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Pill=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),Styled=_interopRequireWildcard(__webpack_require__("./src/pill/styles.ts")),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Pill=function Pill(_ref){var children=_ref.children,removable=_ref.removable,disabled=_ref.disabled,onRemove=_ref.onRemove,onPress=_ref.onPress,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"primary":_ref$color,icon=_ref.icon,label=((0,_native.useTheme)(),"string"==typeof children?(0,_jsxRuntime.jsx)(_text.default,{size,type:"inverse",backgroundType:color,numberOfLines:1,children}):children);return(0,_jsxRuntime.jsxs)(_View.default,{style:{maxWidth:"100%",flexDirection:"row"},children:[(0,_jsxRuntime.jsxs)(_pressable.default,{onPress:disabled?void 0:onPress,style:{flex:1,flexDirection:"row"},children:[icon&&(0,_jsxRuntime.jsx)(Styled.Pill,{disabled,size,color,style:{borderTopRightRadius:0,borderBottomRightRadius:0,paddingRight:0},children:(0,_jsxRuntime.jsx)(_icon.default,{name:icon,size,type:"inverse",backgroundType:color})}),(0,_jsxRuntime.jsx)(Styled.Pill,{disabled,size,color,style:{borderTopLeftRadius:icon?0:void 0,borderBottomLeftRadius:icon?0:void 0,borderTopRightRadius:removable?0:void 0,borderBottomRightRadius:removable?0:void 0,paddingRight:removable?0:void 0},children:label})]}),removable&&(0,_jsxRuntime.jsx)(_pressable.default,{onPress:onRemove,children:(0,_jsxRuntime.jsx)(Styled.Pill,{disabled,size,color,style:{borderTopLeftRadius:0,borderBottomLeftRadius:0},children:(0,_jsxRuntime.jsx)(_icon.default,{name:"xmark",size,disabled,type:"inverse",backgroundType:color})})})]})};exports.Pill=Pill;var skeletonSizeMap={xSmall:{width:30,height:12},small:{width:50,height:18},normal:{width:80,height:24},medium:{width:90,height:28},large:{width:100,height:36},xLarge:{width:120,height:48},xxLarge:{width:140,height:60}};Pill.Skeleton=function PillSkeleton(_ref2){var _ref2$size=_ref2.size,size=void 0===_ref2$size?"medium":_ref2$size;return(0,_jsxRuntime.jsx)(Styled.PillSkeleton,{size,width:skeletonSizeMap[size].width,height:skeletonSizeMap[size].height})};try{Pill.displayName="Pill",Pill.__docgenInfo={description:"",displayName:"Pill",props:{children:{defaultValue:null,description:"Pill label",name:"children",required:!0,type:{name:"ReactNode"}},removable:{defaultValue:null,description:"Set to `true` add remove icon.",name:"removable",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Set to `true` to disable.",name:"disabled",required:!1,type:{name:"boolean"}},onRemove:{defaultValue:null,description:"Called if remove icon is pressed",name:"onRemove",required:!1,type:{name:"(() => void)"}},onPress:{defaultValue:null,description:"Called if pill is pressed",name:"onPress",required:!1,type:{name:"(() => void)"}},size:{defaultValue:{value:"medium"},description:"Pill text size, also scales spacing",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},color:{defaultValue:{value:"primary"},description:"Background color of the pill",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},icon:{defaultValue:null,description:"Add an icon next to the label",name:"icon",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"grid"'},{value:'"circle"'},{value:'"addressCard"'},{value:'"arrowDown"'},{value:'"arrowLeft"'},{value:'"arrowRightFromBracket"'},{value:'"arrowRight"'},{value:'"arrowRotateLeft"'},{value:'"arrowRotateRight"'},{value:'"arrowUp"'},{value:'"arrowsFromLine"'},{value:'"arrowsToLine"'},{value:'"badgeDollar"'},{value:'"badgePercent"'},{value:'"ban"'},{value:'"barcode"'},{value:'"bars"'},{value:'"basketShopping"'},{value:'"bell"'},{value:'"bookmark"'},{value:'"boxOpenFull"'},{value:'"boxesStacked"'},{value:'"calculatorSimple"'},{value:'"calculator"'},{value:'"calendarDays"'},{value:'"calendar"'},{value:'"caretDown"'},{value:'"caretLeft"'},{value:'"caretRight"'},{value:'"caretUp"'},{value:'"cartPlus"'},{value:'"cartShopping"'},{value:'"cashRegister"'},{value:'"check"'},{value:'"chevronDown"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"chevronUp"'},{value:'"circleCheck"'},{value:'"circleChevronRight"'},{value:'"circleDollar"'},{value:'"circleEllipsis"'},{value:'"circleExclamation"'},{value:'"circleInfo"'},{value:'"circleMinus"'},{value:'"circlePause"'},{value:'"circlePlus"'},{value:'"circleQuestion"'},{value:'"circleXmark"'},{value:'"clock"'},{value:'"commentQuestion"'},{value:'"commentsQuestion"'},{value:'"creditCard"'},{value:'"deleteLeft"'},{value:'"divide"'},{value:'"download"'},{value:'"ellipsisVertical"'},{value:'"equals"'},{value:'"eyeSlash"'},{value:'"eye"'},{value:'"fileInvoiceDollar"'},{value:'"folder"'},{value:'"folders"'},{value:'"gear"'},{value:'"giftCard"'},{value:'"gift"'},{value:'"gifts"'},{value:'"grid2Plus"'},{value:'"grid2"'},{value:'"gripLinesVertical"'},{value:'"icons"'},{value:'"lifeRing"'},{value:'"listTree"'},{value:'"magnifyingGlass"'},{value:'"minus"'},{value:'"noteSticky"'},{value:'"penToSquare"'},{value:'"percent"'},{value:'"plusMinus"'},{value:'"plus"'},{value:'"receipt"'},{value:'"rectangleBarcode"'},{value:'"rightLeft"'},{value:'"shop"'},{value:'"sliders"'},{value:'"starOfLife"'},{value:'"star"'},{value:'"store"'},{value:'"tag"'},{value:'"tags"'},{value:'"trash"'},{value:'"triangleExclamation"'},{value:'"truck"'},{value:'"userPlus"'},{value:'"user"'},{value:'"users"'},{value:'"wordpressSimple"'},{value:'"wordpress"'},{value:'"xmark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pill/pill.tsx#Pill"]={docgenInfo:Pill.__docgenInfo,name:"Pill",path:"src/pill/pill.tsx#Pill"})}catch(__react_docgen_typescript_loader_error){}try{Skeleton.displayName="Pill.Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Pill.Skeleton",props:{size:{defaultValue:{value:"medium"},description:"Called if pill is pressed",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pill/pill.tsx#Pill.Skeleton"]={docgenInfo:Pill.Skeleton.__docgenInfo,name:"Pill.Skeleton",path:"src/pill/pill.tsx#Pill.Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/pill/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.PillSkeleton=exports.Pill=exports.Label=void 0;var _templateObject,_templateObject2,_templateObject3,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js")),_native=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")),_skeleton=__webpack_require__("./src/skeleton/skeleton.tsx"),_text=__webpack_require__("./src/text/text.tsx"),Pill=_native.default.View(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n\tflex-direction: row;\n\talign-items: center;\n\tpadding: ",";\n\tborder-radius: ",";\n\tbackground-color: ",";\n\tgap: ",";\n\tmax-width: 100%;\n"])),(function(_ref){var theme=_ref.theme;switch(_ref.size){case"xSmall":return theme.spacing.xxSmall+"px "+theme.spacing.xSmall+"px";case"small":default:return theme.spacing.xSmall+"px "+theme.spacing.small+"px";case"large":case"xLarge":return theme.spacing.small+"px "+theme.spacing.medium+"px"}}),(function(_ref2){var theme=_ref2.theme;switch(_ref2.size){case"xSmall":case"small":default:return theme.rounding.xLarge+"px";case"large":case"xLarge":return theme.rounding.xxLarge+"px"}}),(function(_ref3){var theme=_ref3.theme,disabled=_ref3.disabled,color=_ref3.color;return disabled?theme.colors.disabled:theme.colors[color]}),(function(_ref4){var theme=_ref4.theme;_ref4.size;return theme.spacing.xSmall+"px"}));exports.Pill=Pill;var Label=(0,_native.default)(_text.Text)(_templateObject2||(_templateObject2=(0,_taggedTemplateLiteralLoose2.default)(["\n\tcolor: ",";\n"])),(function(_ref5){return _ref5.theme.colors.inverse}));exports.Label=Label;var PillSkeleton=(0,_native.default)(_skeleton.Skeleton)(_templateObject3||(_templateObject3=(0,_taggedTemplateLiteralLoose2.default)(["\n\tborder-radius: ",";\n"])),(function(_ref6){var theme=_ref6.theme;switch(_ref6.size){case"xSmall":case"small":return theme.rounding.large+"px";case"large":case"xLarge":return theme.rounding.xxLarge+"px";default:return theme.rounding.xLarge+"px"}}));exports.PillSkeleton=PillSkeleton}}]);