/*! For license information please see 1597.8c5b86090ff02711.js.LICENSE.txt */
"use strict";(self.webpackChunkenvironment_workbench=self.webpackChunkenvironment_workbench||[]).push([[1597,9239],{31597:(e,r,n)=>{n.r(r),n.d(r,{perfComponents:()=>a,perfConst:()=>t,sendMeasureEvent:()=>y,sessionId:()=>p});var t={};n.r(t),n.d(t,{GENERIC_CATEGORY:()=>c,PERFORMANCE_GLOBAL_NAMESPACE:()=>o});var a={};n.r(a),n.d(a,{PerfContext:()=>u,PerformanceMarkPaint:()=>s});const o="__POSTMAN_PERFORMANCE__",c="app-perf";var i=n(40540),f=n(52322);function s({children:e,markName:r,condition:n=!0,callback:t=function(){}}){const[a,o]=(0,i.useState)(!1),c=(0,i.useRef)(0),s=()=>{var e;if(n&&!a&&null!=(e=performance)&&e.mark){performance.mark(r);try{t()}catch(e){console.error("PerformanceMarkPaint: provided callback threw an error.",e)}o(!0)}};return(0,i.useLayoutEffect)((()=>(c.current=requestAnimationFrame(s),()=>cancelAnimationFrame(c.current))),[n]),(0,f.jsx)(f.Fragment,{children:e})}s.displayName="PerformanceMarkPaint";const l={markName:void 0,callback:void 0},u=(0,i.createContext)(l);u.displayName="PerfContext";var m=n(92465);const p=(0,n(48722).v4)(),d=[];function _(e){const r=Object.assign({},e,{traceId:p});m.AnalyticsService.addEventV2(r)}function y({name:e,category:r=c,label:n,entityType:t,once:a=!0}){if(!a||!d.includes(e)){d.push(e);for(const a of performance.getEntriesByName(e).filter((e=>e instanceof PerformanceMeasure)))_({category:r,action:a.name,value:Math.round(a.duration),label:n||"",entityType:t})}}},11837:(e,r,n)=>{var t=n(40540),a=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),r.Fragment=o("react.fragment")}var c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,o={},s=null,l=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,t)&&!f.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:a,type:e,key:s,ref:l,props:o,_owner:c.current}}r.jsx=s,r.jsxs=s},52322:(e,r,n)=>{e.exports=n(11837)}}]);
//# sourceMappingURL=1597.8c5b86090ff02711.js.map