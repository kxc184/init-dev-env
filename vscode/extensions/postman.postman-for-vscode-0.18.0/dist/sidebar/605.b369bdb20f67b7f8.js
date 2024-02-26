"use strict";(self.webpackChunksidebar=self.webpackChunksidebar||[]).push([[605],{51119:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(75572);function r(t,e,n){return(e=(0,o.Z)(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},54530:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(98283);function r(t,e){if(null==t)return{};var n,r,c=(0,o.Z)(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}},98283:(t,e,n)=>{function o(t,e){if(null==t)return{};var n,o,r={},c=Object.keys(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,{Z:()=>o})},75572:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(90929);function r(t){var e=function(t,e){if("object"!==(0,o.Z)(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==(0,o.Z)(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===(0,o.Z)(e)?e:String(e)}},80605:(t,e,n)=>{n.d(e,{Z:()=>D});var o=n(90929),r=n(7560),c=n(54530),a=n(51119),i=n(40540),l=n.n(i),u=n(72229),d=n.n(u),s=n(25892),b=n.n(s),h=n(34470),p=n(81397),m=b().kbd.withConfig({displayName:"KeyboardKey__StyledKeyboardKey",componentId:"sc-15q1rer-0"})(["box-sizing:border-box;display:inline-flex;height:",";min-width:",";padding:",";align-items:center;justify-content:center;border-radius:",";color:",";background-color:",";font-size:",";font-family:",";line-height:",";box-shadow:",";"],(function(t){return t.theme["size-xs"]}),(function(t){return t.theme["size-xs"]}),(function(t){return"".concat(t.theme["spacing-zero"]," ").concat(t.theme["spacing-xs"])}),(function(t){return t.theme["border-radius-default"]}),(function(t){return t.isDisabled?t.theme["content-color-tertiary"]:t.theme["content-color-secondary"]}),(function(t){return"alt"===t.type?t.theme["background-color-primary"]:t.theme["background-color-tertiary"]}),(function(t){return t.theme["text-size-s"]}),(function(t){return t.theme["text-family-default"]}),(function(t){return t.theme["line-height-s"]}),(function(t){return"".concat(t.theme["spacing-zero"]," 1px ").concat(t.theme["spacing-zero"]," ").concat(t.theme["border-color-strong"])}));function f(t){var e=t.keyLabel,n=t.isDisabled,o=t.type,r=t["data-testid"];return l().createElement(m,{isDisabled:n,"data-testid":r,type:o},e)}f.defaultProps={isDisabled:!1,type:"default","data-testid":"aether-shortcut-key",className:""},f.propTypes={keyLabel:d().string.isRequired,isDisabled:d().bool,type:d().oneOf(["default","alt"]),"data-testid":d().string};const g=f;var y=["children","tooltip","shortcut"],v=b()(p.Z).withConfig({displayName:"ButtonTooltip__StyledButtonTooltip",componentId:"scf5rr-0"})(["&&{.tippy-content{font-size:",";line-height:",";text-align:",";padding:",";}& .aether-btn-tooltip__primary-text{color:",";}& .aether-btn-tooltip__shortcut{color:",";display:flex;justify-content:center;gap:",";}}"],(function(t){return t.theme["text-size-s"]}),(function(t){return t.theme["line-height-s"]}),(function(t){return t.tooltipTextAlignment}),(function(t){return"6px ".concat(t.theme["spacing-s"])}),(function(t){return t.theme["content-color-primary"]}),(function(t){return t.theme["content-color-secondary"]}),(function(t){return t.theme["spacing-xs"]}));function x(t){var e=t.children,n=t.tooltip,o=t.shortcut,a=(0,c.Z)(t,y),i=function(t,e){var n=e.split("+").filter((function(t){return""!==t}));e.includes("++")&&n.push("+"),e.includes("Num+")&&(n[n.indexOf("Num")]="Num+");var o=n.map((function(t){return l().createElement(g,{keyLabel:t.trim(),type:"alt"})}));return l().createElement(l().Fragment,null,t&&l().createElement("div",{className:"aether-btn-tooltip__primary-text"},t),e&&l().createElement("div",{className:"aether-btn-tooltip__shortcut"},o))}(n,o);return l().createElement(v,(0,r.Z)({content:i},a),e)}x.defaultProps={children:null,tooltip:"",shortcut:"","data-testid":"aether-button-tooltip","data-click":""},x.propTypes={tooltip:d().node,shortcut:d().string,children:d().oneOfType([d().arrayOf(d().node),d().node]),"data-testid":d().string,"data-click":d().string};var _=n(35736),k=n(99038),w=["content"];function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function z(t){return"medium"===t?"large":"small"===t?"small":null}function L(t,e){var n=e?"aether-button__right-icon":"aether-button__left-icon";return"string"==typeof t?null:l().cloneElement(t,{className:n})}var O=b().div.withConfig({displayName:"Button__StyledButtonWrapper",componentId:"b8af3e-0"})(["display:inline-block;border-radius:",";&:focus{outline:none;box-shadow:",";}&:focus-visible{outline:none;box-shadow:",";}&:focus:not(:focus-visible){outline:initial;box-shadow:initial;}"],(function(t){return t.theme["border-radius-default"]}),(function(t){return t.theme["button-focus-border-color"]}),(function(t){return t.theme["button-focus-border-color"]})),S=b().button.withConfig({displayName:"Button__StyledButton",componentId:"b8af3e-1"})(["position:relative;box-sizing:border-box;display:inline-flex;justify-content:center;align-items:center;cursor:pointer;user-select:none;outline:none;border:none;border-radius:",";font-size:",";font-family:",";line-height:1.334;& .aether-button__left-icon{visibility:",";}& .aether-button__left-icon:not(:last-child){margin-right:6px;}& .aether-button__right-icon{margin-left:2px;visibility:",";}& .aether-button__loader{position:absolute;}"," ",";",";",";"," &:hover,&:active{box-sizing:border-box;}&:focus{outline:none;box-shadow:",";}&:focus-visible{outline:none;box-shadow:",";}&:focus:not(:focus-visible){outline:initial;box-shadow:initial;}",""],(function(t){return t.theme["border-radius-default"]}),(function(t){return t.theme["text-size-m"]}),(function(t){return t.theme["text-family-default"]}),(function(t){return t.isLoading&&!t.hideLoader?"hidden":"visible"}),(function(t){return t.isLoading&&!t.hideLoader?"hidden":"visible"}),(function(t){return t.showIndicator&&"tertiary"===t.type?"\n        &:after {\n          content: '';\n          position: absolute;\n          background-color: ".concat(t.theme["base-color-brand"],";\n          border-radius: 999px;\n          top: 3px;\n          right: 3px;\n          height: 6px;\n          width: 6px;\n        }\n      "):""}),(function(t){return e=t.size,n=t.minWidth,o=t.fullWidth,r=t.theme,"small"===e?"\n        height: ".concat(r["size-s"],";\n        padding: ").concat(r["spacing-zero"]," ").concat(r["spacing-m"],";\n        min-width: ").concat(n||"",";\n        ").concat(o?"width: 100%;":"","\n      "):"\n        height: ".concat(r["size-m"],";\n        padding: ").concat(r["spacing-zero"]," ").concat(r["spacing-m"],";\n        min-width: ").concat(n||"",";\n        ").concat(o?"width: 100%;":"","\n      ");var e,n,o,r}),(function(t){return function(t,e){switch(t){case"primary":return"\n        background-color: ".concat(e["button-primary-background-color"],";\n        color: ").concat(e["button-primary-content-color"],";\n        font-weight: ").concat(e["text-weight-medium"],";\n        svg path {\n          fill: ").concat(e["button-primary-content-color"],";\n        }\n\n        & .aether-button__loader rect {\n          fill: ").concat(e["content-color-constant"],";\n        }\n\n        &:hover {\n          background-color: ").concat(e["button-primary-hover-background-color"],";\n        }\n\n        &:active {\n          background-color: ").concat(e["button-primary-active-background-color"],";\n        }\n\n        &:disabled {\n          color: ").concat(e["button-primary-disabled-content-color"],";\n          background-color: ").concat(e["button-primary-disabled-background-color"],";\n          svg path {\n            fill: ").concat(e["button-primary-disabled-content-color"],";\n          }\n          & .aether-button__loader .rect-one,\n          & .aether-button__loader .rect-two,\n          & .aether-button__loader .rect-three {\n            background-color: ").concat(e["button-primary-disabled-content-color"],";\n          }\n        }\n      ");case"secondary":return"\n        background-color: ".concat(e["button-secondary-background-color"],";\n        color: ").concat(e["button-secondary-content-color"],";\n        svg path {\n          fill: ").concat(e["button-secondary-content-color"],";\n        }\n\n        & .aether-button__loader .rect-one,\n        & .aether-button__loader .rect-two,\n        & .aether-button__loader .rect-three {\n          background-color: ").concat(e["content-color-tertiary"],";\n        }\n\n        &:hover {\n          background-color: ").concat(e["button-secondary-hover-background-color"],";\n        }\n\n        &:active {\n          background-color: ").concat(e["button-secondary-active-background-color"],";\n        }\n\n        &:disabled {\n          background-color: ").concat(e["button-secondary-disabled-background-color"],";\n          color: ").concat(e["button-secondary-disabled-content-color"],";\n          svg path {\n            fill: ").concat(e["button-secondary-disabled-content-color"],";\n          } \n        }\n      ");case"tertiary":return"\n        background-color: ".concat(e["button-tertiary-background-color"],";\n        color: ").concat(e["button-tertiary-content-color"],";\n        padding: ").concat(e["spacing-zero"]," ").concat(e["spacing-s"],";\n        svg path {\n          fill: ").concat(e["button-tertiary-content-color"],";\n        }\n\n        & .aether-button__loader .rect-one,\n        & .aether-button__loader .rect-two,\n        & .aether-button__loader .rect-three {\n          background-color: ").concat(e["content-color-tertiary"],";\n        }\n\n        &:hover {\n          background-color: ").concat(e["button-tertiary-hover-background-color"],";\n          color: ").concat(e["button-tertiary-hover-content-color"],";\n          svg path {\n            fill: ").concat(e["button-tertiary-hover-content-color"],";\n          }\n        }\n\n        &:active {\n          background-color: ").concat(e["button-tertiary-active-background-color"],";\n          color: ").concat(e["button-tertiary-active-content-color"],";\n          svg path {\n            fill: ").concat(e["button-tertiary-active-content-color"],";\n          }\n        }\n\n        &:disabled {\n          background-color: ").concat(e["button-tertiary-disabled-background-color"],";\n          color: ").concat(e["button-tertiary-disabled-content-color"],";\n          svg path {\n            fill: ").concat(e["button-tertiary-disabled-content-color"],";\n          }\n        }\n      ");case"outline":return"\n        background-color: ".concat(e["button-outline-background-color"],";\n        color: ").concat(e["button-outline-content-color"],";\n        border: ").concat(e["button-outline-border"],";\n        border-color: ").concat(e["button-outline-border-color"],";\n\n        & .aether-button__loader .rect-one,\n        & .aether-button__loader .rect-two,\n        & .aether-button__loader .rect-three {\n          background-color: ").concat(e["content-color-tertiary"],";\n        }\n\n        &:hover {\n          border-color: ").concat(e["button-outline-hover-border-color"],";\n        }\n\n        &:active {\n          border-color: ").concat(e["button-outline-active-border-color"],";\n        }\n\n        &:disabled {\n          border-color: ").concat(e["button-outline-disabled-border-color"],";\n          color: ").concat(e["button-outline-disabled-content-color"],";\n          svg path {\n            fill: ").concat(e["button-outline-disabled-content-color"],";\n          }\n        }\n      ");case"destructive":return"\n        background-color: ".concat(e["button-destructive-background-color"],";\n        color: ").concat(e["button-destructive-content-color"],";\n        font-weight: ").concat(e["text-weight-medium"],";\n        svg path {\n          fill: ").concat(e["button-destructive-content-color"],";\n        }\n\n        & .aether-button__loader .rect-one,\n        & .aether-button__loader .rect-two,\n        & .aether-button__loader .rect-three {\n          background-color: ").concat(e["content-color-constant"],";\n        }\n\n        &:hover {\n          background-color: ").concat(e["button-destructive-hover-background-color"],";\n        }\n\n        &:active {\n          background-color: ").concat(e["button-destructive-active-background-color"],";\n        }\n\n        &:disabled {\n          color: ").concat(e["button-destructive-disabled-content-color"],";\n          background-color: ").concat(e["button-destructive-disabled-background-color"],";\n          svg path {\n            fill: ").concat(e["button-destructive-disabled-content-color"],";\n          }\n          & .aether-button__loader .rect-one,\n          & .aether-button__loader .rect-two,\n          & .aether-button__loader .rect-three {\n            background-color: ").concat(e["button-destructive-disabled-content-color"],";\n          }\n        }\n      ");case"plain":case"text":return"\n        padding: ".concat(e["spacing-zero"],";\n        border-radius: 0;\n        height: auto;\n        background-color: transparent;\n        color: ").concat(e["button-plain-content-color"],";\n        \n        & .aether-button__text {\n          text-decoration: none;\n        }\n\n        &:hover .aether-button__text {\n          text-decoration: underline;\n          text-underline-offset: 0.08em;\n        }\n\n        &:active .aether-button__text {\n          text-decoration: underline;\n          text-underline-offset: 0.08em;\n        }\n        \n        &:disabled .aether-button__text {\n          color: ").concat(e["button-plain-disabled-content-color"],";\n          text-decoration: none;\n        }\n      ");case"monochrome-plain":case"monochrome-text":return"\n        padding: ".concat(e["spacing-zero"],";\n        border-radius: 0;\n        height: auto;\n        background-color: transparent;\n        color: ").concat(e["button-monochrome-plain-content-color"],";\n\n        & .aether-button__text {\n          text-decoration: underline;\n          text-underline-offset: 0.08em;\n        }\n\n        &:hover .aether-button__text {\n          color: ").concat(e["button-monochrome-plain-hover-content-color"],";\n        }\n        \n        &:disabled .aether-button__text {\n          color: ").concat(e["button-monochrome-plain-disabled-content-color"],";\n          text-decoration: none;\n        }\n      ");case"muted-plain":case"muted-text":return"\n        padding: ".concat(e["spacing-zero"],";\n        border-radius: 0;\n        height: auto;\n        background-color: transparent;\n        color: ").concat(e["button-muted-plain-content-color"],";\n\n        & .aether-button__text {\n          text-decoration: none;\n        }\n\n        &:hover .aether-button__text {\n          text-decoration: underline;\n          text-underline-offset: 0.08em;\n        }\n\n        &:active .aether-button__text {\n          text-decoration: underline;\n          text-underline-offset: 0.08em;\n        }\n        \n        &:disabled .aether-button__text {\n          color: ").concat(e["button-muted-plain-disabled-content-color"],";\n          text-decoration: none;\n        }\n      ");default:return null}}(t.type,t.theme)}),(function(t){return t.isActive&&function(t,e){switch(t){case"primary":return"background-color: ".concat(e["button-primary-active-background-color"],";");case"secondary":return"background-color: ".concat(e["button-secondary-active-background-color"],";");case"tertiary":return"\n          background-color: ".concat(e["button-tertiary-active-background-color"],";\n          color: ").concat(e["button-tertiary-active-content-color"],";\n          svg path {\n            fill: ").concat(e["button-tertiary-active-content-color"],";\n          }\n      ");case"outline":return"border-color: ".concat(e["button-outline-active-border-color"],";");case"destructive":return"background-color: ".concat(e["button-destructive-active-background-color"],";");default:return null}}(t.type,t.theme)}),(function(t){return t.text||!t.icon&&!t.rightIcon?"":"small"===t.size?"padding: ".concat(t.theme["spacing-zero"]," 6px;"):"padding: ".concat(t.theme["spacing-zero"]," ").concat(t.theme["spacing-s"],";")}),(function(t){return t.theme["button-focus-border-color"]}),(function(t){return t.theme["button-focus-border-color"]}),h.Z.includeDisabledState()),Z=b().span.withConfig({displayName:"Button__StyledButtonText",componentId:"b8af3e-2"})(["visibility:",";"],(function(t){return t.isLoading&&!t.hideLoader?"hidden":"visible"}));function I(t){var e=t.autoFocus,n=t.className,o=t.fullWidth,i=t.hideLoader,u=t.icon,d=t.innerRef,s=t.isActive,b=t.isDisabled,h=t.isLoading,m=t.minWidth,f=t.onBlur,g=t.onClick,y=t.onDoubleClick,v=t.onFocus,k=t.onMouseEnter,E=t.onMouseLeave,I=t.onMouseDown,D=t.rightIcon,C=t.shortcutLabel,j=t.showIndicator,P=t.size,M=t.text,B=t.tooltip,W=t.type,T=t["data-testid"],F=t["data-click"],A=function(t){g&&g(t)},R=function(t){y&&y(t)},q=function(t){v&&v(t)},K=function(t){f&&f(t)},Y=function(t){k&&k(t)},G=function(t){E&&E(t)},V=function(t){I&&I(t)},H=Object.keys(t).filter((function(t){return t.startsWith("aria")})).reduce((function(e,n){var o=t[n];return N(N({},e),{},(0,a.Z)({},n,o))}),{});if(B||C){var J={};if(B&&l().isValidElement(B)&&B.type===p.Z){var Q=B.props;J=N({tooltip:Q.content},(0,c.Z)(Q,w))}var U="string"==typeof B?B:B.content,X="left";return C&&!b&&(X="center"),l().createElement(x,(0,r.Z)({tooltip:U,shortcut:C,placement:B.placement||"bottom",tooltipTextAlignment:X},J),b?l().createElement(O,{tabIndex:"0"},l().createElement(S,(0,r.Z)({onClick:A,onDoubleClick:R,size:P,type:W,disabled:b||h,icon:u,rightIcon:D,text:M,minWidth:m,fullWidth:o,onBlur:K,onFocus:q,onMouseEnter:Y,onMouseLeave:G,onMouseDown:V,className:n,"data-aether-id":"aether-button",ref:d,autoFocus:e,isActive:s,isLoading:h,hideLoader:i,showIndicator:j,"data-testid":T,"data-click":F},H),h&&!i&&l().createElement(_.Z,{className:"aether-button__loader"}),u&&L(u,!1),M&&l().createElement(Z,{isLoading:h,hideLoader:i,className:"aether-button__text"},M),D&&L(D,!0))):l().createElement(S,(0,r.Z)({onClick:A,onDoubleClick:R,size:P,type:W,disabled:b||h,icon:u,rightIcon:D,text:M,minWidth:m,fullWidth:o,onBlur:K,onFocus:q,onMouseEnter:Y,onMouseLeave:G,onMouseDown:V,className:n,"data-aether-id":"aether-button",ref:d,autoFocus:e,isActive:s,isLoading:h,hideLoader:i,showIndicator:j,"data-testid":T,"data-click":F},H),h&&!i&&l().createElement(_.Z,{className:"aether-button__loader"}),u&&L(u,!1),M&&l().createElement(Z,{isLoading:h,hideLoader:i,className:"aether-button__text"},M),D&&L(D,!0)))}return l().createElement(S,(0,r.Z)({onClick:A,onDoubleClick:R,size:P,type:W,disabled:b||h,icon:u,rightIcon:D,text:M,minWidth:m,fullWidth:o,onBlur:K,onFocus:q,onMouseEnter:Y,onMouseLeave:G,onMouseDown:V,className:n,"data-aether-id":"aether-button",ref:d,autoFocus:e,isActive:s,isLoading:h,hideLoader:i,showIndicator:j,"data-testid":T,"data-click":F},H),h&&!i&&l().createElement(_.Z,{className:"aether-button__loader"}),u&&L(u,h,z(P)),M&&l().createElement(Z,{isLoading:h,hideLoader:i,className:"aether-button__text"},M),D&&L(D,h,z(P)))}const D=l().forwardRef((function(t,e){return l().createElement(I,(0,r.Z)({},t,{innerRef:e}))}));I.defaultProps={autoFocus:!1,className:"",fullWidth:!1,hideLoader:!1,icon:"",innerRef:null,isActive:!1,isDisabled:!1,isLoading:!1,minWidth:"",onBlur:null,onClick:function(){},onDoubleClick:function(){},onFocus:null,onMouseEnter:null,onMouseLeave:null,onMouseDown:null,rightIcon:"",shortcutLabel:"",showIndicator:!1,size:"medium",text:"",tooltip:"",type:"secondary","data-testid":"aether-button","data-click":""},I.propTypes={autoFocus:d().bool,className:d().string,fullWidth:d().bool,hideLoader:d().bool,icon:d().node,innerRef:d().func,isActive:d().bool,isDisabled:d().bool,isLoading:d().bool,minWidth:d().string,onBlur:d().func,onClick:d().func,onDoubleClick:d().func,onFocus:d().func,onMouseEnter:d().func,onMouseLeave:d().func,onMouseDown:d().func,rightIcon:d().node,shortcutLabel:d().string,showIndicator:function(t){var e=t.type,n=t.showIndicator;return n&&"tertiary"!==e?new Error('Button: The prop "showIndicator" is only valid with the tertiary variant of the Button component'):n&&"boolean"!=typeof n?new Error('Button: Expected "showIndicator" prop to be of type boolean but got '.concat((0,o.Z)(n),".")):null},size:d().oneOf(k.Gt),text:function(t){var e=t.text,n=t.icon;return e||n?e&&"string"!=typeof e?new Error('Button: Expected "text" prop to be of type string but got '.concat((0,o.Z)(e),".")):null:new Error('Button: The props "icon" and "text" cannot be left empty at the same time. Please provide a valid value for at least one of them.')},tooltip:d().node,type:d().oneOf(k.kM),"data-testid":d().string,"data-click":d().string}},35736:(t,e,n)=>{n.d(e,{Z:()=>x});var o=n(40540),r=n.n(o),c=n(72229),a=n.n(c),i=n(25892),l=n.n(i),u=n(9460),d=n(58560),s=(0,i.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),b=l().div.withConfig({displayName:"SpinnerSmall__StyledSpinnerSmall",componentId:"zpipva-0"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";& > div{height:100%;width:4px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(t){return t.theme["size-xs"]}),(function(t){return t.theme["size-xs"]}),(function(t){return t.theme["text-size-xs"]}),(function(t){return t.theme["content-color-tertiary"]}),(function(t){return t.theme["border-radius-default"]}),s),h=l()(u.ZP).withConfig({displayName:"SpinnerSmall__StyledSmallSpinnerDescription",componentId:"zpipva-1"})(["display:inline-block;max-width:80ch;margin-left:",";word-break:break-word;"],(function(t){return t.theme["spacing-s"]}));function p(t){var e=t.description,n=t.className,o=t.type,c=t["data-testid"],a="bright"===o?"content-color-constant":"content-color-secondary";return r().createElement(d.Z,{justifyContent:"flex-start",alignItems:"center",className:n,type:o},r().createElement(b,{"data-testid":c},r().createElement("div",{className:"rect-one"}),r().createElement("div",{className:"rect-two"}),r().createElement("div",{className:"rect-three"})),e&&r().createElement(h,{color:a},e))}p.defaultProps={description:"",className:"","data-testid":"aether-spinner"},p.propTypes={description:a().string,className:a().string,type:a().oneOf(["default","bright"]).isRequired,"data-testid":a().string};var m=l().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLargeContainer",componentId:"sc-1v55r43-0"})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:transparent;svg path,svg rect{fill:",";}"],(function(t){return"bright"===t.type?t.theme["content-color-constant"]:t.theme["content-color-tertiary"]})),f=l()(u.ZP).withConfig({displayName:"SpinnerLarge__StyledSpinnerDescription",componentId:"sc-1v55r43-1"})(["display:inline-block;max-width:80ch;word-break:break-word;text-align:center;font-size:",";"],(function(t){return t.theme["text-size-l"]})),g=(0,i.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),y=l().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLarge",componentId:"sc-1v55r43-2"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";margin-bottom:",";& > div{height:100%;width:8px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(t){return t.theme["size-m"]}),(function(t){return t.theme["size-m"]}),(function(t){return t.theme["text-size-s"]}),(function(t){return t.theme["spacing-l"]}),(function(t){return t.theme["content-color-tertiary"]}),(function(t){return t.theme["border-radius-default"]}),g);function v(t){var e=t.className,n=t.description,o=t.type,c=t["data-testid"],a="bright"===o?"content-color-constant":"content-color-secondary";return r().createElement(m,{className:e,type:o},r().createElement(y,{"data-testid":c},r().createElement("div",{className:"rect-one"}),r().createElement("div",{className:"rect-two"}),r().createElement("div",{className:"rect-three"})),r().createElement(f,{color:a},n))}function x(t){var e=t.size,n=t.className,o=t.description,c=t.type,a=t["data-testid"];return"small"===e?r().createElement(p,{type:c,className:n,description:o,"data-testid":a}):"large"===e?r().createElement(v,{type:c,description:o||"Loading",className:n,"data-aether-id":"aether-spinner","data-testid":a}):null}v.defaultProps={className:"",description:"","data-testid":"aether-spinner"},v.propTypes={className:a().string,description:a().string,type:a().oneOf(["default","bright"]).isRequired,"data-testid":a().string},x.defaultProps={size:"small",className:"",description:"",type:"default","data-testid":"aether-spinner"},x.propTypes={size:a().oneOf(["small","large"]),className:a().string,type:a().oneOf(["default","bright"]),description:function(t){var e=t.description;return"string"!=typeof e?new Error("Spinner: description prop should have a string value"):e.length>80?new Error("Spinner: the description prop should not have a character length of more than 80."):null},"data-testid":a().string}},99038:(t,e,n)=>{n.d(e,{Gt:()=>r,dg:()=>c,kM:()=>o});var o=["primary","secondary","tertiary","outline","destructive"].concat(["plain","monochrome-plain","muted-plain"],["text","monochrome-text","muted-text"]),r=["small","medium"],c="Failed to Copy"},34470:(t,e,n)=>{n.d(e,{Z:()=>o});const o={includeDisabledState:function(t){return"\n  &:disabled {\n      cursor: not-allowed;\n      ".concat(t&&t,"\n  }\n  ")}}}}]);
//# sourceMappingURL=605.b369bdb20f67b7f8.js.map