import{r as u,R as s}from"./index-CTjT7uj6.js";import{C as uo,d as B,j as Ro,k as Wo,l as Ao,R as Go,m as L,g as Do,n as Mo,e as _o,a as Fo,D as qo,p as Vo,q as Uo,s as Xo,o as Jo,W as Ko}from"./compact-item-ayXXrr5p.js";import{E as Qo,F as G,u as I}from"./useToken-DpCeTUe_.js";var Yo=function(o,e){var t={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&e.indexOf(r)<0&&(t[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(o);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(o,r[n])&&(t[r[n]]=o[r[n]]);return t};const go=u.createContext(void 0),Zo=o=>{const{getPrefixCls:e,direction:t}=u.useContext(uo),{prefixCls:r,size:n,className:l}=o,i=Yo(o,["prefixCls","size","className"]),c=e("btn-group",r),[,,m]=Qo();let d="";switch(n){case"large":d="lg";break;case"small":d="sm";break}const p=B(c,{[`${c}-${d}`]:d,[`${c}-rtl`]:t==="rtl"},l,m);return u.createElement(go.Provider,{value:n},u.createElement("div",Object.assign({},i,{className:p})))},io=/^[\u4e00-\u9fa5]{2}$/,F=io.test.bind(io);function ze(o){return o==="danger"?{danger:!0}:{type:o}}function co(o){return typeof o=="string"}function D(o){return o==="text"||o==="link"}function ko(o,e){if(o==null)return;const t=e?" ":"";return typeof o!="string"&&typeof o!="number"&&co(o.type)&&F(o.props.children)?Ro(o,{children:o.props.children.split("").join(t)}):co(o)?F(o)?s.createElement("span",null,o.split("").join(t)):s.createElement("span",null,o):Wo(o)?s.createElement("span",null,o):o}function oe(o,e){let t=!1;const r=[];return s.Children.forEach(o,n=>{const l=typeof n,i=l==="string"||l==="number";if(t&&i){const c=r.length-1,m=r[c];r[c]=`${m}${n}`}else r.push(n);t=i}),s.Children.map(r,n=>ko(n,e))}const mo=u.forwardRef((o,e)=>{const{className:t,style:r,children:n,prefixCls:l}=o,i=B(`${l}-icon`,t);return s.createElement("span",{ref:e,className:i,style:r},n)}),ao=u.forwardRef((o,e)=>{const{prefixCls:t,className:r,style:n,iconClassName:l}=o,i=B(`${t}-loading-icon`,r);return s.createElement(mo,{prefixCls:t,className:i,style:n,ref:e},s.createElement(Go,{className:l}))}),M=()=>({width:0,opacity:0,transform:"scale(0)"}),_=o=>({width:o.scrollWidth,opacity:1,transform:"scale(1)"}),ee=o=>{const{prefixCls:e,loading:t,existIcon:r,className:n,style:l}=o,i=!!t;return r?s.createElement(ao,{prefixCls:e,className:n,style:l}):s.createElement(Ao,{visible:i,motionName:`${e}-loading-icon-motion`,motionLeave:i,removeOnLeave:!0,onAppearStart:M,onAppearActive:_,onEnterStart:M,onEnterActive:_,onLeaveStart:_,onLeaveActive:M},(c,m)=>{let{className:d,style:p}=c;return s.createElement(ao,{prefixCls:e,className:n,style:Object.assign(Object.assign({},l),p),ref:m,iconClassName:d})})},so=(o,e)=>({[`> span, > ${o}`]:{"&:not(:last-child)":{[`&, & > ${o}`]:{"&:not(:disabled)":{borderInlineEndColor:e}}},"&:not(:first-child)":{[`&, & > ${o}`]:{"&:not(:disabled)":{borderInlineStartColor:e}}}}}),te=o=>{const{componentCls:e,fontSize:t,lineWidth:r,groupBorderColor:n,colorErrorHover:l}=o;return{[`${e}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${e}`]:{"&:not(:last-child)":{[`&, & > ${e}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:o.calc(r).mul(-1).equal(),[`&, & > ${e}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[e]:{position:"relative",zIndex:1,"&:hover,\n          &:focus,\n          &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${e}-icon-only`]:{fontSize:t}},so(`${e}-primary`,n),so(`${e}-danger`,l)]}},po=o=>{const{paddingInline:e,onlyIconSize:t,paddingBlock:r}=o;return L(o,{buttonPaddingHorizontal:e,buttonPaddingVertical:r,buttonIconOnlyFontSize:t})},bo=o=>{var e,t,r,n,l,i;const c=(e=o.contentFontSize)!==null&&e!==void 0?e:o.fontSize,m=(t=o.contentFontSizeSM)!==null&&t!==void 0?t:o.fontSize,d=(r=o.contentFontSizeLG)!==null&&r!==void 0?r:o.fontSizeLG,p=(n=o.contentLineHeight)!==null&&n!==void 0?n:G(c),h=(l=o.contentLineHeightSM)!==null&&l!==void 0?l:G(m),y=(i=o.contentLineHeightLG)!==null&&i!==void 0?i:G(d);return{fontWeight:400,defaultShadow:`0 ${o.controlOutlineWidth}px 0 ${o.controlTmpOutline}`,primaryShadow:`0 ${o.controlOutlineWidth}px 0 ${o.controlOutline}`,dangerShadow:`0 ${o.controlOutlineWidth}px 0 ${o.colorErrorOutline}`,primaryColor:o.colorTextLightSolid,dangerColor:o.colorTextLightSolid,borderColorDisabled:o.colorBorder,defaultGhostColor:o.colorBgContainer,ghostBg:"transparent",defaultGhostBorderColor:o.colorBgContainer,paddingInline:o.paddingContentHorizontal-o.lineWidth,paddingInlineLG:o.paddingContentHorizontal-o.lineWidth,paddingInlineSM:8-o.lineWidth,onlyIconSize:o.fontSizeLG,onlyIconSizeSM:o.fontSizeLG-2,onlyIconSizeLG:o.fontSizeLG+2,groupBorderColor:o.colorPrimaryHover,linkHoverBg:"transparent",textHoverBg:o.colorBgTextHover,defaultColor:o.colorText,defaultBg:o.colorBgContainer,defaultBorderColor:o.colorBorder,defaultBorderColorDisabled:o.colorBorder,defaultHoverBg:o.colorBgContainer,defaultHoverColor:o.colorPrimaryHover,defaultHoverBorderColor:o.colorPrimaryHover,defaultActiveBg:o.colorBgContainer,defaultActiveColor:o.colorPrimaryActive,defaultActiveBorderColor:o.colorPrimaryActive,contentFontSize:c,contentFontSizeSM:m,contentFontSizeLG:d,contentLineHeight:p,contentLineHeightSM:h,contentLineHeightLG:y,paddingBlock:Math.max((o.controlHeight-c*p)/2-o.lineWidth,0),paddingBlockSM:Math.max((o.controlHeightSM-m*h)/2-o.lineWidth,0),paddingBlockLG:Math.max((o.controlHeightLG-d*y)/2-o.lineWidth,0)}},re=o=>{const{componentCls:e,iconCls:t,fontWeight:r}=o;return{[e]:{outline:"none",position:"relative",display:"inline-flex",gap:o.marginXS,alignItems:"center",justifyContent:"center",fontWeight:r,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",background:"transparent",border:`${I(o.lineWidth)} ${o.lineType} transparent`,cursor:"pointer",transition:`all ${o.motionDurationMid} ${o.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",color:o.colorText,"&:disabled > *":{pointerEvents:"none"},"> span":{display:"inline-block"},[`${e}-icon`]:{lineHeight:1},"> a":{color:"currentColor"},"&:not(:disabled)":Object.assign({},Mo(o)),[`&${e}-two-chinese-chars::first-letter`]:{letterSpacing:"0.34em"},[`&${e}-two-chinese-chars > *:not(${t})`]:{marginInlineEnd:"-0.34em",letterSpacing:"0.34em"},"&-icon-end":{flexDirection:"row-reverse"}}}},C=(o,e,t)=>({[`&:not(:disabled):not(${o}-disabled)`]:{"&:hover":e,"&:active":t}}),ne=o=>({minWidth:o.controlHeight,paddingInlineStart:0,paddingInlineEnd:0,borderRadius:"50%"}),le=o=>({borderRadius:o.controlHeight,paddingInlineStart:o.calc(o.controlHeight).div(2).equal(),paddingInlineEnd:o.calc(o.controlHeight).div(2).equal()}),ie=o=>({cursor:"not-allowed",borderColor:o.borderColorDisabled,color:o.colorTextDisabled,background:o.colorBgContainerDisabled,boxShadow:"none"}),z=(o,e,t,r,n,l,i,c)=>({[`&${o}-background-ghost`]:Object.assign(Object.assign({color:t||void 0,background:e,borderColor:r||void 0,boxShadow:"none"},C(o,Object.assign({background:e},i),Object.assign({background:e},c))),{"&:disabled":{cursor:"not-allowed",color:n||void 0,borderColor:l||void 0}})}),q=o=>({[`&:disabled, &${o.componentCls}-disabled`]:Object.assign({},ie(o))}),fo=o=>Object.assign({},q(o)),j=o=>({[`&:disabled, &${o.componentCls}-disabled`]:{cursor:"not-allowed",color:o.colorTextDisabled}}),Co=o=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},fo(o)),{background:o.defaultBg,borderColor:o.defaultBorderColor,color:o.defaultColor,boxShadow:o.defaultShadow}),C(o.componentCls,{color:o.defaultHoverColor,borderColor:o.defaultHoverBorderColor,background:o.defaultHoverBg},{color:o.defaultActiveColor,borderColor:o.defaultActiveBorderColor,background:o.defaultActiveBg})),z(o.componentCls,o.ghostBg,o.defaultGhostColor,o.defaultGhostBorderColor,o.colorTextDisabled,o.colorBorder)),{[`&${o.componentCls}-dangerous`]:Object.assign(Object.assign(Object.assign({color:o.colorError,borderColor:o.colorError},C(o.componentCls,{color:o.colorErrorHover,borderColor:o.colorErrorBorderHover},{color:o.colorErrorActive,borderColor:o.colorErrorActive})),z(o.componentCls,o.ghostBg,o.colorError,o.colorError,o.colorTextDisabled,o.colorBorder)),q(o))}),ce=o=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},fo(o)),{color:o.primaryColor,background:o.colorPrimary,boxShadow:o.primaryShadow}),C(o.componentCls,{color:o.colorTextLightSolid,background:o.colorPrimaryHover},{color:o.colorTextLightSolid,background:o.colorPrimaryActive})),z(o.componentCls,o.ghostBg,o.colorPrimary,o.colorPrimary,o.colorTextDisabled,o.colorBorder,{color:o.colorPrimaryHover,borderColor:o.colorPrimaryHover},{color:o.colorPrimaryActive,borderColor:o.colorPrimaryActive})),{[`&${o.componentCls}-dangerous`]:Object.assign(Object.assign(Object.assign({background:o.colorError,boxShadow:o.dangerShadow,color:o.dangerColor},C(o.componentCls,{background:o.colorErrorHover},{background:o.colorErrorActive})),z(o.componentCls,o.ghostBg,o.colorError,o.colorError,o.colorTextDisabled,o.colorBorder,{color:o.colorErrorHover,borderColor:o.colorErrorHover},{color:o.colorErrorActive,borderColor:o.colorErrorActive})),q(o))}),ae=o=>Object.assign(Object.assign({},Co(o)),{borderStyle:"dashed"}),se=o=>Object.assign(Object.assign(Object.assign({color:o.colorLink},C(o.componentCls,{color:o.colorLinkHover,background:o.linkHoverBg},{color:o.colorLinkActive})),j(o)),{[`&${o.componentCls}-dangerous`]:Object.assign(Object.assign({color:o.colorError},C(o.componentCls,{color:o.colorErrorHover},{color:o.colorErrorActive})),j(o))}),de=o=>Object.assign(Object.assign(Object.assign({},C(o.componentCls,{color:o.colorText,background:o.textHoverBg},{color:o.colorText,background:o.colorBgTextActive})),j(o)),{[`&${o.componentCls}-dangerous`]:Object.assign(Object.assign({color:o.colorError},j(o)),C(o.componentCls,{color:o.colorErrorHover,background:o.colorErrorBg},{color:o.colorErrorHover,background:o.colorErrorBgActive}))}),ue=o=>{const{componentCls:e}=o;return{[`${e}-default`]:Co(o),[`${e}-primary`]:ce(o),[`${e}-dashed`]:ae(o),[`${e}-link`]:se(o),[`${e}-text`]:de(o),[`${e}-ghost`]:z(o.componentCls,o.ghostBg,o.colorBgContainer,o.colorBgContainer,o.colorTextDisabled,o.colorBorder)}},V=function(o){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const{componentCls:t,controlHeight:r,fontSize:n,lineHeight:l,borderRadius:i,buttonPaddingHorizontal:c,iconCls:m,buttonPaddingVertical:d}=o,p=`${t}-icon-only`;return[{[`${e}`]:{fontSize:n,lineHeight:l,height:r,padding:`${I(d)} ${I(c)}`,borderRadius:i,[`&${p}`]:{width:r,paddingInline:0,[`&${t}-compact-item`]:{flex:"none"},[`&${t}-round`]:{width:"auto"},[m]:{fontSize:o.buttonIconOnlyFontSize}},[`&${t}-loading`]:{opacity:o.opacityLoading,cursor:"default"},[`${t}-loading-icon`]:{transition:`width ${o.motionDurationSlow} ${o.motionEaseInOut}, opacity ${o.motionDurationSlow} ${o.motionEaseInOut}`}}},{[`${t}${t}-circle${e}`]:ne(o)},{[`${t}${t}-round${e}`]:le(o)}]},ge=o=>{const e=L(o,{fontSize:o.contentFontSize,lineHeight:o.contentLineHeight});return V(e,o.componentCls)},me=o=>{const e=L(o,{controlHeight:o.controlHeightSM,fontSize:o.contentFontSizeSM,lineHeight:o.contentLineHeightSM,padding:o.paddingXS,buttonPaddingHorizontal:o.paddingInlineSM,buttonPaddingVertical:o.paddingBlockSM,borderRadius:o.borderRadiusSM,buttonIconOnlyFontSize:o.onlyIconSizeSM});return V(e,`${o.componentCls}-sm`)},pe=o=>{const e=L(o,{controlHeight:o.controlHeightLG,fontSize:o.contentFontSizeLG,lineHeight:o.contentLineHeightLG,buttonPaddingHorizontal:o.paddingInlineLG,buttonPaddingVertical:o.paddingBlockLG,borderRadius:o.borderRadiusLG,buttonIconOnlyFontSize:o.onlyIconSizeLG});return V(e,`${o.componentCls}-lg`)},be=o=>{const{componentCls:e}=o;return{[e]:{[`&${e}-block`]:{width:"100%"}}}},fe=Do("Button",o=>{const e=po(o);return[re(e),ge(e),me(e),pe(e),be(e),ue(e),te(e)]},bo,{unitless:{fontWeight:!0,contentLineHeight:!0,contentLineHeightSM:!0,contentLineHeightLG:!0}});function Ce(o,e){return{[`&-item:not(${e}-last-item)`]:{marginBottom:o.calc(o.lineWidth).mul(-1).equal()},"&-item":{"&:hover,&:focus,&:active":{zIndex:2},"&[disabled]":{zIndex:0}}}}function Se(o,e){return{[`&-item:not(${e}-first-item):not(${e}-last-item)`]:{borderRadius:0},[`&-item${e}-first-item:not(${e}-last-item)`]:{[`&, &${o}-sm, &${o}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${e}-last-item:not(${e}-first-item)`]:{[`&, &${o}-sm, &${o}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}}}function he(o){const e=`${o.componentCls}-compact-vertical`;return{[e]:Object.assign(Object.assign({},Ce(o,e)),Se(o.componentCls,e))}}const ye=o=>{const{componentCls:e,calc:t}=o;return{[e]:{[`&-compact-item${e}-primary`]:{[`&:not([disabled]) + ${e}-compact-item${e}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:t(o.lineWidth).mul(-1).equal(),insetInlineStart:t(o.lineWidth).mul(-1).equal(),display:"inline-block",width:o.lineWidth,height:`calc(100% + ${I(o.lineWidth)} * 2)`,backgroundColor:o.colorPrimaryHover,content:'""'}}},"&-compact-vertical-item":{[`&${e}-primary`]:{[`&:not([disabled]) + ${e}-compact-vertical-item${e}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:t(o.lineWidth).mul(-1).equal(),insetInlineStart:t(o.lineWidth).mul(-1).equal(),display:"inline-block",width:`calc(100% + ${I(o.lineWidth)} * 2)`,height:o.lineWidth,backgroundColor:o.colorPrimaryHover,content:'""'}}}}}}},ve=_o(["Button","compact"],o=>{const e=po(o);return[Fo(e),he(e),ye(e)]},bo);var $e=function(o,e){var t={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&e.indexOf(r)<0&&(t[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(o);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(o,r[n])&&(t[r[n]]=o[r[n]]);return t};function Be(o){if(typeof o=="object"&&o){let e=o==null?void 0:o.delay;return e=!Number.isNaN(e)&&typeof e=="number"?e:0,{loading:e<=0,delay:e}}return{loading:!!o,delay:0}}const Oe=s.forwardRef((o,e)=>{var t,r,n;const{loading:l=!1,prefixCls:i,type:c,danger:m=!1,shape:d="default",size:p,styles:h,disabled:y,className:ho,rootClassName:yo,children:v,icon:O,iconPosition:vo="start",ghost:$o=!1,block:Bo=!1,htmlType:Oo="button",classNames:T,style:xo={},autoInsertSpace:w}=o,U=$e(o,["loading","prefixCls","type","danger","shape","size","styles","disabled","className","rootClassName","children","icon","iconPosition","ghost","block","htmlType","classNames","style","autoInsertSpace"]),x=c||"default",{getPrefixCls:Eo,direction:X,button:g}=u.useContext(uo),P=(t=w??(g==null?void 0:g.autoInsertSpace))!==null&&t!==void 0?t:!0,a=Eo("btn",i),[J,Ho,Io]=fe(a),zo=u.useContext(qo),E=y??zo,jo=u.useContext(go),H=u.useMemo(()=>Be(l),[l]),[S,K]=u.useState(H.loading),[N,Q]=u.useState(!1),$=Vo(e,u.createRef()),Y=u.Children.count(v)===1&&!O&&!D(x);u.useEffect(()=>{let b=null;H.delay>0?b=setTimeout(()=>{b=null,K(!0)},H.delay):K(H.loading);function f(){b&&(clearTimeout(b),b=null)}return f},[H]),u.useEffect(()=>{if(!$||!$.current||!P)return;const b=$.current.textContent;Y&&F(b)?N||Q(!0):N&&Q(!1)},[$]);const Z=b=>{const{onClick:f}=o;if(S||E){b.preventDefault();return}f==null||f(b)},{compactSize:Lo,compactItemClassnames:k}=Uo(a,X),To={large:"lg",small:"sm",middle:void 0},oo=Xo(b=>{var f,A;return(A=(f=p??Lo)!==null&&f!==void 0?f:jo)!==null&&A!==void 0?A:b}),eo=oo&&To[oo]||"",wo=S?"loading":O,R=Jo(U,["navigate"]),to=B(a,Ho,Io,{[`${a}-${d}`]:d!=="default"&&d,[`${a}-${x}`]:x,[`${a}-${eo}`]:eo,[`${a}-icon-only`]:!v&&v!==0&&!!wo,[`${a}-background-ghost`]:$o&&!D(x),[`${a}-loading`]:S,[`${a}-two-chinese-chars`]:N&&P&&!S,[`${a}-block`]:Bo,[`${a}-dangerous`]:m,[`${a}-rtl`]:X==="rtl",[`${a}-icon-end`]:vo==="end"},k,ho,yo,g==null?void 0:g.className),ro=Object.assign(Object.assign({},g==null?void 0:g.style),xo),Po=B(T==null?void 0:T.icon,(r=g==null?void 0:g.classNames)===null||r===void 0?void 0:r.icon),No=Object.assign(Object.assign({},(h==null?void 0:h.icon)||{}),((n=g==null?void 0:g.styles)===null||n===void 0?void 0:n.icon)||{}),no=O&&!S?s.createElement(mo,{prefixCls:a,className:Po,style:No},O):s.createElement(ee,{existIcon:!!O,prefixCls:a,loading:S}),lo=v||v===0?oe(v,Y&&P):null;if(R.href!==void 0)return J(s.createElement("a",Object.assign({},R,{className:B(to,{[`${a}-disabled`]:E}),href:E?void 0:R.href,style:ro,onClick:Z,ref:$,tabIndex:E?-1:0}),no,lo));let W=s.createElement("button",Object.assign({},U,{type:Oo,className:to,style:ro,onClick:Z,disabled:E,ref:$}),no,lo,!!k&&s.createElement(ve,{key:"compact",prefixCls:a}));return D(x)||(W=s.createElement(Ko,{component:"Button",disabled:S},W)),J(W)}),So=Oe;So.Group=Zo;So.__ANT_BUTTON=!0;export{So as B,ze as c};
