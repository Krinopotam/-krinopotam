import{R as r}from"./index-uubelm5h.js";import{R as b}from"./CloseOutlined-DudQdYPk.js";import{p as C}from"./pickAttrs-BK90issH.js";function O(o){if(o)return{closable:o.closable,closeIcon:o.closeIcon}}function m(o){const{closable:l,closeIcon:n}=o||{};return r.useMemo(()=>{if(!l&&(l===!1||n===!1||n===null))return!1;if(l===void 0&&n===void 0)return null;let e={closeIcon:typeof n!="boolean"&&n!==null?n:void 0};return l&&typeof l=="object"&&(e=Object.assign(Object.assign({},e),l)),e},[l,n])}function g(){const o={};for(var l=arguments.length,n=new Array(l),e=0;e<l;e++)n[e]=arguments[e];return n.forEach(s=>{s&&Object.keys(s).forEach(c=>{s[c]!==void 0&&(o[c]=s[c])})}),o}const p={};function R(o,l){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:p;const e=m(o),s=m(l),c=typeof e!="boolean"?!!(e!=null&&e.disabled):!1,a=r.useMemo(()=>Object.assign({closeIcon:r.createElement(b,null)},n),[n]),f=r.useMemo(()=>e===!1?!1:e?g(a,s,e):s===!1?!1:s?g(a,s):a.closable?a:!1,[e,s,a]);return r.useMemo(()=>{if(f===!1)return[!1,null,c];const{closeIconRender:u}=a,{closeIcon:d}=f;let t=d;if(t!=null){u&&(t=u(d));const i=C(f,!0);Object.keys(i).length&&(t=r.isValidElement(t)?r.cloneElement(t,i):r.createElement("span",Object.assign({},i),t))}return[!0,t,c]},[f,a])}export{O as p,R as u};
