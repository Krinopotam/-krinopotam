import{j as q}from"./extends-CKwpSh1k.js";import{S as He}from"./select-BMeSluIr.js";import{S as _e}from"./select-BqfbI_Fd.js";import{r as n}from"./index-CTjT7uj6.js";import{g as We,r as Ve,m as ke,C as xe,d as M,e as Oe,o as Fe,W as Le,f as qe}from"./compact-item-ayXXrr5p.js";import{g as Xe,i as Qe,a as Ue}from"./colors-Chrt_s-B.js";import{u as Ge,p as X}from"./useClosable-ezpuUIzh.js";import{u as we,T as Je}from"./useToken-DpCeTUe_.js";import"./helpersObjects-NFjaQN06.js";import"./index-DGqZ_Opy.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CwWsuzc7.js";import"./motion-Gs4finkr.js";import"./index-Boe84S0F.js";import"./KeyCode-DNlgD2sM.js";import"./context-DoEgZWg9.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./DownOutlined-D2B1m1ns.js";import"./motion-4S5rSXvC.js";import"./SearchOutlined-BNG-1YbV.js";import"./useIcons-BnJzZTBK.js";import"./CloseOutlined-CjEpmO_q.js";const Ke=e=>{const{paddingXXS:a,lineWidth:s,tagPaddingHorizontal:r,componentCls:o,calc:l}=e,t=l(r).sub(s).equal(),p=l(a).sub(s).equal();return{[o]:Object.assign(Object.assign({},Ve(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:t,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${o}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${o}-close-icon`]:{marginInlineStart:p,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${o}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${o}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:t}}),[`${o}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},D=e=>{const{lineWidth:a,fontSizeIcon:s,calc:r}=e,o=e.fontSizeSM;return ke(e,{tagFontSize:o,tagLineHeight:we(r(e.lineHeightSM).mul(o).equal()),tagIconSize:r(s).sub(r(a).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},H=e=>({defaultBg:new Je(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),Te=We("Tag",e=>{const a=D(e);return Ke(a)},H);var Ye=function(e,a){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)a.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(s[r[o]]=e[r[o]]);return s};const Ze=n.forwardRef((e,a)=>{const{prefixCls:s,style:r,className:o,checked:l,onChange:t,onClick:p}=e,m=Ye(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:f,tag:u}=n.useContext(xe),S=h=>{t==null||t(!l),p==null||p(h)},g=f("tag",s),[E,A,d]=Te(g),B=M(g,`${g}-checkable`,{[`${g}-checkable-checked`]:l},u==null?void 0:u.className,o,A,d);return E(n.createElement("span",Object.assign({},m,{ref:a,style:Object.assign(Object.assign({},r),u==null?void 0:u.style),className:B,onClick:S})))}),er=e=>Xe(e,(a,s)=>{let{textColor:r,lightBorderColor:o,lightColor:l,darkColor:t}=s;return{[`${e.componentCls}${e.componentCls}-${a}`]:{color:r,background:l,borderColor:o,"&-inverse":{color:e.colorTextLightSolid,background:t,borderColor:t},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),rr=Oe(["Tag","preset"],e=>{const a=D(e);return er(a)},H);function or(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const v=(e,a,s)=>{const r=or(s);return{[`${e.componentCls}${e.componentCls}-${a}`]:{color:e[`color${s}`],background:e[`color${r}Bg`],borderColor:e[`color${r}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},ar=Oe(["Tag","status"],e=>{const a=D(e);return[v(a,"success","Success"),v(a,"processing","Info"),v(a,"error","Error"),v(a,"warning","Warning")]},H);var sr=function(e,a){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)a.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(s[r[o]]=e[r[o]]);return s};const tr=n.forwardRef((e,a)=>{const{prefixCls:s,className:r,rootClassName:o,style:l,children:t,icon:p,color:m,onClose:f,bordered:u=!0,visible:S}=e,g=sr(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:E,direction:A,tag:d}=n.useContext(xe),[B,h]=n.useState(!0),je=Fe(g,["closeIcon","closable"]);n.useEffect(()=>{S!==void 0&&h(S)},[S]);const _=Qe(m),W=Ue(m),z=_||W,Ne=Object.assign(Object.assign({backgroundColor:m&&!z?m:void 0},d==null?void 0:d.style),l),c=E("tag",s),[Ie,Ee,Ae]=Te(c),Be=M(c,d==null?void 0:d.className,{[`${c}-${m}`]:z,[`${c}-has-color`]:m&&!z,[`${c}-hidden`]:!B,[`${c}-rtl`]:A==="rtl",[`${c}-borderless`]:!u},r,o,Ee,Ae),V=b=>{b.stopPropagation(),f==null||f(b),!b.defaultPrevented&&h(!1)},[,ze]=Ge(X(e),X(d),{closable:!1,closeIconRender:b=>{const De=n.createElement("span",{className:`${c}-close-icon`,onClick:V},b);return qe(b,De,C=>({onClick:L=>{var R;(R=C==null?void 0:C.onClick)===null||R===void 0||R.call(C,L),V(L)},className:M(C==null?void 0:C.className,`${c}-close-icon`)}))}}),Re=typeof g.onClick=="function"||t&&t.type==="a",k=p||null,Me=k?n.createElement(n.Fragment,null,k,t&&n.createElement("span",null,t)):t,F=n.createElement("span",Object.assign({},je,{ref:a,className:Be,style:Ne}),Me,ze,_&&n.createElement(rr,{key:"preset",prefixCls:c}),W&&n.createElement(ar,{key:"status",prefixCls:c}));return Ie(Re?n.createElement(Le,{component:"Tag"},F):F)}),Pe=tr;Pe.CheckableTag=Ze;const Ir={title:"Controls/Select",component:_e,tags:["autodocs"],parameters:{docs:{}}},i={dataSet:He,style:{width:400},placeholder:"Select value"},y={args:{...i}},$={args:{...i,allowClear:!0}},x={args:{...i,value:"02"}},O={args:{...i,allowClear:!0,mode:"multiple"}},w={args:{...i,allowClear:!0,mode:"multiple",value:[{id:"01"},{id:"03"}]}},T={args:{...i,allowClear:!0,mode:"tags"}},nr=e=>{const{label:a,value:s,closable:r,onClose:o}=e,l=t=>{t.preventDefault(),t.stopPropagation()};return q.jsx(Pe,{color:"red",onMouseDown:l,closable:r,onClose:o,style:{marginRight:3},children:q.jsx("b",{children:`${s}. ${a}`})})},P={args:{...i,allowClear:!0,mode:"tags",tagRender:nr}},j={args:{...i,bordered:!1}},N={args:{...i,disabled:!0}},I={args:{...i,readOnly:!0}};var Q,U,G;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...commonArgs
  }
}`,...(G=(U=y.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,K,Y;$.parameters={...$.parameters,docs:{...(J=$.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true
  }
}`,...(Y=(K=$.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var Z,ee,re;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    value: '02'
  }
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var oe,ae,se;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true,
    mode: 'multiple'
  }
}`,...(se=(ae=O.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,ne,le;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ce,ie,de;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true,
    mode: 'tags'
  }
}`,...(de=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var me,ue,pe;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true,
    mode: 'tags',
    tagRender: tagRender
  }
}`,...(pe=(ue=P.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,Ce,be;j.parameters={...j.parameters,docs:{...(ge=j.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    bordered: false
  }
}`,...(be=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:be.source}}};var fe,Se,he;N.parameters={...N.parameters,docs:{...(fe=N.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    disabled: true
  }
}`,...(he=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:he.source}}};var ve,ye,$e;I.parameters={...I.parameters,docs:{...(ve=I.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    readOnly: true
  }
}`,...($e=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:$e.source}}};const Er=["Default","AllowClear","Preselect","Multiple","MultiplePreselect","Tags","CustomTagRender","NoBorder","Disabled","ReadOnly"];export{$ as AllowClear,P as CustomTagRender,y as Default,N as Disabled,O as Multiple,w as MultiplePreselect,j as NoBorder,x as Preselect,I as ReadOnly,T as Tags,Er as __namedExportsOrder,Ir as default};
