import{j as k}from"./useToken-268f632d.js";import{S as Ee}from"./select-f43b16e2.js";import{S as Ae}from"./select-82188730.js";import{r as n}from"./index-5819ae2c.js";import{u as Re,C as ze}from"./useClosable-7a147c6b.js";import{g as Be,r as Me,m as De,d as he,c as Se,e as ye,W as _e}from"./compact-item-e0eb0d02.js";import{g as He,i as We,a as ke}from"./colors-dae18b42.js";import"./DownOutlined-7d62f4d3.js";import"./index-092ccb3f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_commonjsHelpers-de833af9.js";import"./isNativeReflectConstruct-2f1897fe.js";import"./index-53e6b65f.js";import"./useZIndex-9f7c196b.js";import"./KeyCode-6413d982.js";import"./pickAttrs-f49ef707.js";import"./motion-3729e44c.js";import"./PurePanel-a66be90d.js";import"./statusUtils-8e8708fb.js";import"./context-acf775e7.js";import"./SearchOutlined-826801c4.js";const Fe=e=>{const{paddingXXS:s,lineWidth:a,tagPaddingHorizontal:r,componentCls:o}=e,l=r-a,t=s-a;return{[o]:Object.assign(Object.assign({},Me(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${o}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${o}-close-icon`]:{marginInlineStart:t,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${o}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${o}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${o}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},R=e=>{const{lineWidth:s,fontSizeIcon:a}=e,r=e.fontSizeSM,o=`${e.lineHeightSM*r}px`;return De(e,{tagFontSize:r,tagLineHeight:o,tagIconSize:a-2*s,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary})},z=e=>({defaultBg:e.colorFillQuaternary,defaultColor:e.colorText}),ve=Be("Tag",e=>{const s=R(e);return Fe(s)},z);var Le=globalThis&&globalThis.__rest||function(e,s){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)s.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(a[r[o]]=e[r[o]]);return a};const Xe=n.forwardRef((e,s)=>{const{prefixCls:a,style:r,className:o,checked:l,onChange:t,onClick:b}=e,d=Le(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:f,tag:m}=n.useContext(he),I=g=>{t==null||t(!l),b==null||b(g)},u=f("tag",a),[p,N]=ve(u),E=Se(u,`${u}-checkable`,{[`${u}-checkable-checked`]:l},m==null?void 0:m.className,o,N);return p(n.createElement("span",Object.assign({},d,{ref:s,style:Object.assign(Object.assign({},r),m==null?void 0:m.style),className:E,onClick:I})))}),Qe=Xe,Ue=e=>He(e,(s,a)=>{let{textColor:r,lightBorderColor:o,lightColor:l,darkColor:t}=a;return{[`${e.componentCls}-${s}`]:{color:r,background:l,borderColor:o,"&-inverse":{color:e.colorTextLightSolid,background:t,borderColor:t},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),Ve=ye(["Tag","preset"],e=>{const s=R(e);return Ue(s)},z);function qe(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const h=(e,s,a)=>{const r=qe(a);return{[`${e.componentCls}-${s}`]:{color:e[`color${a}`],background:e[`color${r}Bg`],borderColor:e[`color${r}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},Ge=ye(["Tag","status"],e=>{const s=R(e);return[h(s,"success","Success"),h(s,"processing","Info"),h(s,"error","Error"),h(s,"warning","Warning")]},z);var Je=globalThis&&globalThis.__rest||function(e,s){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)s.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(a[r[o]]=e[r[o]]);return a};const Ke=(e,s)=>{const{prefixCls:a,className:r,rootClassName:o,style:l,children:t,icon:b,color:d,onClose:f,closeIcon:m,closable:I,bordered:u=!0}=e,p=Je(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:N,direction:E,tag:g}=n.useContext(he),[xe,B]=n.useState(!0);n.useEffect(()=>{"visible"in p&&B(p.visible)},[p.visible]);const M=We(d),D=ke(d),A=M||D,Te=Object.assign(Object.assign({backgroundColor:d&&!A?d:void 0},g==null?void 0:g.style),l),c=N("tag",a),[Oe,Pe]=ve(c),we=Se(c,g==null?void 0:g.className,{[`${c}-${d}`]:A,[`${c}-has-color`]:d&&!A,[`${c}-hidden`]:!xe,[`${c}-rtl`]:E==="rtl",[`${c}-borderless`]:!u},r,o,Pe),_=C=>{C.stopPropagation(),f==null||f(C),!C.defaultPrevented&&B(!1)},[,je]=Re(I,m,C=>C===null?n.createElement(ze,{className:`${c}-close-icon`,onClick:_}):n.createElement("span",{className:`${c}-close-icon`,onClick:_},C),null,!1),Ie=typeof p.onClick=="function"||t&&t.type==="a",H=b||null,Ne=H?n.createElement(n.Fragment,null,H,t&&n.createElement("span",null,t)):t,W=n.createElement("span",Object.assign({},p,{ref:s,className:we,style:Te}),Ne,je,M&&n.createElement(Ve,{key:"preset",prefixCls:c}),D&&n.createElement(Ge,{key:"status",prefixCls:c}));return Oe(Ie?n.createElement(_e,{component:"Tag"},W):W)},$e=n.forwardRef(Ke);$e.CheckableTag=Qe;const Ye=$e,vr={title:"Controls/Select",component:Ae,tags:["autodocs"],parameters:{docs:{}}},i={dataSet:Ee,style:{width:400},placeholder:"Select value"},S={args:{...i}},y={args:{...i,allowClear:!0}},v={args:{...i,value:"02"}},$={args:{...i,allowClear:!0,mode:"multiple"}},x={args:{...i,allowClear:!0,mode:"multiple",value:[{id:"01"},{id:"03"}]}},T={args:{...i,allowClear:!0,mode:"tags"}},Ze=e=>{const{label:s,value:a,closable:r,onClose:o}=e,l=t=>{t.preventDefault(),t.stopPropagation()};return k.jsx(Ye,{color:"red",onMouseDown:l,closable:r,onClose:o,style:{marginRight:3},children:k.jsx("b",{children:`${a}. ${s}`})})},O={args:{...i,allowClear:!0,mode:"tags",tagRender:Ze}},P={args:{...i,bordered:!1}},w={args:{...i,disabled:!0}},j={args:{...i,readOnly:!0}};var F,L,X;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...commonArgs
  }
}`,...(X=(L=S.parameters)==null?void 0:L.docs)==null?void 0:X.source}}};var Q,U,V;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true
  }
}`,...(V=(U=y.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var q,G,J;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    value: '02'
  }
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Y,Z;$.parameters={...$.parameters,docs:{...(K=$.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true,
    mode: 'multiple'
  }
}`,...(Z=(Y=$.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,oe;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(oe=(re=x.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ae,te;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true,
    mode: 'tags'
  }
}`,...(te=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,le,ce;O.parameters={...O.parameters,docs:{...(ne=O.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true,
    mode: 'tags',
    tagRender: tagRender
  }
}`,...(ce=(le=O.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ie,de,me;P.parameters={...P.parameters,docs:{...(ie=P.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    bordered: false
  }
}`,...(me=(de=P.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ge,pe,ue;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    disabled: true
  }
}`,...(ue=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var Ce,be,fe;j.parameters={...j.parameters,docs:{...(Ce=j.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    readOnly: true
  }
}`,...(fe=(be=j.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};const $r=["Default","AllowClear","Preselect","Multiple","MultiplePreselect","Tags","CustomTagRender","NoBorder","Disabled","ReadOnly"];export{y as AllowClear,O as CustomTagRender,S as Default,w as Disabled,$ as Multiple,x as MultiplePreselect,P as NoBorder,v as Preselect,j as ReadOnly,T as Tags,$r as __namedExportsOrder,vr as default};
//# sourceMappingURL=select.stories-04cf5782.js.map
