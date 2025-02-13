import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{D as s}from"./dForm-gpv2y2mK.js";import"./dayjs.min-B6ICIYLQ.js";import{I as u}from"./inputField-dHJJq53o.js";import{C as f}from"./customField-DEmr-lo1.js";import"./index-iW-139IE.js";import"./buttonsRow-CsYr8aok.js";import"./button-Cbcgio0C.js";import"./compact-item-Cxv0YLF9.js";import"./useToken-C9qwXZKU.js";import"./index-mQZ8i_rL.js";import"./index-D_2t0AaZ.js";import"./index-CMYZVoVF.js";import"./button-D87aS1YS.js";import"./Sider-zAVKy6og.js";import"./index-H-U0Qhl4.js";import"./context-u9dygr8g.js";import"./KeyCode-lh1qUinJ.js";import"./row-Bq2vx5ix.js";import"./ContextIsolator-BX2WkAUK.js";import"./motion-HGHEQR47.js";import"./roundedArrow-CIJYWJcZ.js";import"./index-Bi_XhfGV.js";import"./colors-B0jgcrR7.js";import"./DownOutlined-CSg1yAI9.js";import"./getNanoId-CghKzzgc.js";import"./updateModalTheme-B8AwUfMr.js";import"./headerRender-C_UbU-i8.js";import"./index-CvIgV7lr.js";import"./ExclamationCircleFilled-DO6fsheT.js";import"./pickAttrs-DOtYDQG6.js";import"./CloseOutlined-C5nLa7GN.js";import"./useClosable-DLVmVXm2.js";import"./InfoCircleOutlined-DgVG6Ryw.js";import"./QuestionCircleOutlined-BUGNUdLn.js";import"./index-DSj8ZEWj.js";import"./TextArea-Bx-nz3Fu.js";import"./useVariants-Cpy17TlJ.js";import"./index-CHrs_Nvn.js";import"./CheckOutlined-DXdfq3FB.js";import"./isDebugMode-B-VM_G4X.js";import"./baseField-qxKIP2KY.js";import"./isArray-Cl7xn3Rc.js";import"./index-DJtR8zbC.js";import"./EyeOutlined-BdSgb3nL.js";import"./SearchOutlined-C7GiFsDv.js";const l=e=>t.jsx(s,{buttons:null,fieldsProps:{field1:{label:"Enter value",component:u,onValueChanged:(o,m,r)=>{r.getModel().getField("field2").setValue(o)}},field2:{...e,component:f,onRender:p}}}),p=e=>t.jsxs("h3",{children:["Entered value: “",t.jsx("span",{style:{color:"red"},children:e}),"”"]});try{l.displayName="AutoUpdateCustomField",l.__docgenInfo={description:"DForm Custom field auto-updating",displayName:"AutoUpdateCustomField",props:{component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => any"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},itemClassName:{defaultValue:null,description:"Field item class name (unlike className, this is the name of the class of the field item container)",name:"itemClassName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Field class name (directly the field itself, not the container)",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Field default value",name:"defaultValue",required:!1,type:{name:"any"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly or disabled state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:'boolean | "readOnly" | "disabled"'}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: any, prevValue: any, field: any) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: any) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: any) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: any, error: string, isSubmit: boolean, field: any) => void)"}},onFieldDataFetch:{defaultValue:null,description:"fires when the field trying to fetch data",name:"onFieldDataFetch",required:!1,type:{name:"((field: any) => IDFormDataSourcePromise)"}},onFieldDataFetchSuccess:{defaultValue:null,description:"fires when the field fetch success",name:"onFieldDataFetchSuccess",required:!1,type:{name:"((result: { data: Record<string, any>; }, field: any) => void)"}},onFieldDataFetchError:{defaultValue:null,description:"fires when the field fetch failed",name:"onFieldDataFetchError",required:!1,type:{name:"((error: IError, field: any) => void)"}}}}}catch{}try{autoUpdateCustomField.displayName="autoUpdateCustomField",autoUpdateCustomField.__docgenInfo={description:"DForm Custom field auto-updating",displayName:"autoUpdateCustomField",props:{component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => any"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},itemClassName:{defaultValue:null,description:"Field item class name (unlike className, this is the name of the class of the field item container)",name:"itemClassName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Field class name (directly the field itself, not the container)",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Field default value",name:"defaultValue",required:!1,type:{name:"any"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly or disabled state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:'boolean | "readOnly" | "disabled"'}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: any, prevValue: any, field: any) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: any) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: any) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: any, error: string, isSubmit: boolean, field: any) => void)"}},onFieldDataFetch:{defaultValue:null,description:"fires when the field trying to fetch data",name:"onFieldDataFetch",required:!1,type:{name:"((field: any) => IDFormDataSourcePromise)"}},onFieldDataFetchSuccess:{defaultValue:null,description:"fires when the field fetch success",name:"onFieldDataFetchSuccess",required:!1,type:{name:"((result: { data: Record<string, any>; }, field: any) => void)"}},onFieldDataFetchError:{defaultValue:null,description:"fires when the field fetch failed",name:"onFieldDataFetchError",required:!1,type:{name:"((error: IError, field: any) => void)"}}}}}catch{}const oe={title:"DForm/Fields/Custom/Auto update custom field",component:l,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React from 'react';
                    import {DForm} from @krinopotam/ui-kit/dForm';
                    import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
                    import {CustomField} from @krinopotam/ui-kit/dForm/fields/custom/customField';
                    import {IAnyFieldProps} from @krinopotam/ui-kit/dForm/fields/base";
                    type IComponent = IAnyFieldProps;
                    /** DForm Custom field auto-updating */
                    export const AutoUpdateCustomField = (props: IComponent): React.JSX.Element => (
                        <DForm
                            buttons={null}
                            fieldsProps={{
                                field1: {
                                    label: 'Enter value',
                                    component: InputField,
                                    onValueChanged: (value, prevValue, field) => {
                                        const field2 = field.getModel().getField('field2')
                                        field2.setValue(value);
                                    },
                                } satisfies  IInputFieldProps,
                                field2: {...props, component: CustomField, onRender: MyComponent},
                            }}
                        />
                    );
                    export default AutoUpdateCustomField;
                    const MyComponent = (value: React.ReactNode): React.ReactNode => {
                        return (
                            <h3>
                                Entered value: &ldquo;<span style={{color: 'red'}}>{value}</span>&rdquo;
                            </h3>
                        );
                    };
                `}}}},a={args:{}};var i,n,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const re=["Playground"];export{a as Playground,re as __namedExportsOrder,oe as default};
