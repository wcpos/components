(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[67029,61399,26330,23175,24951,27310],{"./node_modules/@babel/runtime/helpers/arrayWithHoles.js":module=>{module.exports=function _arrayWithHoles(arr){if(Array.isArray(arr))return arr},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,{Z:()=>_taggedTemplateLiteral})},"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":module=>{module.exports=function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/nonIterableRest.js":module=>{module.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/slicedToArray.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayWithHoles=__webpack_require__("./node_modules/@babel/runtime/helpers/arrayWithHoles.js"),iterableToArrayLimit=__webpack_require__("./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"),unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"),nonIterableRest=__webpack_require__("./node_modules/@babel/runtime/helpers/nonIterableRest.js");module.exports=function _slicedToArray(arr,i){return arrayWithHoles(arr)||iterableToArrayLimit(arr,i)||unsupportedIterableToArray(arr,i)||nonIterableRest()},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/box/box.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Box=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/box/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["padding","fill","space","horizontal","align","distribution","reverse","border"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Box=React.forwardRef((function(_ref,ref){var _ref$padding=_ref.padding,padding=void 0===_ref$padding?"none":_ref$padding,_ref$fill=_ref.fill,fill=void 0!==_ref$fill&&_ref$fill,_ref$space=_ref.space,space=void 0===_ref$space?"none":_ref$space,_ref$horizontal=_ref.horizontal,horizontal=void 0!==_ref$horizontal&&_ref$horizontal,_ref$align=_ref.align,align=void 0===_ref$align?"fill":_ref$align,_ref$distribution=_ref.distribution,distribution=void 0===_ref$distribution?"start":_ref$distribution,_ref$reverse=_ref.reverse,reverse=void 0!==_ref$reverse&&_ref$reverse,_ref$border=_ref.border,border=void 0!==_ref$border&&_ref$border,rest=(0,_objectWithoutProperties2.default)(_ref,_excluded),children=React.Children.toArray(rest.children).filter(Boolean);React.Children.count(children);return(0,_jsxRuntime.jsx)(Styled.Box,Object.assign({ref,_padding:padding,fill,space,horizontal,align,distribution,reverse,border},rest,{children}))}));exports.Box=Box;try{Box.displayName="Box",Box.__docgenInfo={description:'Used as a basic building block to layout views. Layouting follow a flexbox like approach.\n\n> **Note:** Padding is applied from the more generic ones to the more specific.\n>\n>For example, if you apply `padding="small"` and `paddingTop="large"`, the `Box` will have a `small` padding on all sides, except top where the padding will be `large`.',displayName:"Box",props:{padding:{defaultValue:{value:"none"},description:"Padding applied on all sides.",name:"padding",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},paddingX:{defaultValue:null,description:"Padding applied horizontally (left & right).",name:"paddingX",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},paddingY:{defaultValue:null,description:"Padding applied vertically (top & bottom).",name:"paddingY",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},paddingTop:{defaultValue:null,description:"Padding applied to top side.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},paddingBottom:{defaultValue:null,description:"Padding applied to bottom side.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},paddingLeft:{defaultValue:null,description:"Padding applied to left side.",name:"paddingLeft",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},paddingRight:{defaultValue:null,description:"Padding applied to right side.",name:"paddingRight",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},margin:{defaultValue:null,description:"Margin applied on all sides.",name:"margin",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},marginX:{defaultValue:null,description:"Margin applied horizontally (left & right).",name:"marginX",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},marginY:{defaultValue:null,description:"Margin applied vertically (top & bottom).",name:"marginY",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},marginTop:{defaultValue:null,description:"Margin applied to top side.",name:"marginTop",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},marginBottom:{defaultValue:null,description:"Margin applied to bottom side.",name:"marginBottom",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},marginLeft:{defaultValue:null,description:"Margin applied to left side.",name:"marginLeft",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},marginRight:{defaultValue:null,description:"Margin applied to right side.",name:"marginRight",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},rounding:{defaultValue:null,description:"Rounding applied to all corners",name:"rounding",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"circle"'}]}},roundingTopLeft:{defaultValue:null,description:"Rounding applied to top left corner.",name:"roundingTopLeft",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"circle"'}]}},roundingTopRight:{defaultValue:null,description:"Rounding applied to top right corner.",name:"roundingTopRight",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"circle"'}]}},roundingBottomRight:{defaultValue:null,description:"Rounding applied to bottom right corner.",name:"roundingBottomRight",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"circle"'}]}},roundingBottomLeft:{defaultValue:null,description:"Rounding applied to bottom left corner.",name:"roundingBottomLeft",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"circle"'}]}},border:{defaultValue:{value:"false"},description:"Set to `true` to place 1px solid border on all sides.",name:"border",required:!1,type:{name:'boolean | "text" | "disabled" | "inverse" | "textMuted" | "primary" | "secondary" | "attention" | "critical" | "info" | "success" | "warning" | "lightestGrey" | "lightGrey" | ... 8 more ...'}},borderTop:{defaultValue:null,description:"Border applied to top side.",name:"borderTop",required:!1,type:{name:'boolean | "text" | "disabled" | "inverse" | "textMuted" | "primary" | "secondary" | "attention" | "critical" | "info" | "success" | "warning" | "lightestGrey" | "lightGrey" | ... 8 more ...'}},borderBottom:{defaultValue:null,description:"Border applied to bottom side.",name:"borderBottom",required:!1,type:{name:'boolean | "text" | "disabled" | "inverse" | "textMuted" | "primary" | "secondary" | "attention" | "critical" | "info" | "success" | "warning" | "lightestGrey" | "lightGrey" | ... 8 more ...'}},borderLeft:{defaultValue:null,description:"Border applied to left side.",name:"borderLeft",required:!1,type:{name:'boolean | "text" | "disabled" | "inverse" | "textMuted" | "primary" | "secondary" | "attention" | "critical" | "info" | "success" | "warning" | "lightestGrey" | "lightGrey" | ... 8 more ...'}},borderRight:{defaultValue:null,description:"Border applied to right side.",name:"borderRight",required:!1,type:{name:'boolean | "text" | "disabled" | "inverse" | "textMuted" | "primary" | "secondary" | "attention" | "critical" | "info" | "success" | "warning" | "lightestGrey" | "lightGrey" | ... 8 more ...'}},fill:{defaultValue:{value:"false"},description:"Set to `true` to set underlying view `flex` property to `1` to fill parent view.",name:"fill",required:!1,type:{name:"boolean"}},space:{defaultValue:{value:"none"},description:"Defines a space to use between each component.",name:"space",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},horizontal:{defaultValue:{value:"false"},description:"Set to `true` to display children components horizontally.",name:"horizontal",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"fill"},description:"Defines how children views are aligned (in opposite direction of the Box).",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"fill"'},{value:'"start"'},{value:'"end"'}]}},distribution:{defaultValue:{value:"start"},description:"Defines how views are aligned (in same direction of the Box).",name:"distribution",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"spaceBetween"'}]}},reverse:{defaultValue:{value:"false"},description:"If true, children order will be reversed.",name:"reverse",required:!1,type:{name:"boolean"}},raised:{defaultValue:null,description:"If true, a box shadow will be applied",name:"raised",required:!1,type:{name:"boolean"}},scrollable:{defaultValue:null,description:"If true, children will be wraped in ScrollView.",name:"scrollable",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/box/box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/box/box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/box/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _box.Box}});var _box=__webpack_require__("./src/box/box.tsx")},"./src/box/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);var _templateObject,_templateObject2,_templateObject3,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),exports.Box=void 0;var _native=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Box=_native.default.View(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\tpadding-top: ",";\n\tpadding-bottom: ",";\n\tpadding-left: ",";\n\tpadding-right: ",";\n\n\tmargin-top: ",";\n\tmargin-bottom: ",";\n\tmargin-left: ",";\n\tmargin-right: ",";\n\n\tflex-direction: ",";\n\n\t","\n\n\tgap: ",";\n\n\tjustify-content: ",";\n\n\talign-items: ",";\n\n\t","\n\n\tborder-top-left-radius: ",";\n\tborder-top-right-radius: ",";\n\tborder-bottom-right-radius: ",";\n\tborder-bottom-left-radius: ",";\n\n\tborder-top-width: ",";\n\tborder-right-width: ",";\n\tborder-bottom-width: ",";\n\tborder-left-width: ",";\n\tborder-color: ",";\n\tborder-style: solid;\n"])),(function(_ref){var theme=_ref.theme,paddingTop=_ref.paddingTop,paddingY=_ref.paddingY,_padding=_ref._padding;return"".concat(theme.spacing[paddingTop||paddingY||_padding||"none"],"px")}),(function(_ref2){var theme=_ref2.theme,paddingBottom=_ref2.paddingBottom,paddingY=_ref2.paddingY,_padding=_ref2._padding;return"".concat(theme.spacing[paddingBottom||paddingY||_padding||"none"],"px")}),(function(_ref3){var theme=_ref3.theme,paddingLeft=_ref3.paddingLeft,paddingX=_ref3.paddingX,_padding=_ref3._padding;return"".concat(theme.spacing[paddingLeft||paddingX||_padding||"none"],"px")}),(function(_ref4){var theme=_ref4.theme,paddingRight=_ref4.paddingRight,paddingX=_ref4.paddingX,_padding=_ref4._padding;return"".concat(theme.spacing[paddingRight||paddingX||_padding||"none"],"px")}),(function(_ref5){var theme=_ref5.theme,marginTop=_ref5.marginTop,marginY=_ref5.marginY,_margin=_ref5._margin;return"".concat(theme.spacing[marginTop||marginY||_margin||"none"],"px")}),(function(_ref6){var theme=_ref6.theme,marginBottom=_ref6.marginBottom,marginY=_ref6.marginY,_margin=_ref6._margin;return"".concat(theme.spacing[marginBottom||marginY||_margin||"none"],"px")}),(function(_ref7){var theme=_ref7.theme,marginLeft=_ref7.marginLeft,marginX=_ref7.marginX,_margin=_ref7._margin;return"".concat(theme.spacing[marginLeft||marginX||_margin||"none"],"px")}),(function(_ref8){var theme=_ref8.theme,marginRight=_ref8.marginRight,marginX=_ref8.marginX,_margin=_ref8._margin;return"".concat(theme.spacing[marginRight||marginX||_margin||"none"],"px")}),(function(_ref9){var reverse=_ref9.reverse,horizontal=_ref9.horizontal;return reverse?horizontal?"row-reverse":"column-reverse":horizontal?"row":"column"}),(function(_ref10){return _ref10.fill&&(0,_native.css)(_templateObject2||(_templateObject2=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\t\t\tflex: 1;\n\t\t"])))}),(function(_ref11){var theme=_ref11.theme,space=_ref11.space;return"".concat(theme.spacing[space],"px")}),(function(_ref12){var distribution=_ref12.distribution;return"start"===distribution?"flex-start":"end"===distribution?"flex-end":"center"===distribution?"center":"space-between"}),(function(_ref13){var align=_ref13.align;return"fill"===align?"stretch":"start"===align?"flex-start":"end"===align?"flex-end":"center"}),(function(_ref14){return _ref14.raised&&(0,_native.css)(_templateObject3||(_templateObject3=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\t\t\tshadow-offset: {\n\t\t\t\twidth: 0;\n\t\t\t\theight: 1;\n\t\t\t}\n\t\t\tshadow-opacity: 0.22;\n\t\t\tshadow-radius: 7.5px;\n\t\t\tshadow-color: #000;\n\t\t\televation: 5;\n\t\t"])))}),(function(_ref15){var theme=_ref15.theme,roundingTopLeft=_ref15.roundingTopLeft,rounding=_ref15.rounding;return"".concat(theme.rounding[roundingTopLeft||rounding||"none"],"px")}),(function(_ref16){var theme=_ref16.theme,roundingTopRight=_ref16.roundingTopRight,rounding=_ref16.rounding;return"".concat(theme.rounding[roundingTopRight||rounding||"none"],"px")}),(function(_ref17){var theme=_ref17.theme,roundingBottomRight=_ref17.roundingBottomRight,rounding=_ref17.rounding;return"".concat(theme.rounding[roundingBottomRight||rounding||"none"],"px")}),(function(_ref18){var theme=_ref18.theme,roundingBottomLeft=_ref18.roundingBottomLeft,rounding=_ref18.rounding;return"".concat(theme.rounding[roundingBottomLeft||rounding||"none"],"px")}),(function(_ref19){var borderTop=_ref19.borderTop,border=_ref19.border;return borderTop||border?"1px":0}),(function(_ref20){var borderRight=_ref20.borderRight,border=_ref20.border;return borderRight||border?"1px":0}),(function(_ref21){var borderBottom=_ref21.borderBottom,border=_ref21.border;return borderBottom||border?"1px":0}),(function(_ref22){var borderLeft=_ref22.borderLeft,border=_ref22.border;return borderLeft||border?"1px":0}),(function(_ref23){var theme=_ref23.theme,border=_ref23.border,borderTop=_ref23.borderTop,borderRight=_ref23.borderRight,borderBottom=_ref23.borderBottom,borderLeft=_ref23.borderLeft;return theme.colors[border||borderTop||borderRight||borderBottom||borderLeft]||theme.colors.border}));exports.Box=Box},"./src/table/context.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useTable=exports.TableContext=void 0;var React=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var TableContext=React.createContext(null);exports.TableContext=TableContext;exports.useTable=function useTable(){var context=React.useContext(TableContext);if(!context)throw new Error("useTable must be called within TableContext");return context}},"./src/table/row.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js")),_slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_context=__webpack_require__("./src/table/context.ts"),Styled=_interopRequireWildcard(__webpack_require__("./src/table/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["item","rowStyle","cellStyle","index"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var alignItemsMap={left:"start",center:"center",right:"end"},TableRow=function TableRow(_ref){var item=_ref.item,rowStyle=_ref.rowStyle,cellStyle=_ref.cellStyle,index=_ref.index,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),context=(0,_context.useTable)(),columns=context.columns,cellRenderer=props.cellRenderer||context.cellRenderer,_React$useState=React.useState({}),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),cellWidths=_React$useState2[0],setCellWidths=_React$useState2[1],_onLayout=React.useCallback((function(event,columnKey){var width=event.nativeEvent.layout.width;setCellWidths((function(prevWidths){return Object.assign({},prevWidths,(0,_defineProperty2.default)({},columnKey,width))}))}),[]),renderCell=React.useCallback((function(column,idx){var _column$flex=column.flex,flex=void 0===_column$flex?1:_column$flex,_column$align=column.align,align=void 0===_column$align?"left":_column$align,width=column.width;return(0,_jsxRuntime.jsx)(Styled.Cell,{padding:"small",flex,width,align:alignItemsMap[align],style:[cellStyle],onLayout:function onLayout(event){return _onLayout(event,column.key)},children:cellRenderer({item,column,index:idx,cellWidth:cellWidths[column.key]})},column.key)}),[cellRenderer,cellStyle,cellWidths,item,_onLayout]);return(0,_jsxRuntime.jsx)(Styled.Row,{horizontal:!0,align:"center",style:rowStyle,alt:index%2!=0,children:columns.map(renderCell)})},_default=React.memo(TableRow);exports.default=_default;try{TableRow.displayName="TableRow",TableRow.__docgenInfo={description:"TODO - Use a TableContext to pass down data, it's more flexible to add new props",displayName:"TableRow",props:{rowStyle:{defaultValue:null,description:"",name:"rowStyle",required:!1,type:{name:"ViewStyle"}},cellStyle:{defaultValue:null,description:"",name:"cellStyle",required:!1,type:{name:"ViewStyle"}},extraData:{defaultValue:null,description:"",name:"extraData",required:!0,type:{name:"any"}},cellRenderer:{defaultValue:null,description:"",name:"cellRenderer",required:!1,type:{name:"CellRenderer<T>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/table/row.tsx#TableRow"]={docgenInfo:TableRow.__docgenInfo,name:"TableRow",path:"src/table/row.tsx#TableRow"})}catch(__react_docgen_typescript_loader_error){}},"./src/table/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),exports.Table=exports.Row=exports.HeaderTextWrapper=exports.HeaderRow=exports.HeaderCell=exports.Cell=void 0;var _native=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")),_box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),Table=_native.default.View(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\twidth: 100%;\n\theight: 100%;\n"])));exports.Table=Table;var Row=(0,_native.default)(_box.default)(_templateObject2||(_templateObject2=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\tborder-bottom-width: 0;\n\tborder-style: solid;\n\tborder-bottom-color: ",";\n\tbackground-color: ",";\n"])),(function(_ref){return _ref.theme.colors.lightGrey}),(function(_ref2){var alt=_ref2.alt,theme=_ref2.theme;return alt?theme.colors.lightestGrey:"transparent"}));exports.Row=Row;var Cell=(0,_native.default)(_box.default)(_templateObject3||(_templateObject3=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\tflex: ",";\n"])),(function(_ref3){var flex=_ref3.flex,width=_ref3.width;return width?"0 0 ".concat(width,"px"):flex}));exports.Cell=Cell;var HeaderRow=(0,_native.default)(_box.default)(_templateObject4||(_templateObject4=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\tborder-bottom-width: 1px;\n\tborder-style: solid;\n\tborder-bottom-color: ",";\n\tbackground-color: ",";\n"])),(function(_ref4){return _ref4.theme.colors.grey}),(function(_ref5){return _ref5.theme.colors.lightGrey}));exports.HeaderRow=HeaderRow;var HeaderCell=(0,_native.default)(_box.default)(_templateObject5||(_templateObject5=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\tflex: ",";\n"])),(function(_ref6){var flex=_ref6.flex,width=_ref6.width;return width?"0 0 ".concat(width,"px"):flex}));exports.HeaderCell=HeaderCell;var HeaderTextWrapper=_native.default.View(_templateObject6||(_templateObject6=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\tflex-direction: row;\n\talign-items: center;\n"])));exports.HeaderTextWrapper=HeaderTextWrapper}}]);