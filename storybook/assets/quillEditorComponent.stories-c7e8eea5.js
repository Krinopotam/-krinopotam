import{j as d}from"./useToken-268f632d.js";import{B as o,Q as r,D as u}from"./treeSelectFieldRender-af3d34ee.js";import"./index-092ccb3f.js";import"./dayjs.min-bd65d405.js";import"./index-5819ae2c.js";import"./_commonjsHelpers-de833af9.js";import"./updateModalTheme-ee4dea50.js";import"./draggableRender-ff3f45b2.js";import"./index-e0a25a8d.js";import"./InfoCircleOutlined-14b312e0.js";import"./isNativeReflectConstruct-2f1897fe.js";import"./compact-item-e0eb0d02.js";import"./button-83f0aeae.js";import"./button-a395f6e7.js";import"./helpersString-59da762c.js";import"./v4-4a60fe23.js";import"./index-ba109c1e.js";import"./ExclamationCircleFilled-8e2dacf4.js";import"./context-acf775e7.js";import"./motion-3729e44c.js";import"./useClosable-7a147c6b.js";import"./useZIndex-9f7c196b.js";import"./KeyCode-6413d982.js";import"./pickAttrs-f49ef707.js";import"./zoom-f1d5320d.js";import"./PurePanel-a66be90d.js";import"./index-53e6b65f.js";import"./buttonsRow-300bee12.js";import"./Sider-f270e7a7.js";import"./row-353874ab.js";import"./roundedArrow-cf08b32b.js";import"./colors-dae18b42.js";import"./DownOutlined-7d62f4d3.js";import"./index-9d475cdf.js";import"./QuestionCircleOutlined-3fb4f056.js";import"./index-15561246.js";import"./index-762b8d87.js";import"./index-47c1009a.js";import"./statusUtils-8e8708fb.js";import"./SearchOutlined-826801c4.js";import"./select-15b31404.js";import"./tabulatorBase-35fae480.js";import"./client-36d50ed5.js";import"./styled-components.browser.esm-11e59584.js";import"./datePicker-93fadb6a.js";import"./quillEditor-99baaa8f.js";import"./_baseIsEqual-93bb5583.js";import"./iframe-b96babd3.js";import"../sb-preview/runtime.js";import"./MenuOutlined-207c5478.js";import"./_commonjs-dynamic-modules-302442b1.js";class s extends o{render(){return d.jsx(r,{field:this})}}const i=e=>d.jsx(u,{buttons:null,fieldsProps:{field1:{...e,component:s}}}),p=i;try{i.displayName="QuillEditorComponent",i.__docgenInfo={description:"DForm QuillEditor field",displayName:"QuillEditorComponent",props:{bounds:{defaultValue:null,description:"",name:"bounds",required:!1,type:{name:"string | HTMLElement"}},value:{defaultValue:null,description:"Default value",name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},formats:{defaultValue:null,description:"Allowed formats. This is separate from adding a control in the Toolbar. For example, you can configure Quill to allow bolded content to be pasted into an editor that has no bold button in the toolbar",name:"formats",required:!1,type:{name:'("header" | "color" | "size" | "list" | "align" | "background" | "bold" | "font" | "code" | "italic" | "link" | "strike" | "script" | "underline" | "blockquote" | "indent" | "bullet" | ... 4 more ... | "video")[]'}},toolbar:{defaultValue:null,description:"Toolbars buttons config",name:"toolbar",required:!1,type:{name:"IQuilToolbar"}},preserveWhitespace:{defaultValue:null,description:"",name:"preserveWhitespace",required:!1,type:{name:"boolean"}},scrollingContainer:{defaultValue:null,description:"",name:"scrollingContainer",required:!1,type:{name:"string | HTMLElement"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"Name of theme to use. The builtin options are “bubble” or “snow”. Default: snow",name:"theme",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"------ Callbacks --------",name:"onChange",required:!1,type:{name:"((value: string, delta: IDeltaStatic, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((previousSelection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onChangeSelection:{defaultValue:null,description:"",name:"onChangeSelection",required:!1,type:{name:"((selection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((selection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>, field: QuillEditorField) => void)"}},onKeyPress:{defaultValue:null,description:"",name:"onKeyPress",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>, field: QuillEditorField) => void)"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>, field: QuillEditorField) => void)"}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => QuillEditorField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"If field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"If field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"If field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: unknown, prevValue: unknown, field: QuillEditorField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: QuillEditorField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: QuillEditorField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: unknown, error: string, isSubmit: boolean, field: QuillEditorField) => void)"}}}}}catch{}try{quillEditorComponent.displayName="quillEditorComponent",quillEditorComponent.__docgenInfo={description:"DForm QuillEditor field",displayName:"quillEditorComponent",props:{bounds:{defaultValue:null,description:"",name:"bounds",required:!1,type:{name:"string | HTMLElement"}},value:{defaultValue:null,description:"Default value",name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},formats:{defaultValue:null,description:"Allowed formats. This is separate from adding a control in the Toolbar. For example, you can configure Quill to allow bolded content to be pasted into an editor that has no bold button in the toolbar",name:"formats",required:!1,type:{name:'("header" | "color" | "size" | "list" | "align" | "background" | "bold" | "font" | "code" | "italic" | "link" | "strike" | "script" | "underline" | "blockquote" | "indent" | "bullet" | ... 4 more ... | "video")[]'}},toolbar:{defaultValue:null,description:"Toolbars buttons config",name:"toolbar",required:!1,type:{name:"IQuilToolbar"}},preserveWhitespace:{defaultValue:null,description:"",name:"preserveWhitespace",required:!1,type:{name:"boolean"}},scrollingContainer:{defaultValue:null,description:"",name:"scrollingContainer",required:!1,type:{name:"string | HTMLElement"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"Name of theme to use. The builtin options are “bubble” or “snow”. Default: snow",name:"theme",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"------ Callbacks --------",name:"onChange",required:!1,type:{name:"((value: string, delta: IDeltaStatic, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((previousSelection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onChangeSelection:{defaultValue:null,description:"",name:"onChangeSelection",required:!1,type:{name:"((selection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((selection: Range, source: Sources, editor: UnprivilegedEditor, field: QuillEditorField) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>, field: QuillEditorField) => void)"}},onKeyPress:{defaultValue:null,description:"",name:"onKeyPress",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>, field: QuillEditorField) => void)"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>, field: QuillEditorField) => void)"}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => QuillEditorField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"If field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"If field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"If field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: unknown, prevValue: unknown, field: QuillEditorField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: QuillEditorField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: QuillEditorField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: QuillEditorField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: unknown, error: string, isSubmit: boolean, field: QuillEditorField) => void)"}}}}}catch{}const ue={title:"DForm/Fields/QuillEditor",component:p,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React from "react";
                    import {DForm} from @krinopotam/ui-kit/dForm";
                    import {IDFormFieldProps} from @krinopotam/ui-kit/dForm";
                    import {QuillEditorField} from @krinopotam/ui-kit/dForm/fields/quillEditor/quillEditorField";
                    type IComponent = IDFormFieldProps;
                    /** DForm QuillEditor component */
                    export const QuillEditorComponent = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: QuillEditorField}}
                        }
                    />
                    export  default QuillEditorComponent
                `}}}},l={args:{label:"Text editor field"}};var a,t,n;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: 'Text editor field'
  }
}`,...(n=(t=l.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const se=["Playground"];export{l as Playground,se as __namedExportsOrder,ue as default};
//# sourceMappingURL=quillEditorComponent.stories-c7e8eea5.js.map
