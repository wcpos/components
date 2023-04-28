(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[75728,93667],{"./src/gesture-detector/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"GestureEventProvider",{enumerable:!0,get:function get(){return _provider.default}}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _useGesture.useGesture}});var _provider=_interopRequireDefault(__webpack_require__("./src/gesture-detector/provider.tsx")),_useGesture=__webpack_require__("./src/gesture-detector/use-gesture.ts")},"./src/gesture-detector/provider.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.GestureContext=void 0;var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_reactNativeGestureHandler=__webpack_require__("./node_modules/react-native-gesture-handler/lib/module/index.js"),_rxjs=__webpack_require__("./node_modules/rxjs/dist/cjs/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var GestureContext=React.createContext(null);exports.GestureContext=GestureContext;var tapEventSubject=new _rxjs.Subject,_default=function GestureEventProvider(_ref){var children=_ref.children,gesture=React.useMemo((function(){return _reactNativeGestureHandler.Gesture.Tap().maxDuration(250).onStart(((_f=function _f(event){tapEventSubject.next(event)})._closure={tapEventSubject:{next:tapEventSubject.next}},_f.asString="function _f(event){const{tapEventSubject}=jsThis._closure;{tapEventSubject.next(event);}}",_f.__workletHash=0xfb1e2dabc94,_f.__location="/home/runner/work/components/components/src/gesture-detector/provider.tsx (32:13)",_f));var _f}),[]),value=React.useMemo((function(){return{tapEvent$:tapEventSubject.asObservable()}}),[]);return(0,_jsxRuntime.jsx)(GestureContext.Provider,{value,children:(0,_jsxRuntime.jsx)(_reactNativeGestureHandler.GestureDetector,{gesture,children:(0,_jsxRuntime.jsx)(_View.default,{style:{flex:1},children})})})};exports.default=_default;try{provider.displayName="provider",provider.__docgenInfo={description:"",displayName:"provider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/gesture-detector/provider.tsx#provider"]={docgenInfo:provider.__docgenInfo,name:"provider",path:"src/gesture-detector/provider.tsx#provider"})}catch(__react_docgen_typescript_loader_error){}},"./src/gesture-detector/use-gesture.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useGesture=void 0;var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_provider=__webpack_require__("./src/gesture-detector/provider.tsx");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}exports.useGesture=function useGesture(){var context=React.useContext(_provider.GestureContext);if(!context)throw new Error("useGesture must be called within GestureEventProvider");return context}},"./src/popover/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _content=__webpack_require__("./src/popover/content.tsx"),_popover=__webpack_require__("./src/popover/popover.tsx"),_target=__webpack_require__("./src/popover/target.tsx"),_default=Object.assign(_popover.Popover,{Target:_target.Target,Content:_content.Content});exports.default=_default},"./src/popover/popover.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Popover=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_observableHooks=__webpack_require__("./node_modules/observable-hooks/dist/esm/index.js"),_reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/index.web.js"),_content=__webpack_require__("./src/popover/content.tsx"),_context=__webpack_require__("./src/popover/context.ts"),_helpers=__webpack_require__("./src/popover/helpers.ts"),_target=__webpack_require__("./src/popover/target.tsx"),_gestureDetector=_interopRequireDefault(__webpack_require__("./src/gesture-detector/index.ts")),_portal=_interopRequireDefault(__webpack_require__("./src/portal/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","closeOnPressOutside","defaultOpened","matchWidth","onChange","onClose","onOpen","opened","placement","trigger","withArrow","style"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Popover=function Popover(_ref){var children=_ref.children,_ref$closeOnPressOuts=_ref.closeOnPressOutside,closeOnPressOutside=void 0===_ref$closeOnPressOuts||_ref$closeOnPressOuts,_ref$matchWidth=(_ref.defaultOpened,_ref.matchWidth),matchWidth=void 0!==_ref$matchWidth&&_ref$matchWidth,onClose=(_ref.onChange,_ref.onClose),onOpen=_ref.onOpen,_ref$opened=_ref.opened,opened=void 0!==_ref$opened&&_ref$opened,_ref$placement=_ref.placement,placement=void 0===_ref$placement?"bottom":_ref$placement,_ref$trigger=_ref.trigger,trigger=void 0===_ref$trigger?"press":_ref$trigger,_ref$withArrow=_ref.withArrow,withArrow=void 0===_ref$withArrow||_ref$withArrow,props=(_ref.style,(0,_objectWithoutProperties2.default)(_ref,_excluded)),_React$useState=React.useState(props.primaryAction),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),primaryAction=_React$useState2[0],setPrimaryAction=_React$useState2[1],_React$useState3=React.useState(props.secondaryActions),_React$useState4=(0,_slicedToArray2.default)(_React$useState3,2),secondaryActions=_React$useState4[0],setSecondaryActions=_React$useState4[1],targetMeasurements=(0,_reactNativeReanimated.useSharedValue)({x:0,y:0,width:0,height:0,pageX:0,pageY:0}),contentMeasurements=(0,_reactNativeReanimated.useSharedValue)({x:0,y:0,width:0,height:0,pageX:0,pageY:0}),tapEvent$=(0,_gestureDetector.default)().tapEvent$;(0,_observableHooks.useSubscription)(tapEvent$,(function(event){if(opened&&closeOnPressOutside&&targetMeasurements.value&&contentMeasurements.value){var targetPress=(0,_helpers.isPressInsideElement)(event,targetMeasurements.value),contentPress=(0,_helpers.isPressInsideElement)(event,contentMeasurements.value);targetPress||contentPress||onClose&&onClose()}}));var context=React.useMemo((function(){return{closeOnPressOutside,contentMeasurements,matchWidth,placement,targetMeasurements,trigger,withArrow,withinPortal:true,primaryAction,setPrimaryAction,secondaryActions,setSecondaryActions,onOpen,onClose}}),[closeOnPressOutside,contentMeasurements,matchWidth,onClose,onOpen,placement,primaryAction,secondaryActions,targetMeasurements,trigger,withArrow,true]);return(0,_jsxRuntime.jsx)(_context.PopoverContext.Provider,{value:context,children:(0,_jsxRuntime.jsx)(_View.default,{style:{position:"relative"},children:React.Children.map(children,(function(child){return child.type===_target.Target?child:child.type===_content.Content&&opened?(0,_jsxRuntime.jsx)(_portal.default,{keyPrefix:"Popover",children:(0,_jsxRuntime.jsx)(_context.PortalContext.Provider,{value:context,children:child})}):void 0}))})})};exports.Popover=Popover;try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{children:{defaultValue:null,description:"Popover.Target and Popover.Content components",name:"children",required:!0,type:{name:"ReactElement<PopoverTargetProps | PopoverContentProps, string | JSXElementConstructor<any>>[]"}},placement:{defaultValue:{value:"bottom"},description:'Preferred placement of the Popover. The Popover will try to place itself according to this\nproperty. However, if there is not enough space left there to show up, it will show itself\nin opposite direction.\n\nFor example, if we set `placement="top"`, and there is not enough space for the Popover\nto show itself above the triggering view, it will show at the bottom of it.',name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'}]}},opened:{defaultValue:{value:"false"},description:"Controlled menu opened state. Note: Popover can be controlled or uncontrolled",name:"opened",required:!1,type:{name:"boolean"}},defaultOpened:{defaultValue:null,description:"Uncontrolled menu initial opened state",name:"defaultOpened",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Called when menu opened state changes",name:"onChange",required:!1,type:{name:"((opened: boolean) => void)"}},onOpen:{defaultValue:null,description:"Called when Menu is opened\nCalled when popover opens",name:"onOpen",required:!1,type:{name:"{ (): void; (): void; }"}},onClose:{defaultValue:null,description:"Called when Menu is closed\nCalled when popover closes",name:"onClose",required:!1,type:{name:"{ (): void; (): void; }"}},trigger:{defaultValue:{value:"press"},description:"Method for activating an uncontrolled Popover.",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"longpress"'},{value:'"press"'},{value:'"hover"'}]}},withArrow:{defaultValue:{value:"true"},description:"Show arrow pointing to the target.",name:"withArrow",required:!1,type:{name:"boolean"}},withinPortal:{defaultValue:null,description:"Determines whether Popover should be rendered within Portal, defaults to true",name:"withinPortal",required:!1,type:{name:"boolean"}},closeOnPressOutside:{defaultValue:{value:"true"},description:"Determines whether dropdown should be closed on outside clicks, default to true",name:"closeOnPressOutside",required:!1,type:{name:"boolean"}},matchWidth:{defaultValue:{value:"false"},description:"Force popover to match the width of the triggering view.",name:"matchWidth",required:!1,type:{name:"boolean"}},primaryAction:{defaultValue:null,description:"",name:"primaryAction",required:!1,type:{name:"PopoverFooterActionProps"}},secondaryActions:{defaultValue:null,description:"",name:"secondaryActions",required:!1,type:{name:"PopoverFooterActionProps[]"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/popover/popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"src/popover/popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}},"./src/popover/target.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Target=void 0;var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_delay=_interopRequireDefault(__webpack_require__("./node_modules/lodash/delay.js")),_isFunction=_interopRequireDefault(__webpack_require__("./node_modules/lodash/isFunction.js")),_pick=_interopRequireDefault(__webpack_require__("./node_modules/lodash/pick.js")),_useMeasure2=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/hooks/src/use-measure/index.ts")),_context=__webpack_require__("./src/popover/context.ts"),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Target=function Target(_ref){var children=_ref.children,_usePopover=(0,_context.usePopover)(),targetMeasurements=_usePopover.targetMeasurements,onOpen=_usePopover.onOpen,onClose=_usePopover.onClose,trigger=_usePopover.trigger,_useMeasure=(0,_useMeasure2.default)({onMeasure:function onMeasure(val){targetMeasurements.value=val}}),MeasureWrapper=_useMeasure.MeasureWrapper,forceMeasure=_useMeasure.forceMeasure,handleOpen=React.useCallback((function(){var delayTime=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;forceMeasure(),(0,_isFunction.default)(onOpen)&&(0,_delay.default)(onOpen,delayTime)}),[forceMeasure,onOpen]),triggerProps=React.isValidElement(children)?(0,_pick.default)(children.props,["onPress","onLongPress","onHoverIn","onHoverOut"]):{},wrappedTriggerProps={onPress:function onPress(){"press"===trigger&&handleOpen(),triggerProps.onPress&&triggerProps.onPress()},onLongPress:function onLongPress(){"longpress"===trigger&&handleOpen(),triggerProps.onLongPress&&triggerProps.onLongPress()},onHoverIn:function onHoverIn(){"hover"===trigger&&handleOpen(20),triggerProps.onHoverIn&&triggerProps.onHoverIn()},onHoverOut:function onHoverOut(){"hover"===trigger&&onClose&&(0,_delay.default)(onClose,25),triggerProps.onHoverOut&&triggerProps.onHoverOut()}},pressableChild=React.isValidElement(children)&&Object.keys(triggerProps).length>0?React.cloneElement(children,Object.assign({},wrappedTriggerProps)):React.createElement(_pressable.default,Object.assign({},wrappedTriggerProps,{style:{flex:1,flexDirection:"row"}}),children);return(0,_jsxRuntime.jsx)(MeasureWrapper,{children:pressableChild})};exports.Target=Target;try{Target.displayName="Target",Target.__docgenInfo={description:"",displayName:"Target",props:{children:{defaultValue:null,description:"The content which will trigger the Popover. The Popover will be anchored to this component.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/popover/target.tsx#Target"]={docgenInfo:Target.__docgenInfo,name:"Target",path:"src/popover/target.tsx#Target"})}catch(__react_docgen_typescript_loader_error){}},"./src/portal/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _manager=_interopRequireDefault(__webpack_require__("./src/portal/manager.tsx")),_portal=_interopRequireDefault(__webpack_require__("./src/portal/portal.tsx")),_provider=_interopRequireDefault(__webpack_require__("./src/portal/provider.tsx")),_default=Object.assign(_portal.default,{Provider:_provider.default,Manager:_manager.default});exports.default=_default},"./src/portal/manager.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_values=_interopRequireDefault(__webpack_require__("./node_modules/lodash/values.js")),_provider=__webpack_require__("./src/portal/provider.tsx"),_errorBoundary=_interopRequireDefault(__webpack_require__("./src/error-boundary/index.tsx")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var _default=function Manager(){var components=React.useContext(_provider.PortalContext).components;return(0,_jsxRuntime.jsx)(_errorBoundary.default,{children:(0,_values.default)(components)})};exports.default=_default},"./src/portal/portal.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_uniqueId=_interopRequireDefault(__webpack_require__("./node_modules/lodash/uniqueId.js")),_provider=__webpack_require__("./src/portal/provider.tsx");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var _default=function Portal(_ref){var children=_ref.children,_ref$keyPrefix=_ref.keyPrefix,keyPrefix=void 0===_ref$keyPrefix?"":_ref$keyPrefix,key=React.useMemo((function(){return(0,_uniqueId.default)(keyPrefix)}),[keyPrefix]),setComponent=React.useContext(_provider.PortalContext).setComponent;return React.useEffect((function(){return setComponent(key,children)}),[children,setComponent,key]),React.useEffect((function(){return function(){setComponent(key,null)}}),[]),null};exports.default=_default;try{portal.displayName="portal",portal.__docgenInfo={description:"",displayName:"portal",props:{keyPrefix:{defaultValue:{value:""},description:"",name:"keyPrefix",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/portal/portal.tsx#portal"]={docgenInfo:portal.__docgenInfo,name:"portal",path:"src/portal/portal.tsx#portal"})}catch(__react_docgen_typescript_loader_error){}},"./src/portal/provider.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.PortalContext=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js")),_slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var PortalContext=React.createContext({components:{},setComponent:function setComponent(){}});exports.PortalContext=PortalContext;var _default=function Provider(_ref){var children=_ref.children,_React$useState=React.useState({}),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),components=_React$useState2[0],setComponents=_React$useState2[1],setComponent=React.useCallback((function(key,component){setComponents((function(prev){return Object.assign({},prev,(0,_defineProperty2.default)({},key,component||null))}))}),[setComponents]);return(0,_jsxRuntime.jsx)(PortalContext.Provider,{value:{components,setComponent},children})};exports.default=_default;try{provider.displayName="provider",provider.__docgenInfo={description:"",displayName:"provider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/portal/provider.tsx#provider"]={docgenInfo:provider.__docgenInfo,name:"provider",path:"src/portal/provider.tsx#provider"})}catch(__react_docgen_typescript_loader_error){}}}]);