import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{D as r}from"./dForm-CaK-ZZvS.js";import"./dayjs.min-B6ICIYLQ.js";import{I as o}from"./inputField-CYvt7n0Y.js";import"./index-iW-139IE.js";import"./buttonsRow-r31VO2nI.js";import"./button-DSzQwbIX.js";import"./compact-item-Cxv0YLF9.js";import"./useToken-C9qwXZKU.js";import"./index-mQZ8i_rL.js";import"./index-D_2t0AaZ.js";import"./index-CMYZVoVF.js";import"./button-D87aS1YS.js";import"./Sider-zAVKy6og.js";import"./index-H-U0Qhl4.js";import"./context-u9dygr8g.js";import"./KeyCode-lh1qUinJ.js";import"./row-Bq2vx5ix.js";import"./ContextIsolator-BX2WkAUK.js";import"./motion-HGHEQR47.js";import"./roundedArrow-CIJYWJcZ.js";import"./index-Bi_XhfGV.js";import"./colors-B0jgcrR7.js";import"./DownOutlined-CSg1yAI9.js";import"./getNanoId-CghKzzgc.js";import"./updateModalTheme-DsqyeQsT.js";import"./headerRender-jf3Za5Ns.js";import"./index-CvIgV7lr.js";import"./ExclamationCircleFilled-DO6fsheT.js";import"./pickAttrs-DOtYDQG6.js";import"./CloseOutlined-C5nLa7GN.js";import"./useClosable-DLVmVXm2.js";import"./InfoCircleOutlined-DgVG6Ryw.js";import"./QuestionCircleOutlined-BUGNUdLn.js";import"./index-DSj8ZEWj.js";import"./TextArea-Bx-nz3Fu.js";import"./useVariants-Cpy17TlJ.js";import"./index-CHrs_Nvn.js";import"./CheckOutlined-DXdfq3FB.js";import"./isDebugMode-B-VM_G4X.js";import"./baseField-SNOxHRgJ.js";import"./isArray-Cl7xn3Rc.js";import"./index-DJtR8zbC.js";import"./EyeOutlined-BdSgb3nL.js";import"./SearchOutlined-C7GiFsDv.js";const t=a=>d.jsx(r,{buttons:null,fieldsProps:{field1:{...a,component:o}}});try{t.displayName="InputComponent",t.__docgenInfo={description:"DForm Input field",displayName:"InputComponent",props:{showCount:{defaultValue:null,description:"Whether show text count",name:"showCount",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"The max length",name:"maxLength",required:!1,type:{name:"number"}},autocomplete:{defaultValue:null,description:"The autocomplete attribute",name:"autocomplete",required:!1,type:{name:"string"}},spellcheck:{defaultValue:null,description:"spellcheck attribute",name:"spellcheck",required:!1,type:{name:"enum",value:[{value:'"true"'},{value:'"false"'}]}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => InputField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Field class name (directly the field itself, not the container)",name:"className",required:!1,type:{name:"string"}},itemWrapperClassName:{defaultValue:null,description:"Field item class name (field item is field wrapper with label and error status)",name:"itemWrapperClassName",required:!1,type:{name:"string"}},containerClassName:{defaultValue:null,description:"Field container class name (container for field wrapper or field)",name:"containerClassName",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Field default value",name:"defaultValue",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly or disabled state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:'boolean | "readOnly" | "disabled"'}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},itemWrapperStyle:{defaultValue:null,description:"Form item CSS style (form item is field wrapper with label and error status)",name:"itemWrapperStyle",required:!1,type:{name:"CSSProperties"}},containerStyle:{defaultValue:null,description:"Field container CSS style (container for field wrapper or field)",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},noItemWrapper:{defaultValue:null,description:"Render field item without wrapper",name:"noItemWrapper",required:!1,type:{name:"boolean"}},noContainer:{defaultValue:null,description:"Render field or field wrapper without container",name:"noContainer",required:!1,type:{name:"boolean"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: string, prevValue: string, field: InputField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: InputField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: InputField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: string, error: string, isSubmit: boolean, field: InputField) => void)"}},onFieldDataFetch:{defaultValue:null,description:"fires when the field trying to fetch data",name:"onFieldDataFetch",required:!1,type:{name:"((field: InputField) => IDFormDataSourcePromise)"}},onFieldDataFetchSuccess:{defaultValue:null,description:"fires when the field fetch success",name:"onFieldDataFetchSuccess",required:!1,type:{name:"((result: { data: Record<string, any>; }, field: InputField) => void)"}},onFieldDataFetchError:{defaultValue:null,description:"fires when the field fetch failed",name:"onFieldDataFetchError",required:!1,type:{name:"((error: IError, field: InputField) => void)"}}}}}catch{}try{inputComponent.displayName="inputComponent",inputComponent.__docgenInfo={description:"DForm Input field",displayName:"inputComponent",props:{showCount:{defaultValue:null,description:"Whether show text count",name:"showCount",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"The max length",name:"maxLength",required:!1,type:{name:"number"}},autocomplete:{defaultValue:null,description:"The autocomplete attribute",name:"autocomplete",required:!1,type:{name:"string"}},spellcheck:{defaultValue:null,description:"spellcheck attribute",name:"spellcheck",required:!1,type:{name:"enum",value:[{value:'"true"'},{value:'"false"'}]}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => InputField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Field class name (directly the field itself, not the container)",name:"className",required:!1,type:{name:"string"}},itemWrapperClassName:{defaultValue:null,description:"Field item class name (field item is field wrapper with label and error status)",name:"itemWrapperClassName",required:!1,type:{name:"string"}},containerClassName:{defaultValue:null,description:"Field container class name (container for field wrapper or field)",name:"containerClassName",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Field default value",name:"defaultValue",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly or disabled state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:'boolean | "readOnly" | "disabled"'}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},itemWrapperStyle:{defaultValue:null,description:"Form item CSS style (form item is field wrapper with label and error status)",name:"itemWrapperStyle",required:!1,type:{name:"CSSProperties"}},containerStyle:{defaultValue:null,description:"Field container CSS style (container for field wrapper or field)",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},noItemWrapper:{defaultValue:null,description:"Render field item without wrapper",name:"noItemWrapper",required:!1,type:{name:"boolean"}},noContainer:{defaultValue:null,description:"Render field or field wrapper without container",name:"noContainer",required:!1,type:{name:"boolean"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: string, prevValue: string, field: InputField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: InputField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: InputField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: string, error: string, isSubmit: boolean, field: InputField) => void)"}},onFieldDataFetch:{defaultValue:null,description:"fires when the field trying to fetch data",name:"onFieldDataFetch",required:!1,type:{name:"((field: InputField) => IDFormDataSourcePromise)"}},onFieldDataFetchSuccess:{defaultValue:null,description:"fires when the field fetch success",name:"onFieldDataFetchSuccess",required:!1,type:{name:"((result: { data: Record<string, any>; }, field: InputField) => void)"}},onFieldDataFetchError:{defaultValue:null,description:"fires when the field fetch failed",name:"onFieldDataFetchError",required:!1,type:{name:"((error: IError, field: InputField) => void)"}}}}}catch{}const ee={title:"DForm/Fields/Input",component:t,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React from "react";
                    import {DForm} from @krinopotam/ui-kit/dForm";
                    import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
                    type IComponent = IInputFieldProps
                    /** DForm Input field */
                    export const InputComponent = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: InputField}}
                        }
                    />
                    export default InputComponent
                `}}}},e={args:{label:"Input field"}};var l,n,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Input field'
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const ae=["Playground"];export{e as Playground,ae as __namedExportsOrder,ee as default};
