(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[90932],{"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/slider/hooks/useSetInitialValue.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useSetInitialValue=void 0;var _reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js"),_worklet_5403816515876_init_data={code:"function anonymous() {\n  const {\n    sliderWidth,\n    initialValue,\n    min,\n    max\n  } = this._closure;\n  return sliderWidth.value * ((initialValue - min) / (max - min));\n}",location:"/home/runner/work/components/components/src/slider/hooks/useSetInitialValue.ts",sourceMap:'{"version":3,"names":["anonymous","sliderWidth","initialValue","min","max","_closure","value"],"sources":["/home/runner/work/components/components/src/slider/hooks/useSetInitialValue.ts"],"mappings":"AAmBE,SAAAA,UAAA;EAAA;IAAAC,WAAA;IAAAC,YAAA;IAAAC,GAAA;IAAAC;EAAA,SAAAC,QAAA;EAAA,OAAMJ,WAAY,CAAAK,KAAK,IAAK,CAAAJ,YAAY,GAAGC,GAAG,KAAKC,GAAG,GAAGD,GAAI;AAAA"}'},_worklet_10035945730256_init_data={code:"function anonymous(initialX) {\n  const {\n    isInitialized,\n    translateX\n  } = this._closure;\n  if (!isInitialized.value && initialX > 0) {\n    isInitialized.value = true;\n    translateX.value = initialX;\n  }\n}",location:"/home/runner/work/components/components/src/slider/hooks/useSetInitialValue.ts",sourceMap:'{"version":3,"names":["anonymous","initialX","isInitialized","translateX","_closure","value"],"sources":["/home/runner/work/components/components/src/slider/hooks/useSetInitialValue.ts"],"mappings":"AAoBG,SAAAA,UAAQC,QAAK;EAAA;IAAAC,aAAA;IAAAC;EAAA,SAAAC,QAAA;EACb,IAAI,CAACF,aAAa,CAACG,KAAK,IAAIJ,QAAQ,GAAG,CAAC,EAAE;IACzCC,aAAa,CAACG,KAAK,GAAG,IAAI;IAC1BF,UAAU,CAACE,KAAK,GAAGJ,QAAQ;EAC5B;AACD"}'};exports.useSetInitialValue=function useSetInitialValue(_ref){var _e,_f,translateX=_ref.translateX,sliderWidth=_ref.sliderWidth,min=_ref.min,max=_ref.max,initialValue=_ref.initialValue,isInitialized=(0,_reactNativeReanimated.useSharedValue)(!1);(0,_reactNativeReanimated.useAnimatedReaction)((_e=[new __webpack_require__.g.Error,-5,-27],(_f=function _f(){return sliderWidth.value*((initialValue-min)/(max-min))})._closure={sliderWidth,initialValue,min,max},_f.__initData=_worklet_5403816515876_init_data,_f.__workletHash=5403816515876,_f.__stackDetails=_e,_f.__version="3.3.0",_f),function(){var _e=[new __webpack_require__.g.Error,-3,-27],_f=function _f(initialX){!isInitialized.value&&initialX>0&&(isInitialized.value=!0,translateX.value=initialX)};return _f._closure={isInitialized,translateX},_f.__initData=_worklet_10035945730256_init_data,_f.__workletHash=0x920acfaf0d0,_f.__stackDetails=_e,_f.__version="3.3.0",_f}())}}}]);