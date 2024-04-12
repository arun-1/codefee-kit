import{useEffect as n}from"react";export default function(t,e){n((function(){var n=function(n){var r;(null==t?void 0:t.current)&&!(null===(r=null==t?void 0:t.current)||void 0===r?void 0:r.contains(n.target))&&e()};return document.addEventListener("click",n),function(){return document.removeEventListener("click",n)}}),[t,e])}
//# sourceMappingURL=useClickOutside.js.map
