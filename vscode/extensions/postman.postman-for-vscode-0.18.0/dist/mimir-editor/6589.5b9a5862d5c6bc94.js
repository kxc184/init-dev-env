"use strict";(self.webpackChunkmimir_editor=self.webpackChunkmimir_editor||[]).push([[6589,7397,9495],{7560:(e,t,r)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:()=>n})},98283:(e,t,r)=>{function n(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,{Z:()=>n})},96589:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r(7560),i=r(98283),o=r(40540);const a=o.useLayoutEffect;var u=function(e,t){"function"!=typeof e?e.current=t:e(t)};var d={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},c=function(e){Object.keys(d).forEach((function(t){e.style.setProperty(t,d[t],"important")}))},l=null,f=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize},s=function(){},h=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],g=!!document.documentElement.currentStyle;function p(e,t,r){var n,i,u=(n=r,i=o.useRef(n),a((function(){i.current=n})),i);o.useLayoutEffect((function(){var r=function(e){return u.current(e)};if(e)return e.addEventListener(t,r),function(){return e.removeEventListener(t,r)}}),[])}var b=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],v=function(e,t){var r,a=e.cacheMeasurements,d=e.maxRows,v=e.minRows,m=e.onChange,x=void 0===m?s:m,y=e.onHeightChange,S=void 0===y?s:y,w=(0,i.Z)(e,b),z=void 0!==w.value,R=o.useRef(null),C=function(e,t){var r=(0,o.useRef)();return(0,o.useCallback)((function(n){e.current=n,r.current&&u(r.current,null),r.current=t,t&&u(t,n)}),[t])}(R,t),E=o.useRef(0),F=o.useRef(),k=function(){var e=R.current,t=a&&F.current?F.current:function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r,n=(r=t,h.reduce((function(e,t){return e[t]=r[t],e}),{})),i=n.boxSizing;return""===i?null:(g&&"border-box"===i&&(n.width=parseFloat(n.width)+parseFloat(n.borderRightWidth)+parseFloat(n.borderLeftWidth)+parseFloat(n.paddingRight)+parseFloat(n.paddingLeft)+"px"),{sizingStyle:n,paddingSize:parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),borderSize:parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth)})}(e);if(t){F.current=t;var r=function(e,t,r,n){void 0===r&&(r=1),void 0===n&&(n=1/0),l||((l=document.createElement("textarea")).setAttribute("tabindex","-1"),l.setAttribute("aria-hidden","true"),c(l)),null===l.parentNode&&document.body.appendChild(l);var i=e.paddingSize,o=e.borderSize,a=e.sizingStyle,u=a.boxSizing;Object.keys(a).forEach((function(e){var t=e;l.style[t]=a[t]})),c(l),l.value=t;var d=f(l,e);l.value=t,d=f(l,e),l.value="x";var s=l.scrollHeight-i,h=s*r;"border-box"===u&&(h=h+i+o),d=Math.max(h,d);var g=s*n;return"border-box"===u&&(g=g+i+o),[d=Math.min(g,d),s]}(t,e.value||e.placeholder||"x",v,d),n=r[0],i=r[1];E.current!==n&&(E.current=n,e.style.setProperty("height",n+"px","important"),S(n,{rowHeight:i}))}};return o.useLayoutEffect(k),p(window,"resize",k),r=k,p(document.fonts,"loadingdone",r),o.createElement("textarea",(0,n.Z)({},w,{onChange:function(e){z||k(),x(e)},ref:C}))},m=o.forwardRef(v)}}]);
//# sourceMappingURL=6589.5b9a5862d5c6bc94.js.map