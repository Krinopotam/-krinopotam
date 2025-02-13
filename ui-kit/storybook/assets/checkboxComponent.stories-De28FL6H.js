import{j as W}from"./jsx-runtime-D_zvdyIk.js";import{D as ie}from"./dForm-gpv2y2mK.js";import"./dayjs.min-B6ICIYLQ.js";import{B as oe}from"./baseField-qxKIP2KY.js";import{r as t,R as Q}from"./index-iW-139IE.js";import{_ as re,c as P,w as z,C as U,D as de,T as se,W as ue,o as ce}from"./compact-item-Cxv0YLF9.js";import{o as fe,p as G,_ as pe,c as B,q as me,a as A}from"./useToken-C9qwXZKU.js";import{u as he}from"./index-H-U0Qhl4.js";import{F as be,u as Y}from"./context-u9dygr8g.js";import{u as Z}from"./index-BspaYdSE.js";import"./buttonsRow-CsYr8aok.js";import"./button-Cbcgio0C.js";import"./index-CMYZVoVF.js";import"./button-D87aS1YS.js";import"./Sider-zAVKy6og.js";import"./KeyCode-lh1qUinJ.js";import"./row-Bq2vx5ix.js";import"./ContextIsolator-BX2WkAUK.js";import"./motion-HGHEQR47.js";import"./roundedArrow-CIJYWJcZ.js";import"./index-mQZ8i_rL.js";import"./index-D_2t0AaZ.js";import"./index-Bi_XhfGV.js";import"./colors-B0jgcrR7.js";import"./DownOutlined-CSg1yAI9.js";import"./getNanoId-CghKzzgc.js";import"./updateModalTheme-B8AwUfMr.js";import"./headerRender-C_UbU-i8.js";import"./index-CvIgV7lr.js";import"./ExclamationCircleFilled-DO6fsheT.js";import"./pickAttrs-DOtYDQG6.js";import"./CloseOutlined-C5nLa7GN.js";import"./useClosable-DLVmVXm2.js";import"./InfoCircleOutlined-DgVG6Ryw.js";import"./QuestionCircleOutlined-BUGNUdLn.js";import"./index-DSj8ZEWj.js";import"./TextArea-Bx-nz3Fu.js";import"./useVariants-Cpy17TlJ.js";import"./index-CHrs_Nvn.js";import"./CheckOutlined-DXdfq3FB.js";import"./isDebugMode-B-VM_G4X.js";import"./isArray-Cl7xn3Rc.js";var ye=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],Ce=t.forwardRef(function(e,s){var i=e.prefixCls,a=i===void 0?"rc-checkbox":i,o=e.className,h=e.style,b=e.checked,f=e.disabled,w=e.defaultChecked,k=w===void 0?!1:w,u=e.type,F=u===void 0?"checkbox":u,O=e.title,d=e.onChange,R=re(e,ye),C=t.useRef(null),c=t.useRef(null),l=he(k,{value:b}),_=fe(l,2),N=_[0],V=_[1];t.useImperativeHandle(s,function(){return{focus:function(r){var m;(m=C.current)===null||m===void 0||m.focus(r)},blur:function(){var r;(r=C.current)===null||r===void 0||r.blur()},input:C.current,nativeElement:c.current}});var p=P(a,o,G(G({},"".concat(a,"-checked"),N),"".concat(a,"-disabled"),f)),y=function(r){f||("checked"in e||V(r.target.checked),d==null||d({target:B(B({},e),{},{type:F,checked:r.target.checked}),stopPropagation:function(){r.stopPropagation()},preventDefault:function(){r.preventDefault()},nativeEvent:r.nativeEvent}))};return t.createElement("span",{className:p,title:O,style:h,ref:c},t.createElement("input",pe({},R,{className:"".concat(a,"-input"),ref:C,onChange:y,disabled:f,checked:!!N,type:F})),t.createElement("span",{className:"".concat(a,"-inner")}))});function ge(e){const s=Q.useRef(null),i=()=>{z.cancel(s.current),s.current=null};return[()=>{i(),s.current=z(()=>{s.current=null})},h=>{s.current&&(h.stopPropagation(),i()),e==null||e(h)}]}const ee=Q.createContext(null);var ve=function(e,s){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&s.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)s.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(i[a[o]]=e[a[o]]);return i};const xe=(e,s)=>{var i;const{prefixCls:a,className:o,rootClassName:h,children:b,indeterminate:f=!1,style:w,onMouseEnter:k,onMouseLeave:u,skipGroup:F=!1,disabled:O}=e,d=ve(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:R,direction:C,checkbox:c}=t.useContext(U),l=t.useContext(ee),{isFormItemInput:_}=t.useContext(be),N=t.useContext(de),V=(i=(l==null?void 0:l.disabled)||O)!==null&&i!==void 0?i:N,p=t.useRef(d.value),y=t.useRef(null),S=me(s,y);t.useEffect(()=>{l==null||l.registerValue(d.value)},[]),t.useEffect(()=>{if(!F)return d.value!==p.current&&(l==null||l.cancelValue(p.current),l==null||l.registerValue(d.value),p.current=d.value),()=>l==null?void 0:l.cancelValue(d.value)},[d.value]),t.useEffect(()=>{var q;!((q=y.current)===null||q===void 0)&&q.input&&(y.current.input.indeterminate=f)},[f]);const r=R("checkbox",a),m=Y(r),[I,D,L]=Z(r,m),g=Object.assign({},d);l&&!F&&(g.onChange=function(){d.onChange&&d.onChange.apply(d,arguments),l.toggleOption&&l.toggleOption({label:b,value:d.value})},g.name=l.name,g.checked=l.value.includes(d.value));const j=P(`${r}-wrapper`,{[`${r}-rtl`]:C==="rtl",[`${r}-wrapper-checked`]:g.checked,[`${r}-wrapper-disabled`]:V,[`${r}-wrapper-in-form-item`]:_},c==null?void 0:c.className,o,h,L,m,D),n=P({[`${r}-indeterminate`]:f},se,D),[v,x]=ge(g.onClick);return I(t.createElement(ue,{component:"Checkbox",disabled:V},t.createElement("label",{className:j,style:Object.assign(Object.assign({},c==null?void 0:c.style),w),onMouseEnter:k,onMouseLeave:u,onClick:v},t.createElement(Ce,Object.assign({},g,{onClick:x,prefixCls:r,className:n,disabled:V,ref:S})),b!==void 0&&t.createElement("span",{className:`${r}-label`},b))))},ae=t.forwardRef(xe);var ke=function(e,s){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&s.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)s.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(i[a[o]]=e[a[o]]);return i};const Fe=t.forwardRef((e,s)=>{const{defaultValue:i,children:a,options:o=[],prefixCls:h,className:b,rootClassName:f,style:w,onChange:k}=e,u=ke(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:F,direction:O}=t.useContext(U),[d,R]=t.useState(u.value||i||[]),[C,c]=t.useState([]);t.useEffect(()=>{"value"in u&&R(u.value||[])},[u.value]);const l=t.useMemo(()=>o.map(n=>typeof n=="string"||typeof n=="number"?{label:n,value:n}:n),[o]),_=n=>{c(v=>v.filter(x=>x!==n))},N=n=>{c(v=>[].concat(A(v),[n]))},V=n=>{const v=d.indexOf(n.value),x=A(d);v===-1?x.push(n.value):x.splice(v,1),"value"in u||R(x),k==null||k(x.filter(q=>C.includes(q)).sort((q,te)=>{const le=l.findIndex(M=>M.value===q),ne=l.findIndex(M=>M.value===te);return le-ne}))},p=F("checkbox",h),y=`${p}-group`,S=Y(p),[r,m,I]=Z(p,S),D=ce(u,["value","disabled"]),L=o.length?l.map(n=>t.createElement(ae,{prefixCls:p,key:n.value.toString(),disabled:"disabled"in n?n.disabled:u.disabled,value:n.value,checked:d.includes(n.value),onChange:n.onChange,className:`${y}-item`,style:n.style,title:n.title,id:n.id,required:n.required},n.label)):a,g={toggleOption:V,value:d,disabled:u.disabled,name:u.name,registerValue:N,cancelValue:_},j=P(y,{[`${y}-rtl`]:O==="rtl"},b,f,I,S,m);return r(t.createElement("div",Object.assign({className:j,style:w},D,{ref:s}),t.createElement(ee.Provider,{value:g},L)))}),H=ae;H.Group=Fe;H.__ANT_CHECKBOX=!0;const T=({field:e})=>{t.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const s=e.getName(),i=e.getProps(),a=e.getValue(),o=t.useCallback(f=>{e.isReady()&&(e.setValue(f.target.checked||!1),e.setTouched(!0),e.setDirty(!0))},[e]);t.useEffect(()=>{e.setReady(!0)},[e,s]);const b={...{width:e.getWidth()},...i.style};return W.jsx(H,{className:i.className,checked:a,disabled:e.isDisabled()||e.isReadOnly(),onChange:o,autoFocus:i.autoFocus,indeterminate:i.indeterminate,style:b})};try{T.displayName="CheckboxFieldRender",T.__docgenInfo={description:"",displayName:"CheckboxFieldRender",props:{field:{defaultValue:null,description:"",name:"field",required:!0,type:{name:"CheckboxField"}}}}}catch{}class Ve extends oe{noGrowWidth(){return!0}render(){return W.jsx(T,{field:this})}}const $=e=>W.jsx(ie,{buttons:null,fieldsProps:{field1:{...e,component:Ve}}});try{$.displayName="CheckboxComponent",$.__docgenInfo={description:"DForm Checkbox component",displayName:"CheckboxComponent",props:{indeterminate:{defaultValue:null,description:"The indeterminate checked state of checkbox",name:"indeterminate",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => CheckboxField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},itemClassName:{defaultValue:null,description:"Field item class name (unlike className, this is the name of the class of the field item container)",name:"itemClassName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Field class name (directly the field itself, not the container)",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Field default value",name:"defaultValue",required:!1,type:{name:"boolean"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly or disabled state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:'boolean | "readOnly" | "disabled"'}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: boolean, prevValue: boolean, field: CheckboxField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: CheckboxField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: CheckboxField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: CheckboxField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: CheckboxField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: CheckboxField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: CheckboxField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: CheckboxField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: CheckboxField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: boolean, error: string, isSubmit: boolean, field: CheckboxField) => void)"}},onFieldDataFetch:{defaultValue:null,description:"fires when the field trying to fetch data",name:"onFieldDataFetch",required:!1,type:{name:"((field: CheckboxField) => IDFormDataSourcePromise)"}},onFieldDataFetchSuccess:{defaultValue:null,description:"fires when the field fetch success",name:"onFieldDataFetchSuccess",required:!1,type:{name:"((result: { data: Record<string, any>; }, field: CheckboxField) => void)"}},onFieldDataFetchError:{defaultValue:null,description:"fires when the field fetch failed",name:"onFieldDataFetchError",required:!1,type:{name:"((error: IError, field: CheckboxField) => void)"}}}}}catch{}try{checkboxComponent.displayName="checkboxComponent",checkboxComponent.__docgenInfo={description:"DForm Checkbox component",displayName:"checkboxComponent",props:{indeterminate:{defaultValue:null,description:"The indeterminate checked state of checkbox",name:"indeterminate",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => CheckboxField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},itemClassName:{defaultValue:null,description:"Field item class name (unlike className, this is the name of the class of the field item container)",name:"itemClassName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Field class name (directly the field itself, not the container)",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Field default value",name:"defaultValue",required:!1,type:{name:"boolean"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly or disabled state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:'boolean | "readOnly" | "disabled"'}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: boolean, prevValue: boolean, field: CheckboxField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: CheckboxField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: CheckboxField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: CheckboxField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: CheckboxField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: CheckboxField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: CheckboxField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: CheckboxField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: CheckboxField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: boolean, error: string, isSubmit: boolean, field: CheckboxField) => void)"}},onFieldDataFetch:{defaultValue:null,description:"fires when the field trying to fetch data",name:"onFieldDataFetch",required:!1,type:{name:"((field: CheckboxField) => IDFormDataSourcePromise)"}},onFieldDataFetchSuccess:{defaultValue:null,description:"fires when the field fetch success",name:"onFieldDataFetchSuccess",required:!1,type:{name:"((result: { data: Record<string, any>; }, field: CheckboxField) => void)"}},onFieldDataFetchError:{defaultValue:null,description:"fires when the field fetch failed",name:"onFieldDataFetchError",required:!1,type:{name:"((error: IError, field: CheckboxField) => void)"}}}}}catch{}const pa={title:"DForm/Fields/Checkbox",component:$,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React from 'react';
                    import {DForm} from @krinopotam/ui-kit/dForm';
                    import {CheckboxField, ICheckboxFieldProps} from @krinopotam/ui-kit/dForm/fields/checkbox/checkboxField';
                    type IComponent = ICheckboxFieldProps;
                    /** DForm Checkbox component */
                    export const CheckboxComponent = (props: IComponent): React.JSX.Element => (
                        <DForm buttons={null} fieldsProps={{field1: {...props, component: CheckboxField}}} />
                    );
                    export default CheckboxComponent;
                `}}}},E={args:{label:"Checkbox field"}};var X,J,K;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox field'
  }
}`,...(K=(J=E.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ma=["Playground"];export{E as Playground,ma as __namedExportsOrder,pa as default};
