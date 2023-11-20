(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[33463,14876,76702,68134,74656,93708],{"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,{Z:()=>_taggedTemplateLiteral})},"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/interactive/interactive.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Interactive=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js")),_createClass2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js")),_assertThisInitialized2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),_inherits2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),_defineProperty2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js")),_react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_lowPassFilter=_interopRequireDefault(__webpack_require__("./src/interactive/low-pass-filter.tsx")),_snap=__webpack_require__("./src/interactive/snap.tsx"),Styled=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./src/interactive/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=(0,_getPrototypeOf2.default)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,_possibleConstructorReturn2.default)(this,result)}}var ALL_RESIZABLE={bottom:!0,left:!0,right:!0,top:!0},Interactive=exports.Interactive=function(_React$Component){(0,_inherits2.default)(Interactive,_React$Component);var _super=_createSuper(Interactive);function Interactive(props,context){var _this;return(0,_classCallCheck2.default)(this,Interactive),_this=_super.call(this,props,context),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"globalMouse",void 0),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"ref",void 0),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"nextTop",void 0),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"nextLeft",void 0),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"nextEvent",void 0),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"onMouseMove",(function(event){_this.state.moving?_this.calculateMove(event):_this.state.resizing?_this.calculateResize(event):_this.calculateResizable(event)})),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"startAction",(function(event){_this.globalMouse=!0,window.addEventListener("pointerup",_this.endAction,{passive:!0}),window.addEventListener("pointermove",_this.onMouseMove,{passive:!0});var isMovableAnchor=_this.props.isMovableAnchor;isMovableAnchor&&isMovableAnchor(event)?_this.startTitleAction(event):_this.startWindowAction(event)})),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"endAction",(function(){_this.globalMouse=!1,window.removeEventListener("pointermove",_this.onMouseMove),window.removeEventListener("pointerup",_this.endAction),_this.state.moving&&_this.resetMoving(),_this.state.resizing&&_this.resetResizing()})),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"onMouseLeave",(function(){_this.state.resizing||_this.state.moving||_this.setState({cursor:void 0})})),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"onClick",(function(e){_this.state.couldResize&&e.stopPropagation()})),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"setRef",(function(ref){_this.ref=ref;var innerRef=_this.props.innerRef;innerRef&&innerRef(ref)})),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"onLocalMouseMove",(function(event){_this.globalMouse||_this.onMouseMove(event.nativeEvent)})),_this.state={couldResize:!1,cursor:void 0,moving:!1,movingInitialCursor:null,movingInitialProps:null,resizing:!1,resizingInitialCursor:null,resizingInitialRect:null,resizingSides:null},_this.globalMouse=!1,_this}return(0,_createClass2.default)(Interactive,[{key:"startTitleAction",value:function startTitleAction(event){this.state.couldResize?this.startResizeAction(event):!0===this.props.movable&&this.startMoving(event)}},{key:"startMoving",value:function startMoving(event){var _this2=this,onMoveStart=this.props.onMoveStart;onMoveStart&&onMoveStart(),this.context.os&&this.context.os.timers.pause();var topLpf=new _lowPassFilter.default,leftLpf=new _lowPassFilter.default;this.nextTop=null,this.nextLeft=null,this.nextEvent=null;this.setState({cursor:"move",moving:!0,movingInitialCursor:{left:event.clientX,top:event.clientY},movingInitialProps:this.props},(function onFrame(){if(_this2.state.moving){var nextEvent=_this2.nextEvent,nextTop=_this2.nextTop,nextLeft=_this2.nextLeft;if(nextEvent&&null!=nextTop&&null!=nextLeft)if(topLpf.hasFullBuffer()){var newTop=topLpf.next(nextTop),newLeft=leftLpf.next(nextLeft);_this2.move(newTop,newLeft,nextEvent)}else _this2.move(nextTop,nextLeft,nextEvent);requestAnimationFrame(onFrame)}}))}},{key:"getPossibleTargetWindows",value:function getPossibleTargetWindows(rect){var closeWindows=[],siblings=this.props.siblings;if(siblings)for(var _key2 in siblings)if(_key2!==this.props.id){var win=siblings[_key2];if(win)(0,_snap.getDistanceTo)(rect,win)<=_snap.SNAP_SIZE&&closeWindows.push(win)}return closeWindows}},{key:"startWindowAction",value:function startWindowAction(event){this.state.couldResize&&this.startResizeAction(event)}},{key:"startResizeAction",value:function startResizeAction(event){event.stopPropagation(),event.preventDefault();var onResizeStart=this.props.onResizeStart;onResizeStart&&onResizeStart(),this.setState({resizing:!0,resizingInitialCursor:{left:event.clientX,top:event.clientY},resizingInitialRect:this.getRect()})}},{key:"componentDidUpdate",value:function componentDidUpdate(_prevProps,prevState){if(prevState.cursor!==this.state.cursor){var updateCursor=this.props.updateCursor;updateCursor&&updateCursor(this.state.cursor)}}},{key:"resetMoving",value:function resetMoving(){var onMoveEnd=this.props.onMoveEnd;onMoveEnd&&onMoveEnd(),this.context.os&&this.context.os.timers.resume(),this.setState({cursor:void 0,moving:!1,movingInitialProps:void 0,resizingInitialCursor:void 0})}},{key:"resetResizing",value:function resetResizing(){var onResizeEnd=this.props.onResizeEnd;onResizeEnd&&onResizeEnd(),this.setState({resizing:!1,resizingInitialCursor:void 0,resizingInitialRect:void 0,resizingSides:void 0})}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.endAction()}},{key:"calculateMove",value:function calculateMove(event){var _this$state=this.state,movingInitialCursor=_this$state.movingInitialCursor,movingInitialProps=_this$state.movingInitialProps,cursorLeft=event.clientX,cursorTop=event.clientY,movedLeft=movingInitialCursor.left-cursorLeft,movedTop=movingInitialCursor.top-cursorTop,newLeft=(movingInitialProps.left||0)-movedLeft,newTop=(movingInitialProps.top||0)-movedTop;if(event.altKey){var snapProps=this.getRect(),windows=this.getPossibleTargetWindows(snapProps);newLeft=(0,_snap.maybeSnapLeft)(snapProps,windows,newLeft),newTop=(0,_snap.maybeSnapTop)(snapProps,windows,newTop)}this.nextTop=newTop,this.nextLeft=newLeft,this.nextEvent=event}},{key:"resize",value:function resize(width,height){if(width!==this.props.width||height!==this.props.height){var onResize=this.props.onResize;if(onResize){width=Math.max(this.props.minWidth||0,width),height=Math.max(this.props.minHeight||0,height);var _this$props=this.props,maxHeight=_this$props.maxHeight,maxWidth=_this$props.maxWidth;null!=maxWidth&&(width=Math.min(maxWidth,width)),null!=maxHeight&&(height=Math.min(maxHeight,height)),onResize(width,height)}}}},{key:"move",value:function move(top,left,event){if(top=Math.max(this.props.minTop||0,top),left=Math.max(this.props.minLeft||0,left),top!==this.props.top||left!==this.props.left){var onMove=this.props.onMove;onMove&&onMove(top,left,event)}}},{key:"calculateResize",value:function calculateResize(event){var _this$state2=this.state,resizingInitialCursor=_this$state2.resizingInitialCursor,resizingInitialRect=_this$state2.resizingInitialRect,resizingSides=_this$state2.resizingSides,deltaLeft=resizingInitialCursor.left-event.clientX,deltaTop=resizingInitialCursor.top-event.clientY,newLeft=resizingInitialRect.left,newTop=resizingInitialRect.top,newWidth=resizingInitialRect.width,newHeight=resizingInitialRect.height;!0===resizingSides.right&&(newWidth-=deltaLeft),!0===resizingSides.bottom&&(newHeight-=deltaTop);var rect=this.getRect();if(!0===resizingSides.left&&(newLeft-=deltaLeft,newWidth+=deltaLeft,!0===this.props.movable)){var maxLeft=rect.left+rect.width-(this.props.minWidth||0),cleanLeft=Math.max(0,newLeft);cleanLeft=Math.min(cleanLeft,maxLeft),newWidth-=Math.abs(newLeft-cleanLeft),newLeft=cleanLeft}if(!0===resizingSides.top&&(newTop-=deltaTop,newHeight+=deltaTop,!0===this.props.movable)){var maxTop=rect.top+rect.height-(this.props.minHeight||0),cleanTop=Math.max(0,newTop);newHeight+=newTop-(cleanTop=Math.min(cleanTop,maxTop)),newTop=cleanTop}if(event.altKey){var windows=this.getPossibleTargetWindows(rect);if(!0===resizingSides.left){var newLeft2=(0,_snap.maybeSnapLeft)(rect,windows,newLeft);newWidth+=newLeft-newLeft2,newLeft=newLeft2}if(!0===resizingSides.top){var newTop2=(0,_snap.maybeSnapTop)(rect,windows,newTop);newHeight+=newTop-newTop2,newTop=newTop2}!0===resizingSides.bottom&&(newHeight=(0,_snap.maybeSnapTop)(rect,windows,newTop+newHeight)-newTop),!0===resizingSides.right&&(newWidth=(0,_snap.maybeSnapLeft)(rect,windows,newLeft+newWidth)-newLeft)}this.move(newTop,newLeft,event),this.resize(newWidth,newHeight)}},{key:"getRect",value:function getRect(){var props=this.props,ref=this.ref;if(!ref)throw new Error("expected ref");return{height:ref.offsetHeight||0,left:props.left||0,top:props.top||0,width:ref.offsetWidth||0}}},{key:"getResizable",value:function getResizable(){var resizable=this.props.resizable;return!0===resizable?ALL_RESIZABLE:null!=resizable&&!1!==resizable?resizable:void 0}},{key:"checkIfResizable",value:function checkIfResizable(event){var canResize=this.getResizable();if(canResize&&this.ref){var _this$ref$getBounding=this.ref.getBoundingClientRect(),offsetLeft=_this$ref$getBounding.left,offsetTop=_this$ref$getBounding.top,_this$getRect=this.getRect(),height=_this$getRect.height,width=_this$getRect.width,x=event.clientX-offsetLeft,y=event.clientY-offsetTop,gutterWidth=this.props.gutterWidth||5,atTop=y<=gutterWidth,atBottom=y>=height-gutterWidth,atLeft=x<=gutterWidth,atRight=x>=width-gutterWidth;return{bottom:!0===canResize.bottom&&atBottom,left:!0===canResize.left&&atLeft,right:!0===canResize.right&&atRight,top:!0===canResize.top&&atTop}}}},{key:"calculateResizable",value:function calculateResizable(event){var resizing=this.checkIfResizable(event);if(resizing){var canResize=this.getResizable();if(canResize){var newCursor,bottom=resizing.bottom,left=resizing.left,right=resizing.right,top=resizing.top,movingHorizontal=left||right,movingVertical=top||left;left&&(newCursor="ew-resize"),right&&(newCursor="ew-resize"),!movingHorizontal||!0===canResize.left&&!0===canResize.right||(newCursor="col-resize"),top&&(newCursor="ns-resize",left&&(newCursor="nwse-resize"),right&&(newCursor="nesw-resize")),bottom&&(newCursor="ns-resize",left&&(newCursor="nesw-resize"),right&&(newCursor="nwse-resize")),!movingVertical||movingHorizontal||!0===canResize.top&&!0===canResize.bottom||(newCursor="row-resize");var resizingSides={bottom,left,right,top},onCanResize=this.props.onCanResize;onCanResize&&onCanResize({}),this.setState({couldResize:Boolean(newCursor),cursor:newCursor,resizingSides})}}}},{key:"render",value:function render(){var _this$props2=this.props,grow=_this$props2.grow,height=_this$props2.height,left=_this$props2.left,movable=_this$props2.movable,top=_this$props2.top,width=_this$props2.width,zIndex=_this$props2.zIndex,style={cursor:this.state.cursor,zIndex:null==zIndex?"auto":zIndex};return!0!==movable&&null==top&&null==left||(!0===grow?(style.left=left||0,style.top=top||0):style.transform="translate3d(".concat(left||0,"px, ").concat(top||0,"px, 0)")),!0===grow?(style.right=0,style.bottom=0,style.width="100%",style.height="100%"):(style.width=null==width?"auto":width,style.height=null==height?"auto":height),this.props.style&&Object.assign(style,this.props.style),(0,_jsxRuntime.jsx)(Styled.Container,{hidden:this.props.hidden,ref:this.setRef,onMouseDown:this.startAction,onMouseMove:this.onLocalMouseMove,onMouseLeave:this.onMouseLeave,onClick:this.onClick,style:{width:"100px",height:"100px"},children:this.props.children})}}]),Interactive}(_react.default.Component);(0,_defineProperty2.default)(Interactive,"defaultProps",{minHeight:0,minLeft:0,minTop:0,minWidth:0});try{Interactive.displayName="Interactive",Interactive.__docgenInfo={description:"",displayName:"Interactive",props:{isMovableAnchor:{defaultValue:null,description:"",name:"isMovableAnchor",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => boolean)"}},onMoveStart:{defaultValue:null,description:"",name:"onMoveStart",required:!1,type:{name:"(() => void)"}},onMoveEnd:{defaultValue:null,description:"",name:"onMoveEnd",required:!1,type:{name:"(() => void)"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"((top: number, left: number, event: MouseEvent) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},movable:{defaultValue:null,description:"",name:"movable",required:!1,type:{name:"boolean"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},moving:{defaultValue:null,description:"",name:"moving",required:!1,type:{name:"boolean"}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},siblings:{defaultValue:null,description:"",name:"siblings",required:!1,type:{name:"Partial<{ [key: string]: Rect; }>"}},updateCursor:{defaultValue:null,description:"",name:"updateCursor",required:!1,type:{name:"((cursor?: string | null) => void)"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"number"}},minTop:{defaultValue:{value:"0"},description:"",name:"minTop",required:!1,type:{name:"number"}},minLeft:{defaultValue:{value:"0"},description:"",name:"minLeft",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},minWidth:{defaultValue:{value:"0"},description:"",name:"minWidth",required:!1,type:{name:"number"}},minHeight:{defaultValue:{value:"0"},description:"",name:"minHeight",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},onCanResize:{defaultValue:null,description:"",name:"onCanResize",required:!1,type:{name:"((sides: ResizingSides) => void)"}},onResizeStart:{defaultValue:null,description:"",name:"onResizeStart",required:!1,type:{name:"(() => void)"}},onResizeEnd:{defaultValue:null,description:"",name:"onResizeEnd",required:!1,type:{name:"(() => void)"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!1,type:{name:"((width: number, height: number) => void)"}},resizing:{defaultValue:null,description:"",name:"resizing",required:!1,type:{name:"boolean"}},resizable:{defaultValue:null,description:"",name:"resizable",required:!1,type:{name:"boolean | ResizingSides"}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!1,type:{name:"((elem: HTMLElement | null) => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},gutterWidth:{defaultValue:null,description:"",name:"gutterWidth",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/interactive/interactive.tsx#Interactive"]={docgenInfo:Interactive.__docgenInfo,name:"Interactive",path:"src/interactive/interactive.tsx#Interactive"})}catch(__react_docgen_typescript_loader_error){}},"./src/interactive/low-pass-filter.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js")),_createClass2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js")),_defineProperty2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));exports.default=function(){function LowPassFilter(){var _this=this,smoothing=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.9;(0,_classCallCheck2.default)(this,LowPassFilter),(0,_defineProperty2.default)(this,"bufferMaxSize",void 0),(0,_defineProperty2.default)(this,"smoothing",void 0),(0,_defineProperty2.default)(this,"buffer",void 0),(0,_defineProperty2.default)(this,"_nextReduce",(function(last,current){return _this.smoothing*current+(1-_this.smoothing)*last})),this.smoothing=smoothing,this.buffer=[],this.bufferMaxSize=5}return(0,_createClass2.default)(LowPassFilter,[{key:"hasFullBuffer",value:function hasFullBuffer(){return this.buffer.length===this.bufferMaxSize}},{key:"push",value:function push(value){var removed=0;if(this.hasFullBuffer()){var tmp=this.buffer.shift();if(void 0===tmp)throw new Error("Invariant violation: Buffer reported full but shift returned nothing.");removed=tmp}return this.buffer.push(value),removed}},{key:"next",value:function next(nextValue){var removed=this.push(nextValue),result=this.buffer.reduce(this._nextReduce,removed);return this.buffer[this.buffer.length-1]=result,result}}]),LowPassFilter}()},"./src/interactive/snap.tsx":(__unused_webpack_module,exports)=>{function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function F(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e2){didErr=!0,err=_e2},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}Object.defineProperty(exports,"__esModule",{value:!0}),exports.SNAP_SIZE=void 0,exports.distance=distance,exports.getDistanceTo=getDistanceTo,exports.getPossibleSnappedPosition=getPossibleSnappedPosition,exports.maybeSnapLeft=maybeSnapLeft,exports.maybeSnapTop=function maybeSnapTop(_props,windows,top){var snapBottom2=getPossibleSnappedPosition(windows,{getGap:function getGap(win){return top-win.top-win.height},getNew:function getNew(win){return win.top+win.height}});if(null!=snapBottom2)return snapBottom2;var snapBottom=getPossibleSnappedPosition(windows,{getGap:function getGap(win){return top-win.top-win.height},getNew:function getNew(win){return win.top+win.height}});if(null!=snapBottom)return snapBottom;var snapTop=getPossibleSnappedPosition(windows,{getGap:function getGap(win){return top-win.top},getNew:function getNew(win){return win.top}});if(null!=snapTop)return snapTop;return snapGrid(top)},exports.snapGrid=snapGrid;var SNAP_SIZE=exports.SNAP_SIZE=16;function snapGrid(val){return val-val%SNAP_SIZE}function getPossibleSnappedPosition(windows,_ref){var _step,getGap=_ref.getGap,getNew=_ref.getNew,_iterator=_createForOfIteratorHelper(windows);try{for(_iterator.s();!(_step=_iterator.n()).done;){var _win2=_step.value,gap=Math.abs(getGap(_win2));if(gap>=0&&gap<SNAP_SIZE)return getNew(_win2)}}catch(err){_iterator.e(err)}finally{_iterator.f()}}function getDistanceTo(props,win){var x1=win.left,y1=win.top,x1b=win.left+win.width,y1b=win.top+win.height,x2=props.left,y2=props.top,x2b=props.left+props.width,y2b=props.top+props.height,left=x2b<x1,right=x1b<x2,bottom=y2b<y1,top=y1b<y2;return top&&left?distance(x1,y1b,x2b,y2):left&&bottom?distance(x1,y1,x2b,y2b):bottom&&right?distance(x1b,y1,x2,y2b):right&&top?distance(x1b,y1b,x2,y2):left?x1-x2b:right?x2-x1b:bottom?y1-y2b:top?y2-y1b:0}function distance(x1,y1,x2,y2){return Math.abs(x1-x2)+Math.abs(y1-y2)}function maybeSnapLeft(props,windows,left){var snapRight=getPossibleSnappedPosition(windows,{getGap:function getGap(win){return win.left-(props.width+left)},getNew:function getNew(win){return win.left-props.width}});if(null!=snapRight)return snapRight;var snapLeft=getPossibleSnappedPosition(windows,{getGap:function getGap(win){return left-(win.left+win.width)},getNew:function getNew(win){return win.left+win.width}});return null!=snapLeft?snapLeft:snapGrid(left)}try{snapGrid.displayName="snapGrid",snapGrid.__docgenInfo={description:"",displayName:"snapGrid",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/interactive/snap.tsx#snapGrid"]={docgenInfo:snapGrid.__docgenInfo,name:"snapGrid",path:"src/interactive/snap.tsx#snapGrid"})}catch(__react_docgen_typescript_loader_error){}try{getDistanceTo.displayName="getDistanceTo",getDistanceTo.__docgenInfo={description:"",displayName:"getDistanceTo",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/interactive/snap.tsx#getDistanceTo"]={docgenInfo:getDistanceTo.__docgenInfo,name:"getDistanceTo",path:"src/interactive/snap.tsx#getDistanceTo"})}catch(__react_docgen_typescript_loader_error){}try{maybeSnapLeft.displayName="maybeSnapLeft",maybeSnapLeft.__docgenInfo={description:"",displayName:"maybeSnapLeft",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/interactive/snap.tsx#maybeSnapLeft"]={docgenInfo:maybeSnapLeft.__docgenInfo,name:"maybeSnapLeft",path:"src/interactive/snap.tsx#maybeSnapLeft"})}catch(__react_docgen_typescript_loader_error){}},"./src/interactive/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);var _templateObject,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),exports.Container=void 0;var _native=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts"));exports.Container=(0,_native.default)(_pressable.default)(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\twill-change: transform, height, width, z-index;\n"])))},"./src/pressable/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _pressable.Pressable}});var _pressable=__webpack_require__("./src/pressable/pressable.tsx")},"./src/pressable/pressable.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Pressable=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_Pressable=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Pressable/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["style"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var Pressable=exports.Pressable=React.forwardRef((function(props,ref){var style=props.style,rest=(0,_objectWithoutProperties2.default)(props,_excluded),resolvedStyle=React.useCallback((function(state){var finalStyle=[];"function"==typeof style?finalStyle=[style(state),{flexDirection:"row"}]:finalStyle=[{flexDirection:"row"},style];return finalStyle}),[style]);return(0,_jsxRuntime.jsx)(_Pressable.default,Object.assign({style:resolvedStyle,ref},rest))}));try{Pressable.displayName="Pressable",Pressable.__docgenInfo={description:"",displayName:"Pressable",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pressable/pressable.tsx#Pressable"]={docgenInfo:Pressable.__docgenInfo,name:"Pressable",path:"src/pressable/pressable.tsx#Pressable"})}catch(__react_docgen_typescript_loader_error){}}}]);