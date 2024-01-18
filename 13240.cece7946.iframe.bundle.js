(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[13240,99420,53670,72851],{"./node_modules/lodash/_assignValue.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseAssignValue=__webpack_require__("./node_modules/lodash/_baseAssignValue.js"),eq=__webpack_require__("./node_modules/lodash/eq.js"),hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function assignValue(object,key,value){var objValue=object[key];hasOwnProperty.call(object,key)&&eq(objValue,value)&&(void 0!==value||key in object)||baseAssignValue(object,key,value)}},"./node_modules/lodash/_baseDelay.js":module=>{module.exports=function baseDelay(func,wait,args){if("function"!=typeof func)throw new TypeError("Expected a function");return setTimeout((function(){func.apply(void 0,args)}),wait)}},"./node_modules/lodash/_baseFlatten.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayPush=__webpack_require__("./node_modules/lodash/_arrayPush.js"),isFlattenable=__webpack_require__("./node_modules/lodash/_isFlattenable.js");module.exports=function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;for(predicate||(predicate=isFlattenable),result||(result=[]);++index<length;){var value=array[index];depth>0&&predicate(value)?depth>1?baseFlatten(value,depth-1,predicate,isStrict,result):arrayPush(result,value):isStrict||(result[result.length]=value)}return result}},"./node_modules/lodash/_basePick.js":(module,__unused_webpack_exports,__webpack_require__)=>{var basePickBy=__webpack_require__("./node_modules/lodash/_basePickBy.js"),hasIn=__webpack_require__("./node_modules/lodash/hasIn.js");module.exports=function basePick(object,paths){return basePickBy(object,paths,(function(value,path){return hasIn(object,path)}))}},"./node_modules/lodash/_basePickBy.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseGet=__webpack_require__("./node_modules/lodash/_baseGet.js"),baseSet=__webpack_require__("./node_modules/lodash/_baseSet.js"),castPath=__webpack_require__("./node_modules/lodash/_castPath.js");module.exports=function basePickBy(object,paths,predicate){for(var index=-1,length=paths.length,result={};++index<length;){var path=paths[index],value=baseGet(object,path);predicate(value,path)&&baseSet(result,castPath(path,object),value)}return result}},"./node_modules/lodash/_baseSet.js":(module,__unused_webpack_exports,__webpack_require__)=>{var assignValue=__webpack_require__("./node_modules/lodash/_assignValue.js"),castPath=__webpack_require__("./node_modules/lodash/_castPath.js"),isIndex=__webpack_require__("./node_modules/lodash/_isIndex.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),toKey=__webpack_require__("./node_modules/lodash/_toKey.js");module.exports=function baseSet(object,path,value,customizer){if(!isObject(object))return object;for(var index=-1,length=(path=castPath(path,object)).length,lastIndex=length-1,nested=object;null!=nested&&++index<length;){var key=toKey(path[index]),newValue=value;if("__proto__"===key||"constructor"===key||"prototype"===key)return object;if(index!=lastIndex){var objValue=nested[key];void 0===(newValue=customizer?customizer(objValue,key,nested):void 0)&&(newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{})}assignValue(nested,key,newValue),nested=nested[key]}return object}},"./node_modules/lodash/_baseTrim.js":(module,__unused_webpack_exports,__webpack_require__)=>{var trimmedEndIndex=__webpack_require__("./node_modules/lodash/_trimmedEndIndex.js"),reTrimStart=/^\s+/;module.exports=function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,""):string}},"./node_modules/lodash/_baseValues.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayMap=__webpack_require__("./node_modules/lodash/_arrayMap.js");module.exports=function baseValues(object,props){return arrayMap(props,(function(key){return object[key]}))}},"./node_modules/lodash/_flatRest.js":(module,__unused_webpack_exports,__webpack_require__)=>{var flatten=__webpack_require__("./node_modules/lodash/flatten.js"),overRest=__webpack_require__("./node_modules/lodash/_overRest.js"),setToString=__webpack_require__("./node_modules/lodash/_setToString.js");module.exports=function flatRest(func){return setToString(overRest(func,void 0,flatten),func+"")}},"./node_modules/lodash/_isFlattenable.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Symbol=__webpack_require__("./node_modules/lodash/_Symbol.js"),isArguments=__webpack_require__("./node_modules/lodash/isArguments.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),spreadableSymbol=Symbol?Symbol.isConcatSpreadable:void 0;module.exports=function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol])}},"./node_modules/lodash/_trimmedEndIndex.js":module=>{var reWhitespace=/\s/;module.exports=function trimmedEndIndex(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index}},"./node_modules/lodash/delay.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseDelay=__webpack_require__("./node_modules/lodash/_baseDelay.js"),baseRest=__webpack_require__("./node_modules/lodash/_baseRest.js"),toNumber=__webpack_require__("./node_modules/lodash/toNumber.js"),delay=baseRest((function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args)}));module.exports=delay},"./node_modules/lodash/flatten.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseFlatten=__webpack_require__("./node_modules/lodash/_baseFlatten.js");module.exports=function flatten(array){return(null==array?0:array.length)?baseFlatten(array,1):[]}},"./node_modules/lodash/pick.js":(module,__unused_webpack_exports,__webpack_require__)=>{var basePick=__webpack_require__("./node_modules/lodash/_basePick.js"),pick=__webpack_require__("./node_modules/lodash/_flatRest.js")((function(object,paths){return null==object?{}:basePick(object,paths)}));module.exports=pick},"./node_modules/lodash/toNumber.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseTrim=__webpack_require__("./node_modules/lodash/_baseTrim.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isSymbol=__webpack_require__("./node_modules/lodash/isSymbol.js"),reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=function toNumber(value){if("number"==typeof value)return value;if(isSymbol(value))return NaN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NaN:+value}},"./node_modules/lodash/uniqueId.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}},"./node_modules/lodash/values.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseValues=__webpack_require__("./node_modules/lodash/_baseValues.js"),keys=__webpack_require__("./node_modules/lodash/keys.js");module.exports=function values(object){return null==object?[]:baseValues(object,keys(object))}},"./src/draggable/draggable.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.ColumnResize=exports.BasicUsage=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _BasicUsage$parameter,_BasicUsage$parameter2,_BasicUsage$parameter3,_ColumnResize$paramet,_ColumnResize$paramet2,_ColumnResize$paramet3,_addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js")),_draggable=__webpack_require__("./src/draggable/draggable.tsx"),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var meta={title:"Components/Draggable",component:_draggable.Draggable},_worklet_2208673698401_init_data={code:'function anonymous(){const{posX,posY}=this.__closure;return{transform:"translateX("+posX.value+"px) translateY("+posY.value+"px)"};}'},BasicUsage=exports.BasicUsage=function BasicUsage(props){var anonymous,posX=(0,_reactNativeReanimated.useSharedValue)(0),posY=(0,_reactNativeReanimated.useSharedValue)(0),positionStyle=(0,_reactNativeReanimated.useAnimatedStyle)(((anonymous=function anonymous(){return{transform:"translateX(".concat(posX.value,"px) translateY(").concat(posY.value,"px)")}}).__closure={posX,posY},anonymous.__workletHash=2208673698401,anonymous.__initData=_worklet_2208673698401_init_data,anonymous));return(0,_jsxRuntime.jsx)(_draggable.Draggable,{onStart:function onStart(event,ctx){ctx.posX=posX.value,ctx.posY=posY.value,props.onStart(event,ctx)},onActive:function onActive(event,ctx){posX.value=ctx.posX+event.translationX,posY.value=ctx.posY+event.translationY,props.onActive(event,ctx)},onEnd:function onEnd(event,ctx){posX.value=(0,_reactNativeReanimated.withSpring)(0),posY.value=(0,_reactNativeReanimated.withSpring)(0),props.onEnd(event,ctx)},children:(0,_jsxRuntime.jsx)(_reactNativeReanimated.default.View,{style:[{width:120,height:120,backgroundColor:"red"},positionStyle]})})};BasicUsage.args={onStart:(0,_addonActions.action)("Start"),onActive:(0,_addonActions.action)("Active"),onEnd:(0,_addonActions.action)("End")};var _worklet_11677527779262_init_data={code:'function anonymous(){const{posX}=this.__closure;return{transform:"translateX("+posX.value+"px)"};}'},ColumnResize=exports.ColumnResize=function ColumnResize(props){var anonymous,posX=(0,_reactNativeReanimated.useSharedValue)(0),positionStyle=(0,_reactNativeReanimated.useAnimatedStyle)(((anonymous=function anonymous(){return{transform:"translateX(".concat(posX.value,"px)")}}).__closure={posX},anonymous.__workletHash=0xa9ee2e527be,anonymous.__initData=_worklet_11677527779262_init_data,anonymous));return(0,_jsxRuntime.jsx)(_draggable.Draggable,{onStart:function onStart(event,ctx){ctx.posX=posX.value,props.onStart(event,ctx)},onActive:function onActive(event,ctx){posX.value=ctx.posX+event.translationX,props.onActive(event,ctx)},onEnd:function onEnd(event,ctx){props.onEnd(event,ctx)},children:(0,_jsxRuntime.jsx)(_reactNativeReanimated.default.View,{style:positionStyle,children:(0,_jsxRuntime.jsx)(_icon.default,{name:"more-vert"})})})};ColumnResize.args={onStart:(0,_addonActions.action)("Start"),onActive:(0,_addonActions.action)("Active"),onEnd:(0,_addonActions.action)("End")};exports.default=meta;BasicUsage.parameters=Object.assign({},BasicUsage.parameters,{docs:Object.assign({},null==(_BasicUsage$parameter=BasicUsage.parameters)?void 0:_BasicUsage$parameter.docs,{source:Object.assign({originalSource:"(props: DraggableProps) => {\n  const posX = useSharedValue(0);\n  const posY = useSharedValue(0);\n  const onStart = (event, ctx) => {\n    ctx.posX = posX.value;\n    ctx.posY = posY.value;\n    props.onStart(event, ctx);\n  };\n  const onActive = (event, ctx) => {\n    posX.value = ctx.posX + event.translationX;\n    posY.value = ctx.posY + event.translationY;\n    props.onActive(event, ctx);\n  };\n  const onEnd = (event, ctx) => {\n    posX.value = withSpring(0);\n    posY.value = withSpring(0);\n    props.onEnd(event, ctx);\n  };\n  const positionStyle = useAnimatedStyle(() => ({\n    transform: `translateX(${posX.value}px) translateY(${posY.value}px)`\n  }));\n  return <Draggable onStart={onStart} onActive={onActive} onEnd={onEnd}>\n            <Animated.View style={[{\n      width: 120,\n      height: 120,\n      backgroundColor: 'red'\n    }, positionStyle]} />\n        </Draggable>;\n}"},null==(_BasicUsage$parameter2=BasicUsage.parameters)||null==(_BasicUsage$parameter3=_BasicUsage$parameter2.docs)?void 0:_BasicUsage$parameter3.source)})}),ColumnResize.parameters=Object.assign({},ColumnResize.parameters,{docs:Object.assign({},null==(_ColumnResize$paramet=ColumnResize.parameters)?void 0:_ColumnResize$paramet.docs,{source:Object.assign({originalSource:'(props: DraggableProps) => {\n  const posX = useSharedValue(0);\n  const onStart = (event, ctx) => {\n    ctx.posX = posX.value;\n    props.onStart(event, ctx);\n  };\n  const onActive = (event, ctx) => {\n    posX.value = ctx.posX + event.translationX;\n    props.onActive(event, ctx);\n  };\n  const onEnd = (event, ctx) => {\n    // posX.value = withSpring(0);\n    props.onEnd(event, ctx);\n  };\n  const positionStyle = useAnimatedStyle(() => ({\n    transform: `translateX(${posX.value}px)`\n  }));\n  return <Draggable onStart={onStart} onActive={onActive} onEnd={onEnd}>\n            <Animated.View style={positionStyle}>\n                <Icon name="more-vert" />\n            </Animated.View>\n        </Draggable>;\n}'},null==(_ColumnResize$paramet2=ColumnResize.parameters)||null==(_ColumnResize$paramet3=_ColumnResize$paramet2.docs)?void 0:_ColumnResize$paramet3.source)})});try{BasicUsage.displayName="BasicUsage",BasicUsage.__docgenInfo={description:"",displayName:"BasicUsage",props:{onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"((event: PanGestureHandlerGestureEvent, ctx: Record<string, unknown>) => void)"}},onActive:{defaultValue:null,description:"",name:"onActive",required:!1,type:{name:"((event: PanGestureHandlerGestureEvent, ctx: Record<string, unknown>) => void)"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"((event: PanGestureHandlerGestureEvent, ctx: Record<string, unknown>) => void)"}},minX:{defaultValue:null,description:"",name:"minX",required:!1,type:{name:"number"}},minY:{defaultValue:null,description:"",name:"minY",required:!1,type:{name:"number"}},maxX:{defaultValue:null,description:"",name:"maxX",required:!1,type:{name:"number"}},maxY:{defaultValue:null,description:"",name:"maxY",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/draggable/draggable.stories.tsx#BasicUsage"]={docgenInfo:BasicUsage.__docgenInfo,name:"BasicUsage",path:"src/draggable/draggable.stories.tsx#BasicUsage"})}catch(__react_docgen_typescript_loader_error){}try{ColumnResize.displayName="ColumnResize",ColumnResize.__docgenInfo={description:"",displayName:"ColumnResize",props:{onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"((event: PanGestureHandlerGestureEvent, ctx: Record<string, unknown>) => void)"}},onActive:{defaultValue:null,description:"",name:"onActive",required:!1,type:{name:"((event: PanGestureHandlerGestureEvent, ctx: Record<string, unknown>) => void)"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"((event: PanGestureHandlerGestureEvent, ctx: Record<string, unknown>) => void)"}},minX:{defaultValue:null,description:"",name:"minX",required:!1,type:{name:"number"}},minY:{defaultValue:null,description:"",name:"minY",required:!1,type:{name:"number"}},maxX:{defaultValue:null,description:"",name:"maxX",required:!1,type:{name:"number"}},maxY:{defaultValue:null,description:"",name:"maxY",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/draggable/draggable.stories.tsx#ColumnResize"]={docgenInfo:ColumnResize.__docgenInfo,name:"ColumnResize",path:"src/draggable/draggable.stories.tsx#ColumnResize"})}catch(__react_docgen_typescript_loader_error){}},"./src/draggable/draggable.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Draggable=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var anonymous,_reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js"),_reactNativeGestureHandler=__webpack_require__("./node_modules/react-native-gesture-handler/lib/module/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_worklet_774661967454_init_data={code:"function anonymous(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound);}"},_worklet_9008994521239_init_data=((anonymous=function anonymous(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound)}).__closure={},anonymous.__workletHash=774661967454,anonymous.__initData=_worklet_774661967454_init_data,{code:"function onStart(event,ctx){const onStart=this._recur;if(onStart){onStart(event,ctx);}}"}),_worklet_8211429621143_init_data={code:"function onActive(event,ctx){const onActive=this._recur;if(onActive){onActive(event,ctx);}}"},_worklet_8805484198039_init_data={code:"function onEnd(event,ctx){const onEnd=this._recur;if(onEnd){onEnd(event,ctx);}}"},Draggable=exports.Draggable=function Draggable(_ref){var children=_ref.children,onGestureEvent=(_ref.onStart,_ref.onActive,_ref.onEnd,_ref.minX,_ref.minY,_ref.maxX,_ref.maxY,(0,_reactNativeReanimated.useAnimatedGestureHandler)({onStart:function(){var onStart=function onStart(event,ctx){onStart&&onStart(event,ctx)};return onStart.__closure={},onStart.__workletHash=9008994521239,onStart.__initData=_worklet_9008994521239_init_data,onStart}(),onActive:function(){var onActive=function onActive(event,ctx){onActive&&onActive(event,ctx)};return onActive.__closure={},onActive.__workletHash=8211429621143,onActive.__initData=_worklet_8211429621143_init_data,onActive}(),onEnd:function(){var onEnd=function onEnd(event,ctx){onEnd&&onEnd(event,ctx)};return onEnd.__closure={},onEnd.__workletHash=8805484198039,onEnd.__initData=_worklet_8805484198039_init_data,onEnd}()}));return(0,_jsxRuntime.jsx)(_reactNativeGestureHandler.PanGestureHandler,{onGestureEvent,children})};exports.default=Draggable;try{Draggable.displayName="Draggable",Draggable.__docgenInfo={description:"",displayName:"Draggable",props:{onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"((event: PanGestureHandlerGestureEvent, ctx: Record<string, unknown>) => void)"}},onActive:{defaultValue:null,description:"",name:"onActive",required:!1,type:{name:"((event: PanGestureHandlerGestureEvent, ctx: Record<string, unknown>) => void)"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"((event: PanGestureHandlerGestureEvent, ctx: Record<string, unknown>) => void)"}},minX:{defaultValue:null,description:"",name:"minX",required:!1,type:{name:"number"}},minY:{defaultValue:null,description:"",name:"minY",required:!1,type:{name:"number"}},maxX:{defaultValue:null,description:"",name:"maxX",required:!1,type:{name:"number"}},maxY:{defaultValue:null,description:"",name:"maxY",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/draggable/draggable.tsx#Draggable"]={docgenInfo:Draggable.__docgenInfo,name:"Draggable",path:"src/draggable/draggable.tsx#Draggable"})}catch(__react_docgen_typescript_loader_error){}try{draggable.displayName="draggable",draggable.__docgenInfo={description:"",displayName:"draggable",props:{onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"((event: PanGestureHandlerGestureEvent, ctx: Record<string, unknown>) => void)"}},onActive:{defaultValue:null,description:"",name:"onActive",required:!1,type:{name:"((event: PanGestureHandlerGestureEvent, ctx: Record<string, unknown>) => void)"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"((event: PanGestureHandlerGestureEvent, ctx: Record<string, unknown>) => void)"}},minX:{defaultValue:null,description:"",name:"minX",required:!1,type:{name:"number"}},minY:{defaultValue:null,description:"",name:"minY",required:!1,type:{name:"number"}},maxX:{defaultValue:null,description:"",name:"maxX",required:!1,type:{name:"number"}},maxY:{defaultValue:null,description:"",name:"maxY",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/draggable/draggable.tsx#draggable"]={docgenInfo:draggable.__docgenInfo,name:"draggable",path:"src/draggable/draggable.tsx#draggable"})}catch(__react_docgen_typescript_loader_error){}},"./src/icon/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _icon.Icon}});var _icon=__webpack_require__("./src/icon/icon.tsx")}}]);