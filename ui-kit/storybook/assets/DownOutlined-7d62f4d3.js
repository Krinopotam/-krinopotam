import{m as Je}from"./index-092ccb3f.js";import{_ as p}from"./isNativeReflectConstruct-2f1897fe.js";import{_ as O,G as h,H as Qe}from"./useToken-268f632d.js";import{_ as W,c as fe,w as Ze,s as Le,A as et}from"./compact-item-e0eb0d02.js";import{r as s,a as tt,R as rt}from"./index-5819ae2c.js";import{R as Ce}from"./index-53e6b65f.js";const oe=e=>e instanceof Array,Ct=e=>!!e&&Object.prototype.toString.call(e)==="[object Promise]",nt=e=>{if(!(!e||typeof e!="object"))return Object.keys(e)},Nt=e=>{const r=nt(e);return r?r.length:0},bt=(e,r)=>Je(e,r),It=(e,r)=>{if(typeof e!="object")return e;const u=(n,a,l)=>{if(!n)return n;const m={};a++;for(const f in n){if(!Object.prototype.hasOwnProperty.call(n,f))continue;const c=n[f];typeof c!="object"||a>=l?m[f]=c:m[f]=oe(c)?o(c,a,l):u(c,a,l)}return m},o=(n,a,l)=>{if(!n)return n;const m=[];a++;for(let f=0;f<n.length;f++){const c=n[f];typeof c!="object"||a>=l?m[f]=c:m[f]=oe(c)?o(c,a,l):u(c,a,l)}return m};return oe(e)?o(e,0,r??0):u(e,0,r??0)},Ot=(e,r)=>{const u={},o={};for(const n in e)r[n]?u[n]=e[n]:o[n]=e[n];return[u,o]};var at=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],I=void 0;function st(e,r){var u=e.prefixCls,o=e.invalidate,n=e.item,a=e.renderItem,l=e.responsive,m=e.responsiveDisabled,f=e.registerSize,c=e.itemKey,C=e.className,Y=e.style,q=e.children,J=e.display,y=e.order,K=e.component,D=K===void 0?"div":K,x=W(e,at),R=l&&!J;function M(E){f(c,E)}s.useEffect(function(){return function(){M(null)}},[]);var Q=a&&n!==I?a(n):q,N;o||(N={opacity:R?0:1,height:R?0:I,overflowY:R?"hidden":I,order:l?y:I,pointerEvents:R?"none":I,position:R?"absolute":I});var $={};R&&($["aria-hidden"]=!0);var g=s.createElement(D,p({className:fe(!o&&u,C),style:O(O({},N),Y)},$,x,{ref:r}),Q);return l&&(g=s.createElement(Ce,{onResize:function(Z){var j=Z.offsetWidth;M(j)},disabled:m},g)),g}var k=s.forwardRef(st);k.displayName="Item";function it(e){if(typeof MessageChannel>"u")Ze(e);else{var r=new MessageChannel;r.port1.onmessage=function(){return e()},r.port2.postMessage(void 0)}}function ot(){var e=s.useRef(null),r=function(o){e.current||(e.current=[],it(function(){tt.unstable_batchedUpdates(function(){e.current.forEach(function(n){n()}),e.current=null})})),e.current.push(o)};return r}function A(e,r){var u=s.useState(r),o=h(u,2),n=o[0],a=o[1],l=Le(function(m){e(function(){a(m)})});return[n,l]}var H=rt.createContext(null),ft=["component"],ut=["className"],lt=["className"],ct=function(r,u){var o=s.useContext(H);if(!o){var n=r.component,a=n===void 0?"div":n,l=W(r,ft);return s.createElement(a,p({},l,{ref:u}))}var m=o.className,f=W(o,ut),c=r.className,C=W(r,lt);return s.createElement(H.Provider,{value:null},s.createElement(k,p({ref:u,className:fe(m,c)},f,C)))},Ne=s.forwardRef(ct);Ne.displayName="RawItem";var dt=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],be="responsive",Ie="invalidate";function mt(e){return"+ ".concat(e.length," ...")}function vt(e,r){var u=e.prefixCls,o=u===void 0?"rc-overflow":u,n=e.data,a=n===void 0?[]:n,l=e.renderItem,m=e.renderRawItem,f=e.itemKey,c=e.itemWidth,C=c===void 0?10:c,Y=e.ssr,q=e.style,J=e.className,y=e.maxCount,K=e.renderRest,D=e.renderRawRest,x=e.suffix,R=e.component,M=R===void 0?"div":R,Q=e.itemComponent,N=e.onVisibleChange,$=W(e,dt),g=Y==="full",E=ot(),Z=A(E,null),j=h(Z,2),V=j[0],Oe=j[1],_=V||0,De=A(E,new Map),ue=h(De,2),le=ue[0],xe=ue[1],ze=A(E,0),ce=h(ze,2),Pe=ce[0],Ae=ce[1],We=A(E,0),de=h(We,2),U=de[0],ke=de[1],Ke=A(E,0),me=h(Ke,2),F=me[0],Me=me[1],$e=s.useState(null),ve=h($e,2),L=ve[0],ye=ve[1],je=s.useState(null),Re=h(je,2),T=Re[0],Ve=Re[1],b=s.useMemo(function(){return T===null&&g?Number.MAX_SAFE_INTEGER:T||0},[T,V]),Ue=s.useState(!1),Se=h(Ue,2),Fe=Se[0],Te=Se[1],ee="".concat(o,"-item"),he=Math.max(Pe,U),te=y===be,S=a.length&&te,Ee=y===Ie,Ge=S||typeof y=="number"&&a.length>y,w=s.useMemo(function(){var t=a;return S?V===null&&g?t=a:t=a.slice(0,Math.min(a.length,_/C)):typeof y=="number"&&(t=a.slice(0,y)),t},[a,C,V,y,S]),re=s.useMemo(function(){return S?a.slice(b+1):a.slice(w.length)},[a,w,S,b]),G=s.useCallback(function(t,i){var d;return typeof f=="function"?f(t):(d=f&&(t==null?void 0:t[f]))!==null&&d!==void 0?d:i},[f]),Be=s.useCallback(l||function(t){return t},[l]);function B(t,i,d){T===t&&(i===void 0||i===L)||(Ve(t),d||(Te(t<a.length-1),N==null||N(t)),i!==void 0&&ye(i))}function He(t,i){Oe(i.clientWidth)}function pe(t,i){xe(function(d){var v=new Map(d);return i===null?v.delete(t):v.set(t,i),v})}function Xe(t,i){ke(i),Ae(U)}function Ye(t,i){Me(i)}function ne(t){return le.get(G(w[t],t))}Qe(function(){if(_&&typeof he=="number"&&w){var t=F,i=w.length,d=i-1;if(!i){B(0,null);return}for(var v=0;v<i;v+=1){var P=ne(v);if(g&&(P=P||0),P===void 0){B(v-1,void 0,!0);break}if(t+=P,d===0&&t<=_||v===d-1&&t+ne(d)<=_){B(d,null);break}else if(t+he>_){B(v-1,t-P-F+U);break}}x&&ne(0)+F>_&&ye(null)}},[_,le,U,F,G,w]);var ge=Fe&&!!re.length,_e={};L!==null&&S&&(_e={position:"absolute",left:L,top:0});var z={prefixCls:ee,responsive:S,component:Q,invalidate:Ee},qe=m?function(t,i){var d=G(t,i);return s.createElement(H.Provider,{key:d,value:O(O({},z),{},{order:i,item:t,itemKey:d,registerSize:pe,display:i<=b})},m(t,i))}:function(t,i){var d=G(t,i);return s.createElement(k,p({},z,{order:i,key:d,item:t,renderItem:Be,itemKey:d,registerSize:pe,display:i<=b}))},ae,we={order:ge?b:Number.MAX_SAFE_INTEGER,className:"".concat(ee,"-rest"),registerSize:Xe,display:ge};if(D)D&&(ae=s.createElement(H.Provider,{value:O(O({},z),we)},D(re)));else{var se=K||mt;ae=s.createElement(k,p({},z,we),typeof se=="function"?se(re):se)}var ie=s.createElement(M,p({className:fe(!Ee&&o,J),style:q,ref:r},$),w.map(qe),Ge?ae:null,x&&s.createElement(k,p({},z,{responsive:te,responsiveDisabled:!S,order:b,className:"".concat(ee,"-suffix"),registerSize:Ye,display:!0,style:_e}),x));return te&&(ie=s.createElement(Ce,{onResize:He,disabled:!S},ie)),ie}var X=s.forwardRef(vt);X.displayName="Overflow";X.Item=Ne;X.RESPONSIVE=be;X.INVALIDATE=Ie;var yt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"};const Rt=yt;var St=function(r,u){return s.createElement(et,p({},r,{ref:u,icon:Rt}))};const Dt=s.forwardRef(St);export{It as C,Dt as D,X as F,Ct as I,bt as M,Nt as O,Ot as S,oe as a};
//# sourceMappingURL=DownOutlined-7d62f4d3.js.map