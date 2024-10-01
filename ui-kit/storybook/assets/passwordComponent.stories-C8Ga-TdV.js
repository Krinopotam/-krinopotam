import{j as i}from"./extends-BRD_ACZV.js";import{D as r}from"./dForm-CnoAkNZ2.js";import"./dayjs.min-C_f_bfvq.js";import{P as o}from"./passwordField-AF3BlRIF.js";import"./index-uubelm5h.js";import"./index-DaxZXI7c.js";import"./index-DMj878Uq.js";import"./compact-item-Cq9_oKvy.js";import"./useToken-DcxMJEAm.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./index-jGjHQRy5.js";import"./context-Dw4q7UZT.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./pickAttrs-BK90issH.js";import"./useVariants-BWqEf-UO.js";import"./ContextIsolator-CHJRnwEJ.js";import"./index-Bx0hWZS5.js";import"./motion-DInqWZju.js";import"./row-DGeTWQOf.js";import"./roundedArrow-DHHCDUVh.js";import"./zoom-C6i_ByaA.js";import"./colors-DipieP1N.js";import"./QuestionCircleOutlined-CTTbfydo.js";import"./ExclamationCircleFilled-BgVBMMmD.js";import"./isArray-Cl7xn3Rc.js";import"./buttonsRow-BMvqCaLQ.js";import"./button-CTXPqrZi.js";import"./button-BV2UQvY4.js";import"./index-C09VgAx5.js";import"./Sider-BdPjJ3kT.js";import"./KeyCode-DNlgD2sM.js";import"./DownOutlined-DgGpJDSU.js";import"./getNanoId-DD8laUaD.js";import"./updateModalTheme-8790IGfc.js";import"./headerRender-vKx0A5F_.js";import"./index-BloC46dp.js";import"./CloseOutlined-DudQdYPk.js";import"./useClosable-DUhy-sMk.js";import"./index-D3eZ-H7s.js";import"./InfoCircleOutlined-CvX0ly-N.js";import"./index-DZAtJoSc.js";import"./CheckOutlined-Dktt4At8.js";import"./modal-CeIlPEhM.js";import"./useIsDebugMode-_qV3LLe4.js";import"./index-CGAOD1SL.js";import"./EyeOutlined-BmNE_l5f.js";import"./SearchOutlined-wK2xDu78.js";const l=a=>i.jsx(r,{buttons:null,fieldsProps:{field1:{...a,component:o}}}),s=l;try{l.displayName="PasswordComponent",l.__docgenInfo={description:"DForm Password field",displayName:"PasswordComponent",props:{showCount:{defaultValue:null,description:"Show input counter",name:"showCount",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"Max input length",name:"maxLength",required:!1,type:{name:"number"}},iconRender:{defaultValue:null,description:"Icons render",name:"iconRender",required:!1,type:{name:"((visible: boolean) => ReactNode)"}},autocomplete:{defaultValue:null,description:"The autocomplete attribute",name:"autocomplete",required:!1,type:{name:"string"}},spellcheck:{defaultValue:null,description:"spellcheck attribute",name:"spellcheck",required:!1,type:{name:"enum",value:[{value:'"true"'},{value:'"false"'}]}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => PasswordField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Field default value",name:"value",required:!1,type:{name:"string | number"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: string | number, prevValue: string | number, field: PasswordField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: PasswordField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: PasswordField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: string | number, error: string, isSubmit: boolean, field: PasswordField) => void)"}}}}}catch{}try{passwordComponent.displayName="passwordComponent",passwordComponent.__docgenInfo={description:"DForm Password field",displayName:"passwordComponent",props:{showCount:{defaultValue:null,description:"Show input counter",name:"showCount",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"Max input length",name:"maxLength",required:!1,type:{name:"number"}},iconRender:{defaultValue:null,description:"Icons render",name:"iconRender",required:!1,type:{name:"((visible: boolean) => ReactNode)"}},autocomplete:{defaultValue:null,description:"The autocomplete attribute",name:"autocomplete",required:!1,type:{name:"string"}},spellcheck:{defaultValue:null,description:"spellcheck attribute",name:"spellcheck",required:!1,type:{name:"enum",value:[{value:'"true"'},{value:'"false"'}]}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => PasswordField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Field default value",name:"value",required:!1,type:{name:"string | number"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: string | number, prevValue: string | number, field: PasswordField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: PasswordField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: PasswordField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: string | number, error: string, isSubmit: boolean, field: PasswordField) => void)"}}}}}catch{}const te={title:"DForm/Fields/Password",component:s,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React from "react";
                    import {DForm} from @krinopotam/ui-kit/dForm";
                    import {IPasswordFieldProps, PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField";
                    type IComponent = IPasswordFieldProps
                    /** DForm Password field */
                    export const PasswordComponent = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: PasswordField}}
                        }/>
                    export default PasswordComponent
                `}}}},e={args:{label:"Password field"}};var t,n,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Password field'
  }
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const ne=["Playground"];export{e as Playground,ne as __namedExportsOrder,te as default};
