(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[99480,16978,89131],{"./node_modules/@wcpos/hooks/src/use-uncontrolled-state.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.useUncontrolledState=exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_react=__webpack_require__("./node_modules/react/index.js"),useUncontrolledState=function useUncontrolledState(stateProp,callback){var _useState=(0,_react.useState)(stateProp),_useState2=(0,_slicedToArray2.default)(_useState,2),state=_useState2[0],setState=_useState2[1],setStateWrapper=(0,_react.useCallback)((function(newState){setState(newState),null==callback||callback(newState)}),[callback,setState]);return[callback?stateProp:state,setStateWrapper]};exports.useUncontrolledState=useUncontrolledState;var _default=useUncontrolledState;exports.default=_default},"./src/pill/group.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.PillGroup=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _pill=__webpack_require__("./src/pill/pill.tsx"),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var spacingMap={xSmall:"xxSmall",small:"xxSmall",medium:"xSmall",normal:"xSmall",large:"small",xLarge:"small",xxLarge:"medium"},PillGroup=function PillGroup(_ref){var children=_ref.children,pills=_ref.pills,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,color=_ref.color,style=_ref.style;return(0,_jsxRuntime.jsx)(_box.default,{horizontal:!0,space:spacingMap[size],style:[{flexWrap:"wrap",maxWidth:"100%"},style],children:pills?pills.map((function(pill,i){return"string"==typeof pill?(0,_jsxRuntime.jsx)(_pill.Pill,{size,color,children:"pill"},i):(0,_jsxRuntime.jsx)(_pill.Pill,{size,onPress:pill.action,color,children:pill.label},pill.key||i)})):children})};exports.PillGroup=PillGroup;PillGroup.Skeleton=function PillGroupSkeleton(_ref2){var _ref2$number=_ref2.number,number=void 0===_ref2$number?3:_ref2$number,_ref2$size=_ref2.size,size=void 0===_ref2$size?"medium":_ref2$size;return(0,_jsxRuntime.jsx)(_box.default,{horizontal:!0,space:spacingMap[size],children:Array.from({length:number},(function(v,i){return(0,_jsxRuntime.jsx)(_pill.Pill.Skeleton,{size},i)}))})};try{PillGroup.displayName="PillGroup",PillGroup.__docgenInfo={description:"",displayName:"PillGroup",props:{pills:{defaultValue:null,description:"",name:"pills",required:!1,type:{name:"(string | TextAction)[]"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},color:{defaultValue:null,description:"Background color of the pill",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},style:{defaultValue:null,description:"Style passed to Box container",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pill/group.tsx#PillGroup"]={docgenInfo:PillGroup.__docgenInfo,name:"PillGroup",path:"src/pill/group.tsx#PillGroup"})}catch(__react_docgen_typescript_loader_error){}try{Skeleton.displayName="PillGroup.Skeleton",Skeleton.__docgenInfo={description:"",displayName:"PillGroup.Skeleton",props:{number:{defaultValue:{value:"3"},description:"",name:"number",required:!1,type:{name:"number"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pill/group.tsx#PillGroup.Skeleton"]={docgenInfo:PillGroup.Skeleton.__docgenInfo,name:"PillGroup.Skeleton",path:"src/pill/group.tsx#PillGroup.Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/pill/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _pill=__webpack_require__("./src/pill/pill.tsx"),_group=__webpack_require__("./src/pill/group.tsx"),_default=Object.assign(_pill.Pill,{Group:_group.PillGroup});exports.default=_default},"./src/pill/pill.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Pill=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),Styled=_interopRequireWildcard(__webpack_require__("./src/pill/styles.ts")),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Pill=function Pill(_ref){var children=_ref.children,removable=_ref.removable,disabled=_ref.disabled,onRemove=_ref.onRemove,onPress=_ref.onPress,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"primary":_ref$color,icon=_ref.icon,label=((0,_native.useTheme)(),"string"==typeof children?(0,_jsxRuntime.jsx)(_text.default,{size,type:"inverse",numberOfLines:1,children}):children);return(0,_jsxRuntime.jsxs)(_View.default,{style:{maxWidth:"100%",flexDirection:"row"},children:[(0,_jsxRuntime.jsxs)(_pressable.default,{onPress:disabled?void 0:onPress,style:{maxWidth:"100%"},children:[icon&&(0,_jsxRuntime.jsx)(Styled.Pill,{disabled,size,color,style:{borderTopRightRadius:0,borderBottomRightRadius:0,paddingRight:0},children:(0,_jsxRuntime.jsx)(_icon.default,{name:icon,size,type:"inverse"})}),(0,_jsxRuntime.jsx)(Styled.Pill,{disabled,size,color,style:{borderTopLeftRadius:icon?0:void 0,borderBottomLeftRadius:icon?0:void 0,borderTopRightRadius:removable?0:void 0,borderBottomRightRadius:removable?0:void 0},children:label})]}),removable&&(0,_jsxRuntime.jsx)(_pressable.default,{onPress:onRemove,children:(0,_jsxRuntime.jsx)(Styled.Pill,{disabled,size,color,style:{borderTopLeftRadius:0,borderBottomLeftRadius:0,paddingLeft:0},children:(0,_jsxRuntime.jsx)(_icon.default,{name:"xmark",size,disabled,type:"inverse"})})})]})};exports.Pill=Pill;var skeletonSizeMap={xSmall:{width:30,height:12},small:{width:50,height:18},normal:{width:80,height:24},medium:{width:90,height:28},large:{width:100,height:36},xLarge:{width:120,height:48},xxLarge:{width:140,height:60}};Pill.Skeleton=function PillSkeleton(_ref2){var _ref2$size=_ref2.size,size=void 0===_ref2$size?"medium":_ref2$size;return(0,_jsxRuntime.jsx)(Styled.PillSkeleton,{size,width:skeletonSizeMap[size].width,height:skeletonSizeMap[size].height})};try{Pill.displayName="Pill",Pill.__docgenInfo={description:"",displayName:"Pill",props:{children:{defaultValue:null,description:"Pill label",name:"children",required:!0,type:{name:"ReactNode"}},removable:{defaultValue:null,description:"Set to `true` add remove icon.",name:"removable",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Set to `true` to disable.",name:"disabled",required:!1,type:{name:"boolean"}},onRemove:{defaultValue:null,description:"Called if remove icon is pressed",name:"onRemove",required:!1,type:{name:"(() => void)"}},onPress:{defaultValue:null,description:"Called if pill is pressed",name:"onPress",required:!1,type:{name:"(() => void)"}},size:{defaultValue:{value:"medium"},description:"Pill text size, also scales spacing",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},color:{defaultValue:{value:"primary"},description:"Background color of the pill",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},icon:{defaultValue:null,description:"Add an icon next to the label",name:"icon",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"grid"'},{value:'"circle"'},{value:'"addressCard"'},{value:'"arrowDown"'},{value:'"arrowLeft"'},{value:'"arrowRightFromBracket"'},{value:'"arrowRight"'},{value:'"arrowRotateLeft"'},{value:'"arrowRotateRight"'},{value:'"arrowUp"'},{value:'"badgeDollar"'},{value:'"badgePercent"'},{value:'"ban"'},{value:'"barcode"'},{value:'"bars"'},{value:'"basketShopping"'},{value:'"bell"'},{value:'"bookmark"'},{value:'"boxOpenFull"'},{value:'"boxesStacked"'},{value:'"calculatorSimple"'},{value:'"calculator"'},{value:'"calendarDays"'},{value:'"calendar"'},{value:'"caretDown"'},{value:'"caretLeft"'},{value:'"caretRight"'},{value:'"caretUp"'},{value:'"cartPlus"'},{value:'"cartShopping"'},{value:'"cashRegister"'},{value:'"check"'},{value:'"circleCheck"'},{value:'"circleChevronRight"'},{value:'"circleDollar"'},{value:'"circleEllipsis"'},{value:'"circleExclamation"'},{value:'"circleInfo"'},{value:'"circleMinus"'},{value:'"circlePause"'},{value:'"circlePlus"'},{value:'"circleQuestion"'},{value:'"circleXmark"'},{value:'"clock"'},{value:'"commentsQuestion"'},{value:'"creditCard"'},{value:'"deleteLeft"'},{value:'"divide"'},{value:'"download"'},{value:'"ellipsisVertical"'},{value:'"equals"'},{value:'"eyeSlash"'},{value:'"eye"'},{value:'"fileInvoiceDollar"'},{value:'"folders"'},{value:'"gear"'},{value:'"giftCard"'},{value:'"gift"'},{value:'"gifts"'},{value:'"grid2Plus"'},{value:'"grid2"'},{value:'"gripLinesVertical"'},{value:'"icons"'},{value:'"lifeRing"'},{value:'"listTree"'},{value:'"magnifyingGlass"'},{value:'"minus"'},{value:'"penToSquare"'},{value:'"percent"'},{value:'"plusMinus"'},{value:'"plus"'},{value:'"receipt"'},{value:'"rectangleBarcode"'},{value:'"shop"'},{value:'"sliders"'},{value:'"starOfLife"'},{value:'"star"'},{value:'"store"'},{value:'"tag"'},{value:'"tags"'},{value:'"trash"'},{value:'"triangleExclamation"'},{value:'"truck"'},{value:'"userPlus"'},{value:'"user"'},{value:'"users"'},{value:'"wordpressSimple"'},{value:'"wordpress"'},{value:'"xmark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pill/pill.tsx#Pill"]={docgenInfo:Pill.__docgenInfo,name:"Pill",path:"src/pill/pill.tsx#Pill"})}catch(__react_docgen_typescript_loader_error){}try{Skeleton.displayName="Pill.Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Pill.Skeleton",props:{size:{defaultValue:{value:"medium"},description:"Called if pill is pressed",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pill/pill.tsx#Pill.Skeleton"]={docgenInfo:Pill.Skeleton.__docgenInfo,name:"Pill.Skeleton",path:"src/pill/pill.tsx#Pill.Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/pill/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.PillSkeleton=exports.Pill=exports.Label=void 0;var _templateObject,_templateObject2,_templateObject3,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js")),_native=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")),_skeleton=__webpack_require__("./src/skeleton/skeleton.tsx"),_text=__webpack_require__("./src/text/text.tsx"),Pill=_native.default.View(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n\tflex-direction: row;\n\talign-items: center;\n\tpadding: ","\n\tborder-radius: ","\n\tbackground-color: ",";\n\tgap: ",";\n\tmax-width: 100%;\n"])),(function(_ref){var theme=_ref.theme;switch(_ref.size){case"xSmall":return theme.spacing.xxSmall+"px "+theme.spacing.xSmall+"px";case"small":return theme.spacing.xxSmall+"px "+theme.spacing.small+"px";case"large":case"xLarge":return theme.spacing.small+"px "+theme.spacing.medium+"px";default:return theme.spacing.xSmall+"px "+theme.spacing.small+"px"}}),(function(_ref2){var theme=_ref2.theme;switch(_ref2.size){case"xSmall":case"small":return theme.rounding.large+"px";case"large":case"xLarge":return theme.rounding.xxLarge+"px";default:return theme.rounding.xLarge+"px"}}),(function(_ref3){var theme=_ref3.theme,disabled=_ref3.disabled,color=_ref3.color;return disabled?theme.colors.disabled:theme.colors[color]}),(function(_ref4){var theme=_ref4.theme;_ref4.size;return theme.spacing.xSmall+"px"}));exports.Pill=Pill;var Label=(0,_native.default)(_text.Text)(_templateObject2||(_templateObject2=(0,_taggedTemplateLiteralLoose2.default)(["\n\tcolor: ",";\n"])),(function(_ref5){return _ref5.theme.colors.inverse}));exports.Label=Label;var PillSkeleton=(0,_native.default)(_skeleton.Skeleton)(_templateObject3||(_templateObject3=(0,_taggedTemplateLiteralLoose2.default)(["\n\tborder-radius: ",";\n"])),(function(_ref6){var theme=_ref6.theme;switch(_ref6.size){case"xSmall":case"small":return theme.rounding.large+"px";case"large":case"xLarge":return theme.rounding.xxLarge+"px";default:return theme.rounding.xLarge+"px"}}));exports.PillSkeleton=PillSkeleton},"./src/search/filters.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_pill=_interopRequireDefault(__webpack_require__("./src/pill/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var _default=function SearchFilters(_ref){var filters=_ref.filters;return(0,_jsxRuntime.jsx)(_box.default,{paddingLeft:"small",children:filters.map((function(_ref2,index){var label=_ref2.label,onRemove=_ref2.onRemove;return(0,_jsxRuntime.jsx)(_pill.default,{removable:!0,onRemove,children:label},label+"-"+index)}))})};exports.default=_default;try{filters.displayName="filters",filters.__docgenInfo={description:"",displayName:"filters",props:{filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"SearchFilterProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/search/filters.tsx#filters"]={docgenInfo:filters.__docgenInfo,name:"filters",path:"src/search/filters.tsx#filters"})}catch(__react_docgen_typescript_loader_error){}},"./src/search/search.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Search=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_filters=(_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./src/search/filters.tsx"))),Styled=_interopRequireWildcard(__webpack_require__("./src/search/styles.ts")),_textinput=_interopRequireDefault(__webpack_require__("./src/textinput/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["actions","onSearch","filters","style"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Search=function Search(_ref){_ref.actions;var onSearch=_ref.onSearch,filters=_ref.filters,style=_ref.style,rest=(0,_objectWithoutProperties2.default)(_ref,_excluded);return(0,_jsxRuntime.jsx)(Styled.Container,{style,children:(0,_jsxRuntime.jsx)(Styled.Input,{children:(0,_jsxRuntime.jsx)(_textinput.default,Object.assign({clearable:!0,onChangeText:onSearch,leftAccessory:Array.isArray(filters)&&filters.length>0?(0,_jsxRuntime.jsx)(_filters.default,{filters}):void 0},rest))})})};exports.Search=Search;try{Search.displayName="Search",Search.__docgenInfo={description:"",displayName:"Search",props:{onSearch:{defaultValue:null,description:"Pass-through to TextInput onChange prop",name:"onSearch",required:!0,type:{name:"(value: string) => void"}},actions:{defaultValue:null,description:"Buttons displayed to the right of the search field",name:"actions",required:!1,type:{name:"(ReactElement<any, string | JSXElementConstructor<any>> | SearchActionsProps)[]"}},filters:{defaultValue:null,description:"Pills displayed in the search field",name:"filters",required:!1,type:{name:"SearchFilterProps[]"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"ViewStyle"}},onClear:{defaultValue:null,description:"Called when the clear icon is pressed",name:"onClear",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/search/search.tsx#Search"]={docgenInfo:Search.__docgenInfo,name:"Search",path:"src/search/search.tsx#Search"})}catch(__react_docgen_typescript_loader_error){}},"./src/search/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Input=exports.Container=exports.Actions=void 0;var _templateObject,_templateObject2,_templateObject3,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js")),_native=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")),Container=_native.default.View(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n\tflex-direction: row;\n\tflex: 1;\n\talign-items: center;\n"])));exports.Container=Container;var Input=_native.default.View(_templateObject2||(_templateObject2=(0,_taggedTemplateLiteralLoose2.default)(["\n\tflex: 1;\n"])));exports.Input=Input;var Actions=_native.default.View(_templateObject3||(_templateObject3=(0,_taggedTemplateLiteralLoose2.default)(["\n\tflex-direction: row;\n"])));exports.Actions=Actions},"./src/textinput/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"TextInputContainer",{enumerable:!0,get:function get(){return _container.TextInputContainer}}),Object.defineProperty(exports,"TextInputWithLabel",{enumerable:!0,get:function get(){return _withLabel.TextInputWithLabel}}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _textinput.TextInput}});var _textinput=__webpack_require__("./src/textinput/textinput.tsx"),_withLabel=__webpack_require__("./src/textinput/with-label.tsx"),_container=__webpack_require__("./src/textinput/container.tsx")}}]);