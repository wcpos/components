(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[50409,9582],{"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/slider/constants.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.CURSOR_WIDTH=exports.CURSOR_HALF_WIDTH=void 0;exports.CURSOR_WIDTH=20,exports.CURSOR_HALF_WIDTH=10},"./src/slider/hooks/useSliderWidth.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useSliderWidth=void 0;var _reactNativeReanimated=__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js"),_constants=__webpack_require__("./src/slider/constants.ts"),_worklet_17105362368336_init_data={code:"function anonymous(e){const{sliderWidth,CURSOR_WIDTH}=this.__closure;sliderWidth.value=e.nativeEvent.layout.width-CURSOR_WIDTH;}",location:"/home/runner/work/components/components/src/slider/hooks/useSliderWidth.ts",sourceMap:'{"version":3,"names":["anonymous","e","sliderWidth","CURSOR_WIDTH","__closure","value","nativeEvent","layout","width"],"sources":["/home/runner/work/components/components/src/slider/hooks/useSliderWidth.ts"],"mappings":"AAMkB,QAAC,CAAAA,SAAyBA,CAAAC,CAAA,QAAAC,WAAA,CAAAC,YAAA,OAAAC,SAAA,CAG1CF,WAAW,CAACG,KAAK,CAAGJ,CAAC,CAACK,WAAW,CAACC,MAAM,CAACC,KAAK,CAAGL,YAAY,CAC9D"}',version:"3.5.4"};exports.useSliderWidth=function useSliderWidth(){var _e,anonymous,width=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_constants.CURSOR_WIDTH,sliderWidth=(0,_reactNativeReanimated.useSharedValue)(width-_constants.CURSOR_WIDTH),onLayout=(_e=[new __webpack_require__.g.Error,-3,-27],(anonymous=function anonymous(e){sliderWidth.value=e.nativeEvent.layout.width-_constants.CURSOR_WIDTH}).__closure={sliderWidth,CURSOR_WIDTH:_constants.CURSOR_WIDTH},anonymous.__initData=_worklet_17105362368336_init_data,anonymous.__workletHash=0xf8ea70c3750,anonymous.__stackDetails=_e,anonymous);return{sliderWidth,onLayout}}}}]);