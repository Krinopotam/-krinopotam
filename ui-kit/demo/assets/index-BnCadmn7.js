import{h as te,T as ne,S as se,i as J,R as oe,j as re,k as ce,l as ae,C as le}from"./defaultButtonsProps-BuloFMuY.js";import{r as l,L as X,i as q,R as g,C as Q,J as ie,aG as de,f as U,n as L,bp as fe}from"./index-BEbJdilr.js";var ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]},name:"folder-open",theme:"outlined"},pe=function(r,s){return l.createElement(X,q({},r,{ref:s,icon:ue}))},ye=l.forwardRef(pe),me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"}}]},name:"holder",theme:"outlined"},he=function(r,s){return l.createElement(X,q({},r,{ref:s,icon:me}))},xe=l.forwardRef(he);const A=4;function ge(n){const{dropPosition:r,dropLevelOffset:s,prefixCls:t,indent:o,direction:e="ltr"}=n,c=e==="ltr"?"left":"right",a=e==="ltr"?"right":"left",i={[c]:-s*o+A,[a]:0};switch(r){case-1:i.top=-3;break;case 1:i.bottom=-3;break;default:i.bottom=-3,i[c]=o+A;break}return g.createElement("div",{style:i,className:`${t}-drop-indicator`})}const W=g.forwardRef((n,r)=>{var s;const{getPrefixCls:t,direction:o,virtual:e,tree:c}=g.useContext(Q),{prefixCls:a,className:i,showIcon:f=!1,showLine:K,switcherIcon:R,switcherLoadingIcon:S,blockNode:P=!1,children:I,checkable:O=!1,selectable:C=!0,draggable:v,motion:w,style:k}=n,y=t("tree",a),D=t(),N=w??Object.assign(Object.assign({},ie(D)),{motionAppear:!1}),$=Object.assign(Object.assign({},n),{checkable:O,selectable:C,showIcon:f,motion:N,blockNode:P,showLine:!!K,dropIndicatorRender:ge}),[h,u,x]=te(y),[,b]=de(),E=b.paddingXS/2+(((s=b.Tree)===null||s===void 0?void 0:s.titleHeight)||b.controlHeightSM),H=g.useMemo(()=>{if(!v)return!1;let d={};switch(typeof v){case"function":d.nodeDraggable=v;break;case"object":d=Object.assign({},v);break}return d.icon!==!1&&(d.icon=d.icon||g.createElement(xe,null)),d},[v]),p=d=>g.createElement(se,{prefixCls:y,switcherIcon:R,switcherLoadingIcon:S,treeNodeProps:d,showLine:K});return h(g.createElement(ne,Object.assign({itemHeight:E,ref:r,virtual:e},$,{style:Object.assign(Object.assign({},c==null?void 0:c.style),k),prefixCls:y,className:U({[`${y}-icon-hide`]:!f,[`${y}-block-node`]:P,[`${y}-unselectable`]:!C,[`${y}-rtl`]:o==="rtl"},c==null?void 0:c.className,i,u,x),direction:o,checkable:O&&g.createElement("span",{className:`${y}-checkbox-inner`}),selectable:C,switcherIcon:p,draggable:H}),I))}),F=0,z=1,V=2;function _(n,r,s){const{key:t,children:o}=s;function e(c){const a=c[t],i=c[o];r(a,c)!==!1&&_(i||[],r,s)}n.forEach(e)}function ve(n){let{treeData:r,expandedKeys:s,startKey:t,endKey:o,fieldNames:e}=n;const c=[];let a=F;if(t&&t===o)return[t];if(!t||!o)return[];function i(f){return f===t||f===o}return _(r,f=>{if(a===V)return!1;if(i(f)){if(c.push(f),a===F)a=z;else if(a===z)return a=V,!1}else a===z&&c.push(f);return s.includes(f)},J(e)),c}function M(n,r,s){const t=L(r),o=[];return _(n,(e,c)=>{const a=t.indexOf(e);return a!==-1&&(o.push(c),t.splice(a,1)),!!t.length},J(s)),o}var B=function(n,r){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(s[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(s[t[o]]=n[t[o]]);return s};function be(n){const{isLeaf:r,expanded:s}=n;return r?l.createElement(oe,null):s?l.createElement(ye,null):l.createElement(fe,null)}function G(n){let{treeData:r,children:s}=n;return r||ae(s)}const Ee=(n,r)=>{var{defaultExpandAll:s,defaultExpandParent:t,defaultExpandedKeys:o}=n,e=B(n,["defaultExpandAll","defaultExpandParent","defaultExpandedKeys"]);const c=l.useRef(),a=l.useRef(),i=()=>{const{keyEntities:h}=re(G(e));let u;return s?u=Object.keys(h):t?u=ce(e.expandedKeys||o||[],h):u=e.expandedKeys||o||[],u},[f,K]=l.useState(e.selectedKeys||e.defaultSelectedKeys||[]),[R,S]=l.useState(()=>i());l.useEffect(()=>{"selectedKeys"in e&&K(e.selectedKeys)},[e.selectedKeys]),l.useEffect(()=>{"expandedKeys"in e&&S(e.expandedKeys)},[e.expandedKeys]);const P=(h,u)=>{var x;return"expandedKeys"in e||S(h),(x=e.onExpand)===null||x===void 0?void 0:x.call(e,h,u)},I=(h,u)=>{var x;const{multiple:b,fieldNames:E}=e,{node:H,nativeEvent:p}=u,{key:d=""}=H,T=G(e),j=Object.assign(Object.assign({},u),{selected:!0}),Z=(p==null?void 0:p.ctrlKey)||(p==null?void 0:p.metaKey),ee=p==null?void 0:p.shiftKey;let m;b&&Z?(m=h,c.current=d,a.current=m,j.selectedNodes=M(T,m,E)):b&&ee?(m=Array.from(new Set([].concat(L(a.current||[]),L(ve({treeData:T,expandedKeys:R,startKey:d,endKey:c.current,fieldNames:E}))))),j.selectedNodes=M(T,m,E)):(m=[d],c.current=d,a.current=m,j.selectedNodes=M(T,m,E)),(x=e.onSelect)===null||x===void 0||x.call(e,m,j),"selectedKeys"in e||K(m)},{getPrefixCls:O,direction:C}=l.useContext(Q),{prefixCls:v,className:w,showIcon:k=!0,expandAction:y="click"}=e,D=B(e,["prefixCls","className","showIcon","expandAction"]),N=O("tree",v),$=U(`${N}-directory`,{[`${N}-directory-rtl`]:C==="rtl"},w);return l.createElement(W,Object.assign({icon:be,ref:r,blockNode:!0},D,{showIcon:k,expandAction:y,prefixCls:N,className:$,expandedKeys:R,selectedKeys:f,onSelect:I,onExpand:P}))},Ke=l.forwardRef(Ee),Y=W;Y.DirectoryTree=Ke;Y.TreeNode=le;export{Y as T};