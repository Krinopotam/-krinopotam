import{j as r}from"./extends-BRD_ACZV.js";import{B as y,D as b}from"./dForm-hjCYRWo-.js";import"./dayjs.min-C_f_bfvq.js";import{r as t}from"./index-uubelm5h.js";import{I as g}from"./index-CGAOD1SL.js";import"./index-DaxZXI7c.js";import"./index-DMj878Uq.js";import"./compact-item-Cq9_oKvy.js";import"./useToken-DcxMJEAm.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./index-jGjHQRy5.js";import"./context-Dw4q7UZT.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./pickAttrs-BK90issH.js";import"./useVariants-BWqEf-UO.js";import"./ContextIsolator-CHJRnwEJ.js";import"./index-Bx0hWZS5.js";import"./motion-DInqWZju.js";import"./row-DGeTWQOf.js";import"./roundedArrow-DHHCDUVh.js";import"./zoom-C6i_ByaA.js";import"./colors-DipieP1N.js";import"./QuestionCircleOutlined-CTTbfydo.js";import"./ExclamationCircleFilled-BgVBMMmD.js";import"./isArray-Cl7xn3Rc.js";import"./buttonsRow-B6oqgMUN.js";import"./button-Cwr6DgNZ.js";import"./button-BV2UQvY4.js";import"./index-C09VgAx5.js";import"./Sider-BdPjJ3kT.js";import"./KeyCode-DNlgD2sM.js";import"./DownOutlined-DgGpJDSU.js";import"./getNanoId-DD8laUaD.js";import"./updateModalTheme-zQ_YOxAB.js";import"./headerRender-C2XI2y67.js";import"./index-BloC46dp.js";import"./CloseOutlined-DudQdYPk.js";import"./useClosable-DUhy-sMk.js";import"./index-D3eZ-H7s.js";import"./InfoCircleOutlined-CvX0ly-N.js";import"./index-DZAtJoSc.js";import"./CheckOutlined-Dktt4At8.js";import"./modal-DD7Ss0Dh.js";import"./useIsDebugMode-_qV3LLe4.js";import"./EyeOutlined-BmNE_l5f.js";import"./SearchOutlined-wK2xDu78.js";const{TextArea:x}=g,n=({field:e})=>{t.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const u=e.getName(),a=e.getProps(),p=e.getValue(),m=t.useCallback(h=>{e.isReady()&&(e.setValue(h.target.value),e.setDirty(!0))},[e]),f=t.useCallback(()=>{e.setTouched(!0)},[e]);t.useEffect(()=>{e.setReady(!0)},[e]);const c={...{width:e.getWidth()??"100%"},...a.style};return r.jsx(x,{autoFocus:a.autoFocus,autoSize:a.autoSize,cols:a.cols,disabled:e.isDisabled(),maxLength:a.maxLength,name:u,onBlur:f,onChange:m,placeholder:a.placeholder,readOnly:e.isReadOnly(),rows:a.rows,showCount:a.showCount,value:p,wrap:a.wrap,style:c})};try{n.displayName="TextAreaFieldRender",n.__docgenInfo={description:"",displayName:"TextAreaFieldRender",props:{field:{defaultValue:null,description:"",name:"field",required:!0,type:{name:"TextAreaField"}}}}}catch{}class V extends y{render(){return r.jsx(n,{field:this})}}const i=e=>r.jsx(b,{buttons:null,fieldsProps:{field1:{...e,component:V}}}),q=i;try{i.displayName="TextAreaComponent",i.__docgenInfo={description:"DForm Textarea field",displayName:"TextAreaComponent",props:{showCount:{defaultValue:null,description:"Whether show text count",name:"showCount",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"The max length",name:"maxLength",required:!1,type:{name:"number"}},autoSize:{defaultValue:null,description:"Height auto size feature, can be set to true | false or an object ( minRows: 2, maxRows: 6 )",name:"autoSize",required:!1,type:{name:"boolean | AutoSizeType"}},cols:{defaultValue:null,description:"Specifies the visible width of a text area",name:"cols",required:!1,type:{name:"number"}},rows:{defaultValue:null,description:"Specifies the visible number of lines in a text area",name:"rows",required:!1,type:{name:"number"}},wrap:{defaultValue:null,description:"Text wrap parameters. Specifies how the text in a text area is to be wrapped when submitted in a form",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"soft | hard"'}]}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => TextAreaField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Field default value",name:"value",required:!1,type:{name:"string | number"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: string | number, prevValue: string | number, field: TextAreaField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: TextAreaField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: TextAreaField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: TextAreaField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: TextAreaField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: TextAreaField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: TextAreaField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: TextAreaField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: TextAreaField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: string | number, error: string, isSubmit: boolean, field: TextAreaField) => void)"}}}}}catch{}try{textAreaComponent.displayName="textAreaComponent",textAreaComponent.__docgenInfo={description:"DForm Textarea field",displayName:"textAreaComponent",props:{showCount:{defaultValue:null,description:"Whether show text count",name:"showCount",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"The max length",name:"maxLength",required:!1,type:{name:"number"}},autoSize:{defaultValue:null,description:"Height auto size feature, can be set to true | false or an object ( minRows: 2, maxRows: 6 )",name:"autoSize",required:!1,type:{name:"boolean | AutoSizeType"}},cols:{defaultValue:null,description:"Specifies the visible width of a text area",name:"cols",required:!1,type:{name:"number"}},rows:{defaultValue:null,description:"Specifies the visible number of lines in a text area",name:"rows",required:!1,type:{name:"number"}},wrap:{defaultValue:null,description:"Text wrap parameters. Specifies how the text in a text area is to be wrapped when submitted in a form",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"soft | hard"'}]}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => TextAreaField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Field default value",name:"value",required:!1,type:{name:"string | number"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: string | number, prevValue: string | number, field: TextAreaField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: TextAreaField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: TextAreaField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: TextAreaField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: TextAreaField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: TextAreaField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: TextAreaField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: TextAreaField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: TextAreaField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: string | number, error: string, isSubmit: boolean, field: TextAreaField) => void)"}}}}}catch{}const he={title:"DForm/Fields/TextArea",component:q,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React from "react";
                    import {DForm} from @krinopotam/ui-kit/dForm";
                    import {ITextAreaFieldProps, TextAreaField} from @krinopotam/ui-kit/dForm/fields/textArea/textAreaField";
                    type IComponent = ITextAreaFieldProps
                    /** DForm Textarea field */
                    export const TextAreaComponent = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: TextAreaField}}
                        }
                    />
                    export default TextAreaComponent
                `}}}},l={args:{label:"TextArea field"}};var d,o,s;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'TextArea field'
  }
}`,...(s=(o=l.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const ye=["Playground"];export{l as Playground,ye as __namedExportsOrder,he as default};