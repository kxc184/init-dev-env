(self.webpackChunkhistory_sidebar=self.webpackChunkhistory_sidebar||[]).push([[7375,2389,7397,4492,6198],{7560:(e,t,r)=>{"use strict";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},s.apply(this,arguments)}r.d(t,{Z:()=>s})},8283:(e,t,r)=>{"use strict";function s(e,t){if(null==e)return{};var r,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,{Z:()=>s})},4492:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(7560),a=r(9730),o=r.n(a);const n=(0,s.Z)({},o(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"})},6198:(e,t,r)=>{"use strict";r.r(t),r.d(t,{HTTPHistorySubscription:()=>T,HTTP_HISTORY_QUERY_KEY_PREFIX:()=>a,MULTI_PROTO_HISTORY_QUERY_KEY_PREFIX:()=>o,MultiProtocolHistorySubscription:()=>R,PAGE_SIZE:()=>n,SUPPORTED_MULTI_PROTO_TYPES:()=>i,createGRPCHistoryItem:()=>B,createHttpHistoryItem:()=>F,createWsRawHistory:()=>V,deleteAllHistory:()=>W,deleteAllHttpHistoryItems:()=>N,deleteAllMultiprotocolHistory:()=>q,deleteHistory:()=>G,deleteHttpHistoryItem:()=>U,deleteMultiprotocolHistory:()=>Y,httpHistoryQuery:()=>d,httpHistorySubscription:()=>I,httpSubscriptionHandler:()=>P,multiHistorySubscription:()=>C,multiProtocolSubscriptionHandler:()=>L,multiprotocolHistoryQuery:()=>b,rawBodyLanguages:()=>M,requestBodyTypes:()=>$,useHistoryItems:()=>y,useHistorySubscription:()=>Z,useHistoryUrls:()=>v,useMultiProtocolHistory:()=>h});var s=r(7560);const a="http-history",o="multi-proto-history",n=50,i=new Set(["grpc-request","ws-raw-request"]);var l=r(9461),u=r(4925),c=r(4492);const p=(e,t)=>{const r=e.split("-");return!r||!t||r.length>=6?e:`${t}-${e}`},d=(e,t)=>({enabled:!!e,queryKey:[a,e],queryFn:async({pageParam:r=0})=>(async({workspaceId:e="",meta:t=!0,count:r=100,sinceCursor:a,maxCursor:o})=>e?(e=>{var t;const r={items:[],meta:{nextCursor:null}};return null!=e&&Array.isArray(e.data)?(r.items=e.data.map((e=>(0,s.Z)({},e.data,e.meta,{createdAt:new Date(e.data.createdAt),type:"request",depth:1,id:p(e.data.id,e.data.owner)}))),r.meta.nextCursor=null!=(t=e.meta.next_max_cursor)?t:null,r):r})(await u.postmanGateway.get({url:`${c.Z.HTTPS_GATEWAY_PRIVATE_URL}/history`,query:(0,s.Z)({meta:t,workspace:e,count:r,format:"object"},a?{since_cursor:a}:null,o?{max_cursor:o}:null)})):{items:[],meta:{nextCursor:null}})({workspaceId:e,count:t,maxCursor:r}),getNextPageParam:e=>{var t;return!(null==e||null==(t=e.meta)||!t.nextCursor)&&e.meta.nextCursor},useErrorBoundary:!1}),b=e=>({queryKey:[o,e],queryFn:async({pageParam:t=""})=>(async({workspaceId:e="",cursor:t})=>e?(e=>{var t;const r={items:[],meta:{nextCursor:null}};return null!=e&&Array.isArray(e.data)?(r.items=e.data.filter((e=>i.has(e.itemType))).map((e=>(0,s.Z)({},e,{createdAt:new Date(e.beganAt),type:e.itemType,depth:1}))),r.meta.nextCursor=null!=(t=e.nextPage)?t:null,r):r})(await u.postmanGateway.get({url:`${c.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/history/",method:"get",query:(0,s.Z)({query:"all-activity-in-workspace",workspace:e},t?{cursor:t}:null),service:"scribe"})):{items:[],meta:{nextCursor:null}})({workspaceId:e,cursor:t}),getNextPageParam:e=>{var t;return!(null==e||null==(t=e.meta)||!t.nextCursor)&&e.meta.nextCursor},useErrorBoundary:!1}),h=({workspaceId:e})=>(0,l.useInfiniteDataFetch)(b(e)),y=({workspaceId:e,pageSize:t=n,useErrorBoundary:r=!0})=>{const{data:a,isError:o,hasNextPage:i,fetchNextPage:u,refetch:c,isFetching:p}=h({workspaceId:e}),{data:b,isError:y,hasNextPage:m,fetchNextPage:w,refetch:v,isFetching:g}=(({workspaceId:e,pageSize:t=n})=>(0,l.useInfiniteDataFetch)(d(e,t)))({workspaceId:e,pageSize:t}),T=null!=b&&b.pages?b.pages.flatMap((e=>e.items)):null,I=null!=a&&a.pages?a.pages.flatMap((e=>e.items)):null,_=null==T&&null==I,k=m||i,A=y||o,E=g||p;if(_&&y&&o&&r)throw new Error("Failed to get history items");const f={isRefetching:E,hasPageError:A,hasNextPage:k,fetchNextPage:()=>{i&&u(),m&&w()},refetch:()=>{y&&v(),o&&c()}};return _?(0,s.Z)({},f,{data:null}):(0,s.Z)({},f,{data:[...null!=T?T:[],...null!=I?I:[]]})};var m=r(8283);const w=["data"],v=({workspaceId:e,filterFn:t})=>{var r;const a=y({workspaceId:e,pageSize:n,useErrorBoundary:!1}),{data:o}=a,i=(0,m.Z)(a,w);let l=o;return t&&(l=null==o?void 0:o.filter(t)),(0,s.Z)({data:null==(r=l)?void 0:r.map((e=>({id:null==e?void 0:e.id,label:null==e?void 0:e.url,value:null==e?void 0:e.url})))},i)};var g=r(540);class T{constructor(){var e=this;this.observer=null,this.workspaceId="",this.abortController=null,this.asyncObserver=null,this.changeWorkspace=e=>{this.workspaceId&&this.unsubscribe(),this.workspaceId=e},this.subscribe=async function({workspaceId:t=e.workspaceId,subscriptionHandler:r}){if(""===t)return;if(e.workspaceId!==t&&e.changeWorkspace(t),e.observer||e.asyncObserver)return;const{asyncObserver:s,abortController:o}=(e=>{const t=new AbortController;return{asyncObserver:u.postmanWebsocketGateway.subscribe({signal:t.signal,subscribeRequest:{method:"post",service:"history",path:`/history/subscribe?workspace=${e}`},subscriptionEvents:["broadcast"],responseFilter:e=>{var t;return null==e||null==(t=e.body)?void 0:t.subscription},broadcastFilter:e=>null==e?void 0:e.sub,unsubscribeRequest:{method:"post",service:"history",path:`/history/unsubscribe?workspace=${e}`}}),abortController:t}})(t);e.abortController=o,e.asyncObserver=s,e.observer=await s,e.abortController=null,(0,l.invalidateCache)([a,t]),e.observer.subscribe({next:e=>{r(e,{workspaceId:t})},complete:()=>{e.unsubscribe()},error:async function(s){e.cleanup(),await e.subscribe({subscriptionHandler:r,workspaceId:t})}})},this.unsubscribe=()=>{var e,t;null==(e=this.abortController)||e.abort(),null==(t=this.observer)||t.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null}}}const I=new T,_=e=>{(0,l.updateCache)({key:[a,e],updater:e=>{if(e)return(0,s.Z)({},e,{pages:[{items:[],meta:{nextCursor:null}}],pageParams:[null]})}})},k=(e,t,r)=>{e.length>0&&(0,l.updateCache)({key:[a,t],updater:t=>{var a;if(t)return{pages:null!=(a=t.pages.map((t=>(0,s.Z)({},t,{items:t.items.filter((t=>!e.includes(null!=r&&r.checkModelId?(e=>{const t=e.split("-");return!t||t.length<6?{modelId:e}:{owner:t.shift(),modelId:t.join("-")}})(t.id).modelId:t.id)))}))))?a:[],pageParams:null==t?void 0:t.pageParams}}})},A=["pages"],E=(e,t)=>{const r=e.split("-");return!r||!t||r.length>=6?e:`${t}-${e}`},f=(e,t)=>({id:E(e.id,e.value.owner),method:e.value.method,url:e.value.url,owner:`${e.value.owner}`,createdAt:new Date(e.value.createdAt),team:null,model:"history",type:"request",depth:1,workspace:t,lastRevision:null,cursor:null}),P=(e,{workspaceId:t})=>{const r=[],o=[];for(const s of e.data)switch(s.op){case"create":r.push(f(s,t));break;case"delete":o.push(s.id);break;case"deleteAll":_(t)}r.length>0&&((e,t)=>{e.length>0&&(0,l.updateCache)({key:[a,t],updater:t=>{if(!t)return{pages:[{items:[...e],meta:{nextCursor:null}}],pageParams:[null]};const{pages:[r,...a]}=t,o=(0,m.Z)(t,A),n=[...e,...r.items];return(0,s.Z)({pages:[(0,s.Z)({},r,{items:n}),...a]},o)}})})(r,t),o.length>0&&k(o,t,{checkModelId:!0})};class R{constructor(){var e=this;this.observer=null,this.workspaceId="",this.abortController=null,this.asyncObserver=null,this.changeWorkspace=e=>{this.workspaceId&&this.unsubscribe(),this.workspaceId=e},this.subscribe=async function({workspaceId:t=e.workspaceId,subscriptionHandler:r}){if(""===t)return;if(e.workspaceId!==t&&e.changeWorkspace(t),e.observer||e.asyncObserver)return;const{asyncObserver:s,abortController:a}=(e=>{const t=new AbortController;return{asyncObserver:u.postmanWebsocketGateway.subscribe({signal:t.signal,subscribeRequest:{method:"post",service:"scribe",path:"/subscriptions/",body:{workspace:e}},subscriptionEvents:["multiprotocolHistory"],responseFilter:e=>{var t;return null==e||null==(t=e.body)||null==(t=t.data)?void 0:t.subscription},broadcastFilter:e=>null==e?void 0:e.sub,unsubscribeRequest:{method:"delete",service:"scribe",path:"/subscriptions/",body:{workspace:e}}}),abortController:t}})(t);e.abortController=a,e.asyncObserver=s,e.observer=await s,e.abortController=null,(0,l.invalidateCache)([o,t]),e.observer.subscribe({next:e=>{r(e,{workspaceId:t})},complete:()=>{e.unsubscribe()},error:async function(s){e.cleanup(),await e.subscribe({subscriptionHandler:r,workspaceId:t})}})},this.unsubscribe=()=>{var e,t;null==(e=this.abortController)||e.abort(),null==(t=this.observer)||t.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null}}}const C=new R,H=(e,t)=>{e.length>0&&(0,l.updateCache)({key:[o,t],updater:t=>{var r;if(t)return{pages:null!=(r=t.pages.map((t=>(0,s.Z)({},t,{items:t.items.filter((t=>!e.includes(t.id)))}))))?r:[],pageParams:null==t?void 0:t.pageParams}}})},S=e=>{(0,l.updateCache)({key:[o,e],updater:e=>{if(e)return(0,s.Z)({},e,{pages:[{items:[],meta:{nextCursor:null}}],pageParams:[null]})}})},x=["pages"],O=(e,t)=>({id:e.id,method:e.value.method,url:e.value.url,createdAt:new Date(e.value.beganAt),type:e.value.itemType,depth:1,workspace:t}),L=(e,{workspaceId:t})=>{const r=[],a=[];for(const s of e.data)if("HISTORY_CREATE"!==s.op||i.has(s.value.itemType))switch(s.op){case"HISTORY_CREATE":r.push(O(s,t));break;case"HISTORY_DELETE":a.push(s.id);break;case"HISTORY_DELETE_ALL":S(t)}r.length>0&&((e,t)=>{e.length>0&&(0,l.updateCache)({key:[o,t],updater:t=>{if(!t)return{pages:[{items:[...e],meta:{nextCursor:null}}],pageParams:[null]};const{pages:[r,...a]}=t,o=(0,m.Z)(t,x),n=[...e,...r.items];return(0,s.Z)({pages:[(0,s.Z)({},r,{items:n}),...a]},o)}})})(r,t),a.length>0&&H(a,t)},Z=({workspaceId:e})=>{(0,g.useEffect)((()=>{if(e)return I.subscribe({workspaceId:e,subscriptionHandler:P}),C.subscribe({workspaceId:e,subscriptionHandler:L}),()=>{I.unsubscribe(),C.unsubscribe()}}),[e])},U=async(e,t)=>{const r=await u.postmanGateway.delete({url:`${c.Z.HTTPS_GATEWAY_PRIVATE_URL}/history`,data:{ids:t}});return k(t,e),r},Y=async(e,t)=>{const r=await u.postmanGateway.delete({body:JSON.stringify({body:{workspaceId:e,only:t},method:"delete",service:"scribe",path:"/history/"}),service:"scribe",path:"/history/",url:`${c.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`});return H(t,e),r},G=async(e,t)=>{const r=[],s=[];for(const e of t){if(!e.id)return;"request"===e.type&&r.push(e.id),["ws-raw-request","grpc-request"].includes(e.type)&&s.push(e.id)}const a=r.length>0?U(e,r):Promise.resolve(),o=s.length>0?Y(e,s):Promise.resolve();await Promise.all([a,o]).catch((()=>{}))},q=async e=>{const t=await u.postmanGateway.delete({body:JSON.stringify({body:{workspaceId:e},method:"delete",service:"scribe",path:"/history/"}),service:"scribe",path:"/history/",url:`${c.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`});return S(e),t},N=async e=>{const t=await u.postmanGateway.delete({url:`${c.Z.HTTPS_GATEWAY_PRIVATE_URL}/history`,query:{workspace:e},data:{}});return _(e),t},W=async e=>{const t=N(e),r=q(e);await Promise.all([t,r]).catch((()=>{}))};var D=r(8722);const $=[["none","none"],["params","form-data"],["urlencoded","x-www-form-urlencoded"],["raw","raw"],["binary","binary"],["graphql","graphql"]],M=[{value:"text",label:"Text"},{value:"javascript",label:"JavaScript"},{value:"json",label:"JSON"},{value:"html",label:"HTML"},{value:"xml",label:"XML"}],F=async e=>await u.postmanGateway.post({url:`${c.Z.HTTPS_GATEWAY_PRIVATE_URL}/history/import`,query:{workspace:e.workspace,owner:e.owner},data:(0,s.Z)({},e,{id:(0,D.v4)()})}),B=async e=>await u.postmanGateway.post({body:JSON.stringify({body:e,method:"post",service:"scribe",path:"/history/"}),service:"scribe",path:"/history/",url:`${c.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`}),V=async e=>await u.postmanGateway.post({body:JSON.stringify({body:e,method:"post",service:"scribe",path:"/history/"}),service:"scribe",path:"/history/",url:`${c.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`})},9730:()=>{}}]);
//# sourceMappingURL=7375.f1bd59e6ff2fec8f.js.map