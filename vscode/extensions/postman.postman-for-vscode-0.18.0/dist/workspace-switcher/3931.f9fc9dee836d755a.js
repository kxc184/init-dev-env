"use strict";(self.webpackChunkworkspace_switcher=self.webpackChunkworkspace_switcher||[]).push([[3931],{3931:(e,t,a)=>{function i(e){return window&&window.open(e,"_self","noopener,noreferrer")}a.r(t),a.d(t,{Link:()=>D,OPEN_EXTENSION_URL:()=>S,PostmanTabsManager:()=>dt,checkContextAndNavigate:()=>i,openExternalLink:()=>A,useAdditionalRouteContext:()=>O,useBeforeTabbedWindowUnload:()=>m,useCurrentPostmanTabContext:()=>h,useIsActivePostmanTab:()=>x,useLoaderData:()=>M,useLocation:()=>T,useMountOutletOnNav:()=>w,useNavigate:()=>E,usePostmanTabsContext:()=>p,useSearchParams:()=>I,useSetTabState:()=>j,useSetTabTitle:()=>k,useTabTitleAndStateUpdates:()=>f,withRouter:()=>c});var n=a(7560),r=a(540),s=a.n(r),l=a(607),o=a(2322);function c(e){return t=>{const a=(0,l.useLocation)(),i=(0,l.useNavigate)(),r=(0,l.useParams)();return(0,o.jsx)(e,(0,n.Z)({location:a,navigate:i,params:r},t))}}var d=a(8283),u=a(7736);a(5191);const b=s().createContext(null),p=()=>(0,r.useContext)(b),v=s().createContext(null),h=()=>(0,r.useContext)(v),x=()=>{const e=p(),t=h(),{tabId:a}=t||{};return(null==e?void 0:e.activeTab)===a},f=()=>{const{pathname:e,search:t}=(0,l.useLocation)(),a=x(),{tabId:i,title:n,tabType:s,setTabState:o,isConflicted:c,isDirty:d}=h();(0,r.useEffect)((()=>{a&&n&&(o({title:n,tabType:s,isDirty:d,isConflicted:c}),globalThis.document.title=n)}),[a,i,n,s,d,c,o]),(0,r.useEffect)((()=>{o({currentlyActiveURL:e+t})}),[])},m=()=>{const{tabs:e,tabsMeta:t}=p();(0,r.useEffect)((()=>{}),[])};var g=a(8722);const y=(e,...t)=>{const a=e(...t),i=p(),n=!!h(),s=x(),l=(0,r.useRef)(a);return(0,r.useEffect)((()=>{s&&(l.current=a)}),[s,a]),i&&n&&!s?l.current:a},T=()=>y(l.useLocation),C=(e,t)=>{const a=t[e.id];return!(null!=a&&a.isDirty||null!=a&&a.isConflicted||null!=a&&a.isPinned)},w=()=>{const{tabs:e,tabsMeta:t,setTabs:a,setTabsMeta:i,setActiveTab:s}=p(),o=T(),{state:c,pathname:d,search:u}=o,b=(0,l.useOutlet)(),v=(0,r.useMemo)((()=>b),[d+u]),h=(0,r.useCallback)(((t,i)=>{const n=e.map((e=>e.id===i?t:e));return s(t.id),a(n)}),[s,a,e]),x=(0,r.useCallback)(((r,l,o)=>{const c=(0,n.Z)({replacePreviewTab:!0,pinNewTab:!1},o),d=(0,g.v4)(),u={pathname:r,element:l,id:d},b=e.find((e=>C(e,t)));return b&&null!=c&&c.replacePreviewTab?h(u,b.id):(s(d),null!=c&&c.pinNewTab&&i((e=>(0,n.Z)({},e,{[d]:(0,n.Z)({},e[d],{isPinned:!0})}))),a((e=>[...e,{pathname:r,element:l,id:d}])))}),[e,h,s,a,t,i]);(0,r.useEffect)((()=>{if(!v)return;const t=(e=>{if("string"==typeof e)try{var t;return(null==(t=JSON.parse(e))?void 0:t.navigationParams)||{}}catch(e){return{}}return(null==e?void 0:e.navigationParams)||{}})(c),{tabId:a,newTab:i,sameTab:n}=t;if(i)return x(d,v,{replacePreviewTab:!1,pinNewTab:!0});if(n&&a&&-1!==e.findIndex((e=>e.id===a)))return h({id:(0,g.v4)(),pathname:d,element:v},a);if(a){var r;const t=null==(r=e.find((e=>e.id===a)))?void 0:r.id;if(t)return s(t)}const l=e.find((e=>e.pathname===d));return l?s(null==l?void 0:l.id):x(d,v)}),[v])},j=e=>{const{setTabsMeta:t,activeTab:a}=p();return(0,r.useCallback)((i=>{a===e.id&&t((t=>{const a=(0,n.Z)({},t[e.id]),r={};return"title"in i&&(r.title=i.title||""),"isDirty"in i&&(r.isDirty=i.isDirty||!1),"isConflicted"in i&&(r.isConflicted=i.isConflicted||!1),"tabType"in i&&(r.tabType=i.tabType||"http"),"currentlyActiveURL"in i&&(r.currentlyActiveURL=i.currentlyActiveURL||""),(0,n.Z)({},t,{[e.id]:(0,n.Z)({},a,r)})}))}),[t,e.id,a])},k=e=>{const t=j(e);return(0,r.useCallback)((e=>t({title:e})),[t])},Z=["children","to"],L=["children","to"],N=e=>{let{children:t,to:a}=e,i=(0,d.Z)(e,Z);const{tabId:r}=h()||{};return(0,o.jsx)(l.Link,(0,n.Z)({to:a},i,{state:(0,n.Z)({},i.state,{navigationParams:{sameTab:i.sameTab||!1,newTab:i.newTab||!1,tabId:i.sameTab||i.newTab?r:null}}),children:t}))},D=e=>{let{children:t,to:a}=e,i=(0,d.Z)(e,L);if(i.customNavEvent)return(0,o.jsx)(u.VSCodeLink,(0,n.Z)({to:a},i,{children:t}));const r=(0,n.Z)({},{target:"_self",rel:"noreferrer noopener"},i),s=a.toString();return new RegExp("https?:\\/\\/").test(s)?(0,o.jsx)("a",(0,n.Z)({href:s},r,{onClick:async e=>{i.onClick&&i.onClick(e),e.defaultPrevented},children:t})):(0,o.jsx)(N,(0,n.Z)({to:a},r,{children:t}))},E=()=>{const{tabId:e}=h()||{},t=(0,l.useNavigate)();return(a,i,r)=>{const s=(0,n.Z)({},i),l={sameTab:(null==r?void 0:r.sameTab)||!1,newTab:(null==r?void 0:r.newTab)||!1,tabId:null!=r&&r.sameTab||null!=r&&r.newTab?e:null};if(s.state=null!=i&&i.state&&"string"==typeof i.state?JSON.stringify((0,n.Z)({},JSON.parse(i.state),{navigationParams:l})):(0,n.Z)({},null==i?void 0:i.state,{navigationParams:l}),null==r||!r.customNavEvent||((0,u.vscodeNavigate)(a,i,r),r["customNavEvent-updateURL"]))return t(a,s)}},S="VIEW_COLLECTION_FOLDER_REQUEST";async function A(e){await(0,u.vsCodeOpenExternalLink)(e)}const O=()=>{const e=(0,l.useLocation)();return(0,r.useMemo)((()=>{const t=(e=>{try{var t;if(!e)return{};let a;return"string"==typeof e&&(a=JSON.parse(e)),(null==(t=a)?void 0:t.additionalContext)||{}}catch(e){return{}}})(e.state);return(0,n.Z)({},t,(()=>{try{var e;return(null==(e=JSON.parse(window.NAVIGATION_CONTEXT))||null==(e=e.params)||null==(e=e.state)?void 0:e.additionalContext)||{}}catch(e){return{}}})())}),[e.state])},I=()=>{const e=(0,l.useLocation)(),[t,a]=y(l.useSearchParams),i=p(),{setTabState:n,tabId:s}=h()||{};return[t,(0,r.useCallback)((t=>{if(a(t,{state:i&&s?{navigationParams:{tabId:s}}:void 0}),s&&i&&n){const a=t.toString(),i=`${e.pathname}${a?"?"+a:""}`;n({currentlyActiveURL:i})}}),[a,i,e.pathname,n,s])]},M=()=>y(l.useLoaderData);var P=a(8217),R=a(5892),$=a.n(R),U=a(605),W=a(5869),_=a(4691),F=a(9824),z=a(7282),V=a(347);const q=({isOpen:e,forTabId:t,position:a,createNewRequest:i,closeMenu:n})=>{const{closeAllNonSelectedTabs:r,closeTab:s,closeAllTabs:l}=p();return(0,o.jsx)(_.Z,{isOpen:e,contextMenu:{posX:null==a?void 0:a.x,posY:null==a?void 0:a.y},closeMenu:n,children:(0,o.jsxs)(F.Z,{children:[(0,o.jsx)(z.Z,{onClick:i,children:"New Request"}),(0,o.jsx)(V.Z,{}),(0,o.jsx)(z.Z,{onClick:()=>s(t),children:"Close Tab"}),(0,o.jsx)(z.Z,{onClick:()=>s(t,!0),children:"Force Close Tab"}),(0,o.jsx)(z.Z,{onClick:()=>r(),children:"Close Other Tabs"}),(0,o.jsx)(z.Z,{onClick:()=>l(),children:"Close All Tabs"}),(0,o.jsx)(z.Z,{onClick:()=>l(!0),children:"Force Close All Tabs"})]})})},J=e=>(0,o.jsx)(q,(0,n.Z)({},e));var X=a(8263),Y=a(6914),B=a(8560),Q=a(9225),H=a(5311),G=a(5547),K=a(2922),ee=a(4306),te=a(9706),ae=a(907),ie=a(455);const ne={collection:(0,o.jsx)(H.Z,{}),folder:(0,o.jsx)(G.Z,{}),http:(0,o.jsx)(K.Z,{}),"ws-raw":(0,o.jsx)(ee.Z,{}),grpc:(0,o.jsx)(te.Z,{}),"http-response":(0,o.jsx)(ae.Z,{}),environment:(0,o.jsx)(ie.Z,{}),default:(0,o.jsx)(H.Z,{})},re=()=>{const{tabs:e,closeAllNonSelectedTabs:t,closeTab:a,closeAllTabs:i,activeTab:n,recentlyClosed:r,openFromRecentlyClosed:s}=p(),l=0===e.length;return(0,o.jsxs)(_.Z,{children:[(0,o.jsx)(X.Z,{children:(0,o.jsx)(U.Z,{icon:(0,o.jsx)(Q.Z,{}),type:"tertiary","data-testid":"tabs-more-options-button"})}),(0,o.jsxs)(F.Z,{children:[(0,o.jsx)(Y.Z,{label:"Recently Closed Tabs",children:0===r.length?(0,o.jsx)(z.Z,{isDisabled:!0,children:"None"}):r.map(((e,t)=>(0,o.jsx)(z.Z,{onClick:()=>s(t),children:(0,o.jsxs)(B.Z,{alignItems:"center",gap:"spacing-s",children:[ne[e.tabType]||ne.default," ",e.title||"Untitled Tab"]})},e.id||e.pathname)))}),(0,o.jsx)(V.Z,{}),(0,o.jsx)(z.Z,{onClick:()=>a(n),isDisabled:l,children:"Close Selected Tab"}),(0,o.jsx)(z.Z,{type:"destructive",onClick:()=>a(n,!0),isDisabled:l,children:"Force Close Selected Tab"}),(0,o.jsx)(z.Z,{onClick:()=>t(),isDisabled:l,children:"Close All but Selected Tab"}),(0,o.jsx)(z.Z,{onClick:()=>i(),isDisabled:l,children:"Close All Tabs"}),(0,o.jsx)(z.Z,{type:"destructive",onClick:()=>i(!0),isDisabled:l,children:"Force Close All Tabs"})]})]})};var se=a(3071),le=a(3341);let oe,ce,de,ue,be=e=>e;const pe=$().div(oe||(oe=be`
  --border-start-percent: 30%;
  --border-end-percent: 70%;

  display: flex;
  flex: 1 1 auto;
  overflow-y: hidden;
`)),ve=$().ul(ce||(ce=be`
  margin: 0;
  padding: 0;
  flex: 0 1 auto;
  box-sizing: border-box;
  display: grid;
  grid-auto-flow: column;
  flex-wrap: nowrap;
  grid-template-columns: repeat(
    auto-fit,
    minmax(var(--tab-item-min-width), 1fr)
  );
  overflow: scroll hidden;
  padding-bottom: 48px;
  margin-bottom: -48px;
`)),he=$().div(de||(de=be`
  flex: 1;
  display: flex;
  align-items: center;
  padding: var(--spacing-s);
  border-left: ${0};
  border-bottom: 1px solid var(--border-color-default);
  border-image-slice: 0 0 0 1;
  border-image-source: linear-gradient(
    to bottom,
    var(--background-color-primary) var(--border-start-percent),
    var(--border-color-default) var(--border-start-percent),
    var(--border-color-default) var(--border-end-percent),
    var(--background-color-primary) var(--border-end-percent),
    var(--background-color-primary) calc(100% - 1px),
    var(--border-color-default) calc(100% - 1px)
  );
`),(e=>e.$tabsCount?"1px solid":"0")),xe=$().div(ue||(ue=be`
  display: flex;
  align-items: center;
  padding: var(--spacing-s);
  border-right: 1px solid var(--border-color-default);
  border-bottom: 1px solid var(--border-color-default);
`)),fe=({minWidth:e,maxWidth:t,tabsCount:a,renderTabs:i,rightActions:n})=>{const s=(0,r.useRef)(null),l=(0,r.useRef)(null),[c,d]=(0,r.useState)(!1),[u,b]=(0,r.useState)(!1),[p,v]=(0,r.useState)(!1),[h,x]=(0,r.useState)(`${t}px`);return(0,r.useEffect)((()=>{let e;if(s.current&&l.current){const i=s.current.scrollWidth-s.current.clientWidth>0,n=Math.round(l.current.clientWidth/t);x(n<a?"100%":`${t}px`),d(i),i&&(e=setTimeout((()=>{var e;null==(e=s.current)||e.scrollTo(s.current.scrollWidth,0)}),1))}return()=>{e&&clearTimeout(e)}}),[a,t]),(0,r.useEffect)((()=>{let e=null;const t=s.current,a=()=>{const e=0===(null==t?void 0:t.scrollLeft),a=!!t&&t.scrollLeft===t.scrollWidth-t.clientWidth;b(e),v(a)},i=()=>{e&&clearTimeout(e),e=setTimeout(a,100)};return"onscrollend"in window?null==t||t.addEventListener("scrollend",a):null==t||t.addEventListener("scroll",i),()=>{"onscrollend"in window?null==t||t.removeEventListener("scrollend",a):null==t||t.removeEventListener("scroll",i),e&&clearTimeout(e)}}),[c]),(0,o.jsxs)(pe,{ref:l,children:[c&&(0,o.jsx)(xe,{children:(0,o.jsx)(U.Z,{type:"tertiary",icon:(0,o.jsx)(se.Z,{}),onClick:()=>{var t;null==(t=s.current)||t.scrollBy({left:2*-e,behavior:"smooth"})},isDisabled:u})}),(0,o.jsx)(ve,{ref:s,children:i(h,c)}),(0,o.jsxs)(he,{$tabsCount:a,children:[c&&(0,o.jsx)(U.Z,{type:"tertiary",icon:(0,o.jsx)(le.Z,{}),onClick:()=>{var t;null==(t=s.current)||t.scrollBy({left:2*e,behavior:"smooth"})},isDisabled:p}),n]})]})};var me=a(3180);let ge,ye,Te,Ce,we,je,ke,Ze,Le,Ne,De,Ee=e=>e;const Se=$().li(ge||(ge=Ee`
  position: relative;
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  min-width: var(--tab-item-min-width);
  max-width: ${0}px;
  min-height: var(--wp-tabs-header-height);
  align-items: stretch;

  ${0}

  & + & {
    border-left: var(--border-width-default, 1px)
      var(--border-style-solid, solid);
    border-image-slice: 0 0 0 1;
    border-image-source: linear-gradient(
      to bottom,
      var(--background-color-primary) var(--border-start-percent),
      var(--border-color-default) var(--border-start-percent),
      var(--border-color-default) var(--border-end-percent),
      var(--background-color-primary) var(--border-end-percent),
      var(--background-color-primary) calc(100% - 1px),
      var(--border-color-default) calc(100% - 1px)
    );
  }

  &:last-child .tab-title-container {
    border-right: 0;
  }
`),172,(e=>e.$isActive&&(0,R.css)(ye||(ye=Ee`
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 8px;
        right: 8px;
        height: 1px;
        background-color: var(--base-color-brand);
        transition: opacity 0.2s ease-in-out;
      }
    `)))),Ae=$()(l.Link)(Te||(Te=Ee`
  position: relative;
  display: flex;
  width: ${0};
  flex: 1;
`),(e=>e.width)),Oe=$().div(Ce||(Ce=Ee`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: calc(1px + var(--spacing-s)) var(--spacing-m);
  box-sizing: border-box;
  font-style: ${0};

  &:hover .tab-close-action {
    display: block;
  }

  ${0}
`),(e=>e.$isPreviewTab?"italic":""),(e=>e.$isDirty&&(0,R.css)(we||(we=Ee`
      .tab-close-icon {
        display: none;
      }

      &:hover {
        .tab-close-icon {
          display: flex;
        }

        .dirty-indicator {
          display: none;
        }
      }
    `)))),Ie=$().div(je||(je=Ee`
  display: flex;
`)),Me=$().div(ke||(ke=Ee`
  font-family: var(--text-family-default);
  line-height: var(--line-height-s);
  font-size: var(--text-size-s);
  font-weight: var(--text-weight-regular);
  padding: 0 var(--spacing-xs);
  flex: 1;
  align-self: center;
  white-space: nowrap;
  overflow-x: hidden;
`)),Pe=$().div(Ze||(Ze=Ee`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`)),Re=$().div(Le||(Le=Ee`
  position: relative;
  z-index: 1;
  width: calc(1.02 * var(--spacing-s));
  height: var(--spacing-s);
  border-radius: 50%;
  background-color: var(--base-color-brand);
`)),$e=$().div(Ne||(Ne=Ee`
  display: none;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  padding-left: var(--spacing-l);
  z-index: 1;
  background: linear-gradient(
    270deg,
    var(--background-color-primary) calc(24px + var(--spacing-xs)),
    rgba(var(--background-color-primary-rgb) / 95.8%) 0,
    rgba(var(--background-color-primary-rgb) / 0%)
  );
`)),Ue=$().div(De||(De=Ee`
  --border: 2px;

  width: 24px;
  height: calc(100% - calc(var(--border) * 2));
  position: absolute;
  top: var(--border);
  right: calc(24px - var(--spacing-m));
  z-index: 0;
  background: linear-gradient(
    270deg,
    var(--background-color-primary) 33.33%,
    rgba(var(--background-color-primary-rgb) / 95.8%) 0,
    rgba(var(--background-color-primary-rgb) / 0%)
  );
`)),We=e=>null!=e&&e.isConflicted?"[CONFLICT] ":"",_e=e=>{const{activeTab:t,setActiveTab:a,closeTab:i,setTabsMeta:s,tabsMeta:l}=p(),c=t===e.tab.id,d=l[e.tab.id],u=(null==d?void 0:d.currentlyActiveURL)||e.tab.pathname,b=C(e.tab,l),v=(0,r.useCallback)((t=>(t.preventDefault(),t.stopPropagation(),i(e.tab.id),null)),[i,e.tab.id]),h=(0,r.useCallback)((()=>{s((t=>(0,n.Z)({},t,{[e.tab.id]:(0,n.Z)({},d,{isPinned:!0})})))}),[e.tab.id,d,s]);return(0,o.jsx)(Se,{$isActive:c,children:(0,o.jsx)(Ae,{width:e.width,to:u,onClick:t=>{!c&&a(e.tab.id),c&&t.preventDefault(),c&&t.stopPropagation()},state:{navigationParams:{tabId:e.tab.id}},onContextMenu:e.onContextMenu,children:(0,o.jsxs)(Oe,{className:"tab-title-container",$isActive:c,$isDirty:null==d?void 0:d.isDirty,$isPreviewTab:b,onDoubleClick:h,"data-testid":"tab-header",children:[(0,o.jsx)(Ie,{children:ne[null==d?void 0:d.tabType]||ne.default}),(0,o.jsxs)(Me,{title:(null==d?void 0:d.title)||"Loading...",children:[We(d),(null==d?void 0:d.title)||"Loading..."]}),(0,o.jsxs)(Pe,{onClick:v,"data-testid":"tab-close-icon",children:[(null==d?void 0:d.isDirty)&&(0,o.jsx)(Re,{className:"dirty-indicator"}),(0,o.jsx)($e,{className:"tab-close-action",children:(0,o.jsx)(U.Z,{className:"tab-close-icon",type:"tertiary",size:"small",icon:(0,o.jsx)(me.Z,{})})})]}),(0,o.jsx)(Ue,{})]})},e.tab.id)})};let Fe,ze,Ve=e=>e;const qe=$().div(Fe||(Fe=Ve`
  --tab-item-min-width: ${0}px;

  width: 100%;
  overflow-x: auto;
  display: flex;
  min-height: var(--wp-tabs-header-height);
  border-bottom: 1px solid var(--border-color-default);

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`),90),Je=$().div(ze||(ze=Ve`
  flex: 0;
  border-bottom: 1px solid var(--border-color-default);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 var(--spacing-xs);
  gap: var(--spacing-xs);
`)),Xe=()=>{const{tabs:e}=p(),[t,a]=(0,r.useState)({open:!1}),{workspaceId:i}=(0,l.useParams)(),n=E(),s=(0,r.useCallback)((()=>{if(!i)return;const e=(0,g.v4)();n(`/workspace/${i}/request/create?requestId=${e}`,{},{newTab:!0,customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"})}),[i,n]),c=(0,r.useCallback)(((e,t)=>{t.preventDefault(),a({open:!0,forTabId:e,position:{x:t.pageX,y:t.pageY}})}),[]),d=(0,r.useCallback)((()=>a({open:!1})),[]),u=(0,r.useCallback)((t=>e.map((e=>(0,o.jsx)(_e,{width:t,tab:e,onContextMenu:t=>c(e.id,t)},e.id)))),[e,c]);return(0,o.jsxs)(qe,{children:[(0,o.jsx)(fe,{minWidth:90,maxWidth:172,tabsCount:e.length,renderTabs:u,rightActions:(0,o.jsx)(U.Z,{type:"tertiary",icon:(0,o.jsx)(W.Z,{}),onClick:s})}),(0,o.jsx)(J,{isOpen:null==t?void 0:t.open,forTabId:null==t?void 0:t.forTabId,position:null==t?void 0:t.position,closeMenu:d,createNewRequest:s}),(0,o.jsx)(Je,{children:(0,o.jsx)(re,{})})]})};var Ye=a(3723),Be=a.n(Ye);let Qe;const He=$().div(Qe||(Qe=(e=>e)`
  display: ${0};
  height: var(--wp-workbench-height);
`),(({$isHidden:e})=>e?"none":"block")),Ge=e=>{const t=!x();return f(),(0,o.jsx)(He,{className:Be()({"tab-content":!0,"is-hidden":t}),$isHidden:t,children:e.children})},Ke=({tab:e})=>{const{tabsMeta:t}=p(),a=j(e),i=k(e),n=(0,r.useMemo)((()=>{var n,r,s,l;return{tabId:e.id,pathname:e.pathname,isDirty:null==(n=t[e.id])?void 0:n.isDirty,isConflicted:null==(r=t[e.id])?void 0:r.isConflicted,title:(null==(s=t[e.id])?void 0:s.title)||"",tabType:(null==(l=t[e.id])?void 0:l.tabType)||"http",setTabTitle:i,setTabState:a}}),[e.id,e.pathname,t,i,a]);return(0,o.jsx)(v.Provider,{value:n,children:(0,o.jsx)(Ge,{children:e.element},e.pathname)})},et=({fallback:e})=>{const{tabs:t}=p();return(0,r.useMemo)((()=>(0,o.jsxs)(o.Fragment,{children:[0===t.length&&e?e:"",t.map((e=>(0,o.jsx)(Ke,{tab:e},e.pathname)))]})),[t,e])},tt=({children:e})=>(w(),m(),(0,o.jsxs)(o.Fragment,{children:[e," "]})),at="tab-close-confirmation-modal",it=e=>`This tab ${e||"Untitled tab"} has unsaved changes which will be lost if you choose to close it. Save these changes to avoid losing your work.`,nt=[{title:"Don't Save",isDefaultOnDismiss:!0},{title:"Cancel",isPrimary:!0}],rt="tab-force-close-confirmation-modal",st=e=>`${e} tab${1===e?" has":"s have"} unsaved changes. Your changes will be lost if you force close this tab. Are you sure you want to force close?`,lt=[{title:"Cancel",isDefaultOnDismiss:!0},{title:"Force Close",isPrimary:!0}],ot=(e,t)=>{var a;return null==(a=t[e])?void 0:a.isDirty},ct=async(e,t)=>{const a=await e.showWarningDialog({uid:at,subject:"DO YOU WANT TO SAVE?",message:it(t),options:nt});return!a||"Cancel"!==a.title},dt=({fallback:e})=>{const t=E(),a=(0,l.useMatches)(),i=P.Modals.getModals(),[n,s]=(0,r.useState)(null),[c,d]=(0,r.useState)([]),[u,p]=(0,r.useState)({}),[v,h]=(0,r.useState)([]),x=(0,r.useCallback)((e=>{var a;s(e.id),t((null==(a=u[e.id])?void 0:a.currentlyActiveURL)||e.pathname)}),[t,u]),f=(0,r.useCallback)((e=>{e&&h((t=>{var a,i,n;return[...t,{id:e.id,pathname:(null==(a=u[e.id])?void 0:a.currentlyActiveURL)||e.pathname,title:null==(i=u[e.id])?void 0:i.title,tabType:null==(n=u[e.id])?void 0:n.tabType}]}))}),[u]),m=(0,r.useCallback)((e=>h((t=>[...t].splice(e,1)))),[]),g=(0,r.useCallback)((e=>{const a=v[e];t(a.pathname,{},{newTab:!0,customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"}),m(e)}),[m,t,v]),y=(0,r.useCallback)((async(e,r=!1)=>{var s;const l=c.findIndex((t=>t.id===e));if(-1===l)return;const o=c[l],b=ot(o.id,u);if(!r&&b&&!await ct(i,null==(s=u[e])?void 0:s.title))return;if(o.id===n){const e=((e,t)=>{const a=t-1;return e[t+1]||e[a]})(c,l);if(e)x(e);else{const e=a.at(-2);(null==e?void 0:e.pathname)&&t(e.pathname)}}const p=c.filter((t=>t.id!==e));d(p),f(o)}),[t,x,c,a,u,i,n,f]),T=(0,r.useCallback)((async(e=!1)=>{if(e){const e=c.filter((e=>ot(e.id,u))).length;if(e&&!await(async(e,t)=>{const a=await e.showWarningDialog({uid:rt,subject:"Confirm force close",message:st(t),options:lt});return!a||"Cancel"!==a.title})(i,e))return;for(const e of c)f(e);d([]);const n=a.at(-2);return(null==n?void 0:n.pathname)&&t(n.pathname)}const n=[];for(const e of c){var r;ot(e.id,u)&&!await ct(i,null==(r=u[e.id])?void 0:r.title)||(f(e),n.push(e.id))}d((e=>e.filter((e=>!n.includes(e.id)))))}),[c,i,a,t,u,f]),C=(0,r.useCallback)((async(e=n)=>{const t=[];for(const n of c){var a;n.id!==e&&(ot(n.id,u)&&!await ct(i,null==(a=u[n.id])?void 0:a.title)||t.push(n.id))}d((e=>e.filter((e=>!t.includes(e.id)))))}),[n,c,i,u]),w=(0,r.useMemo)((()=>({tabs:c,setTabs:d,tabsMeta:u,setTabsMeta:p,recentlyClosed:v,closeTab:y,closeAllTabs:T,activeTab:n,setActiveTab:s,closeAllNonSelectedTabs:C,openFromRecentlyClosed:g})),[c,u,v,y,n,s,T,C,g]);return(0,o.jsx)(b.Provider,{value:w,children:(0,o.jsxs)(tt,{children:[(0,o.jsx)(P.Modals.Ui.ModalDialog,{uid:at}),(0,o.jsx)(P.Modals.Ui.ModalDialog,{uid:rt}),(0,o.jsx)(Xe,{}),(0,o.jsx)(et,{fallback:e})]})})}}}]);
//# sourceMappingURL=3931.f9fc9dee836d755a.js.map