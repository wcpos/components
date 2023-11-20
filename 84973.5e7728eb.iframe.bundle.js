(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[84973,9582,16248,40606,90932,50409,78131,9238],{"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/slider/constants.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.CURSOR_WIDTH=exports.CURSOR_HALF_WIDTH=void 0;exports.CURSOR_WIDTH=20,exports.CURSOR_HALF_WIDTH=10},"./src/slider/hooks/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var _useSliderWidth=__webpack_require__("./src/slider/hooks/useSliderWidth.ts");Object.keys(_useSliderWidth).forEach((function(key){"default"!==key&&"__esModule"!==key&&(key in exports&&exports[key]===_useSliderWidth[key]||Object.defineProperty(exports,key,{enumerable:!0,get:function get(){return _useSliderWidth[key]}}))}));var _useCursorHandler=__webpack_require__("./src/slider/hooks/useCursorHandler.ts");Object.keys(_useCursorHandler).forEach((function(key){"default"!==key&&"__esModule"!==key&&(key in exports&&exports[key]===_useCursorHandler[key]||Object.defineProperty(exports,key,{enumerable:!0,get:function get(){return _useCursorHandler[key]}}))}));var _useCalculatedValue=__webpack_require__("./src/slider/hooks/useCalculatedValue.ts");Object.keys(_useCalculatedValue).forEach((function(key){"default"!==key&&"__esModule"!==key&&(key in exports&&exports[key]===_useCalculatedValue[key]||Object.defineProperty(exports,key,{enumerable:!0,get:function get(){return _useCalculatedValue[key]}}))}));var _useSetInitialValue=__webpack_require__("./src/slider/hooks/useSetInitialValue.ts");Object.keys(_useSetInitialValue).forEach((function(key){"default"!==key&&"__esModule"!==key&&(key in exports&&exports[key]===_useSetInitialValue[key]||Object.defineProperty(exports,key,{enumerable:!0,get:function get(){return _useSetInitialValue[key]}}))}));var _useUpdateOuterSharedValue=__webpack_require__("./src/slider/hooks/useUpdateOuterSharedValue.ts");Object.keys(_useUpdateOuterSharedValue).forEach((function(key){"default"!==key&&"__esModule"!==key&&(key in exports&&exports[key]===_useUpdateOuterSharedValue[key]||Object.defineProperty(exports,key,{enumerable:!0,get:function get(){return _useUpdateOuterSharedValue[key]}}))}));var _useTapHandler=__webpack_require__("./src/slider/hooks/useTapHandler.ts");Object.keys(_useTapHandler).forEach((function(key){"default"!==key&&"__esModule"!==key&&(key in exports&&exports[key]===_useTapHandler[key]||Object.defineProperty(exports,key,{enumerable:!0,get:function get(){return _useTapHandler[key]}}))}))},"./src/slider/hooks/useCalculatedValue.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useCalculatedValue=void 0;var _e,anonymous,_reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js"),_worklet_7975134349067_init_data={code:"function anonymous(value,precision=0){const p=10**precision;return Math.round(value*p)/p;}",location:"/home/runner/work/components/components/src/slider/hooks/useCalculatedValue.ts",sourceMap:'{"version":3,"names":["anonymous","value","precision","p","Math","round"],"sources":["/home/runner/work/components/components/src/slider/hooks/useCalculatedValue.ts"],"mappings":"AAEc,QAAC,CAAAA,SAAeA,CAAAC,KAAA,CAAAC,SAAkB,IAG/C,KAAM,CAAAC,CAAC,CAAG,EAAE,EAAID,SAAS,CACzB,MAAO,CAAAE,IAAI,CAACC,KAAK,CAACJ,KAAK,CAAGE,CAAC,CAAC,CAAGA,CAAC,CACjC"}',version:"3.5.4"},round=(_e=[new __webpack_require__.g.Error,1,-27],(anonymous=function anonymous(value){var precision=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,p=Math.pow(10,precision);return Math.round(value*p)/p}).__closure={},anonymous.__initData=_worklet_7975134349067_init_data,anonymous.__workletHash=7975134349067,anonymous.__stackDetails=_e,anonymous),_worklet_14738563109626_init_data={code:"function anonymous(){const{sliderWidth,max,min}=this.__closure;return sliderWidth.value/(max-min);}",location:"/home/runner/work/components/components/src/slider/hooks/useCalculatedValue.ts",sourceMap:'{"version":3,"names":["anonymous","sliderWidth","max","min","__closure","value"],"sources":["/home/runner/work/components/components/src/slider/hooks/useCalculatedValue.ts"],"mappings":"AA0BuC,SAAAA,UAAA,QAAAC,WAAA,CAAAC,GAAA,CAAAC,GAAA,OAAAC,SAAA,OAAM,CAAAH,WAAY,CAAAI,KAAK,EAAIH,GAAG,CAAGC,GAAG"}',version:"3.5.4"},_worklet_1027228614368_init_data={code:"function anonymous(x){const{round,onePointWidth,step}=this.__closure;return round(x/onePointWidth.value/step)*step;}",location:"/home/runner/work/components/components/src/slider/hooks/useCalculatedValue.ts",sourceMap:'{"version":3,"names":["anonymous","x","round","onePointWidth","step","__closure","value"],"sources":["/home/runner/work/components/components/src/slider/hooks/useCalculatedValue.ts"],"mappings":"AA2BgC,QAAC,CAAAA,SAAcA,CAAAC,CAAA,QAAAC,KAAA,CAAAC,aAAA,CAAAC,IAAA,OAAAC,SAAA,CAG7C,MAAO,CAAAH,KAAK,CAACD,CAAC,CAAGE,aAAa,CAACG,KAAK,CAAGF,IAAI,CAAC,CAAGA,IAAI,CACpD"}',version:"3.5.4"},_worklet_15129552375390_init_data={code:"function anonymous(){const{onePointWidth,initialValue,calculateAbsoluteValue,translateX,min}=this.__closure;return onePointWidth.value===0?initialValue:calculateAbsoluteValue(translateX.value)+min;}",location:"/home/runner/work/components/components/src/slider/hooks/useCalculatedValue.ts",sourceMap:'{"version":3,"names":["anonymous","onePointWidth","initialValue","calculateAbsoluteValue","translateX","min","__closure","value"],"sources":["/home/runner/work/components/components/src/slider/hooks/useCalculatedValue.ts"],"mappings":"AAkCyB,SAAAA,UAAA,QAAAC,aAAA,CAAAC,YAAA,CAAAC,sBAAA,CAAAC,UAAA,CAAAC,GAAA,OAAAC,SAAA,OACtB,CAAAL,aAAc,CAAAM,KAAK,GAAM,EAAGL,YAAY,CAAGC,sBAAuB,CAAAC,UAAW,CAAAG,KAAM,EAAGF,GAAA"}',version:"3.5.4"},_worklet_14296633587582_init_data={code:"function anonymous(targetX){const{calculateAbsoluteValue,onePointWidth}=this.__closure;return calculateAbsoluteValue(targetX)*onePointWidth.value;}",location:"/home/runner/work/components/components/src/slider/hooks/useCalculatedValue.ts",sourceMap:'{"version":3,"names":["anonymous","targetX","calculateAbsoluteValue","onePointWidth","__closure","value"],"sources":["/home/runner/work/components/components/src/slider/hooks/useCalculatedValue.ts"],"mappings":"AAqC8B,QAAC,CAAAA,SAAeA,CAAAC,OAAK,QAAAC,sBAAA,CAAAC,aAAA,OAAAC,SAAA,CAGhD,MAAO,CAAAF,sBAAsB,CAACD,OAAO,CAAC,CAAGE,aAAa,CAACE,KAAK,CAC7D"}',version:"3.5.4"};exports.useCalculatedValue=function useCalculatedValue(_ref){var translateX=_ref.translateX,sliderWidth=_ref.sliderWidth,initialValue=_ref.initialValue,min=_ref.min,max=_ref.max,step=_ref.step,onePointWidth=(0,_reactNativeReanimated.useDerivedValue)(function(){var _e=[new __webpack_require__.g.Error,-4,-27],anonymous=function anonymous(){return sliderWidth.value/(max-min)};return anonymous.__closure={sliderWidth,max,min},anonymous.__initData=_worklet_14738563109626_init_data,anonymous.__workletHash=0xd6796d192fa,anonymous.__stackDetails=_e,anonymous}()),calculateAbsoluteValue=function(){var _e=[new __webpack_require__.g.Error,-4,-27],anonymous=function anonymous(x){return round(x/onePointWidth.value/step)*step};return anonymous.__closure={round,onePointWidth,step},anonymous.__initData=_worklet_1027228614368_init_data,anonymous.__workletHash=0xef2b98bee0,anonymous.__stackDetails=_e,anonymous}();return{value:(0,_reactNativeReanimated.useDerivedValue)(function(){var _e=[new __webpack_require__.g.Error,-6,-27],anonymous=function anonymous(){return 0===onePointWidth.value?initialValue:calculateAbsoluteValue(translateX.value)+min};return anonymous.__closure={onePointWidth,initialValue,calculateAbsoluteValue,translateX,min},anonymous.__initData=_worklet_15129552375390_init_data,anonymous.__workletHash=0xdc29f984e5e,anonymous.__stackDetails=_e,anonymous}()),calculateSnappedTranslateX:function(){var _e=[new __webpack_require__.g.Error,-3,-27],anonymous=function anonymous(targetX){return calculateAbsoluteValue(targetX)*onePointWidth.value};return anonymous.__closure={calculateAbsoluteValue,onePointWidth},anonymous.__initData=_worklet_14296633587582_init_data,anonymous.__workletHash=0xd00b1c4377e,anonymous.__stackDetails=_e,anonymous}()}}},"./src/slider/hooks/useCursorHandler.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useCursorHandler=void 0;var _e,anonymous,_reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js"),_worklet_774661967454_init_data={code:"function anonymous(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound);}",location:"/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts",sourceMap:'{"version":3,"names":["anonymous","value","lowerBound","upperBound","Math","min","max"],"sources":["/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts"],"mappings":"AAOc,QAAC,CAAAA,SAAeA,CAAAC,KAAA,CAAAC,UAAoB,CAAAC,UAAuB,EAGxE,MAAO,CAAAC,IAAI,CAACC,GAAG,CAACD,IAAI,CAACE,GAAG,CAACJ,UAAU,CAAED,KAAK,CAAC,CAAEE,UAAU,CAAC,CACzD"}',version:"3.5.4"},clamp=(_e=[new __webpack_require__.g.Error,1,-27],(anonymous=function anonymous(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound)}).__closure={},anonymous.__initData=_worklet_774661967454_init_data,anonymous.__workletHash=774661967454,anonymous.__stackDetails=_e,anonymous),_worklet_12467112281355_init_data={code:"function anonymous(_,ctx){const{translateX}=this.__closure;ctx.startX=translateX.value;}",location:"/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts",sourceMap:'{"version":3,"names":["anonymous","_","ctx","translateX","__closure","startX","value"],"sources":["/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts"],"mappings":"AA6BW,QAAC,CAAAA,SAAMA,CAAKC,CAAA,CAAAC,GAAA,QAAAC,UAAA,OAAAC,SAAA,CACpBF,GAAG,CAACG,MAAM,CAAGF,UAAU,CAACG,KAAK,CAC9B"}',version:"3.5.4"},_worklet_12258646768655_init_data={code:"function anonymous(event,ctx){const{isActivePanGesture,translateX,clamp,sliderWidth}=this.__closure;isActivePanGesture.value=true;translateX.value=clamp(ctx.startX+event.translationX,0,sliderWidth.value);}",location:"/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts",sourceMap:'{"version":3,"names":["anonymous","event","ctx","isActivePanGesture","translateX","clamp","sliderWidth","__closure","value","startX","translationX"],"sources":["/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts"],"mappings":"AAgCY,QAAC,CAAAA,SAAOA,CAAAC,KAAQ,CAAAC,GAAA,QAAAC,kBAAA,CAAAC,UAAA,CAAAC,KAAA,CAAAC,WAAA,OAAAC,SAAA,CACzBJ,kBAAkB,CAACK,KAAK,CAAG,IAAI,CAC/BJ,UAAU,CAACI,KAAK,CAAGH,KAAK,CAACH,GAAG,CAACO,MAAM,CAAGR,KAAK,CAACS,YAAY,CAAE,CAAC,CAAEJ,WAAW,CAACE,KAAK,CAAC,CAChF"}',version:"3.5.4"},_worklet_4866630129479_init_data={code:"function anonymous(){const{isActivePanGesture,translateX,withTiming,calculateSnappedTranslateX}=this.__closure;isActivePanGesture.value=false;translateX.value=withTiming(calculateSnappedTranslateX(translateX.value));}",location:"/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts",sourceMap:'{"version":3,"names":["anonymous","isActivePanGesture","translateX","withTiming","calculateSnappedTranslateX","__closure","value"],"sources":["/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts"],"mappings":"AAoCS,SAAAA,SAAMA,CAAA,QAAAC,kBAAA,CAAAC,UAAA,CAAAC,UAAA,CAAAC,0BAAA,OAAAC,SAAA,CACZJ,kBAAkB,CAACK,KAAK,CAAG,KAAK,CAChCJ,UAAU,CAACI,KAAK,CAAGH,UAAU,CAACC,0BAA0B,CAACF,UAAU,CAACI,KAAK,CAAC,CAAC,CAC5E"}',version:"3.5.4"};exports.useCursorHandler=function useCursorHandler(_ref){var translateX=_ref.translateX,sliderWidth=_ref.sliderWidth,calculateSnappedTranslateX=_ref.calculateSnappedTranslateX,isActivePanGesture=(0,_reactNativeReanimated.useSharedValue)(!1),panGestureHandler=(0,_reactNativeReanimated.useAnimatedGestureHandler)({onStart:function(){var _e=[new __webpack_require__.g.Error,-2,-27],anonymous=function anonymous(_,ctx){ctx.startX=translateX.value};return anonymous.__closure={translateX},anonymous.__initData=_worklet_12467112281355_init_data,anonymous.__workletHash=0xb56b9cc850b,anonymous.__stackDetails=_e,anonymous}(),onActive:function(){var _e=[new __webpack_require__.g.Error,-5,-27],anonymous=function anonymous(event,ctx){isActivePanGesture.value=!0,translateX.value=clamp(ctx.startX+event.translationX,0,sliderWidth.value)};return anonymous.__closure={isActivePanGesture,translateX,clamp,sliderWidth},anonymous.__initData=_worklet_12258646768655_init_data,anonymous.__workletHash=0xb2630493c0f,anonymous.__stackDetails=_e,anonymous}(),onEnd:function(){var _e=[new __webpack_require__.g.Error,-5,-27],anonymous=function anonymous(){isActivePanGesture.value=!1,translateX.value=(0,_reactNativeReanimated.withTiming)(calculateSnappedTranslateX(translateX.value))};return anonymous.__closure={isActivePanGesture,translateX,withTiming:_reactNativeReanimated.withTiming,calculateSnappedTranslateX},anonymous.__initData=_worklet_4866630129479_init_data,anonymous.__workletHash=4866630129479,anonymous.__stackDetails=_e,anonymous}()});return{panGestureHandler,isActivePanGesture}}},"./src/slider/hooks/useSetInitialValue.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useSetInitialValue=void 0;var _reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js"),_worklet_3482180274491_init_data={code:"function anonymous(){const{sliderWidth,initialValue,min,max}=this.__closure;return sliderWidth.value*((initialValue-min)/(max-min));}",location:"/home/runner/work/components/components/src/slider/hooks/useSetInitialValue.ts",sourceMap:'{"version":3,"names":["anonymous","sliderWidth","initialValue","min","max","__closure","value"],"sources":["/home/runner/work/components/components/src/slider/hooks/useSetInitialValue.ts"],"mappings":"AAmBE,SAAAA,UAAA,QAAAC,WAAA,CAAAC,YAAA,CAAAC,GAAA,CAAAC,GAAA,OAAAC,SAAA,OAAM,CAAAJ,WAAY,CAAAK,KAAK,EAAK,CAAAJ,YAAY,CAAGC,GAAG,GAAKC,GAAG,CAAGD,GAAI"}',version:"3.5.4"},_worklet_9257922605413_init_data={code:"function anonymous(initialX){const{isInitialized,translateX}=this.__closure;if(!isInitialized.value&&initialX>0){isInitialized.value=true;translateX.value=initialX;}}",location:"/home/runner/work/components/components/src/slider/hooks/useSetInitialValue.ts",sourceMap:'{"version":3,"names":["anonymous","initialX","isInitialized","translateX","__closure","value"],"sources":["/home/runner/work/components/components/src/slider/hooks/useSetInitialValue.ts"],"mappings":"AAoBG,SAAAA,UAAQC,QAAK,QAAAC,aAAA,CAAAC,UAAA,OAAAC,SAAA,CACb,GAAI,CAACF,aAAa,CAACG,KAAK,EAAIJ,QAAQ,CAAG,CAAC,CAAE,CACzCC,aAAa,CAACG,KAAK,CAAG,IAAI,CAC1BF,UAAU,CAACE,KAAK,CAAGJ,QAAQ,CAC5B,CACD"}',version:"3.5.4"};exports.useSetInitialValue=function useSetInitialValue(_ref){var _e,anonymous,translateX=_ref.translateX,sliderWidth=_ref.sliderWidth,min=_ref.min,max=_ref.max,initialValue=_ref.initialValue,isInitialized=(0,_reactNativeReanimated.useSharedValue)(!1);(0,_reactNativeReanimated.useAnimatedReaction)((_e=[new __webpack_require__.g.Error,-5,-27],(anonymous=function anonymous(){return sliderWidth.value*((initialValue-min)/(max-min))}).__closure={sliderWidth,initialValue,min,max},anonymous.__initData=_worklet_3482180274491_init_data,anonymous.__workletHash=3482180274491,anonymous.__stackDetails=_e,anonymous),function(){var _e=[new __webpack_require__.g.Error,-3,-27],anonymous=function anonymous(initialX){!isInitialized.value&&initialX>0&&(isInitialized.value=!0,translateX.value=initialX)};return anonymous.__closure={isInitialized,translateX},anonymous.__initData=_worklet_9257922605413_init_data,anonymous.__workletHash=9257922605413,anonymous.__stackDetails=_e,anonymous}())}},"./src/slider/hooks/useSliderWidth.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useSliderWidth=void 0;var _reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js"),_constants=__webpack_require__("./src/slider/constants.ts"),_worklet_17105362368336_init_data={code:"function anonymous(e){const{sliderWidth,CURSOR_WIDTH}=this.__closure;sliderWidth.value=e.nativeEvent.layout.width-CURSOR_WIDTH;}",location:"/home/runner/work/components/components/src/slider/hooks/useSliderWidth.ts",sourceMap:'{"version":3,"names":["anonymous","e","sliderWidth","CURSOR_WIDTH","__closure","value","nativeEvent","layout","width"],"sources":["/home/runner/work/components/components/src/slider/hooks/useSliderWidth.ts"],"mappings":"AAMkB,QAAC,CAAAA,SAAyBA,CAAAC,CAAA,QAAAC,WAAA,CAAAC,YAAA,OAAAC,SAAA,CAG1CF,WAAW,CAACG,KAAK,CAAGJ,CAAC,CAACK,WAAW,CAACC,MAAM,CAACC,KAAK,CAAGL,YAAY,CAC9D"}',version:"3.5.4"};exports.useSliderWidth=function useSliderWidth(){var _e,anonymous,width=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_constants.CURSOR_WIDTH,sliderWidth=(0,_reactNativeReanimated.useSharedValue)(width-_constants.CURSOR_WIDTH),onLayout=(_e=[new __webpack_require__.g.Error,-3,-27],(anonymous=function anonymous(e){sliderWidth.value=e.nativeEvent.layout.width-_constants.CURSOR_WIDTH}).__closure={sliderWidth,CURSOR_WIDTH:_constants.CURSOR_WIDTH},anonymous.__initData=_worklet_17105362368336_init_data,anonymous.__workletHash=0xf8ea70c3750,anonymous.__stackDetails=_e,anonymous);return{sliderWidth,onLayout}}},"./src/slider/hooks/useTapHandler.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useTapHandler=void 0;var _e,anonymous,_reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js"),_reactNativeGestureHandler=__webpack_require__("./node_modules/react-native-gesture-handler/lib/module/index.js"),_constants=__webpack_require__("./src/slider/constants.ts"),_worklet_774661967454_init_data={code:"function anonymous(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound);}",location:"/home/runner/work/components/components/src/slider/hooks/useTapHandler.ts",sourceMap:'{"version":3,"names":["anonymous","value","lowerBound","upperBound","Math","min","max"],"sources":["/home/runner/work/components/components/src/slider/hooks/useTapHandler.ts"],"mappings":"AAIc,QAAC,CAAAA,SAAeA,CAAAC,KAAA,CAAAC,UAAoB,CAAAC,UAAuB,EAGxE,MAAO,CAAAC,IAAI,CAACC,GAAG,CAACD,IAAI,CAACE,GAAG,CAACJ,UAAU,CAAED,KAAK,CAAC,CAAEE,UAAU,CAAC,CACzD"}',version:"3.5.4"},clamp=(_e=[new __webpack_require__.g.Error,1,-27],(anonymous=function anonymous(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound)}).__closure={},anonymous.__initData=_worklet_774661967454_init_data,anonymous.__workletHash=774661967454,anonymous.__stackDetails=_e,anonymous),_worklet_16256465871117_init_data={code:"function anonymous(e){const{State,isActiveTapGesture,translateX,withTiming,calculateSnappedTranslateX,clamp,CURSOR_HALF_WIDTH,sliderWidth}=this.__closure;if(e.nativeEvent.state===State.BEGAN){isActiveTapGesture.value=true;translateX.value=withTiming(calculateSnappedTranslateX(clamp(e.nativeEvent.x-CURSOR_HALF_WIDTH,0,sliderWidth.value)),undefined,function(isFinished){if(isFinished){isActiveTapGesture.value=false;}});}}",location:"/home/runner/work/components/components/src/slider/hooks/useTapHandler.ts",sourceMap:'{"version":3,"names":["anonymous","e","State","isActiveTapGesture","translateX","withTiming","calculateSnappedTranslateX","clamp","CURSOR_HALF_WIDTH","sliderWidth","__closure","nativeEvent","state","BEGAN","value","x","undefined","isFinished"],"sources":["/home/runner/work/components/components/src/slider/hooks/useTapHandler.ts"],"mappings":"AAsB2B,QAAC,CAAAA,SAAyCA,CAAAC,CAAA,QAAAC,KAAA,CAAAC,kBAAA,CAAAC,UAAA,CAAAC,UAAA,CAAAC,0BAAA,CAAAC,KAAA,CAAAC,iBAAA,CAAAC,WAAA,OAAAC,SAAA,CAGnE,GAAIT,CAAC,CAACU,WAAW,CAACC,KAAK,GAAKV,KAAK,CAACW,KAAK,CAAE,CACxCV,kBAAkB,CAACW,KAAK,CAAG,IAAI,CAC/BV,UAAU,CAACU,KAAK,CAAGT,UAAU,CAC5BC,0BAA0B,CACzBC,KAAK,CAACN,CAAC,CAACU,WAAW,CAACI,CAAC,CAAGP,iBAAiB,CAAE,CAAC,CAAEC,WAAW,CAACK,KAAK,CAChE,CAAC,CACDE,SAAS,CACR,SAAAC,UAAU,CAAK,CACf,GAAIA,UAAU,CAAE,CACfd,kBAAkB,CAACW,KAAK,CAAG,KAAK,CACjC,CACD,CACD,CAAC,CACF,CACD"}',version:"3.5.4"},_worklet_2602785254811_init_data={code:"function anonymous(isFinished){const{isActiveTapGesture}=this.__closure;if(isFinished){isActiveTapGesture.value=false;}}",location:"/home/runner/work/components/components/src/slider/hooks/useTapHandler.ts",sourceMap:'{"version":3,"names":["anonymous","isFinished","isActiveTapGesture","__closure","value"],"sources":["/home/runner/work/components/components/src/slider/hooks/useTapHandler.ts"],"mappings":"AAgCK,SAAAA,UAAAC,UAAe,QAAAC,kBAAA,OAAAC,SAAA,CACf,GAAIF,UAAU,CAAE,CACfC,kBAAkB,CAACE,KAAK,CAAG,KAAK,CACjC,CACD"}',version:"3.5.4"};exports.useTapHandler=function useTapHandler(_ref){var translateX=_ref.translateX,sliderWidth=_ref.sliderWidth,calculateSnappedTranslateX=_ref.calculateSnappedTranslateX,isActiveTapGesture=(0,_reactNativeReanimated.useSharedValue)(!1),tapGestureHandler=function(){var _e=[new __webpack_require__.g.Error,-9,-27],anonymous=function anonymous(e){e.nativeEvent.state===_reactNativeGestureHandler.State.BEGAN&&(isActiveTapGesture.value=!0,translateX.value=(0,_reactNativeReanimated.withTiming)(calculateSnappedTranslateX(clamp(e.nativeEvent.x-_constants.CURSOR_HALF_WIDTH,0,sliderWidth.value)),void 0,function(){var _e=[new __webpack_require__.g.Error,-2,-27],anonymous=function anonymous(isFinished){isFinished&&(isActiveTapGesture.value=!1)};return anonymous.__closure={isActiveTapGesture},anonymous.__initData=_worklet_2602785254811_init_data,anonymous.__workletHash=2602785254811,anonymous.__stackDetails=_e,anonymous}()))};return anonymous.__closure={State:_reactNativeGestureHandler.State,isActiveTapGesture,translateX,withTiming:_reactNativeReanimated.withTiming,calculateSnappedTranslateX,clamp,CURSOR_HALF_WIDTH:_constants.CURSOR_HALF_WIDTH,sliderWidth},anonymous.__initData=_worklet_16256465871117_init_data,anonymous.__workletHash=0xec900dfa10d,anonymous.__stackDetails=_e,anonymous}();return{tapGestureHandler,isActiveTapGesture}}},"./src/slider/hooks/useUpdateOuterSharedValue.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useUpdateOuterSharedValue=void 0;var _reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js"),_worklet_6501670837977_init_data={code:"function anonymous(){const{value}=this.__closure;return value.value;}",location:"/home/runner/work/components/components/src/slider/hooks/useUpdateOuterSharedValue.ts",sourceMap:'{"version":3,"names":["anonymous","value","__closure"],"sources":["/home/runner/work/components/components/src/slider/hooks/useUpdateOuterSharedValue.ts"],"mappings":"AAOE,SAAAA,UAAA,QAAAC,KAAA,OAAAC,SAAA,OAAM,CAAAD,KAAM,CAAAA,KAAA"}',version:"3.5.4"},_worklet_11845130020381_init_data={code:"function anonymous(_value,previousValue){const{sharedValue}=this.__closure;if(sharedValue&&_value!==previousValue){sharedValue.value=_value;}}",location:"/home/runner/work/components/components/src/slider/hooks/useUpdateOuterSharedValue.ts",sourceMap:'{"version":3,"names":["anonymous","_value","previousValue","sharedValue","__closure","value"],"sources":["/home/runner/work/components/components/src/slider/hooks/useUpdateOuterSharedValue.ts"],"mappings":"AAQE,QAAC,CAAAA,SAAMA,CAAEC,MAAA,CAAAC,aAAkB,QAAAC,WAAA,OAAAC,SAAA,CAC1B,GAAID,WAAW,EAAIF,MAAM,GAAKC,aAAa,CAAE,CAC5CC,WAAW,CAACE,KAAK,CAAGJ,MAAM,CAC3B,CACD"}',version:"3.5.4"};exports.useUpdateOuterSharedValue=function useUpdateOuterSharedValue(value,sharedValue){var _e,anonymous;(0,_reactNativeReanimated.useAnimatedReaction)((_e=[new __webpack_require__.g.Error,-2,-27],(anonymous=function anonymous(){return value.value}).__closure={value},anonymous.__initData=_worklet_6501670837977_init_data,anonymous.__workletHash=6501670837977,anonymous.__stackDetails=_e,anonymous),function(){var _e=[new __webpack_require__.g.Error,-2,-27],anonymous=function anonymous(_value,previousValue){sharedValue&&_value!==previousValue&&(sharedValue.value=_value)};return anonymous.__closure={sharedValue},anonymous.__initData=_worklet_11845130020381_init_data,anonymous.__workletHash=0xac5e8c4661d,anonymous.__stackDetails=_e,anonymous}())}}}]);