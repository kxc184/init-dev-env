"use strict";(self.webpackChunkenvironment_sidebar=self.webpackChunkenvironment_sidebar||[]).push([[9211,966],{966:(e,n,t)=>{t.r(n),t.d(n,{DESKTOP_WINDOW_EVENT_CHANNEL:()=>d,INTERNAL_CHANNEL_BROADCAST_MAIN:()=>m,TOGGLE_WINDOW_MAXIMIZE_EVENT:()=>E,desktopCommunicationService:()=>a,useOpenNativeMenu:()=>l,useScreenParams:()=>_,useZoomFactor:()=>f});const r={invoke:()=>{throw new Error("Function not implemented.")},send:()=>{throw new Error("Function not implemented.")},subscribe:()=>{throw new Error("Function not implemented.")}},u=()=>r,i=(e,...n)=>u().invoke(e,...n);var s=t(540);function c(e){return[e.label,e.id,e.accelerator].filter(Boolean).join("_")}function o(e,n=new Map){return Array.isArray(e)?{menu:null==e?void 0:e.map((e=>{var t;return e.click&&n.set(c(e),e.click),Object.assign({},e,{click:c(e),submenu:null==(t=o(e.submenu,n))?void 0:t.menu})})),clickHandlers:n}:{}}function l(e){const n=(0,s.useRef)();return(0,s.useEffect)((()=>u().subscribe("CLOSE_POPUP_MENU",(function(t,r){e&&"function"==typeof e&&!r&&e();const u=r&&n.current&&n.current.get(r);u&&u()}))),[]),e=>{const{menu:t,clickHandlers:r}=o(e);n.current=r,i("setNativeElectronMenuOpen",{menu:t})}}const a={send:(e,...n)=>u().send(e,...n),invoke:i,subscribe:(e,n)=>u().subscribe(e,n)||(()=>null)},m="PM_EB_INT_BROADCAST_MAIN",E="toggle-maximize",d="requester-window-events";function f(){const[e]=(0,s.useState)((()=>1));return(0,s.useEffect)((()=>{}),[]),e}function _(){const[e]=(0,s.useState)((()=>({isFullScreen:!1,isMaximized:!1,isBlurred:!1})));return(0,s.useEffect)((()=>{}),[]),e}}}]);
//# sourceMappingURL=9211.6fb238e9fe9a9f73.js.map