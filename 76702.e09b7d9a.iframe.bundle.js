(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[76702],{"./src/interactive/snap.tsx":(__unused_webpack_module,exports)=>{function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function F(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e2){didErr=!0,err=_e2},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}Object.defineProperty(exports,"__esModule",{value:!0}),exports.SNAP_SIZE=void 0,exports.distance=distance,exports.getDistanceTo=getDistanceTo,exports.getPossibleSnappedPosition=getPossibleSnappedPosition,exports.maybeSnapLeft=maybeSnapLeft,exports.maybeSnapTop=function maybeSnapTop(_props,windows,top){var snapBottom2=getPossibleSnappedPosition(windows,{getGap:function getGap(win){return top-win.top-win.height},getNew:function getNew(win){return win.top+win.height}});if(null!=snapBottom2)return snapBottom2;var snapBottom=getPossibleSnappedPosition(windows,{getGap:function getGap(win){return top-win.top-win.height},getNew:function getNew(win){return win.top+win.height}});if(null!=snapBottom)return snapBottom;var snapTop=getPossibleSnappedPosition(windows,{getGap:function getGap(win){return top-win.top},getNew:function getNew(win){return win.top}});if(null!=snapTop)return snapTop;return snapGrid(top)},exports.snapGrid=snapGrid;var SNAP_SIZE=exports.SNAP_SIZE=16;function snapGrid(val){return val-val%SNAP_SIZE}function getPossibleSnappedPosition(windows,_ref){var _step,getGap=_ref.getGap,getNew=_ref.getNew,_iterator=_createForOfIteratorHelper(windows);try{for(_iterator.s();!(_step=_iterator.n()).done;){var _win=_step.value,gap=Math.abs(getGap(_win));if(gap>=0&&gap<SNAP_SIZE)return getNew(_win)}}catch(err){_iterator.e(err)}finally{_iterator.f()}}function getDistanceTo(props,win){var x1=win.left,y1=win.top,x1b=win.left+win.width,y1b=win.top+win.height,x2=props.left,y2=props.top,x2b=props.left+props.width,y2b=props.top+props.height,left=x2b<x1,right=x1b<x2,bottom=y2b<y1,top=y1b<y2;return top&&left?distance(x1,y1b,x2b,y2):left&&bottom?distance(x1,y1,x2b,y2b):bottom&&right?distance(x1b,y1,x2,y2b):right&&top?distance(x1b,y1b,x2,y2):left?x1-x2b:right?x2-x1b:bottom?y1-y2b:top?y2-y1b:0}function distance(x1,y1,x2,y2){return Math.abs(x1-x2)+Math.abs(y1-y2)}function maybeSnapLeft(props,windows,left){var snapRight=getPossibleSnappedPosition(windows,{getGap:function getGap(win){return win.left-(props.width+left)},getNew:function getNew(win){return win.left-props.width}});if(null!=snapRight)return snapRight;var snapLeft=getPossibleSnappedPosition(windows,{getGap:function getGap(win){return left-(win.left+win.width)},getNew:function getNew(win){return win.left+win.width}});return null!=snapLeft?snapLeft:snapGrid(left)}try{snapGrid.displayName="snapGrid",snapGrid.__docgenInfo={description:"",displayName:"snapGrid",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/interactive/snap.tsx#snapGrid"]={docgenInfo:snapGrid.__docgenInfo,name:"snapGrid",path:"src/interactive/snap.tsx#snapGrid"})}catch(__react_docgen_typescript_loader_error){}try{getDistanceTo.displayName="getDistanceTo",getDistanceTo.__docgenInfo={description:"",displayName:"getDistanceTo",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/interactive/snap.tsx#getDistanceTo"]={docgenInfo:getDistanceTo.__docgenInfo,name:"getDistanceTo",path:"src/interactive/snap.tsx#getDistanceTo"})}catch(__react_docgen_typescript_loader_error){}try{maybeSnapLeft.displayName="maybeSnapLeft",maybeSnapLeft.__docgenInfo={description:"",displayName:"maybeSnapLeft",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/interactive/snap.tsx#maybeSnapLeft"]={docgenInfo:maybeSnapLeft.__docgenInfo,name:"maybeSnapLeft",path:"src/interactive/snap.tsx#maybeSnapLeft"})}catch(__react_docgen_typescript_loader_error){}}}]);