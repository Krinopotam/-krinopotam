import{R as ze,r as c}from"./index-C9MQhBv9.js";import{c as I,_ as Le,g as ke,m as ue,r as Be,C as ee,F as De,y as He,x as Xe}from"./compact-item-DA-GXfnI.js";import{b as de,c as q,_ as We,u as K}from"./useToken-C7r1PZCj.js";import{T as Ye,u as Ue}from"./index-CEaSTCJ_.js";import{C as Fe}from"./ContextIsolator-QgC1AqAH.js";import{a as Ge,z as qe}from"./context-55JlqysY.js";import{g as Je}from"./motion-hLQ8GYzu.js";import{g as Ze,a as Qe}from"./roundedArrow-DmDmIiOY.js";import"./index-DYSaHhaM.js";import{i as Ke,u as et,a as tt}from"./index-3upY0JfS.js";import{g as ot,i as nt}from"./colors-DUoAwKpO.js";const Vt=e=>({[e.componentCls]:{[`${e.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}},[`${e.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}}}),J=["xxl","xl","lg","md","sm","xs"],rt=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),at=e=>{const o=e,r=[].concat(J).reverse();return r.forEach((t,n)=>{const a=t.toUpperCase(),i=`screen${a}Min`,s=`screen${a}`;if(!(o[i]<=o[s]))throw new Error(`${i}<=${s} fails : !(${o[i]}<=${o[s]})`);if(n<r.length-1){const l=`screen${a}Max`;if(!(o[s]<=o[l]))throw new Error(`${s}<=${l} fails : !(${o[s]}<=${o[l]})`);const m=`screen${r[n+1].toUpperCase()}Min`;if(!(o[l]<=o[m]))throw new Error(`${l}<=${m} fails : !(${o[l]}<=${o[m]})`)}}),e};function st(){const[,e]=de(),o=rt(at(e));return ze.useMemo(()=>{const r=new Map;let t=-1,n={};return{matchHandlers:{},dispatch(a){return n=a,r.forEach(i=>i(n)),r.size>=1},subscribe(a){return r.size||this.register(),t+=1,r.set(t,a),a(n),t},unsubscribe(a){r.delete(a),r.size||this.unregister()},unregister(){Object.keys(o).forEach(a=>{const i=o[a],s=this.matchHandlers[i];s==null||s.mql.removeListener(s==null?void 0:s.listener)}),r.clear()},register(){Object.keys(o).forEach(a=>{const i=o[a],s=p=>{let{matches:m}=p;this.dispatch(Object.assign(Object.assign({},n),{[a]:m}))},l=window.matchMedia(i);l.addListener(s),this.matchHandlers[i]={mql:l,listener:s},s(l)})},responsiveMap:o}},[e])}function pe(e){var o=e.children,r=e.prefixCls,t=e.id,n=e.overlayInnerStyle,a=e.bodyClassName,i=e.className,s=e.style;return c.createElement("div",{className:I("".concat(r,"-content"),i),style:s},c.createElement("div",{className:I("".concat(r,"-inner"),a),id:t,role:"tooltip",style:n},typeof o=="function"?o():o))}var F={shiftX:64,adjustY:1},G={adjustX:1,shiftY:!0},N=[0,0],it={left:{points:["cr","cl"],overflow:G,offset:[-4,0],targetOffset:N},right:{points:["cl","cr"],overflow:G,offset:[4,0],targetOffset:N},top:{points:["bc","tc"],overflow:F,offset:[0,-4],targetOffset:N},bottom:{points:["tc","bc"],overflow:F,offset:[0,4],targetOffset:N},topLeft:{points:["bl","tl"],overflow:F,offset:[0,-4],targetOffset:N},leftTop:{points:["tr","tl"],overflow:G,offset:[-4,0],targetOffset:N},topRight:{points:["br","tr"],overflow:F,offset:[0,-4],targetOffset:N},rightTop:{points:["tl","tr"],overflow:G,offset:[4,0],targetOffset:N},bottomRight:{points:["tr","br"],overflow:F,offset:[0,4],targetOffset:N},rightBottom:{points:["bl","br"],overflow:G,offset:[4,0],targetOffset:N},bottomLeft:{points:["tl","bl"],overflow:F,offset:[0,4],targetOffset:N},leftBottom:{points:["br","bl"],overflow:G,offset:[-4,0],targetOffset:N}},lt=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow","classNames","styles"],ct=function(o,r){var t=o.overlayClassName,n=o.trigger,a=n===void 0?["hover"]:n,i=o.mouseEnterDelay,s=i===void 0?0:i,l=o.mouseLeaveDelay,p=l===void 0?.1:l,m=o.overlayStyle,d=o.prefixCls,g=d===void 0?"rc-tooltip":d,v=o.children,j=o.onVisibleChange,S=o.afterVisibleChange,T=o.transitionName,f=o.animation,w=o.motion,A=o.placement,M=A===void 0?"right":A,R=o.align,C=R===void 0?{}:R,k=o.destroyTooltipOnHide,_=k===void 0?!1:k,b=o.defaultVisible,u=o.getTooltipContainer,E=o.overlayInnerStyle;o.arrowContent;var V=o.overlay,B=o.id,D=o.showArrow,P=D===void 0?!0:D,O=o.classNames,$=o.styles,z=Le(o,lt),h=c.useRef(null);c.useImperativeHandle(r,function(){return h.current});var H=q({},z);"visible"in o&&(H.popupVisible=o.visible);var L=function(){return c.createElement(pe,{key:"content",prefixCls:g,id:B,bodyClassName:O==null?void 0:O.body,overlayInnerStyle:q(q({},E),$==null?void 0:$.body)},V)};return c.createElement(Ye,We({popupClassName:I(t,O==null?void 0:O.root),prefixCls:g,popup:L,action:a,builtinPlacements:it,popupPlacement:M,ref:h,popupAlign:C,getPopupContainer:u,onPopupVisibleChange:j,afterPopupVisibleChange:S,popupTransitionName:T,popupAnimation:f,popupMotion:w,defaultPopupVisible:b,autoDestroy:_,mouseLeaveDelay:p,popupStyle:q(q({},m),$==null?void 0:$.root),mouseEnterDelay:s,arrow:P},H),v)};const ft=c.forwardRef(ct),me=8;function ge(e){const{contentRadius:o,limitVerticalRadius:r}=e,t=o>12?o+2:12;return{arrowOffsetHorizontal:t,arrowOffsetVertical:r?me:t}}function Q(e,o){return e?o:{}}function ut(e,o,r){const{componentCls:t,boxShadowPopoverArrow:n,arrowOffsetVertical:a,arrowOffsetHorizontal:i}=e,{arrowDistance:s=0,arrowPlacement:l={left:!0,right:!0,top:!0,bottom:!0}}=r||{};return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({[`${t}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},Ze(e,o,n)),{"&:before":{background:o}})]},Q(!!l.top,{[[`&-placement-top > ${t}-arrow`,`&-placement-topLeft > ${t}-arrow`,`&-placement-topRight > ${t}-arrow`].join(",")]:{bottom:s,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${t}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},"&-placement-topLeft":{"--arrow-offset-horizontal":i,[`> ${t}-arrow`]:{left:{_skip_check_:!0,value:i}}},"&-placement-topRight":{"--arrow-offset-horizontal":`calc(100% - ${K(i)})`,[`> ${t}-arrow`]:{right:{_skip_check_:!0,value:i}}}})),Q(!!l.bottom,{[[`&-placement-bottom > ${t}-arrow`,`&-placement-bottomLeft > ${t}-arrow`,`&-placement-bottomRight > ${t}-arrow`].join(",")]:{top:s,transform:"translateY(-100%)"},[`&-placement-bottom > ${t}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},"&-placement-bottomLeft":{"--arrow-offset-horizontal":i,[`> ${t}-arrow`]:{left:{_skip_check_:!0,value:i}}},"&-placement-bottomRight":{"--arrow-offset-horizontal":`calc(100% - ${K(i)})`,[`> ${t}-arrow`]:{right:{_skip_check_:!0,value:i}}}})),Q(!!l.left,{[[`&-placement-left > ${t}-arrow`,`&-placement-leftTop > ${t}-arrow`,`&-placement-leftBottom > ${t}-arrow`].join(",")]:{right:{_skip_check_:!0,value:s},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left > ${t}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop > ${t}-arrow`]:{top:a},[`&-placement-leftBottom > ${t}-arrow`]:{bottom:a}})),Q(!!l.right,{[[`&-placement-right > ${t}-arrow`,`&-placement-rightTop > ${t}-arrow`,`&-placement-rightBottom > ${t}-arrow`].join(",")]:{left:{_skip_check_:!0,value:s},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right > ${t}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop > ${t}-arrow`]:{top:a},[`&-placement-rightBottom > ${t}-arrow`]:{bottom:a}}))}}function dt(e,o,r,t){if(t===!1)return{adjustX:!1,adjustY:!1};const n=t&&typeof t=="object"?t:{},a={};switch(e){case"top":case"bottom":a.shiftX=o.arrowOffsetHorizontal*2+r,a.shiftY=!0,a.adjustY=!0;break;case"left":case"right":a.shiftY=o.arrowOffsetVertical*2+r,a.shiftX=!0,a.adjustX=!0;break}const i=Object.assign(Object.assign({},a),n);return i.shiftX||(i.adjustX=!0),i.shiftY||(i.adjustY=!0),i}const le={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},pt={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},mt=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function gt(e){const{arrowWidth:o,autoAdjustOverflow:r,arrowPointAtCenter:t,offset:n,borderRadius:a,visibleFirst:i}=e,s=o/2,l={};return Object.keys(le).forEach(p=>{const m=t&&pt[p]||le[p],d=Object.assign(Object.assign({},m),{offset:[0,0],dynamicInset:!0});switch(l[p]=d,mt.has(p)&&(d.autoArrow=!1),p){case"top":case"topLeft":case"topRight":d.offset[1]=-s-n;break;case"bottom":case"bottomLeft":case"bottomRight":d.offset[1]=s+n;break;case"left":case"leftTop":case"leftBottom":d.offset[0]=-s-n;break;case"right":case"rightTop":case"rightBottom":d.offset[0]=s+n;break}const g=ge({contentRadius:a,limitVerticalRadius:!0});if(t)switch(p){case"topLeft":case"bottomLeft":d.offset[0]=-g.arrowOffsetHorizontal-s;break;case"topRight":case"bottomRight":d.offset[0]=g.arrowOffsetHorizontal+s;break;case"leftTop":case"rightTop":d.offset[1]=-g.arrowOffsetHorizontal*2+s;break;case"leftBottom":case"rightBottom":d.offset[1]=g.arrowOffsetHorizontal*2-s;break}d.overflow=dt(p,g,o,r),i&&(d.htmlRegion="visibleFirst")}),l}const bt=e=>{const{calc:o,componentCls:r,tooltipMaxWidth:t,tooltipColor:n,tooltipBg:a,tooltipBorderRadius:i,zIndexPopup:s,controlHeight:l,boxShadowSecondary:p,paddingSM:m,paddingXS:d,arrowOffsetHorizontal:g,sizePopupArrow:v}=e,j=o(i).add(v).add(g).equal(),S=o(i).mul(2).add(v).equal();return[{[r]:Object.assign(Object.assign(Object.assign(Object.assign({},Be(e)),{position:"absolute",zIndex:s,display:"block",width:"max-content",maxWidth:t,visibility:"visible","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"&-hidden":{display:"none"},"--antd-arrow-background-color":a,[`${r}-inner`]:{minWidth:S,minHeight:l,padding:`${K(e.calc(m).div(2).equal())} ${K(d)}`,color:n,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:a,borderRadius:i,boxShadow:p,boxSizing:"border-box"},[["&-placement-topLeft","&-placement-topRight","&-placement-bottomLeft","&-placement-bottomRight"].join(",")]:{minWidth:j},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${r}-inner`]:{borderRadius:e.min(i,me)}},[`${r}-content`]:{position:"relative"}}),ot(e,(T,f)=>{let{darkColor:w}=f;return{[`&${r}-${T}`]:{[`${r}-inner`]:{backgroundColor:w},[`${r}-arrow`]:{"--antd-arrow-background-color":w}}}})),{"&-rtl":{direction:"rtl"}})},ut(e,"var(--antd-arrow-background-color)"),{[`${r}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow}}]},ht=e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+70},ge({contentRadius:e.borderRadius,limitVerticalRadius:!0})),Qe(ue(e,{borderRadiusOuter:Math.min(e.borderRadiusOuter,4)}))),be=function(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return ke("Tooltip",t=>{const{borderRadius:n,colorTextLightSolid:a,colorBgSpotlight:i}=t,s=ue(t,{tooltipMaxWidth:250,tooltipColor:a,tooltipBorderRadius:n,tooltipBg:i});return[bt(s),Ke(t,"zoom-big-fast")]},ht,{resetStyle:!1,injectStyle:o})(e)};function he(e,o){const r=nt(o),t=I({[`${e}-${o}`]:o&&r}),n={},a={};return o&&!r&&(n.background=o,a["--antd-arrow-background-color"]=o),{className:t,overlayStyle:n,arrowStyle:a}}const yt=e=>{const{prefixCls:o,className:r,placement:t="top",title:n,color:a,overlayInnerStyle:i}=e,{getPrefixCls:s}=c.useContext(ee),l=s("tooltip",o),[p,m,d]=be(l),g=he(l,a),v=g.arrowStyle,j=Object.assign(Object.assign({},i),g.overlayStyle),S=I(m,d,l,`${l}-pure`,`${l}-placement-${t}`,r,g.className);return p(c.createElement("div",{className:S,style:v},c.createElement("div",{className:`${l}-arrow`}),c.createElement(pe,Object.assign({},e,{className:m,prefixCls:l,overlayInnerStyle:j}),n)))};var wt=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};const vt=c.forwardRef((e,o)=>{var r,t,n,a,i,s;const{prefixCls:l,openClassName:p,getTooltipContainer:m,color:d,overlayInnerStyle:g,children:v,afterOpenChange:j,afterVisibleChange:S,destroyTooltipOnHide:T,arrow:f=!0,title:w,overlay:A,builtinPlacements:M,arrowPointAtCenter:R=!1,autoAdjustOverflow:C=!0,motion:k,getPopupContainer:_,placement:b="top",mouseEnterDelay:u=.1,mouseLeaveDelay:E=.1,overlayStyle:V,rootClassName:B,overlayClassName:D,styles:P,classNames:O}=e,$=wt(e,["prefixCls","openClassName","getTooltipContainer","color","overlayInnerStyle","children","afterOpenChange","afterVisibleChange","destroyTooltipOnHide","arrow","title","overlay","builtinPlacements","arrowPointAtCenter","autoAdjustOverflow","motion","getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName","overlayClassName","styles","classNames"]),z=!!f,[,h]=de(),{getPopupContainer:H,getPrefixCls:L,direction:W,tooltip:y}=c.useContext(ee),we=De(),te=c.useRef(null),ie=()=>{var x;(x=te.current)===null||x===void 0||x.forceAlign()};c.useImperativeHandle(o,()=>{var x;return{forceAlign:ie,forcePopupAlign:()=>{we.deprecated(!1,"forcePopupAlign","forceAlign"),ie()},nativeElement:(x=te.current)===null||x===void 0?void 0:x.nativeElement}});const[ve,Ce]=Ue(!1,{value:(r=e.open)!==null&&r!==void 0?r:e.visible,defaultValue:(t=e.defaultOpen)!==null&&t!==void 0?t:e.defaultVisible}),oe=!w&&!A&&w!==0,Oe=x=>{var X,U;Ce(oe?!1:x),oe||((X=e.onOpenChange)===null||X===void 0||X.call(e,x),(U=e.onVisibleChange)===null||U===void 0||U.call(e,x))},$e=c.useMemo(()=>{var x,X;let U=R;return typeof f=="object"&&(U=(X=(x=f.pointAtCenter)!==null&&x!==void 0?x:f.arrowPointAtCenter)!==null&&X!==void 0?X:R),M||gt({arrowPointAtCenter:U,autoAdjustOverflow:C,arrowWidth:z?h.sizePopupArrow:0,borderRadius:h.borderRadius,offset:h.marginXXS,visibleFirst:!0})},[R,f,M,h]),ne=c.useMemo(()=>w===0?w:A||w||"",[A,w]),xe=c.createElement(Fe,{space:!0},typeof ne=="function"?ne():ne),Y=L("tooltip",l),je=L(),Se=e["data-popover-inject"];let re=ve;!("open"in e)&&!("visible"in e)&&oe&&(re=!1);const ae=c.isValidElement(v)&&!He(v)?v:c.createElement("span",null,v),Z=ae.props,_e=!Z.className||typeof Z.className=="string"?I(Z.className,p||`${Y}-open`):Z.className,[Pe,Ne,Re]=be(Y,!Se),se=he(Y,d),Te=se.arrowStyle,Ae=I(D,{[`${Y}-rtl`]:W==="rtl"},se.className,B,Ne,Re,y==null?void 0:y.className,(n=y==null?void 0:y.classNames)===null||n===void 0?void 0:n.root,O==null?void 0:O.root),Ee=I((a=y==null?void 0:y.classNames)===null||a===void 0?void 0:a.body,O==null?void 0:O.body),[Ie,Me]=Ge("Tooltip",$.zIndex),Ve=c.createElement(ft,Object.assign({},$,{zIndex:Ie,showArrow:z,placement:b,mouseEnterDelay:u,mouseLeaveDelay:E,prefixCls:Y,classNames:{root:Ae,body:Ee},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Te),(i=y==null?void 0:y.styles)===null||i===void 0?void 0:i.root),y==null?void 0:y.style),V),P==null?void 0:P.root),body:Object.assign(Object.assign(Object.assign(Object.assign({},(s=y==null?void 0:y.styles)===null||s===void 0?void 0:s.body),g),P==null?void 0:P.body),se.overlayStyle)},getTooltipContainer:_||m||H,ref:te,builtinPlacements:$e,overlay:xe,visible:re,onVisibleChange:Oe,afterVisibleChange:j??S,arrowContent:c.createElement("span",{className:`${Y}-arrow-content`}),motion:{motionName:Je(je,"zoom-big-fast",e.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!T}),re?Xe(ae,{className:_e}):ae);return Pe(c.createElement(qe.Provider,{value:Me},Ve))}),Ct=vt;Ct._InternalPanelDoNotUseOrYouWillBeFired=yt;const ye=c.createContext({});var Ot=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};function ce(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const $t=["xs","sm","md","lg","xl","xxl"],zt=c.forwardRef((e,o)=>{const{getPrefixCls:r,direction:t}=c.useContext(ee),{gutter:n,wrap:a}=c.useContext(ye),{prefixCls:i,span:s,order:l,offset:p,push:m,pull:d,className:g,children:v,flex:j,style:S}=e,T=Ot(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),f=r("col",i),[w,A,M]=et(f),R={};let C={};$t.forEach(b=>{let u={};const E=e[b];typeof E=="number"?u.span=E:typeof E=="object"&&(u=E||{}),delete T[b],C=Object.assign(Object.assign({},C),{[`${f}-${b}-${u.span}`]:u.span!==void 0,[`${f}-${b}-order-${u.order}`]:u.order||u.order===0,[`${f}-${b}-offset-${u.offset}`]:u.offset||u.offset===0,[`${f}-${b}-push-${u.push}`]:u.push||u.push===0,[`${f}-${b}-pull-${u.pull}`]:u.pull||u.pull===0,[`${f}-rtl`]:t==="rtl"}),u.flex&&(C[`${f}-${b}-flex`]=!0,R[`--${f}-${b}-flex`]=ce(u.flex))});const k=I(f,{[`${f}-${s}`]:s!==void 0,[`${f}-order-${l}`]:l,[`${f}-offset-${p}`]:p,[`${f}-push-${m}`]:m,[`${f}-pull-${d}`]:d},g,C,A,M),_={};if(n&&n[0]>0){const b=n[0]/2;_.paddingLeft=b,_.paddingRight=b}return j&&(_.flex=ce(j),a===!1&&!_.minWidth&&(_.minWidth=0)),w(c.createElement("div",Object.assign({},T,{style:Object.assign(Object.assign(Object.assign({},_),S),R),className:k,ref:o}),v))});var xt=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};function fe(e,o){const[r,t]=c.useState(typeof e=="string"?e:""),n=()=>{if(typeof e=="string"&&t(e),typeof e=="object")for(let a=0;a<J.length;a++){const i=J[a];if(!o[i])continue;const s=e[i];if(s!==void 0){t(s);return}}};return c.useEffect(()=>{n()},[JSON.stringify(e),o]),r}const Lt=c.forwardRef((e,o)=>{const{prefixCls:r,justify:t,align:n,className:a,style:i,children:s,gutter:l=0,wrap:p}=e,m=xt(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:d,direction:g}=c.useContext(ee),[v,j]=c.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[S,T]=c.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),f=fe(n,S),w=fe(t,S),A=c.useRef(l),M=st();c.useEffect(()=>{const $=M.subscribe(z=>{T(z);const h=A.current||0;(!Array.isArray(h)&&typeof h=="object"||Array.isArray(h)&&(typeof h[0]=="object"||typeof h[1]=="object"))&&j(z)});return()=>M.unsubscribe($)},[]);const R=()=>{const $=[void 0,void 0];return(Array.isArray(l)?l:[l,void 0]).forEach((h,H)=>{if(typeof h=="object")for(let L=0;L<J.length;L++){const W=J[L];if(v[W]&&h[W]!==void 0){$[H]=h[W];break}}else $[H]=h}),$},C=d("row",r),[k,_,b]=tt(C),u=R(),E=I(C,{[`${C}-no-wrap`]:p===!1,[`${C}-${w}`]:w,[`${C}-${f}`]:f,[`${C}-rtl`]:g==="rtl"},a,_,b),V={},B=u[0]!=null&&u[0]>0?u[0]/-2:void 0;B&&(V.marginLeft=B,V.marginRight=B);const[D,P]=u;V.rowGap=P;const O=c.useMemo(()=>({gutter:[D,P],wrap:p}),[D,P,p]);return k(c.createElement(ye.Provider,{value:O},c.createElement("div",Object.assign({},m,{className:E,style:Object.assign(Object.assign({},V),i),ref:o}),s)))});export{zt as C,Lt as R,Ct as T,ut as a,ge as b,gt as c,Vt as g};
