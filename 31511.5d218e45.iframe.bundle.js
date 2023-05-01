(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[31511,61617,43290,39575],{"./src/icon/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _icon.Icon}});var _icon=__webpack_require__("./src/icon/icon.tsx")},"./src/snackbar/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"SnackbarProvider",{enumerable:!0,get:function get(){return _provider.SnackbarProvider}}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _useSnackbar.useSnackbar}});var _provider=__webpack_require__("./src/snackbar/provider.tsx"),_useSnackbar=__webpack_require__("./src/snackbar/use-snackbar.tsx")},"./src/snackbar/provider.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.SnackbarProvider=exports.SnackbarContext=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_snackbarList=__webpack_require__("./src/snackbar/snackbar-list.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SnackbarContext=_react.default.createContext(void 0);exports.SnackbarContext=SnackbarContext;var SnackbarProvider=function SnackbarProvider(_ref){var children=_ref.children,ref=_react.default.useRef(null),add=_react.default.useCallback((function(options){var _ref$current;null==ref||null==(_ref$current=ref.current)||_ref$current.add(options)}),[]);return(0,_jsxRuntime.jsxs)(SnackbarContext.Provider,{value:{add},children:[children,(0,_jsxRuntime.jsx)(_View.default,{style:[_StyleSheet.default.absoluteFill,{flexDirection:"row",alignItems:"flex-end",justifyContent:"flex-start",padding:30}],pointerEvents:"none",children:(0,_jsxRuntime.jsx)(_snackbarList.SnackbarList,{ref})})]})};exports.SnackbarProvider=SnackbarProvider;try{SnackbarProvider.displayName="SnackbarProvider",SnackbarProvider.__docgenInfo={description:"",displayName:"SnackbarProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/snackbar/provider.tsx#SnackbarProvider"]={docgenInfo:SnackbarProvider.__docgenInfo,name:"SnackbarProvider",path:"src/snackbar/provider.tsx#SnackbarProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/snackbar/snackbar-list.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.SnackbarList=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),_slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_uniqueId=_interopRequireDefault(__webpack_require__("./node_modules/lodash/uniqueId.js")),_wrap=_interopRequireDefault(__webpack_require__("./node_modules/lodash/wrap.js")),_snackbar=__webpack_require__("./src/snackbar/snackbar.tsx"),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_errorBoundary=_interopRequireDefault(__webpack_require__("./src/error-boundary/index.tsx")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var SnackbarList=React.forwardRef((function SnackbarListBase(_,ref){var _React$useState=React.useState([]),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),snackbarOptions=_React$useState2[0],setSnackbarOptions=_React$useState2[1];return React.useImperativeHandle(ref,(function(){return{add:function add(options){options.onDismiss=(0,_wrap.default)(options.onDismiss,(function(origOnDismiss,id){null==origOnDismiss||origOnDismiss(id),setSnackbarOptions((function(prev){return prev.filter((function(s){return s.id!==id}))}))})),options.id=(0,_uniqueId.default)("snackbar-"),setSnackbarOptions((function(prev){return[].concat((0,_toConsumableArray2.default)(prev),[options])}))}}})),0===snackbarOptions.length?null:(0,_jsxRuntime.jsx)(_box.default,{space:"small",style:{width:"100%"},children:snackbarOptions.map((function(opts,index){return(0,_jsxRuntime.jsx)(_errorBoundary.default,{children:(0,_jsxRuntime.jsx)(_snackbar.Snackbar,Object.assign({},opts))},opts.id)}))})}));exports.SnackbarList=SnackbarList;try{SnackbarList.displayName="SnackbarList",SnackbarList.__docgenInfo={description:"",displayName:"SnackbarList",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/snackbar/snackbar-list.tsx#SnackbarList"]={docgenInfo:SnackbarList.__docgenInfo,name:"SnackbarList",path:"src/snackbar/snackbar-list.tsx#SnackbarList"})}catch(__react_docgen_typescript_loader_error){}},"./src/snackbar/snackbar.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Snackbar=void 0;var React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/index.web.js")),_native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_button=_interopRequireDefault(__webpack_require__("./src/button/index.ts")),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var durationValues={shorter:2500,default:4e3,longer:6e3},Snackbar=function Snackbar(_ref){var id=_ref.id,message=_ref.message,action=_ref.action,_ref$duration=_ref.duration,duration=void 0===_ref$duration?"default":_ref$duration,onDismiss=_ref.onDismiss,_ref$dismissable=_ref.dismissable,dismissable=void 0===_ref$dismissable||_ref$dismissable,type=_ref.type,theme=(0,_native.useTheme)(),progress=(0,_reactNativeReanimated.useSharedValue)(0),dismiss=React.useCallback((function(){onDismiss(id)}),[id,onDismiss]),onActionClick=React.useCallback((function(){action&&action.action&&action.action(),dismiss()}),[action,dismiss]);React.useEffect((function(){progress.value=(0,_reactNativeReanimated.withTiming)(1,{duration:300,easing:_reactNativeReanimated.Easing.bezier(0,0,.58,1)});var timer=setTimeout((function(){null==onDismiss||onDismiss(id)}),durationValues[duration]||durationValues.default);return function(){clearTimeout(timer)}}),[duration,id,onDismiss,progress]);var _f,animatedStyle=(0,_reactNativeReanimated.useAnimatedStyle)(((_f=function _f(){return{transform:[{translateX:(0,_reactNativeReanimated.interpolate)(progress.value,[0,1],[-100,0])}],opacity:progress.value}})._closure={interpolate:_reactNativeReanimated.interpolate,progress},_f.asString="function _f(){const{interpolate,progress}=jsThis._closure;{return{transform:[{translateX:interpolate(progress.value,[0,1],[-100,0])}],opacity:progress.value};}}",_f.__workletHash=7052818071504,_f.__location="/home/runner/work/components/components/src/snackbar/snackbar.tsx (109:40)",_f.__optimalization=3,_f));return(0,_jsxRuntime.jsx)(_reactNativeReanimated.default.View,{style:[{flexDirection:"row"},animatedStyle],children:(0,_jsxRuntime.jsxs)(_box.default,{paddingX:"medium",paddingY:"small",space:"medium",rounding:"large",style:{backgroundColor:type?theme.colors[type]:theme.colors.headerBackground,maxWidth:"fit-content"},horizontal:!0,align:"center",pointerEvents:"auto",children:[(0,_jsxRuntime.jsx)(_text.default,{type:"inverse",style:{flexWrap:"wrap",display:"flex",wordBreak:"break-all"},children:message}),action?(0,_jsxRuntime.jsx)(_button.default,{type:"primary",size:"small",onPress:onActionClick,children:action.label}):null,dismissable?(0,_jsxRuntime.jsx)(_icon.default,{type:"inverse",name:"xmark",onPress:dismiss}):null]})})};exports.Snackbar=Snackbar;try{Snackbar.displayName="Snackbar",Snackbar.__docgenInfo={description:"",displayName:"Snackbar",props:{id:{defaultValue:null,description:"Unique identifier for the snackbar.",name:"id",required:!0,type:{name:"string"}},message:{defaultValue:null,description:"Message to display on the Snackbar.",name:"message",required:!0,type:{name:"string"}},action:{defaultValue:null,description:"Optional action. Clicking it will dismiss the Snackbar.",name:"action",required:!1,type:{name:"{ label: string; action?: (() => void); }"}},duration:{defaultValue:{value:"default"},description:"Duration the Snackbar is displayed.",name:"duration",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"longer"'}]}},onDismiss:{defaultValue:null,description:"Function to call when the Snackbar is dismissed.",name:"onDismiss",required:!0,type:{name:"(id: string) => void"}},dismissable:{defaultValue:{value:"true"},description:"Function to call when the Snackbar is dismissed.",name:"dismissable",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"Changes the background color of the Snackbar.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/snackbar/snackbar.tsx#Snackbar"]={docgenInfo:Snackbar.__docgenInfo,name:"Snackbar",path:"src/snackbar/snackbar.tsx#Snackbar"})}catch(__react_docgen_typescript_loader_error){}},"./src/snackbar/use-snackbar.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useSnackbar=void 0;var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_provider=__webpack_require__("./src/snackbar/provider.tsx");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var useSnackbar=function useSnackbar(defaultOptions){var context=React.useContext(_provider.SnackbarContext);if(!context)throw new Error("useSnackbar must be called within SnackbarProvider");return React.useCallback((function(options){return context.add(Object.assign({},defaultOptions,options))}),[context,defaultOptions])};exports.useSnackbar=useSnackbar;try{useSnackbar.displayName="useSnackbar",useSnackbar.__docgenInfo={description:"Get a function for showing a Snackbar with the specified options.\n\nSimply call the function to show the Snackbar, which will be automatically\ndismissed.",displayName:"useSnackbar",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/snackbar/use-snackbar.tsx#useSnackbar"]={docgenInfo:useSnackbar.__docgenInfo,name:"useSnackbar",path:"src/snackbar/use-snackbar.tsx#useSnackbar"})}catch(__react_docgen_typescript_loader_error){}}}]);