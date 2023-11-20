(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[14876],{"./src/interactive/low-pass-filter.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js")),_createClass2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js")),_defineProperty2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));exports.default=function(){function LowPassFilter(){var _this=this,smoothing=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.9;(0,_classCallCheck2.default)(this,LowPassFilter),(0,_defineProperty2.default)(this,"bufferMaxSize",void 0),(0,_defineProperty2.default)(this,"smoothing",void 0),(0,_defineProperty2.default)(this,"buffer",void 0),(0,_defineProperty2.default)(this,"_nextReduce",(function(last,current){return _this.smoothing*current+(1-_this.smoothing)*last})),this.smoothing=smoothing,this.buffer=[],this.bufferMaxSize=5}return(0,_createClass2.default)(LowPassFilter,[{key:"hasFullBuffer",value:function hasFullBuffer(){return this.buffer.length===this.bufferMaxSize}},{key:"push",value:function push(value){var removed=0;if(this.hasFullBuffer()){var tmp=this.buffer.shift();if(void 0===tmp)throw new Error("Invariant violation: Buffer reported full but shift returned nothing.");removed=tmp}return this.buffer.push(value),removed}},{key:"next",value:function next(nextValue){var removed=this.push(nextValue),result=this.buffer.reduce(this._nextReduce,removed);return this.buffer[this.buffer.length-1]=result,result}}]),LowPassFilter}()}}]);