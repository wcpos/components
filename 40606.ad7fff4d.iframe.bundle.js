(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[40606],{"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/slider/hooks/useCursorHandler.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useCursorHandler=void 0;var _e,_f,_reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js"),_worklet_11997578930814_init_data={code:"function anonymous(value, lowerBound, upperBound) {\n  return Math.min(Math.max(lowerBound, value), upperBound);\n}",location:"/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts",sourceMap:'{"version":3,"names":["anonymous","value","lowerBound","upperBound","Math","min","max"],"sources":["/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts"],"mappings":"AAOc,SAACA,SAAeA,CAAAC,KAAA,EAAAC,UAAoB,EAAAC,UAAuB;EAGxE,OAAOC,IAAI,CAACC,GAAG,CAACD,IAAI,CAACE,GAAG,CAACJ,UAAU,EAAED,KAAK,CAAC,EAAEE,UAAU,CAAC;AACzD"}'},clamp=(_e=[new __webpack_require__.g.Error,1,-27],(_f=function _f(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound)})._closure={},_f.__initData=_worklet_11997578930814_init_data,_f.__workletHash=0xae9676e2a7e,_f.__stackDetails=_e,_f.__version="3.3.0",_f),_worklet_12784801568798_init_data={code:"function anonymous(_, ctx) {\n  const {\n    translateX\n  } = this._closure;\n  ctx.startX = translateX.value;\n}",location:"/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts",sourceMap:'{"version":3,"names":["anonymous","_","ctx","translateX","_closure","startX","value"],"sources":["/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts"],"mappings":"AA6BW,SAACA,SAAMA,CAAKC,CAAA,EAAAC,GAAA;EAAA;IAAAC;EAAA,SAAAC,QAAA;EACpBF,GAAG,CAACG,MAAM,GAAGF,UAAU,CAACG,KAAK;AAC9B"}'},_worklet_4906888698202_init_data={code:"function anonymous(event, ctx) {\n  const {\n    isActivePanGesture,\n    translateX,\n    clamp,\n    sliderWidth\n  } = this._closure;\n  isActivePanGesture.value = true;\n  translateX.value = clamp(ctx.startX + event.translationX, 0, sliderWidth.value);\n}",location:"/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts",sourceMap:'{"version":3,"names":["anonymous","event","ctx","isActivePanGesture","translateX","clamp","sliderWidth","_closure","value","startX","translationX"],"sources":["/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts"],"mappings":"AAgCY,SAACA,SAAOA,CAAAC,KAAQ,EAAAC,GAAA;EAAA;IAAAC,kBAAA;IAAAC,UAAA;IAAAC,KAAA;IAAAC;EAAA,SAAAC,QAAA;EACzBJ,kBAAkB,CAACK,KAAK,GAAG,IAAI;EAC/BJ,UAAU,CAACI,KAAK,GAAGH,KAAK,CAACH,GAAG,CAACO,MAAM,GAAGR,KAAK,CAACS,YAAY,EAAE,CAAC,EAAEJ,WAAW,CAACE,KAAK,CAAC;AAChF"}'},_worklet_6176722078962_init_data={code:"function anonymous() {\n  const {\n    isActivePanGesture,\n    translateX,\n    withTiming,\n    calculateSnappedTranslateX\n  } = this._closure;\n  isActivePanGesture.value = false;\n  translateX.value = withTiming(calculateSnappedTranslateX(translateX.value));\n}",location:"/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts",sourceMap:'{"version":3,"names":["anonymous","isActivePanGesture","translateX","withTiming","calculateSnappedTranslateX","_closure","value"],"sources":["/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts"],"mappings":"AAoCS,SAAAA,SAAMA,CAAA;EAAA;IAAAC,kBAAA;IAAAC,UAAA;IAAAC,UAAA;IAAAC;EAAA,SAAAC,QAAA;EACZJ,kBAAkB,CAACK,KAAK,GAAG,KAAK;EAChCJ,UAAU,CAACI,KAAK,GAAGH,UAAU,CAACC,0BAA0B,CAACF,UAAU,CAACI,KAAK,CAAC,CAAC;AAC5E"}'};exports.useCursorHandler=function useCursorHandler(_ref){var translateX=_ref.translateX,sliderWidth=_ref.sliderWidth,calculateSnappedTranslateX=_ref.calculateSnappedTranslateX,isActivePanGesture=(0,_reactNativeReanimated.useSharedValue)(!1),panGestureHandler=(0,_reactNativeReanimated.useAnimatedGestureHandler)({onStart:function(){var _e=[new __webpack_require__.g.Error,-2,-27],_f=function _f(_,ctx){ctx.startX=translateX.value};return _f._closure={translateX},_f.__initData=_worklet_12784801568798_init_data,_f.__workletHash=0xba0b18e581e,_f.__stackDetails=_e,_f.__version="3.3.0",_f}(),onActive:function(){var _e=[new __webpack_require__.g.Error,-5,-27],_f=function _f(event,ctx){isActivePanGesture.value=!0,translateX.value=clamp(ctx.startX+event.translationX,0,sliderWidth.value)};return _f._closure={isActivePanGesture,translateX,clamp,sliderWidth},_f.__initData=_worklet_4906888698202_init_data,_f.__workletHash=4906888698202,_f.__stackDetails=_e,_f.__version="3.3.0",_f}(),onEnd:function(){var _e=[new __webpack_require__.g.Error,-5,-27],_f=function _f(){isActivePanGesture.value=!1,translateX.value=(0,_reactNativeReanimated.withTiming)(calculateSnappedTranslateX(translateX.value))};return _f._closure={isActivePanGesture,translateX,withTiming:_reactNativeReanimated.withTiming,calculateSnappedTranslateX},_f.__initData=_worklet_6176722078962_init_data,_f.__workletHash=6176722078962,_f.__stackDetails=_e,_f.__version="3.3.0",_f}()});return{panGestureHandler,isActivePanGesture}}}}]);