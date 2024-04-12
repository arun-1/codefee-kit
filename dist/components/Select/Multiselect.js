import{__rest as e,__spreadArray as t,__assign as l}from"../../node_modules/tslib/tslib.es6.js";import n,{forwardRef as o,useState as c,useCallback as r,useEffect as a}from"react";import{CheckboxOption as s,HeaderControlsLayout as i,ControlButton as u,ControlButtonText as p,FooterControlsLayout as m,MultiselectLayout as d,MultiselectOption as f}from"./Multiselect.styled.js";import{Label as y}from"./Select.styled.js";var E=function(e){return"".concat((null==e?void 0:e.length)||0," selected")},b=function(e,t){var l=e.label;return n.createElement(s,{gutterBottom:0,checked:t.includes(e)||!1,label:l})},A=function(e){var t=e.labels,l=e.onUnselectAll,o=e.onSelectAll,c=t.UnselectAll,r=t.SelectAll;return n.createElement(i,null,n.createElement(u,{onClick:l},n.createElement(p,{type:"button"},c)),n.createElement(u,{onClick:o},n.createElement(p,{type:"button"},r)))},C=function(e){var t=e.labels,l=e.onCancel,o=e.onApply,c=t.Cancel,r=t.Apply;return n.createElement(m,null,n.createElement(u,{onClick:l},n.createElement(p,{type:"button"},c)),n.createElement(u,{onClick:o},n.createElement(p,{type:"button"},r)))},k=o((function(o,s){var i=o.controlLabels,u=o.options,p=o.selected,m=o.onSelectedChange,E=o.optionTemplate,b=o.selectedTemplate,k=e(o,["controlLabels","options","selected","onSelectedChange","optionTemplate","selectedTemplate"]),v=c(!1),S=v[0],T=v[1],h=c([]),L=h[0],U=h[1],g=r((function(e){return function(){(null==L?void 0:L.includes(e))?U(L.filter((function(t){return t!==e}))):U(t(t([],L,!0),[e],!1))}}),[L]),j=r((function(){U(p),T(!1)}),[p]);return a((function(){U(p)}),[p]),n.createElement(d,l({ref:s,open:S,setOpen:T,selectedDisplay:n.createElement(y,{type:"subtitle1"},null==b?void 0:b(L,o)),optionNodes:[n.createElement(A,{key:"selection-header",labels:i,onUnselectAll:function(){U([])},onSelectAll:function(){U(u)}}),n.createElement("ul",{key:"selection-nodes"},u.map((function(e){return n.createElement(f,{key:e.id,onClick:g(e)},null==E?void 0:E(e,L,o))}))),n.createElement(C,{key:"selection-footer",labels:i,onCancel:j,onApply:function(){m(L),T(!1)}})],onClickOutside:j},k))}));k.displayName="Multiselect",k.defaultProps={controlLabels:{Apply:"Apply",Cancel:"Cancel",SelectAll:"Select All",UnselectAll:"Unselect All"},selected:[],optionTemplate:b,selectedTemplate:E};export default k;export{b as DefaultOptionTemplate,E as DefaultSelectedTemplate,C as FooterControlsLayout,A as HeaderControlsLayout};
//# sourceMappingURL=Multiselect.js.map
