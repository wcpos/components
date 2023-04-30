(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[17650,43617],{"./src/pill/pill.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Skeleton=exports.Removable=exports.GroupWithWrap=exports.GroupWithTruncated=exports.GroupWithComponentChildren=exports.GroupSkeleton=exports.Group=exports.BasicUsage=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _BasicUsage$parameter,_BasicUsage$parameter2,_BasicUsage$parameter3,_Removable$parameters,_Removable$parameters2,_Removable$parameters3,_Skeleton$parameters,_Skeleton$parameters2,_Skeleton$parameters3,_Group$parameters,_Group$parameters2,_Group$parameters2$do,_GroupWithWrap$parame,_GroupWithWrap$parame2,_GroupWithWrap$parame3,_GroupWithTruncated$p,_GroupWithTruncated$p2,_GroupWithTruncated$p3,_GroupWithComponentCh,_GroupWithComponentCh2,_GroupWithComponentCh3,_GroupSkeleton$parame,_GroupSkeleton$parame2,_GroupSkeleton$parame3,_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_=_interopRequireDefault(__webpack_require__("./src/pill/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var meta={title:"Components/Pill",component:_.default,subcomponents:{Skeleton:_.default.Skeleton}},BasicUsage=function BasicUsage(props){return(0,_jsxRuntime.jsx)(_.default,Object.assign({},props))};exports.BasicUsage=BasicUsage,BasicUsage.args={children:"Label",onPress:(0,_addonActions.action)("Pressed")};var Removable=function Removable(props){return(0,_jsxRuntime.jsx)(_.default,Object.assign({},props))};exports.Removable=Removable,Removable.args={children:"Label",removable:!0,onRemove:(0,_addonActions.action)("Remove"),onPress:(0,_addonActions.action)("Pressed")};var Skeleton=function Skeleton(props){return(0,_jsxRuntime.jsx)(_.default.Skeleton,Object.assign({},props))};exports.Skeleton=Skeleton;var Group=function Group(props){return(0,_jsxRuntime.jsx)(_.default.Group,Object.assign({},props))};exports.Group=Group,Group.args={pills:[{label:"Pill 1",action:(0,_addonActions.action)("Pill 1 pressed")},{label:"Pill 2",action:(0,_addonActions.action)("Pill 2 pressed")},{label:"Pill 3",action:(0,_addonActions.action)("Pill 3 pressed")}]};var GroupWithWrap=function GroupWithWrap(props){return(0,_jsxRuntime.jsx)(_View.default,{style:{width:200},children:(0,_jsxRuntime.jsx)(_.default.Group,Object.assign({},props))})};exports.GroupWithWrap=GroupWithWrap,GroupWithWrap.args={pills:[{label:"Pill 1",action:(0,_addonActions.action)("Pill 1 pressed")},{label:"Pill 2",action:(0,_addonActions.action)("Pill 2 pressed")},{label:"Pill 3",action:(0,_addonActions.action)("Pill 3 pressed")},{label:"Pill 4",action:(0,_addonActions.action)("Pill 4 pressed")},{label:"Pill 5",action:(0,_addonActions.action)("Pill 5 pressed")},{label:"Pill 6",action:(0,_addonActions.action)("Pill 6 pressed")}]};var GroupWithTruncated=function GroupWithTruncated(props){return(0,_jsxRuntime.jsx)(_View.default,{style:{width:60},children:(0,_jsxRuntime.jsx)(_.default.Group,Object.assign({},props))})};exports.GroupWithTruncated=GroupWithTruncated,GroupWithTruncated.args={pills:[{label:"Lorem ipsum dolor sit amet",action:(0,_addonActions.action)("Pill 1 pressed")},{label:"Consectetur adipiscing elit",action:(0,_addonActions.action)("Pill 2 pressed")},{label:"Donec auctor, nisl eget",action:(0,_addonActions.action)("Pill 3 pressed")}]};var GroupWithComponentChildren=function GroupWithComponentChildren(props){return(0,_jsxRuntime.jsxs)(_.default.Group,{children:[(0,_jsxRuntime.jsx)(_.default,{children:"Pill 1"}),(0,_jsxRuntime.jsx)(_.default,{children:"Pill 2"}),(0,_jsxRuntime.jsx)(_.default,{children:"Pill 3"})]})};exports.GroupWithComponentChildren=GroupWithComponentChildren;var GroupSkeleton=function GroupSkeleton(props){return(0,_jsxRuntime.jsx)(_.default.Group.Skeleton,Object.assign({},props))};exports.GroupSkeleton=GroupSkeleton,GroupSkeleton.args={number:2};var _default=meta;exports.default=_default,BasicUsage.parameters=Object.assign({},BasicUsage.parameters,{docs:Object.assign({},null==(_BasicUsage$parameter=BasicUsage.parameters)?void 0:_BasicUsage$parameter.docs,{source:Object.assign({originalSource:"(props: PillProps) => <Pill {...props} />"},null==(_BasicUsage$parameter2=BasicUsage.parameters)||null==(_BasicUsage$parameter3=_BasicUsage$parameter2.docs)?void 0:_BasicUsage$parameter3.source)})}),Removable.parameters=Object.assign({},Removable.parameters,{docs:Object.assign({},null==(_Removable$parameters=Removable.parameters)?void 0:_Removable$parameters.docs,{source:Object.assign({originalSource:"(props: PillProps) => <Pill {...props} />"},null==(_Removable$parameters2=Removable.parameters)||null==(_Removable$parameters3=_Removable$parameters2.docs)?void 0:_Removable$parameters3.source)})}),Skeleton.parameters=Object.assign({},Skeleton.parameters,{docs:Object.assign({},null==(_Skeleton$parameters=Skeleton.parameters)?void 0:_Skeleton$parameters.docs,{source:Object.assign({originalSource:"(props: PillSkeletonProps) => <Pill.Skeleton {...props} />"},null==(_Skeleton$parameters2=Skeleton.parameters)||null==(_Skeleton$parameters3=_Skeleton$parameters2.docs)?void 0:_Skeleton$parameters3.source)})}),Group.parameters=Object.assign({},Group.parameters,{docs:Object.assign({},null==(_Group$parameters=Group.parameters)?void 0:_Group$parameters.docs,{source:Object.assign({originalSource:"(props: PillGroupProps) => <Pill.Group {...props} />"},null==(_Group$parameters2=Group.parameters)||null==(_Group$parameters2$do=_Group$parameters2.docs)?void 0:_Group$parameters2$do.source)})}),GroupWithWrap.parameters=Object.assign({},GroupWithWrap.parameters,{docs:Object.assign({},null==(_GroupWithWrap$parame=GroupWithWrap.parameters)?void 0:_GroupWithWrap$parame.docs,{source:Object.assign({originalSource:"(props: PillGroupProps) => <View style={{\n  width: 200\n}}>\n        <Pill.Group {...props} />\n    </View>"},null==(_GroupWithWrap$parame2=GroupWithWrap.parameters)||null==(_GroupWithWrap$parame3=_GroupWithWrap$parame2.docs)?void 0:_GroupWithWrap$parame3.source)})}),GroupWithTruncated.parameters=Object.assign({},GroupWithTruncated.parameters,{docs:Object.assign({},null==(_GroupWithTruncated$p=GroupWithTruncated.parameters)?void 0:_GroupWithTruncated$p.docs,{source:Object.assign({originalSource:"(props: PillGroupProps) => <View style={{\n  width: 60\n}}>\n        <Pill.Group {...props} />\n    </View>"},null==(_GroupWithTruncated$p2=GroupWithTruncated.parameters)||null==(_GroupWithTruncated$p3=_GroupWithTruncated$p2.docs)?void 0:_GroupWithTruncated$p3.source)})}),GroupWithComponentChildren.parameters=Object.assign({},GroupWithComponentChildren.parameters,{docs:Object.assign({},null==(_GroupWithComponentCh=GroupWithComponentChildren.parameters)?void 0:_GroupWithComponentCh.docs,{source:Object.assign({originalSource:"(props: PillGroupProps) => <Pill.Group>\n        <Pill>Pill 1</Pill>\n        <Pill>Pill 2</Pill>\n        <Pill>Pill 3</Pill>\n    </Pill.Group>"},null==(_GroupWithComponentCh2=GroupWithComponentChildren.parameters)||null==(_GroupWithComponentCh3=_GroupWithComponentCh2.docs)?void 0:_GroupWithComponentCh3.source)})}),GroupSkeleton.parameters=Object.assign({},GroupSkeleton.parameters,{docs:Object.assign({},null==(_GroupSkeleton$parame=GroupSkeleton.parameters)?void 0:_GroupSkeleton$parame.docs,{source:Object.assign({originalSource:"(props: PillGroupSkeletonProps) => <Pill.Group.Skeleton {...props} />"},null==(_GroupSkeleton$parame2=GroupSkeleton.parameters)||null==(_GroupSkeleton$parame3=_GroupSkeleton$parame2.docs)?void 0:_GroupSkeleton$parame3.source)})});try{BasicUsage.displayName="BasicUsage",BasicUsage.__docgenInfo={description:"",displayName:"BasicUsage",props:{children:{defaultValue:null,description:"Pill label",name:"children",required:!0,type:{name:"ReactNode"}},removable:{defaultValue:null,description:"Set to `true` add remove icon.",name:"removable",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Set to `true` to disable.",name:"disabled",required:!1,type:{name:"boolean"}},onRemove:{defaultValue:null,description:"Called if remove icon is pressed",name:"onRemove",required:!1,type:{name:"(() => void)"}},onPress:{defaultValue:null,description:"Called if pill is pressed",name:"onPress",required:!1,type:{name:"(() => void)"}},size:{defaultValue:null,description:"Pill text size, also scales spacing",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},color:{defaultValue:null,description:"Background color of the pill",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},icon:{defaultValue:null,description:"Add an icon next to the label",name:"icon",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"grid"'},{value:'"circle"'},{value:'"addressCard"'},{value:'"arrowDown"'},{value:'"arrowLeft"'},{value:'"arrowRightFromBracket"'},{value:'"arrowRight"'},{value:'"arrowRotateLeft"'},{value:'"arrowRotateRight"'},{value:'"arrowUp"'},{value:'"badgeDollar"'},{value:'"badgePercent"'},{value:'"ban"'},{value:'"barcode"'},{value:'"bars"'},{value:'"basketShopping"'},{value:'"bell"'},{value:'"bookmark"'},{value:'"boxOpenFull"'},{value:'"boxesStacked"'},{value:'"calculatorSimple"'},{value:'"calculator"'},{value:'"calendarDays"'},{value:'"calendar"'},{value:'"caretDown"'},{value:'"caretLeft"'},{value:'"caretRight"'},{value:'"caretUp"'},{value:'"cartPlus"'},{value:'"cartShopping"'},{value:'"cashRegister"'},{value:'"check"'},{value:'"circleCheck"'},{value:'"circleChevronRight"'},{value:'"circleDollar"'},{value:'"circleEllipsis"'},{value:'"circleExclamation"'},{value:'"circleInfo"'},{value:'"circleMinus"'},{value:'"circlePause"'},{value:'"circlePlus"'},{value:'"circleQuestion"'},{value:'"circleXmark"'},{value:'"clock"'},{value:'"commentQuestion"'},{value:'"commentsQuestion"'},{value:'"creditCard"'},{value:'"deleteLeft"'},{value:'"divide"'},{value:'"download"'},{value:'"ellipsisVertical"'},{value:'"equals"'},{value:'"eyeSlash"'},{value:'"eye"'},{value:'"fileInvoiceDollar"'},{value:'"folders"'},{value:'"gear"'},{value:'"giftCard"'},{value:'"gift"'},{value:'"gifts"'},{value:'"grid2Plus"'},{value:'"grid2"'},{value:'"gripLinesVertical"'},{value:'"icons"'},{value:'"lifeRing"'},{value:'"listTree"'},{value:'"magnifyingGlass"'},{value:'"minus"'},{value:'"penToSquare"'},{value:'"percent"'},{value:'"plusMinus"'},{value:'"plus"'},{value:'"receipt"'},{value:'"rectangleBarcode"'},{value:'"shop"'},{value:'"sliders"'},{value:'"starOfLife"'},{value:'"star"'},{value:'"store"'},{value:'"tag"'},{value:'"tags"'},{value:'"trash"'},{value:'"triangleExclamation"'},{value:'"truck"'},{value:'"userPlus"'},{value:'"user"'},{value:'"users"'},{value:'"wordpressSimple"'},{value:'"wordpress"'},{value:'"xmark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pill/pill.stories.tsx#BasicUsage"]={docgenInfo:BasicUsage.__docgenInfo,name:"BasicUsage",path:"src/pill/pill.stories.tsx#BasicUsage"})}catch(__react_docgen_typescript_loader_error){}try{Removable.displayName="Removable",Removable.__docgenInfo={description:"",displayName:"Removable",props:{children:{defaultValue:null,description:"Pill label",name:"children",required:!0,type:{name:"ReactNode"}},removable:{defaultValue:null,description:"Set to `true` add remove icon.",name:"removable",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Set to `true` to disable.",name:"disabled",required:!1,type:{name:"boolean"}},onRemove:{defaultValue:null,description:"Called if remove icon is pressed",name:"onRemove",required:!1,type:{name:"(() => void)"}},onPress:{defaultValue:null,description:"Called if pill is pressed",name:"onPress",required:!1,type:{name:"(() => void)"}},size:{defaultValue:null,description:"Pill text size, also scales spacing",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},color:{defaultValue:null,description:"Background color of the pill",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},icon:{defaultValue:null,description:"Add an icon next to the label",name:"icon",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"grid"'},{value:'"circle"'},{value:'"addressCard"'},{value:'"arrowDown"'},{value:'"arrowLeft"'},{value:'"arrowRightFromBracket"'},{value:'"arrowRight"'},{value:'"arrowRotateLeft"'},{value:'"arrowRotateRight"'},{value:'"arrowUp"'},{value:'"badgeDollar"'},{value:'"badgePercent"'},{value:'"ban"'},{value:'"barcode"'},{value:'"bars"'},{value:'"basketShopping"'},{value:'"bell"'},{value:'"bookmark"'},{value:'"boxOpenFull"'},{value:'"boxesStacked"'},{value:'"calculatorSimple"'},{value:'"calculator"'},{value:'"calendarDays"'},{value:'"calendar"'},{value:'"caretDown"'},{value:'"caretLeft"'},{value:'"caretRight"'},{value:'"caretUp"'},{value:'"cartPlus"'},{value:'"cartShopping"'},{value:'"cashRegister"'},{value:'"check"'},{value:'"circleCheck"'},{value:'"circleChevronRight"'},{value:'"circleDollar"'},{value:'"circleEllipsis"'},{value:'"circleExclamation"'},{value:'"circleInfo"'},{value:'"circleMinus"'},{value:'"circlePause"'},{value:'"circlePlus"'},{value:'"circleQuestion"'},{value:'"circleXmark"'},{value:'"clock"'},{value:'"commentQuestion"'},{value:'"commentsQuestion"'},{value:'"creditCard"'},{value:'"deleteLeft"'},{value:'"divide"'},{value:'"download"'},{value:'"ellipsisVertical"'},{value:'"equals"'},{value:'"eyeSlash"'},{value:'"eye"'},{value:'"fileInvoiceDollar"'},{value:'"folders"'},{value:'"gear"'},{value:'"giftCard"'},{value:'"gift"'},{value:'"gifts"'},{value:'"grid2Plus"'},{value:'"grid2"'},{value:'"gripLinesVertical"'},{value:'"icons"'},{value:'"lifeRing"'},{value:'"listTree"'},{value:'"magnifyingGlass"'},{value:'"minus"'},{value:'"penToSquare"'},{value:'"percent"'},{value:'"plusMinus"'},{value:'"plus"'},{value:'"receipt"'},{value:'"rectangleBarcode"'},{value:'"shop"'},{value:'"sliders"'},{value:'"starOfLife"'},{value:'"star"'},{value:'"store"'},{value:'"tag"'},{value:'"tags"'},{value:'"trash"'},{value:'"triangleExclamation"'},{value:'"truck"'},{value:'"userPlus"'},{value:'"user"'},{value:'"users"'},{value:'"wordpressSimple"'},{value:'"wordpress"'},{value:'"xmark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pill/pill.stories.tsx#Removable"]={docgenInfo:Removable.__docgenInfo,name:"Removable",path:"src/pill/pill.stories.tsx#Removable"})}catch(__react_docgen_typescript_loader_error){}try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{size:{defaultValue:null,description:"Called if pill is pressed",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pill/pill.stories.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/pill/pill.stories.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}try{Group.displayName="Group",Group.__docgenInfo={description:"",displayName:"Group",props:{pills:{defaultValue:null,description:"",name:"pills",required:!1,type:{name:"(string | TextAction)[]"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},color:{defaultValue:null,description:"Background color of the pill",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},style:{defaultValue:null,description:"Style passed to Box container",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pill/pill.stories.tsx#Group"]={docgenInfo:Group.__docgenInfo,name:"Group",path:"src/pill/pill.stories.tsx#Group"})}catch(__react_docgen_typescript_loader_error){}try{GroupWithWrap.displayName="GroupWithWrap",GroupWithWrap.__docgenInfo={description:"",displayName:"GroupWithWrap",props:{pills:{defaultValue:null,description:"",name:"pills",required:!1,type:{name:"(string | TextAction)[]"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},color:{defaultValue:null,description:"Background color of the pill",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},style:{defaultValue:null,description:"Style passed to Box container",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pill/pill.stories.tsx#GroupWithWrap"]={docgenInfo:GroupWithWrap.__docgenInfo,name:"GroupWithWrap",path:"src/pill/pill.stories.tsx#GroupWithWrap"})}catch(__react_docgen_typescript_loader_error){}try{GroupWithTruncated.displayName="GroupWithTruncated",GroupWithTruncated.__docgenInfo={description:"",displayName:"GroupWithTruncated",props:{pills:{defaultValue:null,description:"",name:"pills",required:!1,type:{name:"(string | TextAction)[]"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},color:{defaultValue:null,description:"Background color of the pill",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},style:{defaultValue:null,description:"Style passed to Box container",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pill/pill.stories.tsx#GroupWithTruncated"]={docgenInfo:GroupWithTruncated.__docgenInfo,name:"GroupWithTruncated",path:"src/pill/pill.stories.tsx#GroupWithTruncated"})}catch(__react_docgen_typescript_loader_error){}try{GroupWithComponentChildren.displayName="GroupWithComponentChildren",GroupWithComponentChildren.__docgenInfo={description:"",displayName:"GroupWithComponentChildren",props:{pills:{defaultValue:null,description:"",name:"pills",required:!1,type:{name:"(string | TextAction)[]"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},color:{defaultValue:null,description:"Background color of the pill",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},style:{defaultValue:null,description:"Style passed to Box container",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pill/pill.stories.tsx#GroupWithComponentChildren"]={docgenInfo:GroupWithComponentChildren.__docgenInfo,name:"GroupWithComponentChildren",path:"src/pill/pill.stories.tsx#GroupWithComponentChildren"})}catch(__react_docgen_typescript_loader_error){}try{GroupSkeleton.displayName="GroupSkeleton",GroupSkeleton.__docgenInfo={description:"",displayName:"GroupSkeleton",props:{number:{defaultValue:null,description:"",name:"number",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pill/pill.stories.tsx#GroupSkeleton"]={docgenInfo:GroupSkeleton.__docgenInfo,name:"GroupSkeleton",path:"src/pill/pill.stories.tsx#GroupSkeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/pill/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _pill=__webpack_require__("./src/pill/pill.tsx"),_group=__webpack_require__("./src/pill/group.tsx"),_default=Object.assign(_pill.Pill,{Group:_group.PillGroup});exports.default=_default}}]);