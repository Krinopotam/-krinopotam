import{c as g,C as m,V as f}from"./compact-item-Cq9_oKvy.js";import{r as u}from"./index-uubelm5h.js";import{V}from"./context-Dw4q7UZT.js";function b(n,t,e){return g({[`${n}-status-success`]:t==="success",[`${n}-status-warning`]:t==="warning",[`${n}-status-error`]:t==="error",[`${n}-status-validating`]:t==="validating",[`${n}-has-feedback`]:e})}const p=(n,t)=>t||n,x=function(n,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;var s,o;const{variant:c,[n]:r}=u.useContext(m),i=u.useContext(V),d=r==null?void 0:r.variant;let a;typeof t<"u"?a=t:e===!1?a="borderless":a=(o=(s=i??d)!==null&&s!==void 0?s:c)!==null&&o!==void 0?o:"outlined";const l=f.includes(a);return[a,l]};export{p as a,b as g,x as u};
