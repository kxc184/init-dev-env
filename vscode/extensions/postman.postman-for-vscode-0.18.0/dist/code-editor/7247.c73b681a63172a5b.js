(self.webpackChunkcode_editor=self.webpackChunkcode_editor||[]).push([[7247],{7560:(t,e,n)=>{"use strict";function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},s.apply(this,arguments)}n.d(e,{Z:()=>s})},8283:(t,e,n)=>{"use strict";function s(t,e){if(null==t)return{};var n,s,i={},a=Object.keys(t);for(s=0;s<a.length;s++)n=a[s],e.indexOf(n)>=0||(i[n]=t[n]);return i}n.d(e,{Z:()=>s})},2660:(t,e,n)=>{"use strict";n.r(e),n.d(e,{AnalyticsService:()=>h,initializeAnalytics:()=>f});var s=n(7560),i=n(8283),a=n(9730),o=n.n(a);const r=(0,s.Z)({},o(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"});var c=n(9907);const d=["propertyId"],l=new Set(["category","action","label","value","meta","workspaceId","workspaceType","entityId","entityType","traceId","variantId","experimentId","utm_source","utm_medium","utm_campaign","utm_content","utm_term"]),u={initialize:function(){this.payloads=[],this.enabled=!0,window.addEventListener("beforeunload",(()=>{try{this.sendPayloads({isFlushBeforePageClose:!0})}catch(t){}}),{capture:!0}),r.DISABLE_ANALYTICS&&(this.enabled=!1),setInterval(function(){this.sendPayloads()}.bind(this),3e4)},setBaseObject:function(t={id:(0,c.getUserId)(),organizations:[{id:(0,c.getTeamId)()}]}){var e,s,a,o;const r=n(4515)(navigator.userAgent),l=(null==r?void 0:r.browser)||{};let u,p;u=null!=(e=window.APP_VERSION)?e:"10.0.3-web-platform",p="web";const h={type:"events-general",indexType:"client-events",env:"production",propertyId:"web",userId:(null!=(s=null==t?void 0:t.id)?s:(0,c.getUserId)())||"0",teamId:(null!=(a=null==t||null==(o=t.organizations[0])?void 0:o.id)?a:(0,c.getTeamId)())||"0"},y=(0,i.Z)(h,d);this.baseObject=y,this.baseObject=h,this.baseObject.propertyVersion=l.name?`${u};${l.name};${l.version}`:`${u};unknown;unknown`,this.baseObject.property="postman-web-public"},isLinuxOnChromeOS:function(){return!1},_extendEventWithBaseObject:function(t){this.baseObject||this.setBaseObject({id:(0,c.getUserId)(),organizations:[{id:(0,c.getTeamId)(),organization_id:(0,c.getTeamId)(),user_id:(0,c.getUserId)()}]});const e=(new Date).toISOString();return(0,s.Z)({},this.baseObject,{timestamp:e},Object.entries(t).reduce(((t,[e,n])=>l.has(e)&&n?(0,s.Z)({},t,{[e]:n}):t),{}))},addCurrentEvent:function(t){const e=this._extendEventWithBaseObject(t);this.queuePayload(e)},addCurrentSyncDiscarded:function(t,e,n,i){try{if("history"===t)return;this.baseObject||this.setBaseObject();const a=(0,s.Z)({},this.baseObject,{verb:t,entity:e,data:JSON.stringify(n),type:"sync",indexType:"client-errors"});i&&(a.error=JSON.stringify(i)),this.queuePayload(a)}catch(t){}},queuePayload:function(t){this.enabled&&this.payloads.push(t)},sendPayloads:function(t){if(this.enabled){if(this.payloads.length>0){let e,n="";for(const t of this.payloads)n+=JSON.stringify(t)+"\n";t&&t.isFlushBeforePageClose&&(e={useBeacon:t.isFlushBeforePageClose}),this.sendRequest(n,e),this.clearPayloads()}}else this.clearPayloads()},sendRequest:function(t,e){const n=r.ANALYTICS_URL;let s,i;try{s=btoa(t)}catch(t){return}e&&e.useBeacon&&navigator.sendBeacon&&(i=navigator.sendBeacon(n,s)),i||fetch(n,{method:"POST",headers:{"Content-Type":"text/plain"},body:s,credentials:"omit"})},clearPayloads:function(){this.payloads=[]},_sendEventImmediately:function(t){const e=this._extendEventWithBaseObject(t),n=JSON.stringify(e);this.sendRequest(n)}};var p=n(7736);const h={addEvent:function(t,e,n,s,i,a){if(null!=a&&a.noActiveWorkspace)return u.addCurrentEvent({category:t,action:e,label:n,value:s,meta:i});const o=function(){var t;switch(null==(t=window)||null==(t=t.pm)||null==(t=t.windowConfig)?void 0:t.process){case"runner":case"requester":try{return{}}catch(t){return{}}default:return{}}}();return u.addCurrentEvent({category:t,action:e,label:n,value:s,meta:i,workspaceId:o.id,workspaceType:o.type})},addEventV2:function(t,e){p.VSCodeCommunicationsService.postMessageToExtension({type:"SEND_ANALYTICS",payload:t})},addEventV2AndPublish:function(t,e={}){this.addEventV2(t,e),u.sendPayloads()}};var y=n(6468);const b=t=>{window.newrelic.addPageAction("InitialLoadMetrics",(0,s.Z)({route:window.location.pathname,userId:"0"},t))},f=()=>{try{u.initialize(),null==(t=window.newrelic)||null==t.setCustomAttribute||t.setCustomAttribute("postman-app-type","distributed-frontend"),(()=>{if(!window.newrelic)throw new Error("New Relic not initialized");(0,y.onTTFB)((({value:t})=>t&&b({timeToFirstByte:t}))),(0,y.onFCP)((({value:t})=>t&&b({firstContentfulPaint:t}))),(0,y.onLCP)((({value:t})=>t&&b({largestContentfulPaint:t}))),(0,y.onFID)((({value:t})=>t&&b({firstInputDelay:t}))),(0,y.onCLS)((({value:t})=>t&&b({cumulativeLayoutShift:t})))})()}catch(t){}var t}},9730:()=>{}}]);
//# sourceMappingURL=7247.c73b681a63172a5b.js.map