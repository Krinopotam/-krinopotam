import{ad as e,j as t,r as n,c as i}from"./index-CQvKQJ1H.js";import{M as o,a as r,H as s}from"./messageBox-DWQe614-.js";import{t as l}from"./buttonsRow-Tlbvi7M1.js";const{useToken:a}=e,d=({onMouseResize:e,resizable:n,children:i,style:o,colorType:r})=>{const{token:s}=a(),l=h(s,r);return(()=>{const e=navigator.userAgent||navigator.vendor||window.opera;return new RegExp(["android","webos","iphone","ipad","ipod","blackberry","ieMobile","opera mini","avantgo","bada","blazer","elaine","fennec","hipTop","iris","kindle","lge","maemo","midp","mmp","symbian","pocket","webOs","nexus","compal"].join("|"),"i").test(e)})()&&(n=!1),t.jsxs(t.Fragment,{children:[i?t.jsx("div",{style:{borderTopWidth:1,borderTopStyle:"solid",borderTopColor:l,...o},children:i}):null,n?t.jsx(u,{onMouseDown:e}):null]})},u=e=>t.jsx("div",{className:"resize-handle",...e,children:t.jsx("div",{className:"resize-handle-inner"})}),h=(e,t)=>{let n=e.colorFillSecondary;return"info"===t?n=e.colorInfoHover:"success"===t?n=e.colorSuccessHover:"warning"===t?n=e.colorWarningHover:"danger"===t&&(n=e.colorErrorHover),n},c=(e,t,n)=>{if(!t)return 0;if("number"==typeof t)return t;const i=RegExp(/^(\d+(?:\.\d+)?)(px|%)$/).exec(t);if(!i)return 0;const o=parseFloat(i[1]),r=i[2];if("px"===r)return o;if("%"===r&&(null==n?void 0:n.parentElement)){return o/100*n.parentElement.getBoundingClientRect()[e]}return 0},m=e=>{const{resizable:a=!0,isDraggable:u=!0,colorType:h,headerIcon:m,maxHeight:x,minHeight:b,minWidth:y,maxWidth:H,...R}=e,C=n.useRef({}),W=n.useRef(null);n.useEffect((()=>{R.open&&(W.current=document.activeElement)}),[R.open]);const E=n.useCallback((e=>{var t,n,i,o;e?null==(n=null==(t=C.current)?void 0:t.onParentComponentRendered)||n.call(t):null==(i=W.current)||i.focus(),null==(o=R.onAfterOpenChange)||o.call(R,e)}),[R]),[j,M]=n.useState({width:R.width??void 0,height:R.height??void 0}),T=((e,t,i)=>{const[o,r]=n.useState(!1),[s,l]=n.useState({initWidth:0,initHeight:0,mouseDownX:0,mouseDownY:0,element:void 0}),a=n.useCallback((e=>{if(e.preventDefault(),!(e.target instanceof HTMLElement))return;const n=e.target.closest(".custom-antd-modal .ant-modal");if(!n)return;const i=c("width",t.width,n)||n.getBoundingClientRect().width,o=c("height",t.height,n)||n.getBoundingClientRect().height;l({initWidth:i,initHeight:o,mouseDownX:e.clientX,mouseDownY:e.clientY,element:n}),r(!0)}),[t.height,t.width]);return n.useEffect((()=>{const t=t=>{if(o){const{initWidth:n,mouseDownX:o,initHeight:r,mouseDownY:l}=s,a=n+2*(t.clientX-o),d=r+(t.clientY-l)*(e.centered?2:1);return i({width:a,height:d})}};return window.addEventListener("mousemove",t,{passive:!0}),()=>window.removeEventListener("mousemove",t)}),[s,o,i,e.centered]),n.useEffect((()=>{const e=()=>{var e;if(o){const t=s.element,n=null==(e=s.element)?void 0:e.querySelector(".custom-antd-modal .ant-modal-content");if(!t||!n)return;let o=t.getBoundingClientRect().width,r=t.getBoundingClientRect().height;const l=n.getBoundingClientRect().width,a=n.getBoundingClientRect().height;o<l&&(o=l),r<a&&(r=a),i({width:o,height:r})}r(!1)};return window.addEventListener("mouseup",e),()=>window.removeEventListener("mouseup",e)}),[o,s.element,r,i]),a})(R,j,M),D=g({props:R,height:j.height,minWidth:y,maxWidth:H,minHeight:b,maxHeight:x,baseMinWidth:250,baseMinHeight:130}),S=w(R,24),z=p(R,24),B=v(R),k=f(R,24),[$]=n.useState("draggable-"+l());return t.jsx(o,{...R,width:j.width,height:j.height,style:D,styles:{body:z,footer:{margin:0},content:B},rootClassName:i("custom-antd-modal",R.rootClassName),modalRender:e=>r(e,$,C,u),title:t.jsx(s,{draggableId:$,icon:m,title:R.title,colorType:h,style:S}),footer:t.jsx(d,{onMouseResize:T,resizable:a,style:k,colorType:h,children:R.footer}),afterOpenChange:E})},g=e=>({height:e.height,minWidth:e.minWidth??e.baseMinWidth,maxWidth:e.maxWidth,minHeight:e.minHeight??e.baseMinHeight,maxHeight:e.maxHeight,...e.props.style}),p=(e,t)=>{var n;return{padding:`0 ${t}px 0 ${t}px`,...null==(n=e.styles)?void 0:n.body,overflowY:e.notScrollable?"hidden":"auto"}},v=e=>{var t;return{...null==(t=e.styles)?void 0:t.content}},f=(e,t)=>{var n;return{padding:`20px ${t}px 20px ${t}px`,...null==(n=e.styles)?void 0:n.footer}},w=(e,t)=>{var n;return{padding:`3px ${t+(!1===e.closable||null===e.closeIcon?0:14)}px 3px ${t}px`,...null==(n=e.styles)?void 0:n.header}};export{m as M};
