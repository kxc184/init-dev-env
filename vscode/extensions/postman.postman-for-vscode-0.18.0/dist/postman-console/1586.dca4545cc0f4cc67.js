"use strict";(self.webpackChunkpostman_console=self.webpackChunkpostman_console||[]).push([[1586],{1586:(t,e,o)=>{o.r(e),o.d(e,{FixedSizeGrid:()=>H,FixedSizeList:()=>A,VariableSizeGrid:()=>O,VariableSizeList:()=>k,areEqual:()=>N,shouldComponentUpdate:()=>Z});var r=o(7560),n=o(3989),i=o(4938);function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,(0,i.Z)(t,e)}var l=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function s(t,e){if(t.length!==e.length)return!1;for(var o=0;o<t.length;o++)if(!((r=t[o])===(n=e[o])||l(r)&&l(n)))return!1;var r,n;return!0}const c=function(t,e){var o;void 0===e&&(e=s);var r,n=[],i=!1;return function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return i&&o===this&&e(a,n)||(r=t.apply(this,a),i=!0,o=this,n=a),r}};var u=o(540),d=o(8283),f="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function h(t){cancelAnimationFrame(t.id)}function m(t,e){var o=f(),r={id:requestAnimationFrame((function n(){f()-o>=e?t.call(null):r.id=requestAnimationFrame(n)}))};return r}var p=-1;function g(t){if(void 0===t&&(t=!1),-1===p||t){var e=document.createElement("div"),o=e.style;o.width="50px",o.height="50px",o.overflow="scroll",document.body.appendChild(e),p=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return p}var v=null;function S(t){if(void 0===t&&(t=!1),null===v||t){var e=document.createElement("div"),o=e.style;o.width="50px",o.height="50px",o.overflow="scroll",o.direction="rtl";var r=document.createElement("div"),n=r.style;return n.width="100px",n.height="100px",e.appendChild(r),document.body.appendChild(e),e.scrollLeft>0?v="positive-descending":(e.scrollLeft=1,v=0===e.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(e),v}return v}var I=function(t){var e=t.columnIndex;return t.data,t.rowIndex+":"+e};function w(t){var e,o=t.getColumnOffset,i=t.getColumnStartIndexForOffset,l=t.getColumnStopIndexForStartIndex,s=t.getColumnWidth,d=t.getEstimatedTotalHeight,f=t.getEstimatedTotalWidth,p=t.getOffsetForColumnAndAlignment,v=t.getOffsetForRowAndAlignment,w=t.getRowHeight,x=t.getRowOffset,C=t.getRowStartIndexForOffset,_=t.getRowStopIndexForStartIndex,R=t.initInstanceProps,y=t.shouldResetStyleCacheOnItemSizeChange,T=t.validateProps;return(e=function(t){function e(e){var r;return(r=t.call(this,e)||this)._instanceProps=R(r.props,(0,n.Z)(r)),r._resetIsScrollingTimeoutId=null,r._outerRef=void 0,r.state={instance:(0,n.Z)(r),isScrolling:!1,horizontalScrollDirection:"forward",scrollLeft:"number"==typeof r.props.initialScrollLeft?r.props.initialScrollLeft:0,scrollTop:"number"==typeof r.props.initialScrollTop?r.props.initialScrollTop:0,scrollUpdateWasRequested:!1,verticalScrollDirection:"forward"},r._callOnItemsRendered=void 0,r._callOnItemsRendered=c((function(t,e,o,n,i,a,l,s){return r.props.onItemsRendered({overscanColumnStartIndex:t,overscanColumnStopIndex:e,overscanRowStartIndex:o,overscanRowStopIndex:n,visibleColumnStartIndex:i,visibleColumnStopIndex:a,visibleRowStartIndex:l,visibleRowStopIndex:s})})),r._callOnScroll=void 0,r._callOnScroll=c((function(t,e,o,n,i){return r.props.onScroll({horizontalScrollDirection:o,scrollLeft:t,scrollTop:e,verticalScrollDirection:n,scrollUpdateWasRequested:i})})),r._getItemStyle=void 0,r._getItemStyle=function(t,e){var n,i=r.props,a=i.columnWidth,l=i.direction,c=i.rowHeight,u=r._getItemStyleCache(y&&a,y&&l,y&&c),d=t+":"+e;if(u.hasOwnProperty(d))n=u[d];else{var f=o(r.props,e,r._instanceProps),h="rtl"===l;u[d]=n={position:"absolute",left:h?void 0:f,right:h?f:void 0,top:x(r.props,t,r._instanceProps),height:w(r.props,t,r._instanceProps),width:s(r.props,e,r._instanceProps)}}return n},r._getItemStyleCache=void 0,r._getItemStyleCache=c((function(t,e,o){return{}})),r._onScroll=function(t){var e=t.currentTarget,o=e.clientHeight,n=e.clientWidth,i=e.scrollLeft,a=e.scrollTop,l=e.scrollHeight,s=e.scrollWidth;r.setState((function(t){if(t.scrollLeft===i&&t.scrollTop===a)return null;var e=r.props.direction,c=i;if("rtl"===e)switch(S()){case"negative":c=-i;break;case"positive-descending":c=s-n-i}c=Math.max(0,Math.min(c,s-n));var u=Math.max(0,Math.min(a,l-o));return{isScrolling:!0,horizontalScrollDirection:t.scrollLeft<i?"forward":"backward",scrollLeft:c,scrollTop:u,verticalScrollDirection:t.scrollTop<a?"forward":"backward",scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._outerRefSetter=function(t){var e=r.props.outerRef;r._outerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},r._resetIsScrollingDebounced=function(){null!==r._resetIsScrollingTimeoutId&&h(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=m(r._resetIsScrolling,150)},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},(function(){r._getItemStyleCache(-1)}))},r}a(e,t),e.getDerivedStateFromProps=function(t,e){return M(t,e),T(t),null};var z=e.prototype;return z.scrollTo=function(t){var e=t.scrollLeft,o=t.scrollTop;void 0!==e&&(e=Math.max(0,e)),void 0!==o&&(o=Math.max(0,o)),this.setState((function(t){return void 0===e&&(e=t.scrollLeft),void 0===o&&(o=t.scrollTop),t.scrollLeft===e&&t.scrollTop===o?null:{horizontalScrollDirection:t.scrollLeft<e?"forward":"backward",scrollLeft:e,scrollTop:o,scrollUpdateWasRequested:!0,verticalScrollDirection:t.scrollTop<o?"forward":"backward"}}),this._resetIsScrollingDebounced)},z.scrollToItem=function(t){var e=t.align,o=void 0===e?"auto":e,r=t.columnIndex,n=t.rowIndex,i=this.props,a=i.columnCount,l=i.height,s=i.rowCount,c=i.width,u=this.state,h=u.scrollLeft,m=u.scrollTop,S=g();void 0!==r&&(r=Math.max(0,Math.min(r,a-1))),void 0!==n&&(n=Math.max(0,Math.min(n,s-1)));var I=d(this.props,this._instanceProps),w=f(this.props,this._instanceProps)>c?S:0,M=I>l?S:0;this.scrollTo({scrollLeft:void 0!==r?p(this.props,r,o,h,this._instanceProps,M):h,scrollTop:void 0!==n?v(this.props,n,o,m,this._instanceProps,w):m})},z.componentDidMount=function(){var t=this.props,e=t.initialScrollLeft,o=t.initialScrollTop;if(null!=this._outerRef){var r=this._outerRef;"number"==typeof e&&(r.scrollLeft=e),"number"==typeof o&&(r.scrollTop=o)}this._callPropsCallbacks()},z.componentDidUpdate=function(){var t=this.props.direction,e=this.state,o=e.scrollLeft,r=e.scrollTop;if(e.scrollUpdateWasRequested&&null!=this._outerRef){var n=this._outerRef;if("rtl"===t)switch(S()){case"negative":n.scrollLeft=-o;break;case"positive-ascending":n.scrollLeft=o;break;default:var i=n.clientWidth,a=n.scrollWidth;n.scrollLeft=a-i-o}else n.scrollLeft=Math.max(0,o);n.scrollTop=Math.max(0,r)}this._callPropsCallbacks()},z.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&h(this._resetIsScrollingTimeoutId)},z.render=function(){var t=this.props,e=t.children,o=t.className,n=t.columnCount,i=t.direction,a=t.height,l=t.innerRef,s=t.innerElementType,c=t.innerTagName,h=t.itemData,m=t.itemKey,p=void 0===m?I:m,g=t.outerElementType,v=t.outerTagName,S=t.rowCount,w=t.style,M=t.useIsScrolling,x=t.width,C=this.state.isScrolling,_=this._getHorizontalRangeToRender(),R=_[0],y=_[1],T=this._getVerticalRangeToRender(),z=T[0],O=T[1],b=[];if(n>0&&S)for(var P=z;P<=O;P++)for(var W=R;W<=y;W++)b.push((0,u.createElement)(e,{columnIndex:W,data:h,isScrolling:M?C:void 0,key:p({columnIndex:W,data:h,rowIndex:P}),rowIndex:P,style:this._getItemStyle(P,W)}));var D=d(this.props,this._instanceProps),F=f(this.props,this._instanceProps);return(0,u.createElement)(g||v||"div",{className:o,onScroll:this._onScroll,ref:this._outerRefSetter,style:(0,r.Z)({position:"relative",height:a,width:x,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:i},w)},(0,u.createElement)(s||c||"div",{children:b,ref:l,style:{height:D,pointerEvents:C?"none":void 0,width:F}}))},z._callPropsCallbacks=function(){var t=this.props,e=t.columnCount,o=t.onItemsRendered,r=t.onScroll,n=t.rowCount;if("function"==typeof o&&e>0&&n>0){var i=this._getHorizontalRangeToRender(),a=i[0],l=i[1],s=i[2],c=i[3],u=this._getVerticalRangeToRender(),d=u[0],f=u[1],h=u[2],m=u[3];this._callOnItemsRendered(a,l,d,f,s,c,h,m)}if("function"==typeof r){var p=this.state,g=p.horizontalScrollDirection,v=p.scrollLeft,S=p.scrollTop,I=p.scrollUpdateWasRequested,w=p.verticalScrollDirection;this._callOnScroll(v,S,g,w,I)}},z._getHorizontalRangeToRender=function(){var t=this.props,e=t.columnCount,o=t.overscanColumnCount,r=t.overscanColumnsCount,n=t.overscanCount,a=t.rowCount,s=this.state,c=s.horizontalScrollDirection,u=s.isScrolling,d=s.scrollLeft,f=o||r||n||1;if(0===e||0===a)return[0,0,0,0];var h=i(this.props,d,this._instanceProps),m=l(this.props,h,d,this._instanceProps),p=u&&"backward"!==c?1:Math.max(1,f),g=u&&"forward"!==c?1:Math.max(1,f);return[Math.max(0,h-p),Math.max(0,Math.min(e-1,m+g)),h,m]},z._getVerticalRangeToRender=function(){var t=this.props,e=t.columnCount,o=t.overscanCount,r=t.overscanRowCount,n=t.overscanRowsCount,i=t.rowCount,a=this.state,l=a.isScrolling,s=a.verticalScrollDirection,c=a.scrollTop,u=r||n||o||1;if(0===e||0===i)return[0,0,0,0];var d=C(this.props,c,this._instanceProps),f=_(this.props,d,c,this._instanceProps),h=l&&"backward"!==s?1:Math.max(1,u),m=l&&"forward"!==s?1:Math.max(1,u);return[Math.max(0,d-h),Math.max(0,Math.min(i-1,f+m)),d,f]},e}(u.PureComponent)).defaultProps={direction:"ltr",itemData:void 0,useIsScrolling:!1},e}var M=function(t,e){t.children,t.direction,t.height,t.innerTagName,t.outerTagName,t.overscanColumnsCount,t.overscanCount,t.overscanRowsCount,t.width,e.instance},x=function(t,e){var o=t.rowCount,r=e.rowMetadataMap,n=e.estimatedRowHeight,i=e.lastMeasuredRowIndex,a=0;if(i>=o&&(i=o-1),i>=0){var l=r[i];a=l.offset+l.size}return a+(o-i-1)*n},C=function(t,e){var o=t.columnCount,r=e.columnMetadataMap,n=e.estimatedColumnWidth,i=e.lastMeasuredColumnIndex,a=0;if(i>=o&&(i=o-1),i>=0){var l=r[i];a=l.offset+l.size}return a+(o-i-1)*n},_=function(t,e,o,r){var n,i,a;if("column"===t?(n=r.columnMetadataMap,i=e.columnWidth,a=r.lastMeasuredColumnIndex):(n=r.rowMetadataMap,i=e.rowHeight,a=r.lastMeasuredRowIndex),o>a){var l=0;if(a>=0){var s=n[a];l=s.offset+s.size}for(var c=a+1;c<=o;c++){var u=i(c);n[c]={offset:l,size:u},l+=u}"column"===t?r.lastMeasuredColumnIndex=o:r.lastMeasuredRowIndex=o}return n[o]},R=function(t,e,o,r){var n,i;return"column"===t?(n=o.columnMetadataMap,i=o.lastMeasuredColumnIndex):(n=o.rowMetadataMap,i=o.lastMeasuredRowIndex),(i>0?n[i].offset:0)>=r?y(t,e,o,i,0,r):T(t,e,o,Math.max(0,i),r)},y=function(t,e,o,r,n,i){for(;n<=r;){var a=n+Math.floor((r-n)/2),l=_(t,e,a,o).offset;if(l===i)return a;l<i?n=a+1:l>i&&(r=a-1)}return n>0?n-1:0},T=function(t,e,o,r,n){for(var i="column"===t?e.columnCount:e.rowCount,a=1;r<i&&_(t,e,r,o).offset<n;)r+=a,a*=2;return y(t,e,o,Math.min(r,i-1),Math.floor(r/2),n)},z=function(t,e,o,r,n,i,a){var l="column"===t?e.width:e.height,s=_(t,e,o,i),c="column"===t?C(e,i):x(e,i),u=Math.max(0,Math.min(c-l,s.offset)),d=Math.max(0,s.offset-l+a+s.size);switch("smart"===r&&(r=n>=d-l&&n<=u+l?"auto":"center"),r){case"start":return u;case"end":return d;case"center":return Math.round(d+(u-d)/2);default:return n>=d&&n<=u?n:d>u||n<d?d:u}},O=w({getColumnOffset:function(t,e,o){return _("column",t,e,o).offset},getColumnStartIndexForOffset:function(t,e,o){return R("column",t,o,e)},getColumnStopIndexForStartIndex:function(t,e,o,r){for(var n=t.columnCount,i=t.width,a=_("column",t,e,r),l=o+i,s=a.offset+a.size,c=e;c<n-1&&s<l;)c++,s+=_("column",t,c,r).size;return c},getColumnWidth:function(t,e,o){return o.columnMetadataMap[e].size},getEstimatedTotalHeight:x,getEstimatedTotalWidth:C,getOffsetForColumnAndAlignment:function(t,e,o,r,n,i){return z("column",t,e,o,r,n,i)},getOffsetForRowAndAlignment:function(t,e,o,r,n,i){return z("row",t,e,o,r,n,i)},getRowOffset:function(t,e,o){return _("row",t,e,o).offset},getRowHeight:function(t,e,o){return o.rowMetadataMap[e].size},getRowStartIndexForOffset:function(t,e,o){return R("row",t,o,e)},getRowStopIndexForStartIndex:function(t,e,o,r){for(var n=t.rowCount,i=t.height,a=_("row",t,e,r),l=o+i,s=a.offset+a.size,c=e;c<n-1&&s<l;)c++,s+=_("row",t,c,r).size;return c},initInstanceProps:function(t,e){var o=t,r={columnMetadataMap:{},estimatedColumnWidth:o.estimatedColumnWidth||50,estimatedRowHeight:o.estimatedRowHeight||50,lastMeasuredColumnIndex:-1,lastMeasuredRowIndex:-1,rowMetadataMap:{}};return e.resetAfterColumnIndex=function(t,o){void 0===o&&(o=!0),e.resetAfterIndices({columnIndex:t,shouldForceUpdate:o})},e.resetAfterRowIndex=function(t,o){void 0===o&&(o=!0),e.resetAfterIndices({rowIndex:t,shouldForceUpdate:o})},e.resetAfterIndices=function(t){var o=t.columnIndex,n=t.rowIndex,i=t.shouldForceUpdate,a=void 0===i||i;"number"==typeof o&&(r.lastMeasuredColumnIndex=Math.min(r.lastMeasuredColumnIndex,o-1)),"number"==typeof n&&(r.lastMeasuredRowIndex=Math.min(r.lastMeasuredRowIndex,n-1)),e._getItemStyleCache(-1),a&&e.forceUpdate()},r},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.columnWidth,t.rowHeight}}),b=function(t,e){return t};function P(t){var e,o=t.getItemOffset,i=t.getEstimatedTotalSize,l=t.getItemSize,s=t.getOffsetForIndexAndAlignment,d=t.getStartIndexForOffset,f=t.getStopIndexForStartIndex,p=t.initInstanceProps,v=t.shouldResetStyleCacheOnItemSizeChange,I=t.validateProps;return e=function(t){function e(e){var r;return(r=t.call(this,e)||this)._instanceProps=p(r.props,(0,n.Z)(r)),r._outerRef=void 0,r._resetIsScrollingTimeoutId=null,r.state={instance:(0,n.Z)(r),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof r.props.initialScrollOffset?r.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},r._callOnItemsRendered=void 0,r._callOnItemsRendered=c((function(t,e,o,n){return r.props.onItemsRendered({overscanStartIndex:t,overscanStopIndex:e,visibleStartIndex:o,visibleStopIndex:n})})),r._callOnScroll=void 0,r._callOnScroll=c((function(t,e,o){return r.props.onScroll({scrollDirection:t,scrollOffset:e,scrollUpdateWasRequested:o})})),r._getItemStyle=void 0,r._getItemStyle=function(t){var e,n=r.props,i=n.direction,a=n.itemSize,s=n.layout,c=r._getItemStyleCache(v&&a,v&&s,v&&i);if(c.hasOwnProperty(t))e=c[t];else{var u=o(r.props,t,r._instanceProps),d=l(r.props,t,r._instanceProps),f="horizontal"===i||"horizontal"===s,h="rtl"===i,m=f?u:0;c[t]=e={position:"absolute",left:h?void 0:m,right:h?m:void 0,top:f?0:u,height:f?"100%":d,width:f?d:"100%"}}return e},r._getItemStyleCache=void 0,r._getItemStyleCache=c((function(t,e,o){return{}})),r._onScrollHorizontal=function(t){var e=t.currentTarget,o=e.clientWidth,n=e.scrollLeft,i=e.scrollWidth;r.setState((function(t){if(t.scrollOffset===n)return null;var e=r.props.direction,a=n;if("rtl"===e)switch(S()){case"negative":a=-n;break;case"positive-descending":a=i-o-n}return a=Math.max(0,Math.min(a,i-o)),{isScrolling:!0,scrollDirection:t.scrollOffset<a?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._onScrollVertical=function(t){var e=t.currentTarget,o=e.clientHeight,n=e.scrollHeight,i=e.scrollTop;r.setState((function(t){if(t.scrollOffset===i)return null;var e=Math.max(0,Math.min(i,n-o));return{isScrolling:!0,scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._outerRefSetter=function(t){var e=r.props.outerRef;r._outerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},r._resetIsScrollingDebounced=function(){null!==r._resetIsScrollingTimeoutId&&h(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=m(r._resetIsScrolling,150)},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},(function(){r._getItemStyleCache(-1,null)}))},r}a(e,t),e.getDerivedStateFromProps=function(t,e){return W(t,e),I(t),null};var w=e.prototype;return w.scrollTo=function(t){t=Math.max(0,t),this.setState((function(e){return e.scrollOffset===t?null:{scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},w.scrollToItem=function(t,e){void 0===e&&(e="auto");var o=this.props,r=o.itemCount,n=o.layout,i=this.state.scrollOffset;t=Math.max(0,Math.min(t,r-1));var a=0;if(this._outerRef){var l=this._outerRef;a="vertical"===n?l.scrollWidth>l.clientWidth?g():0:l.scrollHeight>l.clientHeight?g():0}this.scrollTo(s(this.props,t,e,i,this._instanceProps,a))},w.componentDidMount=function(){var t=this.props,e=t.direction,o=t.initialScrollOffset,r=t.layout;if("number"==typeof o&&null!=this._outerRef){var n=this._outerRef;"horizontal"===e||"horizontal"===r?n.scrollLeft=o:n.scrollTop=o}this._callPropsCallbacks()},w.componentDidUpdate=function(){var t=this.props,e=t.direction,o=t.layout,r=this.state,n=r.scrollOffset;if(r.scrollUpdateWasRequested&&null!=this._outerRef){var i=this._outerRef;if("horizontal"===e||"horizontal"===o)if("rtl"===e)switch(S()){case"negative":i.scrollLeft=-n;break;case"positive-ascending":i.scrollLeft=n;break;default:var a=i.clientWidth,l=i.scrollWidth;i.scrollLeft=l-a-n}else i.scrollLeft=n;else i.scrollTop=n}this._callPropsCallbacks()},w.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&h(this._resetIsScrollingTimeoutId)},w.render=function(){var t=this.props,e=t.children,o=t.className,n=t.direction,a=t.height,l=t.innerRef,s=t.innerElementType,c=t.innerTagName,d=t.itemCount,f=t.itemData,h=t.itemKey,m=void 0===h?b:h,p=t.layout,g=t.outerElementType,v=t.outerTagName,S=t.style,I=t.useIsScrolling,w=t.width,M=this.state.isScrolling,x="horizontal"===n||"horizontal"===p,C=x?this._onScrollHorizontal:this._onScrollVertical,_=this._getRangeToRender(),R=_[0],y=_[1],T=[];if(d>0)for(var z=R;z<=y;z++)T.push((0,u.createElement)(e,{data:f,key:m(z,f),index:z,isScrolling:I?M:void 0,style:this._getItemStyle(z)}));var O=i(this.props,this._instanceProps);return(0,u.createElement)(g||v||"div",{className:o,onScroll:C,ref:this._outerRefSetter,style:(0,r.Z)({position:"relative",height:a,width:w,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:n},S)},(0,u.createElement)(s||c||"div",{children:T,ref:l,style:{height:x?"100%":O,pointerEvents:M?"none":void 0,width:x?O:"100%"}}))},w._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var t=this._getRangeToRender(),e=t[0],o=t[1],r=t[2],n=t[3];this._callOnItemsRendered(e,o,r,n)}if("function"==typeof this.props.onScroll){var i=this.state,a=i.scrollDirection,l=i.scrollOffset,s=i.scrollUpdateWasRequested;this._callOnScroll(a,l,s)}},w._getRangeToRender=function(){var t=this.props,e=t.itemCount,o=t.overscanCount,r=this.state,n=r.isScrolling,i=r.scrollDirection,a=r.scrollOffset;if(0===e)return[0,0,0,0];var l=d(this.props,a,this._instanceProps),s=f(this.props,l,a,this._instanceProps),c=n&&"backward"!==i?1:Math.max(1,o),u=n&&"forward"!==i?1:Math.max(1,o);return[Math.max(0,l-c),Math.max(0,Math.min(e-1,s+u)),l,s]},e}(u.PureComponent),e.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},e}var W=function(t,e){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,e.instance},D=function(t,e,o){var r=t.itemSize,n=o.itemMetadataMap,i=o.lastMeasuredIndex;if(e>i){var a=0;if(i>=0){var l=n[i];a=l.offset+l.size}for(var s=i+1;s<=e;s++){var c=r(s);n[s]={offset:a,size:c},a+=c}o.lastMeasuredIndex=e}return n[e]},F=function(t,e,o,r,n){for(;r<=o;){var i=r+Math.floor((o-r)/2),a=D(t,i,e).offset;if(a===n)return i;a<n?r=i+1:a>n&&(o=i-1)}return r>0?r-1:0},L=function(t,e){var o=t.itemCount,r=e.itemMetadataMap,n=e.estimatedItemSize,i=e.lastMeasuredIndex,a=0;if(i>=o&&(i=o-1),i>=0){var l=r[i];a=l.offset+l.size}return a+(o-i-1)*n},k=P({getItemOffset:function(t,e,o){return D(t,e,o).offset},getItemSize:function(t,e,o){return o.itemMetadataMap[e].size},getEstimatedTotalSize:L,getOffsetForIndexAndAlignment:function(t,e,o,r,n,i){var a=t.direction,l=t.height,s=t.layout,c=t.width,u="horizontal"===a||"horizontal"===s?c:l,d=D(t,e,n),f=L(t,n),h=Math.max(0,Math.min(f-u,d.offset)),m=Math.max(0,d.offset-u+d.size+i);switch("smart"===o&&(o=r>=m-u&&r<=h+u?"auto":"center"),o){case"start":return h;case"end":return m;case"center":return Math.round(m+(h-m)/2);default:return r>=m&&r<=h?r:r<m?m:h}},getStartIndexForOffset:function(t,e,o){return function(t,e,o){var r=e.itemMetadataMap,n=e.lastMeasuredIndex;return(n>0?r[n].offset:0)>=o?F(t,e,n,0,o):function(t,e,o,r){for(var n=t.itemCount,i=1;o<n&&D(t,o,e).offset<r;)o+=i,i*=2;return F(t,e,Math.min(o,n-1),Math.floor(o/2),r)}(t,e,Math.max(0,n),o)}(t,o,e)},getStopIndexForStartIndex:function(t,e,o,r){for(var n=t.direction,i=t.height,a=t.itemCount,l=t.layout,s=t.width,c="horizontal"===n||"horizontal"===l?s:i,u=D(t,e,r),d=o+c,f=u.offset+u.size,h=e;h<a-1&&f<d;)h++,f+=D(t,h,r).size;return h},initInstanceProps:function(t,e){var o={itemMetadataMap:{},estimatedItemSize:t.estimatedItemSize||50,lastMeasuredIndex:-1};return e.resetAfterIndex=function(t,r){void 0===r&&(r=!0),o.lastMeasuredIndex=Math.min(o.lastMeasuredIndex,t-1),e._getItemStyleCache(-1),r&&e.forceUpdate()},o},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.itemSize}}),H=w({getColumnOffset:function(t,e){return e*t.columnWidth},getColumnWidth:function(t,e){return t.columnWidth},getRowOffset:function(t,e){return e*t.rowHeight},getRowHeight:function(t,e){return t.rowHeight},getEstimatedTotalHeight:function(t){var e=t.rowCount;return t.rowHeight*e},getEstimatedTotalWidth:function(t){var e=t.columnCount;return t.columnWidth*e},getOffsetForColumnAndAlignment:function(t,e,o,r,n,i){var a=t.columnCount,l=t.columnWidth,s=t.width,c=Math.max(0,a*l-s),u=Math.min(c,e*l),d=Math.max(0,e*l-s+i+l);switch("smart"===o&&(o=r>=d-s&&r<=u+s?"auto":"center"),o){case"start":return u;case"end":return d;case"center":var f=Math.round(d+(u-d)/2);return f<Math.ceil(s/2)?0:f>c+Math.floor(s/2)?c:f;default:return r>=d&&r<=u?r:d>u||r<d?d:u}},getOffsetForRowAndAlignment:function(t,e,o,r,n,i){var a=t.rowHeight,l=t.height,s=t.rowCount,c=Math.max(0,s*a-l),u=Math.min(c,e*a),d=Math.max(0,e*a-l+i+a);switch("smart"===o&&(o=r>=d-l&&r<=u+l?"auto":"center"),o){case"start":return u;case"end":return d;case"center":var f=Math.round(d+(u-d)/2);return f<Math.ceil(l/2)?0:f>c+Math.floor(l/2)?c:f;default:return r>=d&&r<=u?r:d>u||r<d?d:u}},getColumnStartIndexForOffset:function(t,e){var o=t.columnWidth,r=t.columnCount;return Math.max(0,Math.min(r-1,Math.floor(e/o)))},getColumnStopIndexForStartIndex:function(t,e,o){var r=t.columnWidth,n=t.columnCount,i=t.width,a=e*r,l=Math.ceil((i+o-a)/r);return Math.max(0,Math.min(n-1,e+l-1))},getRowStartIndexForOffset:function(t,e){var o=t.rowHeight,r=t.rowCount;return Math.max(0,Math.min(r-1,Math.floor(e/o)))},getRowStopIndexForStartIndex:function(t,e,o){var r=t.rowHeight,n=t.rowCount,i=t.height,a=e*r,l=Math.ceil((i+o-a)/r);return Math.max(0,Math.min(n-1,e+l-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.columnWidth,t.rowHeight}}),A=P({getItemOffset:function(t,e){return e*t.itemSize},getItemSize:function(t,e){return t.itemSize},getEstimatedTotalSize:function(t){var e=t.itemCount;return t.itemSize*e},getOffsetForIndexAndAlignment:function(t,e,o,r,n,i){var a=t.direction,l=t.height,s=t.itemCount,c=t.itemSize,u=t.layout,d=t.width,f="horizontal"===a||"horizontal"===u?d:l,h=Math.max(0,s*c-f),m=Math.min(h,e*c),p=Math.max(0,e*c-f+c+i);switch("smart"===o&&(o=r>=p-f&&r<=m+f?"auto":"center"),o){case"start":return m;case"end":return p;case"center":var g=Math.round(p+(m-p)/2);return g<Math.ceil(f/2)?0:g>h+Math.floor(f/2)?h:g;default:return r>=p&&r<=m?r:r<p?p:m}},getStartIndexForOffset:function(t,e){var o=t.itemCount,r=t.itemSize;return Math.max(0,Math.min(o-1,Math.floor(e/r)))},getStopIndexForStartIndex:function(t,e,o){var r=t.direction,n=t.height,i=t.itemCount,a=t.itemSize,l=t.layout,s=t.width,c=e*a,u="horizontal"===r||"horizontal"===l?s:n,d=Math.ceil((u+o-c)/a);return Math.max(0,Math.min(i-1,e+d-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});function E(t,e){for(var o in t)if(!(o in e))return!0;for(var r in e)if(t[r]!==e[r])return!0;return!1}var U=["style"],q=["style"];function N(t,e){var o=t.style,r=(0,d.Z)(t,U),n=e.style,i=(0,d.Z)(e,q);return!E(o,n)&&!E(r,i)}function Z(t,e){return!N(this.props,t)||E(this.state,e)}}}]);
//# sourceMappingURL=1586.dca4545cc0f4cc67.js.map