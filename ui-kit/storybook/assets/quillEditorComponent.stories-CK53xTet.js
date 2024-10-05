import{j as s}from"./extends-BRD_ACZV.js";import{B as q,D as E}from"./dForm-C27JHoGE.js";import"./dayjs.min-C_f_bfvq.js";import{r as o}from"./index-uubelm5h.js";import{Q as V}from"./quillEditor-qd4lAoC1.js";import"./index-DaxZXI7c.js";import"./index-ZjhSye4T.js";import"./compact-item-Cc18Jwjb.js";import"./useToken-5hoSZr8q.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./index-DSOWIBN6.js";import"./context-B9fTWsvw.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./pickAttrs-CgiZ8JxW.js";import"./useVariants-DZ-kQ5YQ.js";import"./ContextIsolator-DOOW9rnJ.js";import"./index-Dc2gpPvf.js";import"./motion-882RPeBL.js";import"./row-B5tJJ9FS.js";import"./roundedArrow-BEYe8rhY.js";import"./zoom-BAlMIi5O.js";import"./colors-C2uSR3nC.js";import"./QuestionCircleOutlined-Bk-29y8U.js";import"./ExclamationCircleFilled-DfdUTXTz.js";import"./isArray-Cl7xn3Rc.js";import"./buttonsRow-DHM-ZdUh.js";import"./button-DaZ-r7DY.js";import"./button-Cxc_PIz_.js";import"./index-IYDviCHk.js";import"./Sider-CC_ePe8H.js";import"./KeyCode-DNlgD2sM.js";import"./DownOutlined-CLv9oSrw.js";import"./getNanoId-DD8laUaD.js";import"./updateModalTheme-BLB1rFIj.js";import"./headerRender-QuPi2rXv.js";import"./index-B7x7O6v2.js";import"./CloseOutlined-C4rdU_UQ.js";import"./useClosable-B_cjSSA6.js";import"./index-D3eZ-H7s.js";import"./InfoCircleOutlined-DRg6sOvc.js";import"./index-DdcAgIgo.js";import"./CheckOutlined-Brjc5mOT.js";import"./modal-4AKTHvwZ.js";import"./useIsDebugMode-_qV3LLe4.js";import"./styled-components.browser.esm-CfkHM83v.js";import"./_baseIsEqual-B0TaGFs9.js";const r=({field:l})=>{o.useSyncExternalStore(l.subscribe.bind(l),l.getSnapshot.bind(l));const e=l.getProps(),h=l.getValue(),y=o.useCallback(function(t,a,n,i){var p;l.isReady()&&(l.setValue(t||void 0),l.setDirty(!0),(p=e.onChange)==null||p.call(e,t,a,n,i,l))},[l,e]),g=o.useCallback((t,a,n)=>{var i;l.setTouched(!0),(i=e.onBlur)==null||i.call(e,t,a,n,l)},[l,e]);o.useEffect(()=>{l.setReady(!0)},[l]);const b={...{width:l.getWidth()??"100%"},...e.style};return s.jsx(V,{theme:e.theme,value:h,formats:e.formats,toolbar:e.toolbar,className:e.className,preserveWhitespace:e.preserveWhitespace,tabIndex:e.tabIndex,bounds:e.bounds,scrollingContainer:e.scrollingContainer,style:b,disabled:l.isDisabled(),readOnly:l.isReadOnly(),placeholder:e.placeholder,onChange:y,onBlur:g,onChangeSelection:(t,a,n)=>{var i;return(i=e.onChangeSelection)==null?void 0:i.call(e,t,a,n,l)},onFocus:(t,a,n)=>{var i;return(i=e.onFocus)==null?void 0:i.call(e,t,a,n,l)},onKeyDown:t=>{var a;return(a=e.onKeyDown)==null?void 0:a.call(e,t,l)},onKeyPress:t=>{var a;return(a=e.onKeyPress)==null?void 0:a.call(e,t,l)},onKeyUp:t=>{var a;return(a=e.onKeyUp)==null?void 0:a.call(e,t,l)}})};try{r.displayName="QuillEditorFieldRender",r.__docgenInfo={description:"",displayName:"QuillEditorFieldRender",props:{field:{defaultValue:null,description:"",name:"field",required:!0,type:{name:"QuillEditorField"}}}}}catch{}class C extends q{render(){return s.jsx(r,{field:this})}}const u=l=>s.jsx(E,{buttons:null,fieldsProps:{field1:{...l,component:C}}}),F=u;try{u.displayName="QuillEditorComponent",u.__docgenInfo={description:"DForm QuillEditor field",displayName:"QuillEditorComponent",props:{bounds:{defaultValue:null,description:"",name:"bounds",required:!1,type:{name:"string | HTMLElement"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},formats:{defaultValue:null,description:"Allowed formats. This is separate from adding a control in the Toolbar. For example, you can configure Quill to allow bolded content to be pasted into an editor that has no bold button in the toolbar",name:"formats",required:!1,type:{name:'("align" | "header" | "size" | "list" | "color" | "background" | "bold" | "font" | "code" | "italic" | "link" | "strike" | "script" | "underline" | "blockquote" | "indent" | "bullet" | ... 4 more ... | "video")[]'}},toolbar:{defaultValue:null,description:"Toolbars buttons config",name:"toolbar",required:!1,type:{name:"IQuilToolbar"}},preserveWhitespace:{defaultValue:null,description:"",name:"preserveWhitespace",required:!1,type:{name:"boolean"}},scrollingContainer:{defaultValue:null,description:"",name:"scrollingContainer",required:!1,type:{name:"string | HTMLElement"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"Name of theme to use. The builtin options are “bubble” or “snow”. Default: snow",name:"theme",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"------ Callbacks --------",name:"onChange",required:!1,type:{name:"((value: string, delta: IDeltaStatic, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((previousSelection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onChangeSelection:{defaultValue:null,description:"",name:"onChangeSelection",required:!1,type:{name:"((selection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((selection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>, field: QuillEditorField) => void)"}},onKeyPress:{defaultValue:null,description:"",name:"onKeyPress",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>, field: QuillEditorField) => void)"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>, field: QuillEditorField) => void)"}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => QuillEditorField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Field default value",name:"value",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: string, prevValue: string, field: QuillEditorField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: QuillEditorField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: QuillEditorField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: string, error: string, isSubmit: boolean, field: QuillEditorField) => void)"}}}}}catch{}try{quillEditorComponent.displayName="quillEditorComponent",quillEditorComponent.__docgenInfo={description:"DForm QuillEditor field",displayName:"quillEditorComponent",props:{bounds:{defaultValue:null,description:"",name:"bounds",required:!1,type:{name:"string | HTMLElement"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},formats:{defaultValue:null,description:"Allowed formats. This is separate from adding a control in the Toolbar. For example, you can configure Quill to allow bolded content to be pasted into an editor that has no bold button in the toolbar",name:"formats",required:!1,type:{name:'("align" | "header" | "size" | "list" | "color" | "background" | "bold" | "font" | "code" | "italic" | "link" | "strike" | "script" | "underline" | "blockquote" | "indent" | "bullet" | ... 4 more ... | "video")[]'}},toolbar:{defaultValue:null,description:"Toolbars buttons config",name:"toolbar",required:!1,type:{name:"IQuilToolbar"}},preserveWhitespace:{defaultValue:null,description:"",name:"preserveWhitespace",required:!1,type:{name:"boolean"}},scrollingContainer:{defaultValue:null,description:"",name:"scrollingContainer",required:!1,type:{name:"string | HTMLElement"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"Name of theme to use. The builtin options are “bubble” or “snow”. Default: snow",name:"theme",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"------ Callbacks --------",name:"onChange",required:!1,type:{name:"((value: string, delta: IDeltaStatic, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((previousSelection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onChangeSelection:{defaultValue:null,description:"",name:"onChangeSelection",required:!1,type:{name:"((selection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((selection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>, field: QuillEditorField) => void)"}},onKeyPress:{defaultValue:null,description:"",name:"onKeyPress",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>, field: QuillEditorField) => void)"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>, field: QuillEditorField) => void)"}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => QuillEditorField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Field default value",name:"value",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: string, prevValue: string, field: QuillEditorField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: QuillEditorField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: QuillEditorField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: string, error: string, isSubmit: boolean, field: QuillEditorField) => void)"}}}}}catch{}const ge={title:"DForm/Fields/QuillEditor",component:F,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React from 'react';
                    import {DForm} from @krinopotam/ui-kit/dForm';
                    import {IQuillEditorFieldProps, QuillEditorField} from @krinopotam/ui-kit/dForm/fields/quillEditor/quillEditorField';
                    type IComponent = IQuillEditorFieldProps;
                    /** DForm QuillEditor field */
                    export const QuillEditorComponent = (props: IComponent): React.JSX.Element => (
                        <DForm buttons={null} fieldsProps={{field1: {...props, component: QuillEditorField}}} />
                    );
                    export default QuillEditorComponent;
                `}}}},d={args:{label:"Text editor field"}};var m,f,c;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Text editor field'
  }
}`,...(c=(f=d.parameters)==null?void 0:f.docs)==null?void 0:c.source}}};const be=["Playground"];export{d as Playground,be as __namedExportsOrder,ge as default};