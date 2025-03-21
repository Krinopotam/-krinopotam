import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{D as b}from"./dForm-CaK-ZZvS.js";import"./dayjs.min-B6ICIYLQ.js";import{I as o}from"./inputField-CYvt7n0Y.js";import{B as V}from"./baseField-SNOxHRgJ.js";import{r as s}from"./index-iW-139IE.js";import{D}from"./buttonsRow-r31VO2nI.js";import"./getNanoId-CghKzzgc.js";import"./updateModalTheme-DsqyeQsT.js";import"./headerRender-jf3Za5Ns.js";import"./index-CvIgV7lr.js";import"./useToken-C9qwXZKU.js";import"./compact-item-Cxv0YLF9.js";import"./index-mQZ8i_rL.js";import"./index-D_2t0AaZ.js";import"./ExclamationCircleFilled-DO6fsheT.js";import"./pickAttrs-DOtYDQG6.js";import"./context-u9dygr8g.js";import"./motion-HGHEQR47.js";import"./button-D87aS1YS.js";import"./CloseOutlined-C5nLa7GN.js";import"./KeyCode-lh1qUinJ.js";import"./ContextIsolator-BX2WkAUK.js";import"./useClosable-DLVmVXm2.js";import"./index-Bi_XhfGV.js";import"./DownOutlined-CSg1yAI9.js";import"./index-H-U0Qhl4.js";import"./index-CMYZVoVF.js";import"./InfoCircleOutlined-DgVG6Ryw.js";import"./button-DSzQwbIX.js";import"./QuestionCircleOutlined-BUGNUdLn.js";import"./index-DSj8ZEWj.js";import"./row-Bq2vx5ix.js";import"./roundedArrow-CIJYWJcZ.js";import"./colors-B0jgcrR7.js";import"./TextArea-Bx-nz3Fu.js";import"./useVariants-Cpy17TlJ.js";import"./index-CHrs_Nvn.js";import"./CheckOutlined-DXdfq3FB.js";import"./isDebugMode-B-VM_G4X.js";import"./index-DJtR8zbC.js";import"./EyeOutlined-BdSgb3nL.js";import"./SearchOutlined-C7GiFsDv.js";import"./isArray-Cl7xn3Rc.js";import"./Sider-zAVKy6og.js";const r=({field:e})=>{s.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const a=e.getProps();s.useEffect(()=>{e.setReady(!0)},[e]);const F={...{margin:0},...a.style};return n.jsx("div",{style:{width:e.getWidth()??"100%"},children:n.jsx(D,{className:a.className,orientation:a.orientation,orientationMargin:a.orientationMargin,plain:a.plain,type:a.type,dashed:a.dashed,style:F,children:a.label})})};try{r.displayName="DividerFieldRender",r.__docgenInfo={description:"",displayName:"DividerFieldRender",props:{field:{defaultValue:null,description:"",name:"field",required:!0,type:{name:"DividerField"}}}}}catch{}class q extends V{render(){return n.jsx(r,{field:this})}noItemWrapper(){return this.getProps().noItemWrapper!==!1}}const d=e=>n.jsx(b,{buttons:null,fieldsProps:{field1:{label:"Field 1",component:o},divider:{...e,component:q},field2:{label:"Field 2",component:o}}});try{d.displayName="DividerComponent",d.__docgenInfo={description:"DForm Divider field",displayName:"DividerComponent",props:{plain:{defaultValue:null,description:"Divider text show as plain style",name:"plain",required:!1,type:{name:"boolean"}},dashed:{defaultValue:null,description:"Whether line is dashed",name:"dashed",required:!1,type:{name:"boolean"}},orientation:{defaultValue:null,description:"The position of a title inside divider",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},orientationMargin:{defaultValue:null,description:"The margin-left/right between the title and its closest border, while the orientation must be left or right",name:"orientationMargin",required:!1,type:{name:"string | number"}},type:{defaultValue:null,description:"Divider type",name:"type",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => DividerField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Field class name (directly the field itself, not the container)",name:"className",required:!1,type:{name:"string"}},itemWrapperClassName:{defaultValue:null,description:"Field item class name (field item is field wrapper with label and error status)",name:"itemWrapperClassName",required:!1,type:{name:"string"}},containerClassName:{defaultValue:null,description:"Field container class name (container for field wrapper or field)",name:"containerClassName",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Field default value",name:"defaultValue",required:!1,type:{name:"ReactNode"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly or disabled state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:'boolean | "readOnly" | "disabled"'}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},itemWrapperStyle:{defaultValue:null,description:"Form item CSS style (form item is field wrapper with label and error status)",name:"itemWrapperStyle",required:!1,type:{name:"CSSProperties"}},containerStyle:{defaultValue:null,description:"Field container CSS style (container for field wrapper or field)",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},noItemWrapper:{defaultValue:null,description:"Render field item without wrapper",name:"noItemWrapper",required:!1,type:{name:"boolean"}},noContainer:{defaultValue:null,description:"Render field or field wrapper without container",name:"noContainer",required:!1,type:{name:"boolean"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: ReactNode, prevValue: ReactNode, field: DividerField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: DividerField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: DividerField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: DividerField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: DividerField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: DividerField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: DividerField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: DividerField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: DividerField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: ReactNode, error: string, isSubmit: boolean, field: DividerField) => void)"}},onFieldDataFetch:{defaultValue:null,description:"fires when the field trying to fetch data",name:"onFieldDataFetch",required:!1,type:{name:"((field: DividerField) => IDFormDataSourcePromise)"}},onFieldDataFetchSuccess:{defaultValue:null,description:"fires when the field fetch success",name:"onFieldDataFetchSuccess",required:!1,type:{name:"((result: { data: Record<string, any>; }, field: DividerField) => void)"}},onFieldDataFetchError:{defaultValue:null,description:"fires when the field fetch failed",name:"onFieldDataFetchError",required:!1,type:{name:"((error: IError, field: DividerField) => void)"}}}}}catch{}try{dividerComponent.displayName="dividerComponent",dividerComponent.__docgenInfo={description:"DForm Divider field",displayName:"dividerComponent",props:{plain:{defaultValue:null,description:"Divider text show as plain style",name:"plain",required:!1,type:{name:"boolean"}},dashed:{defaultValue:null,description:"Whether line is dashed",name:"dashed",required:!1,type:{name:"boolean"}},orientation:{defaultValue:null,description:"The position of a title inside divider",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},orientationMargin:{defaultValue:null,description:"The margin-left/right between the title and its closest border, while the orientation must be left or right",name:"orientationMargin",required:!1,type:{name:"string | number"}},type:{defaultValue:null,description:"Divider type",name:"type",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => DividerField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Field class name (directly the field itself, not the container)",name:"className",required:!1,type:{name:"string"}},itemWrapperClassName:{defaultValue:null,description:"Field item class name (field item is field wrapper with label and error status)",name:"itemWrapperClassName",required:!1,type:{name:"string"}},containerClassName:{defaultValue:null,description:"Field container class name (container for field wrapper or field)",name:"containerClassName",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Field default value",name:"defaultValue",required:!1,type:{name:"ReactNode"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly or disabled state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:'boolean | "readOnly" | "disabled"'}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},itemWrapperStyle:{defaultValue:null,description:"Form item CSS style (form item is field wrapper with label and error status)",name:"itemWrapperStyle",required:!1,type:{name:"CSSProperties"}},containerStyle:{defaultValue:null,description:"Field container CSS style (container for field wrapper or field)",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},noItemWrapper:{defaultValue:null,description:"Render field item without wrapper",name:"noItemWrapper",required:!1,type:{name:"boolean"}},noContainer:{defaultValue:null,description:"Render field or field wrapper without container",name:"noContainer",required:!1,type:{name:"boolean"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: ReactNode, prevValue: ReactNode, field: DividerField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: DividerField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: DividerField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: DividerField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: DividerField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: DividerField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: DividerField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: DividerField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: DividerField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: ReactNode, error: string, isSubmit: boolean, field: DividerField) => void)"}},onFieldDataFetch:{defaultValue:null,description:"fires when the field trying to fetch data",name:"onFieldDataFetch",required:!1,type:{name:"((field: DividerField) => IDFormDataSourcePromise)"}},onFieldDataFetchSuccess:{defaultValue:null,description:"fires when the field fetch success",name:"onFieldDataFetchSuccess",required:!1,type:{name:"((result: { data: Record<string, any>; }, field: DividerField) => void)"}},onFieldDataFetchError:{defaultValue:null,description:"fires when the field fetch failed",name:"onFieldDataFetchError",required:!1,type:{name:"((error: IError, field: DividerField) => void)"}}}}}catch{}const ye={title:"DForm/Fields/Divider",component:d,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React from "react";
                    import {DForm} from @krinopotam/ui-kit/dForm";
                    import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
                    import {DividerField, IDividerFieldProps} from @krinopotam/ui-kit/dForm/fields/divider/dividerField";
                    type IComponent = IDividerFieldProps;
                    /** DForm Divider field */
                    export const DividerComponent = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {
                                field1: {label: 'Field 1', component: InputField},
                                divider: {...props, component: DividerField},
                                field2: {label: 'Field 2', component: InputField} ,
                            }
                        }
                    />
                    export default DividerComponent
                `}}}},i={args:{defaultValue:"Divider",plain:!0}},t={args:{defaultValue:"Divider",orientation:"left",plain:!0}},l={args:{defaultValue:"Divider",orientation:"right",plain:!0}};var u,p,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Divider',
    plain: true
  }
}`,...(f=(p=i.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var m,c,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Divider',
    orientation: 'left',
    plain: true
  }
}`,...(h=(c=t.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var y,g,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Divider',
    orientation: 'right',
    plain: true
  }
}`,...(v=(g=l.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const ge=["WithTitle","TitleLeft","TitleRight"];export{t as TitleLeft,l as TitleRight,i as WithTitle,ge as __namedExportsOrder,ye as default};
