(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[86468,31967,6317],{"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":(module,__unused_webpack_exports,__webpack_require__)=>{var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");module.exports=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=objectWithoutPropertiesLoose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/box/box.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Box=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/box/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["padding","fill","space","horizontal","align","distribution","reverse","border"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Box=React.forwardRef((function(_ref,ref){var _ref$padding=_ref.padding,padding=void 0===_ref$padding?"none":_ref$padding,_ref$fill=_ref.fill,fill=void 0!==_ref$fill&&_ref$fill,_ref$space=_ref.space,space=void 0===_ref$space?"none":_ref$space,_ref$horizontal=_ref.horizontal,horizontal=void 0!==_ref$horizontal&&_ref$horizontal,_ref$align=_ref.align,align=void 0===_ref$align?"fill":_ref$align,_ref$distribution=_ref.distribution,distribution=void 0===_ref$distribution?"start":_ref$distribution,_ref$reverse=_ref.reverse,reverse=void 0!==_ref$reverse&&_ref$reverse,_ref$border=_ref.border,border=void 0!==_ref$border&&_ref$border,rest=(0,_objectWithoutProperties2.default)(_ref,_excluded),children=React.Children.toArray(rest.children).filter(Boolean);React.Children.count(children);return(0,_jsxRuntime.jsx)(Styled.Box,Object.assign({ref,_padding:padding,fill,space,horizontal,align,distribution,reverse,border},rest,{children}))}));exports.Box=Box;try{Box.displayName="Box",Box.__docgenInfo={description:'Used as a basic building block to layout views. Layouting follow a flexbox like approach.\n\n> **Note:** Padding is applied from the more generic ones to the more specific.\n>\n>For example, if you apply `padding="small"` and `paddingTop="large"`, the `Box` will have a `small` padding on all sides, except top where the padding will be `large`.',displayName:"Box",props:{padding:{defaultValue:{value:"none"},description:"Padding applied on all sides.",name:"padding",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},paddingX:{defaultValue:null,description:"Padding applied horizontally (left & right).",name:"paddingX",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},paddingY:{defaultValue:null,description:"Padding applied vertically (top & bottom).",name:"paddingY",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},paddingTop:{defaultValue:null,description:"Padding applied to top side.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},paddingBottom:{defaultValue:null,description:"Padding applied to bottom side.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},paddingLeft:{defaultValue:null,description:"Padding applied to left side.",name:"paddingLeft",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},paddingRight:{defaultValue:null,description:"Padding applied to right side.",name:"paddingRight",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},margin:{defaultValue:null,description:"Margin applied on all sides.",name:"margin",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},marginX:{defaultValue:null,description:"Margin applied horizontally (left & right).",name:"marginX",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},marginY:{defaultValue:null,description:"Margin applied vertically (top & bottom).",name:"marginY",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},marginTop:{defaultValue:null,description:"Margin applied to top side.",name:"marginTop",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},marginBottom:{defaultValue:null,description:"Margin applied to bottom side.",name:"marginBottom",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},marginLeft:{defaultValue:null,description:"Margin applied to left side.",name:"marginLeft",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},marginRight:{defaultValue:null,description:"Margin applied to right side.",name:"marginRight",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},rounding:{defaultValue:null,description:"Rounding applied to all corners",name:"rounding",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"circle"'}]}},roundingTopLeft:{defaultValue:null,description:"Rounding applied to top left corner.",name:"roundingTopLeft",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"circle"'}]}},roundingTopRight:{defaultValue:null,description:"Rounding applied to top right corner.",name:"roundingTopRight",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"circle"'}]}},roundingBottomRight:{defaultValue:null,description:"Rounding applied to bottom right corner.",name:"roundingBottomRight",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"circle"'}]}},roundingBottomLeft:{defaultValue:null,description:"Rounding applied to bottom left corner.",name:"roundingBottomLeft",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"circle"'}]}},border:{defaultValue:{value:"false"},description:"Set to `true` to place 1px solid border on all sides.",name:"border",required:!1,type:{name:'boolean | "text" | "disabled" | "inverse" | "textMuted" | "primary" | "secondary" | "attention" | "critical" | "info" | "success" | "warning" | "lightestGrey" | "lightGrey" | ... 8 more ...'}},borderTop:{defaultValue:null,description:"Border applied to top side.",name:"borderTop",required:!1,type:{name:'boolean | "text" | "disabled" | "inverse" | "textMuted" | "primary" | "secondary" | "attention" | "critical" | "info" | "success" | "warning" | "lightestGrey" | "lightGrey" | ... 8 more ...'}},borderBottom:{defaultValue:null,description:"Border applied to bottom side.",name:"borderBottom",required:!1,type:{name:'boolean | "text" | "disabled" | "inverse" | "textMuted" | "primary" | "secondary" | "attention" | "critical" | "info" | "success" | "warning" | "lightestGrey" | "lightGrey" | ... 8 more ...'}},borderLeft:{defaultValue:null,description:"Border applied to left side.",name:"borderLeft",required:!1,type:{name:'boolean | "text" | "disabled" | "inverse" | "textMuted" | "primary" | "secondary" | "attention" | "critical" | "info" | "success" | "warning" | "lightestGrey" | "lightGrey" | ... 8 more ...'}},borderRight:{defaultValue:null,description:"Border applied to right side.",name:"borderRight",required:!1,type:{name:'boolean | "text" | "disabled" | "inverse" | "textMuted" | "primary" | "secondary" | "attention" | "critical" | "info" | "success" | "warning" | "lightestGrey" | "lightGrey" | ... 8 more ...'}},fill:{defaultValue:{value:"false"},description:"Set to `true` to set underlying view `flex` property to `1` to fill parent view.",name:"fill",required:!1,type:{name:"boolean"}},space:{defaultValue:{value:"none"},description:"Defines a space to use between each component.",name:"space",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'},{value:'"xxSmall"'}]}},horizontal:{defaultValue:{value:"false"},description:"Set to `true` to display children components horizontally.",name:"horizontal",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"fill"},description:"Defines how children views are aligned (in opposite direction of the Box).",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"fill"'},{value:'"start"'},{value:'"end"'}]}},distribution:{defaultValue:{value:"start"},description:"Defines how views are aligned (in same direction of the Box).",name:"distribution",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"spaceBetween"'}]}},reverse:{defaultValue:{value:"false"},description:"If true, children order will be reversed.",name:"reverse",required:!1,type:{name:"boolean"}},raised:{defaultValue:null,description:"If true, a box shadow will be applied",name:"raised",required:!1,type:{name:"boolean"}},scrollable:{defaultValue:null,description:"If true, children will be wraped in ScrollView.",name:"scrollable",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/box/box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/box/box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/box/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _box.Box}});var _box=__webpack_require__("./src/box/box.tsx")},"./src/box/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);var _templateObject,_templateObject2,_templateObject3,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),exports.Box=void 0;var _native=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Box=_native.default.View(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\tpadding-top: ",";\n\tpadding-bottom: ",";\n\tpadding-left: ",";\n\tpadding-right: ",";\n\n\tmargin-top: ",";\n\tmargin-bottom: ",";\n\tmargin-left: ",";\n\tmargin-right: ",";\n\n\tflex-direction: ",";\n\n\t","\n\n\tgap: ",";\n\n\tjustify-content: ",";\n\n\talign-items: ",";\n\n\t","\n\n\tborder-top-left-radius: ",";\n\tborder-top-right-radius: ",";\n\tborder-bottom-right-radius: ",";\n\tborder-bottom-left-radius: ",";\n\n\tborder-top-width: ",";\n\tborder-right-width: ",";\n\tborder-bottom-width: ",";\n\tborder-left-width: ",";\n\tborder-color: ",";\n\tborder-style: solid;\n"])),(function(_ref){var theme=_ref.theme,paddingTop=_ref.paddingTop,paddingY=_ref.paddingY,_padding=_ref._padding;return"".concat(theme.spacing[paddingTop||paddingY||_padding||"none"],"px")}),(function(_ref2){var theme=_ref2.theme,paddingBottom=_ref2.paddingBottom,paddingY=_ref2.paddingY,_padding=_ref2._padding;return"".concat(theme.spacing[paddingBottom||paddingY||_padding||"none"],"px")}),(function(_ref3){var theme=_ref3.theme,paddingLeft=_ref3.paddingLeft,paddingX=_ref3.paddingX,_padding=_ref3._padding;return"".concat(theme.spacing[paddingLeft||paddingX||_padding||"none"],"px")}),(function(_ref4){var theme=_ref4.theme,paddingRight=_ref4.paddingRight,paddingX=_ref4.paddingX,_padding=_ref4._padding;return"".concat(theme.spacing[paddingRight||paddingX||_padding||"none"],"px")}),(function(_ref5){var theme=_ref5.theme,marginTop=_ref5.marginTop,marginY=_ref5.marginY,_margin=_ref5._margin;return"".concat(theme.spacing[marginTop||marginY||_margin||"none"],"px")}),(function(_ref6){var theme=_ref6.theme,marginBottom=_ref6.marginBottom,marginY=_ref6.marginY,_margin=_ref6._margin;return"".concat(theme.spacing[marginBottom||marginY||_margin||"none"],"px")}),(function(_ref7){var theme=_ref7.theme,marginLeft=_ref7.marginLeft,marginX=_ref7.marginX,_margin=_ref7._margin;return"".concat(theme.spacing[marginLeft||marginX||_margin||"none"],"px")}),(function(_ref8){var theme=_ref8.theme,marginRight=_ref8.marginRight,marginX=_ref8.marginX,_margin=_ref8._margin;return"".concat(theme.spacing[marginRight||marginX||_margin||"none"],"px")}),(function(_ref9){var reverse=_ref9.reverse,horizontal=_ref9.horizontal;return reverse?horizontal?"row-reverse":"column-reverse":horizontal?"row":"column"}),(function(_ref10){return _ref10.fill&&(0,_native.css)(_templateObject2||(_templateObject2=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\t\t\tflex: 1;\n\t\t"])))}),(function(_ref11){var theme=_ref11.theme,space=_ref11.space;return"".concat(theme.spacing[space],"px")}),(function(_ref12){var distribution=_ref12.distribution;return"start"===distribution?"flex-start":"end"===distribution?"flex-end":"center"===distribution?"center":"space-between"}),(function(_ref13){var align=_ref13.align;return"fill"===align?"stretch":"start"===align?"flex-start":"end"===align?"flex-end":"center"}),(function(_ref14){return _ref14.raised&&(0,_native.css)(_templateObject3||(_templateObject3=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\t\t\tshadow-offset: {\n\t\t\t\twidth: 0;\n\t\t\t\theight: 1;\n\t\t\t}\n\t\t\tshadow-opacity: 0.22;\n\t\t\tshadow-radius: 7.5px;\n\t\t\tshadow-color: #000;\n\t\t\televation: 5;\n\t\t"])))}),(function(_ref15){var theme=_ref15.theme,roundingTopLeft=_ref15.roundingTopLeft,rounding=_ref15.rounding;return"".concat(theme.rounding[roundingTopLeft||rounding||"none"],"px")}),(function(_ref16){var theme=_ref16.theme,roundingTopRight=_ref16.roundingTopRight,rounding=_ref16.rounding;return"".concat(theme.rounding[roundingTopRight||rounding||"none"],"px")}),(function(_ref17){var theme=_ref17.theme,roundingBottomRight=_ref17.roundingBottomRight,rounding=_ref17.rounding;return"".concat(theme.rounding[roundingBottomRight||rounding||"none"],"px")}),(function(_ref18){var theme=_ref18.theme,roundingBottomLeft=_ref18.roundingBottomLeft,rounding=_ref18.rounding;return"".concat(theme.rounding[roundingBottomLeft||rounding||"none"],"px")}),(function(_ref19){var borderTop=_ref19.borderTop,border=_ref19.border;return borderTop||border?"1px":0}),(function(_ref20){var borderRight=_ref20.borderRight,border=_ref20.border;return borderRight||border?"1px":0}),(function(_ref21){var borderBottom=_ref21.borderBottom,border=_ref21.border;return borderBottom||border?"1px":0}),(function(_ref22){var borderLeft=_ref22.borderLeft,border=_ref22.border;return borderLeft||border?"1px":0}),(function(_ref23){var theme=_ref23.theme,border=_ref23.border,borderTop=_ref23.borderTop,borderRight=_ref23.borderRight,borderBottom=_ref23.borderBottom,borderLeft=_ref23.borderLeft;return theme.colors[border||borderTop||borderRight||borderBottom||borderLeft]||theme.colors.border}));exports.Box=Box},"./src/checkbox/label.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _box=_interopRequireDefault(__webpack_require__("./src/box/index.ts")),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var _default=function Label(_ref){var children=_ref.children,info=(_ref.checked,_ref.info),size=_ref.size,type=_ref.type,label="string"==typeof children?(0,_jsxRuntime.jsx)(_text.default,{size,type,children}):children;return(0,_jsxRuntime.jsxs)(_box.default,{space:"small",children:[label,info&&(0,_jsxRuntime.jsx)(_text.default,{children:info})]})};exports.default=_default;try{label.displayName="label",label.__docgenInfo={description:"",displayName:"label",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},info:{defaultValue:null,description:"",name:"info",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/checkbox/label.tsx#label"]={docgenInfo:label.__docgenInfo,name:"label",path:"src/checkbox/label.tsx#label"})}catch(__react_docgen_typescript_loader_error){}},"./src/skeleton/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _skeleton.Skeleton}});var _skeleton=__webpack_require__("./src/skeleton/skeleton.tsx")},"./src/skeleton/skeleton.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Skeleton=void 0;var React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js")),Styled=_interopRequireWildcard(__webpack_require__("./src/skeleton/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var _worklet_14927644262409_init_data={code:"function anonymous() {\n  const {\n    opacity\n  } = this._closure;\n  return {\n    opacity: opacity.value\n  };\n}",location:"/home/runner/work/components/components/src/skeleton/skeleton.tsx",sourceMap:'{"version":3,"names":["anonymous","opacity","_closure","value"],"sources":["/home/runner/work/components/components/src/skeleton/skeleton.tsx"],"mappings":"AAwDwC,SAAAA,UAAA;EAAA;IAAAC;EAAA,SAAAC,QAAA;EAAA,OAAO;IAC7CD,OAAO,EAAEA,OAAO,CAACE;EAClB,CAAC;AAAA"}'},Skeleton=function Skeleton(_ref){var width=_ref.width,height=_ref.height,_ref$border=_ref.border,border=void 0===_ref$border?"rounded":_ref$border,style=_ref.style,opacity=(0,_reactNativeReanimated.useSharedValue)(.6);React.useEffect((function(){opacity.value=(0,_reactNativeReanimated.withRepeat)((0,_reactNativeReanimated.withTiming)(1,{duration:1e3,easing:_reactNativeReanimated.Easing.ease}),-1,!0)}),[opacity]);var _e,_f,animatedStyle=(0,_reactNativeReanimated.useAnimatedStyle)((_e=[new __webpack_require__.g.Error,-2,-27],(_f=function _f(){return{opacity:opacity.value}})._closure={opacity},_f.__initData=_worklet_14927644262409_init_data,_f.__workletHash=0xd939cef0009,_f.__stackDetails=_e,_f.__version="3.3.0",_f));return(0,_jsxRuntime.jsx)(Styled.Container,{as:_reactNativeReanimated.default.View,style:[{width,height},style,animatedStyle],border})};exports.Skeleton=Skeleton;try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},border:{defaultValue:{value:"rounded"},description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"rounded"'},{value:'"circular"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"ViewStyle"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/skeleton/skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/skeleton/skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/skeleton/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);var _templateObject,_templateObject2,_templateObject3,_templateObject4,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),exports.Container=void 0;var _native=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var Container=_native.default.View(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\toverflow: hidden;\n\tbackground-color: ",";\n\n\t","\n"])),(function(_ref){return _ref.theme.colors.darkGrey}),(function(_ref2){var border=_ref2.border,theme=_ref2.theme;switch(border){case"rounded":return(0,_native.css)(_templateObject2||(_templateObject2=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\t\t\t\t\tborder-radius: ","px;\n\t\t\t\t"])),theme.rounding.small);case"circular":return(0,_native.css)(_templateObject3||(_templateObject3=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\t\t\t\t\tborder-radius: ","px;\n\t\t\t\t"])),theme.rounding.circle);default:return(0,_native.css)(_templateObject4||(_templateObject4=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\t\t\t\t\tborder-radius: ","px;\n\t\t\t\t"])),theme.rounding.none)}}));exports.Container=Container},"./src/text/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _skeleton=__webpack_require__("./src/text/skeleton.tsx"),_text=__webpack_require__("./src/text/text.tsx"),_default=Object.assign(_text.Text,{Skeleton:_skeleton.TextSkeleton});exports.default=_default},"./src/text/skeleton.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextSkeleton=void 0;(function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj})(__webpack_require__("./node_modules/react/index.js"));var _skeleton=_interopRequireDefault(__webpack_require__("./src/skeleton/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}var lengthMap={default:120,short:60,long:240},TextSkeleton=function TextSkeleton(_ref){var _ref$length=_ref.length,length=void 0===_ref$length?"default":_ref$length;return(0,_jsxRuntime.jsx)(_skeleton.default,{width:lengthMap[length],height:20})};exports.TextSkeleton=TextSkeleton;try{TextSkeleton.displayName="TextSkeleton",TextSkeleton.__docgenInfo={description:"",displayName:"TextSkeleton",props:{length:{defaultValue:{value:"default"},description:"",name:"length",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"short"'},{value:'"long"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/text/skeleton.tsx#TextSkeleton"]={docgenInfo:TextSkeleton.__docgenInfo,name:"TextSkeleton",path:"src/text/skeleton.tsx#TextSkeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/text/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);var _templateObject,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),exports.Text=void 0;var Text=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js")).default.Text(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.Z)(["\n\tcolor: ",";\n\tfont-family: ",";\n\tfont-style: ",";\n\tfont-weight: ",";\n\tfont-size: ",";\n\tline-height: ",";\n\ttext-align: ",";\n\ttext-transform: ",";\n"])),(function(_ref){var type=_ref.type,theme=_ref.theme;return theme.colors[type]||theme.colors.text}),(function(_ref2){return _ref2.theme.font.family}),(function(_ref3){return _ref3.italic?"italic":"normal"}),(function(_ref4){var weight=_ref4.weight;return _ref4.theme.font.weight[weight||"normal"]}),(function(_ref5){var size=_ref5.size;return _ref5.theme.font.size[size||"normal"]}),(function(_ref6){var size=_ref6.size;return _ref6.theme.font.lineHeight[size||"normal"]}),(function(_ref7){return _ref7.align||"left"}),(function(_ref8){return _ref8.uppercase?"uppercase":"none"}));exports.Text=Text},"./src/text/text.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Text=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_htmlEntities=(_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),__webpack_require__("./node_modules/html-entities/lib/index.js")),_native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),Styled=_interopRequireWildcard(__webpack_require__("./src/text/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["align","children","italic","onPress","size","type","uppercase","weight","backgroundType"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var Text=function Text(_ref){var _ref$align=_ref.align,align=void 0===_ref$align?"left":_ref$align,children=_ref.children,italic=_ref.italic,onPress=_ref.onPress,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,type=_ref.type,uppercase=_ref.uppercase,_ref$weight=_ref.weight,weight=void 0===_ref$weight?"normal":_ref$weight,backgroundType=_ref.backgroundType,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),theme=(0,_native.useTheme)(),adjustedType="inverse"===type&&backgroundType?theme.inverseColors[backgroundType]:type;return(0,_jsxRuntime.jsx)(Styled.Text,Object.assign({align,italic,onPress,size,type:adjustedType,uppercase,weight},props,{children:"string"==typeof children?(0,_htmlEntities.decode)(children):children}))};exports.Text=Text;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"justify"'}]}},italic:{defaultValue:null,description:"",name:"italic",required:!1,type:{name:"boolean"}},onPress:{defaultValue:null,description:"This function is called on press.\nText intrinsically supports press handling with a default highlight state (which can be disabled with suppressHighlighting).",name:"onPress",required:!1,type:{name:"(() => void)"}},size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<TextStyle>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},backgroundType:{defaultValue:null,description:"",name:"backgroundType",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"disabled"'},{value:'"inverse"'},{value:'"textMuted"'},{value:'"primary"'},{value:'"secondary"'},{value:'"attention"'},{value:'"critical"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"lightestGrey"'},{value:'"lightGrey"'},{value:'"grey"'},{value:'"darkGrey"'},{value:'"darkestGrey"'},{value:'"bodyBackground"'},{value:'"headerBackground"'},{value:'"inputBackground"'},{value:'"border"'},{value:'"borderMuted"'}]}},uppercase:{defaultValue:null,description:"",name:"uppercase",required:!1,type:{name:"boolean"}},weight:{defaultValue:{value:"normal"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"light"'},{value:'"medium"'},{value:'"thin"'},{value:'"xLight"'},{value:'"semiBold"'},{value:'"bold"'},{value:'"xBold"'},{value:'"black"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/text/text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/text/text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}}}]);