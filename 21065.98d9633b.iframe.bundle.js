(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[21065,9582],{"./src/slider/constants.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.CURSOR_WIDTH=exports.CURSOR_HALF_WIDTH=void 0;exports.CURSOR_WIDTH=20,exports.CURSOR_HALF_WIDTH=10},"./src/slider/hooks/useSliderWidth.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useSliderWidth=void 0;var _reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js"),_constants=__webpack_require__("./src/slider/constants.ts"),_worklet_17105362368336_init_data={code:"function anonymous(e){const{sliderWidth,CURSOR_WIDTH}=this.__closure;sliderWidth.value=e.nativeEvent.layout.width-CURSOR_WIDTH;}"};exports.useSliderWidth=function useSliderWidth(){var anonymous,width=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_constants.CURSOR_WIDTH,sliderWidth=(0,_reactNativeReanimated.useSharedValue)(width-_constants.CURSOR_WIDTH),onLayout=((anonymous=function anonymous(e){sliderWidth.value=e.nativeEvent.layout.width-_constants.CURSOR_WIDTH}).__closure={sliderWidth,CURSOR_WIDTH:_constants.CURSOR_WIDTH},anonymous.__workletHash=0xf8ea70c3750,anonymous.__initData=_worklet_17105362368336_init_data,anonymous);return{sliderWidth,onLayout}}}}]);