(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[48461,67205],{"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js":module=>{module.exports=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/ripple/ripple.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Ripple=void 0;_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/ripple/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var _worklet_17374175507125_init_data={code:'function anonymous() {\n  const {\n    withTiming,\n    showRipple,\n    Easing\n  } = this._closure;\n  return {\n    transform: "scale(" + withTiming(showRipple.value ? 1.5 : 0, {\n      duration: 200,\n      easing: Easing.out(Easing.quad)\n    }) + ")"\n  };\n}',location:"/home/runner/work/components/components/src/ripple/ripple.tsx",sourceMap:'{"version":3,"names":["anonymous","withTiming","showRipple","Easing","_closure","transform","value","duration","easing","out","quad"],"sources":["/home/runner/work/components/components/src/ripple/ripple.tsx"],"mappings":"AAWsC,SAAAA,UAAA;EAAA;IAAAC,UAAA;IAAAC,UAAA;IAAAC;EAAA,SAAAC,QAAA;EAAA,OAAO;IAC3CC,SAAS,aAAWJ,UAAU,CAACC,UAAU,CAACI,KAAK,GAAG,GAAG,GAAG,CAAC,EAAE;MAC1DC,QAAQ,EAAE,GAAG;MACbC,MAAM,EAAEL,MAAM,CAACM,GAAG,CAACN,MAAM,CAACO,IAAI;IAC/B,CAAC,CAAE;EACJ,CAAC;AAAA"}'},Ripple=function Ripple(_ref){var _e,_f,showRipple=_ref.showRipple,rippleScale=(0,_reactNativeReanimated.useAnimatedStyle)((_e=[new __webpack_require__.g.Error,-4,-27],(_f=function _f(){return{transform:"scale("+(0,_reactNativeReanimated.withTiming)(showRipple.value?1.5:0,{duration:200,easing:_reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.quad)})+")"}})._closure={withTiming:_reactNativeReanimated.withTiming,showRipple,Easing:_reactNativeReanimated.Easing},_f.__initData=_worklet_17374175507125_init_data,_f.__workletHash=0xfcd3d8f32b5,_f.__stackDetails=_e,_f.__version="3.3.0",_f));return(0,_jsxRuntime.jsx)(Styled.RippleEffect,{as:_reactNativeReanimated.default.View,style:[{pointerEvents:"none"},rippleScale]})};exports.Ripple=Ripple;try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{showRipple:{defaultValue:null,description:"",name:"showRipple",required:!0,type:{name:"SharedValue<boolean>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ripple/ripple.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"src/ripple/ripple.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}},"./src/ripple/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.RippleEffect=void 0;var _templateObject,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js")),RippleEffect=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")).default.View(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n\tz-index: -1;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: ",";\n\tbackground-color: rgba(0, 0, 0, 0.1);\n"])),(function(_ref){return _ref.theme.rounding.circle+"px"}));exports.RippleEffect=RippleEffect}}]);