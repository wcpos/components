(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[15994,52382,94663,9685],{"./node_modules/@wcpos/hooks/src/use-merged-ref/assign-ref.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.assignRef=function assignRef(ref,value){"function"==typeof ref?ref(value):"object"==typeof ref&&null!==ref&&"current"in ref&&(ref.current=value)}},"./node_modules/@wcpos/hooks/src/use-merged-ref/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _useMergedRef.useMergedRef}});var _useMergedRef=__webpack_require__("./node_modules/@wcpos/hooks/src/use-merged-ref/use-merged-ref.ts")},"./node_modules/@wcpos/hooks/src/use-merged-ref/use-merged-ref.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeRefs=mergeRefs,exports.useMergedRef=function useMergedRef(){for(var _len2=arguments.length,refs=new Array(_len2),_key2=0;_key2<_len2;_key2++)refs[_key2]=arguments[_key2];return React.useCallback(mergeRefs.apply(void 0,refs),refs)};var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_assignRef=__webpack_require__("./node_modules/@wcpos/hooks/src/use-merged-ref/assign-ref.ts");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function mergeRefs(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(node){refs.forEach((function(ref){return(0,_assignRef.assignRef)(ref,node)}))}}},"./node_modules/lodash/_arrayReduce.js":module=>{module.exports=function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=null==array?0:array.length;for(initAccum&&length&&(accumulator=array[++index]);++index<length;)accumulator=iteratee(accumulator,array[index],index,array);return accumulator}},"./node_modules/lodash/_asciiWords.js":module=>{var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;module.exports=function asciiWords(string){return string.match(reAsciiWord)||[]}},"./node_modules/lodash/_basePropertyOf.js":module=>{module.exports=function basePropertyOf(object){return function(key){return null==object?void 0:object[key]}}},"./node_modules/lodash/_createCompounder.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayReduce=__webpack_require__("./node_modules/lodash/_arrayReduce.js"),deburr=__webpack_require__("./node_modules/lodash/deburr.js"),words=__webpack_require__("./node_modules/lodash/words.js"),reApos=RegExp("['’]","g");module.exports=function createCompounder(callback){return function(string){return arrayReduce(words(deburr(string).replace(reApos,"")),callback,"")}}},"./node_modules/lodash/_deburrLetter.js":(module,__unused_webpack_exports,__webpack_require__)=>{var deburrLetter=__webpack_require__("./node_modules/lodash/_basePropertyOf.js")({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});module.exports=deburrLetter},"./node_modules/lodash/_hasUnicodeWord.js":module=>{var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;module.exports=function hasUnicodeWord(string){return reHasUnicodeWord.test(string)}},"./node_modules/lodash/_unicodeWords.js":module=>{var rsBreakRange="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsBreak="["+rsBreakRange+"]",rsDigits="\\d+",rsDingbat="[\\u2700-\\u27bf]",rsLower="[a-z\\xdf-\\xf6\\xf8-\\xff]",rsMisc="[^\\ud800-\\udfff"+rsBreakRange+rsDigits+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper="[A-Z\\xc0-\\xd6\\xd8-\\xde]",rsMiscLower="(?:"+rsLower+"|"+rsMisc+")",rsMiscUpper="(?:"+rsUpper+"|"+rsMisc+")",reOptMod="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",rsSeq="[\\ufe0e\\ufe0f]?"+reOptMod+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",rsRegional,rsSurrPair].join("|")+")[\\ufe0e\\ufe0f]?"+reOptMod+")*"),rsEmoji="(?:"+[rsDingbat,rsRegional,rsSurrPair].join("|")+")"+rsSeq,reUnicodeWord=RegExp([rsUpper+"?"+rsLower+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[rsBreak,rsUpper,"$"].join("|")+")",rsMiscUpper+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[rsBreak,rsUpper+rsMiscLower,"$"].join("|")+")",rsUpper+"?"+rsMiscLower+"+(?:['’](?:d|ll|m|re|s|t|ve))?",rsUpper+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rsDigits,rsEmoji].join("|"),"g");module.exports=function unicodeWords(string){return string.match(reUnicodeWord)||[]}},"./node_modules/lodash/deburr.js":(module,__unused_webpack_exports,__webpack_require__)=>{var deburrLetter=__webpack_require__("./node_modules/lodash/_deburrLetter.js"),toString=__webpack_require__("./node_modules/lodash/toString.js"),reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,reComboMark=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");module.exports=function deburr(string){return(string=toString(string))&&string.replace(reLatin,deburrLetter).replace(reComboMark,"")}},"./node_modules/lodash/snakeCase.js":(module,__unused_webpack_exports,__webpack_require__)=>{var snakeCase=__webpack_require__("./node_modules/lodash/_createCompounder.js")((function(result,word,index){return result+(index?"_":"")+word.toLowerCase()}));module.exports=snakeCase},"./node_modules/lodash/words.js":(module,__unused_webpack_exports,__webpack_require__)=>{var asciiWords=__webpack_require__("./node_modules/lodash/_asciiWords.js"),hasUnicodeWord=__webpack_require__("./node_modules/lodash/_hasUnicodeWord.js"),toString=__webpack_require__("./node_modules/lodash/toString.js"),unicodeWords=__webpack_require__("./node_modules/lodash/_unicodeWords.js");module.exports=function words(string,pattern,guard){return string=toString(string),void 0===(pattern=guard?void 0:pattern)?hasUnicodeWord(string)?unicodeWords(string):asciiWords(string):string.match(pattern)||[]}},"./src/select/with-label.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.SelectWithLabel=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_select=(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),__webpack_require__("./src/select/select.tsx")),_formLayout=__webpack_require__("./src/form-layout/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["label","helpText","error","onLabelPress"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var SelectWithLabel=function SelectWithLabel(_ref){var label=_ref.label,helpText=_ref.helpText,error=_ref.error,onLabelPress=_ref.onLabelPress,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);return(0,_jsxRuntime.jsx)(_formLayout.InputWithLabel,{label,helpText,error,onLabelPress,children:(0,_jsxRuntime.jsx)(_select.Select,Object.assign({},props))})};exports.SelectWithLabel=SelectWithLabel;try{SelectWithLabel.displayName="SelectWithLabel",SelectWithLabel.__docgenInfo={description:"",displayName:"SelectWithLabel",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},placement:{defaultValue:null,description:'Preferred placement of the Popover. The Popover will try to place itself according to this\nproperty. However, if there is not enough space left there to show up, it will show itself\nin opposite direction.\n\nFor example, if we set `placement="top"`, and there is not enough space for the Popover\nto show itself above the triggering view, it will show at the bottom of it.',name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'}]}},opened:{defaultValue:null,description:"Controlled menu opened state. Note: Popover can be controlled or uncontrolled",name:"opened",required:!1,type:{name:"boolean"}},defaultOpened:{defaultValue:null,description:"Uncontrolled menu initial opened state",name:"defaultOpened",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Called when menu opened state changes\nCallback called when selection is changed.",name:"onChange",required:!1,type:{name:"((opened: boolean) => void) & ((selected: SelectOption) => void)"}},onOpen:{defaultValue:null,description:"Called when Menu is opened\nCalled when popover opens",name:"onOpen",required:!1,type:{name:"{ (): void; (): void; }"}},onClose:{defaultValue:null,description:"Called when Menu is closed\nCalled when popover closes",name:"onClose",required:!1,type:{name:"{ (): void; (): void; }"}},trigger:{defaultValue:null,description:"Method for activating an uncontrolled Popover.",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"longpress"'},{value:'"press"'},{value:'"hover"'}]}},withArrow:{defaultValue:null,description:"Show arrow pointing to the target.",name:"withArrow",required:!1,type:{name:"boolean"}},withinPortal:{defaultValue:null,description:"Determines whether Popover should be rendered within Portal, defaults to true",name:"withinPortal",required:!1,type:{name:"boolean"}},closeOnPressOutside:{defaultValue:null,description:"Determines whether dropdown should be closed on outside clicks, default to true",name:"closeOnPressOutside",required:!1,type:{name:"boolean"}},matchWidth:{defaultValue:null,description:"Force popover to match the width of the triggering view.",name:"matchWidth",required:!1,type:{name:"boolean"}},primaryAction:{defaultValue:null,description:"",name:"primaryAction",required:!1,type:{name:"PopoverFooterActionProps"}},secondaryActions:{defaultValue:null,description:"",name:"secondaryActions",required:!1,type:{name:"PopoverFooterActionProps[]"}},context:{defaultValue:null,description:"contexted passed  down to the portal",name:"context",required:!1,type:{name:"Record<string, unknown>"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!1,type:{name:"((item: MenuOption, index: number) => ReactNode)"}},onSelect:{defaultValue:null,description:"Callback called when selection is changed. Returns the value of the selected itemm. If no value is set, returns the label.",name:"onSelect",required:!1,type:{name:"((value: any) => void)"}},options:{defaultValue:null,description:"Options available in the Select.",name:"options",required:!0,type:{name:"string[] | SelectOption[]"}},value:{defaultValue:null,description:"Currently selected value. If null, no value is selected.",name:"value",required:!1,type:{name:"string | SelectOption | null"}},placeholder:{defaultValue:null,description:"Text to display as a placeholder.",name:"placeholder",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Display an error state.",name:"error",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disable the input and choice selection.\nDisable the input.",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label shown above the input.",name:"label",required:!1,type:{name:"string"}},onLabelPress:{defaultValue:null,description:"Callback called on click of the label.",name:"onLabelPress",required:!1,type:{name:"(() => void)"}},helpText:{defaultValue:null,description:"Additional text to help the user.",name:"helpText",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/select/with-label.tsx#SelectWithLabel"]={docgenInfo:SelectWithLabel.__docgenInfo,name:"SelectWithLabel",path:"src/select/with-label.tsx#SelectWithLabel"})}catch(__react_docgen_typescript_loader_error){}}}]);