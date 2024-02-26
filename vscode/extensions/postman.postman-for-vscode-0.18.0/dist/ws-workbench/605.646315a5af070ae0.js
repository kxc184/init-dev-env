"use strict";(self.webpackChunkws_workbench=self.webpackChunkws_workbench||[]).push([[605],{51119:(t,n,o)=>{o.d(n,{Z:()=>r});var e=o(75572);function r(t,n,o){return(n=(0,e.Z)(n))in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}},54530:(t,n,o)=>{o.d(n,{Z:()=>r});var e=o(98283);function r(t,n){if(null==t)return{};var o,r,c=(0,e.Z)(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(c[o]=t[o])}return c}},75572:(t,n,o)=>{o.d(n,{Z:()=>r});var e=o(90929);function r(t){var n=function(t,n){if("object"!==(0,e.Z)(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!==(0,e.Z)(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===(0,e.Z)(n)?n:String(n)}},80605:(t,n,o)=>{o.d(n,{Z:()=>j});var e=o(90929),r=o(7560),c=o(54530),a=o(51119),i=o(40540),l=o.n(i),u=o(72229),d=o.n(u),s=o(25892),b=o.n(s),h=o(34470),p=o(81397),f=b().kbd.withConfig({displayName:"KeyboardKey__StyledKeyboardKey",componentId:"sc-15q1rer-0"})(["box-sizing:border-box;display:inline-flex;height:",";min-width:",";padding:",";align-items:center;justify-content:center;border-radius:",";color:",";background-color:",";font-size:",";font-family:",";line-height:",";box-shadow:",";"],(function(t){return t.theme["size-xs"]}),(function(t){return t.theme["size-xs"]}),(function(t){return"".concat(t.theme["spacing-zero"]," ").concat(t.theme["spacing-xs"])}),(function(t){return t.theme["border-radius-default"]}),(function(t){return t.isDisabled?t.theme["content-color-tertiary"]:t.theme["content-color-secondary"]}),(function(t){return"alt"===t.type?t.theme["background-color-primary"]:t.theme["background-color-tertiary"]}),(function(t){return t.theme["text-size-s"]}),(function(t){return t.theme["text-family-default"]}),(function(t){return t.theme["line-height-s"]}),(function(t){return"".concat(t.theme["spacing-zero"]," 1px ").concat(t.theme["spacing-zero"]," ").concat(t.theme["border-color-strong"])}));function m(t){var n=t.keyLabel,o=t.isDisabled,e=t.type,r=t["data-testid"];return l().createElement(f,{isDisabled:o,"data-testid":r,type:e},n)}m.defaultProps={isDisabled:!1,type:"default","data-testid":"aether-shortcut-key",className:""},m.propTypes={keyLabel:d().string.isRequired,isDisabled:d().bool,type:d().oneOf(["default","alt"]),"data-testid":d().string};const g=m;var y=["children","tooltip","shortcut"],v=b()(p.Z).withConfig({displayName:"ButtonTooltip__StyledButtonTooltip",componentId:"scf5rr-0"})(["&&{.tippy-content{font-size:",";line-height:",";text-align:",";padding:",";}& .aether-btn-tooltip__primary-text{color:",";}& .aether-btn-tooltip__shortcut{color:",";display:flex;justify-content:center;gap:",";}}"],(function(t){return t.theme["text-size-s"]}),(function(t){return t.theme["line-height-s"]}),(function(t){return t.tooltipTextAlignment}),(function(t){return"6px ".concat(t.theme["spacing-s"])}),(function(t){return t.theme["content-color-primary"]}),(function(t){return t.theme["content-color-secondary"]}),(function(t){return t.theme["spacing-xs"]}));function _(t){var n=t.children,o=t.tooltip,e=t.shortcut,a=(0,c.Z)(t,y),i=function(t,n){var o=n.split("+").filter((function(t){return""!==t}));n.includes("++")&&o.push("+"),n.includes("Num+")&&(o[o.indexOf("Num")]="Num+");var e=o.map((function(t){return l().createElement(g,{keyLabel:t.trim(),type:"alt"})}));return l().createElement(l().Fragment,null,t&&l().createElement("div",{className:"aether-btn-tooltip__primary-text"},t),n&&l().createElement("div",{className:"aether-btn-tooltip__shortcut"},e))}(o,e);return l().createElement(v,(0,r.Z)({content:i},a),n)}_.defaultProps={children:null,tooltip:"",shortcut:"","data-testid":"aether-button-tooltip","data-click":""},_.propTypes={tooltip:d().node,shortcut:d().string,children:d().oneOfType([d().arrayOf(d().node),d().node]),"data-testid":d().string,"data-click":d().string};var x=o(35736),k=o(99038),w=["content"];function E(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.push.apply(o,e)}return o}function L(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?E(Object(o),!0).forEach((function(n){(0,a.Z)(t,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):E(Object(o)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))}))}return t}function z(t){return"medium"===t?"large":"small"===t?"small":null}function O(t,n){var o=n?"aether-button__right-icon":"aether-button__left-icon";return"string"==typeof t?null:l().cloneElement(t,{className:o})}var Z=b().div.withConfig({displayName:"Button__StyledButtonWrapper",componentId:"b8af3e-0"})(["display:inline-block;border-radius:",";&:focus{outline:none;box-shadow:",";}&:focus-visible{outline:none;box-shadow:",";}&:focus:not(:focus-visible){outline:initial;box-shadow:initial;}"],(function(t){return t.theme["border-radius-default"]}),(function(t){return t.theme["button-focus-border-color"]}),(function(t){return t.theme["button-focus-border-color"]})),D=b().button.withConfig({displayName:"Button__StyledButton",componentId:"b8af3e-1"})(["position:relative;box-sizing:border-box;display:inline-flex;justify-content:center;align-items:center;cursor:pointer;user-select:none;outline:none;border:none;border-radius:",";font-size:",";font-family:",";line-height:1.334;& .aether-button__left-icon{visibility:",";}& .aether-button__left-icon:not(:last-child){margin-right:6px;}& .aether-button__right-icon{margin-left:2px;visibility:",";}& .aether-button__loader{position:absolute;}"," ",";",";",";"," &:hover,&:active{box-sizing:border-box;}&:focus{outline:none;box-shadow:",";}&:focus-visible{outline:none;box-shadow:",";}&:focus:not(:focus-visible){outline:initial;box-shadow:initial;}",""],(function(t){return t.theme["border-radius-default"]}),(function(t){return t.theme["text-size-m"]}),(function(t){return t.theme["text-family-default"]}),(function(t){return t.isLoading&&!t.hideLoader?"hidden":"visible"}),(function(t){return t.isLoading&&!t.hideLoader?"hidden":"visible"}),(function(t){return t.showIndicator&&"tertiary"===t.type?"\n        &:after {\n          content: '';\n          position: absolute;\n          background-color: ".concat(t.theme["base-color-brand"],";\n          border-radius: 999px;\n          top: 3px;\n          right: 3px;\n          height: 6px;\n          width: 6px;\n        }\n      "):""}),(function(t){return n=t.size,o=t.minWidth,e=t.fullWidth,r=t.theme,"small"===n?"\n        height: ".concat(r["size-s"],";\n        padding: ").concat(r["spacing-zero"]," ").concat(r["spacing-m"],";\n        min-width: ").concat(o||"",";\n        ").concat(e?"width: 100%;":"","\n      "):"\n        height: ".concat(r["size-m"],";\n        padding: ").concat(r["spacing-zero"]," ").concat(r["spacing-m"],";\n        min-width: ").concat(o||"",";\n        ").concat(e?"width: 100%;":"","\n      ");var n,o,e,r}),(function(t){return function(t,n){switch(t){case"primary":return"\n        background-color: ".concat(n["button-primary-background-color"],";\n        color: ").concat(n["button-primary-content-color"],";\n        font-weight: ").concat(n["text-weight-medium"],";\n        svg path {\n          fill: ").concat(n["button-primary-content-color"],";\n        }\n\n        & .aether-button__loader rect {\n          fill: ").concat(n["content-color-constant"],";\n        }\n\n        &:hover {\n          background-color: ").concat(n["button-primary-hover-background-color"],";\n        }\n\n        &:active {\n          background-color: ").concat(n["button-primary-active-background-color"],";\n        }\n\n        &:disabled {\n          color: ").concat(n["button-primary-disabled-content-color"],";\n          background-color: ").concat(n["button-primary-disabled-background-color"],";\n          svg path {\n            fill: ").concat(n["button-primary-disabled-content-color"],";\n          }\n          & .aether-button__loader .rect-one,\n          & .aether-button__loader .rect-two,\n          & .aether-button__loader .rect-three {\n            background-color: ").concat(n["button-primary-disabled-content-color"],";\n          }\n        }\n      ");case"secondary":return"\n        background-color: ".concat(n["button-secondary-background-color"],";\n        color: ").concat(n["button-secondary-content-color"],";\n        svg path {\n          fill: ").concat(n["button-secondary-content-color"],";\n        }\n\n        & .aether-button__loader .rect-one,\n        & .aether-button__loader .rect-two,\n        & .aether-button__loader .rect-three {\n          background-color: ").concat(n["content-color-tertiary"],";\n        }\n\n        &:hover {\n          background-color: ").concat(n["button-secondary-hover-background-color"],";\n        }\n\n        &:active {\n          background-color: ").concat(n["button-secondary-active-background-color"],";\n        }\n\n        &:disabled {\n          background-color: ").concat(n["button-secondary-disabled-background-color"],";\n          color: ").concat(n["button-secondary-disabled-content-color"],";\n          svg path {\n            fill: ").concat(n["button-secondary-disabled-content-color"],";\n          } \n        }\n      ");case"tertiary":return"\n        background-color: ".concat(n["button-tertiary-background-color"],";\n        color: ").concat(n["button-tertiary-content-color"],";\n        padding: ").concat(n["spacing-zero"]," ").concat(n["spacing-s"],";\n        svg path {\n          fill: ").concat(n["button-tertiary-content-color"],";\n        }\n\n        & .aether-button__loader .rect-one,\n        & .aether-button__loader .rect-two,\n        & .aether-button__loader .rect-three {\n          background-color: ").concat(n["content-color-tertiary"],";\n        }\n\n        &:hover {\n          background-color: ").concat(n["button-tertiary-hover-background-color"],";\n          color: ").concat(n["button-tertiary-hover-content-color"],";\n          svg path {\n            fill: ").concat(n["button-tertiary-hover-content-color"],";\n          }\n        }\n\n        &:active {\n          background-color: ").concat(n["button-tertiary-active-background-color"],";\n          color: ").concat(n["button-tertiary-active-content-color"],";\n          svg path {\n            fill: ").concat(n["button-tertiary-active-content-color"],";\n          }\n        }\n\n        &:disabled {\n          background-color: ").concat(n["button-tertiary-disabled-background-color"],";\n          color: ").concat(n["button-tertiary-disabled-content-color"],";\n          svg path {\n            fill: ").concat(n["button-tertiary-disabled-content-color"],";\n          }\n        }\n      ");case"outline":return"\n        background-color: ".concat(n["button-outline-background-color"],";\n        color: ").concat(n["button-outline-content-color"],";\n        border: ").concat(n["button-outline-border"],";\n        border-color: ").concat(n["button-outline-border-color"],";\n\n        & .aether-button__loader .rect-one,\n        & .aether-button__loader .rect-two,\n        & .aether-button__loader .rect-three {\n          background-color: ").concat(n["content-color-tertiary"],";\n        }\n\n        &:hover {\n          border-color: ").concat(n["button-outline-hover-border-color"],";\n        }\n\n        &:active {\n          border-color: ").concat(n["button-outline-active-border-color"],";\n        }\n\n        &:disabled {\n          border-color: ").concat(n["button-outline-disabled-border-color"],";\n          color: ").concat(n["button-outline-disabled-content-color"],";\n          svg path {\n            fill: ").concat(n["button-outline-disabled-content-color"],";\n          }\n        }\n      ");case"destructive":return"\n        background-color: ".concat(n["button-destructive-background-color"],";\n        color: ").concat(n["button-destructive-content-color"],";\n        font-weight: ").concat(n["text-weight-medium"],";\n        svg path {\n          fill: ").concat(n["button-destructive-content-color"],";\n        }\n\n        & .aether-button__loader .rect-one,\n        & .aether-button__loader .rect-two,\n        & .aether-button__loader .rect-three {\n          background-color: ").concat(n["content-color-constant"],";\n        }\n\n        &:hover {\n          background-color: ").concat(n["button-destructive-hover-background-color"],";\n        }\n\n        &:active {\n          background-color: ").concat(n["button-destructive-active-background-color"],";\n        }\n\n        &:disabled {\n          color: ").concat(n["button-destructive-disabled-content-color"],";\n          background-color: ").concat(n["button-destructive-disabled-background-color"],";\n          svg path {\n            fill: ").concat(n["button-destructive-disabled-content-color"],";\n          }\n          & .aether-button__loader .rect-one,\n          & .aether-button__loader .rect-two,\n          & .aether-button__loader .rect-three {\n            background-color: ").concat(n["button-destructive-disabled-content-color"],";\n          }\n        }\n      ");case"plain":case"text":return"\n        padding: ".concat(n["spacing-zero"],";\n        border-radius: 0;\n        height: auto;\n        background-color: transparent;\n        color: ").concat(n["button-plain-content-color"],";\n        \n        & .aether-button__text {\n          text-decoration: none;\n        }\n\n        &:hover .aether-button__text {\n          text-decoration: underline;\n          text-underline-offset: 0.08em;\n        }\n\n        &:active .aether-button__text {\n          text-decoration: underline;\n          text-underline-offset: 0.08em;\n        }\n        \n        &:disabled .aether-button__text {\n          color: ").concat(n["button-plain-disabled-content-color"],";\n          text-decoration: none;\n        }\n      ");case"monochrome-plain":case"monochrome-text":return"\n        padding: ".concat(n["spacing-zero"],";\n        border-radius: 0;\n        height: auto;\n        background-color: transparent;\n        color: ").concat(n["button-monochrome-plain-content-color"],";\n\n        & .aether-button__text {\n          text-decoration: underline;\n          text-underline-offset: 0.08em;\n        }\n\n        &:hover .aether-button__text {\n          color: ").concat(n["button-monochrome-plain-hover-content-color"],";\n        }\n        \n        &:disabled .aether-button__text {\n          color: ").concat(n["button-monochrome-plain-disabled-content-color"],";\n          text-decoration: none;\n        }\n      ");case"muted-plain":case"muted-text":return"\n        padding: ".concat(n["spacing-zero"],";\n        border-radius: 0;\n        height: auto;\n        background-color: transparent;\n        color: ").concat(n["button-muted-plain-content-color"],";\n\n        & .aether-button__text {\n          text-decoration: none;\n        }\n\n        &:hover .aether-button__text {\n          text-decoration: underline;\n          text-underline-offset: 0.08em;\n        }\n\n        &:active .aether-button__text {\n          text-decoration: underline;\n          text-underline-offset: 0.08em;\n        }\n        \n        &:disabled .aether-button__text {\n          color: ").concat(n["button-muted-plain-disabled-content-color"],";\n          text-decoration: none;\n        }\n      ");default:return null}}(t.type,t.theme)}),(function(t){return t.isActive&&function(t,n){switch(t){case"primary":return"background-color: ".concat(n["button-primary-active-background-color"],";");case"secondary":return"background-color: ".concat(n["button-secondary-active-background-color"],";");case"tertiary":return"\n          background-color: ".concat(n["button-tertiary-active-background-color"],";\n          color: ").concat(n["button-tertiary-active-content-color"],";\n          svg path {\n            fill: ").concat(n["button-tertiary-active-content-color"],";\n          }\n      ");case"outline":return"border-color: ".concat(n["button-outline-active-border-color"],";");case"destructive":return"background-color: ".concat(n["button-destructive-active-background-color"],";");default:return null}}(t.type,t.theme)}),(function(t){return t.text||!t.icon&&!t.rightIcon?"":"small"===t.size?"padding: ".concat(t.theme["spacing-zero"]," 6px;"):"padding: ".concat(t.theme["spacing-zero"]," ").concat(t.theme["spacing-s"],";")}),(function(t){return t.theme["button-focus-border-color"]}),(function(t){return t.theme["button-focus-border-color"]}),h.Z.includeDisabledState()),I=b().span.withConfig({displayName:"Button__StyledButtonText",componentId:"b8af3e-2"})(["visibility:",";"],(function(t){return t.isLoading&&!t.hideLoader?"hidden":"visible"}));function N(t){var n=t.autoFocus,o=t.className,e=t.fullWidth,i=t.hideLoader,u=t.icon,d=t.innerRef,s=t.isActive,b=t.isDisabled,h=t.isLoading,f=t.minWidth,m=t.onBlur,g=t.onClick,y=t.onDoubleClick,v=t.onFocus,k=t.onMouseEnter,E=t.onMouseLeave,N=t.onMouseDown,j=t.rightIcon,C=t.shortcutLabel,M=t.showIndicator,B=t.size,P=t.text,W=t.tooltip,F=t.type,S=t["data-testid"],T=t["data-click"],A=function(t){g&&g(t)},R=function(t){y&&y(t)},K=function(t){v&&v(t)},q=function(t){m&&m(t)},G=function(t){k&&k(t)},V=function(t){E&&E(t)},H=function(t){N&&N(t)},J=Object.keys(t).filter((function(t){return t.startsWith("aria")})).reduce((function(n,o){var e=t[o];return L(L({},n),{},(0,a.Z)({},o,e))}),{});if(W||C){var Q={};if(W&&l().isValidElement(W)&&W.type===p.Z){var U=W.props;Q=L({tooltip:U.content},(0,c.Z)(U,w))}var X="string"==typeof W?W:W.content,Y="left";return C&&!b&&(Y="center"),l().createElement(_,(0,r.Z)({tooltip:X,shortcut:C,placement:W.placement||"bottom",tooltipTextAlignment:Y},Q),b?l().createElement(Z,{tabIndex:"0"},l().createElement(D,(0,r.Z)({onClick:A,onDoubleClick:R,size:B,type:F,disabled:b||h,icon:u,rightIcon:j,text:P,minWidth:f,fullWidth:e,onBlur:q,onFocus:K,onMouseEnter:G,onMouseLeave:V,onMouseDown:H,className:o,"data-aether-id":"aether-button",ref:d,autoFocus:n,isActive:s,isLoading:h,hideLoader:i,showIndicator:M,"data-testid":S,"data-click":T},J),h&&!i&&l().createElement(x.Z,{className:"aether-button__loader"}),u&&O(u,!1),P&&l().createElement(I,{isLoading:h,hideLoader:i,className:"aether-button__text"},P),j&&O(j,!0))):l().createElement(D,(0,r.Z)({onClick:A,onDoubleClick:R,size:B,type:F,disabled:b||h,icon:u,rightIcon:j,text:P,minWidth:f,fullWidth:e,onBlur:q,onFocus:K,onMouseEnter:G,onMouseLeave:V,onMouseDown:H,className:o,"data-aether-id":"aether-button",ref:d,autoFocus:n,isActive:s,isLoading:h,hideLoader:i,showIndicator:M,"data-testid":S,"data-click":T},J),h&&!i&&l().createElement(x.Z,{className:"aether-button__loader"}),u&&O(u,!1),P&&l().createElement(I,{isLoading:h,hideLoader:i,className:"aether-button__text"},P),j&&O(j,!0)))}return l().createElement(D,(0,r.Z)({onClick:A,onDoubleClick:R,size:B,type:F,disabled:b||h,icon:u,rightIcon:j,text:P,minWidth:f,fullWidth:e,onBlur:q,onFocus:K,onMouseEnter:G,onMouseLeave:V,onMouseDown:H,className:o,"data-aether-id":"aether-button",ref:d,autoFocus:n,isActive:s,isLoading:h,hideLoader:i,showIndicator:M,"data-testid":S,"data-click":T},J),h&&!i&&l().createElement(x.Z,{className:"aether-button__loader"}),u&&O(u,h,z(B)),P&&l().createElement(I,{isLoading:h,hideLoader:i,className:"aether-button__text"},P),j&&O(j,h,z(B)))}const j=l().forwardRef((function(t,n){return l().createElement(N,(0,r.Z)({},t,{innerRef:n}))}));N.defaultProps={autoFocus:!1,className:"",fullWidth:!1,hideLoader:!1,icon:"",innerRef:null,isActive:!1,isDisabled:!1,isLoading:!1,minWidth:"",onBlur:null,onClick:function(){},onDoubleClick:function(){},onFocus:null,onMouseEnter:null,onMouseLeave:null,onMouseDown:null,rightIcon:"",shortcutLabel:"",showIndicator:!1,size:"medium",text:"",tooltip:"",type:"secondary","data-testid":"aether-button","data-click":""},N.propTypes={autoFocus:d().bool,className:d().string,fullWidth:d().bool,hideLoader:d().bool,icon:d().node,innerRef:d().func,isActive:d().bool,isDisabled:d().bool,isLoading:d().bool,minWidth:d().string,onBlur:d().func,onClick:d().func,onDoubleClick:d().func,onFocus:d().func,onMouseEnter:d().func,onMouseLeave:d().func,onMouseDown:d().func,rightIcon:d().node,shortcutLabel:d().string,showIndicator:function(t){var n=t.type,o=t.showIndicator;return o&&"tertiary"!==n?new Error('Button: The prop "showIndicator" is only valid with the tertiary variant of the Button component'):o&&"boolean"!=typeof o?new Error('Button: Expected "showIndicator" prop to be of type boolean but got '.concat((0,e.Z)(o),".")):null},size:d().oneOf(k.Gt),text:function(t){var n=t.text,o=t.icon;return n||o?n&&"string"!=typeof n?new Error('Button: Expected "text" prop to be of type string but got '.concat((0,e.Z)(n),".")):null:new Error('Button: The props "icon" and "text" cannot be left empty at the same time. Please provide a valid value for at least one of them.')},tooltip:d().node,type:d().oneOf(k.kM),"data-testid":d().string,"data-click":d().string}},99038:(t,n,o)=>{o.d(n,{Gt:()=>r,dg:()=>c,kM:()=>e});var e=["primary","secondary","tertiary","outline","destructive"].concat(["plain","monochrome-plain","muted-plain"],["text","monochrome-text","muted-text"]),r=["small","medium"],c="Failed to Copy"},34470:(t,n,o)=>{o.d(n,{Z:()=>e});const e={includeDisabledState:function(t){return"\n  &:disabled {\n      cursor: not-allowed;\n      ".concat(t&&t,"\n  }\n  ")}}}}]);
//# sourceMappingURL=605.646315a5af070ae0.js.map