"use strict";(self.webpackChunkworkspace_switcher=self.webpackChunkworkspace_switcher||[]).push([[686],{161:e=>{var t=Object.prototype.hasOwnProperty,n="~";function r(){}function o(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function s(e,t,r,s,c){if("function"!=typeof r)throw new TypeError("The listener must be a function");var i=new o(r,s||e,c),f=n?n+t:t;return e._events[f]?e._events[f].fn?e._events[f]=[e._events[f],i]:e._events[f].push(i):(e._events[f]=i,e._eventsCount++),e}function c(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}function i(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),i.prototype.eventNames=function(){var e,r,o=[];if(0===this._eventsCount)return o;for(r in e=this._events)t.call(e,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},i.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,s=r.length,c=new Array(s);o<s;o++)c[o]=r[o].fn;return c},i.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},i.prototype.emit=function(e,t,r,o,s,c){var i=n?n+e:e;if(!this._events[i])return!1;var f,a,u=this._events[i],h=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),h){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,r),!0;case 4:return u.fn.call(u.context,t,r,o),!0;case 5:return u.fn.call(u.context,t,r,o,s),!0;case 6:return u.fn.call(u.context,t,r,o,s,c),!0}for(a=1,f=new Array(h-1);a<h;a++)f[a-1]=arguments[a];u.fn.apply(u.context,f)}else{var l,p=u.length;for(a=0;a<p;a++)switch(u[a].once&&this.removeListener(e,u[a].fn,void 0,!0),h){case 1:u[a].fn.call(u[a].context);break;case 2:u[a].fn.call(u[a].context,t);break;case 3:u[a].fn.call(u[a].context,t,r);break;case 4:u[a].fn.call(u[a].context,t,r,o);break;default:if(!f)for(l=1,f=new Array(h-1);l<h;l++)f[l-1]=arguments[l];u[a].fn.apply(u[a].context,f)}}return!0},i.prototype.on=function(e,t,n){return s(this,e,t,n,!1)},i.prototype.once=function(e,t,n){return s(this,e,t,n,!0)},i.prototype.removeListener=function(e,t,r,o){var s=n?n+e:e;if(!this._events[s])return this;if(!t)return c(this,s),this;var i=this._events[s];if(i.fn)i.fn!==t||o&&!i.once||r&&i.context!==r||c(this,s);else{for(var f=0,a=[],u=i.length;f<u;f++)(i[f].fn!==t||o&&!i[f].once||r&&i[f].context!==r)&&a.push(i[f]);a.length?this._events[s]=1===a.length?a[0]:a:c(this,s)}return this},i.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&c(this,t)):(this._events=new r,this._eventsCount=0),this},i.prototype.off=i.prototype.removeListener,i.prototype.addListener=i.prototype.on,i.prefixed=n,i.EventEmitter=i,e.exports=i},686:(e,t,n)=>{n.r(t),n.d(t,{EventEmitter:()=>r,default:()=>o});var r=n(161);const o=r}}]);
//# sourceMappingURL=686.77c9cadd4cd8d13a.js.map