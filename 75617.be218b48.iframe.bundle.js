(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[75617,27757,68009,78070,63446],{"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,{Z:()=>_taggedTemplateLiteral})},"./node_modules/lodash/_asciiToArray.js":module=>{module.exports=function asciiToArray(string){return string.split("")}},"./node_modules/lodash/_baseSlice.js":module=>{module.exports=function baseSlice(array,start,end){var index=-1,length=array.length;start<0&&(start=-start>length?0:length+start),(end=end>length?length:end)<0&&(end+=length),length=start>end?0:end-start>>>0,start>>>=0;for(var result=Array(length);++index<length;)result[index]=array[index+start];return result}},"./node_modules/lodash/_castSlice.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseSlice=__webpack_require__("./node_modules/lodash/_baseSlice.js");module.exports=function castSlice(array,start,end){var length=array.length;return end=void 0===end?length:end,!start&&end>=length?array:baseSlice(array,start,end)}},"./node_modules/lodash/_createCaseFirst.js":(module,__unused_webpack_exports,__webpack_require__)=>{var castSlice=__webpack_require__("./node_modules/lodash/_castSlice.js"),hasUnicode=__webpack_require__("./node_modules/lodash/_hasUnicode.js"),stringToArray=__webpack_require__("./node_modules/lodash/_stringToArray.js"),toString=__webpack_require__("./node_modules/lodash/toString.js");module.exports=function createCaseFirst(methodName){return function(string){string=toString(string);var strSymbols=hasUnicode(string)?stringToArray(string):void 0,chr=strSymbols?strSymbols[0]:string.charAt(0),trailing=strSymbols?castSlice(strSymbols,1).join(""):string.slice(1);return chr[methodName]()+trailing}}},"./node_modules/lodash/_hasUnicode.js":module=>{var reHasUnicode=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");module.exports=function hasUnicode(string){return reHasUnicode.test(string)}},"./node_modules/lodash/_stringToArray.js":(module,__unused_webpack_exports,__webpack_require__)=>{var asciiToArray=__webpack_require__("./node_modules/lodash/_asciiToArray.js"),hasUnicode=__webpack_require__("./node_modules/lodash/_hasUnicode.js"),unicodeToArray=__webpack_require__("./node_modules/lodash/_unicodeToArray.js");module.exports=function stringToArray(string){return hasUnicode(string)?unicodeToArray(string):asciiToArray(string)}},"./node_modules/lodash/_unicodeToArray.js":module=>{var rsAstral="[\\ud800-\\udfff]",rsCombo="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",rsFitz="\\ud83c[\\udffb-\\udfff]",rsNonAstral="[^\\ud800-\\udfff]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",reOptMod="(?:"+rsCombo+"|"+rsFitz+")"+"?",rsSeq="[\\ufe0e\\ufe0f]?"+reOptMod+("(?:\\u200d(?:"+[rsNonAstral,rsRegional,rsSurrPair].join("|")+")[\\ufe0e\\ufe0f]?"+reOptMod+")*"),rsSymbol="(?:"+[rsNonAstral+rsCombo+"?",rsCombo,rsRegional,rsSurrPair,rsAstral].join("|")+")",reUnicode=RegExp(rsFitz+"(?="+rsFitz+")|"+rsSymbol+rsSeq,"g");module.exports=function unicodeToArray(string){return string.match(reUnicode)||[]}},"./node_modules/lodash/capitalize.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),upperFirst=__webpack_require__("./node_modules/lodash/upperFirst.js");module.exports=function capitalize(string){return upperFirst(toString(string).toLowerCase())}},"./node_modules/lodash/upperFirst.js":(module,__unused_webpack_exports,__webpack_require__)=>{var upperFirst=__webpack_require__("./node_modules/lodash/_createCaseFirst.js")("toUpperCase");module.exports=upperFirst},"./src/arrow/arrow.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Arrow=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _capitalize=_interopRequireDefault(__webpack_require__("./node_modules/lodash/capitalize.js")),_get=_interopRequireDefault(__webpack_require__("./node_modules/lodash/get.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/arrow/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Arrow=function Arrow(_ref){var _ref$direction=_ref.direction,direction=void 0===_ref$direction?"down":_ref$direction,_ref$size=_ref.size,size=void 0===_ref$size?"default":_ref$size,color=_ref.color,style=_ref.style,StyledArrow=(0,_get.default)(Styled,(0,_capitalize.default)(direction));return(0,_jsxRuntime.jsx)(Styled.Container,{direction,size,style,children:(0,_jsxRuntime.jsx)(StyledArrow,{size,color})})};exports.Arrow=Arrow;try{Arrow.displayName="Arrow",Arrow.__docgenInfo={description:"",displayName:"Arrow",props:{direction:{defaultValue:{value:"down"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"up"'},{value:'"down"'}]}},size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'},{value:'"large"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"ColorValue"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/arrow/arrow.tsx#Arrow"]={docgenInfo:Arrow.__docgenInfo,name:"Arrow",path:"src/arrow/arrow.tsx#Arrow"})}catch(__react_docgen_typescript_loader_error){}},"./src/arrow/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _arrow.Arrow}});var _arrow=__webpack_require__("./src/arrow/arrow.tsx")},"./src/arrow/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),exports.Up=exports.Right=exports.Left=exports.Down=exports.Container=void 0;var _native=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var sizes={small:8,large:20,default:12},Container=_native.default.View(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\twidth: ","px;\n\theight: ","px;\n\n\t/** Hack to get arrow in the right position */\n\t","\n"])),(function(_ref){var size=_ref.size;return sizes[size||"default"]}),(function(_ref2){var size=_ref2.size;return sizes[size||"default"]}),(function(_ref3){return"up"===_ref3.direction&&(0,_native.css)(_templateObject2||(_templateObject2=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\t\t\tflex-direction: row;\n\t\t"])))}));exports.Container=Container;var Left=_native.default.View(_templateObject3||(_templateObject3=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\tborder-top-width: ","px;\n\tborder-bottom-width: ","px;\n\tborder-right-width: ","px;\n\tborder-right-color: ",";\n\tborder-top-color: transparent;\n\tborder-bottom-color: transparent;\n"])),(function(_ref4){var size=_ref4.size;return sizes[size||"default"]/2}),(function(_ref5){var size=_ref5.size;return sizes[size||"default"]/2}),(function(_ref6){var size=_ref6.size;return sizes[size||"default"]/2}),(function(_ref7){var theme=_ref7.theme;return _ref7.color||theme.colors.primary}));exports.Left=Left;var Right=_native.default.View(_templateObject4||(_templateObject4=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\tborder-top-width: ","px;\n\tborder-bottom-width: ","px;\n\tborder-left-width: ","px;\n\tborder-left-color: ",";\n\tborder-top-color: transparent;\n\tborder-bottom-color: transparent;\n"])),(function(_ref8){var size=_ref8.size;return sizes[size||"default"]/2}),(function(_ref9){var size=_ref9.size;return sizes[size||"default"]/2}),(function(_ref10){var size=_ref10.size;return sizes[size||"default"]/2}),(function(_ref11){var theme=_ref11.theme;return _ref11.color||theme.colors.primary}));exports.Right=Right;var Up=_native.default.View(_templateObject5||(_templateObject5=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\tborder-left-width: ","px;\n\tborder-right-width: ","px;\n\tborder-bottom-width: ","px;\n\tborder-bottom-color: ",";\n\tborder-left-color: transparent;\n\tborder-right-color: transparent;\n"])),(function(_ref12){var size=_ref12.size;return sizes[size||"default"]/2}),(function(_ref13){var size=_ref13.size;return sizes[size||"default"]/2}),(function(_ref14){var size=_ref14.size;return sizes[size||"default"]/2}),(function(_ref15){var theme=_ref15.theme;return _ref15.color||theme.colors.primary}));exports.Up=Up;var Down=_native.default.View(_templateObject6||(_templateObject6=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\tborder-left-width: ","px;\n\tborder-right-width: ","px;\n\tborder-top-width: ","px;\n\tborder-top-color: ",";\n\tborder-left-color: transparent;\n\tborder-right-color: transparent;\n"])),(function(_ref16){var size=_ref16.size;return sizes[size||"default"]/2}),(function(_ref17){var size=_ref17.size;return sizes[size||"default"]/2}),(function(_ref18){var size=_ref18.size;return sizes[size||"default"]/2}),(function(_ref19){var theme=_ref19.theme;return _ref19.color||theme.colors.primary}));exports.Down=Down},"./src/popover/arrow.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Arrow=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_helpers=__webpack_require__("./src/popover/helpers.ts"),_arrow=_interopRequireDefault(__webpack_require__("./src/arrow/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Arrow=function Arrow(_ref){var placement=_ref.placement,style=_ref.style;return(0,_jsxRuntime.jsx)(_arrow.default,{color:style&&_StyleSheet.default.flatten(style).backgroundColor||"#fff",direction:(0,_helpers.getArrowDirection)(placement),style:[(0,_helpers.getArrowAlign)(placement),{zIndex:10}],size:"small"})};exports.Arrow=Arrow;try{Arrow.displayName="Arrow",Arrow.__docgenInfo={description:"",displayName:"Arrow",props:{placement:{defaultValue:null,description:"",name:"placement",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/popover/arrow.tsx#Arrow"]={docgenInfo:Arrow.__docgenInfo,name:"Arrow",path:"src/popover/arrow.tsx#Arrow"})}catch(__react_docgen_typescript_loader_error){}},"./src/popover/helpers.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.isLeft=exports.isEnd=exports.isBottom=exports.getPopoverPosition=exports.getContainerAlign=exports.getArrowDirection=exports.getArrowAlign=exports.adjustPlacement=void 0,exports.isPressInsideElement=function isPressInsideElement(event,element){var leftBound=element.pageX,rightBound=element.pageX+element.width,topBound=element.pageY,bottomBound=element.pageY+element.height;return event.absoluteX>=leftBound&&event.absoluteX<=rightBound&&event.absoluteY>=topBound&&event.absoluteY<=bottomBound},exports.isTop=exports.isStart=exports.isRight=void 0;var _Dimensions=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Dimensions/index.js")),PLACEMENTS={top:["top","top-start","top-end"],bottom:["bottom","bottom-start","bottom-end"],left:["left","left-start","left-end"],right:["right","right-start","right-end"],start:["top-start","bottom-start","left-start","right-start"],end:["top-end","bottom-end","left-end","right-end"]},isTop=function isTop(placement){return PLACEMENTS.top.indexOf(placement)>=0};exports.isTop=isTop;var isBottom=function isBottom(placement){return PLACEMENTS.bottom.indexOf(placement)>=0};exports.isBottom=isBottom;var isLeft=function isLeft(placement){return PLACEMENTS.left.indexOf(placement)>=0};exports.isLeft=isLeft;var isRight=function isRight(placement){return PLACEMENTS.right.indexOf(placement)>=0};exports.isRight=isRight;var isStart=function isStart(placement){return PLACEMENTS.start.indexOf(placement)>=0};exports.isStart=isStart;var isEnd=function isEnd(placement){return PLACEMENTS.end.indexOf(placement)>=0};exports.isEnd=isEnd;exports.getContainerAlign=function getContainerAlign(placement){return isStart(placement)?{alignItems:"flex-start",justifyContent:"flex-start"}:isEnd(placement)?{alignItems:"flex-end",justifyContent:"flex-end"}:{alignItems:"center",justifyContent:"center"}};var getPopoverPosition=function getPopoverPosition(placement,target,contentWidth,contentHeight){var withinPortal=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],position={},isHorizontal=isRight(placement)||isLeft(placement),isVertical=isTop(placement)||isBottom(placement),isStartPlacement=isStart(placement),isEndPlacement=isEnd(placement);return isHorizontal?(position.flexDirection="row",position.left=isRight(placement)?withinPortal?target.pageX+target.width:target.width:withinPortal?target.pageX-contentWidth:-contentWidth,position.top=isStartPlacement?withinPortal?target.pageY:0:isEndPlacement?withinPortal?target.pageY+target.height-contentHeight:target.height-contentHeight:withinPortal?target.pageY+target.height/2-contentHeight/2:target.height/2-contentHeight/2):isVertical&&(position.top=isTop(placement)?withinPortal?target.pageY-contentHeight:-contentHeight:withinPortal?target.pageY+target.height:target.height,position.left=isStartPlacement?withinPortal?target.pageX:0:isEndPlacement?withinPortal?target.pageX+target.width-contentWidth:target.width-contentWidth:withinPortal?target.pageX+target.width/2-contentWidth/2:target.width/2-contentWidth/2),position};exports.getPopoverPosition=getPopoverPosition;exports.getArrowDirection=function getArrowDirection(placement){return isTop(placement)?"down":isLeft(placement)?"right":isRight(placement)?"left":"up"};exports.getArrowAlign=function getArrowAlign(placement){return isStart(placement)?{alignSelf:"flex-start",paddingTop:isLeft(placement)||isRight(placement)?10:0,paddingLeft:isTop(placement)||isBottom(placement)?10:0}:isEnd(placement)?{alignSelf:"flex-end",paddingBottom:isLeft(placement)||isRight(placement)?10:0,paddingRight:isTop(placement)||isBottom(placement)?10:0}:{alignSelf:"center"}};exports.adjustPlacement=function adjustPlacement(placement,position,targetMeasurements,contentWidth,contentHeight,withinPortal){var depth=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;if(depth>3)return placement;var _Dimensions$get=_Dimensions.default.get("window"),windowWidth=_Dimensions$get.width,windowHeight=_Dimensions$get.height,top=position.top,left=position.left,adjustedPlacement=placement;return withinPortal?isTop(placement)&&top<0?adjustedPlacement="bottom"+(isStart(placement)?"-start":isEnd(placement)?"-end":""):isBottom(placement)&&top+contentHeight>windowHeight?adjustedPlacement="top"+(isStart(placement)?"-start":isEnd(placement)?"-end":""):isLeft(placement)&&left<0?adjustedPlacement="right"+(isStart(placement)?"-start":isEnd(placement)?"-end":""):isRight(placement)&&left+contentWidth>windowWidth&&(adjustedPlacement="left"+(isStart(placement)?"-start":isEnd(placement)?"-end":"")):isTop(placement)&&top<-targetMeasurements.height?adjustedPlacement="bottom"+(isStart(placement)?"-start":isEnd(placement)?"-end":""):isBottom(placement)&&top+contentHeight>targetMeasurements.height?adjustedPlacement="top"+(isStart(placement)?"-start":isEnd(placement)?"-end":""):isLeft(placement)&&left<-targetMeasurements.width?adjustedPlacement="right"+(isStart(placement)?"-start":isEnd(placement)?"-end":""):isRight(placement)&&left+contentWidth>targetMeasurements.width&&(adjustedPlacement="left"+(isStart(placement)?"-start":isEnd(placement)?"-end":"")),adjustedPlacement!==placement?adjustPlacement(adjustedPlacement,getPopoverPosition(adjustedPlacement,targetMeasurements,contentWidth,contentHeight,withinPortal),targetMeasurements,contentWidth,contentHeight,withinPortal,depth+1):placement}}}]);