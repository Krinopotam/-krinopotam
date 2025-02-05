import{j as q}from"./jsx-runtime-CLpGMVip.js";import{S as He,a as _e}from"./select-C5pa33KZ.js";import{r as s}from"./index-C9MQhBv9.js";import{g as Fe,m as We,r as Ve,C as xe,c as M,n as Oe,o as ke,p as Le,W as qe}from"./compact-item-DA-GXfnI.js";import{g as Xe,i as Qe,a as Ue}from"./colors-DUoAwKpO.js";import{u as Ge,p as X}from"./useClosable-D8jC4WSZ.js";import{F as Je,u as we}from"./useToken-C7r1PZCj.js";import"./splitObject-C6hVKqbV.js";import"./isArray-Cl7xn3Rc.js";import"./useShowArrow-DQQcmrQc.js";import"./index-CEaSTCJ_.js";import"./context-55JlqysY.js";import"./index-DYSaHhaM.js";import"./index-B-Tif3g2.js";import"./KeyCode-lh1qUinJ.js";import"./pickAttrs-Br7KB4bY.js";import"./DownOutlined-LA98A-kK.js";import"./List-D-55QpIp.js";import"./useIcons-CRHQKqOa.js";import"./CheckOutlined-Buza8fpw.js";import"./CloseOutlined-DRVLVuFC.js";import"./SearchOutlined-DFtyfXXT.js";import"./motion-hLQ8GYzu.js";import"./useVariants-54jhFFnz.js";const Ke=e=>{const{paddingXXS:a,lineWidth:n,tagPaddingHorizontal:r,componentCls:o,calc:l}=e,t=l(r).sub(n).equal(),p=l(a).sub(n).equal();return{[o]:Object.assign(Object.assign({},Ve(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:t,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${o}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${o}-close-icon`]:{marginInlineStart:p,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${o}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${o}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:t}}),[`${o}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},D=e=>{const{lineWidth:a,fontSizeIcon:n,calc:r}=e,o=e.fontSizeSM;return We(e,{tagFontSize:o,tagLineHeight:we(r(e.lineHeightSM).mul(o).equal()),tagIconSize:r(n).sub(r(a).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},H=e=>({defaultBg:new Je(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),Te=Fe("Tag",e=>{const a=D(e);return Ke(a)},H);var Ye=function(e,a){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)a.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const Ze=s.forwardRef((e,a)=>{const{prefixCls:n,style:r,className:o,checked:l,onChange:t,onClick:p}=e,u=Ye(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:b,tag:m}=s.useContext(xe),S=h=>{t==null||t(!l),p==null||p(h)},g=b("tag",n),[E,A,d]=Te(g),B=M(g,`${g}-checkable`,{[`${g}-checkable-checked`]:l},m==null?void 0:m.className,o,A,d);return E(s.createElement("span",Object.assign({},u,{ref:a,style:Object.assign(Object.assign({},r),m==null?void 0:m.style),className:B,onClick:S})))}),er=e=>Xe(e,(a,n)=>{let{textColor:r,lightBorderColor:o,lightColor:l,darkColor:t}=n;return{[`${e.componentCls}${e.componentCls}-${a}`]:{color:r,background:l,borderColor:o,"&-inverse":{color:e.colorTextLightSolid,background:t,borderColor:t},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),rr=Oe(["Tag","preset"],e=>{const a=D(e);return er(a)},H);function or(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const y=(e,a,n)=>{const r=or(n);return{[`${e.componentCls}${e.componentCls}-${a}`]:{color:e[`color${n}`],background:e[`color${r}Bg`],borderColor:e[`color${r}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},ar=Oe(["Tag","status"],e=>{const a=D(e);return[y(a,"success","Success"),y(a,"processing","Info"),y(a,"error","Error"),y(a,"warning","Warning")]},H);var nr=function(e,a){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)a.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const tr=s.forwardRef((e,a)=>{const{prefixCls:n,className:r,rootClassName:o,style:l,children:t,icon:p,color:u,onClose:b,bordered:m=!0,visible:S}=e,g=nr(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:E,direction:A,tag:d}=s.useContext(xe),[B,h]=s.useState(!0),je=ke(g,["closeIcon","closable"]);s.useEffect(()=>{S!==void 0&&h(S)},[S]);const _=Qe(u),F=Ue(u),z=_||F,Ne=Object.assign(Object.assign({backgroundColor:u&&!z?u:void 0},d==null?void 0:d.style),l),c=E("tag",n),[Ie,Ee,Ae]=Te(c),Be=M(c,d==null?void 0:d.className,{[`${c}-${u}`]:z,[`${c}-has-color`]:u&&!z,[`${c}-hidden`]:!B,[`${c}-rtl`]:A==="rtl",[`${c}-borderless`]:!m},r,o,Ee,Ae),W=f=>{f.stopPropagation(),b==null||b(f),!f.defaultPrevented&&h(!1)},[,ze]=Ge(X(e),X(d),{closable:!1,closeIconRender:f=>{const De=s.createElement("span",{className:`${c}-close-icon`,onClick:W},f);return Le(f,De,C=>({onClick:L=>{var R;(R=C==null?void 0:C.onClick)===null||R===void 0||R.call(C,L),W(L)},className:M(C==null?void 0:C.className,`${c}-close-icon`)}))}}),Re=typeof g.onClick=="function"||t&&t.type==="a",V=p||null,Me=V?s.createElement(s.Fragment,null,V,t&&s.createElement("span",null,t)):t,k=s.createElement("span",Object.assign({},je,{ref:a,className:Be,style:Ne}),Me,ze,_&&s.createElement(rr,{key:"preset",prefixCls:c}),F&&s.createElement(ar,{key:"status",prefixCls:c}));return Ie(Re?s.createElement(qe,{component:"Tag"},k):k)}),Pe=tr;Pe.CheckableTag=Ze;const Er={title:"Controls/Select",component:He,tags:["autodocs"],parameters:{docs:{}}},i={dataSet:_e,style:{width:400},placeholder:"Select value"},$={args:{...i}},v={args:{...i,allowClear:!0}},x={args:{...i,value:"02"}},O={args:{...i,allowClear:!0,mode:"multiple"}},w={args:{...i,allowClear:!0,mode:"multiple",value:[{id:"01"},{id:"03"}]}},T={args:{...i,allowClear:!0,mode:"tags"}},sr=e=>{const{label:a,value:n,closable:r,onClose:o}=e,l=t=>{t.preventDefault(),t.stopPropagation()};return q.jsx(Pe,{color:"red",onMouseDown:l,closable:r,onClose:o,style:{marginRight:3},children:q.jsx("b",{children:`${n}. ${a}`})})},P={args:{...i,allowClear:!0,mode:"tags",tagRender:sr}},j={args:{...i,bordered:!1}},N={args:{...i,disabled:!0}},I={args:{...i,readOnly:!0}};var Q,U,G;$.parameters={...$.parameters,docs:{...(Q=$.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...commonArgs
  }
}`,...(G=(U=$.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,K,Y;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true
  }
}`,...(Y=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var Z,ee,re;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    value: '02'
  }
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var oe,ae,ne;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true,
    mode: 'multiple'
  }
}`,...(ne=(ae=O.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,se,le;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true,
    mode: 'multiple',
    value: [{
      id: '01'
    }, {
      id: '03'
    }]
  }
}`,...(le=(se=w.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,ie,de;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true,
    mode: 'tags'
  }
}`,...(de=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,me,pe;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true,
    mode: 'tags',
    tagRender: tagRender
  }
}`,...(pe=(me=P.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,Ce,fe;j.parameters={...j.parameters,docs:{...(ge=j.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    bordered: false
  }
}`,...(fe=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:fe.source}}};var be,Se,he;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    disabled: true
  }
}`,...(he=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:he.source}}};var ye,$e,ve;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    readOnly: true
  }
}`,...(ve=($e=I.parameters)==null?void 0:$e.docs)==null?void 0:ve.source}}};const Ar=["Default","AllowClear","Preselect","Multiple","MultiplePreselect","Tags","CustomTagRender","NoBorder","Disabled","ReadOnly"];export{v as AllowClear,P as CustomTagRender,$ as Default,N as Disabled,O as Multiple,w as MultiplePreselect,j as NoBorder,x as Preselect,I as ReadOnly,T as Tags,Ar as __namedExportsOrder,Er as default};
