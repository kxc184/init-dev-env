/*! For license information please see 1351.99c448ef69a46094.js.LICENSE.txt */
(self.webpackChunkenvironment_workbench=self.webpackChunkenvironment_workbench||[]).push([[1351,8283,5630],{56470:(e,t,r)=>{"use strict";function n(e,t,r,n,i,o,a){try{var l=e[o](a),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,i)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function l(e){n(a,i,o,l,c,"next",e)}function c(e){n(a,i,o,l,c,"throw",e)}l(void 0)}))}}r.d(t,{Z:()=>i})},98283:(e,t,r)=>{"use strict";function n(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,{Z:()=>n})},66132:(e,t,r)=>{var n=r(58921).default;function i(){"use strict";e.exports=i=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",s=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,r){return e[t]=r}}function h(e,t,r,n){var i=t&&t.prototype instanceof y?t:y,o=Object.create(i.prototype),l=new A(n||[]);return a(o,"_invoke",{value:T(e,r,l)}),o}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=h;var f={};function y(){}function m(){}function g(){}var v={};d(v,c,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(j([])));w&&w!==r&&o.call(w,c)&&(v=w);var b=g.prototype=y.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function B(e,t){function r(i,a,l,c){var s=p(e[i],e,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==n(d)&&o.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,l,c)}),(function(e){r("throw",e,l,c)})):t.resolve(d).then((function(e){u.value=e,l(u)}),(function(e){return r("throw",e,l,c)}))}c(s.arg)}var i;a(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(o,o):o()}})}function T(e,t,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return{value:void 0,done:!0}}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var l=S(a,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=p(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function S(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var i=p(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,f;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(e){if(e||""===e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}throw new TypeError(n(e)+" is not iterable")}return m.prototype=g,a(b,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:m,configurable:!0}),m.displayName=d(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,d(e,u,"GeneratorFunction")),e.prototype=Object.create(b),e},t.awrap=function(e){return{__await:e}},E(B.prototype),d(B.prototype,s,(function(){return this})),t.AsyncIterator=B,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new B(h(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(b),d(b,u,"Generator"),d(b,c,(function(){return this})),d(b,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=j,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;_(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},58921:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},77162:(e,t,r)=>{var n=r(66132)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},25630:(e,t,r)=>{"use strict";r.r(t),r.d(t,{act:()=>o.TK,buildQueries:()=>o.Gi,cleanup:()=>o.Eq,clearCache:()=>p,configure:()=>o.jQ,createEvent:()=>o.yM,findAllByAltText:()=>o.kd,findAllByDisplayValue:()=>o.aT,findAllByLabelText:()=>o.Do,findAllByPlaceholderText:()=>o.j,findAllByRole:()=>o.Rr,findAllByTestId:()=>o.MY,findAllByText:()=>o.fl,findAllByTitle:()=>o.SU,findByAltText:()=>o.Qc,findByDisplayValue:()=>o.DR,findByLabelText:()=>o.gm,findByPlaceholderText:()=>o.xx,findByRole:()=>o.hN,findByTestId:()=>o.nd,findByText:()=>o.M,findByTitle:()=>o.pP,fireEvent:()=>o.BX,getAllByAltText:()=>o.Lr,getAllByDisplayValue:()=>o.iJ,getAllByLabelText:()=>o.T6,getAllByPlaceholderText:()=>o.Op,getAllByRole:()=>o.$S,getAllByTestId:()=>o.UK,getAllByText:()=>o.FE,getAllByTitle:()=>o.dB,getByAltText:()=>o.nE,getByDisplayValue:()=>o.gF,getByLabelText:()=>o.YS,getByPlaceholderText:()=>o.u7,getByRole:()=>o.YA,getByTestId:()=>o.si,getByText:()=>o.MS,getByTitle:()=>o.Cn,getConfig:()=>o.iE,getDefaultNormalizer:()=>o.xG,getElementError:()=>o.nG,getMultipleElementsFoundError:()=>o.c6,getNodeText:()=>o.qg,getQueriesForElement:()=>o.W2,getRoles:()=>o.F3,getSuggestedQuery:()=>o.Qz,invalidateCache:()=>f,isInaccessible:()=>o.CZ,logDOM:()=>o.J$,logRoles:()=>o.m2,makeFindQuery:()=>o.Uv,makeGetAllQuery:()=>o.kt,makeSingleQuery:()=>o.fV,prettyDOM:()=>o.vF,prettyFormat:()=>o.m_,queries:()=>o.o$,queryAllByAltText:()=>o.PD,queryAllByAttribute:()=>o.Ox,queryAllByDisplayValue:()=>o.Jh,queryAllByLabelText:()=>o.QU,queryAllByPlaceholderText:()=>o.DP,queryAllByRole:()=>o.VF,queryAllByTestId:()=>o.Sd,queryAllByText:()=>o.Z2,queryAllByTitle:()=>o.cp,queryByAltText:()=>o.rf,queryByAttribute:()=>o.JU,queryByDisplayValue:()=>o.hq,queryByLabelText:()=>o.fn,queryByPlaceholderText:()=>o.KS,queryByRole:()=>o.RG,queryByTestId:()=>o.Xv,queryByText:()=>o.zZ,queryByTitle:()=>o.MM,queryHelpers:()=>o.zx,render:()=>g,renderWithRouter:()=>v,screen:()=>o.sp,waitFor:()=>o.X_,waitForElementToBeRemoved:()=>o.mz,within:()=>o.uh,wrapAllByQueryWithSuggestion:()=>o.bH,wrapSingleQueryWithSuggestion:()=>o.kG});var n=r(98283),i=r(5858),o=(r(40540),r(63751)),a=r(80814),l=r(35736),c=r(97376),s=r(60607),u=r(69461),d=r(52322);const h=["ui","routes","path","initialEntries","initialIndex","loader"],p=()=>u.cacheClient.clear(),f=async e=>{await u.cacheClient.invalidateQueries({queryKey:e})},y=({children:e})=>(0,d.jsxs)(d.Fragment,{children:[e,(0,d.jsxs)("div",{className:"aether-portals",children:[(0,d.jsx)("div",{id:"aether-toast-notifications__container"}),(0,d.jsx)("div",{id:"aether-popover-portal"}),(0,d.jsx)("div",{id:"aether-tab-portal"}),(0,d.jsx)("div",{id:"aether-breadcrumb-portal"}),(0,d.jsx)("div",{id:"aether-dropdown-portal"})]})]}),m=({children:e})=>(0,d.jsx)(y,{children:(0,d.jsx)(u.DataFetchCacheProvider,{children:(0,d.jsx)(a.ThemeContextProvider,{children:e})})});function g(e,t={}){let r=Object.assign({},((0,i.Z)(t),t));return p(),(0,o.sY)(e,Object.assign({wrapper:m},r))}function v(e={}){let{ui:t,routes:r,path:i="/",initialEntries:a=["/"],initialIndex:u=0,loader:f=(()=>Promise.resolve(null))}=e,y=(0,n.Z)(e,h);p();const g=[{path:i,element:t,errorElement:(0,d.jsx)(c.RouteErrorBoundary,{appId:"test",errorElementId:"test"}),loader:f}],v=r||g,x=(0,s.createMemoryRouter)(v,{initialEntries:a,initialIndex:u});return(0,o.sY)((0,d.jsx)(s.RouterProvider,{router:x,fallbackElement:(0,d.jsx)(l.Z,{})}),Object.assign({wrapper:m},y))}},35736:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var n=r(40540),i=r.n(n),o=r(72229),a=r.n(o),l=r(25892),c=r.n(l),s=r(63622),u=r(58560),d=(0,l.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),h=c().div.withConfig({displayName:"SpinnerSmall__StyledSpinnerSmall",componentId:"zpipva-0"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";& > div{height:100%;width:4px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["text-size-xs"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),d),p=c()(s.ZP).withConfig({displayName:"SpinnerSmall__StyledSmallSpinnerDescription",componentId:"zpipva-1"})(["display:inline-block;max-width:80ch;margin-left:",";word-break:break-word;"],(function(e){return e.theme["spacing-s"]}));function f(e){var t=e.description,r=e.className,n=e.type,o=e["data-testid"],a="bright"===n?"content-color-constant":"content-color-secondary";return i().createElement(u.Z,{justifyContent:"flex-start",alignItems:"center",className:r,type:n},i().createElement(h,{"data-testid":o},i().createElement("div",{className:"rect-one"}),i().createElement("div",{className:"rect-two"}),i().createElement("div",{className:"rect-three"})),t&&i().createElement(p,{color:a},t))}f.defaultProps={description:"",className:"","data-testid":"aether-spinner"},f.propTypes={description:a().string,className:a().string,type:a().oneOf(["default","bright"]).isRequired,"data-testid":a().string};var y=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLargeContainer",componentId:"sc-1v55r43-0"})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:transparent;svg path,svg rect{fill:",";}"],(function(e){return"bright"===e.type?e.theme["content-color-constant"]:e.theme["content-color-tertiary"]})),m=c()(s.ZP).withConfig({displayName:"SpinnerLarge__StyledSpinnerDescription",componentId:"sc-1v55r43-1"})(["display:inline-block;max-width:80ch;word-break:break-word;text-align:center;font-size:",";"],(function(e){return e.theme["text-size-l"]})),g=(0,l.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),v=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLarge",componentId:"sc-1v55r43-2"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";margin-bottom:",";& > div{height:100%;width:8px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-m"]}),(function(e){return e.theme["size-m"]}),(function(e){return e.theme["text-size-s"]}),(function(e){return e.theme["spacing-l"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),g);function x(e){var t=e.className,r=e.description,n=e.type,o=e["data-testid"],a="bright"===n?"content-color-constant":"content-color-secondary";return i().createElement(y,{className:t,type:n},i().createElement(v,{"data-testid":o},i().createElement("div",{className:"rect-one"}),i().createElement("div",{className:"rect-two"}),i().createElement("div",{className:"rect-three"})),i().createElement(m,{color:a},r))}function w(e){var t=e.size,r=e.className,n=e.description,o=e.type,a=e["data-testid"];return"small"===t?i().createElement(f,{type:o,className:r,description:n,"data-testid":a}):"large"===t?i().createElement(x,{type:o,description:n||"Loading",className:r,"data-aether-id":"aether-spinner","data-testid":a}):null}x.defaultProps={className:"",description:"","data-testid":"aether-spinner"},x.propTypes={className:a().string,description:a().string,type:a().oneOf(["default","bright"]).isRequired,"data-testid":a().string},w.defaultProps={size:"small",className:"",description:"",type:"default","data-testid":"aether-spinner"},w.propTypes={size:a().oneOf(["small","large"]),className:a().string,type:a().oneOf(["default","bright"]),description:function(e){var t=e.description;return"string"!=typeof t?new Error("Spinner: description prop should have a string value"):t.length>80?new Error("Spinner: the description prop should not have a character length of more than 80."):null},"data-testid":a().string}}}]);
//# sourceMappingURL=1351.99c448ef69a46094.js.map