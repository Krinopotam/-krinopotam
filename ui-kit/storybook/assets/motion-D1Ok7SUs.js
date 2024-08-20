import{L as Q,N as U,G as R,a as T,O as C,F as h,_ as K,J as b,P as L,Q as E,H as V}from"./useToken-DuQNFAH6.js";import{R as z,r as i,a as X}from"./index-CTjT7uj6.js";import{r as G}from"./index-Boe84S0F.js";import{y as J,z as Y}from"./compact-item-B2r7eKHn.js";var _e=function(){function e(t,n){U(this,e),R(this,"name",void 0),R(this,"style",void 0),R(this,"_keyframe",!0),this.name=t,this.style=n}return Q(e,[{key:"getName",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return n?"".concat(n,"-").concat(this.name):this.name}}]),e}();const Ce=e=>{const[,,,,t]=T();return t?`${e}-css-var`:""},Z=z.createContext(void 0),m=100,ee=10,te=m*ee,F={Modal:m,Drawer:m,Popover:m,Popconfirm:m,Tooltip:m,Tour:m},ne={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function ae(e){return e in F}function ye(e,t){const[,n]=T(),r=z.useContext(Z),o=ae(e);if(t!==void 0)return[t,t];let a=r??0;return o?(a+=(r?0:n.zIndexPopupBase)+F[e],a=Math.min(a,n.zIndexPopupBase+te)):a+=ne[e],[r===void 0?t:a,a]}var H=i.createContext(null),N=[];function re(e,t){var n=i.useState(function(){if(!C())return null;var u=document.createElement("div");return u}),r=h(n,1),o=r[0],a=i.useRef(!1),c=i.useContext(H),s=i.useState(N),d=h(s,2),l=d[0],p=d[1],S=c||(a.current?void 0:function(u){p(function(v){var y=[u].concat(K(v));return y})});function f(){o.parentElement||document.body.appendChild(o),a.current=!0}function g(){var u;(u=o.parentElement)===null||u===void 0||u.removeChild(o),a.current=!1}return b(function(){return e?c?c(f):f():g(),g},[e]),b(function(){l.length&&(l.forEach(function(u){return u()}),p(N))},[l]),[o,S]}function oe(e){var t="rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),n=document.createElement("div");n.id=t;var r=n.style;r.position="absolute",r.left="0",r.top="0",r.width="100px",r.height="100px",r.overflow="scroll";var o,a;if(e){var c=getComputedStyle(e);r.scrollbarColor=c.scrollbarColor,r.scrollbarWidth=c.scrollbarWidth;var s=getComputedStyle(e,"::-webkit-scrollbar"),d=parseInt(s.width,10),l=parseInt(s.height,10);try{var p=d?"width: ".concat(s.width,";"):"",S=l?"height: ".concat(s.height,";"):"";L(`
#`.concat(t,`::-webkit-scrollbar {
`).concat(p,`
`).concat(S,`
}`),t)}catch(u){console.error(u),o=d,a=l}}document.body.appendChild(n);var f=e&&o&&!isNaN(o)?o:n.offsetWidth-n.clientWidth,g=e&&a&&!isNaN(a)?a:n.offsetHeight-n.clientHeight;return document.body.removeChild(n),E(t),{width:f,height:g}}function ie(e){return typeof document>"u"||!e||!(e instanceof Element)?{width:0,height:0}:oe(e)}function ue(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var ce="rc-util-locker-".concat(Date.now()),O=0;function se(e){var t=!!e,n=i.useState(function(){return O+=1,"".concat(ce,"_").concat(O)}),r=h(n,1),o=r[0];b(function(){if(t){var a=ie(document.body).width,c=ue();L(`
html body {
  overflow-y: hidden;
  `.concat(c?"width: calc(100% - ".concat(a,"px);"):"",`
}`),o)}else E(o);return function(){E(o)}},[t,o])}var le=!1;function de(e){return le}var D=function(t){return t===!1?!1:!C()||!t?null:typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t},$e=i.forwardRef(function(e,t){var n=e.open,r=e.autoLock,o=e.getContainer;e.debug;var a=e.autoDestroy,c=a===void 0?!0:a,s=e.children,d=i.useState(n),l=h(d,2),p=l[0],S=l[1],f=p||n;i.useEffect(function(){(c||n)&&S(n)},[n,c]);var g=i.useState(function(){return D(o)}),u=h(g,2),v=u[0],y=u[1];i.useEffect(function(){var I=D(o);y(I??null)});var W=re(f&&!v),x=h(W,2),P=x[0],A=x[1],_=v??P;se(r&&n&&C()&&(_===P||_===document.body));var w=null;if(s&&J(s)&&t){var B=s;w=B.ref}var j=Y(w,t);if(!f||!C()||v===void 0)return null;var q=_===!1||de(),$=s;return t&&($=i.cloneElement(s,{ref:j})),i.createElement(H.Provider,{value:A},q?$:G.createPortal($,_))});function fe(){var e=V({},X);return e.useId}var k=0,M=fe();const Ie=M?function(t){var n=M();return t||n}:function(t){var n=i.useState("ssr-id"),r=h(n,2),o=r[0],a=r[1];return i.useEffect(function(){var c=k;k+=1,a("rc_unique_".concat(c))},[]),t||o},ve=e=>({animationDuration:e,animationFillMode:"both"}),me=e=>({animationDuration:e,animationFillMode:"both"}),Re=function(e,t,n,r){const a=(arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1)?"&":"";return{[`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]:Object.assign(Object.assign({},ve(r)),{animationPlayState:"paused"}),[`${a}${e}-leave`]:Object.assign(Object.assign({},me(r)),{animationPlayState:"paused"}),[`
      ${a}${e}-enter${e}-enter-active,
      ${a}${e}-appear${e}-appear-active
    `]:{animationName:t,animationPlayState:"running"},[`${a}${e}-leave${e}-leave-active`]:{animationName:n,animationPlayState:"running",pointerEvents:"none"}}};export{te as C,_e as K,$e as P,ye as a,Ie as b,Re as i,Ce as u,Z as z};