(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[64004,56589],{"./src/draggable3/draggable.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.ColumnResize=exports.BasicUsage=void 0;var _BasicUsage$parameter,_BasicUsage$parameter2,_BasicUsage$parameter3,_ColumnResize$paramet,_ColumnResize$paramet2,_ColumnResize$paramet3,React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js")),_draggable=__webpack_require__("./src/draggable3/draggable.tsx"),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var meta={title:"Components/Draggable3",component:_draggable.Draggable},BasicUsage=exports.BasicUsage=function BasicUsage(props){return(0,_jsxRuntime.jsx)(_View.default,{children:(0,_jsxRuntime.jsx)(_draggable.Draggable,Object.assign({},props,{children:(0,_jsxRuntime.jsx)(_View.default,{style:{width:120,height:120,backgroundColor:"red"}})}))})};BasicUsage.args={min:0,max:300,initialValue:150,onDrag:(0,_addonActions.action)("onDrag"),onDragEnd:(0,_addonActions.action)("onDragEnd"),onDragStart:(0,_addonActions.action)("onDragStart")};var _worklet_3764305095533_init_data={code:'function anonymous(){const{columnRatio}=this.__closure;return{flexBasis:columnRatio.value*100+"%"};}',location:"/home/runner/work/components/components/src/draggable3/draggable.stories.tsx",sourceMap:'{"version":3,"names":["anonymous","columnRatio","__closure","flexBasis","value"],"sources":["/home/runner/work/components/components/src/draggable3/draggable.stories.tsx"],"mappings":"AA2CuC,SAAAA,UAAA,QAAAC,WAAA,OAAAC,SAAA,OAAO,CAC1CC,SAAS,CAAKF,WAAW,CAACG,KAAK,CAAG,GAAI,IACxC,CAAC"}',version:"3.5.4"},ColumnResize=exports.ColumnResize=function ColumnResize(props){var _e,anonymous,columnRatio=(0,_reactNativeReanimated.useSharedValue)(.5),columnWidth=(0,_reactNativeReanimated.useSharedValue)(0),containerWidth=(0,_reactNativeReanimated.useSharedValue)(0),isDragging=React.useRef(!1),columnStyle=(0,_reactNativeReanimated.useAnimatedStyle)((_e=[new __webpack_require__.g.Error,-2,-27],(anonymous=function anonymous(){return{flexBasis:"".concat(100*columnRatio.value,"%")}}).__closure={columnRatio},anonymous.__initData=_worklet_3764305095533_init_data,anonymous.__workletHash=3764305095533,anonymous.__stackDetails=_e,anonymous)),onContainerLayout=React.useCallback((function(e){isDragging.current||(containerWidth.value=e.nativeEvent.layout.width)}),[]),onColumnLayout=React.useCallback((function(e){isDragging.current||(columnWidth.value=e.nativeEvent.layout.width)}),[]),onDrag=React.useCallback((function(value){console.log(value),console.log(columnWidth.value),console.log(containerWidth.value);var ratio=(columnWidth.value+value)/containerWidth.value;console.log(ratio),columnRatio.value=ratio}),[columnRatio,columnWidth.value,containerWidth.value]);return(0,_jsxRuntime.jsxs)(_View.default,{style:{flexDirection:"row",flex:1},onLayout:onContainerLayout,children:[(0,_jsxRuntime.jsx)(_reactNativeReanimated.default.View,{style:[{flexGrow:0,flexShrink:0,backgroundColor:"red",height:100,width:100},columnStyle],onLayout:onColumnLayout}),(0,_jsxRuntime.jsx)(_View.default,{style:{width:20,justifyContent:"center"},children:(0,_jsxRuntime.jsx)(_draggable.Draggable,{min:-100,max:100,initialValue:50,onDrag,onDragStart:function onDragStart(){isDragging.current=!0},onDragEnd:function onDragEnd(){isDragging.current=!1},children:(0,_jsxRuntime.jsx)(_icon.default,{name:"more-vert"})})}),(0,_jsxRuntime.jsx)(_View.default,{style:{flex:1,backgroundColor:"black",height:100}})]})};exports.default=meta;BasicUsage.parameters=Object.assign({},BasicUsage.parameters,{docs:Object.assign({},null==(_BasicUsage$parameter=BasicUsage.parameters)?void 0:_BasicUsage$parameter.docs,{source:Object.assign({originalSource:"(props: DraggableProps) => {\n  return <View>\n            <Draggable {...props}>\n                <View style={{\n        width: 120,\n        height: 120,\n        backgroundColor: 'red'\n      }} />\n            </Draggable>\n        </View>;\n}"},null==(_BasicUsage$parameter2=BasicUsage.parameters)||null==(_BasicUsage$parameter3=_BasicUsage$parameter2.docs)?void 0:_BasicUsage$parameter3.source)})}),ColumnResize.parameters=Object.assign({},ColumnResize.parameters,{docs:Object.assign({},null==(_ColumnResize$paramet=ColumnResize.parameters)?void 0:_ColumnResize$paramet.docs,{source:Object.assign({originalSource:"(props: DraggableProps) => {\n  const columnRatio = useSharedValue(0.5);\n  const columnWidth = useSharedValue(0);\n  const containerWidth = useSharedValue(0);\n  const isDragging = React.useRef(false);\n  const columnStyle = useAnimatedStyle(() => ({\n    flexBasis: `${columnRatio.value * 100}%`\n  }));\n  const onContainerLayout = React.useCallback((e: LayoutChangeEvent) => {\n    if (!isDragging.current) {\n      containerWidth.value = e.nativeEvent.layout.width;\n    }\n  }, []);\n  const onColumnLayout = React.useCallback((e: LayoutChangeEvent) => {\n    if (!isDragging.current) {\n      columnWidth.value = e.nativeEvent.layout.width;\n    }\n  }, []);\n  const onDrag = React.useCallback(value => {\n    console.log(value);\n    console.log(columnWidth.value);\n    console.log(containerWidth.value);\n    const ratio = (columnWidth.value + value) / containerWidth.value;\n    console.log(ratio);\n    columnRatio.value = ratio;\n  }, [columnRatio, columnWidth.value, containerWidth.value]);\n  return <View style={{\n    flexDirection: 'row',\n    flex: 1\n  }} onLayout={onContainerLayout}>\n            <Animated.View style={[{\n      flexGrow: 0,\n      flexShrink: 0,\n      backgroundColor: 'red',\n      height: 100,\n      width: 100\n    }, columnStyle]} onLayout={onColumnLayout} />\n            <View style={{\n      width: 20,\n      justifyContent: 'center'\n    }}>\n                <Draggable min={-100} max={100} initialValue={50} onDrag={onDrag} onDragStart={() => {\n        isDragging.current = true;\n      }} onDragEnd={() => {\n        isDragging.current = false;\n      }}>\n                    <Icon name=\"more-vert\" />\n                </Draggable>\n            </View>\n            <View style={{\n      flex: 1,\n      backgroundColor: 'black',\n      height: 100\n    }} />\n        </View>;\n}"},null==(_ColumnResize$paramet2=ColumnResize.parameters)||null==(_ColumnResize$paramet3=_ColumnResize$paramet2.docs)?void 0:_ColumnResize$paramet3.source)})});try{BasicUsage.displayName="BasicUsage",BasicUsage.__docgenInfo={description:"",displayName:"BasicUsage",props:{initialValue:{defaultValue:null,description:"",name:"initialValue",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"((value: number) => void)"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"(() => void)"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"((value: number) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/draggable3/draggable.stories.tsx#BasicUsage"]={docgenInfo:BasicUsage.__docgenInfo,name:"BasicUsage",path:"src/draggable3/draggable.stories.tsx#BasicUsage"})}catch(__react_docgen_typescript_loader_error){}try{ColumnResize.displayName="ColumnResize",ColumnResize.__docgenInfo={description:"",displayName:"ColumnResize",props:{initialValue:{defaultValue:null,description:"",name:"initialValue",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"((value: number) => void)"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"(() => void)"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"((value: number) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/draggable3/draggable.stories.tsx#ColumnResize"]={docgenInfo:ColumnResize.__docgenInfo,name:"ColumnResize",path:"src/draggable3/draggable.stories.tsx#ColumnResize"})}catch(__react_docgen_typescript_loader_error){}},"./src/draggable3/draggable.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Draggable=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _reactNativeReanimated=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js")),_reactNativeGestureHandler=__webpack_require__("./node_modules/react-native-gesture-handler/lib/module/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var _e,anonymous,_worklet_774661967454_init_data={code:"function anonymous(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound);}",location:"/home/runner/work/components/components/src/draggable3/draggable.tsx",sourceMap:'{"version":3,"names":["anonymous","value","lowerBound","upperBound","Math","min","max"],"sources":["/home/runner/work/components/components/src/draggable3/draggable.tsx"],"mappings":"AAWc,QAAC,CAAAA,SAAeA,CAAAC,KAAA,CAAAC,UAAoB,CAAAC,UAAuB,EAGxE,MAAO,CAAAC,IAAI,CAACC,GAAG,CAACD,IAAI,CAACE,GAAG,CAACJ,UAAU,CAAED,KAAK,CAAC,CAAEE,UAAU,CAAC,CACzD"}',version:"3.5.4"},clamp=(_e=[new __webpack_require__.g.Error,1,-27],(anonymous=function anonymous(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound)}).__closure={},anonymous.__initData=_worklet_774661967454_init_data,anonymous.__workletHash=774661967454,anonymous.__stackDetails=_e,anonymous),_worklet_7975134349067_init_data={code:"function anonymous(value,precision=0){const p=10**precision;return Math.round(value*p)/p;}",location:"/home/runner/work/components/components/src/draggable3/draggable.tsx",sourceMap:'{"version":3,"names":["anonymous","value","precision","p","Math","round"],"sources":["/home/runner/work/components/components/src/draggable3/draggable.tsx"],"mappings":"AAiBc,QAAC,CAAAA,SAAeA,CAAAC,KAAA,CAAAC,SAAkB,IAG/C,KAAM,CAAAC,CAAC,CAAG,EAAE,EAAID,SAAS,CACzB,MAAO,CAAAE,IAAI,CAACC,KAAK,CAACJ,KAAK,CAAGE,CAAC,CAAC,CAAGA,CAAC,CACjC"}',version:"3.5.4"},round=function(){var _e=[new __webpack_require__.g.Error,1,-27],anonymous=function anonymous(value){var precision=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,p=Math.pow(10,precision);return Math.round(value*p)/p};return anonymous.__closure={},anonymous.__initData=_worklet_7975134349067_init_data,anonymous.__workletHash=7975134349067,anonymous.__stackDetails=_e,anonymous}(),_worklet_14738563109626_init_data={code:"function anonymous(){const{sliderWidth,max,min}=this.__closure;return sliderWidth.value/(max-min);}",location:"/home/runner/work/components/components/src/draggable3/draggable.tsx",sourceMap:'{"version":3,"names":["anonymous","sliderWidth","max","min","__closure","value"],"sources":["/home/runner/work/components/components/src/draggable3/draggable.tsx"],"mappings":"AAgDuC,SAAAA,UAAA,QAAAC,WAAA,CAAAC,GAAA,CAAAC,GAAA,OAAAC,SAAA,OAAM,CAAAH,WAAY,CAAAI,KAAK,EAAIH,GAAG,CAAGC,GAAG"}',version:"3.5.4"},_worklet_1027228614368_init_data={code:"function anonymous(x){const{round,onePointWidth,step}=this.__closure;return round(x/onePointWidth.value/step)*step;}",location:"/home/runner/work/components/components/src/draggable3/draggable.tsx",sourceMap:'{"version":3,"names":["anonymous","x","round","onePointWidth","step","__closure","value"],"sources":["/home/runner/work/components/components/src/draggable3/draggable.tsx"],"mappings":"AAkDgC,QAAC,CAAAA,SAAcA,CAAAC,CAAA,QAAAC,KAAA,CAAAC,aAAA,CAAAC,IAAA,OAAAC,SAAA,CAG7C,MAAO,CAAAH,KAAK,CAACD,CAAC,CAAGE,aAAa,CAACG,KAAK,CAAGF,IAAI,CAAC,CAAGA,IAAI,CACpD"}',version:"3.5.4"},_worklet_15129552375390_init_data={code:"function anonymous(){const{onePointWidth,initialValue,calculateAbsoluteValue,translateX,min}=this.__closure;return onePointWidth.value===0?initialValue:calculateAbsoluteValue(translateX.value)+min;}",location:"/home/runner/work/components/components/src/draggable3/draggable.tsx",sourceMap:'{"version":3,"names":["anonymous","onePointWidth","initialValue","calculateAbsoluteValue","translateX","min","__closure","value"],"sources":["/home/runner/work/components/components/src/draggable3/draggable.tsx"],"mappings":"AAwD+B,SAAAA,UAAA,QAAAC,aAAA,CAAAC,YAAA,CAAAC,sBAAA,CAAAC,UAAA,CAAAC,GAAA,OAAAC,SAAA,OAC7B,CAAAL,aAAc,CAAAM,KAAK,GAAM,EAAGL,YAAY,CAAGC,sBAAuB,CAAAC,UAAW,CAAAG,KAAM,EAAGF,GAAA"}',version:"3.5.4"},_worklet_4288291035588_init_data={code:"function anonymous(_,ctx){const{translateX,onDragStart}=this.__closure;ctx.startX=translateX.value;if(onDragStart){onDragStart();}}",location:"/home/runner/work/components/components/src/draggable3/draggable.tsx",sourceMap:'{"version":3,"names":["anonymous","_","ctx","translateX","onDragStart","__closure","startX","value"],"sources":["/home/runner/work/components/components/src/draggable3/draggable.tsx"],"mappings":"AAgEW,QAAC,CAAAA,SAAMA,CAAKC,CAAA,CAAAC,GAAA,QAAAC,UAAA,CAAAC,WAAA,OAAAC,SAAA,CACpBH,GAAG,CAACI,MAAM,CAAGH,UAAU,CAACI,KAAK,CAC7B,GAAIH,WAAW,CAAE,CAChBA,WAAW,CAAC,CAAC,CACd,CACD"}',version:"3.5.4"},_worklet_10330379659970_init_data={code:"function anonymous(event,ctx){const{isActivePanGesture,translateX,clamp,min,max,onDrag}=this.__closure;isActivePanGesture.value=true;translateX.value=clamp(ctx.startX+event.translationX,min,max);if(onDrag){onDrag(translateX.value);}}",location:"/home/runner/work/components/components/src/draggable3/draggable.tsx",sourceMap:'{"version":3,"names":["anonymous","event","ctx","isActivePanGesture","translateX","clamp","min","max","onDrag","__closure","value","startX","translationX"],"sources":["/home/runner/work/components/components/src/draggable3/draggable.tsx"],"mappings":"AAsEY,QAAC,CAAAA,SAAOA,CAAAC,KAAQ,CAAAC,GAAA,QAAAC,kBAAA,CAAAC,UAAA,CAAAC,KAAA,CAAAC,GAAA,CAAAC,GAAA,CAAAC,MAAA,OAAAC,SAAA,CACzBN,kBAAkB,CAACO,KAAK,CAAG,IAAI,CAC/BN,UAAU,CAACM,KAAK,CAAGL,KAAK,CAACH,GAAG,CAACS,MAAM,CAAGV,KAAK,CAACW,YAAY,CAAEN,GAAG,CAAEC,GAAG,CAAC,CACnE,GAAIC,MAAM,CAAE,CACXA,MAAM,CAACJ,UAAU,CAACM,KAAK,CAAC,CACzB,CACD"}',version:"3.5.4"},_worklet_4572082714874_init_data={code:"function anonymous(){const{isActivePanGesture,onDragEnd,translateX}=this.__closure;isActivePanGesture.value=false;if(onDragEnd){onDragEnd(translateX.value);}}",location:"/home/runner/work/components/components/src/draggable3/draggable.tsx",sourceMap:'{"version":3,"names":["anonymous","isActivePanGesture","onDragEnd","translateX","__closure","value"],"sources":["/home/runner/work/components/components/src/draggable3/draggable.tsx"],"mappings":"AA6ES,SAAAA,SAAMA,CAAA,QAAAC,kBAAA,CAAAC,SAAA,CAAAC,UAAA,OAAAC,SAAA,CACZH,kBAAkB,CAACI,KAAK,CAAG,KAAK,CAChC,GAAIH,SAAS,CAAE,CACdA,SAAS,CAACC,UAAU,CAACE,KAAK,CAAC,CAC5B,CAED"}',version:"3.5.4"},_worklet_1331526031454_init_data={code:"function anonymous(){const{translateX}=this.__closure;return{left:translateX.value};}",location:"/home/runner/work/components/components/src/draggable3/draggable.tsx",sourceMap:'{"version":3,"names":["anonymous","translateX","__closure","left","value"],"sources":["/home/runner/work/components/components/src/draggable3/draggable.tsx"],"mappings":"AAsFoC,SAAAA,UAAA,QAAAC,UAAA,OAAAC,SAAA,OAAO,CACzCC,IAAI,CAAEF,UAAU,CAACG,KAClB,CAAC"}',version:"3.5.4"},Draggable=exports.Draggable=function Draggable(_ref){var children=_ref.children,_ref$initialValue=_ref.initialValue,initialValue=void 0===_ref$initialValue?0:_ref$initialValue,_ref$step=_ref.step,step=void 0===_ref$step?1:_ref$step,_ref$min=_ref.min,min=void 0===_ref$min?0:_ref$min,_ref$max=_ref.max,max=void 0===_ref$max?100:_ref$max,onDrag=_ref.onDrag,onDragStart=_ref.onDragStart,onDragEnd=_ref.onDragEnd,translateX=(0,_reactNativeReanimated.useSharedValue)(initialValue),isActivePanGesture=(0,_reactNativeReanimated.useSharedValue)(!1),sliderWidth=(0,_reactNativeReanimated.useSharedValue)(max-min),onePointWidth=(0,_reactNativeReanimated.useDerivedValue)(function(){var _e=[new __webpack_require__.g.Error,-4,-27],anonymous=function anonymous(){return sliderWidth.value/(max-min)};return anonymous.__closure={sliderWidth,max,min},anonymous.__initData=_worklet_14738563109626_init_data,anonymous.__workletHash=0xd6796d192fa,anonymous.__stackDetails=_e,anonymous}()),calculateAbsoluteValue=function(){var _e=[new __webpack_require__.g.Error,-4,-27],anonymous=function anonymous(x){return round(x/onePointWidth.value/step)*step};return anonymous.__closure={round,onePointWidth,step},anonymous.__initData=_worklet_1027228614368_init_data,anonymous.__workletHash=0xef2b98bee0,anonymous.__stackDetails=_e,anonymous}(),panGestureHandler=((0,_reactNativeReanimated.useDerivedValue)(function(){var _e=[new __webpack_require__.g.Error,-6,-27],anonymous=function anonymous(){return 0===onePointWidth.value?initialValue:calculateAbsoluteValue(translateX.value)+min};return anonymous.__closure={onePointWidth,initialValue,calculateAbsoluteValue,translateX,min},anonymous.__initData=_worklet_15129552375390_init_data,anonymous.__workletHash=0xdc29f984e5e,anonymous.__stackDetails=_e,anonymous}()),(0,_reactNativeReanimated.useAnimatedGestureHandler)({onStart:function(){var _e=[new __webpack_require__.g.Error,-3,-27],anonymous=function anonymous(_,ctx){ctx.startX=translateX.value,onDragStart&&onDragStart()};return anonymous.__closure={translateX,onDragStart},anonymous.__initData=_worklet_4288291035588_init_data,anonymous.__workletHash=4288291035588,anonymous.__stackDetails=_e,anonymous}(),onActive:function(){var _e=[new __webpack_require__.g.Error,-7,-27],anonymous=function anonymous(event,ctx){isActivePanGesture.value=!0,translateX.value=clamp(ctx.startX+event.translationX,min,max),onDrag&&onDrag(translateX.value)};return anonymous.__closure={isActivePanGesture,translateX,clamp,min,max,onDrag},anonymous.__initData=_worklet_10330379659970_init_data,anonymous.__workletHash=0x9653a9c2ac2,anonymous.__stackDetails=_e,anonymous}(),onEnd:function(){var _e=[new __webpack_require__.g.Error,-4,-27],anonymous=function anonymous(){isActivePanGesture.value=!1,onDragEnd&&onDragEnd(translateX.value)};return anonymous.__closure={isActivePanGesture,onDragEnd,translateX},anonymous.__initData=_worklet_4572082714874_init_data,anonymous.__workletHash=4572082714874,anonymous.__stackDetails=_e,anonymous}()}));(0,_reactNativeReanimated.useAnimatedStyle)(function(){var _e=[new __webpack_require__.g.Error,-2,-27],anonymous=function anonymous(){return{left:translateX.value}};return anonymous.__closure={translateX},anonymous.__initData=_worklet_1331526031454_init_data,anonymous.__workletHash=1331526031454,anonymous.__stackDetails=_e,anonymous}());return(0,_jsxRuntime.jsx)(_reactNativeGestureHandler.PanGestureHandler,{onGestureEvent:panGestureHandler,children:(0,_jsxRuntime.jsx)(_reactNativeReanimated.default.View,{style:[{position:"absolute"}],children})})};exports.default=Draggable;try{Draggable.displayName="Draggable",Draggable.__docgenInfo={description:"",displayName:"Draggable",props:{initialValue:{defaultValue:{value:"0"},description:"",name:"initialValue",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"((value: number) => void)"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"(() => void)"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"((value: number) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/draggable3/draggable.tsx#Draggable"]={docgenInfo:Draggable.__docgenInfo,name:"Draggable",path:"src/draggable3/draggable.tsx#Draggable"})}catch(__react_docgen_typescript_loader_error){}try{draggable.displayName="draggable",draggable.__docgenInfo={description:"",displayName:"draggable",props:{initialValue:{defaultValue:{value:"0"},description:"",name:"initialValue",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"((value: number) => void)"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"(() => void)"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"((value: number) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/draggable3/draggable.tsx#draggable"]={docgenInfo:draggable.__docgenInfo,name:"draggable",path:"src/draggable3/draggable.tsx#draggable"})}catch(__react_docgen_typescript_loader_error){}},"./src/icon/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _icon.Icon}});var _icon=__webpack_require__("./src/icon/icon.tsx")}}]);