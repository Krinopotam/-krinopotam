import{j as q}from"./extends-BRD_ACZV.js";import{S as He,a as _e}from"./select-Dk2WbkZa.js";import{r as n}from"./index-uubelm5h.js";import{g as We,r as Ve,m as ke,C as xe,c as M,i as Oe,o as Fe,W as Le,j as qe}from"./compact-item-Cc18Jwjb.js";import{g as Xe,i as Qe,a as Ue}from"./colors-C2uSR3nC.js";import{u as Ge,p as X}from"./useClosable-B_cjSSA6.js";import{u as we,T as Je}from"./useToken-5hoSZr8q.js";import"./splitObject-C6hVKqbV.js";import"./isArray-Cl7xn3Rc.js";import"./useShowArrow-DypBT1gv.js";import"./index-DSOWIBN6.js";import"./context-B9fTWsvw.js";import"./index-DaxZXI7c.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./KeyCode-DNlgD2sM.js";import"./pickAttrs-CgiZ8JxW.js";import"./DownOutlined-CLv9oSrw.js";import"./List-Ca7uexCV.js";import"./useIcons-BrGvzros.js";import"./CheckOutlined-Brjc5mOT.js";import"./CloseOutlined-C4rdU_UQ.js";import"./SearchOutlined-CS-uAFUb.js";import"./motion-882RPeBL.js";import"./useVariants-DZ-kQ5YQ.js";const Ke=e=>{const{paddingXXS:a,lineWidth:t,tagPaddingHorizontal:r,componentCls:o,calc:l}=e,s=l(r).sub(t).equal(),p=l(a).sub(t).equal();return{[o]:Object.assign(Object.assign({},Ve(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:s,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${o}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${o}-close-icon`]:{marginInlineStart:p,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${o}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${o}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:s}}),[`${o}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},D=e=>{const{lineWidth:a,fontSizeIcon:t,calc:r}=e,o=e.fontSizeSM;return ke(e,{tagFontSize:o,tagLineHeight:we(r(e.lineHeightSM).mul(o).equal()),tagIconSize:r(t).sub(r(a).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},H=e=>({defaultBg:new Je(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),Te=We("Tag",e=>{const a=D(e);return Ke(a)},H);var Ye=function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)a.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const Ze=n.forwardRef((e,a)=>{const{prefixCls:t,style:r,className:o,checked:l,onChange:s,onClick:p}=e,m=Ye(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:f,tag:u}=n.useContext(xe),S=h=>{s==null||s(!l),p==null||p(h)},g=f("tag",t),[E,A,d]=Te(g),B=M(g,`${g}-checkable`,{[`${g}-checkable-checked`]:l},u==null?void 0:u.className,o,A,d);return E(n.createElement("span",Object.assign({},m,{ref:a,style:Object.assign(Object.assign({},r),u==null?void 0:u.style),className:B,onClick:S})))}),er=e=>Xe(e,(a,t)=>{let{textColor:r,lightBorderColor:o,lightColor:l,darkColor:s}=t;return{[`${e.componentCls}${e.componentCls}-${a}`]:{color:r,background:l,borderColor:o,"&-inverse":{color:e.colorTextLightSolid,background:s,borderColor:s},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),rr=Oe(["Tag","preset"],e=>{const a=D(e);return er(a)},H);function or(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const v=(e,a,t)=>{const r=or(t);return{[`${e.componentCls}${e.componentCls}-${a}`]:{color:e[`color${t}`],background:e[`color${r}Bg`],borderColor:e[`color${r}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},ar=Oe(["Tag","status"],e=>{const a=D(e);return[v(a,"success","Success"),v(a,"processing","Info"),v(a,"error","Error"),v(a,"warning","Warning")]},H);var tr=function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)a.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const sr=n.forwardRef((e,a)=>{const{prefixCls:t,className:r,rootClassName:o,style:l,children:s,icon:p,color:m,onClose:f,bordered:u=!0,visible:S}=e,g=tr(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:E,direction:A,tag:d}=n.useContext(xe),[B,h]=n.useState(!0),je=Fe(g,["closeIcon","closable"]);n.useEffect(()=>{S!==void 0&&h(S)},[S]);const _=Qe(m),W=Ue(m),z=_||W,Ne=Object.assign(Object.assign({backgroundColor:m&&!z?m:void 0},d==null?void 0:d.style),l),c=E("tag",t),[Ie,Ee,Ae]=Te(c),Be=M(c,d==null?void 0:d.className,{[`${c}-${m}`]:z,[`${c}-has-color`]:m&&!z,[`${c}-hidden`]:!B,[`${c}-rtl`]:A==="rtl",[`${c}-borderless`]:!u},r,o,Ee,Ae),V=b=>{b.stopPropagation(),f==null||f(b),!b.defaultPrevented&&h(!1)},[,ze]=Ge(X(e),X(d),{closable:!1,closeIconRender:b=>{const De=n.createElement("span",{className:`${c}-close-icon`,onClick:V},b);return qe(b,De,C=>({onClick:L=>{var R;(R=C==null?void 0:C.onClick)===null||R===void 0||R.call(C,L),V(L)},className:M(C==null?void 0:C.className,`${c}-close-icon`)}))}}),Re=typeof g.onClick=="function"||s&&s.type==="a",k=p||null,Me=k?n.createElement(n.Fragment,null,k,s&&n.createElement("span",null,s)):s,F=n.createElement("span",Object.assign({},je,{ref:a,className:Be,style:Ne}),Me,ze,_&&n.createElement(rr,{key:"preset",prefixCls:c}),W&&n.createElement(ar,{key:"status",prefixCls:c}));return Ie(Re?n.createElement(Le,{component:"Tag"},F):F)}),Pe=sr;Pe.CheckableTag=Ze;const Ar={title:"Controls/Select",component:He,tags:["autodocs"],parameters:{docs:{}}},i={dataSet:_e,style:{width:400},placeholder:"Select value"},y={args:{...i}},$={args:{...i,allowClear:!0}},x={args:{...i,value:"02"}},O={args:{...i,allowClear:!0,mode:"multiple"}},w={args:{...i,allowClear:!0,mode:"multiple",value:[{id:"01"},{id:"03"}]}},T={args:{...i,allowClear:!0,mode:"tags"}},nr=e=>{const{label:a,value:t,closable:r,onClose:o}=e,l=s=>{s.preventDefault(),s.stopPropagation()};return q.jsx(Pe,{color:"red",onMouseDown:l,closable:r,onClose:o,style:{marginRight:3},children:q.jsx("b",{children:`${t}. ${a}`})})},P={args:{...i,allowClear:!0,mode:"tags",tagRender:nr}},j={args:{...i,bordered:!1}},N={args:{...i,disabled:!0}},I={args:{...i,readOnly:!0}};var Q,U,G;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var oe,ae,te;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true,
    mode: 'multiple'
  }
}`,...(te=(ae=O.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,ne,le;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...($e=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:$e.source}}};const Br=["Default","AllowClear","Preselect","Multiple","MultiplePreselect","Tags","CustomTagRender","NoBorder","Disabled","ReadOnly"];export{$ as AllowClear,P as CustomTagRender,y as Default,N as Disabled,O as Multiple,w as MultiplePreselect,j as NoBorder,x as Preselect,I as ReadOnly,T as Tags,Br as __namedExportsOrder,Ar as default};
