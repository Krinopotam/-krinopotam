import{u as Se,T as Be,j as L}from"./useToken-b19ab62a.js";import{S as ze}from"./select-f43b16e2.js";import{S as Re}from"./select-682fa1e1.js";import{r as n}from"./index-76fb7be0.js";import{u as Me,C as De}from"./useClosable-bab051fc.js";import{g as _e,r as He,m as We,d as ye,c as ve,e as $e,W as Fe}from"./compact-item-153ccf6f.js";import{g as Le,i as Ve,a as ke}from"./colors-91786050.js";import"./extends-98964cd2.js";import"./helpersObjects-335d2932.js";import"./index-6ed6bb17.js";import"./motion-a9f81d2c.js";import"./index-a764d3ff.js";import"./_commonjsHelpers-de833af9.js";import"./index-092ccb3f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./KeyCode-6413d982.js";import"./pickAttrs-f83e05d3.js";import"./motion-3729e44c.js";import"./PurePanel-71bfc635.js";import"./statusUtils-fe2ccc25.js";import"./context-5a13208d.js";import"./assertThisInitialized-8802cfe2.js";import"./SearchOutlined-2078d1e8.js";const qe=e=>{const{paddingXXS:a,lineWidth:s,tagPaddingHorizontal:r,componentCls:o,calc:l}=e,t=l(r).sub(s).equal(),u=l(a).sub(s).equal();return{[o]:Object.assign(Object.assign({},He(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:t,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${Se(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${o}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${o}-close-icon`]:{marginInlineStart:u,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${o}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${o}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:t}}),[`${o}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},z=e=>{const{lineWidth:a,fontSizeIcon:s,calc:r}=e,o=e.fontSizeSM;return We(e,{tagFontSize:o,tagLineHeight:Se(r(e.lineHeightSM).mul(o).equal()),tagIconSize:r(s).sub(r(a).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary})},R=e=>({defaultBg:new Be(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),Te=_e("Tag",e=>{const a=z(e);return qe(a)},R);var Xe=globalThis&&globalThis.__rest||function(e,a){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)a.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(s[r[o]]=e[r[o]]);return s};const Qe=n.forwardRef((e,a)=>{const{prefixCls:s,style:r,className:o,checked:l,onChange:t,onClick:u}=e,d=Xe(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:f,tag:m}=n.useContext(ye),I=A=>{t==null||t(!l),u==null||u(A)},C=f("tag",s),[p,N,E]=Te(C),g=ve(C,`${C}-checkable`,{[`${C}-checkable-checked`]:l},m==null?void 0:m.className,o,N,E);return p(n.createElement("span",Object.assign({},d,{ref:a,style:Object.assign(Object.assign({},r),m==null?void 0:m.style),className:g,onClick:I})))}),Ue=Qe,Ge=e=>Le(e,(a,s)=>{let{textColor:r,lightBorderColor:o,lightColor:l,darkColor:t}=s;return{[`${e.componentCls}${e.componentCls}-${a}`]:{color:r,background:l,borderColor:o,"&-inverse":{color:e.colorTextLightSolid,background:t,borderColor:t},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),Je=$e(["Tag","preset"],e=>{const a=z(e);return Ge(a)},R);function Ke(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const h=(e,a,s)=>{const r=Ke(s);return{[`${e.componentCls}${e.componentCls}-${a}`]:{color:e[`color${s}`],background:e[`color${r}Bg`],borderColor:e[`color${r}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},Ye=$e(["Tag","status"],e=>{const a=z(e);return[h(a,"success","Success"),h(a,"processing","Info"),h(a,"error","Error"),h(a,"warning","Warning")]},R);var Ze=globalThis&&globalThis.__rest||function(e,a){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)a.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(s[r[o]]=e[r[o]]);return s};const er=(e,a)=>{const{prefixCls:s,className:r,rootClassName:o,style:l,children:t,icon:u,color:d,onClose:f,closeIcon:m,closable:I,bordered:C=!0}=e,p=Ze(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:N,direction:E,tag:g}=n.useContext(ye),[A,M]=n.useState(!0);n.useEffect(()=>{"visible"in p&&M(p.visible)},[p.visible]);const D=Ve(d),_=ke(d),B=D||_,Oe=Object.assign(Object.assign({backgroundColor:d&&!B?d:void 0},g==null?void 0:g.style),l),c=N("tag",s),[Pe,we,je]=Te(c),Ie=ve(c,g==null?void 0:g.className,{[`${c}-${d}`]:B,[`${c}-has-color`]:d&&!B,[`${c}-hidden`]:!A,[`${c}-rtl`]:E==="rtl",[`${c}-borderless`]:!C},r,o,we,je),H=b=>{b.stopPropagation(),f==null||f(b),!b.defaultPrevented&&M(!1)},[,Ne]=Me(I,m,b=>b===null?n.createElement(De,{className:`${c}-close-icon`,onClick:H}):n.createElement("span",{className:`${c}-close-icon`,onClick:H},b),null,!1),Ee=typeof p.onClick=="function"||t&&t.type==="a",W=u||null,Ae=W?n.createElement(n.Fragment,null,W,t&&n.createElement("span",null,t)):t,F=n.createElement("span",Object.assign({},p,{ref:a,className:Ie,style:Oe}),Ae,Ne,D&&n.createElement(Je,{key:"preset",prefixCls:c}),_&&n.createElement(Ye,{key:"status",prefixCls:c}));return Pe(Ee?n.createElement(Fe,{component:"Tag"},F):F)},xe=n.forwardRef(er);xe.CheckableTag=Ue;const rr=xe,Pr={title:"Controls/Select",component:Re,tags:["autodocs"],parameters:{docs:{}}},i={dataSet:ze,style:{width:400},placeholder:"Select value"},S={args:{...i}},y={args:{...i,allowClear:!0}},v={args:{...i,value:"02"}},$={args:{...i,allowClear:!0,mode:"multiple"}},T={args:{...i,allowClear:!0,mode:"multiple",value:[{id:"01"},{id:"03"}]}},x={args:{...i,allowClear:!0,mode:"tags"}},or=e=>{const{label:a,value:s,closable:r,onClose:o}=e,l=t=>{t.preventDefault(),t.stopPropagation()};return L.jsx(rr,{color:"red",onMouseDown:l,closable:r,onClose:o,style:{marginRight:3},children:L.jsx("b",{children:`${s}. ${a}`})})},O={args:{...i,allowClear:!0,mode:"tags",tagRender:or}},P={args:{...i,bordered:!1}},w={args:{...i,disabled:!0}},j={args:{...i,readOnly:!0}};var V,k,q;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...commonArgs
  }
}`,...(q=(k=S.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var X,Q,U;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true
  }
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    value: '02'
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Y,Z,ee;$.parameters={...$.parameters,docs:{...(Y=$.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true,
    mode: 'multiple'
  }
}`,...(ee=(Z=$.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,oe,ae;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ae=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,te,ne;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true,
    mode: 'tags'
  }
}`,...(ne=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var le,ce,ie;O.parameters={...O.parameters,docs:{...(le=O.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true,
    mode: 'tags',
    tagRender: tagRender
  }
}`,...(ie=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,me,ge;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    bordered: false
  }
}`,...(ge=(me=P.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ue,pe,Ce;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    disabled: true
  }
}`,...(Ce=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:Ce.source}}};var be,fe,he;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    readOnly: true
  }
}`,...(he=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};const wr=["Default","AllowClear","Preselect","Multiple","MultiplePreselect","Tags","CustomTagRender","NoBorder","Disabled","ReadOnly"];export{y as AllowClear,O as CustomTagRender,S as Default,w as Disabled,$ as Multiple,T as MultiplePreselect,P as NoBorder,v as Preselect,j as ReadOnly,x as Tags,wr as __namedExportsOrder,Pr as default};
