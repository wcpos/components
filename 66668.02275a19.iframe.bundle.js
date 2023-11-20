(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[66668],{"./src/draggable2/draggable.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Draggable=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_Image=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Image/index.js")),_PanResponder=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/PanResponder/index.js")),_Animated=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Animated/index.js")),_Dimensions=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Dimensions/index.js")),_TouchableOpacity=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function clamp(number,min,max){return Math.max(min,Math.min(number,max))}var Draggable=exports.Draggable=function Draggable(_ref){var _ref$renderText=_ref.renderText,renderText=void 0===_ref$renderText?"+":_ref$renderText,isCircle=_ref.isCircle,_ref$renderSize=_ref.renderSize,renderSize=void 0===_ref$renderSize?36:_ref$renderSize,imageSource=_ref.imageSource,renderColor=_ref.renderColor,children=_ref.children,_ref$shouldReverse=_ref.shouldReverse,shouldReverse=void 0!==_ref$shouldReverse&&_ref$shouldReverse,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$debug=_ref.debug,debug=void 0!==_ref$debug&&_ref$debug,animatedViewProps=_ref.animatedViewProps,touchableOpacityProps=_ref.touchableOpacityProps,_ref$onDrag=_ref.onDrag,onDrag=void 0===_ref$onDrag?function(){}:_ref$onDrag,_ref$onShortPressRele=_ref.onShortPressRelease,onShortPressRelease=void 0===_ref$onShortPressRele?function(){}:_ref$onShortPressRele,_ref$onDragRelease=_ref.onDragRelease,onDragRelease=void 0===_ref$onDragRelease?function(){}:_ref$onDragRelease,_ref$onLongPress=_ref.onLongPress,onLongPress=void 0===_ref$onLongPress?function(){}:_ref$onLongPress,_ref$onPressIn=_ref.onPressIn,onPressIn=void 0===_ref$onPressIn?function(){}:_ref$onPressIn,_ref$onPressOut=_ref.onPressOut,onPressOut=void 0===_ref$onPressOut?function(){}:_ref$onPressOut,_ref$onRelease=_ref.onRelease,onRelease=void 0===_ref$onRelease?function(){}:_ref$onRelease,_ref$x=_ref.x,x=void 0===_ref$x?0:_ref$x,_ref$y=_ref.y,y=void 0===_ref$y?0:_ref$y,_ref$z=_ref.z,z=void 0===_ref$z?1:_ref$z,minX=_ref.minX,minY=_ref.minY,maxX=_ref.maxX,maxY=_ref.maxY,pan=_react.default.useRef(new _Animated.default.ValueXY),offsetFromStart=_react.default.useRef({x:0,y:0}),childSize=_react.default.useRef({x:renderSize,y:renderSize}),startBounds=_react.default.useRef({top:0,bottom:0,left:0,right:0}),isDragging=_react.default.useRef(!1),getBounds=_react.default.useCallback((function(){var left=x+offsetFromStart.current.x,top=y+offsetFromStart.current.y;return{left,top,right:left+childSize.current.x,bottom:top+childSize.current.y}}),[x,y]),shouldStartDrag=_react.default.useCallback((function(gs){return!disabled&&(Math.abs(gs.dx)>2||Math.abs(gs.dy)>2)}),[disabled]),reversePosition=_react.default.useCallback((function(){_Animated.default.spring(pan.current,{toValue:{x:0,y:0},useNativeDriver:!1}).start()}),[pan]),onPanResponderRelease=_react.default.useCallback((function(e,gestureState){isDragging.current=!1,onDragRelease&&(onDragRelease(e,gestureState),onRelease(e,!0)),shouldReverse?reversePosition():pan.current.flattenOffset()}),[onDragRelease,shouldReverse,onRelease,reversePosition]),onPanResponderGrant=_react.default.useCallback((function(e,gestureState){startBounds.current=getBounds(),isDragging.current=!0,shouldReverse||(pan.current.setOffset(offsetFromStart.current),pan.current.setValue({x:0,y:0}))}),[getBounds,shouldReverse]),handleOnDrag=_react.default.useCallback((function(e,gestureState){var dx=gestureState.dx,dy=gestureState.dy,_startBounds$current=startBounds.current,top=_startBounds$current.top,right=_startBounds$current.right,left=_startBounds$current.left,bottom=_startBounds$current.bottom,far=999999999,changeX=clamp(dx,Number.isFinite(minX)?minX-left:-far,Number.isFinite(maxX)?maxX-right:far),changeY=clamp(dy,Number.isFinite(minY)?minY-top:-far,Number.isFinite(maxY)?maxY-bottom:far);pan.current.setValue({x:changeX,y:changeY}),onDrag(e,gestureState)}),[maxX,maxY,minX,minY,onDrag]),panResponder=_react.default.useMemo((function(){return _PanResponder.default.create({onMoveShouldSetPanResponder:function onMoveShouldSetPanResponder(_,gestureState){return shouldStartDrag(gestureState)},onMoveShouldSetPanResponderCapture:function onMoveShouldSetPanResponderCapture(_,gestureState){return shouldStartDrag(gestureState)},onPanResponderGrant,onPanResponderMove:_Animated.default.event([],{listener:handleOnDrag,useNativeDriver:!1}),onPanResponderRelease})}),[handleOnDrag,onPanResponderGrant,onPanResponderRelease,shouldStartDrag]);_react.default.useEffect((function(){var curPan=pan.current;return shouldReverse||curPan.addListener((function(c){return offsetFromStart.current=c})),function(){curPan.removeAllListeners()}}),[shouldReverse]);var positionCss=_react.default.useMemo((function(){var Window=_Dimensions.default.get("window");return{position:"absolute",top:0,left:0,width:Window.width,height:Window.height}}),[]),dragItemCss=_react.default.useMemo((function(){var style={top:y,left:x,elevation:z,zIndex:z};return renderColor&&(style.backgroundColor=renderColor),isCircle&&(style.borderRadius=renderSize),children?Object.assign({},style,{alignSelf:"baseline"}):Object.assign({},style,{justifyContent:"center",width:renderSize,height:renderSize})}),[children,isCircle,renderColor,renderSize,x,y,z]),touchableContent=_react.default.useMemo((function(){return children||(imageSource?(0,_jsxRuntime.jsx)(_Image.default,{style:{width:renderSize,height:renderSize},source:imageSource}):(0,_jsxRuntime.jsx)(_Text.default,{style:styles.text,children:renderText}))}),[children,imageSource,renderSize,renderText]),handleOnLayout=_react.default.useCallback((function(event){var _event$nativeEvent$la=event.nativeEvent.layout,height=_event$nativeEvent$la.height,width=_event$nativeEvent$la.width;childSize.current={x:width,y:height}}),[]),handlePressOut=_react.default.useCallback((function(event){onPressOut(event),isDragging.current||onRelease(event,!1)}),[onPressOut,onRelease]),getDebugView=_react.default.useCallback((function(){var _Dimensions$get=_Dimensions.default.get("window"),width=_Dimensions$get.width,height=_Dimensions$get.height;if(!(minX||maxX||minY||maxY))return null;var left=minX||-9999,right=maxX?width-maxX:-9999,top=minY||-9999,bottom=maxY?height-maxY:-9999;return(0,_jsxRuntime.jsx)(_View.default,{style:Object.assign({left,right,top,bottom,pointerEvents:"box-none"},styles.debugView)})}),[maxX,maxY,minX,minY]);return(0,_jsxRuntime.jsxs)(_View.default,{style:[{pointerEvents:"box-none"},positionCss],children:[debug&&getDebugView(),(0,_jsxRuntime.jsx)(_Animated.default.View,Object.assign({},animatedViewProps,panResponder.panHandlers,{style:[{pointerEvents:"box-none"},pan.current.getLayout()],children:(0,_jsxRuntime.jsx)(_TouchableOpacity.default,Object.assign({},touchableOpacityProps,{onLayout:handleOnLayout,style:dragItemCss,disabled,onPress:onShortPressRelease,onLongPress,onPressIn,onPressOut:handlePressOut,children:touchableContent}))}))]})},styles=_StyleSheet.default.create({text:{color:"#fff",textAlign:"center"},debugView:{backgroundColor:"#ff000044",position:"absolute",borderColor:"#fced0ecc",borderWidth:4}});try{Draggable.displayName="Draggable",Draggable.__docgenInfo={description:"",displayName:"Draggable",props:{renderText:{defaultValue:{value:"+"},description:'** props that should probably be removed in favor of "children"',name:"renderText",required:!1,type:{name:"string"}},isCircle:{defaultValue:null,description:"",name:"isCircle",required:!1,type:{name:"boolean"}},renderSize:{defaultValue:{value:"36"},description:"",name:"renderSize",required:!1,type:{name:"number"}},imageSource:{defaultValue:null,description:"",name:"imageSource",required:!1,type:{name:"number"}},renderColor:{defaultValue:null,description:"",name:"renderColor",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"**",name:"children",required:!1,type:{name:"ReactNode"}},shouldReverse:{defaultValue:{value:"false"},description:"",name:"shouldReverse",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},debug:{defaultValue:{value:"false"},description:"",name:"debug",required:!1,type:{name:"boolean"}},animatedViewProps:{defaultValue:null,description:"",name:"animatedViewProps",required:!1,type:{name:"any"}},touchableOpacityProps:{defaultValue:null,description:"",name:"touchableOpacityProps",required:!1,type:{name:"any"}},onDrag:{defaultValue:{value:"() => {}"},description:"",name:"onDrag",required:!1,type:{name:"((e: GestureResponderEvent, gestureState: PanResponderGestureState) => void)"}},onShortPressRelease:{defaultValue:{value:"() => {}"},description:"",name:"onShortPressRelease",required:!1,type:{name:"((event: GestureResponderEvent) => void)"}},onDragRelease:{defaultValue:{value:"() => {}"},description:"",name:"onDragRelease",required:!1,type:{name:"((e: GestureResponderEvent, gestureState: PanResponderGestureState) => void)"}},onLongPress:{defaultValue:{value:"() => {}"},description:"",name:"onLongPress",required:!1,type:{name:"((event: GestureResponderEvent) => void)"}},onPressIn:{defaultValue:{value:"() => {}"},description:"",name:"onPressIn",required:!1,type:{name:"((event: GestureResponderEvent) => void)"}},onPressOut:{defaultValue:{value:"() => {}"},description:"",name:"onPressOut",required:!1,type:{name:"((event: GestureResponderEvent) => void)"}},onRelease:{defaultValue:{value:"() => {}"},description:"",name:"onRelease",required:!1,type:{name:"((event: GestureResponderEvent, wasDragging: boolean) => void)"}},onReverse:{defaultValue:null,description:"",name:"onReverse",required:!1,type:{name:"(() => { x: number; y: number; })"}},x:{defaultValue:{value:"0"},description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:{value:"0"},description:"",name:"y",required:!1,type:{name:"number"}},z:{defaultValue:{value:"1"},description:"",name:"z",required:!1,type:{name:"number"}},minX:{defaultValue:null,description:"",name:"minX",required:!1,type:{name:"number"}},minY:{defaultValue:null,description:"",name:"minY",required:!1,type:{name:"number"}},maxX:{defaultValue:null,description:"",name:"maxX",required:!1,type:{name:"number"}},maxY:{defaultValue:null,description:"",name:"maxY",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/draggable2/draggable.tsx#Draggable"]={docgenInfo:Draggable.__docgenInfo,name:"Draggable",path:"src/draggable2/draggable.tsx#Draggable"})}catch(__react_docgen_typescript_loader_error){}}}]);