import{j as l}from"./extends-BRD_ACZV.js";import{D as u}from"./dForm-hjCYRWo-.js";import"./dayjs.min-C_f_bfvq.js";import{I as s}from"./inputField-VAU2qHkF.js";import{C as p}from"./customField-D0Dzl3QQ.js";import"./index-uubelm5h.js";import"./index-DaxZXI7c.js";import"./index-DMj878Uq.js";import"./compact-item-Cq9_oKvy.js";import"./useToken-DcxMJEAm.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./index-jGjHQRy5.js";import"./context-Dw4q7UZT.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./pickAttrs-BK90issH.js";import"./useVariants-BWqEf-UO.js";import"./ContextIsolator-CHJRnwEJ.js";import"./index-Bx0hWZS5.js";import"./motion-DInqWZju.js";import"./row-DGeTWQOf.js";import"./roundedArrow-DHHCDUVh.js";import"./zoom-C6i_ByaA.js";import"./colors-DipieP1N.js";import"./QuestionCircleOutlined-CTTbfydo.js";import"./ExclamationCircleFilled-BgVBMMmD.js";import"./isArray-Cl7xn3Rc.js";import"./buttonsRow-B6oqgMUN.js";import"./button-Cwr6DgNZ.js";import"./button-BV2UQvY4.js";import"./index-C09VgAx5.js";import"./Sider-BdPjJ3kT.js";import"./KeyCode-DNlgD2sM.js";import"./DownOutlined-DgGpJDSU.js";import"./getNanoId-DD8laUaD.js";import"./updateModalTheme-zQ_YOxAB.js";import"./headerRender-C2XI2y67.js";import"./index-BloC46dp.js";import"./CloseOutlined-DudQdYPk.js";import"./useClosable-DUhy-sMk.js";import"./index-D3eZ-H7s.js";import"./InfoCircleOutlined-CvX0ly-N.js";import"./index-DZAtJoSc.js";import"./CheckOutlined-Dktt4At8.js";import"./modal-DD7Ss0Dh.js";import"./useIsDebugMode-_qV3LLe4.js";import"./index-CGAOD1SL.js";import"./EyeOutlined-BmNE_l5f.js";import"./SearchOutlined-wK2xDu78.js";const t=e=>l.jsx(u,{buttons:null,fieldsProps:{field1:{label:"Enter value",component:s,onValueChanged:(o,c,r)=>{r.getModel().getField("field2").setValue(o)}},field2:{...e,component:p,onRender:m}}}),f=t,m=e=>l.jsxs("h3",{children:["Entered value: “",l.jsx("span",{style:{color:"red"},children:e}),"”"]});try{t.displayName="AutoUpdateCustomField",t.__docgenInfo={description:"DForm Custom field auto-updating",displayName:"AutoUpdateCustomField",props:{component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => any"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Field default value",name:"value",required:!1,type:{name:"any"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: any, prevValue: any, field: any) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: any) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: any) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: any, error: string, isSubmit: boolean, field: any) => void)"}}}}}catch{}try{autoUpdateCustomField.displayName="autoUpdateCustomField",autoUpdateCustomField.__docgenInfo={description:"DForm Custom field auto-updating",displayName:"autoUpdateCustomField",props:{component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => any"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Field default value",name:"value",required:!1,type:{name:"any"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: any, prevValue: any, field: any) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: any) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: any) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: any) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: any, error: string, isSubmit: boolean, field: any) => void)"}}}}}catch{}const se={title:"DForm/Fields/Custom/Auto update custom field",component:f,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
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
                `}}}},a={args:{}};var n,i,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {}
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const pe=["Playground"];export{a as Playground,pe as __namedExportsOrder,se as default};