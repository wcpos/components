(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[10083],{"./src/numpad/reducer.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.ACTIONS=void 0,exports.formatOperand=function formatOperand(operand){},exports.reducer=function reducer(state,_ref){var type=_ref.type,payload=_ref.payload;switch(type){case ACTIONS.ADD_DIGIT:return state.overwrite||payload.overwrite?Object.assign({},state,{currentOperand:payload.digit,overwrite:!1}):"0"===payload.digit&&"0"===state.currentOperand||payload.digit===payload.decimalSeparator&&state.currentOperand&&state.currentOperand.includes(payload.decimalSeparator)?state:payload.digit===payload.decimalSeparator&&null==state.currentOperand?Object.assign({},state,{currentOperand:"0".concat(payload.decimalSeparator)}):"0"===state.currentOperand?Object.assign({},state,{currentOperand:payload.digit}):Object.assign({},state,{currentOperand:"".concat(state.currentOperand||"").concat(payload.digit)});case ACTIONS.CHOOSE_OPERATION:return null==state.currentOperand&&null==state.previousOperand?state:null==state.currentOperand?Object.assign({},state,{operation:payload.operation}):null==state.previousOperand?Object.assign({},state,{operation:payload.operation,previousOperand:state.currentOperand,currentOperand:null}):Object.assign({},state,{previousOperand:evaluate(state,payload.decimalSeparator),operation:payload.operation,currentOperand:null});case ACTIONS.CLEAR:return{currentOperand:null,operation:null,overwrite:!1,previousOperand:null};case ACTIONS.DELETE_DIGIT:return state.overwrite?Object.assign({},state,{overwrite:!1,currentOperand:null}):null==state.currentOperand?state:1===state.currentOperand.length?Object.assign({},state,{currentOperand:null}):Object.assign({},state,{currentOperand:state.currentOperand.slice(0,-1)});case ACTIONS.EVALUATE:return null==state.operation||null==state.currentOperand||null==state.previousOperand?state:Object.assign({},state,{overwrite:!0,previousOperand:null,operation:null,currentOperand:evaluate(state,payload.decimalSeparator)});case ACTIONS.SWITCH_SIGN:return state.currentOperand&&"0"!==state.currentOperand?state.currentOperand.startsWith("-")?Object.assign({},state,{currentOperand:state.currentOperand.slice(1)}):Object.assign({},state,{currentOperand:"-".concat(state.currentOperand)}):state;default:return state}};var ACTIONS={ADD_DIGIT:"add-digit",CHOOSE_OPERATION:"choose-operation",CLEAR:"clear",DELETE_DIGIT:"delete-digit",EVALUATE:"evaluate",SWITCH_SIGN:"switch-sign"};function evaluate(state,decimalSeparator){var _state$previousOperan,_state$currentOperand,prev=parseFloat((null==(_state$previousOperan=state.previousOperand)?void 0:_state$previousOperan.replace(decimalSeparator,"."))||""),current=parseFloat((null==(_state$currentOperand=state.currentOperand)?void 0:_state$currentOperand.replace(decimalSeparator,"."))||"");if(Number.isNaN(prev)||Number.isNaN(current))return"";var computation=0;switch(state.operation){case"+":computation=prev+current;break;case"-":computation=prev-current;break;case"*":computation=prev*current;break;case"÷":computation=prev/current}return computation.toString().replace(".",decimalSeparator)}exports.ACTIONS=ACTIONS}}]);