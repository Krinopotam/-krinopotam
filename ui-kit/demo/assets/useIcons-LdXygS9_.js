import{y as $,z as d,E as R,r as a,am as E,aj as y,aJ as z}from"./index-CzYOWtY3.js";import{l as C}from"./index-DX1MZAsy.js";import{k as M}from"./buttonsRow-NOziNv-G.js";import{R as N}from"./SearchOutlined-C3qLh6j9.js";const D=e=>{const{multipleSelectItemHeight:l,paddingXXS:i,lineWidth:n,INTERNAL_FIXED_ITEM_MARGIN:t}=e,o=e.max(e.calc(i).sub(n).equal(),0),s=e.max(e.calc(o).sub(t).equal(),0);return{basePadding:o,containerPadding:s,itemHeight:d(l),itemLineHeight:d(e.calc(l).sub(e.calc(e.lineWidth).mul(2)).equal())}},P=e=>{const{multipleSelectItemHeight:l,selectHeight:i,lineWidth:n}=e;return e.calc(i).sub(l).div(2).sub(n).equal()},W=e=>{const{componentCls:l,iconCls:i,borderRadiusSM:n,motionDurationSlow:t,paddingXS:o,multipleItemColorDisabled:s,multipleItemBorderColorDisabled:c,colorIcon:r,colorIconHover:p,INTERNAL_FIXED_ITEM_MARGIN:m}=e;return{[`${l}-selection-overflow`]:{position:"relative",display:"flex",flex:"auto",flexWrap:"wrap",maxWidth:"100%","&-item":{flex:"none",alignSelf:"center",maxWidth:"100%",display:"inline-flex"},[`${l}-selection-item`]:{display:"flex",alignSelf:"center",flex:"none",boxSizing:"border-box",maxWidth:"100%",marginBlock:m,borderRadius:n,cursor:"default",transition:`font-size ${t}, line-height ${t}, height ${t}`,marginInlineEnd:e.calc(m).mul(2).equal(),paddingInlineStart:o,paddingInlineEnd:e.calc(o).div(2).equal(),[`${l}-disabled&`]:{color:s,borderColor:c,cursor:"not-allowed"},"&-content":{display:"inline-block",marginInlineEnd:e.calc(o).div(2).equal(),overflow:"hidden",whiteSpace:"pre",textOverflow:"ellipsis"},"&-remove":Object.assign(Object.assign({},R()),{display:"inline-flex",alignItems:"center",color:r,fontWeight:"bold",fontSize:10,lineHeight:"inherit",cursor:"pointer",[`> ${i}`]:{verticalAlign:"-0.2em"},"&:hover":{color:p}})}}}},q=(e,l)=>{const{componentCls:i,INTERNAL_FIXED_ITEM_MARGIN:n}=e,t=`${i}-selection-overflow`,o=e.multipleSelectItemHeight,s=P(e),c=l?`${i}-${l}`:"",r=D(e);return{[`${i}-multiple${c}`]:Object.assign(Object.assign({},W(e)),{[`${i}-selector`]:{display:"flex",flexWrap:"wrap",alignItems:"center",height:"100%",paddingInline:r.basePadding,paddingBlock:r.containerPadding,borderRadius:e.borderRadius,[`${i}-disabled&`]:{background:e.multipleSelectorBgDisabled,cursor:"not-allowed"},"&:after":{display:"inline-block",width:0,margin:`${d(n)} 0`,lineHeight:d(o),visibility:"hidden",content:'"\\a0"'}},[`${i}-selection-item`]:{height:r.itemHeight,lineHeight:d(r.itemLineHeight)},[`${t}-item + ${t}-item`]:{[`${i}-selection-search`]:{marginInlineStart:0}},[`${t}-item-suffix`]:{height:"100%"},[`${i}-selection-search`]:{display:"inline-flex",position:"relative",maxWidth:"100%",marginInlineStart:e.calc(e.inputPaddingHorizontalBase).sub(s).equal(),"\n          &-input,\n          &-mirror\n        ":{height:o,fontFamily:e.fontFamily,lineHeight:d(o),transition:`all ${e.motionDurationSlow}`},"&-input":{width:"100%",minWidth:4.1},"&-mirror":{position:"absolute",top:0,insetInlineStart:0,insetInlineEnd:"auto",zIndex:999,whiteSpace:"pre",visibility:"hidden"}},[`${i}-selection-placeholder`]:{position:"absolute",top:"50%",insetInlineStart:e.inputPaddingHorizontalBase,insetInlineEnd:e.inputPaddingHorizontalBase,transform:"translateY(-50%)",transition:`all ${e.motionDurationSlow}`}})}};function S(e,l){const{componentCls:i}=e,n=l?`${i}-${l}`:"",t={[`${i}-multiple${n}`]:{fontSize:e.fontSize,[`${i}-selector`]:{[`${i}-show-search&`]:{cursor:"text"}},[`
        &${i}-show-arrow ${i}-selector,
        &${i}-allow-clear ${i}-selector
      `]:{paddingInlineEnd:e.calc(e.fontSizeIcon).add(e.controlPaddingHorizontal).equal()}}};return[q(e,l),t]}const B=e=>{const{componentCls:l}=e,i=$(e,{selectHeight:e.controlHeightSM,multipleSelectItemHeight:e.multipleItemHeightSM,borderRadius:e.borderRadiusSM,borderRadiusSM:e.borderRadiusXS}),n=$(e,{fontSize:e.fontSizeLG,selectHeight:e.controlHeightLG,multipleSelectItemHeight:e.multipleItemHeightLG,borderRadius:e.borderRadiusLG,borderRadiusSM:e.borderRadius});return[S(e),S(i,"sm"),{[`${l}-multiple${l}-sm`]:{[`${l}-selection-placeholder`]:{insetInline:e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal()},[`${l}-selection-search`]:{marginInlineStart:2}}},S(n,"lg")]};function F(e){let{suffixIcon:l,clearIcon:i,menuItemSelectedIcon:n,removeIcon:t,loading:o,multiple:s,hasFeedback:c,prefixCls:r,showSuffixIcon:p,feedbackIcon:m,showArrow:b,componentName:L}=e;const x=i??a.createElement(E,null),u=I=>l===null&&!c&&!b?null:a.createElement(a.Fragment,null,p!==!1&&I,c&&m);let g=null;if(l!==void 0)g=u(l);else if(o)g=u(a.createElement(z,{spin:!0}));else{const I=`${r}-suffix`;g=w=>{let{open:H,showSearch:v}=w;return u(H&&v?a.createElement(N,{className:I}):a.createElement(M,{className:I}))}}let f=null;n!==void 0?f=n:s?f=a.createElement(C,null):f=null;let h=null;return t!==void 0?h=t:h=a.createElement(y,null),{clearIcon:x,suffixIcon:g,itemIcon:f,removeIcon:h}}export{D as a,B as b,W as g,F as u};
