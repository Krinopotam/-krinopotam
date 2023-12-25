import{j as i}from"./useToken-a9416e4a.js";import{D as o}from"./tabulatorGrid-0f16191b.js";import"./index-092ccb3f.js";import"./dayjs.min-bd65d405.js";import{P as r}from"./passwordField-bdac6969.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./helpersObjects-80970c28.js";import"./compact-item-065385a4.js";import"./index-a764d3ff.js";import"./assertThisInitialized-8802cfe2.js";import"./index-d6bd501e.js";import"./motion-98dddd30.js";import"./helpersString-59da762c.js";import"./v4-4a60fe23.js";import"./updateModalTheme-8f171516.js";import"./draggableRender-0125ae20.js";import"./index-00bf92b7.js";import"./InfoCircleOutlined-86235823.js";import"./button-f2d700d6.js";import"./button-34478241.js";import"./index-ffee8d33.js";import"./ExclamationCircleFilled-3771385a.js";import"./context-67ce65ca.js";import"./motion-3729e44c.js";import"./useClosable-fd68c6c6.js";import"./KeyCode-6413d982.js";import"./pickAttrs-a0343510.js";import"./zoom-ad82ed8d.js";import"./PurePanel-ab2d6f85.js";import"./buttonsRow-d7c79a8c.js";import"./Sider-8cb48e9b.js";import"./row-62b547d9.js";import"./roundedArrow-1602316a.js";import"./colors-a767a02d.js";import"./index-9d475cdf.js";import"./QuestionCircleOutlined-4f561e0b.js";import"./index-57bc639f.js";import"./tabulatorBase-4bee7925.js";import"./client-3399ac50.js";import"./styled-components.browser.esm-ea02c5fb.js";import"./index-b899e8ff.js";import"./index-1ebd326d.js";import"./statusUtils-31e49fff.js";import"./SearchOutlined-cb161250.js";import"./select-08fda9ef.js";import"./datePicker-2eb85503.js";import"./quillEditor-34bb60b6.js";import"./_baseIsEqual-93bb5583.js";import"./iframe-8ee707cb.js";import"../sb-preview/runtime.js";import"./MenuOutlined-d91f7220.js";import"./_commonjs-dynamic-modules-302442b1.js";const l=a=>i.jsx(o,{buttons:null,fieldsProps:{field1:{...a,component:r}}}),s=l;try{l.displayName="PasswordComponent",l.__docgenInfo={description:"DForm Password field",displayName:"PasswordComponent",props:{value:{defaultValue:null,description:"Default value",name:"value",required:!1,type:{name:"string | number"}},showCount:{defaultValue:null,description:"Show input counter",name:"showCount",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"Max input length",name:"maxLength",required:!1,type:{name:"number"}},iconRender:{defaultValue:null,description:"Icons render",name:"iconRender",required:!1,type:{name:"((visible: boolean) => ReactNode)"}},autocomplete:{defaultValue:null,description:"The autocomplete attribute",name:"autocomplete",required:!1,type:{name:"string"}},spellcheck:{defaultValue:null,description:"spellcheck attribute",name:"spellcheck",required:!1,type:{name:"enum",value:[{value:'"true"'},{value:'"false"'}]}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => PasswordField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"If field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"If field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"If field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: unknown, prevValue: unknown, field: PasswordField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: PasswordField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: PasswordField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: unknown, error: string, isSubmit: boolean, field: PasswordField) => void)"}}}}}catch{}try{passwordComponent.displayName="passwordComponent",passwordComponent.__docgenInfo={description:"DForm Password field",displayName:"passwordComponent",props:{value:{defaultValue:null,description:"Default value",name:"value",required:!1,type:{name:"string | number"}},showCount:{defaultValue:null,description:"Show input counter",name:"showCount",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"Max input length",name:"maxLength",required:!1,type:{name:"number"}},iconRender:{defaultValue:null,description:"Icons render",name:"iconRender",required:!1,type:{name:"((visible: boolean) => ReactNode)"}},autocomplete:{defaultValue:null,description:"The autocomplete attribute",name:"autocomplete",required:!1,type:{name:"string"}},spellcheck:{defaultValue:null,description:"spellcheck attribute",name:"spellcheck",required:!1,type:{name:"enum",value:[{value:'"true"'},{value:'"false"'}]}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => PasswordField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"If field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"If field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"If field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: unknown, prevValue: unknown, field: PasswordField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: PasswordField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: PasswordField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: PasswordField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: unknown, error: string, isSubmit: boolean, field: PasswordField) => void)"}}}}}catch{}const ue={title:"DForm/Fields/Password",component:s,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
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
                `}}}},e={args:{label:"Password field"}};var n,t,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Password field'
  }
}`,...(d=(t=e.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};const pe=["Playground"];export{e as Playground,pe as __namedExportsOrder,ue as default};
