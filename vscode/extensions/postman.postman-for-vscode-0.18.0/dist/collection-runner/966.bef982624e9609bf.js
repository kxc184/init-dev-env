"use strict";(self.webpackChunkcollection_runner=self.webpackChunkcollection_runner||[]).push([[966,7560,9211],{7560:(e,n,r)=>{function t(){return t=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},t.apply(this,arguments)}r.d(n,{Z:()=>t})},20966:(e,n,r)=>{r.r(n),r.d(n,{DESKTOP_WINDOW_EVENT_CHANNEL:()=>d,INTERNAL_CHANNEL_BROADCAST_MAIN:()=>m,TOGGLE_WINDOW_MAXIMIZE_EVENT:()=>E,desktopCommunicationService:()=>f,useOpenNativeMenu:()=>a,useScreenParams:()=>b,useZoomFactor:()=>_});const t={invoke:()=>{throw new Error("Function not implemented.")},send:()=>{throw new Error("Function not implemented.")},subscribe:()=>{throw new Error("Function not implemented.")}},u=()=>t,c=(e,...n)=>u().invoke(e,...n);var o=r(7560),i=r(40540);function s(e){return[e.label,e.id,e.accelerator].filter(Boolean).join("_")}function l(e,n=new Map){return Array.isArray(e)?{menu:null==e?void 0:e.map((e=>{var r;return e.click&&n.set(s(e),e.click),(0,o.Z)({},e,{click:s(e),submenu:null==(r=l(e.submenu,n))?void 0:r.menu})})),clickHandlers:n}:{}}function a(e){const n=(0,i.useRef)();return(0,i.useEffect)((()=>u().subscribe("CLOSE_POPUP_MENU",(function(r,t){e&&"function"==typeof e&&!t&&e();const u=t&&n.current&&n.current.get(t);u&&u()}))),[]),e=>{const{menu:r,clickHandlers:t}=l(e);n.current=t,c("setNativeElectronMenuOpen",{menu:r})}}const f={send:(e,...n)=>u().send(e,...n),invoke:c,subscribe:(e,n)=>u().subscribe(e,n)||(()=>null)},m="PM_EB_INT_BROADCAST_MAIN",E="toggle-maximize",d="requester-window-events";function _(){const[e]=(0,i.useState)((()=>1));return(0,i.useEffect)((()=>{}),[]),e}function b(){const[e]=(0,i.useState)((()=>({isFullScreen:!1,isMaximized:!1,isBlurred:!1})));return(0,i.useEffect)((()=>{}),[]),e}}}]);
//# sourceMappingURL=966.bef982624e9609bf.js.map