import{J as K,L as V,N as R,m as F,O as _,H as l,a as X,I as b,P as J,Q as N,_ as Y}from"./useToken-a9416e4a.js";import{R as A,r as o,a as Z}from"./index-76fb7be0.js";import{r as G}from"./index-a764d3ff.js";import{v as ee,x as te}from"./compact-item-065385a4.js";var Ee=function(){function e(t,n){V(this,e),R(this,"name",void 0),R(this,"style",void 0),R(this,"_keyframe",!0),this.name=t,this.style=n}return K(e,[{key:"getName",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return n?"".concat(n,"-").concat(this.name):this.name}}]),e}();const ne=e=>{const[,,,,t]=F();return t?`${e}-css-var`:""},Re=ne,ae=A.createContext(void 0),re=ae,f=100,ie=10,oe=f*ie,B={Modal:f,Drawer:f,Popover:f,Popconfirm:f,Tooltip:f,Tour:f},ue={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function se(e){return e in B}function Ie(e,t){const[,n]=F(),a=A.useContext(re),i=se(e);if(t!==void 0)return[t,t];let r=a??0;return i?(r+=(a?0:n.zIndexPopupBase)+B[e],r=Math.min(r,n.zIndexPopupBase+oe)):r+=ue[e],[a===void 0?t:r,r]}var j=o.createContext(null),O=[];function ce(e,t){var n=o.useState(function(){if(!_())return null;var u=document.createElement("div");return u}),a=l(n,1),i=a[0],r=o.useRef(!1),s=o.useContext(j),c=o.useState(O),h=l(c,2),v=h[0],p=h[1],$=s||(r.current?void 0:function(u){p(function(d){var C=[u].concat(X(d));return C})});function m(){i.parentElement||document.body.appendChild(i),r.current=!0}function g(){var u;(u=i.parentElement)===null||u===void 0||u.removeChild(i),r.current=!1}return b(function(){return e?s?s(m):m():g(),g},[e]),b(function(){v.length&&(v.forEach(function(u){return u()}),p(O))},[v]),[i,$]}var I;function de(e){if(typeof document>"u")return 0;if(e||I===void 0){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var n=document.createElement("div"),a=n.style;a.position="absolute",a.top="0",a.left="0",a.pointerEvents="none",a.visibility="hidden",a.width="200px",a.height="150px",a.overflow="hidden",n.appendChild(t),document.body.appendChild(n);var i=t.offsetWidth;n.style.overflow="scroll";var r=t.offsetWidth;i===r&&(r=n.clientWidth),document.body.removeChild(n),I=i-r}return I}function D(e){var t=e.match(/^(.*)px$/),n=Number(t==null?void 0:t[1]);return Number.isNaN(n)?de():n}function fe(e){if(typeof document>"u"||!e||!(e instanceof Element))return{width:0,height:0};var t=getComputedStyle(e,"::-webkit-scrollbar"),n=t.width,a=t.height;return{width:D(n),height:D(a)}}function le(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var ve="rc-util-locker-".concat(Date.now()),k=0;function me(e){var t=!!e,n=o.useState(function(){return k+=1,"".concat(ve,"_").concat(k)}),a=l(n,1),i=a[0];b(function(){if(t){var r=fe(document.body).width,s=le();J(`
html body {
  overflow-y: hidden;
  `.concat(s?"width: calc(100% - ".concat(r,"px);"):"",`
}`),i)}else N(i);return function(){N(i)}},[t,i])}var T=!1;function he(e){return typeof e=="boolean"&&(T=e),T}var L=function(t){return t===!1?!1:!_()||!t?null:typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t},be=o.forwardRef(function(e,t){var n=e.open,a=e.autoLock,i=e.getContainer;e.debug;var r=e.autoDestroy,s=r===void 0?!0:r,c=e.children,h=o.useState(n),v=l(h,2),p=v[0],$=v[1],m=p||n;o.useEffect(function(){(s||n)&&$(n)},[n,s]);var g=o.useState(function(){return L(i)}),u=l(g,2),d=u[0],C=u[1];o.useEffect(function(){var E=L(i);C(E??null)});var q=ce(m&&!d),x=l(q,2),w=x[0],Q=x[1],S=d??w;me(a&&n&&_()&&(S===w||S===document.body));var P=null;if(c&&ee(c)&&t){var U=c;P=U.ref}var W=te(P,t);if(!m||!_()||d===void 0)return null;var H=S===!1||he(),y=c;return t&&(y=o.cloneElement(c,{ref:W})),o.createElement(j.Provider,{value:Q},H?y:G.createPortal(y,S))});function pe(){var e=Y({},Z);return e.useId}var M=0,z=pe();const xe=z?function(t){var n=z();return t||n}:function(t){var n=o.useState("ssr-id"),a=l(n,2),i=a[0],r=a[1];return o.useEffect(function(){var s=M;M+=1,r("rc_unique_".concat(s))},[]),t||i},ge=e=>({animationDuration:e,animationFillMode:"both"}),Se=e=>({animationDuration:e,animationFillMode:"both"}),we=function(e,t,n,a){const r=(arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1)?"&":"";return{[`
      ${r}${e}-enter,
      ${r}${e}-appear
    `]:Object.assign(Object.assign({},ge(a)),{animationPlayState:"paused"}),[`${r}${e}-leave`]:Object.assign(Object.assign({},Se(a)),{animationPlayState:"paused"}),[`
      ${r}${e}-enter${e}-enter-active,
      ${r}${e}-appear${e}-appear-active
    `]:{animationName:t,animationPlayState:"running"},[`${r}${e}-leave${e}-leave-active`]:{animationName:n,animationPlayState:"running",pointerEvents:"none"}}};export{oe as C,Ee as K,be as P,Re as a,xe as b,we as i,Ie as u,re as z};
