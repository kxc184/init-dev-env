"use strict";(self.webpackChunkfolder_workbench=self.webpackChunkfolder_workbench||[]).push([[5624,8283,4613,730],{98283:(r,e,t)=>{function o(r,e){if(null==r)return{};var t,o,n={},s=Object.keys(r);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||(n[t]=r[t]);return n}t.d(e,{Z:()=>o})},730:(r,e,t)=>{t.r(e),t.d(e,{AwaitErrorBoundary:()=>j,CustomErrorBoundary:()=>x,GenericErrorMessage:()=>h,RouteErrorBoundary:()=>I,logError:()=>l}),t(40540);var o=t(60607),n=t(98283),s=t(77736),a=t(25304);const c=["crash"],l=(r,e)=>{let{crash:t=!1}=e,o=(0,n.Z)(e,c);((r,e)=>{var t;null==(t=window)||null==(t=t.newrelic)||null==t.noticeError||t.noticeError(r,e)})(r,Object.assign({crash:t},o)),((r,e)=>{a.withScope((t=>{t.setExtra("ErrorStack",e.stack),t.setExtra("ErrorAppId",e.appId),t.setExtra("ErrorElementId",e.errorElementId),a.captureException(r)}))})(r,Object.assign({crash:t},o)),((r,e)=>{s.VSCodeCommunicationsService.postMessageToExtension({type:"LOG_ERROR_TO_EXTENSION_LOGS",payload:{appId:e.appId,error:(null==r.toString?void 0:r.toString())||r.message,info:e}})})(r,o)};var i=t(49437),d=t(80047);const p="Something Went Wrong",u="Postman has encountered an error. If this problem persists, contact us at help@postman.com";var E=t(52322);const m=["title","description","message","illustration","error"],h=r=>{let{title:e=p,description:t=u,message:o,illustration:s="illustration-unable-to-load",error:a}=r,c=(0,n.Z)(r,m);const l=o||a&&a.message;return(0,E.jsxs)(i.Z,Object.assign({title:e,description:t},c,{children:[l&&(0,E.jsx)("p",{children:(0,E.jsx)("i",{children:l})}),(0,E.jsx)(d.Z,{name:s})]}))},I=({children:r,title:e,description:t,message:n,appId:s,errorElementId:a})=>{const c=(0,o.useRouteError)();return l(c,{stack:c.stack,appId:s,errorElementId:a}),r||(0,E.jsx)(h,{title:e,description:t,error:c,message:n})};var g=t(20609);const k=["children","onError","appId","errorElementId","FallbackComponent"],b=(r,e,t,o)=>{l(r,{stack:e.componentStack,appId:t,crash:!0,errorElementId:o})},x=r=>{let{children:e,onError:t,appId:o,errorElementId:s,FallbackComponent:a=h}=r,c=(0,n.Z)(r,k);return(0,E.jsx)(g.ErrorBoundary,Object.assign({FallbackComponent:null!=c&&c.fallback?void 0:a,onError:(r,e)=>(t||b)(r,e,o,s)},c,{children:e}))},j=({children:r,title:e,description:t,message:n,appId:s,errorElementId:a})=>{const c=(0,o.useAsyncError)();return l(c,{stack:c.stack,appId:s,errorElementId:a}),r||(0,E.jsx)(h,{title:e,description:t,error:c,message:n})}}}]);
//# sourceMappingURL=5624.7084bb18fd210b92.js.map