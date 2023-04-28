(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[28205,53670,72851],{"./node_modules/lodash/_apply.js":module=>{module.exports=function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2])}return func.apply(thisArg,args)}},"./node_modules/lodash/_assignValue.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseAssignValue=__webpack_require__("./node_modules/lodash/_baseAssignValue.js"),eq=__webpack_require__("./node_modules/lodash/eq.js"),hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function assignValue(object,key,value){var objValue=object[key];hasOwnProperty.call(object,key)&&eq(objValue,value)&&(void 0!==value||key in object)||baseAssignValue(object,key,value)}},"./node_modules/lodash/_baseDelay.js":module=>{module.exports=function baseDelay(func,wait,args){if("function"!=typeof func)throw new TypeError("Expected a function");return setTimeout((function(){func.apply(void 0,args)}),wait)}},"./node_modules/lodash/_baseFlatten.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayPush=__webpack_require__("./node_modules/lodash/_arrayPush.js"),isFlattenable=__webpack_require__("./node_modules/lodash/_isFlattenable.js");module.exports=function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;for(predicate||(predicate=isFlattenable),result||(result=[]);++index<length;){var value=array[index];depth>0&&predicate(value)?depth>1?baseFlatten(value,depth-1,predicate,isStrict,result):arrayPush(result,value):isStrict||(result[result.length]=value)}return result}},"./node_modules/lodash/_basePick.js":(module,__unused_webpack_exports,__webpack_require__)=>{var basePickBy=__webpack_require__("./node_modules/lodash/_basePickBy.js"),hasIn=__webpack_require__("./node_modules/lodash/hasIn.js");module.exports=function basePick(object,paths){return basePickBy(object,paths,(function(value,path){return hasIn(object,path)}))}},"./node_modules/lodash/_basePickBy.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseGet=__webpack_require__("./node_modules/lodash/_baseGet.js"),baseSet=__webpack_require__("./node_modules/lodash/_baseSet.js"),castPath=__webpack_require__("./node_modules/lodash/_castPath.js");module.exports=function basePickBy(object,paths,predicate){for(var index=-1,length=paths.length,result={};++index<length;){var path=paths[index],value=baseGet(object,path);predicate(value,path)&&baseSet(result,castPath(path,object),value)}return result}},"./node_modules/lodash/_baseRest.js":(module,__unused_webpack_exports,__webpack_require__)=>{var identity=__webpack_require__("./node_modules/lodash/identity.js"),overRest=__webpack_require__("./node_modules/lodash/_overRest.js"),setToString=__webpack_require__("./node_modules/lodash/_setToString.js");module.exports=function baseRest(func,start){return setToString(overRest(func,start,identity),func+"")}},"./node_modules/lodash/_baseSet.js":(module,__unused_webpack_exports,__webpack_require__)=>{var assignValue=__webpack_require__("./node_modules/lodash/_assignValue.js"),castPath=__webpack_require__("./node_modules/lodash/_castPath.js"),isIndex=__webpack_require__("./node_modules/lodash/_isIndex.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),toKey=__webpack_require__("./node_modules/lodash/_toKey.js");module.exports=function baseSet(object,path,value,customizer){if(!isObject(object))return object;for(var index=-1,length=(path=castPath(path,object)).length,lastIndex=length-1,nested=object;null!=nested&&++index<length;){var key=toKey(path[index]),newValue=value;if("__proto__"===key||"constructor"===key||"prototype"===key)return object;if(index!=lastIndex){var objValue=nested[key];void 0===(newValue=customizer?customizer(objValue,key,nested):void 0)&&(newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{})}assignValue(nested,key,newValue),nested=nested[key]}return object}},"./node_modules/lodash/_baseSetToString.js":(module,__unused_webpack_exports,__webpack_require__)=>{var constant=__webpack_require__("./node_modules/lodash/constant.js"),defineProperty=__webpack_require__("./node_modules/lodash/_defineProperty.js"),identity=__webpack_require__("./node_modules/lodash/identity.js"),baseSetToString=defineProperty?function(func,string){return defineProperty(func,"toString",{configurable:!0,enumerable:!1,value:constant(string),writable:!0})}:identity;module.exports=baseSetToString},"./node_modules/lodash/_baseTrim.js":(module,__unused_webpack_exports,__webpack_require__)=>{var trimmedEndIndex=__webpack_require__("./node_modules/lodash/_trimmedEndIndex.js"),reTrimStart=/^\s+/;module.exports=function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,""):string}},"./node_modules/lodash/_baseValues.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayMap=__webpack_require__("./node_modules/lodash/_arrayMap.js");module.exports=function baseValues(object,props){return arrayMap(props,(function(key){return object[key]}))}},"./node_modules/lodash/_flatRest.js":(module,__unused_webpack_exports,__webpack_require__)=>{var flatten=__webpack_require__("./node_modules/lodash/flatten.js"),overRest=__webpack_require__("./node_modules/lodash/_overRest.js"),setToString=__webpack_require__("./node_modules/lodash/_setToString.js");module.exports=function flatRest(func){return setToString(overRest(func,void 0,flatten),func+"")}},"./node_modules/lodash/_isFlattenable.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Symbol=__webpack_require__("./node_modules/lodash/_Symbol.js"),isArguments=__webpack_require__("./node_modules/lodash/isArguments.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),spreadableSymbol=Symbol?Symbol.isConcatSpreadable:void 0;module.exports=function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol])}},"./node_modules/lodash/_overRest.js":(module,__unused_webpack_exports,__webpack_require__)=>{var apply=__webpack_require__("./node_modules/lodash/_apply.js"),nativeMax=Math.max;module.exports=function overRest(func,start,transform){return start=nativeMax(void 0===start?func.length-1:start,0),function(){for(var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);++index<length;)array[index]=args[start+index];index=-1;for(var otherArgs=Array(start+1);++index<start;)otherArgs[index]=args[index];return otherArgs[start]=transform(array),apply(func,this,otherArgs)}}},"./node_modules/lodash/_setToString.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseSetToString=__webpack_require__("./node_modules/lodash/_baseSetToString.js"),setToString=__webpack_require__("./node_modules/lodash/_shortOut.js")(baseSetToString);module.exports=setToString},"./node_modules/lodash/_shortOut.js":module=>{var nativeNow=Date.now;module.exports=function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=16-(stamp-lastCalled);if(lastCalled=stamp,remaining>0){if(++count>=800)return arguments[0]}else count=0;return func.apply(void 0,arguments)}}},"./node_modules/lodash/_trimmedEndIndex.js":module=>{var reWhitespace=/\s/;module.exports=function trimmedEndIndex(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index}},"./node_modules/lodash/constant.js":module=>{module.exports=function constant(value){return function(){return value}}},"./node_modules/lodash/delay.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseDelay=__webpack_require__("./node_modules/lodash/_baseDelay.js"),baseRest=__webpack_require__("./node_modules/lodash/_baseRest.js"),toNumber=__webpack_require__("./node_modules/lodash/toNumber.js"),delay=baseRest((function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args)}));module.exports=delay},"./node_modules/lodash/flatten.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseFlatten=__webpack_require__("./node_modules/lodash/_baseFlatten.js");module.exports=function flatten(array){return(null==array?0:array.length)?baseFlatten(array,1):[]}},"./node_modules/lodash/pick.js":(module,__unused_webpack_exports,__webpack_require__)=>{var basePick=__webpack_require__("./node_modules/lodash/_basePick.js"),pick=__webpack_require__("./node_modules/lodash/_flatRest.js")((function(object,paths){return null==object?{}:basePick(object,paths)}));module.exports=pick},"./node_modules/lodash/toNumber.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseTrim=__webpack_require__("./node_modules/lodash/_baseTrim.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isSymbol=__webpack_require__("./node_modules/lodash/isSymbol.js"),reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=function toNumber(value){if("number"==typeof value)return value;if(isSymbol(value))return NaN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NaN:+value}},"./node_modules/lodash/uniqueId.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}},"./node_modules/lodash/values.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseValues=__webpack_require__("./node_modules/lodash/_baseValues.js"),keys=__webpack_require__("./node_modules/lodash/keys.js");module.exports=function values(object){return null==object?[]:baseValues(object,keys(object))}},"./src/icon/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _icon.Icon}});var _icon=__webpack_require__("./src/icon/icon.tsx")},"./src/pill/pill.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Pill=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),Styled=_interopRequireWildcard(__webpack_require__("./src/pill/styles.ts")),_icon=_interopRequireDefault(__webpack_require__("./src/icon/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./src/pressable/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Pill=function Pill(_ref){var children=_ref.children,removable=_ref.removable,disabled=_ref.disabled,onRemove=_ref.onRemove,onPress=_ref.onPress,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"primary":_ref$color,icon=_ref.icon,label=((0,_native.useTheme)(),"string"==typeof children?(0,_jsxRuntime.jsx)(_text.default,{size,type:"inverse",numberOfLines:1,children}):children);return(0,_jsxRuntime.jsxs)(_View.default,{style:{maxWidth:"100%",flexDirection:"row"},children:[(0,_jsxRuntime.jsxs)(_pressable.default,{onPress:disabled?void 0:onPress,style:{flex:1,flexDirection:"row"},children:[icon&&(0,_jsxRuntime.jsx)(Styled.Pill,{disabled,size,color,style:{borderTopRightRadius:0,borderBottomRightRadius:0,paddingRight:0},children:(0,_jsxRuntime.jsx)(_icon.default,{name:icon,size,type:"inverse"})}),(0,_jsxRuntime.jsx)(Styled.Pill,{disabled,size,color,style:{borderTopLeftRadius:icon?0:void 0,borderBottomLeftRadius:icon?0:void 0,borderTopRightRadius:removable?0:void 0,borderBottomRightRadius:removable?0:void 0},children:label})]}),removable&&(0,_jsxRuntime.jsx)(_pressable.default,{onPress:onRemove,children:(0,_jsxRuntime.jsx)(Styled.Pill,{disabled,size,color,style:{borderTopLeftRadius:0,borderBottomLeftRadius:0,paddingLeft:0},children:(0,_jsxRuntime.jsx)(_icon.default,{name:"xmark",size,disabled,type:"inverse"})})})]})};exports.Pill=Pill;var skeletonSizeMap={xSmall:{width:30,height:12},small:{width:50,height:18},normal:{width:80,height:24},medium:{width:90,height:28},large:{width:100,height:36},xLarge:{width:120,height:48},xxLarge:{width:140,height:60}};Pill.Skeleton=function PillSkeleton(_ref2){var _ref2$size=_ref2.size,size=void 0===_ref2$size?"medium":_ref2$size;return(0,_jsxRuntime.jsx)(Styled.PillSkeleton,{size,width:skeletonSizeMap[size].width,height:skeletonSizeMap[size].height})};try{Pill.displayName="Pill",Pill.__docgenInfo={description:"",displayName:"Pill",props:{children:{defaultValue:null,description:"Pill label",name:"children",required:!0,type:{name:"ReactNode"}},removable:{defaultValue:null,description:"Set to `true` add remove icon.",name:"removable",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Set to `true` to disable.",name:"disabled",required:!1,type:{name:"boolean"}},onRemove:{defaultValue:null,description:"Called if remove icon is pressed",name:"onRemove",required:!1,type:{name:"(() => void)"}},onPress:{defaultValue:null,description:"Called if pill is pressed",name:"onPress",required:!1,type:{name:"(() => void)"}},size:{defaultValue:{value:"medium"},description:"Pill text size, also scales spacing",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},color:{defaultValue:{value:"primary"},description:"Background color of the pill",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},icon:{defaultValue:null,description:"Add an icon next to the label",name:"icon",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"grid"'},{value:'"circle"'},{value:'"addressCard"'},{value:'"arrowDown"'},{value:'"arrowLeft"'},{value:'"arrowRightFromBracket"'},{value:'"arrowRight"'},{value:'"arrowRotateLeft"'},{value:'"arrowRotateRight"'},{value:'"arrowUp"'},{value:'"badgeDollar"'},{value:'"badgePercent"'},{value:'"ban"'},{value:'"barcode"'},{value:'"bars"'},{value:'"basketShopping"'},{value:'"bell"'},{value:'"bookmark"'},{value:'"boxOpenFull"'},{value:'"boxesStacked"'},{value:'"calculatorSimple"'},{value:'"calculator"'},{value:'"calendarDays"'},{value:'"calendar"'},{value:'"caretDown"'},{value:'"caretLeft"'},{value:'"caretRight"'},{value:'"caretUp"'},{value:'"cartPlus"'},{value:'"cartShopping"'},{value:'"cashRegister"'},{value:'"check"'},{value:'"circleCheck"'},{value:'"circleChevronRight"'},{value:'"circleDollar"'},{value:'"circleEllipsis"'},{value:'"circleExclamation"'},{value:'"circleInfo"'},{value:'"circleMinus"'},{value:'"circlePause"'},{value:'"circlePlus"'},{value:'"circleQuestion"'},{value:'"circleXmark"'},{value:'"clock"'},{value:'"commentQuestion"'},{value:'"commentsQuestion"'},{value:'"creditCard"'},{value:'"deleteLeft"'},{value:'"divide"'},{value:'"download"'},{value:'"ellipsisVertical"'},{value:'"equals"'},{value:'"eyeSlash"'},{value:'"eye"'},{value:'"fileInvoiceDollar"'},{value:'"folders"'},{value:'"gear"'},{value:'"giftCard"'},{value:'"gift"'},{value:'"gifts"'},{value:'"grid2Plus"'},{value:'"grid2"'},{value:'"gripLinesVertical"'},{value:'"icons"'},{value:'"lifeRing"'},{value:'"listTree"'},{value:'"magnifyingGlass"'},{value:'"minus"'},{value:'"penToSquare"'},{value:'"percent"'},{value:'"plusMinus"'},{value:'"plus"'},{value:'"receipt"'},{value:'"rectangleBarcode"'},{value:'"shop"'},{value:'"sliders"'},{value:'"starOfLife"'},{value:'"star"'},{value:'"store"'},{value:'"tag"'},{value:'"tags"'},{value:'"trash"'},{value:'"triangleExclamation"'},{value:'"truck"'},{value:'"userPlus"'},{value:'"user"'},{value:'"users"'},{value:'"wordpressSimple"'},{value:'"wordpress"'},{value:'"xmark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pill/pill.tsx#Pill"]={docgenInfo:Pill.__docgenInfo,name:"Pill",path:"src/pill/pill.tsx#Pill"})}catch(__react_docgen_typescript_loader_error){}try{Skeleton.displayName="Pill.Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Pill.Skeleton",props:{size:{defaultValue:{value:"medium"},description:"Called if pill is pressed",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pill/pill.tsx#Pill.Skeleton"]={docgenInfo:Pill.Skeleton.__docgenInfo,name:"Pill.Skeleton",path:"src/pill/pill.tsx#Pill.Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/pill/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.PillSkeleton=exports.Pill=exports.Label=void 0;var _templateObject,_templateObject2,_templateObject3,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js")),_native=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")),_skeleton=__webpack_require__("./src/skeleton/skeleton.tsx"),_text=__webpack_require__("./src/text/text.tsx"),Pill=_native.default.View(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n\tflex-direction: row;\n\talign-items: center;\n\tpadding: ","\n\tborder-radius: ","\n\tbackground-color: ",";\n\tgap: ",";\n\tmax-width: 100%;\n"])),(function(_ref){var theme=_ref.theme;switch(_ref.size){case"xSmall":return theme.spacing.xxSmall+"px "+theme.spacing.xSmall+"px";case"small":return theme.spacing.xxSmall+"px "+theme.spacing.small+"px";case"large":case"xLarge":return theme.spacing.small+"px "+theme.spacing.medium+"px";default:return theme.spacing.xSmall+"px "+theme.spacing.small+"px"}}),(function(_ref2){var theme=_ref2.theme;switch(_ref2.size){case"xSmall":case"small":return theme.rounding.large+"px";case"large":case"xLarge":return theme.rounding.xxLarge+"px";default:return theme.rounding.xLarge+"px"}}),(function(_ref3){var theme=_ref3.theme,disabled=_ref3.disabled,color=_ref3.color;return disabled?theme.colors.disabled:theme.colors[color]}),(function(_ref4){var theme=_ref4.theme;_ref4.size;return theme.spacing.xSmall+"px"}));exports.Pill=Pill;var Label=(0,_native.default)(_text.Text)(_templateObject2||(_templateObject2=(0,_taggedTemplateLiteralLoose2.default)(["\n\tcolor: ",";\n"])),(function(_ref5){return _ref5.theme.colors.inverse}));exports.Label=Label;var PillSkeleton=(0,_native.default)(_skeleton.Skeleton)(_templateObject3||(_templateObject3=(0,_taggedTemplateLiteralLoose2.default)(["\n\tborder-radius: ",";\n"])),(function(_ref6){var theme=_ref6.theme;switch(_ref6.size){case"xSmall":case"small":return theme.rounding.large+"px";case"large":case"xLarge":return theme.rounding.xxLarge+"px";default:return theme.rounding.xLarge+"px"}}));exports.PillSkeleton=PillSkeleton}}]);