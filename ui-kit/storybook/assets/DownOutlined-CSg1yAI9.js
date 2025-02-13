import{_,c as $,o as E,r as qe}from"./useToken-C9qwXZKU.js";import{r as n,R as Je}from"./index-iW-139IE.js";import{K as c,i as Ee}from"./context-u9dygr8g.js";import{u as Ze,R as Ie}from"./index-H-U0Qhl4.js";import{n as et,C as tt,_ as Y,c as ie,w as nt,v as rt,I as at}from"./compact-item-Cxv0YLF9.js";import{r as st}from"./index-mQZ8i_rL.js";const it=new c("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),ot=new c("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),ft=new c("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),lt=new c("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),ct=new c("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),mt=new c("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),ut=new c("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),dt=new c("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}}),vt={"move-up":{inKeyframes:ut,outKeyframes:dt},"move-down":{inKeyframes:it,outKeyframes:ot},"move-left":{inKeyframes:ft,outKeyframes:lt},"move-right":{inKeyframes:ct,outKeyframes:mt}},Ft=(e,r)=>{const{antCls:o}=e,s=`${o}-${r}`,{inKeyframes:f,outKeyframes:i}=vt[r];return[Ee(s,f,i,e.motionDurationMid),{[`
        ${s}-enter,
        ${s}-appear
      `]:{opacity:0,animationTimingFunction:e.motionEaseOutCirc},[`${s}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]},yt=new c("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),gt=new c("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),pt=new c("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),Ot=new c("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),Rt=new c("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),ht=new c("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),wt=new c("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),St=new c("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),Et={"slide-up":{inKeyframes:yt,outKeyframes:gt},"slide-down":{inKeyframes:pt,outKeyframes:Ot},"slide-left":{inKeyframes:Rt,outKeyframes:ht},"slide-right":{inKeyframes:wt,outKeyframes:St}},Vt=(e,r)=>{const{antCls:o}=e,s=`${o}-${r}`,{inKeyframes:f,outKeyframes:i}=Et[r];return[Ee(s,f,i,e.motionDurationMid),{[`
      ${s}-enter,
      ${s}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${s}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]};function It(e){return r=>n.createElement(et,{theme:{token:{motion:!1,zIndexPopupBase:0}}},n.createElement(e,Object.assign({},r)))}const Bt=(e,r,o,s,f)=>It(m=>{const{prefixCls:p,style:y}=m,O=n.useRef(null),[I,W]=n.useState(0),[U,L]=n.useState(0),[d,N]=Ze(!1,{value:m.open}),{getPrefixCls:K}=n.useContext(tt),C=K(s||"select",p);n.useEffect(()=>{if(N(!0),typeof ResizeObserver<"u"){const P=new ResizeObserver(R=>{const v=R[0].target;W(v.offsetHeight+8),L(v.offsetWidth)}),w=setInterval(()=>{var R;const v=f?`.${f(C)}`:`.${C}-dropdown`,g=(R=O.current)===null||R===void 0?void 0:R.querySelector(v);g&&(clearInterval(w),P.observe(g))},10);return()=>{clearInterval(w),P.disconnect()}}},[]);let u=Object.assign(Object.assign({},m),{style:Object.assign(Object.assign({},y),{margin:0}),open:d,visible:d,getPopupContainer:()=>O.current});o&&(u=o(u)),r&&Object.assign(u,{[r]:{overflow:{adjustX:!1,adjustY:!1}}});const M={paddingBottom:I,position:"relative",minWidth:U};return n.createElement("div",{ref:O,style:M},n.createElement(e,Object.assign({},u)))});var Ct=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],z=void 0;function _t(e,r){var o=e.prefixCls,s=e.invalidate,f=e.item,i=e.renderItem,m=e.responsive,p=e.responsiveDisabled,y=e.registerSize,O=e.itemKey,I=e.className,W=e.style,U=e.children,L=e.display,d=e.order,N=e.component,K=N===void 0?"div":N,C=Y(e,Ct),u=m&&!L;function M(g){y(O,g)}n.useEffect(function(){return function(){M(null)}},[]);var P=i&&f!==z?i(f,{index:d}):U,w;s||(w={opacity:u?0:1,height:u?0:z,overflowY:u?"hidden":z,order:m?d:z,pointerEvents:u?"none":z,position:u?"absolute":z});var R={};u&&(R["aria-hidden"]=!0);var v=n.createElement(K,_({className:ie(!s&&o,I),style:$($({},w),W)},R,C,{ref:r}),P);return m&&(v=n.createElement(Ie,{onResize:function(Z){var F=Z.offsetWidth;M(F)},disabled:p},v)),v}var A=n.forwardRef(_t);A.displayName="Item";function bt(e){if(typeof MessageChannel>"u")nt(e);else{var r=new MessageChannel;r.port1.onmessage=function(){return e()},r.port2.postMessage(void 0)}}function xt(){var e=n.useRef(null),r=function(s){e.current||(e.current=[],bt(function(){st.unstable_batchedUpdates(function(){e.current.forEach(function(f){f()}),e.current=null})})),e.current.push(s)};return r}function T(e,r){var o=n.useState(r),s=E(o,2),f=s[0],i=s[1],m=rt(function(p){e(function(){i(p)})});return[f,m]}var q=Je.createContext(null),Nt=["component"],Kt=["className"],Mt=["className"],Pt=function(r,o){var s=n.useContext(q);if(!s){var f=r.component,i=f===void 0?"div":f,m=Y(r,Nt);return n.createElement(i,_({},m,{ref:o}))}var p=s.className,y=Y(s,Kt),O=r.className,I=Y(r,Mt);return n.createElement(q.Provider,{value:null},n.createElement(A,_({ref:o,className:ie(p,O)},y,I)))},Ce=n.forwardRef(Pt);Ce.displayName="RawItem";var Dt=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],_e="responsive",be="invalidate";function zt(e){return"+ ".concat(e.length," ...")}function $t(e,r){var o=e.prefixCls,s=o===void 0?"rc-overflow":o,f=e.data,i=f===void 0?[]:f,m=e.renderItem,p=e.renderRawItem,y=e.itemKey,O=e.itemWidth,I=O===void 0?10:O,W=e.ssr,U=e.style,L=e.className,d=e.maxCount,N=e.renderRest,K=e.renderRawRest,C=e.suffix,u=e.component,M=u===void 0?"div":u,P=e.itemComponent,w=e.onVisibleChange,R=Y(e,Dt),v=W==="full",g=xt(),Z=T(g,null),F=E(Z,2),V=F[0],xe=F[1],b=V||0,Ne=T(g,new Map),oe=E(Ne,2),fe=oe[0],Ke=oe[1],Me=T(g,0),le=E(Me,2),Pe=le[0],De=le[1],ze=T(g,0),ce=E(ze,2),B=ce[0],$e=ce[1],We=T(g,0),me=E(We,2),H=me[0],Ue=me[1],Le=n.useState(null),ue=E(Le,2),ee=ue[0],de=ue[1],je=n.useState(null),ve=E(je,2),k=ve[0],Xe=ve[1],D=n.useMemo(function(){return k===null&&v?Number.MAX_SAFE_INTEGER:k||0},[k,V]),Te=n.useState(!1),ye=E(Te,2),Ye=ye[0],Ae=ye[1],te="".concat(s,"-item"),ge=Math.max(Pe,B),ne=d===_e,S=i.length&&ne,pe=d===be,Fe=S||typeof d=="number"&&i.length>d,x=n.useMemo(function(){var t=i;return S?V===null&&v?t=i:t=i.slice(0,Math.min(i.length,b/I)):typeof d=="number"&&(t=i.slice(0,d)),t},[i,I,V,d,S]),re=n.useMemo(function(){return S?i.slice(D+1):i.slice(x.length)},[i,x,S,D]),G=n.useCallback(function(t,a){var l;return typeof y=="function"?y(t):(l=y&&(t==null?void 0:t[y]))!==null&&l!==void 0?l:a},[y]),Ve=n.useCallback(m||function(t){return t},[m]);function Q(t,a,l){k===t&&(a===void 0||a===ee)||(Xe(t),l||(Ae(t<i.length-1),w==null||w(t)),a!==void 0&&de(a))}function Be(t,a){xe(a.clientWidth)}function Oe(t,a){Ke(function(l){var h=new Map(l);return a===null?h.delete(t):h.set(t,a),h})}function He(t,a){$e(a),De(B)}function ke(t,a){Ue(a)}function ae(t){return fe.get(G(x[t],t))}qe(function(){if(b&&typeof ge=="number"&&x){var t=H,a=x.length,l=a-1;if(!a){Q(0,null);return}for(var h=0;h<a;h+=1){var X=ae(h);if(v&&(X=X||0),X===void 0){Q(h-1,void 0,!0);break}if(t+=X,l===0&&t<=b||h===l-1&&t+ae(l)<=b){Q(l,null);break}else if(t+ge>b){Q(h-1,t-X-H+B);break}}C&&ae(0)+H>b&&de(null)}},[b,fe,B,H,G,x]);var Re=Ye&&!!re.length,he={};ee!==null&&S&&(he={position:"absolute",left:ee,top:0});var j={prefixCls:te,responsive:S,component:P,invalidate:pe},Ge=p?function(t,a){var l=G(t,a);return n.createElement(q.Provider,{key:l,value:$($({},j),{},{order:a,item:t,itemKey:l,registerSize:Oe,display:a<=D})},p(t,a))}:function(t,a){var l=G(t,a);return n.createElement(A,_({},j,{order:a,key:l,item:t,renderItem:Ve,itemKey:l,registerSize:Oe,display:a<=D}))},we={order:Re?D:Number.MAX_SAFE_INTEGER,className:"".concat(te,"-rest"),registerSize:He,display:Re},se=N||zt,Qe=K?n.createElement(q.Provider,{value:$($({},j),we)},K(re)):n.createElement(A,_({},j,we),typeof se=="function"?se(re):se),Se=n.createElement(M,_({className:ie(!pe&&s,L),style:U,ref:r},R),x.map(Ge),Fe?Qe:null,C&&n.createElement(A,_({},j,{responsive:ne,responsiveDisabled:!S,order:D,className:"".concat(te,"-suffix"),registerSize:ke,display:!0,style:he}),C));return ne?n.createElement(Ie,{onResize:Be,disabled:!S},Se):Se}var J=n.forwardRef($t);J.displayName="Overflow";J.Item=Ce;J.RESPONSIVE=_e;J.INVALIDATE=be;var Wt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},Ut=function(r,o){return n.createElement(at,_({},r,{ref:o,icon:Wt}))},Ht=n.forwardRef(Ut);export{J as F,Ht as R,Ft as a,gt as b,pt as c,yt as d,Bt as g,Vt as i,Ot as s,It as w};
