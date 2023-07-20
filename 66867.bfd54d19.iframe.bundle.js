(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[66867,58541,49514,64605,11483,46122],{"./src/dropdown/dropdown.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.IconActivator=exports.BasicUsage=void 0;var _BasicUsage$parameter,_BasicUsage$parameter2,_BasicUsage$parameter3,_IconActivator$parame,_IconActivator$parame2,_IconActivator$parame3,_slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_dropdown=__webpack_require__("./src/dropdown/dropdown.tsx"),_button=_interopRequireDefault(__webpack_require__("./src/button/index.ts")),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_portal=_interopRequireDefault(__webpack_require__("./src/portal/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var meta={title:"Components/Dropdown",component:_dropdown.Dropdown,decorators:[function AppProvider(Story,context){return(0,_jsxRuntime.jsxs)(_portal.default.Provider,{children:[(0,_jsxRuntime.jsx)(Story,Object.assign({},context)),(0,_jsxRuntime.jsx)(_portal.default.Manager,{})]})}]},BasicUsage=function BasicUsage(props){var _React$useState=React.useState(!1),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),open=_React$useState2[0],setOpen=_React$useState2[1];return(0,_jsxRuntime.jsx)(_View.default,{style:{padding:"100px"},children:(0,_jsxRuntime.jsx)(_dropdown.Dropdown,Object.assign({},props,{opened:open,onClose:function onClose(){setOpen(!1)},children:(0,_jsxRuntime.jsx)(_button.default,{onPress:function onPress(){setOpen(!0)},children:"Click me"})}))})};exports.BasicUsage=BasicUsage,BasicUsage.args={items:["Item 1","Item 2","Item 3","Item 4"],onSelect:(0,_addonActions.action)("Select")};var IconActivator=function IconActivator(props){var _React$useState3=React.useState(!1),_React$useState4=(0,_slicedToArray2.default)(_React$useState3,2),open=_React$useState4[0],setOpen=_React$useState4[1];return(0,_jsxRuntime.jsx)(_View.default,{style:{padding:"100px"},children:(0,_jsxRuntime.jsx)(_dropdown.Dropdown,Object.assign({},props,{opened:open,onClose:function onClose(){setOpen(!1)},children:(0,_jsxRuntime.jsx)(_icon.default,{name:"ellipsisVertical",onPress:function onPress(){setOpen(!0)}})}))})};exports.IconActivator=IconActivator,IconActivator.args={items:[{label:"Item 1",action:(0,_addonActions.action)("Item 1")},{label:"Item 2",action:(0,_addonActions.action)("Item 2")},{label:"Item 3",action:(0,_addonActions.action)("Item 3")},{label:"Item 4",action:(0,_addonActions.action)("Item 4")}],onSelect:(0,_addonActions.action)("Select")};var _default=meta;exports.default=_default,BasicUsage.parameters=Object.assign({},BasicUsage.parameters,{docs:Object.assign({},null==(_BasicUsage$parameter=BasicUsage.parameters)?void 0:_BasicUsage$parameter.docs,{source:Object.assign({originalSource:"(props: DropdownProps) => {\n  const [open, setOpen] = React.useState(false);\n  return <View style={{\n    padding: '100px'\n  }}>\n            <Dropdown {...props} opened={open} onClose={() => {\n      setOpen(false);\n    }}>\n                <Button onPress={() => {\n        setOpen(true);\n      }}>\n                    Click me\n                </Button>\n            </Dropdown>\n        </View>;\n}"},null==(_BasicUsage$parameter2=BasicUsage.parameters)||null==(_BasicUsage$parameter3=_BasicUsage$parameter2.docs)?void 0:_BasicUsage$parameter3.source)})}),IconActivator.parameters=Object.assign({},IconActivator.parameters,{docs:Object.assign({},null==(_IconActivator$parame=IconActivator.parameters)?void 0:_IconActivator$parame.docs,{source:Object.assign({originalSource:"(props: DropdownProps) => {\n  const [open, setOpen] = React.useState(false);\n  return <View style={{\n    padding: '100px'\n  }}>\n            <Dropdown {...props} opened={open} onClose={() => {\n      setOpen(false);\n    }}>\n                <Icon name=\"ellipsisVertical\" onPress={() => {\n        setOpen(true);\n      }} />\n            </Dropdown>\n        </View>;\n}"},null==(_IconActivator$parame2=IconActivator.parameters)||null==(_IconActivator$parame3=_IconActivator$parame2.docs)?void 0:_IconActivator$parame3.source)})});try{BasicUsage.displayName="BasicUsage",BasicUsage.__docgenInfo={description:"",displayName:"BasicUsage",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},placement:{defaultValue:null,description:'Preferred placement of the Popover. The Popover will try to place itself according to this\nproperty. However, if there is not enough space left there to show up, it will show itself\nin opposite direction.\n\nFor example, if we set `placement="top"`, and there is not enough space for the Popover\nto show itself above the triggering view, it will show at the bottom of it.',name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'}]}},opened:{defaultValue:null,description:"Controlled menu opened state. Note: Popover can be controlled or uncontrolled",name:"opened",required:!1,type:{name:"boolean"}},defaultOpened:{defaultValue:null,description:"Uncontrolled menu initial opened state",name:"defaultOpened",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Called when menu opened state changes",name:"onChange",required:!1,type:{name:"((opened: boolean) => void)"}},onOpen:{defaultValue:null,description:"Called when Menu is opened\nCalled when popover opens",name:"onOpen",required:!1,type:{name:"{ (): void; (): void; }"}},onClose:{defaultValue:null,description:"Called when Menu is closed\nCalled when popover closes",name:"onClose",required:!1,type:{name:"{ (): void; (): void; }"}},trigger:{defaultValue:null,description:"Method for activating an uncontrolled Popover.",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"longpress"'},{value:'"press"'},{value:'"hover"'}]}},withArrow:{defaultValue:null,description:"Show arrow pointing to the target.",name:"withArrow",required:!1,type:{name:"boolean"}},withinPortal:{defaultValue:null,description:"Determines whether Popover should be rendered within Portal, defaults to true",name:"withinPortal",required:!1,type:{name:"boolean"}},closeOnPressOutside:{defaultValue:null,description:"Determines whether dropdown should be closed on outside clicks, default to true",name:"closeOnPressOutside",required:!1,type:{name:"boolean"}},clickThrough:{defaultValue:null,description:"If true, the popover and its backdrop won't be clickable and won't receive mouse events.\n\nFor example, this is used by the `Tooltip` component. Prefer using the `Tooltip` component instead\nof this property.",name:"clickThrough",required:!1,type:{name:"boolean"}},matchWidth:{defaultValue:null,description:"Force popover to match the width of the triggering view.",name:"matchWidth",required:!1,type:{name:"boolean"}},primaryAction:{defaultValue:null,description:"",name:"primaryAction",required:!1,type:{name:"PopoverFooterActionProps"}},secondaryActions:{defaultValue:null,description:"",name:"secondaryActions",required:!1,type:{name:"PopoverFooterActionProps[]"}},context:{defaultValue:null,description:"contexted passed  down to the portal",name:"context",required:!1,type:{name:"Record<string, unknown>"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!1,type:{name:"((item: MenuOption, index: number) => ReactNode)"}},onSelect:{defaultValue:null,description:"Callback called when selection is changed. Returns the value of the selected itemm. If no value is set, returns the label.",name:"onSelect",required:!1,type:{name:"((value: any) => void)"}},children:{defaultValue:null,description:"The content which will trigger the Popover. The Popover will be anchored to this component.",name:"children",required:!0,type:{name:"ReactNode"}},items:{defaultValue:null,description:"Menu items are required here",name:"items",required:!0,type:{name:"(string | MenuOption)[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown/dropdown.stories.tsx#BasicUsage"]={docgenInfo:BasicUsage.__docgenInfo,name:"BasicUsage",path:"src/dropdown/dropdown.stories.tsx#BasicUsage"})}catch(__react_docgen_typescript_loader_error){}try{IconActivator.displayName="IconActivator",IconActivator.__docgenInfo={description:"",displayName:"IconActivator",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},placement:{defaultValue:null,description:'Preferred placement of the Popover. The Popover will try to place itself according to this\nproperty. However, if there is not enough space left there to show up, it will show itself\nin opposite direction.\n\nFor example, if we set `placement="top"`, and there is not enough space for the Popover\nto show itself above the triggering view, it will show at the bottom of it.',name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'}]}},opened:{defaultValue:null,description:"Controlled menu opened state. Note: Popover can be controlled or uncontrolled",name:"opened",required:!1,type:{name:"boolean"}},defaultOpened:{defaultValue:null,description:"Uncontrolled menu initial opened state",name:"defaultOpened",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Called when menu opened state changes",name:"onChange",required:!1,type:{name:"((opened: boolean) => void)"}},onOpen:{defaultValue:null,description:"Called when Menu is opened\nCalled when popover opens",name:"onOpen",required:!1,type:{name:"{ (): void; (): void; }"}},onClose:{defaultValue:null,description:"Called when Menu is closed\nCalled when popover closes",name:"onClose",required:!1,type:{name:"{ (): void; (): void; }"}},trigger:{defaultValue:null,description:"Method for activating an uncontrolled Popover.",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"longpress"'},{value:'"press"'},{value:'"hover"'}]}},withArrow:{defaultValue:null,description:"Show arrow pointing to the target.",name:"withArrow",required:!1,type:{name:"boolean"}},withinPortal:{defaultValue:null,description:"Determines whether Popover should be rendered within Portal, defaults to true",name:"withinPortal",required:!1,type:{name:"boolean"}},closeOnPressOutside:{defaultValue:null,description:"Determines whether dropdown should be closed on outside clicks, default to true",name:"closeOnPressOutside",required:!1,type:{name:"boolean"}},clickThrough:{defaultValue:null,description:"If true, the popover and its backdrop won't be clickable and won't receive mouse events.\n\nFor example, this is used by the `Tooltip` component. Prefer using the `Tooltip` component instead\nof this property.",name:"clickThrough",required:!1,type:{name:"boolean"}},matchWidth:{defaultValue:null,description:"Force popover to match the width of the triggering view.",name:"matchWidth",required:!1,type:{name:"boolean"}},primaryAction:{defaultValue:null,description:"",name:"primaryAction",required:!1,type:{name:"PopoverFooterActionProps"}},secondaryActions:{defaultValue:null,description:"",name:"secondaryActions",required:!1,type:{name:"PopoverFooterActionProps[]"}},context:{defaultValue:null,description:"contexted passed  down to the portal",name:"context",required:!1,type:{name:"Record<string, unknown>"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!1,type:{name:"((item: MenuOption, index: number) => ReactNode)"}},onSelect:{defaultValue:null,description:"Callback called when selection is changed. Returns the value of the selected itemm. If no value is set, returns the label.",name:"onSelect",required:!1,type:{name:"((value: any) => void)"}},children:{defaultValue:null,description:"The content which will trigger the Popover. The Popover will be anchored to this component.",name:"children",required:!0,type:{name:"ReactNode"}},items:{defaultValue:null,description:"Menu items are required here",name:"items",required:!0,type:{name:"(string | MenuOption)[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown/dropdown.stories.tsx#IconActivator"]={docgenInfo:IconActivator.__docgenInfo,name:"IconActivator",path:"src/dropdown/dropdown.stories.tsx#IconActivator"})}catch(__react_docgen_typescript_loader_error){}},"./src/dropdown/dropdown.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Dropdown=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_menu=(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./src/menu/index.ts"))),_popover=_interopRequireDefault(__webpack_require__("./src/popover/index.ts")),_scrollview=_interopRequireDefault(__webpack_require__("./src/scrollview/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","opened","items","onSelect","style","onChange","renderItem"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Dropdown=function Dropdown(_ref){var children=_ref.children,opened=_ref.opened,items=_ref.items,onSelect=_ref.onSelect,renderItem=(_ref.style,_ref.onChange,_ref.renderItem),props=(0,_objectWithoutProperties2.default)(_ref,_excluded);return(0,_jsxRuntime.jsxs)(_popover.default,Object.assign({opened},props,{children:[(0,_jsxRuntime.jsx)(_popover.default.Target,{children}),(0,_jsxRuntime.jsx)(_popover.default.Content,{style:{paddingLeft:0,paddingRight:0},children:(0,_jsxRuntime.jsx)(_scrollview.default,{contentContainerStyle:{maxHeight:300},children:(0,_jsxRuntime.jsx)(_menu.default,{items,renderItem,onSelect:function handleSelect(value){null==onSelect||onSelect(value),props.onClose&&props.onClose()}})})})]}))};exports.Dropdown=Dropdown;try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},placement:{defaultValue:null,description:'Preferred placement of the Popover. The Popover will try to place itself according to this\nproperty. However, if there is not enough space left there to show up, it will show itself\nin opposite direction.\n\nFor example, if we set `placement="top"`, and there is not enough space for the Popover\nto show itself above the triggering view, it will show at the bottom of it.',name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'}]}},opened:{defaultValue:null,description:"Controlled menu opened state. Note: Popover can be controlled or uncontrolled",name:"opened",required:!1,type:{name:"boolean"}},defaultOpened:{defaultValue:null,description:"Uncontrolled menu initial opened state",name:"defaultOpened",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Called when menu opened state changes",name:"onChange",required:!1,type:{name:"((opened: boolean) => void)"}},onOpen:{defaultValue:null,description:"Called when Menu is opened\nCalled when popover opens",name:"onOpen",required:!1,type:{name:"{ (): void; (): void; }"}},onClose:{defaultValue:null,description:"Called when Menu is closed\nCalled when popover closes",name:"onClose",required:!1,type:{name:"{ (): void; (): void; }"}},trigger:{defaultValue:null,description:"Method for activating an uncontrolled Popover.",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"longpress"'},{value:'"press"'},{value:'"hover"'}]}},withArrow:{defaultValue:null,description:"Show arrow pointing to the target.",name:"withArrow",required:!1,type:{name:"boolean"}},withinPortal:{defaultValue:null,description:"Determines whether Popover should be rendered within Portal, defaults to true",name:"withinPortal",required:!1,type:{name:"boolean"}},closeOnPressOutside:{defaultValue:null,description:"Determines whether dropdown should be closed on outside clicks, default to true",name:"closeOnPressOutside",required:!1,type:{name:"boolean"}},clickThrough:{defaultValue:null,description:"If true, the popover and its backdrop won't be clickable and won't receive mouse events.\n\nFor example, this is used by the `Tooltip` component. Prefer using the `Tooltip` component instead\nof this property.",name:"clickThrough",required:!1,type:{name:"boolean"}},matchWidth:{defaultValue:null,description:"Force popover to match the width of the triggering view.",name:"matchWidth",required:!1,type:{name:"boolean"}},primaryAction:{defaultValue:null,description:"",name:"primaryAction",required:!1,type:{name:"PopoverFooterActionProps"}},secondaryActions:{defaultValue:null,description:"",name:"secondaryActions",required:!1,type:{name:"PopoverFooterActionProps[]"}},context:{defaultValue:null,description:"contexted passed  down to the portal",name:"context",required:!1,type:{name:"Record<string, unknown>"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!1,type:{name:"((item: MenuOption, index: number) => ReactNode)"}},onSelect:{defaultValue:null,description:"Callback called when selection is changed. Returns the value of the selected itemm. If no value is set, returns the label.",name:"onSelect",required:!1,type:{name:"((value: any) => void)"}},children:{defaultValue:null,description:"The content which will trigger the Popover. The Popover will be anchored to this component.",name:"children",required:!0,type:{name:"ReactNode"}},items:{defaultValue:null,description:"Menu items are required here",name:"items",required:!0,type:{name:"(string | MenuOption)[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown/dropdown.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/dropdown/dropdown.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}},"./src/icon/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _icon.Icon}});var _icon=__webpack_require__("./src/icon/icon.tsx")},"./src/menu/divider.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Divider=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}exports.Divider=function Divider(){return(0,_jsxRuntime.jsx)(_box.default,{borderBottom:"grey",paddingTop:"xSmall",marginBottom:"xSmall"})}},"./src/menu/header.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Header=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Header=function Header(_ref){var children=_ref.children;return(0,_jsxRuntime.jsx)(_box.default,{padding:"small",children:(0,_jsxRuntime.jsx)(_text.default,{size:"small",type:"secondary",uppercase:!0,children})})};exports.Header=Header;try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/menu/header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/menu/header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},"./src/menu/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _divider=__webpack_require__("./src/menu/divider.tsx"),_header=__webpack_require__("./src/menu/header.tsx"),_item=__webpack_require__("./src/menu/item.tsx"),_menu=__webpack_require__("./src/menu/menu.tsx"),_default=Object.assign(_menu.Menu,{Item:_item.Item,Divider:_divider.Divider,Header:_header.Header});exports.default=_default},"./src/menu/item.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Item=void 0;var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_isString=_interopRequireDefault(__webpack_require__("./node_modules/lodash/isString.js")),_native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var IconSpacer=function IconSpacer(){return(0,_jsxRuntime.jsx)(_box.default,{style:{width:16}})},Item=function Item(_ref){var children=_ref.children,icon=_ref.icon,iconSpacer=_ref.iconSpacer,accessoryRight=_ref.accessoryRight,onPress=_ref.onPress,type=_ref.type,style=_ref.style,theme=(0,_native.useTheme)(),accessoryLeft=(0,_isString.default)(icon)?(0,_jsxRuntime.jsx)(_icon.default,{name:icon,type}):icon,label=(0,_isString.default)(children)?(0,_jsxRuntime.jsx)(_text.default,{type,children}):children,calculatedStyled=React.useCallback((function(_ref2){var hovered=_ref2.hovered,hoverBackgroundColor=function convertHexToRGBA(hexCode){var opacity=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,hex=hexCode.replace("#","");return 3===hex.length&&(hex=""+hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2]),opacity>1&&opacity<=100&&(opacity/=100),"rgba("+parseInt(hex.substring(0,2),16)+","+parseInt(hex.substring(2,4),16)+","+parseInt(hex.substring(4,6),16)+","+opacity+")"}(theme.colors[type||"primary"],.1);return[{backgroundColor:hovered?hoverBackgroundColor:"transparent"},style]}),[style,theme,type]);return(0,_jsxRuntime.jsx)(_pressable.default,{onPress,style:calculatedStyled,children:function children(_ref3){_ref3.hovered;return(0,_jsxRuntime.jsxs)(_box.default,{horizontal:!0,space:"small",padding:"small",children:[accessoryLeft||iconSpacer&&(0,_jsxRuntime.jsx)(IconSpacer,{}),(0,_jsxRuntime.jsx)(_box.default,{fill:!0,paddingRight:"small",children:label}),accessoryRight]})}})};exports.Item=Item;try{Item.displayName="Item",Item.__docgenInfo={description:"",displayName:"Item",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | IconName"}},iconSpacer:{defaultValue:null,description:"",name:"iconSpacer",required:!1,type:{name:"boolean"}},accessoryRight:{defaultValue:null,description:"",name:"accessoryRight",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!1,type:{name:"((value: any) => void)"}},type:{defaultValue:null,description:"Color of menu item",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"ViewStyle"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/menu/item.tsx#Item"]={docgenInfo:Item.__docgenInfo,name:"Item",path:"src/menu/item.tsx#Item"})}catch(__react_docgen_typescript_loader_error){}},"./src/menu/menu.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Menu=void 0;var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_isFunction=_interopRequireDefault(__webpack_require__("./node_modules/lodash/isFunction.js")),_isString=_interopRequireDefault(__webpack_require__("./node_modules/lodash/isString.js")),_snakeCase=_interopRequireDefault(__webpack_require__("./node_modules/lodash/snakeCase.js")),_divider=__webpack_require__("./src/menu/divider.tsx"),_item=__webpack_require__("./src/menu/item.tsx"),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Menu=React.forwardRef((function(_ref,ref){var children=_ref.children,_ref$items=_ref.items,items=void 0===_ref$items?[]:_ref$items,_ref$onSelect=_ref.onSelect,onSelect=void 0===_ref$onSelect?function(){}:_ref$onSelect,renderItem=_ref.renderItem,iconSpacer=items.some((function(item){return!(0,_isString.default)(item)&&!!item.icon}));return(0,_jsxRuntime.jsx)(_box.default,{ref,children:children||items.map((function(rawItem,index){var item=(0,_isString.default)(rawItem)?{label:rawItem,value:rawItem,action:null}:rawItem;return(0,_isFunction.default)(renderItem)?(0,_jsxRuntime.jsx)(_item.Item,{onPress:function onPress(){return(0,_isFunction.default)(onSelect)&&onSelect(item.value)},children:renderItem(item.value,index)},item.key):"__"===item.label?(0,_jsxRuntime.jsx)(_divider.Divider,{},"divider_"+index):(0,_jsxRuntime.jsx)(_item.Item,Object.assign({onPress:function onPress(){(0,_isFunction.default)(item.action)&&item.action(item.value||item.label),(0,_isFunction.default)(onSelect)&&onSelect(item.value||item.label)},iconSpacer},item,{children:item.label}),(0,_snakeCase.default)(item.label+"_"+index))}))})}));exports.Menu=Menu;try{Menu.displayName="Menu",Menu.__docgenInfo={description:"",displayName:"Menu",props:{onSelect:{defaultValue:{value:"() => {}"},description:"Callback called when selection is changed. Returns the value of the selected itemm. If no value is set, returns the label.",name:"onSelect",required:!1,type:{name:"((value: any) => void)"}},items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:"(string | MenuOption)[]"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!1,type:{name:"((item: MenuOption, index: number) => ReactNode)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/menu/menu.tsx#Menu"]={docgenInfo:Menu.__docgenInfo,name:"Menu",path:"src/menu/menu.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}},"./src/scrollview/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _scrollview.ScrollView}}),Object.defineProperty(exports,"useScrollEvents",{enumerable:!0,get:function get(){return _scrollview.useScrollEvents}});var _scrollview=__webpack_require__("./src/scrollview/scrollview.tsx")},"./src/scrollview/scrollview.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function F(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e2){didErr=!0,err=_e2},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.ScrollView=void 0,exports.useScrollEvents=function useScrollEvents(){return React.useContext(ScrollEventsContext)};var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_ScrollView=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/ScrollView/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var defaultScrollEventHandler={get latest(){return console.warn("Warning: tried to read the latest scroll event from outside a scrollable context"),null},subscribe:function subscribe(){return function(){}}},ScrollEventsContext=React.createContext(defaultScrollEventHandler);var ScrollView=React.forwardRef((function(props,ref){var scrollEventListenersRef=React.useRef(new Set),scrollEventHandlerRef=React.useRef();null==scrollEventHandlerRef.current&&(scrollEventHandlerRef.current={latest:null,subscribe:function subscribe(listener){return scrollEventListenersRef.current.add(listener),function(){scrollEventListenersRef.current.delete(listener)}}});var onScroll=React.useCallback((function topLevelScrollListener(e){var scrollEvent=e.nativeEvent;scrollEventHandlerRef.current.latest=scrollEvent,null==props.onScroll||props.onScroll(e);var _step,_iterator=_createForOfIteratorHelper(scrollEventListenersRef.current);try{for(_iterator.s();!(_step=_iterator.n()).done;){(0,_step.value)(scrollEvent)}}catch(err){_iterator.e(err)}finally{_iterator.f()}}),[props]);return(0,_jsxRuntime.jsx)(ScrollEventsContext.Provider,{value:scrollEventHandlerRef.current,children:(0,_jsxRuntime.jsx)(_ScrollView.default,Object.assign({ref,scrollEventThrottle:16},props,{onScroll}))})}));exports.ScrollView=ScrollView;try{ScrollView.displayName="ScrollView",ScrollView.__docgenInfo={description:"",displayName:"ScrollView",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/scrollview/scrollview.tsx#ScrollView"]={docgenInfo:ScrollView.__docgenInfo,name:"ScrollView",path:"src/scrollview/scrollview.tsx#ScrollView"})}catch(__react_docgen_typescript_loader_error){}}}]);