(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[62401],{"./src/slider/hooks/useCalculatedValue.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useCalculatedValue=void 0;var anonymous,_reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js"),_worklet_7975134349067_init_data={code:"function anonymous(value,precision=0){const p=10**precision;return Math.round(value*p)/p;}"},round=((anonymous=function anonymous(value){var precision=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,p=Math.pow(10,precision);return Math.round(value*p)/p}).__closure={},anonymous.__workletHash=7975134349067,anonymous.__initData=_worklet_7975134349067_init_data,anonymous),_worklet_14738563109626_init_data={code:"function anonymous(){const{sliderWidth,max,min}=this.__closure;return sliderWidth.value/(max-min);}"},_worklet_1027228614368_init_data={code:"function anonymous(x){const{round,onePointWidth,step}=this.__closure;return round(x/onePointWidth.value/step)*step;}"},_worklet_15129552375390_init_data={code:"function anonymous(){const{onePointWidth,initialValue,calculateAbsoluteValue,translateX,min}=this.__closure;return onePointWidth.value===0?initialValue:calculateAbsoluteValue(translateX.value)+min;}"},_worklet_14296633587582_init_data={code:"function anonymous(targetX){const{calculateAbsoluteValue,onePointWidth}=this.__closure;return calculateAbsoluteValue(targetX)*onePointWidth.value;}"};exports.useCalculatedValue=function useCalculatedValue(_ref){var translateX=_ref.translateX,sliderWidth=_ref.sliderWidth,initialValue=_ref.initialValue,min=_ref.min,max=_ref.max,step=_ref.step,onePointWidth=(0,_reactNativeReanimated.useDerivedValue)(function(){var anonymous=function anonymous(){return sliderWidth.value/(max-min)};return anonymous.__closure={sliderWidth,max,min},anonymous.__workletHash=0xd6796d192fa,anonymous.__initData=_worklet_14738563109626_init_data,anonymous}()),calculateAbsoluteValue=function(){var anonymous=function anonymous(x){return round(x/onePointWidth.value/step)*step};return anonymous.__closure={round,onePointWidth,step},anonymous.__workletHash=0xef2b98bee0,anonymous.__initData=_worklet_1027228614368_init_data,anonymous}();return{value:(0,_reactNativeReanimated.useDerivedValue)(function(){var anonymous=function anonymous(){return 0===onePointWidth.value?initialValue:calculateAbsoluteValue(translateX.value)+min};return anonymous.__closure={onePointWidth,initialValue,calculateAbsoluteValue,translateX,min},anonymous.__workletHash=0xdc29f984e5e,anonymous.__initData=_worklet_15129552375390_init_data,anonymous}()),calculateSnappedTranslateX:function(){var anonymous=function anonymous(targetX){return calculateAbsoluteValue(targetX)*onePointWidth.value};return anonymous.__closure={calculateAbsoluteValue,onePointWidth},anonymous.__workletHash=0xd00b1c4377e,anonymous.__initData=_worklet_14296633587582_init_data,anonymous}()}}}}]);