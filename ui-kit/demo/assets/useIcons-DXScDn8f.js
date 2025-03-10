import{m as e,v as i,n,r as t,ah as l,ak as o,aM as a}from"./index-CQvKQJ1H.js";import{v as r}from"./index-RaL56j3R.js";import{k as s}from"./buttonsRow-Tlbvi7M1.js";import{R as c}from"./SearchOutlined-DNhHo32P.js";const d=e=>{const{multipleSelectItemHeight:i,paddingXXS:t,lineWidth:l,INTERNAL_FIXED_ITEM_MARGIN:o}=e,a=e.max(e.calc(t).sub(l).equal(),0);return{basePadding:a,containerPadding:e.max(e.calc(a).sub(o).equal(),0),itemHeight:n(i),itemLineHeight:n(e.calc(i).sub(e.calc(e.lineWidth).mul(2)).equal())}},m=e=>{const{componentCls:n,iconCls:t,borderRadiusSM:l,motionDurationSlow:o,paddingXS:a,multipleItemColorDisabled:r,multipleItemBorderColorDisabled:s,colorIcon:c,colorIconHover:d,INTERNAL_FIXED_ITEM_MARGIN:m}=e,u=`${n}-selection-overflow`;return{[u]:{position:"relative",display:"flex",flex:"auto",flexWrap:"wrap",maxWidth:"100%","&-item":{flex:"none",alignSelf:"center",maxWidth:"100%",display:"inline-flex"},[`${n}-selection-item`]:{display:"flex",alignSelf:"center",flex:"none",boxSizing:"border-box",maxWidth:"100%",marginBlock:m,borderRadius:l,cursor:"default",transition:`font-size ${o}, line-height ${o}, height ${o}`,marginInlineEnd:e.calc(m).mul(2).equal(),paddingInlineStart:a,paddingInlineEnd:e.calc(a).div(2).equal(),[`${n}-disabled&`]:{color:r,borderColor:s,cursor:"not-allowed"},"&-content":{display:"inline-block",marginInlineEnd:e.calc(a).div(2).equal(),overflow:"hidden",whiteSpace:"pre",textOverflow:"ellipsis"},"&-remove":Object.assign(Object.assign({},i()),{display:"inline-flex",alignItems:"center",color:c,fontWeight:"bold",fontSize:10,lineHeight:"inherit",cursor:"pointer",[`> ${t}`]:{verticalAlign:"-0.2em"},"&:hover":{color:d}})}}}},u=(e,i)=>{const{componentCls:t,INTERNAL_FIXED_ITEM_MARGIN:l}=e,o=`${t}-selection-overflow`,a=e.multipleSelectItemHeight,r=(e=>{const{multipleSelectItemHeight:i,selectHeight:n,lineWidth:t}=e;return e.calc(n).sub(i).div(2).sub(t).equal()})(e),s=i?`${t}-${i}`:"",c=d(e);return{[`${t}-multiple${s}`]:Object.assign(Object.assign({},m(e)),{[`${t}-selector`]:{display:"flex",alignItems:"center",width:"100%",height:"100%",paddingInline:c.basePadding,paddingBlock:c.containerPadding,borderRadius:e.borderRadius,[`${t}-disabled&`]:{background:e.multipleSelectorBgDisabled,cursor:"not-allowed"},"&:after":{display:"inline-block",width:0,margin:`${n(l)} 0`,lineHeight:n(a),visibility:"hidden",content:'"\\a0"'}},[`${t}-selection-item`]:{height:c.itemHeight,lineHeight:n(c.itemLineHeight)},[`${t}-selection-wrap`]:{alignSelf:"flex-start","&:after":{lineHeight:n(a),marginBlock:l}},[`${t}-prefix`]:{marginInlineStart:e.calc(e.inputPaddingHorizontalBase).sub(c.basePadding).equal()},[`${o}-item + ${o}-item,\n        ${t}-prefix + ${t}-selection-wrap\n      `]:{[`${t}-selection-search`]:{marginInlineStart:0},[`${t}-selection-placeholder`]:{insetInlineStart:0}},[`${o}-item-suffix`]:{minHeight:c.itemHeight,marginBlock:l},[`${t}-selection-search`]:{display:"inline-flex",position:"relative",maxWidth:"100%",marginInlineStart:e.calc(e.inputPaddingHorizontalBase).sub(r).equal(),"\n          &-input,\n          &-mirror\n        ":{height:a,fontFamily:e.fontFamily,lineHeight:n(a),transition:`all ${e.motionDurationSlow}`},"&-input":{width:"100%",minWidth:4.1},"&-mirror":{position:"absolute",top:0,insetInlineStart:0,insetInlineEnd:"auto",zIndex:999,whiteSpace:"pre",visibility:"hidden"}},[`${t}-selection-placeholder`]:{position:"absolute",top:"50%",insetInlineStart:e.calc(e.inputPaddingHorizontalBase).sub(c.basePadding).equal(),insetInlineEnd:e.inputPaddingHorizontalBase,transform:"translateY(-50%)",transition:`all ${e.motionDurationSlow}`}})}};function g(e,i){const{componentCls:n}=e,t=i?`${n}-${i}`:"",l={[`${n}-multiple${t}`]:{fontSize:e.fontSize,[`${n}-selector`]:{[`${n}-show-search&`]:{cursor:"text"}},[`\n        &${n}-show-arrow ${n}-selector,\n        &${n}-allow-clear ${n}-selector\n      `]:{paddingInlineEnd:e.calc(e.fontSizeIcon).add(e.controlPaddingHorizontal).equal()}}};return[u(e,i),l]}const p=i=>{const{componentCls:n}=i,t=e(i,{selectHeight:i.controlHeightSM,multipleSelectItemHeight:i.multipleItemHeightSM,borderRadius:i.borderRadiusSM,borderRadiusSM:i.borderRadiusXS}),l=e(i,{fontSize:i.fontSizeLG,selectHeight:i.controlHeightLG,multipleSelectItemHeight:i.multipleItemHeightLG,borderRadius:i.borderRadiusLG,borderRadiusSM:i.borderRadius});return[g(i),g(t,"sm"),{[`${n}-multiple${n}-sm`]:{[`${n}-selection-placeholder`]:{insetInline:i.calc(i.controlPaddingHorizontalSM).sub(i.lineWidth).equal()},[`${n}-selection-search`]:{marginInlineStart:2}}},g(l,"lg")]};function h(e){let{suffixIcon:i,clearIcon:n,menuItemSelectedIcon:d,removeIcon:m,loading:u,multiple:g,hasFeedback:p,prefixCls:h,showSuffixIcon:f,feedbackIcon:I,showArrow:b,componentName:$}=e;const S=null!=n?n:t.createElement(l,null),x=e=>null!==i||p||b?t.createElement(t.Fragment,null,!1!==f&&e,p&&I):null;let H=null;if(void 0!==i)H=x(i);else if(u)H=x(t.createElement(a,{spin:!0}));else{const e=`${h}-suffix`;H=i=>{let{open:n,showSearch:l}=i;return x(n&&l?t.createElement(c,{className:e}):t.createElement(s,{className:e}))}}let w=null;w=void 0!==d?d:g?t.createElement(r,null):null;let v=null;return v=void 0!==m?m:t.createElement(o,null),{clearIcon:S,suffixIcon:H,itemIcon:w,removeIcon:v}}export{d as a,p as b,m as g,h as u};
