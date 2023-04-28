(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[56232,10282,97741,96387],{"./node_modules/@wcpos/hooks/src/use-on-layout.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.useOnLayout=exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var useOnLayout=function useOnLayout(){var defaultHeight=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,defaultWidth=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,_React$useState=React.useState({height:defaultHeight,width:defaultWidth,x:0,y:0,measured:!1}),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),layout=_React$useState2[0],setLayout=_React$useState2[1],onLayout=React.useCallback((function(_ref){var _nativeEvent$layout=_ref.nativeEvent.layout,height=_nativeEvent$layout.height,width=_nativeEvent$layout.width,x=_nativeEvent$layout.x,y=_nativeEvent$layout.y;height===layout.height&&width===layout.width||setLayout({height,width,x,y,measured:!0})}),[layout.height,layout.width]);return[layout,onLayout]};exports.useOnLayout=useOnLayout;var _default=useOnLayout;exports.default=_default},"./src/accordion/accordion.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Accordion=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_collapsible=_interopRequireDefault(__webpack_require__("./src/collapsible/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Accordion=function Accordion(_ref){var items=_ref.items,_React$useState=React.useState(null),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),currentIndex=_React$useState2[0],setCurrentIndex=_React$useState2[1];return(0,_jsxRuntime.jsx)(_box.default,{children:items.map((function(_ref2,index){var title=_ref2.title,content=_ref2.content;return(0,_jsxRuntime.jsx)(_collapsible.default,{title,initExpand:index===currentIndex,onChangeState:function onChangeState(open){open&&setCurrentIndex(index)},children:content},index)}))})};exports.Accordion=Accordion;try{Accordion.displayName="Accordion",Accordion.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AccordionItemProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/accordion/accordion.tsx#Accordion"]={docgenInfo:Accordion.__docgenInfo,name:"Accordion",path:"src/accordion/accordion.tsx#Accordion"})}catch(__react_docgen_typescript_loader_error){}},"./src/accordion/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _accordion.Accordion}});var _accordion=__webpack_require__("./src/accordion/accordion.tsx")},"./src/collapsible/collapsible.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Collapsible=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/index.web.js")),_useOnLayout3=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/hooks/src/use-on-layout.ts")),_header=__webpack_require__("./src/collapsible/header.tsx"),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Collapsible=function Collapsible(_ref){var _f,children=_ref.children,title=_ref.title,_ref$initExpand=_ref.initExpand,initExpand=void 0!==_ref$initExpand&&_ref$initExpand,onChangeState=_ref.onChangeState,_useOnLayout=(0,_useOnLayout3.default)(),_useOnLayout2=(0,_slicedToArray2.default)(_useOnLayout,2),layout=_useOnLayout2[0],onLayout=_useOnLayout2[1],_React$useState=React.useState(initExpand),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),open=_React$useState2[0],setOpen=_React$useState2[1],progress=(0,_reactNativeReanimated.useDerivedValue)(((_f=function _f(){return open?(0,_reactNativeReanimated.withTiming)(1):(0,_reactNativeReanimated.withTiming)(0)})._closure={open,withTiming:_reactNativeReanimated.withTiming},_f.asString="function _f(){const{open,withTiming}=jsThis._closure;{return open?withTiming(1):withTiming(0);}}",_f.__workletHash=0xdfa6b0f450c,_f.__location="/home/runner/work/components/components/src/collapsible/collapsible.tsx (53:34)",_f)),style=(0,_reactNativeReanimated.useAnimatedStyle)(function(){var _f=function _f(){return{height:layout.height*progress.value+1,opacity:0===progress.value?0:1,overflow:1===progress.value?"visible":"hidden"}};return _f._closure={layout:{height:layout.height},progress},_f.asString="function _f(){const{layout,progress}=jsThis._closure;{return{height:layout.height*progress.value+1,opacity:progress.value===0?0:1,overflow:progress.value===1?'visible':'hidden'};}}",_f.__workletHash=0xe2193bbfd3c,_f.__location="/home/runner/work/components/components/src/collapsible/collapsible.tsx (58:66)",_f.__optimalization=3,_f}()),toggleAccordion=React.useCallback((function(){setOpen(!open),onChangeState&&onChangeState(!open)}),[onChangeState,open]);return(0,_jsxRuntime.jsxs)(_box.default,{children:[(0,_jsxRuntime.jsx)(_pressable.default,{onPress:toggleAccordion,children:(0,_jsxRuntime.jsx)(_header.CollapsibleHeader,{title,open})}),(0,_jsxRuntime.jsx)(_reactNativeReanimated.default.View,{style:[style],children:(0,_jsxRuntime.jsx)(_View.default,{onLayout,children})})]})};exports.Collapsible=Collapsible;try{Collapsible.displayName="Collapsible",Collapsible.__docgenInfo={description:"Make long sections of information available in a block that can expand or collapse.\n\nShould not wrap views with shadows, as shadow will be clipped.",displayName:"Collapsible",props:{children:{defaultValue:null,description:"Content that should be collapsible.",name:"children",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Content that should be collapsible.",name:"title",required:!0,type:{name:"ReactNode"}},initExpand:{defaultValue:{value:"false"},description:"Start with expanded content.",name:"initExpand",required:!1,type:{name:"boolean"}},onChangeState:{defaultValue:null,description:"Start with expanded content.",name:"onChangeState",required:!1,type:{name:"((open: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/collapsible/collapsible.tsx#Collapsible"]={docgenInfo:Collapsible.__docgenInfo,name:"Collapsible",path:"src/collapsible/collapsible.tsx#Collapsible"})}catch(__react_docgen_typescript_loader_error){}},"./src/collapsible/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _collapsible.Collapsible}});var _collapsible=__webpack_require__("./src/collapsible/collapsible.tsx")}}]);