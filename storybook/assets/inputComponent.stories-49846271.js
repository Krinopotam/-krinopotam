import{j as d}from"./useToken-268f632d.js";import{D as o}from"./treeSelectFieldRender-7798822e.js";import"./index-092ccb3f.js";import"./dayjs.min-bd65d405.js";import{I as r}from"./inputField-19d1f9f5.js";import"./index-5819ae2c.js";import"./_commonjsHelpers-de833af9.js";import"./updateModalTheme-6aea8425.js";import"./draggableRender-458e69e5.js";import"./index-e0a25a8d.js";import"./InfoCircleOutlined-14b312e0.js";import"./isNativeReflectConstruct-2f1897fe.js";import"./compact-item-e0eb0d02.js";import"./button-ec5b8345.js";import"./button-a395f6e7.js";import"./helpersString-59da762c.js";import"./v4-4a60fe23.js";import"./index-ba109c1e.js";import"./ExclamationCircleFilled-8e2dacf4.js";import"./context-acf775e7.js";import"./motion-3729e44c.js";import"./useClosable-7a147c6b.js";import"./useZIndex-9f7c196b.js";import"./KeyCode-6413d982.js";import"./pickAttrs-f49ef707.js";import"./zoom-f1d5320d.js";import"./PurePanel-a66be90d.js";import"./index-53e6b65f.js";import"./buttonsRow-55ffb0a1.js";import"./Sider-f270e7a7.js";import"./row-353874ab.js";import"./roundedArrow-cf08b32b.js";import"./colors-dae18b42.js";import"./DownOutlined-7d62f4d3.js";import"./index-9d475cdf.js";import"./QuestionCircleOutlined-3fb4f056.js";import"./index-15561246.js";import"./index-762b8d87.js";import"./index-47c1009a.js";import"./statusUtils-8e8708fb.js";import"./SearchOutlined-826801c4.js";import"./select-cf6df97f.js";import"./tabulatorBase-f642237b.js";import"./client-36d50ed5.js";import"./styled-components.browser.esm-11e59584.js";import"./datePicker-ff1c4024.js";import"./quillEditor-6af9cf3b.js";import"./_baseIsEqual-93bb5583.js";import"./iframe-d2641a2b.js";import"../sb-preview/runtime.js";import"./MenuOutlined-207c5478.js";import"./_commonjs-dynamic-modules-302442b1.js";const n=a=>d.jsx(o,{buttons:null,fieldsProps:{field1:{...a,component:r}}}),u=n;try{n.displayName="InputComponent",n.__docgenInfo={description:"DForm Input field",displayName:"InputComponent",props:{value:{defaultValue:null,description:"Default value",name:"value",required:!1,type:{name:"string | number"}},showCount:{defaultValue:null,description:"Whether show text count",name:"showCount",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"The max length",name:"maxLength",required:!1,type:{name:"number"}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => InputField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"If field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"If field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"If field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: unknown, prevValue: unknown, field: InputField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: InputField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: InputField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: unknown, error: string, isSubmit: boolean, field: InputField) => void)"}}}}}catch{}try{inputComponent.displayName="inputComponent",inputComponent.__docgenInfo={description:"DForm Input field",displayName:"inputComponent",props:{value:{defaultValue:null,description:"Default value",name:"value",required:!1,type:{name:"string | number"}},showCount:{defaultValue:null,description:"Whether show text count",name:"showCount",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"The max length",name:"maxLength",required:!1,type:{name:"number"}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => InputField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"If field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"If field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"If field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: unknown, prevValue: unknown, field: InputField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: InputField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: InputField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: InputField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: unknown, error: string, isSubmit: boolean, field: InputField) => void)"}}}}}catch{}const re={title:"DForm/Fields/Input",component:u,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React from "react";
                    import {DForm} from @krinopotam/ui-kit/dForm";
                    import {IDFormFieldProps} from @krinopotam/ui-kit/dForm";
                    import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
                    type IComponent = IDFormFieldProps
                    /** DForm Input component */
                    export const InputComponent = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: InputField}}
                        }
                    />
                    export default InputComponent
                `}}}},e={args:{label:"Input field"}};var l,t,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Input field'
  }
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const ue=["Playground"];export{e as Playground,ue as __namedExportsOrder,re as default};
//# sourceMappingURL=inputComponent.stories-49846271.js.map