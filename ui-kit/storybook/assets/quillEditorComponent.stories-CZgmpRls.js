import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{D as F}from"./dForm-Bd5Vzo7Z.js";import"./dayjs.min-B6ICIYLQ.js";import{B as E}from"./baseField-DeDwGRQP.js";import{r as d}from"./index-iW-139IE.js";import{Q as V}from"./quillEditor-CnzyCVhn.js";import"./buttonsRow-CPA2VxO7.js";import"./button-BmRWnNQL.js";import"./compact-item-Cxv0YLF9.js";import"./useToken-C9qwXZKU.js";import"./index-mQZ8i_rL.js";import"./index-D_2t0AaZ.js";import"./index-CMYZVoVF.js";import"./button-D87aS1YS.js";import"./Sider-zAVKy6og.js";import"./index-H-U0Qhl4.js";import"./context-u9dygr8g.js";import"./KeyCode-lh1qUinJ.js";import"./row-Bq2vx5ix.js";import"./ContextIsolator-BX2WkAUK.js";import"./motion-HGHEQR47.js";import"./roundedArrow-CIJYWJcZ.js";import"./index-Bi_XhfGV.js";import"./colors-B0jgcrR7.js";import"./DownOutlined-CSg1yAI9.js";import"./getNanoId-CghKzzgc.js";import"./updateModalTheme-CvfZLf-N.js";import"./headerRender-DAgPvff7.js";import"./index-CvIgV7lr.js";import"./ExclamationCircleFilled-DO6fsheT.js";import"./pickAttrs-DOtYDQG6.js";import"./CloseOutlined-C5nLa7GN.js";import"./useClosable-DLVmVXm2.js";import"./InfoCircleOutlined-DgVG6Ryw.js";import"./QuestionCircleOutlined-BUGNUdLn.js";import"./index-DSj8ZEWj.js";import"./TextArea-Bx-nz3Fu.js";import"./useVariants-Cpy17TlJ.js";import"./index-CHrs_Nvn.js";import"./CheckOutlined-DXdfq3FB.js";import"./isDebugMode-B-VM_G4X.js";import"./isArray-Cl7xn3Rc.js";import"./styled-components.browser.esm-Di54_BhW.js";import"./index-Q0qtkvBQ.js";const r=({field:l})=>{d.useSyncExternalStore(l.subscribe.bind(l),l.getSnapshot.bind(l));const e=l.getProps(),h=l.getValue(),y=d.useCallback(function(t,a,n,i){var f;l.isReady()&&(l.setValue(t||void 0),l.setDirty(!0),(f=e.onChange)==null||f.call(e,t,a,n,i,l))},[l,e]),b=d.useCallback((t,a,n)=>{var i;l.setTouched(!0),(i=e.onBlur)==null||i.call(e,t,a,n,l)},[l,e]);d.useEffect(()=>{l.setReady(!0)},[l]);const g={...{width:l.getWidth()??"100%"},...e.style};return s.jsx(V,{className:e.className,theme:e.theme,value:h,formats:e.formats,toolbar:e.toolbar,preserveWhitespace:e.preserveWhitespace,tabIndex:e.tabIndex,bounds:e.bounds,style:g,disabled:l.isDisabled(),readOnly:l.isReadOnly(),placeholder:e.placeholder,onChange:y,onBlur:b,onChangeSelection:(t,a,n)=>{var i;return(i=e.onChangeSelection)==null?void 0:i.call(e,t,a,n,l)},onFocus:(t,a,n)=>{var i;return(i=e.onFocus)==null?void 0:i.call(e,t,a,n,l)},onKeyDown:t=>{var a;return(a=e.onKeyDown)==null?void 0:a.call(e,t,l)},onKeyPress:t=>{var a;return(a=e.onKeyPress)==null?void 0:a.call(e,t,l)},onKeyUp:t=>{var a;return(a=e.onKeyUp)==null?void 0:a.call(e,t,l)}})};try{r.displayName="QuillEditorFieldRender",r.__docgenInfo={description:"",displayName:"QuillEditorFieldRender",props:{field:{defaultValue:null,description:"",name:"field",required:!0,type:{name:"QuillEditorField"}}}}}catch{}class q extends E{render(){return s.jsx(r,{field:this})}}const u=l=>s.jsx(F,{buttons:null,fieldsProps:{field1:{...l,component:q}}});try{u.displayName="QuillEditorComponent",u.__docgenInfo={description:"DForm QuillEditor field",displayName:"QuillEditorComponent",props:{bounds:{defaultValue:null,description:"",name:"bounds",required:!1,type:{name:"string | HTMLElement"}},formats:{defaultValue:null,description:"Allowed formats. This is separate from adding a control in the Toolbar. For example, you can configure Quill to allow bolded content to be pasted into an editor that has no bold button in the toolbar",name:"formats",required:!1,type:{name:'("list" | "link" | "direction" | "size" | "align" | "color" | "image" | "header" | "background" | "bold" | "font" | "code" | "italic" | "strike" | "script" | "underline" | "blockquote" | ... 4 more ... | "video")[]'}},toolbar:{defaultValue:null,description:"Toolbars buttons config",name:"toolbar",required:!1,type:{name:"IQuilToolbar"}},preserveWhitespace:{defaultValue:null,description:"",name:"preserveWhitespace",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"Name of theme to use. The builtin options are “bubble” or “snow”. Default: snow",name:"theme",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"------ Callbacks --------",name:"onChange",required:!1,type:{name:"((value: string, delta: Delta, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((previousSelection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onChangeSelection:{defaultValue:null,description:"",name:"onChangeSelection",required:!1,type:{name:"((selection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((selection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>, field: QuillEditorField) => void)"}},onKeyPress:{defaultValue:null,description:"",name:"onKeyPress",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>, field: QuillEditorField) => void)"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>, field: QuillEditorField) => void)"}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => QuillEditorField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},itemClassName:{defaultValue:null,description:"Field item class name (unlike className, this is the name of the class of the field item container)",name:"itemClassName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Field class name (directly the field itself, not the container)",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Field default value",name:"defaultValue",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly or disabled state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:'boolean | "disabled" | "readOnly"'}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: string, prevValue: string, field: QuillEditorField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: QuillEditorField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: QuillEditorField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: string, error: string, isSubmit: boolean, field: QuillEditorField) => void)"}},onFieldDataFetch:{defaultValue:null,description:"fires when the field trying to fetch data",name:"onFieldDataFetch",required:!1,type:{name:"((field: QuillEditorField) => IDFormDataSourcePromise)"}},onFieldDataFetchSuccess:{defaultValue:null,description:"fires when the field fetch success",name:"onFieldDataFetchSuccess",required:!1,type:{name:"((result: { data: Record<string, any>; }, field: QuillEditorField) => void)"}},onFieldDataFetchError:{defaultValue:null,description:"fires when the field fetch failed",name:"onFieldDataFetchError",required:!1,type:{name:"((error: IError, field: QuillEditorField) => void)"}}}}}catch{}try{quillEditorComponent.displayName="quillEditorComponent",quillEditorComponent.__docgenInfo={description:"DForm QuillEditor field",displayName:"quillEditorComponent",props:{bounds:{defaultValue:null,description:"",name:"bounds",required:!1,type:{name:"string | HTMLElement"}},formats:{defaultValue:null,description:"Allowed formats. This is separate from adding a control in the Toolbar. For example, you can configure Quill to allow bolded content to be pasted into an editor that has no bold button in the toolbar",name:"formats",required:!1,type:{name:'("list" | "link" | "direction" | "size" | "align" | "color" | "image" | "header" | "background" | "bold" | "font" | "code" | "italic" | "strike" | "script" | "underline" | "blockquote" | ... 4 more ... | "video")[]'}},toolbar:{defaultValue:null,description:"Toolbars buttons config",name:"toolbar",required:!1,type:{name:"IQuilToolbar"}},preserveWhitespace:{defaultValue:null,description:"",name:"preserveWhitespace",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"Name of theme to use. The builtin options are “bubble” or “snow”. Default: snow",name:"theme",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"------ Callbacks --------",name:"onChange",required:!1,type:{name:"((value: string, delta: Delta, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((previousSelection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onChangeSelection:{defaultValue:null,description:"",name:"onChangeSelection",required:!1,type:{name:"((selection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((selection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>, field: QuillEditorField) => void)"}},onKeyPress:{defaultValue:null,description:"",name:"onKeyPress",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>, field: QuillEditorField) => void)"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>, field: QuillEditorField) => void)"}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => QuillEditorField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},itemClassName:{defaultValue:null,description:"Field item class name (unlike className, this is the name of the class of the field item container)",name:"itemClassName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Field class name (directly the field itself, not the container)",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Field default value",name:"defaultValue",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly or disabled state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:'boolean | "disabled" | "readOnly"'}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: string, prevValue: string, field: QuillEditorField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: QuillEditorField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: QuillEditorField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: string, error: string, isSubmit: boolean, field: QuillEditorField) => void)"}},onFieldDataFetch:{defaultValue:null,description:"fires when the field trying to fetch data",name:"onFieldDataFetch",required:!1,type:{name:"((field: QuillEditorField) => IDFormDataSourcePromise)"}},onFieldDataFetchSuccess:{defaultValue:null,description:"fires when the field fetch success",name:"onFieldDataFetchSuccess",required:!1,type:{name:"((result: { data: Record<string, any>; }, field: QuillEditorField) => void)"}},onFieldDataFetchError:{defaultValue:null,description:"fires when the field fetch failed",name:"onFieldDataFetchError",required:!1,type:{name:"((error: IError, field: QuillEditorField) => void)"}}}}}catch{}const ce={title:"DForm/Fields/QuillEditor",component:u,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React from 'react';
                    import {DForm} from @krinopotam/ui-kit/dForm';
                    import {IQuillEditorFieldProps, QuillEditorField} from @krinopotam/ui-kit/dForm/fields/quillEditor/quillEditorField';
                    type IComponent = IQuillEditorFieldProps;
                    /** DForm QuillEditor field */
                    export const QuillEditorComponent = (props: IComponent): React.JSX.Element => (
                        <DForm buttons={null} fieldsProps={{field1: {...props, component: QuillEditorField}}} />
                    );
                    export default QuillEditorComponent;
                `}}}},o={args:{label:"Text editor field"}};var p,m,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Text editor field'
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const he=["Playground"];export{o as Playground,he as __namedExportsOrder,ce as default};
