import{_ as G,j as E}from"./extends-CKwpSh1k.js";import{B as K,D as B}from"./dForm-Bv2L02vf.js";import"./index-DGqZ_Opy.js";import"./dayjs.min-BljPK31Q.js";import{r as c}from"./index-CTjT7uj6.js";import{_ as J,c as _,g as Q,m as U,r as Y,n as Z,C as ee,D as ne,f as ae,W as ie,R as te}from"./compact-item-B2r7eKHn.js";import{F as le,G as D,u as g,T as de}from"./useToken-DuQNFAH6.js";import{u as z}from"./index-56GSrRrr.js";import{K as N}from"./KeyCode-DNlgD2sM.js";import"./helpersObjects-NFjaQN06.js";import"./index-Boe84S0F.js";import"./index-DKKcxpSc.js";import"./context-zxaTOXwp.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./useVariants-bMUIY1dl.js";import"./motion-D1Ok7SUs.js";import"./index-BzgAe6ki.js";import"./motion-4S5rSXvC.js";import"./row-Bz4KYDPc.js";import"./roundedArrow-CdZeBiH2.js";import"./zoom-DgLa7ZOz.js";import"./colors-DKxxPweQ.js";import"./QuestionCircleOutlined-DItjCDaI.js";import"./ExclamationCircleFilled-BijZsmvo.js";import"./updateModalTheme-nn0WQEFL.js";import"./modalRender-C0UNESu4.js";import"./index-C1vctpir.js";import"./InfoCircleOutlined-B2Jjl6_Y.js";import"./button-cAudtZ5H.js";import"./button-dqH3xn1c.js";import"./buttonsRow-UYP48lyS.js";import"./Sider-C8lbNVsG.js";import"./DownOutlined-dRo7eB-m.js";import"./helpersString-BLksZHLM.js";import"./v4-CQkTLCs1.js";import"./index-BRV0Se7Z.js";import"./index-DrMe33ah.js";import"./CloseOutlined-RkEA9oNw.js";import"./useClosable-DReJefU5.js";import"./index-4vYY965U.js";import"./CheckOutlined-ChgTJtAc.js";import"./useIsDebugMode-B-VM_G4X.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";var oe=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],T=c.forwardRef(function(e,n){var l,a=e.prefixCls,d=a===void 0?"rc-switch":a,r=e.className,s=e.checked,t=e.defaultChecked,i=e.disabled,o=e.loadingIcon,u=e.checkedChildren,p=e.unCheckedChildren,C=e.onClick,S=e.onChange,b=e.onKeyDown,V=J(e,oe),I=z(!1,{value:s,defaultValue:t}),$=le(I,2),y=$[0],f=$[1];function v(h,q){var w=y;return i||(w=h,f(w),S==null||S(w,q)),w}function F(h){h.which===N.LEFT?v(!1,h):h.which===N.RIGHT&&v(!0,h),b==null||b(h)}function m(h){var q=v(!y,h);C==null||C(q,h)}var M=_(d,r,(l={},D(l,"".concat(d,"-checked"),y),D(l,"".concat(d,"-disabled"),i),l));return c.createElement("button",G({},V,{type:"button",role:"switch","aria-checked":y,disabled:i,className:M,ref:n,onKeyDown:F,onClick:m}),o,c.createElement("span",{className:"".concat(d,"-inner")},c.createElement("span",{className:"".concat(d,"-inner-checked")},u),c.createElement("span",{className:"".concat(d,"-inner-unchecked")},p)))});T.displayName="Switch";const re=e=>{const{componentCls:n,trackHeightSM:l,trackPadding:a,trackMinWidthSM:d,innerMinMarginSM:r,innerMaxMarginSM:s,handleSizeSM:t,calc:i}=e,o=`${n}-inner`,u=g(i(t).add(i(a).mul(2)).equal()),p=g(i(s).mul(2).equal());return{[n]:{[`&${n}-small`]:{minWidth:d,height:l,lineHeight:g(l),[`${n}-inner`]:{paddingInlineStart:s,paddingInlineEnd:r,[`${o}-checked, ${o}-unchecked`]:{minHeight:l},[`${o}-checked`]:{marginInlineStart:`calc(-100% + ${u} - ${p})`,marginInlineEnd:`calc(100% - ${u} + ${p})`},[`${o}-unchecked`]:{marginTop:i(l).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${n}-handle`]:{width:t,height:t},[`${n}-loading-icon`]:{top:i(i(t).sub(e.switchLoadingIconSize)).div(2).equal(),fontSize:e.switchLoadingIconSize},[`&${n}-checked`]:{[`${n}-inner`]:{paddingInlineStart:r,paddingInlineEnd:s,[`${o}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${o}-unchecked`]:{marginInlineStart:`calc(100% - ${u} + ${p})`,marginInlineEnd:`calc(-100% + ${u} - ${p})`}},[`${n}-handle`]:{insetInlineStart:`calc(100% - ${g(i(t).add(a).equal())})`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${o}`]:{[`${o}-unchecked`]:{marginInlineStart:i(e.marginXXS).div(2).equal(),marginInlineEnd:i(e.marginXXS).mul(-1).div(2).equal()}},[`&${n}-checked ${o}`]:{[`${o}-checked`]:{marginInlineStart:i(e.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:i(e.marginXXS).div(2).equal()}}}}}}},se=e=>{const{componentCls:n,handleSize:l,calc:a}=e;return{[n]:{[`${n}-loading-icon${e.iconCls}`]:{position:"relative",top:a(a(l).sub(e.fontSize)).div(2).equal(),color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${n}-checked ${n}-loading-icon`]:{color:e.switchColor}}}},ce=e=>{const{componentCls:n,trackPadding:l,handleBg:a,handleShadow:d,handleSize:r,calc:s}=e,t=`${n}-handle`;return{[n]:{[t]:{position:"absolute",top:l,insetInlineStart:l,width:r,height:r,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:a,borderRadius:s(r).div(2).equal(),boxShadow:d,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${n}-checked ${t}`]:{insetInlineStart:`calc(100% - ${g(s(r).add(l).equal())})`},[`&:not(${n}-disabled):active`]:{[`${t}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${n}-checked ${t}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}}}},ue=e=>{const{componentCls:n,trackHeight:l,trackPadding:a,innerMinMargin:d,innerMaxMargin:r,handleSize:s,calc:t}=e,i=`${n}-inner`,o=g(t(s).add(t(a).mul(2)).equal()),u=g(t(r).mul(2).equal());return{[n]:{[i]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:r,paddingInlineEnd:d,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${i}-checked, ${i}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none",minHeight:l},[`${i}-checked`]:{marginInlineStart:`calc(-100% + ${o} - ${u})`,marginInlineEnd:`calc(100% - ${o} + ${u})`},[`${i}-unchecked`]:{marginTop:t(l).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${n}-checked ${i}`]:{paddingInlineStart:d,paddingInlineEnd:r,[`${i}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${i}-unchecked`]:{marginInlineStart:`calc(100% - ${o} + ${u})`,marginInlineEnd:`calc(-100% + ${o} - ${u})`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${i}`]:{[`${i}-unchecked`]:{marginInlineStart:t(a).mul(2).equal(),marginInlineEnd:t(a).mul(-1).mul(2).equal()}},[`&${n}-checked ${i}`]:{[`${i}-checked`]:{marginInlineStart:t(a).mul(-1).mul(2).equal(),marginInlineEnd:t(a).mul(2).equal()}}}}}},he=e=>{const{componentCls:n,trackHeight:l,trackMinWidth:a}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},Y(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:a,height:l,lineHeight:`${g(l)}`,verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${n}-disabled)`]:{background:e.colorTextTertiary}}),Z(e)),{[`&${n}-checked`]:{background:e.switchColor,[`&:hover:not(${n}-disabled)`]:{background:e.colorPrimaryHover}},[`&${n}-loading, &${n}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${n}-rtl`]:{direction:"rtl"}})}},pe=e=>{const{fontSize:n,lineHeight:l,controlHeight:a,colorWhite:d}=e,r=n*l,s=a/2,t=2,i=r-t*2,o=s-t*2;return{trackHeight:r,trackHeightSM:s,trackMinWidth:i*2+t*4,trackMinWidthSM:o*2+t*2,trackPadding:t,handleBg:d,handleSize:i,handleSizeSM:o,handleShadow:`0 2px 4px 0 ${new de("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:i/2,innerMaxMargin:i+t+t*2,innerMinMarginSM:o/2,innerMaxMarginSM:o+t+t*2}},me=Q("Switch",e=>{const n=U(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:e.calc(e.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[he(n),ue(n),ce(n),se(n),re(n)]},pe);var fe=function(e,n){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(e);d<a.length;d++)n.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(e,a[d])&&(l[a[d]]=e[a[d]]);return l};const ge=c.forwardRef((e,n)=>{const{prefixCls:l,size:a,disabled:d,loading:r,className:s,rootClassName:t,style:i,checked:o,value:u,defaultChecked:p,defaultValue:C,onChange:S}=e,b=fe(e,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[V,I]=z(!1,{value:o??u,defaultValue:p??C}),{getPrefixCls:$,direction:y,switch:f}=c.useContext(ee),v=c.useContext(ne),F=(d??v)||r,m=$("switch",l),M=c.createElement("div",{className:`${m}-handle`},r&&c.createElement(te,{className:`${m}-loading-icon`})),[h,q,w]=me(m),W=ae(a),j=_(f==null?void 0:f.className,{[`${m}-small`]:W==="small",[`${m}-loading`]:r,[`${m}-rtl`]:y==="rtl"},s,t,q,w),X=Object.assign(Object.assign({},f==null?void 0:f.style),i),A=function(){I(arguments.length<=0?void 0:arguments[0]),S==null||S.apply(void 0,arguments)};return h(c.createElement(ie,{component:"Switch"},c.createElement(T,Object.assign({},b,{checked:V,onChange:A,prefixCls:m,className:j,style:X,disabled:F,ref:n,loadingIcon:M}))))}),L=ge;L.__ANT_SWITCH=!0;const R=({field:e})=>{c.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const n=e.getProps(),l=e.getValue(),a=c.useCallback(d=>{e.isReady()&&(e.setValue(d||!1),e.setDirty(!0),e.setTouched(!0))},[e]);return c.useEffect(()=>{e.setReady(!0)},[e]),E.jsx(L,{autoFocus:n.autoFocus,checked:l,checkedChildren:n.checkedChildren,disabled:e.isDisabled()||e.isReadOnly(),loading:n.loading,onChange:a,unCheckedChildren:n.unCheckedChildren,style:n.style})};try{R.displayName="SwitchFieldRender",R.__docgenInfo={description:"",displayName:"SwitchFieldRender",props:{field:{defaultValue:null,description:"",name:"field",required:!0,type:{name:"SwitchField"}}}}}catch{}class Se extends K{render(){return E.jsx(R,{field:this})}}const x=e=>E.jsx(B,{buttons:null,fieldsProps:{field1:{...e,component:Se}}}),ye=x;try{x.displayName="SwitchComponent",x.__docgenInfo={description:"DForm Switch field",displayName:"SwitchComponent",props:{value:{defaultValue:null,description:"Default value",name:"value",required:!1,type:{name:"boolean"}},checkedChildren:{defaultValue:null,description:"The content to be shown when the state is checked",name:"checkedChildren",required:!1,type:{name:"ReactNode"}},unCheckedChildren:{defaultValue:null,description:"The content to be shown when the state is unchecked",name:"unCheckedChildren",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"Loading state of switch",name:"loading",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => SwitchField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: unknown, prevValue: unknown, field: SwitchField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: SwitchField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: SwitchField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: SwitchField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: SwitchField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: SwitchField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: SwitchField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: SwitchField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: SwitchField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: unknown, error: string, isSubmit: boolean, field: SwitchField) => void)"}}}}}catch{}try{switchComponent.displayName="switchComponent",switchComponent.__docgenInfo={description:"DForm Switch field",displayName:"switchComponent",props:{value:{defaultValue:null,description:"Default value",name:"value",required:!1,type:{name:"boolean"}},checkedChildren:{defaultValue:null,description:"The content to be shown when the state is checked",name:"checkedChildren",required:!1,type:{name:"ReactNode"}},unCheckedChildren:{defaultValue:null,description:"The content to be shown when the state is unchecked",name:"unCheckedChildren",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"Loading state of switch",name:"loading",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => SwitchField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: unknown, prevValue: unknown, field: SwitchField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: SwitchField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: SwitchField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: SwitchField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: SwitchField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: SwitchField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: SwitchField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: SwitchField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: SwitchField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: unknown, error: string, isSubmit: boolean, field: SwitchField) => void)"}}}}}catch{}const cn={title:"DForm/Fields/Switch",component:ye,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React from 'react';
                    import {DForm} from @krinopotam/ui-kit/dForm';
                    import {ISwitchFieldProps, SwitchField} from @krinopotam/ui-kit/dForm/fields/switch/switchField';
                    type IComponent = ISwitchFieldProps;
                    /** DForm Switch field */
                    export const SwitchComponent = (props: IComponent): React.JSX.Element => <DForm buttons={null} fieldsProps={{field1: {...props, component: SwitchField}}} />;
                    export default SwitchComponent;
                `}}}},k={args:{label:"Checkbox field"}};var O,P,H;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox field'
  }
}`,...(H=(P=k.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};const un=["Playground"];export{k as Playground,un as __namedExportsOrder,cn as default};
