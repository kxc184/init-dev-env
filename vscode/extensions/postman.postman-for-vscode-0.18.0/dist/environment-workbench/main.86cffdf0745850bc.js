(()=>{var e,t,a,n,r,o,l,d,s,i,c,f,p,u,h,m,b,v,g,x,P={50629:(e,t,a)=>{"use strict";a(99307),Promise.all([a.e(364),a.e(605),a.e(157),a.e(6831),a.e(3433),a.e(540),a.e(1730),a.e(2229),a.e(6242),a.e(607),a.e(2932),a.e(3353),a.e(7376),a.e(9461),a.e(916),a.e(814),a.e(8217),a.e(2465),a.e(3657),a.e(7380),a.e(5167),a.e(4409)]).then(a.bind(a,74409))},99307:(e,t,a)=>{a.p=window.BASE_URL_PREFIX?`${window.BASE_URL_PREFIX}/environment-workbench/`:""},412:(e,t,a)=>{var n="undefined"!=typeof window?window:void 0!==a.g?a.g:"undefined"!=typeof self?self:{};n.SENTRY_RELEASE={id:"prod.2024-01-16.06-27"},n.SENTRY_RELEASES=n.SENTRY_RELEASES||{},n.SENTRY_RELEASES["vscode-extension-webview@postman-labs"]={id:"prod.2024-01-16.06-27"}}},y={};function w(e){var t=y[e];if(void 0!==t)return t.exports;var a=y[e]={id:e,loaded:!1,exports:{}};return P[e].call(a.exports,a,a.exports,w),a.loaded=!0,a.exports}w.m=P,w.c=y,w.amdO={},w.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return w.d(t,{a:t}),t},w.d=(e,t)=>{for(var a in t)w.o(t,a)&&!w.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((t,a)=>(w.f[a](e,t),t)),[])),w.u=e=>e+"."+{75:"97c261792327e4a7",155:"12c135ded258da00",157:"4db8c4bce7f69c8d",287:"24f78c07e47c136e",364:"a302f315f3b36652",540:"8a8a1970a1914722",605:"e98e63467530967a",607:"cb09f03efdbbc333",686:"19f0bdeed982549b",721:"0e03b4b72fb0d9e2",730:"cba09ea0fe431ff3",766:"aa9f7b248eb1c792",770:"cbdb0b8bf08351f6",814:"04375b3d5cc1fd62",823:"f61de2c9c90d3141",916:"c3c4977d36f82f05",949:"5761a712b709dd83",966:"73ad41381e143dde",1312:"c830bd5c219abcdc",1327:"83d81d3f6dc42cfc",1351:"99c448ef69a46094",1597:"8c5b86090ff02711",1685:"36f70f9057ef5085",1730:"2c96ff60f47d0b56",2223:"ff84553e32920ee8",2229:"839ddd6754e306d4",2465:"ba8e3c8c1c1db317",2543:"1b8d12f40b175a80",2638:"e208974b4588364d",2668:"1a61a8f753c7bc17",2723:"96790baaaec95e65",2772:"dd27efce86592929",2784:"d2ece3f87b63cebf",2932:"95632c36b7466b3e",2955:"b6783f1b689986dc",3193:"b59d7218af345dfa",3222:"8b93b2227d50b39f",3353:"0530fe8c65ac94b7",3356:"1ee1b46e8ca3f9af",3433:"8ca58fb76a919a8a",3640:"992f772a8db4561d",3657:"1b3a7fcd28912e6e",3696:"5cd54642fe00506c",3723:"a0ef3956384752cb",3836:"3983338f5522f05a",3911:"6799633b9bd1f44a",3980:"5afc815e40ec6467",4024:"bad13053adc7a5fd",4211:"f8bcb200dca861e0",4409:"e8d63061c1613bac",4422:"52c8027d4fafdc94",4803:"9aa2c13c654773ff",4925:"0601a4c4f765d1c4",5167:"066ebab51b9c4cd5",5348:"cba9e0a260627450",5624:"7159f184403e2400",5630:"c04b257608d42bea",6242:"c7f99cbe3856ecdd",6277:"90087dccee0b9d2c",6353:"ff368773dd5f5a28",6371:"3fed45bea594ceeb",6445:"5c728ab763dda9fc",6462:"a006a65075f2ad83",6591:"1b8efb3341ce2327",6686:"826fde2dbe012bcb",6776:"0b3a9b5116bc65b6",6787:"ef4f75595b270e68",6831:"0227baffafb5896b",7016:"f1f92098c7684e84",7376:"04b085e1936def2f",7380:"ef1281c16bda8d88",7397:"6096a4610614d855",7494:"a41c804dd023a02a",7569:"d993d7e290fbacb6",7623:"b7792c03275d1e5a",7669:"77fa601942ddca04",7736:"1b525c87de329f7d",7768:"e5e1d9776493028f",7864:"d542ebde2d699d29",7908:"9766c9431880f0a4",8013:"a8319bd201d42771",8210:"3f65fec7d40861d1",8217:"f5267ce72115a4ef",8283:"e2ce9445e408b7e0",8316:"cba9cc0dfb6bcac2",8320:"a81143c08027b224",8495:"a7b1680846a33938",8529:"e0fc884a8b8ac2b0",8537:"521f592e03168175",8609:"8be561c984b9be60",8665:"c2785a467bda8b03",8722:"c77ece4815aae957",8850:"c8fba5122cd474e4",8864:"e5fe1b5bab5cf0ec",9205:"8952b2c487747272",9211:"ef2e243dd59d4d41",9239:"f532c8103275e208",9304:"2d4b0d66407105d6",9315:"2e2bae2433f57965",9461:"8049305f233e7d78",9543:"979681bb3ceb935c",9721:"90da0c2c7c49bf0d",9792:"a165da5c9c639ae8",9907:"bf5ef89ea93f2864"}[e]+".js",w.miniCssF=e=>e+"."+{1312:"0c13b709ec9223ed",2638:"0c13b709ec9223ed",4409:"103b8f35f0eba33e"}[e]+".css",w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),w.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="environment-workbench:",w.l=(a,n,r,o)=>{if(e[a])e[a].push(n);else{var l,d;if(void 0!==r)for(var s=document.getElementsByTagName("script"),i=0;i<s.length;i++){var c=s[i];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==t+r){l=c;break}}l||(d=!0,(l=document.createElement("script")).type="text/javascript",l.charset="utf-8",l.timeout=120,w.nc&&l.setAttribute("nonce",w.nc),l.setAttribute("data-webpack",t+r),l.src=a),e[a]=[n];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var r=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),d&&document.head.appendChild(l)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},w.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{w.S={};var e={},t={};w.I=(a,n)=>{n||(n=[]);var r=t[a];if(r||(r=t[a]={}),!(n.indexOf(r)>=0)){if(n.push(r),e[a])return e[a];w.o(w.S,a)||(w.S[a]={});var o=w.S[a],l="environment-workbench",d=(e,t,a,n)=>{var r=o[e]=o[e]||{},d=r[t];if(!d||!d.__postman_local_chunk__)if(window.__local_apps__&&window.__local_apps__.includes(l)){if(d&&d.loaded&&d.__postman_local_chunk__)return;r[t]={get:a,from:l,eager:!!n,__postman_local_chunk__:!0}}else(!d||!d.loaded&&(!n!=!d.eager?n:l>d.from))&&(r[t]={get:a,from:l,eager:!!n})},s=[];return"default"===a&&(d("@postman-app-next/analytics-service","1.0.0",(()=>Promise.all([w.e(7736),w.e(9907),w.e(721)]).then((()=>()=>w(40721))))),d("@postman-app-next/auth","1.0.0",(()=>w.e(2668).then((()=>()=>w(62668))))),d("@postman-app-next/data-fetching","1.0.0",(()=>Promise.all([w.e(540),w.e(7736),w.e(7864),w.e(1685)]).then((()=>()=>w(98013))))),d("@postman-app-next/desktop-communication-sdk","1.0.0",(()=>Promise.all([w.e(540),w.e(966)]).then((()=>()=>w(20966))))),d("@postman-app-next/dialogs","1.0.0",(()=>Promise.all([w.e(364),w.e(605),w.e(5348),w.e(540),w.e(1730),w.e(7736),w.e(2229),w.e(6242),w.e(155)]).then((()=>()=>w(23911))))),d("@postman-app-next/environment-service","1.0.0",(()=>Promise.all([w.e(364),w.e(605),w.e(8529),w.e(540),w.e(1730),w.e(7736),w.e(2229),w.e(6242),w.e(607),w.e(2932),w.e(3353),w.e(9461),w.e(8722),w.e(2465),w.e(3657),w.e(4925),w.e(9792),w.e(6787),w.e(8850)]).then((()=>()=>w(76787))))),d("@postman-app-next/error-handling","1.0.0",(()=>Promise.all([w.e(364),w.e(157),w.e(540),w.e(1730),w.e(7736),w.e(2229),w.e(6242),w.e(607),w.e(2772),w.e(5624)]).then((()=>()=>w(730))))),d("@postman-app-next/kv-editor","1.0.0",(()=>Promise.all([w.e(364),w.e(605),w.e(157),w.e(6831),w.e(8529),w.e(823),w.e(540),w.e(1730),w.e(2229),w.e(6242),w.e(2932),w.e(3723),w.e(916),w.e(8217),w.e(2723),w.e(7569),w.e(949),w.e(7623),w.e(3696)]).then((()=>()=>w(17623))))),d("@postman-app-next/navigation","1.0.0",(()=>Promise.all([w.e(364),w.e(605),w.e(6831),w.e(540),w.e(1730),w.e(7736),w.e(2229),w.e(6242),w.e(607),w.e(3723),w.e(8722),w.e(8217),w.e(7016),w.e(8283)]).then((()=>()=>w(27016))))),d("@postman-app-next/network","1.0.0",(()=>Promise.all([w.e(540),w.e(7736),w.e(7376),w.e(9907),w.e(8320),w.e(9315)]).then((()=>()=>w(38320))))),d("@postman-app-next/performance-utils","1.0.0",(()=>Promise.all([w.e(540),w.e(8722),w.e(2465),w.e(1597)]).then((()=>()=>w(31597))))),d("@postman-app-next/storage","1.0.0",(()=>Promise.all([w.e(540),w.e(7736),w.e(9907),w.e(4422)]).then((()=>()=>w(44422))))),d("@postman-app-next/test-utils","1.0.0",(()=>Promise.all([w.e(364),w.e(6445),w.e(540),w.e(1730),w.e(2229),w.e(6242),w.e(607),w.e(7376),w.e(9461),w.e(814),w.e(1351)]).then((()=>()=>w(25630))))),d("@postman-app-next/ui","1.0.0",(()=>Promise.all([w.e(364),w.e(605),w.e(157),w.e(540),w.e(1730),w.e(7736),w.e(2229),w.e(6242),w.e(3723),w.e(3353),w.e(7569),w.e(287),w.e(2638)]).then((()=>()=>w(287))))),d("@postman-app-next/variable-session","1.0.0",(()=>Promise.all([w.e(9792),w.e(7494)]).then((()=>()=>w(57494))))),d("@postman-app-next/variable-suggestions","1.0.0",(()=>Promise.all([w.e(364),w.e(605),w.e(8529),w.e(3640),w.e(540),w.e(1730),w.e(2229),w.e(6242),w.e(3723),w.e(2723),w.e(7380),w.e(949),w.e(9304),w.e(3222)]).then((()=>()=>w(59304))))),d("@postman-app-next/vscode-utils","1.0.0",(()=>Promise.all([w.e(540),w.e(607),w.e(8722),w.e(770)]).then((()=>()=>w(30770))))),d("@postman-app-next/workspace-service","1.0.0",(()=>Promise.all([w.e(540),w.e(7736),w.e(607),w.e(3353),w.e(9461),w.e(4925),w.e(6371)]).then((()=>()=>w(60766))))),d("@postman/aether-design-tokens","1.4.0",(()=>w.e(7908).then((()=>()=>w(86462))))),d("@sentry/react","7.91.0",(()=>Promise.all([w.e(3193),w.e(540)]).then((()=>()=>w(3193))))),d("@tanstack/react-query-devtools","4.36.1",(()=>w.e(2223).then((()=>()=>w(92223))))),d("@tanstack/react-query","4.36.1",(()=>Promise.all([w.e(8609),w.e(540)]).then((()=>()=>w(8609))))),d("@tippyjs/react","4.2.0",(()=>Promise.all([w.e(9721),w.e(540),w.e(1730)]).then((()=>()=>w(39721))))),d("clsx","1.2.1",(()=>w.e(6277).then((()=>()=>w(6277))))),d("eventemitter3","5.0.1",(()=>w.e(686).then((()=>()=>w(30686))))),d("lexical","0.11.3",(()=>w.e(2543).then((()=>()=>w(22543))))),d("mobx-react-lite","3.4.3",(()=>Promise.all([w.e(540),w.e(1730),w.e(2932),w.e(6776)]).then((()=>()=>w(46776))))),d("mobx-react","7.6.0",(()=>Promise.all([w.e(8495),w.e(540),w.e(2932),w.e(916)]).then((()=>()=>w(18495))))),d("mobx","6.12.0",(()=>w.e(75).then((()=>()=>w(80075))))),d("prop-types","15.8.1",(()=>w.e(3980).then((()=>()=>w(13980))))),d("react-dom","16.14.0",(()=>Promise.all([w.e(8316),w.e(540)]).then((()=>()=>w(28316))))),d("react-draggable","4.4.6",(()=>Promise.all([w.e(1327),w.e(540),w.e(1730),w.e(2229),w.e(3723)]).then((()=>()=>w(41327))))),d("react-error-boundary","4.0.12",(()=>Promise.all([w.e(540),w.e(2955)]).then((()=>()=>w(32955))))),d("react-router-dom","6.11.2",(()=>Promise.all([w.e(6591),w.e(540)]).then((()=>()=>w(16591))))),d("react-window","1.8.10",(()=>Promise.all([w.e(4211),w.e(540),w.e(7397)]).then((()=>()=>w(54211))))),d("react","16.14.0",(()=>w.e(2784).then((()=>()=>w(2784))))),d("rxjs/operators","7.8.1",(()=>Promise.all([w.e(6686),w.e(4803)]).then((()=>()=>w(34803))))),d("rxjs","7.8.1",(()=>Promise.all([w.e(6686),w.e(8210)]).then((()=>()=>w(28210))))),d("shallowequal","1.1.0",(()=>w.e(8665).then((()=>()=>w(88665))))),d("socket.io-client","2.5.0",(()=>Promise.all([w.e(7768),w.e(8864)]).then((()=>()=>w(17768))))),d("styled-components","5.3.6",(()=>Promise.all([w.e(3356),w.e(540),w.e(2723)]).then((()=>()=>w(63356))))),d("ua-parser-js","1.0.37",(()=>w.e(6353).then((()=>()=>w(46353))))),d("uuid","8.3.2",(()=>w.e(3836).then((()=>()=>w(39304))))),d("web-vitals","3.5.1",(()=>w.e(9543).then((()=>()=>w(59543)))))),e[a]=s.length?Promise.all(s).then((()=>e[a]=1)):1}}})(),(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var t=w.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var n=a.length-1;n>-1&&!e;)e=a[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),a=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),a=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=a[1]?t(a[1]):[];return a[2]&&(n.length++,n.push.apply(n,t(a[2]))),a[3]&&(n.push([]),n.push.apply(n,t(a[3]))),n},n=(e,t)=>{e=a(e),t=a(t);for(var n=0;;){if(n>=e.length)return n<t.length&&"u"!=(typeof t[n])[0];var r=e[n],o=(typeof r)[0];if(n>=t.length)return"u"==o;var l=t[n],d=(typeof l)[0];if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;if("o"!=o&&"u"!=o&&r!=l)return r<l;n++}},r=e=>{var t=e[0],a="";if(1===e.length)return"*";if(t+.5){a+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,a+="u"==(typeof(d=e[o]))[0]?"-":(n>0?".":"")+(n=2,d);return a}var l=[];for(o=1;o<e.length;o++){var d=e[o];l.push(0===d?"not("+s()+")":1===d?"("+s()+" || "+s()+")":2===d?l.pop()+" "+l.pop():r(d))}return s();function s(){return l.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,t)=>{if(0 in e){t=a(t);var n=e[0],r=n<0;r&&(n=-n-1);for(var l=0,d=1,s=!0;;d++,l++){var i,c,f=d<e.length?(typeof e[d])[0]:"";if(l>=t.length||"o"==(c=(typeof(i=t[l]))[0]))return!s||("u"==f?d>n&&!r:""==f!=r);if("u"==c){if(!s||"u"!=f)return!1}else if(s)if(f==c)if(d<=n){if(i!=e[d])return!1}else{if(r?i>e[d]:i<e[d])return!1;i!=e[d]&&(s=!1)}else if("s"!=f&&"n"!=f){if(r||d<=n)return!1;s=!1,d--}else{if(d<=n||c<f!=r)return!1;s=!1}else"s"!=f&&"n"!=f&&(s=!1,d--)}}var p=[],u=p.pop.bind(p);for(l=1;l<e.length;l++){var h=e[l];p.push(1==h?u()|u():2==h?u()&u():h?o(h,t):!u())}return!!u()},l=(e,t)=>{var a=e[t];return Object.keys(a).reduce(((e,t)=>!e||!a[e].loaded&&n(e,t)?t:e),0)},d=(e,t,a,n)=>"Unsatisfied version "+a+" from "+(a&&e[t][a].from)+" of shared singleton module "+t+" (required "+r(n)+")",s=(e,t,a,n)=>{var r=l(e,a);return o(n,r)||c(d(e,a,r,n)),f(e[a][r])},i=(e,t,a,n)=>{var r=l(e,a);if(!o(n,r))throw new Error(d(e,a,r,n));return f(e[a][r])},c=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},f=e=>(e.loaded=1,e.get()),u=(p=e=>function(t,a,n,r){var o=w.I(t);return o&&o.then?o.then(e.bind(e,t,w.S[t],a,n,r)):e(t,w.S[t],a,n,r)})(((e,t,a,n,r)=>t&&w.o(t,a)?s(t,0,a,n):r())),h=p(((e,t,a,n,r)=>t&&w.o(t,a)?i(t,0,a,n):r())),m={},b={40540:()=>h("default","react",[4,16,14,0],(()=>w.e(2784).then((()=>()=>w(2784))))),21730:()=>h("default","react-dom",[4,16,14,0],(()=>w.e(8316).then((()=>()=>w(28316))))),72229:()=>h("default","prop-types",[1,15,8,1],(()=>w.e(3980).then((()=>()=>w(13980))))),15626:()=>h("default","@tippyjs/react",[1,4,2,0],(()=>w.e(9721).then((()=>()=>w(39721))))),25892:()=>h("default","styled-components",[4,5,3,6],(()=>Promise.all([w.e(3356),w.e(2723)]).then((()=>()=>w(63356))))),65577:()=>h("default","@postman/aether-design-tokens",[1,1,2,0],(()=>w.e(6462).then((()=>()=>w(86462))))),60607:()=>h("default","react-router-dom",[4,6,11,2],(()=>w.e(6591).then((()=>()=>w(16591))))),62932:()=>h("default","mobx",[1,6,6,2],(()=>w.e(75).then((()=>()=>w(80075))))),43353:()=>u("default","@postman-app-next/navigation",[4,1,0,0],(()=>Promise.all([w.e(364),w.e(605),w.e(6831),w.e(1730),w.e(7736),w.e(2229),w.e(6242),w.e(607),w.e(3723),w.e(8722),w.e(8217),w.e(7016)]).then((()=>()=>w(27016))))),97376:()=>u("default","@postman-app-next/error-handling",[4,1,0,0],(()=>Promise.all([w.e(364),w.e(157),w.e(1730),w.e(7736),w.e(2229),w.e(6242),w.e(607),w.e(2772),w.e(730)]).then((()=>()=>w(730))))),69461:()=>u("default","@postman-app-next/data-fetching",[4,1,0,0],(()=>Promise.all([w.e(7736),w.e(7864),w.e(8013)]).then((()=>()=>w(98013))))),50916:()=>h("default","mobx-react-lite",[1,3,4,3],(()=>Promise.all([w.e(1730),w.e(4024)]).then((()=>()=>w(46776))))),80814:()=>u("default","@postman-app-next/ui",[4,1,0,0],(()=>Promise.all([w.e(605),w.e(157),w.e(7736),w.e(3723),w.e(3353),w.e(7569),w.e(287),w.e(1312)]).then((()=>()=>w(287))))),78217:()=>u("default","@postman-app-next/dialogs",[4,1,0,0],(()=>Promise.all([w.e(5348),w.e(7736),w.e(3911)]).then((()=>()=>w(23911))))),92465:()=>u("default","@postman-app-next/analytics-service",[4,1,0,0],(()=>Promise.all([w.e(7736),w.e(9907),w.e(721)]).then((()=>()=>w(40721))))),55397:()=>u("default","@postman-app-next/variable-session",[4,1,0,0],(()=>Promise.all([w.e(9792),w.e(7494)]).then((()=>()=>w(57494))))),89886:()=>u("default","@postman-app-next/performance-utils",[4,1,0,0],(()=>Promise.all([w.e(8722),w.e(9239)]).then((()=>()=>w(31597))))),93301:()=>u("default","@postman-app-next/workspace-service",[4,1,0,0],(()=>Promise.all([w.e(7736),w.e(4925),w.e(766)]).then((()=>()=>w(60766))))),47380:()=>u("default","@postman-app-next/environment-service",[4,1,0,0],(()=>Promise.all([w.e(8529),w.e(7736),w.e(607),w.e(2932),w.e(3353),w.e(9461),w.e(8722),w.e(2465),w.e(3657),w.e(4925),w.e(9792),w.e(6787)]).then((()=>()=>w(76787))))),97082:()=>u("default","@postman-app-next/kv-editor",[4,1,0,0],(()=>Promise.all([w.e(8529),w.e(823),w.e(3723),w.e(2723),w.e(7569),w.e(949),w.e(7623)]).then((()=>()=>w(17623))))),77736:()=>u("default","@postman-app-next/vscode-utils",[4,1,0,0],(()=>Promise.all([w.e(540),w.e(607),w.e(8722),w.e(770)]).then((()=>()=>w(30770))))),9907:()=>u("default","@postman-app-next/auth",[4,1,0,0],(()=>w.e(2668).then((()=>()=>w(62668))))),46468:()=>h("default","web-vitals",[1,3,0,4],(()=>w.e(9543).then((()=>()=>w(59543))))),54515:()=>h("default","ua-parser-js",[1,1,0,33],(()=>w.e(6353).then((()=>()=>w(46353))))),14527:()=>h("default","@tanstack/react-query",[1,4,29,1],(()=>w.e(8609).then((()=>()=>w(8609))))),22600:()=>h("default","@tanstack/react-query-devtools",[1,4,29,1],(()=>w.e(2223).then((()=>()=>w(92223))))),48722:()=>h("default","uuid",[1,8,3,2],(()=>w.e(3836).then((()=>()=>w(39304))))),34925:()=>u("default","@postman-app-next/network",[4,1,0,0],(()=>Promise.all([w.e(7376),w.e(9907),w.e(8320)]).then((()=>()=>w(38320))))),29792:()=>u("default","@postman-app-next/storage",[4,1,0,0],(()=>Promise.all([w.e(540),w.e(7736),w.e(9907),w.e(4422)]).then((()=>()=>w(44422))))),20609:()=>h("default","react-error-boundary",[1,4,0,4],(()=>w.e(8537).then((()=>()=>w(32955))))),25304:()=>h("default","@sentry/react",[1,7,49,0],(()=>w.e(3193).then((()=>()=>w(3193))))),53723:()=>h("default","clsx",[1,1,2,1],(()=>w.e(6277).then((()=>()=>w(6277))))),22723:()=>h("default","shallowequal",[1,1,1,0],(()=>w.e(8665).then((()=>()=>w(88665))))),57569:()=>h("default","react-draggable",[1,4,4,5],(()=>w.e(1327).then((()=>()=>w(41327))))),60949:()=>h("default","react-window",[1,1,8,8],(()=>w.e(4211).then((()=>()=>w(54211))))),72006:()=>u("default","@postman-app-next/variable-suggestions",[4,1,0,0],(()=>Promise.all([w.e(3640),w.e(7380),w.e(9304)]).then((()=>()=>w(59304))))),85191:()=>u("default","@postman-app-next/desktop-communication-sdk",[4,1,0,0],(()=>w.e(9211).then((()=>()=>w(20966))))),18160:()=>h("default","rxjs/operators",[1,7,8,1],(()=>Promise.all([w.e(6686),w.e(4803)]).then((()=>()=>w(34803))))),61801:()=>h("default","socket.io-client",[1,2,1,1],(()=>Promise.all([w.e(7768),w.e(8864)]).then((()=>()=>w(17768))))),94021:()=>h("default","rxjs",[1,7,8,1],(()=>Promise.all([w.e(6686),w.e(8210)]).then((()=>()=>w(28210))))),94475:()=>h("default","eventemitter3",[1,5,0,0],(()=>w.e(686).then((()=>()=>w(30686))))),8851:()=>h("default","mobx-react",[1,7,6,0],(()=>Promise.all([w.e(8495),w.e(2932),w.e(916)]).then((()=>()=>w(18495))))),61531:()=>u("default","@postman-app-next/test-utils",[4,1,0,0],(()=>Promise.all([w.e(6445),w.e(607),w.e(7376),w.e(9461),w.e(814),w.e(5630)]).then((()=>()=>w(25630))))),11271:()=>h("default","lexical",[2,0,11,1],(()=>w.e(2543).then((()=>()=>w(22543)))))},v={287:[8851],540:[40540],607:[60607],721:[46468,54515],814:[80814],916:[50916],949:[60949],1730:[21730],2229:[72229],2465:[92465],2723:[22723],2772:[20609,25304],2932:[62932],3353:[43353],3657:[55397,89886,93301],3723:[53723],4925:[34925],5167:[97082],6242:[15626,25892,65577],7016:[85191],7376:[97376],7380:[47380],7569:[57569],7623:[72006],7736:[77736],7864:[14527,22600],8217:[78217],8320:[18160,61801,94021,94475],8722:[48722],9205:[11271],9304:[61531],9461:[69461],9792:[29792],9907:[9907]},w.f.consumes=(e,t)=>{w.o(v,e)&&v[e].forEach((e=>{if(w.o(m,e))return t.push(m[e]);var a=t=>{m[e]=0,w.m[e]=a=>{delete w.c[e],a.exports=t()}},n=t=>{delete m[e],w.m[e]=a=>{throw delete w.c[e],t}};try{var r=b[e]();r.then?t.push(m[e]=r.then(a).catch(n)):a(r)}catch(e){n(e)}}))},g=e=>new Promise(((t,a)=>{var n=w.miniCssF(e),r=w.p+n;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var r=(l=a[n]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(r===e||r===t))return l}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var l;if((r=(l=o[n]).getAttribute("data-href"))===e||r===t)return l}})(n,r))return t();((e,t,a,n)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=o=>{if(r.onerror=r.onload=null,"load"===o.type)a();else{var l=o&&("load"===o.type?"missing":o.type),d=o&&o.target&&o.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=l,s.request=d,r.parentNode.removeChild(r),n(s)}},r.href=t,document.head.appendChild(r)})(e,r,t,a)})),x={179:0},w.f.miniCss=(e,t)=>{x[e]?t.push(x[e]):0!==x[e]&&{1312:1,2638:1,4409:1}[e]&&t.push(x[e]=g(e).then((()=>{x[e]=0}),(t=>{throw delete x[e],t})))},(()=>{var e={179:0};w.f.j=(t,a)=>{var n=w.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else if(/^(2(229|465|723|772|932)|3(353|657|723)|7(376|380|569|736|864)|8(14|217|722)|9(16|461|49|792|907)|1312|1730|4925|540|607|6242)$/.test(t))e[t]=0;else{var r=new Promise(((a,r)=>n=e[t]=[a,r]));a.push(n[2]=r);var o=w.p+w.u(t),l=new Error;w.l(o,(a=>{if(w.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}}),"chunk-"+t,t)}};var t=(t,a)=>{var n,r,[o,l,d]=a,s=0;if(o.some((t=>0!==e[t]))){for(n in l)w.o(l,n)&&(w.m[n]=l[n]);d&&d(w)}for(t&&t(a);s<o.length;s++)r=o[s],w.o(e,r)&&e[r]&&e[r][0](),e[r]=0},a=self.webpackChunkenvironment_workbench=self.webpackChunkenvironment_workbench||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),w.nc=void 0,w(412),w(50629)})();
//# sourceMappingURL=main.86cffdf0745850bc.js.map