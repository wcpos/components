(self.webpackChunk_wcpos_components=self.webpackChunk_wcpos_components||[]).push([[8070,19094,18847],{"./src/dialog/dialog.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Dialog=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_modal=(_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./src/modal/index.ts"))),_text=_interopRequireDefault(__webpack_require__("./src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","onClose","onAccept","onDecline"],Dialog=exports.Dialog=function Dialog(_ref){var children=_ref.children,onClose=_ref.onClose,onAccept=_ref.onAccept,onDecline=_ref.onDecline,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);return(0,_jsxRuntime.jsx)(_modal.default,Object.assign({size:"small",onClose,withCloseButton:!1,primaryAction:{label:"Confirm",action:function accept(){Promise.resolve(onAccept&&onAccept()).then((function(){onClose()}))},type:"primary"},secondaryActions:[{label:"Cancel",action:function decline(){Promise.resolve(onDecline&&onDecline()).then((function(){onClose()}))},type:"secondary"}]},props,{children:"string"==typeof children?(0,_jsxRuntime.jsx)(_text.default,{children}):children}))};try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"Show interactive content on top of an existing screen.\nIt should be used thoughtfully and sparingly, as it stops the user in its current flow.",displayName:"Dialog",props:{children:{defaultValue:null,description:"Content to be shown in the modal",name:"children",required:!0,type:{name:"ReactNode"}},opened:{defaultValue:null,description:"Mounts modal if true",name:"opened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Called when close button clicked and when escape key is pressed",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"Modal title, displayed in header before close button",name:"title",required:!1,type:{name:"ReactNode"}},withCloseButton:{defaultValue:null,description:"Hides close button if set to false, modal still can be closed with escape key and by clicking outside",name:"withCloseButton",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Modal body width",name:"size",required:!1,type:{name:"enum",value:[{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'},{value:'"xxLarge"'}]}},withBackdrop:{defaultValue:null,description:"Set false to hide the backdrop",name:"withBackdrop",required:!1,type:{name:"boolean"}},withPortal:{defaultValue:null,description:"Set false to use modal without portal, eg: react-navigation Stack.Screen",name:"withPortal",required:!1,type:{name:"boolean"}},withReactModal:{defaultValue:{value:"false"},description:"Define if Modal should use the react-native implementation of Modal.\nNote: react-native-web uses a Portal, very similar to the one used in this component.",name:"withReactModal",required:!1,type:{name:"boolean"}},primaryAction:{defaultValue:null,description:"",name:"primaryAction",required:!1,type:{name:"ModalFooterActionProps"}},secondaryActions:{defaultValue:null,description:"",name:"secondaryActions",required:!1,type:{name:"ModalFooterActionProps[]"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"ViewStyle"}},context:{defaultValue:null,description:"Anything you want to pass to useModal",name:"context",required:!1,type:{name:"any"}},onAccept:{defaultValue:null,description:"",name:"onAccept",required:!1,type:{name:"(() => void)"}},onDecline:{defaultValue:null,description:"",name:"onDecline",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dialog/dialog.tsx#Dialog"]={docgenInfo:Dialog.__docgenInfo,name:"Dialog",path:"src/dialog/dialog.tsx#Dialog"})}catch(__react_docgen_typescript_loader_error){}},"./src/dialog/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _dialog.Dialog}});var _dialog=__webpack_require__("./src/dialog/dialog.tsx")},"./src/modal/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,Object.defineProperty(exports,"useModal",{enumerable:!0,get:function get(){return _context.useModal}});var _container=__webpack_require__("./src/modal/container.tsx"),_content=__webpack_require__("./src/modal/content.tsx"),_footer=__webpack_require__("./src/modal/footer.tsx"),_header=__webpack_require__("./src/modal/header.tsx"),_modal=__webpack_require__("./src/modal/modal.tsx"),_context=__webpack_require__("./src/modal/context.ts");exports.default=Object.assign(_modal.Modal,{Container:_container.Container,Header:_header.Header,Content:_content.Content,Footer:_footer.Footer})}}]);