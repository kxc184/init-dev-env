"use strict";(self.webpackChunkmimir_editor=self.webpackChunkmimir_editor||[]).push([[8013],{98013:(e,t,r)=>{r.r(t),r.d(t,{CacheObserver:()=>s.QueryObserver,DataFetchCacheProvider:()=>i,MultiCacheObserver:()=>s.QueriesObserver,cacheClient:()=>a,invalidateCache:()=>C,setupCacheBroadcasts:()=>h,updateCache:()=>p,useCacheClient:()=>v,useDataFetch:()=>s.useQuery,useInfiniteDataFetch:()=>s.useInfiniteQuery,useMutation:()=>s.useMutation});var s=r(14527);const a=new s.QueryClient({defaultOptions:{queries:{staleTime:Number.POSITIVE_INFINITY,useErrorBoundary:!0,retry:!1,refetchOnWindowFocus:!1}}});r(40540);var u=r(22600),n=r(52322);const i=({children:e})=>(0,n.jsxs)(s.QueryClientProvider,{client:a,children:[e,(0,n.jsx)(u.ReactQueryDevtools,{initialIsOpen:!1})]}),c="SYNC_CLIENT_CACHE";var o=r(7560),y=r(98283),d=r(77736);const l=["type"];const h=({appId:e,broadcastChannel:t=c})=>{!function({broadcastChannel:e=c}){let t=!1;const r=(({broadcastChannel:e})=>({postMessage:t=>{const{type:r}=t,s=(0,y.Z)(t,l);d.VSCodeCommunicationsService.postMessageToExtension({type:e,payload:(0,o.Z)({eventType:r},s)})},subscribe:(e=c,t)=>{d.VSCodeCommunicationsService.subscribe(e,t)}}))({broadcastChannel:e});r.subscribe(e,(e=>{null!=e&&e.eventType&&(t=!0,(()=>{switch(e.eventType){case"query-client-updated":return(({queryHash:e,queryKey:t,state:r})=>{const s=a.getQueryCache(),u=s.get(e);u?u.setState(r):s.build(a,{queryKey:t,queryHash:e},r)})(e);case"query-client-removed":return(({queryHash:e})=>{const t=a.getQueryCache(),r=t.get(e);r&&t.remove(r)})(e);case"query-cache-invalidated":(({filters:e,options:t={}})=>{a.invalidateQueries(e,t)})(e)}})(),t=!1)})),a.getQueryCache().subscribe((e=>{if(t)return;const{query:{queryHash:s,queryKey:a,state:u},type:n,action:i}=e;"updated"===n&&"success"===i.type&&r.postMessage({type:"query-client-updated",queryHash:s,queryKey:a,state:u}),"removed"===n&&r.postMessage({type:"query-client-removed",queryHash:s,queryKey:a,state:u})}))}({appId:e,broadcastChannel:t})},p=({key:e,updater:t})=>{a.setQueryData(e,t)},C=e=>{a.invalidateQueries({queryKey:e,exact:!0})},v=()=>{var e;return null!=(e=(0,s.useQueryClient)())?e:a}}}]);
//# sourceMappingURL=8013.1d0621671393aa78.js.map