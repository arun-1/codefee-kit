import{__rest as e,__assign as n}from"../../node_modules/tslib/tslib.es6.js";import o,{forwardRef as l,useCallback as i}from"react";import{ConfirmDialog as r,Content as a,Button as t}from"./ConfirmDialog.styled.js";import m from"../Dialog/DialogHeader.js";import c from"../Dialog/DialogFooter.js";var f=l((function(l,f){var u=l.confirmationTitle,d=l.confirmLabel,s=l.cancelLabel,C=l.onConfirm,b=l.onCancel,p=l.children,g=e(l,["confirmationTitle","confirmLabel","cancelLabel","onConfirm","onCancel","children"]),v=i((function(){return null==C?void 0:C()}),[C]),D=i((function(){return null==b?void 0:b()}),[b]);return o.createElement(r,n({ref:f,isMandatory:!0},g),o.createElement(m,null,u),o.createElement(a,null,p),o.createElement(c,null,o.createElement(t,{onClick:v},d),o.createElement(t,{variant:"subtle",onClick:D},s)))}));f.displayName="ConfirmDialog",f.defaultProps={confirmationTitle:"Confirmation",confirmLabel:"Confirm",cancelLabel:"Cancel",onConfirm:void 0,onCancel:void 0};export default f;
//# sourceMappingURL=ConfirmDialog.js.map
