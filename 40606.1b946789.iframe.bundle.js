(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[40606],{"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/slider/hooks/useCursorHandler.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useCursorHandler=void 0;var _f,_reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/index.web.js"),clamp=((_f=function _f(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound)})._closure={},_f.asString="function _f(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound);}",_f.__workletHash=5192855762164,_f.__location="/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts (8:14)",_f);exports.useCursorHandler=function useCursorHandler(_ref){var translateX=_ref.translateX,sliderWidth=_ref.sliderWidth,calculateSnappedTranslateX=_ref.calculateSnappedTranslateX,isActivePanGesture=(0,_reactNativeReanimated.useSharedValue)(!1),panGestureHandler=(0,_reactNativeReanimated.useAnimatedGestureHandler)({onStart:function(){var _f=function _f(_,ctx){ctx.startX=translateX.value};return _f._closure={translateX},_f.asString="function _f(_,ctx){const{translateX}=jsThis._closure;{ctx.startX=translateX.value;}}",_f.__workletHash=0xbeae3a1ad21,_f.__location="/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts (30:11)",_f}(),onActive:function(){var _f=function _f(event,ctx){isActivePanGesture.value=!0,translateX.value=clamp(ctx.startX+event.translationX,0,sliderWidth.value)};return _f._closure={isActivePanGesture,translateX,clamp,sliderWidth},_f.asString="function _f(event,ctx){const{isActivePanGesture,translateX,clamp,sliderWidth}=jsThis._closure;{isActivePanGesture.value=true;translateX.value=clamp(ctx.startX+event.translationX,0,sliderWidth.value);}}",_f.__workletHash=3795342963813,_f.__location="/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts (33:12)",_f}(),onEnd:function(){var _f=function _f(){isActivePanGesture.value=!1,translateX.value=(0,_reactNativeReanimated.withTiming)(calculateSnappedTranslateX(translateX.value))};return _f._closure={isActivePanGesture,translateX,withTiming:_reactNativeReanimated.withTiming,calculateSnappedTranslateX},_f.asString="function _f(){const{isActivePanGesture,translateX,withTiming,calculateSnappedTranslateX}=jsThis._closure;{isActivePanGesture.value=false;translateX.value=withTiming(calculateSnappedTranslateX(translateX.value));}}",_f.__workletHash=3187745963725,_f.__location="/home/runner/work/components/components/src/slider/hooks/useCursorHandler.ts (37:9)",_f}()});return{panGestureHandler,isActivePanGesture}}}}]);