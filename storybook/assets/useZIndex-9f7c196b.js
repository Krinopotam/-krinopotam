import{I as Z,J as K,L as C,N as $,G as f,a as A,H as I,O as F,P,_ as G,u as J}from"./useToken-268f632d.js";import{r as o,a as Y,b as V,R as B}from"./index-5819ae2c.js";import{v as X,x as ee}from"./compact-item-e0eb0d02.js";var $e=function(){function e(t,n){K(this,e),C(this,"name",void 0),C(this,"style",void 0),C(this,"_keyframe",!0),this.name=t,this.style=n}return Z(e,[{key:"getName",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return n?"".concat(n,"-").concat(this.name):this.name}}]),e}(),T=o.createContext(null),k=[];function te(e,t){var n=o.useState(function(){if(!$())return null;var u=document.createElement("div");return u}),a=f(n,1),i=a[0],r=o.useRef(!1),c=o.useContext(T),s=o.useState(k),m=f(s,2),l=m[0],h=m[1],y=c||(r.current?void 0:function(u){h(function(d){var S=[u].concat(A(d));return S})});function v(){i.parentElement||document.body.appendChild(i),r.current=!0}function p(){var u;(u=i.parentElement)===null||u===void 0||u.removeChild(i),r.current=!1}return I(function(){return e?c?c(v):v():p(),p},[e]),I(function(){l.length&&(l.forEach(function(u){return u()}),h(k))},[l]),[i,y]}var x;function ne(e){if(typeof document>"u")return 0;if(e||x===void 0){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var n=document.createElement("div"),a=n.style;a.position="absolute",a.top="0",a.left="0",a.pointerEvents="none",a.visibility="hidden",a.width="200px",a.height="150px",a.overflow="hidden",n.appendChild(t),document.body.appendChild(n);var i=t.offsetWidth;n.style.overflow="scroll";var r=t.offsetWidth;i===r&&(r=n.clientWidth),document.body.removeChild(n),x=i-r}return x}function D(e){var t=e.match(/^(.*)px$/),n=Number(t==null?void 0:t[1]);return Number.isNaN(n)?ne():n}function ae(e){if(typeof document>"u"||!e||!(e instanceof Element))return{width:0,height:0};var t=getComputedStyle(e,"::-webkit-scrollbar"),n=t.width,a=t.height;return{width:D(n),height:D(a)}}function re(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var ie="rc-util-locker-".concat(Date.now()),L=0;function oe(e){var t=!!e,n=o.useState(function(){return L+=1,"".concat(ie,"_").concat(L)}),a=f(n,1),i=a[0];I(function(){if(t){var r=ae(document.body).width,c=re();F(`
html body {
  overflow-y: hidden;
  `.concat(c?"width: calc(100% - ".concat(r,"px);"):"",`
}`),i)}else P(i);return function(){P(i)}},[t,i])}var N=!1;function ue(e){return typeof e=="boolean"&&(N=e),N}var O=function(t){return t===!1?!1:!$()||!t?null:typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t},ye=o.forwardRef(function(e,t){var n=e.open,a=e.autoLock,i=e.getContainer;e.debug;var r=e.autoDestroy,c=r===void 0?!0:r,s=e.children,m=o.useState(n),l=f(m,2),h=l[0],y=l[1],v=h||n;o.useEffect(function(){(c||n)&&y(n)},[n,c]);var p=o.useState(function(){return O(i)}),u=f(p,2),d=u[0],S=u[1];o.useEffect(function(){var b=O(i);S(b??null)});var q=te(v&&!d),R=f(q,2),E=R[0],W=R[1],g=d??E;oe(a&&n&&$()&&(g===E||g===document.body));var w=null;if(s&&X(s)&&t){var H=s;w=H.ref}var Q=ee(w,t);if(!v||!$()||d===void 0)return null;var U=g===!1||ue(),_=s;return t&&(_=o.cloneElement(s,{ref:Q})),o.createElement(T.Provider,{value:W},U?_:Y.createPortal(_,g))});function ce(){var e=G({},V);return e.useId}var z=0,M=ce();const Se=M?function(t){var n=M();return t||n}:function(t){var n=o.useState("ssr-id"),a=f(n,2),i=a[0],r=a[1];return o.useEffect(function(){var c=z;z+=1,r("rc_unique_".concat(c))},[]),t||i},se=B.createContext(void 0),de=se,fe=e=>({animationDuration:e,animationFillMode:"both"}),le=e=>({animationDuration:e,animationFillMode:"both"}),_e=function(e,t,n,a){const r=(arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1)?"&":"";return{[`
      ${r}${e}-enter,
      ${r}${e}-appear
    `]:Object.assign(Object.assign({},fe(a)),{animationPlayState:"paused"}),[`${r}${e}-leave`]:Object.assign(Object.assign({},le(a)),{animationPlayState:"paused"}),[`
      ${r}${e}-enter${e}-enter-active,
      ${r}${e}-appear${e}-appear-active
    `]:{animationName:t,animationPlayState:"running"},[`${r}${e}-leave${e}-leave-active`]:{animationName:n,animationPlayState:"running",pointerEvents:"none"}}},j={Modal:0,Drawer:0,Popover:70,Popconfirm:70,Tooltip:70,Tour:70},ve={SelectLike:50,Dropdown:50,ColorPicker:30,DatePicker:50,Menu:50};function me(e){return e in j}function be(e,t){const[,n]=J(),a=B.useContext(de),i=me(e);let r=a??0;return i?r+=n.zIndexPopupBase+j[e]:r+=ve[e],[a===void 0?t:r,r]}export{$e as K,ye as P,Se as a,_e as i,be as u,de as z};
//# sourceMappingURL=useZIndex-9f7c196b.js.map
