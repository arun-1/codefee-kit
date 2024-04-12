import{polarToCartesian as e}from"../../utils/MathHelper.js";import t,{useRef as r,useState as n,useLayoutEffect as o,useCallback as a,Fragment as c}from"react";import{CenterGroup as l,ActiveCircle as u,Text as m,LongArm as i,HourMinuteOverlay as s}from"./Clock.styled.js";import{calcTouchHours as f,clockMarks as p,activeCircleRadius as d,calcMajorDeg as v,indexizeHour as E,markRadius as y}from"./Common.js";var x=function(x){var M=x.centerDomRect,h=x.hours,g=x.hourMarks,C=x.onHourChange,H=r(!1),j=n(h),k=j[0],A=j[1],D=v(k),w=E(k);o((function(){return A(h)}),[h]);var B=a((function(e,t){var r=e.clientX,n=e.clientY;if(void 0===t&&(t=!1),H.current&&M){var o=f(M,r,n);A(o),t&&(null==C||C(o))}}),[M,C]),F=a((function(e){H.current=!0,B(e)}),[B]),N=a((function(e){B(e,!0),H.current=!1}),[B]);return t.createElement(t.Fragment,null,t.createElement(l,null,p.map((function(r){var n=e(0,0,y,v(r)),o=n.x,a=n.y,l=w===r;return t.createElement(c,{key:r},l&&t.createElement(u,{cx:o,cy:a,r:d}),t.createElement(m,{x:o,y:a,isActive:l},t.createElement("tspan",{textAnchor:"middle",alignmentBaseline:"central"},g[r])))}))),t.createElement(l,null,t.createElement(i,{x1:"0",x2:"0",y1:"0",y2:"-220",transform:"rotate(".concat(D,")")})),t.createElement(s,{onMouseDown:F,onMouseMove:B,onMouseUp:N}))};x.displayName="EditHourMode",x.defaultProps={onHourChange:void 0};export default x;
//# sourceMappingURL=EditHourMode.js.map
