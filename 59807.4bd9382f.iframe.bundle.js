(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[59807,76639],{"./src/format/address.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.FormatAddress=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var addresses={default:"{name}\n{company}\n{address_1}\n{address_2}\n{city}\n{state}\n{postcode}\n{country}",AU:"{name}\n{company}\n{address_1}\n{address_2}\n{city} {state} {postcode}\n{country}",AT:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode} {city}\n{country}",BE:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode} {city}\n{country}",CA:"{company}\n{name}\n{address_1}\n{address_2}\n{city} {state_code}&nbsp;&nbsp;{postcode}\n{country}",CH:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode} {city}\n{country}",CL:"{company}\n{name}\n{address_1}\n{address_2}\n{state}\n{postcode} {city}\n{country}",CN:"{country} {postcode}\n{state}, {city}, {address_2}, {address_1}\n{company}\n{name}",CZ:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode} {city}\n{country}",DE:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode} {city}\n{country}",EE:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode} {city}\n{country}",FI:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode} {city}\n{country}",DK:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode} {city}\n{country}",FR:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode} {city_upper}\n{country}",HK:"{company}\n{first_name} {last_name_upper}\n{address_1}\n{address_2}\n{city_upper}\n{state_upper}\n{country}",HU:"{name}\n{company}\n{city}\n{address_1}\n{address_2}\n{postcode}\n{country}",IN:"{company}\n{name}\n{address_1}\n{address_2}\n{city} {postcode}\n{state}, {country}",IS:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode} {city}\n{country}",IT:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode}\n{city}\n{state_upper}\n{country}",JP:"{postcode}\n{state} {city} {address_1}\n{address_2}\n{company}\n{last_name} {first_name}\n{country}",TW:"{company}\n{last_name} {first_name}\n{address_1}\n{address_2}\n{state}, {city} {postcode}\n{country}",LI:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode} {city}\n{country}",NL:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode} {city}\n{country}",NZ:"{name}\n{company}\n{address_1}\n{address_2}\n{city} {postcode}\n{country}",NO:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode} {city}\n{country}",PL:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode} {city}\n{country}",PT:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode} {city}\n{country}",SK:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode} {city}\n{country}",RS:"{name}\n{company}\n{address_1}\n{address_2}\n{postcode} {city}\n{country}",SI:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode} {city}\n{country}",ES:"{name}\n{company}\n{address_1}\n{address_2}\n{postcode} {city}\n{state}\n{country}",SE:"{company}\n{name}\n{address_1}\n{address_2}\n{postcode} {city}\n{country}",TR:"{name}\n{company}\n{address_1}\n{address_2}\n{postcode} {city} {state}\n{country}",UG:"{name}\n{company}\n{address_1}\n{address_2}\n{city}\n{state}, {country}",US:"{name}\n{company}\n{address_1}\n{address_2}\n{city}, {state_code} {postcode}\n{country}",VN:"{name}\n{company}\n{address_1}\n{city}\n{country}"},FormatAddress=function FormatAddress(_ref){var _addr$state,_addr$city,address=_ref.address,showName=_ref.showName,addr=Object.assign({},address),template=addr.country&&addresses.hasOwnProperty(addr.country)?addresses[addr.country]:addresses.default;Object.assign(addr,{name:showName&&addr.first_name+" "+addr.last_name,state_code:addr.state,state_upper:null==(_addr$state=addr.state)?void 0:_addr$state.toUpperCase(),city_upper:null==(_addr$city=addr.city)?void 0:_addr$city.toUpperCase()});var matches=template.match(/\{[\w]+\}/g);return matches&&matches.forEach((function(match){var regex=new RegExp(match,"g"),prop=match.split(/{|}/g)[1];template=template.replace(regex,addr[prop]||"")})),(0,_jsxRuntime.jsx)(_View.default,{children:template.split("\n").map((function(line,idx){if(line.trim())return(0,_jsxRuntime.jsx)(_text.default,{children:line},idx)}))})};exports.FormatAddress=FormatAddress;try{FormatAddress.displayName="FormatAddress",FormatAddress.__docgenInfo={description:"",displayName:"FormatAddress",props:{address:{defaultValue:null,description:"",name:"address",required:!0,type:{name:"Address"}},showName:{defaultValue:null,description:"",name:"showName",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/format/address.tsx#FormatAddress"]={docgenInfo:FormatAddress.__docgenInfo,name:"FormatAddress",path:"src/format/address.tsx#FormatAddress"})}catch(__react_docgen_typescript_loader_error){}},"./src/format/currency.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var FormatCurrency=function FormatCurrency(_ref){var children=_ref.children,symbol=_ref.symbol;return(0,_jsxRuntime.jsxs)(_text.default,{children:[symbol," ",children]})},_default=React.memo(FormatCurrency);exports.default=_default;try{FormatCurrency.displayName="FormatCurrency",FormatCurrency.__docgenInfo={description:"",displayName:"FormatCurrency",props:{decimal:{defaultValue:null,description:"",name:"decimal",required:!1,type:{name:"string"}},format:{defaultValue:null,description:"",name:"format",required:!1,type:{name:"{ neg: string; pos: string; zero: string; }"}},precision:{defaultValue:null,description:"",name:"precision",required:!1,type:{name:"number"}},symbol:{defaultValue:null,description:"",name:"symbol",required:!1,type:{name:"string"}},thousand:{defaultValue:null,description:"",name:"thousand",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/format/currency.tsx#FormatCurrency"]={docgenInfo:FormatCurrency.__docgenInfo,name:"FormatCurrency",path:"src/format/currency.tsx#FormatCurrency"})}catch(__react_docgen_typescript_loader_error){}},"./src/format/date.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_dateFns=__webpack_require__("./node_modules/date-fns/esm/index.js"),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var FormatDate=function FormatDate(_ref){var value=_ref.value;return(0,_jsxRuntime.jsx)(_text.default,{children:(0,_dateFns.format)(new Date(value||""),"dd/MM/yyyy")})},_default=React.memo(FormatDate);exports.default=_default;try{FormatDate.displayName="FormatDate",FormatDate.__docgenInfo={description:"",displayName:"FormatDate",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/format/date.tsx#FormatDate"]={docgenInfo:FormatDate.__docgenInfo,name:"FormatDate",path:"src/format/date.tsx#FormatDate"})}catch(__react_docgen_typescript_loader_error){}},"./src/format/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _address=__webpack_require__("./src/format/address.tsx"),_currency=_interopRequireDefault(__webpack_require__("./src/format/currency.tsx")),_date=_interopRequireDefault(__webpack_require__("./src/format/date.tsx")),_list=__webpack_require__("./src/format/list.tsx"),_name=__webpack_require__("./src/format/name.tsx"),_number=__webpack_require__("./src/format/number.tsx"),_default={Name:_name.FormatName,Number:_number.FormatNumber,List:_list.FormatList,Address:_address.FormatAddress,Date:_date.default,Currency:_currency.default};exports.default=_default},"./src/format/list.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.FormatList=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var FormatList=function FormatList(_ref){var array=_ref.array;return(0,_jsxRuntime.jsx)(_jsxRuntime.Fragment,{children:null==array?void 0:array.map((function(item,index){return"string"==typeof item?(0,_jsxRuntime.jsxs)(_text.default,{children:[item,", "]}):item}))})};exports.FormatList=FormatList;try{FormatList.displayName="FormatList",FormatList.__docgenInfo={description:"",displayName:"FormatList",props:{array:{defaultValue:null,description:"",name:"array",required:!1,type:{name:"[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/format/list.tsx#FormatList"]={docgenInfo:FormatList.__docgenInfo,name:"FormatList",path:"src/format/list.tsx#FormatList"})}catch(__react_docgen_typescript_loader_error){}},"./src/format/name.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.FormatName=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var FormatName=function FormatName(_ref){var firstName=_ref.firstName,lastName=_ref.lastName;return(0,_jsxRuntime.jsxs)(_text.default,{children:[firstName," ",lastName]})};exports.FormatName=FormatName;try{FormatName.displayName="FormatName",FormatName.__docgenInfo={description:"",displayName:"FormatName",props:{firstName:{defaultValue:null,description:"",name:"firstName",required:!1,type:{name:"string"}},lastName:{defaultValue:null,description:"",name:"lastName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/format/name.tsx#FormatName"]={docgenInfo:FormatName.__docgenInfo,name:"FormatName",path:"src/format/name.tsx#FormatName"})}catch(__react_docgen_typescript_loader_error){}},"./src/format/number.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.FormatNumber=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var FormatNumber=function FormatNumber(_ref){var children=_ref.children,prefix=_ref.prefix,suffix=_ref.suffix;return(0,_jsxRuntime.jsxs)(_text.default,{children:[prefix," ",children," ",suffix]})};exports.FormatNumber=FormatNumber;try{FormatNumber.displayName="FormatNumber",FormatNumber.__docgenInfo={description:"",displayName:"FormatNumber",props:{prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"string"}},decimalSeparator:{defaultValue:null,description:"",name:"decimalSeparator",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/format/number.tsx#FormatNumber"]={docgenInfo:FormatNumber.__docgenInfo,name:"FormatNumber",path:"src/format/number.tsx#FormatNumber"})}catch(__react_docgen_typescript_loader_error){}},"./src/skeleton/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _skeleton.Skeleton}});var _skeleton=__webpack_require__("./src/skeleton/skeleton.tsx")},"./src/skeleton/skeleton.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Skeleton=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/index.web.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/skeleton/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Skeleton=function Skeleton(_ref){var _f,width=_ref.width,height=_ref.height,_ref$border=_ref.border,border=void 0===_ref$border?"rounded":_ref$border,style=_ref.style,pulseColor=(0,_reactNativeReanimated.useSharedValue)("#e1e9ee"),animatedBackground=(0,_reactNativeReanimated.useAnimatedStyle)(((_f=function _f(){return{backgroundColor:pulseColor.value}})._closure={pulseColor},_f.asString="function _f(){const{pulseColor}=jsThis._closure;{return{backgroundColor:pulseColor.value};}}",_f.__workletHash=3757647514652,_f.__location="/home/runner/work/components/components/src/skeleton/skeleton.tsx (48:45)",_f.__optimalization=3,_f));return(0,_jsxRuntime.jsx)(Styled.Container,{as:_reactNativeReanimated.default.View,style:[{width,height},style,animatedBackground],border})};exports.Skeleton=Skeleton;try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},border:{defaultValue:{value:"rounded"},description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"rounded"'},{value:'"circular"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"ViewStyle"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/skeleton/skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/skeleton/skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/skeleton/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Container=void 0;var _templateObject,_templateObject2,_templateObject3,_templateObject4,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js")),_native=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Container=_native.default.View(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n\tbackground-color: #e1e9ee;\n\toverflow: hidden;\n\n\t","\n"])),(function(_ref){var border=_ref.border,theme=_ref.theme;switch(border){case"rounded":return(0,_native.css)(_templateObject2||(_templateObject2=(0,_taggedTemplateLiteralLoose2.default)(["\n\t\t\t\t\tborder-radius: ","px;\n\t\t\t\t"])),theme.rounding.small);case"circular":return(0,_native.css)(_templateObject3||(_templateObject3=(0,_taggedTemplateLiteralLoose2.default)(["\n\t\t\t\t\tborder-radius: ","px;\n\t\t\t\t"])),theme.rounding.circle);default:return(0,_native.css)(_templateObject4||(_templateObject4=(0,_taggedTemplateLiteralLoose2.default)(["\n\t\t\t\t\tborder-radius: ","px;\n\t\t\t\t"])),theme.rounding.none)}}));exports.Container=Container},"./src/text/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _skeleton=__webpack_require__("./src/text/skeleton.tsx"),_text=__webpack_require__("./src/text/text.tsx"),_default=Object.assign(_text.Text,{Skeleton:_skeleton.TextSkeleton});exports.default=_default},"./src/text/skeleton.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextSkeleton=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _skeleton=_interopRequireDefault(__webpack_require__("./src/skeleton/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var lengthMap={default:120,short:60,long:240},TextSkeleton=function TextSkeleton(_ref){var _ref$length=_ref.length,length=void 0===_ref$length?"default":_ref$length;return(0,_jsxRuntime.jsx)(_skeleton.default,{width:lengthMap[length],height:20})};exports.TextSkeleton=TextSkeleton;try{TextSkeleton.displayName="TextSkeleton",TextSkeleton.__docgenInfo={description:"",displayName:"TextSkeleton",props:{length:{defaultValue:{value:"default"},description:"",name:"length",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"short"'},{value:'"long"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/text/skeleton.tsx#TextSkeleton"]={docgenInfo:TextSkeleton.__docgenInfo,name:"TextSkeleton",path:"src/text/skeleton.tsx#TextSkeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/text/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Text=void 0;var _templateObject,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js")),Text=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")).default.Text(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n\tcolor: ",";\n\tfont-family: ",";\n\tfont-style: ",";\n\tfont-weight: ","};\n\tfont-size: ",";\n\tline-height: ",";\n\ttext-align: ",";\n\ttext-transform: ",";\n"])),(function(_ref){var type=_ref.type,theme=_ref.theme;return theme.colors[type]||theme.colors.text}),(function(_ref2){return _ref2.theme.font.family}),(function(_ref3){return _ref3.italic?"italic":"normal"}),(function(_ref4){var weight=_ref4.weight;return _ref4.theme.font.weight[weight||"normal"]}),(function(_ref5){var size=_ref5.size;return _ref5.theme.font.size[size||"normal"]}),(function(_ref6){var size=_ref6.size;return _ref6.theme.font.lineHeight[size||"normal"]}),(function(_ref7){return _ref7.align||"left"}),(function(_ref8){return _ref8.uppercase?"uppercase":"none"}));exports.Text=Text},"./src/text/text.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Text=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_htmlEntities=(_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),__webpack_require__("./node_modules/html-entities/lib/index.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/text/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["align","children","italic","onPress","size","type","uppercase","weight"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Text=function Text(_ref){var _ref$align=_ref.align,align=void 0===_ref$align?"left":_ref$align,children=_ref.children,italic=_ref.italic,onPress=_ref.onPress,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,type=_ref.type,uppercase=_ref.uppercase,_ref$weight=_ref.weight,weight=void 0===_ref$weight?"normal":_ref$weight,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);return(0,_jsxRuntime.jsx)(Styled.Text,Object.assign({align,italic,onPress,size,type,uppercase,weight},props,{children:"string"==typeof children?(0,_htmlEntities.decode)(children):children}))};exports.Text=Text;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"justify"'}]}},italic:{defaultValue:null,description:"",name:"italic",required:!1,type:{name:"boolean"}},onPress:{defaultValue:null,description:"This function is called on press.\nText intrinsically supports press handling with a default highlight state (which can be disabled with suppressHighlighting).",name:"onPress",required:!1,type:{name:"(() => void)"}},size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<TextStyle>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},uppercase:{defaultValue:null,description:"",name:"uppercase",required:!1,type:{name:"boolean"}},weight:{defaultValue:{value:"normal"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"light"'},{value:'"medium"'},{value:'"thin"'},{value:'"xLight"'},{value:'"semiBold"'},{value:'"bold"'},{value:'"xBold"'},{value:'"black"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/text/text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/text/text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}}}]);