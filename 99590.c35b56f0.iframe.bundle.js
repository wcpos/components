(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[99590,66668,53670,72851],{"./node_modules/lodash/_assignValue.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseAssignValue=__webpack_require__("./node_modules/lodash/_baseAssignValue.js"),eq=__webpack_require__("./node_modules/lodash/eq.js"),hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function assignValue(object,key,value){var objValue=object[key];hasOwnProperty.call(object,key)&&eq(objValue,value)&&(void 0!==value||key in object)||baseAssignValue(object,key,value)}},"./node_modules/lodash/_baseDelay.js":module=>{module.exports=function baseDelay(func,wait,args){if("function"!=typeof func)throw new TypeError("Expected a function");return setTimeout((function(){func.apply(void 0,args)}),wait)}},"./node_modules/lodash/_baseFlatten.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayPush=__webpack_require__("./node_modules/lodash/_arrayPush.js"),isFlattenable=__webpack_require__("./node_modules/lodash/_isFlattenable.js");module.exports=function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;for(predicate||(predicate=isFlattenable),result||(result=[]);++index<length;){var value=array[index];depth>0&&predicate(value)?depth>1?baseFlatten(value,depth-1,predicate,isStrict,result):arrayPush(result,value):isStrict||(result[result.length]=value)}return result}},"./node_modules/lodash/_basePick.js":(module,__unused_webpack_exports,__webpack_require__)=>{var basePickBy=__webpack_require__("./node_modules/lodash/_basePickBy.js"),hasIn=__webpack_require__("./node_modules/lodash/hasIn.js");module.exports=function basePick(object,paths){return basePickBy(object,paths,(function(value,path){return hasIn(object,path)}))}},"./node_modules/lodash/_basePickBy.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseGet=__webpack_require__("./node_modules/lodash/_baseGet.js"),baseSet=__webpack_require__("./node_modules/lodash/_baseSet.js"),castPath=__webpack_require__("./node_modules/lodash/_castPath.js");module.exports=function basePickBy(object,paths,predicate){for(var index=-1,length=paths.length,result={};++index<length;){var path=paths[index],value=baseGet(object,path);predicate(value,path)&&baseSet(result,castPath(path,object),value)}return result}},"./node_modules/lodash/_baseSet.js":(module,__unused_webpack_exports,__webpack_require__)=>{var assignValue=__webpack_require__("./node_modules/lodash/_assignValue.js"),castPath=__webpack_require__("./node_modules/lodash/_castPath.js"),isIndex=__webpack_require__("./node_modules/lodash/_isIndex.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),toKey=__webpack_require__("./node_modules/lodash/_toKey.js");module.exports=function baseSet(object,path,value,customizer){if(!isObject(object))return object;for(var index=-1,length=(path=castPath(path,object)).length,lastIndex=length-1,nested=object;null!=nested&&++index<length;){var key=toKey(path[index]),newValue=value;if("__proto__"===key||"constructor"===key||"prototype"===key)return object;if(index!=lastIndex){var objValue=nested[key];void 0===(newValue=customizer?customizer(objValue,key,nested):void 0)&&(newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{})}assignValue(nested,key,newValue),nested=nested[key]}return object}},"./node_modules/lodash/_baseTrim.js":(module,__unused_webpack_exports,__webpack_require__)=>{var trimmedEndIndex=__webpack_require__("./node_modules/lodash/_trimmedEndIndex.js"),reTrimStart=/^\s+/;module.exports=function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,""):string}},"./node_modules/lodash/_baseValues.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayMap=__webpack_require__("./node_modules/lodash/_arrayMap.js");module.exports=function baseValues(object,props){return arrayMap(props,(function(key){return object[key]}))}},"./node_modules/lodash/_flatRest.js":(module,__unused_webpack_exports,__webpack_require__)=>{var flatten=__webpack_require__("./node_modules/lodash/flatten.js"),overRest=__webpack_require__("./node_modules/lodash/_overRest.js"),setToString=__webpack_require__("./node_modules/lodash/_setToString.js");module.exports=function flatRest(func){return setToString(overRest(func,void 0,flatten),func+"")}},"./node_modules/lodash/_isFlattenable.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Symbol=__webpack_require__("./node_modules/lodash/_Symbol.js"),isArguments=__webpack_require__("./node_modules/lodash/isArguments.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),spreadableSymbol=Symbol?Symbol.isConcatSpreadable:void 0;module.exports=function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol])}},"./node_modules/lodash/_trimmedEndIndex.js":module=>{var reWhitespace=/\s/;module.exports=function trimmedEndIndex(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index}},"./node_modules/lodash/delay.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseDelay=__webpack_require__("./node_modules/lodash/_baseDelay.js"),baseRest=__webpack_require__("./node_modules/lodash/_baseRest.js"),toNumber=__webpack_require__("./node_modules/lodash/toNumber.js"),delay=baseRest((function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args)}));module.exports=delay},"./node_modules/lodash/flatten.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseFlatten=__webpack_require__("./node_modules/lodash/_baseFlatten.js");module.exports=function flatten(array){return(null==array?0:array.length)?baseFlatten(array,1):[]}},"./node_modules/lodash/pick.js":(module,__unused_webpack_exports,__webpack_require__)=>{var basePick=__webpack_require__("./node_modules/lodash/_basePick.js"),pick=__webpack_require__("./node_modules/lodash/_flatRest.js")((function(object,paths){return null==object?{}:basePick(object,paths)}));module.exports=pick},"./node_modules/lodash/toNumber.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseTrim=__webpack_require__("./node_modules/lodash/_baseTrim.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isSymbol=__webpack_require__("./node_modules/lodash/isSymbol.js"),reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=function toNumber(value){if("number"==typeof value)return value;if(isSymbol(value))return NaN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NaN:+value}},"./node_modules/lodash/uniqueId.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}},"./node_modules/lodash/values.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseValues=__webpack_require__("./node_modules/lodash/_baseValues.js"),keys=__webpack_require__("./node_modules/lodash/keys.js");module.exports=function values(object){return null==object?[]:baseValues(object,keys(object))}},"./src/draggable2/draggable.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.BasicUsage=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _BasicUsage$parameter,_BasicUsage$parameter2,_BasicUsage$parameter3,_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_draggable=__webpack_require__("./src/draggable2/draggable.tsx"),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var meta={title:"Components/Draggable2",component:_draggable.Draggable},BasicUsage=function BasicUsage(props){return(0,_jsxRuntime.jsx)(_View.default,{style:{height:300},children:(0,_jsxRuntime.jsx)(_draggable.Draggable,Object.assign({},props,{children:(0,_jsxRuntime.jsx)(_icon.default,{name:"more-vert"})}))})};exports.BasicUsage=BasicUsage,BasicUsage.args={onDrag:(0,_addonActions.action)("Drag"),onShortPressRelease:(0,_addonActions.action)("Short Press Release"),onDragRelease:(0,_addonActions.action)("Drag Release"),onLongPress:(0,_addonActions.action)("Long Press"),onPressIn:(0,_addonActions.action)("Press In"),onPressOut:(0,_addonActions.action)("Press Out"),onRelease:(0,_addonActions.action)("Release")};var _default=meta;exports.default=_default,BasicUsage.parameters=Object.assign({},BasicUsage.parameters,{docs:Object.assign({},null==(_BasicUsage$parameter=BasicUsage.parameters)?void 0:_BasicUsage$parameter.docs,{source:Object.assign({originalSource:'(props: DraggableProps) => <View style={{\n  height: 300\n}}>\n        <Draggable {...props}>\n            <Icon name="more-vert" />\n        </Draggable>\n    </View>'},null==(_BasicUsage$parameter2=BasicUsage.parameters)||null==(_BasicUsage$parameter3=_BasicUsage$parameter2.docs)?void 0:_BasicUsage$parameter3.source)})});try{BasicUsage.displayName="BasicUsage",BasicUsage.__docgenInfo={description:"",displayName:"BasicUsage",props:{renderText:{defaultValue:null,description:'** props that should probably be removed in favor of "children"',name:"renderText",required:!1,type:{name:"string"}},isCircle:{defaultValue:null,description:"",name:"isCircle",required:!1,type:{name:"boolean"}},renderSize:{defaultValue:null,description:"",name:"renderSize",required:!1,type:{name:"number"}},imageSource:{defaultValue:null,description:"",name:"imageSource",required:!1,type:{name:"number"}},renderColor:{defaultValue:null,description:"",name:"renderColor",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"**",name:"children",required:!1,type:{name:"ReactNode"}},shouldReverse:{defaultValue:null,description:"",name:"shouldReverse",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},debug:{defaultValue:null,description:"",name:"debug",required:!1,type:{name:"boolean"}},animatedViewProps:{defaultValue:null,description:"",name:"animatedViewProps",required:!1,type:{name:"any"}},touchableOpacityProps:{defaultValue:null,description:"",name:"touchableOpacityProps",required:!1,type:{name:"any"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"((e: GestureResponderEvent, gestureState: PanResponderGestureState) => void)"}},onShortPressRelease:{defaultValue:null,description:"",name:"onShortPressRelease",required:!1,type:{name:"((event: GestureResponderEvent) => void)"}},onDragRelease:{defaultValue:null,description:"",name:"onDragRelease",required:!1,type:{name:"((e: GestureResponderEvent, gestureState: PanResponderGestureState) => void)"}},onLongPress:{defaultValue:null,description:"",name:"onLongPress",required:!1,type:{name:"((event: GestureResponderEvent) => void)"}},onPressIn:{defaultValue:null,description:"",name:"onPressIn",required:!1,type:{name:"((event: GestureResponderEvent) => void)"}},onPressOut:{defaultValue:null,description:"",name:"onPressOut",required:!1,type:{name:"((event: GestureResponderEvent) => void)"}},onRelease:{defaultValue:null,description:"",name:"onRelease",required:!1,type:{name:"((event: GestureResponderEvent, wasDragging: boolean) => void)"}},onReverse:{defaultValue:null,description:"",name:"onReverse",required:!1,type:{name:"(() => { x: number; y: number; })"}},x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"number"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"number"}},minX:{defaultValue:null,description:"",name:"minX",required:!1,type:{name:"number"}},minY:{defaultValue:null,description:"",name:"minY",required:!1,type:{name:"number"}},maxX:{defaultValue:null,description:"",name:"maxX",required:!1,type:{name:"number"}},maxY:{defaultValue:null,description:"",name:"maxY",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/draggable2/draggable.stories.tsx#BasicUsage"]={docgenInfo:BasicUsage.__docgenInfo,name:"BasicUsage",path:"src/draggable2/draggable.stories.tsx#BasicUsage"})}catch(__react_docgen_typescript_loader_error){}},"./src/draggable2/draggable.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Draggable=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_Image=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Image/index.js")),_PanResponder=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/PanResponder/index.js")),_Animated=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Animated/index.js")),_Dimensions=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Dimensions/index.js")),_TouchableOpacity=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function clamp(number,min,max){return Math.max(min,Math.min(number,max))}var Draggable=function Draggable(_ref){var _ref$renderText=_ref.renderText,renderText=void 0===_ref$renderText?"+":_ref$renderText,isCircle=_ref.isCircle,_ref$renderSize=_ref.renderSize,renderSize=void 0===_ref$renderSize?36:_ref$renderSize,imageSource=_ref.imageSource,renderColor=_ref.renderColor,children=_ref.children,_ref$shouldReverse=_ref.shouldReverse,shouldReverse=void 0!==_ref$shouldReverse&&_ref$shouldReverse,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$debug=_ref.debug,debug=void 0!==_ref$debug&&_ref$debug,animatedViewProps=_ref.animatedViewProps,touchableOpacityProps=_ref.touchableOpacityProps,_ref$onDrag=_ref.onDrag,onDrag=void 0===_ref$onDrag?function(){}:_ref$onDrag,_ref$onShortPressRele=_ref.onShortPressRelease,onShortPressRelease=void 0===_ref$onShortPressRele?function(){}:_ref$onShortPressRele,_ref$onDragRelease=_ref.onDragRelease,onDragRelease=void 0===_ref$onDragRelease?function(){}:_ref$onDragRelease,_ref$onLongPress=_ref.onLongPress,onLongPress=void 0===_ref$onLongPress?function(){}:_ref$onLongPress,_ref$onPressIn=_ref.onPressIn,onPressIn=void 0===_ref$onPressIn?function(){}:_ref$onPressIn,_ref$onPressOut=_ref.onPressOut,onPressOut=void 0===_ref$onPressOut?function(){}:_ref$onPressOut,_ref$onRelease=_ref.onRelease,onRelease=void 0===_ref$onRelease?function(){}:_ref$onRelease,_ref$x=_ref.x,x=void 0===_ref$x?0:_ref$x,_ref$y=_ref.y,y=void 0===_ref$y?0:_ref$y,_ref$z=_ref.z,z=void 0===_ref$z?1:_ref$z,minX=_ref.minX,minY=_ref.minY,maxX=_ref.maxX,maxY=_ref.maxY,pan=_react.default.useRef(new _Animated.default.ValueXY),offsetFromStart=_react.default.useRef({x:0,y:0}),childSize=_react.default.useRef({x:renderSize,y:renderSize}),startBounds=_react.default.useRef({top:0,bottom:0,left:0,right:0}),isDragging=_react.default.useRef(!1),getBounds=_react.default.useCallback((function(){var left=x+offsetFromStart.current.x,top=y+offsetFromStart.current.y;return{left,top,right:left+childSize.current.x,bottom:top+childSize.current.y}}),[x,y]),shouldStartDrag=_react.default.useCallback((function(gs){return!disabled&&(Math.abs(gs.dx)>2||Math.abs(gs.dy)>2)}),[disabled]),reversePosition=_react.default.useCallback((function(){_Animated.default.spring(pan.current,{toValue:{x:0,y:0},useNativeDriver:!1}).start()}),[pan]),onPanResponderRelease=_react.default.useCallback((function(e,gestureState){isDragging.current=!1,onDragRelease&&(onDragRelease(e,gestureState),onRelease(e,!0)),shouldReverse?reversePosition():pan.current.flattenOffset()}),[onDragRelease,shouldReverse,onRelease,reversePosition]),onPanResponderGrant=_react.default.useCallback((function(e,gestureState){startBounds.current=getBounds(),isDragging.current=!0,shouldReverse||(pan.current.setOffset(offsetFromStart.current),pan.current.setValue({x:0,y:0}))}),[getBounds,shouldReverse]),handleOnDrag=_react.default.useCallback((function(e,gestureState){var dx=gestureState.dx,dy=gestureState.dy,_startBounds$current=startBounds.current,top=_startBounds$current.top,right=_startBounds$current.right,left=_startBounds$current.left,bottom=_startBounds$current.bottom,far=999999999,changeX=clamp(dx,Number.isFinite(minX)?minX-left:-far,Number.isFinite(maxX)?maxX-right:far),changeY=clamp(dy,Number.isFinite(minY)?minY-top:-far,Number.isFinite(maxY)?maxY-bottom:far);pan.current.setValue({x:changeX,y:changeY}),onDrag(e,gestureState)}),[maxX,maxY,minX,minY,onDrag]),panResponder=_react.default.useMemo((function(){return _PanResponder.default.create({onMoveShouldSetPanResponder:function onMoveShouldSetPanResponder(_,gestureState){return shouldStartDrag(gestureState)},onMoveShouldSetPanResponderCapture:function onMoveShouldSetPanResponderCapture(_,gestureState){return shouldStartDrag(gestureState)},onPanResponderGrant,onPanResponderMove:_Animated.default.event([],{listener:handleOnDrag,useNativeDriver:!1}),onPanResponderRelease})}),[handleOnDrag,onPanResponderGrant,onPanResponderRelease,shouldStartDrag]);_react.default.useEffect((function(){var curPan=pan.current;return shouldReverse||curPan.addListener((function(c){return offsetFromStart.current=c})),function(){curPan.removeAllListeners()}}),[shouldReverse]);var positionCss=_react.default.useMemo((function(){var Window=_Dimensions.default.get("window");return{position:"absolute",top:0,left:0,width:Window.width,height:Window.height}}),[]),dragItemCss=_react.default.useMemo((function(){var style={top:y,left:x,elevation:z,zIndex:z};return renderColor&&(style.backgroundColor=renderColor),isCircle&&(style.borderRadius=renderSize),children?Object.assign({},style,{alignSelf:"baseline"}):Object.assign({},style,{justifyContent:"center",width:renderSize,height:renderSize})}),[children,isCircle,renderColor,renderSize,x,y,z]),touchableContent=_react.default.useMemo((function(){return children||(imageSource?(0,_jsxRuntime.jsx)(_Image.default,{style:{width:renderSize,height:renderSize},source:imageSource}):(0,_jsxRuntime.jsx)(_Text.default,{style:styles.text,children:renderText}))}),[children,imageSource,renderSize,renderText]),handleOnLayout=_react.default.useCallback((function(event){var _event$nativeEvent$la=event.nativeEvent.layout,height=_event$nativeEvent$la.height,width=_event$nativeEvent$la.width;childSize.current={x:width,y:height}}),[]),handlePressOut=_react.default.useCallback((function(event){onPressOut(event),isDragging.current||onRelease(event,!1)}),[onPressOut,onRelease]),getDebugView=_react.default.useCallback((function(){var _Dimensions$get=_Dimensions.default.get("window"),width=_Dimensions$get.width,height=_Dimensions$get.height;if(!(minX||maxX||minY||maxY))return null;var left=minX||-9999,right=maxX?width-maxX:-9999,top=minY||-9999,bottom=maxY?height-maxY:-9999;return(0,_jsxRuntime.jsx)(_View.default,{style:Object.assign({left,right,top,bottom,pointerEvents:"box-none"},styles.debugView)})}),[maxX,maxY,minX,minY]);return(0,_jsxRuntime.jsxs)(_View.default,{style:[{pointerEvents:"box-none"},positionCss],children:[debug&&getDebugView(),(0,_jsxRuntime.jsx)(_Animated.default.View,Object.assign({},animatedViewProps,panResponder.panHandlers,{style:[{pointerEvents:"box-none"},pan.current.getLayout()],children:(0,_jsxRuntime.jsx)(_TouchableOpacity.default,Object.assign({},touchableOpacityProps,{onLayout:handleOnLayout,style:dragItemCss,disabled,onPress:onShortPressRelease,onLongPress,onPressIn,onPressOut:handlePressOut,children:touchableContent}))}))]})};exports.Draggable=Draggable;var styles=_StyleSheet.default.create({text:{color:"#fff",textAlign:"center"},debugView:{backgroundColor:"#ff000044",position:"absolute",borderColor:"#fced0ecc",borderWidth:4}});try{Draggable.displayName="Draggable",Draggable.__docgenInfo={description:"",displayName:"Draggable",props:{renderText:{defaultValue:{value:"+"},description:'** props that should probably be removed in favor of "children"',name:"renderText",required:!1,type:{name:"string"}},isCircle:{defaultValue:null,description:"",name:"isCircle",required:!1,type:{name:"boolean"}},renderSize:{defaultValue:{value:"36"},description:"",name:"renderSize",required:!1,type:{name:"number"}},imageSource:{defaultValue:null,description:"",name:"imageSource",required:!1,type:{name:"number"}},renderColor:{defaultValue:null,description:"",name:"renderColor",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"**",name:"children",required:!1,type:{name:"ReactNode"}},shouldReverse:{defaultValue:{value:"false"},description:"",name:"shouldReverse",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},debug:{defaultValue:{value:"false"},description:"",name:"debug",required:!1,type:{name:"boolean"}},animatedViewProps:{defaultValue:null,description:"",name:"animatedViewProps",required:!1,type:{name:"any"}},touchableOpacityProps:{defaultValue:null,description:"",name:"touchableOpacityProps",required:!1,type:{name:"any"}},onDrag:{defaultValue:{value:"() => {}"},description:"",name:"onDrag",required:!1,type:{name:"((e: GestureResponderEvent, gestureState: PanResponderGestureState) => void)"}},onShortPressRelease:{defaultValue:{value:"() => {}"},description:"",name:"onShortPressRelease",required:!1,type:{name:"((event: GestureResponderEvent) => void)"}},onDragRelease:{defaultValue:{value:"() => {}"},description:"",name:"onDragRelease",required:!1,type:{name:"((e: GestureResponderEvent, gestureState: PanResponderGestureState) => void)"}},onLongPress:{defaultValue:{value:"() => {}"},description:"",name:"onLongPress",required:!1,type:{name:"((event: GestureResponderEvent) => void)"}},onPressIn:{defaultValue:{value:"() => {}"},description:"",name:"onPressIn",required:!1,type:{name:"((event: GestureResponderEvent) => void)"}},onPressOut:{defaultValue:{value:"() => {}"},description:"",name:"onPressOut",required:!1,type:{name:"((event: GestureResponderEvent) => void)"}},onRelease:{defaultValue:{value:"() => {}"},description:"",name:"onRelease",required:!1,type:{name:"((event: GestureResponderEvent, wasDragging: boolean) => void)"}},onReverse:{defaultValue:null,description:"",name:"onReverse",required:!1,type:{name:"(() => { x: number; y: number; })"}},x:{defaultValue:{value:"0"},description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:{value:"0"},description:"",name:"y",required:!1,type:{name:"number"}},z:{defaultValue:{value:"1"},description:"",name:"z",required:!1,type:{name:"number"}},minX:{defaultValue:null,description:"",name:"minX",required:!1,type:{name:"number"}},minY:{defaultValue:null,description:"",name:"minY",required:!1,type:{name:"number"}},maxX:{defaultValue:null,description:"",name:"maxX",required:!1,type:{name:"number"}},maxY:{defaultValue:null,description:"",name:"maxY",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/draggable2/draggable.tsx#Draggable"]={docgenInfo:Draggable.__docgenInfo,name:"Draggable",path:"src/draggable2/draggable.tsx#Draggable"})}catch(__react_docgen_typescript_loader_error){}},"./src/icon/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _icon.Icon}});var _icon=__webpack_require__("./src/icon/icon.tsx")}}]);