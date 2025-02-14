import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{D as h}from"./dForm-BkeVBmXS.js";import"./dayjs.min-B6ICIYLQ.js";import{B as V}from"./baseField-DAqzjLG5.js";import{r as l}from"./index-iW-139IE.js";import{S as g,a as S}from"./select-CY84Pg0Y.js";import{f as q}from"./index-cNkFZXRj.js";import"./buttonsRow-DO1r_Bnz.js";import"./button-cprhzqle.js";import"./compact-item-Cxv0YLF9.js";import"./useToken-C9qwXZKU.js";import"./index-mQZ8i_rL.js";import"./index-D_2t0AaZ.js";import"./index-CMYZVoVF.js";import"./button-D87aS1YS.js";import"./Sider-zAVKy6og.js";import"./index-H-U0Qhl4.js";import"./context-u9dygr8g.js";import"./KeyCode-lh1qUinJ.js";import"./row-Bq2vx5ix.js";import"./ContextIsolator-BX2WkAUK.js";import"./motion-HGHEQR47.js";import"./roundedArrow-CIJYWJcZ.js";import"./index-Bi_XhfGV.js";import"./colors-B0jgcrR7.js";import"./DownOutlined-CSg1yAI9.js";import"./getNanoId-CghKzzgc.js";import"./updateModalTheme-LJrcSI5I.js";import"./headerRender-mRtut42H.js";import"./index-CvIgV7lr.js";import"./ExclamationCircleFilled-DO6fsheT.js";import"./pickAttrs-DOtYDQG6.js";import"./CloseOutlined-C5nLa7GN.js";import"./useClosable-DLVmVXm2.js";import"./InfoCircleOutlined-DgVG6Ryw.js";import"./QuestionCircleOutlined-BUGNUdLn.js";import"./index-DSj8ZEWj.js";import"./TextArea-Bx-nz3Fu.js";import"./useVariants-Cpy17TlJ.js";import"./index-CHrs_Nvn.js";import"./CheckOutlined-DXdfq3FB.js";import"./isDebugMode-B-VM_G4X.js";import"./isArray-Cl7xn3Rc.js";import"./splitObject-C6hVKqbV.js";import"./useShowArrow-DKg9nTFS.js";import"./List-mPb_Fs88.js";import"./useIcons-jH37no42.js";import"./SearchOutlined-C7GiFsDv.js";const t=({field:e})=>{l.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const a=e.getProps(),s=e.getValue(),p=l.useCallback((f,y)=>{e.isReady()&&(a.fullItemValue?e.setValue(y):e.setValue(f),e.setDirty(!0))},[e,a.fullItemValue]),m=l.useCallback(()=>{e.setTouched(!0)},[e]);l.useEffect(()=>{e.setReady(!0)},[e]);const c={...{width:e.getWidth()??"100%"},...a.style};return r.jsx(g,{className:a.className,allowClear:!0,...a,disabled:e.isDisabled(),readOnly:e.isReadOnly(),value:s,style:c,onBlur:m,onChange:p})};try{t.displayName="SelectFieldRender",t.__docgenInfo={description:"",displayName:"SelectFieldRender",props:{field:{defaultValue:null,description:"",name:"field",required:!0,type:{name:"SelectField"}}}}}catch{}class b extends V{render(){return r.jsx(t,{field:this})}}const i=e=>r.jsx(h,{buttons:null,fieldsProps:{field1:{...e,dataSet:S,component:b}}});try{i.displayName="SelectComponent",i.__docgenInfo={description:"DForm Select field",displayName:"SelectComponent",props:{component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => SelectField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},itemClassName:{defaultValue:null,description:"Field item class name (unlike className, this is the name of the class of the field item container)",name:"itemClassName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Field class name (directly the field itself, not the container)",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string | (string & ReactElement<unknown, string | JSXElementConstructor<any>>) | (string & Iterable<ReactNode>) | (string & ReactPortal) | (string & Promise<...>)"}},defaultValue:{defaultValue:null,description:"Field default value",name:"defaultValue",required:!1,type:{name:"ISelectValue | ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[]"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:`Whether the field default state is readonly
Read only state`,name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly or disabled state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:'boolean | "disabled" | "readOnly"'}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: ISelectValue | ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[], prevValue: ISelectValue | ... 2 more ..., field: SelectField) => void) | undefined"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: SelectField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: SelectField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: SelectField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: SelectField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: SelectField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: SelectField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: SelectField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: SelectField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: ISelectValue | ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[], error: string, isSubmit: boolean, field: SelectField) => void)"}},onFieldDataFetch:{defaultValue:null,description:"fires when the field trying to fetch data",name:"onFieldDataFetch",required:!1,type:{name:"((field: SelectField) => IDFormDataSourcePromise)"}},onFieldDataFetchSuccess:{defaultValue:null,description:"fires when the field fetch success",name:"onFieldDataFetchSuccess",required:!1,type:{name:"((result: { data: Record<string, any>; }, field: SelectField) => void)"}},onFieldDataFetchError:{defaultValue:null,description:"fires when the field fetch failed",name:"onFieldDataFetchError",required:!1,type:{name:"((error: IError, field: SelectField) => void)"}},dataSet:{defaultValue:null,description:"Select options list",name:"dataSet",required:!1,type:{name:"ISelectNode<Record<string, any>>[]"}},value:{defaultValue:null,description:"Selected values",name:"value",required:!1,type:{name:"ISelectValue | ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[]"}},onChange:{defaultValue:null,description:"Fires when selection changed",name:"onChange",required:!1,type:{name:"((value: ISelectValue, option: ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[]) => void)"}},onSelect:{defaultValue:null,description:"Fires when item selected",name:"onSelect",required:!1,type:{name:"((value: ISelectValue, option: ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[]) => void)"}},onDeselect:{defaultValue:null,description:"Fires when item deselected",name:"onDeselect",required:!1,type:{name:"((value: ISelectValue, option: ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[]) => void)"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},allowClear:{defaultValue:null,description:"",name:"allowClear",required:!1,type:{name:"boolean | { clearIcon?: RenderNode; }"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},prefixCls:{defaultValue:null,description:"",name:"prefixCls",required:!1,type:{name:"string"}},builtinPlacements:{defaultValue:null,description:"",name:"builtinPlacements",required:!1,type:{name:"BuildInPlacements"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottomLeft"'},{value:'"bottomRight"'},{value:'"topLeft"'},{value:'"topRight"'}]}},transitionName:{defaultValue:null,description:"",name:"transitionName",required:!1,type:{name:"string"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"string"}},showArrow:{defaultValue:null,description:"@deprecated `showArrow` is deprecated which will be removed in next major version. It will be a\ndefault behavior, you can hide it by setting `suffixIcon` to null.",name:"showArrow",required:!1,type:{name:"boolean"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"multiple"'},{value:'"tags"'}]}},searchValue:{defaultValue:null,description:"",name:"searchValue",required:!1,type:{name:"string"}},autoClearSearchValue:{defaultValue:null,description:"",name:"autoClearSearchValue",required:!1,type:{name:"boolean"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!1,type:{name:"((value: string) => void)"}},showSearch:{defaultValue:null,description:"",name:"showSearch",required:!1,type:{name:"boolean"}},tagRender:{defaultValue:null,description:"",name:"tagRender",required:!1,type:{name:"((props: CustomTagProps) => ReactElement<unknown, string | JSXElementConstructor<any>>)"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"ltr"'},{value:'"rtl"'}]}},notFoundContent:{defaultValue:null,description:"",name:"notFoundContent",required:!1,type:{name:"ReactNode"}},choiceTransitionName:{defaultValue:null,description:"",name:"choiceTransitionName",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},onDropdownVisibleChange:{defaultValue:null,description:"",name:"onDropdownVisibleChange",required:!1,type:{name:"((open: boolean) => void)"}},maxTagTextLength:{defaultValue:null,description:"",name:"maxTagTextLength",required:!1,type:{name:"number"}},maxTagCount:{defaultValue:null,description:"",name:"maxTagCount",required:!1,type:{name:'number | "responsive"'}},maxTagPlaceholder:{defaultValue:null,description:"",name:"maxTagPlaceholder",required:!1,type:{name:"ReactNode | ((omittedValues: DisplayValueType[]) => ReactNode)"}},tokenSeparators:{defaultValue:null,description:"",name:"tokenSeparators",required:!1,type:{name:"string[]"}},suffixIcon:{defaultValue:null,description:"",name:"suffixIcon",required:!1,type:{name:"ReactNode"}},clearIcon:{defaultValue:null,description:"Clear all icon\n@deprecated Please use `allowClear` instead",name:"clearIcon",required:!1,type:{name:"RenderNode"}},removeIcon:{defaultValue:null,description:"Selector remove icon",name:"removeIcon",required:!1,type:{name:"RenderNode"}},dropdownStyle:{defaultValue:null,description:"",name:"dropdownStyle",required:!1,type:{name:"CSSProperties"}},dropdownClassName:{defaultValue:null,description:"@deprecated Please use `popupClassName` instead",name:"dropdownClassName",required:!1,type:{name:"string"}},dropdownMatchSelectWidth:{defaultValue:null,description:"@deprecated Please use `popupMatchSelectWidth` instead",name:"dropdownMatchSelectWidth",required:!1,type:{name:"number | boolean"}},dropdownRender:{defaultValue:null,description:"",name:"dropdownRender",required:!1,type:{name:"((menu: ReactElement<unknown, string | JSXElementConstructor<any>>) => ReactElement<unknown, string | JSXElementConstructor<any>>)"}},dropdownAlign:{defaultValue:null,description:"",name:"dropdownAlign",required:!1,type:{name:"AlignType"}},getPopupContainer:{defaultValue:null,description:"",name:"getPopupContainer",required:!1,type:{name:"RenderDOMFunc"}},showAction:{defaultValue:null,description:"",name:"showAction",required:!1,type:{name:'("focus" | "click")[]'}},onPopupScroll:{defaultValue:null,description:"",name:"onPopupScroll",required:!1,type:{name:"UIEventHandler<HTMLDivElement>"}},onInputKeyDown:{defaultValue:null,description:"",name:"onInputKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>"}},fieldNames:{defaultValue:null,description:"",name:"fieldNames",required:!1,type:{name:"FieldNames"}},inputValue:{defaultValue:null,description:"@deprecated Use `searchValue` instead",name:"inputValue",required:!1,type:{name:"string"}},filterOption:{defaultValue:null,description:"In Select, `false` means do nothing.\nIn TreeSelect, `false` will highlight match item.\nIt's by design.",name:"filterOption",required:!1,type:{name:"boolean | FilterFunc<BaseOptionType | DefaultOptionType>"}},filterSort:{defaultValue:null,description:"",name:"filterSort",required:!1,type:{name:"((optionA: BaseOptionType | DefaultOptionType, optionB: BaseOptionType | DefaultOptionType, info: { ...; }) => number)"}},optionFilterProp:{defaultValue:null,description:"",name:"optionFilterProp",required:!1,type:{name:"string"}},optionLabelProp:{defaultValue:null,description:"",name:"optionLabelProp",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"(BaseOptionType | DefaultOptionType)[]"}},optionRender:{defaultValue:null,description:"",name:"optionRender",required:!1,type:{name:"((oriOption: FlattenOptionData<BaseOptionType | DefaultOptionType>, info: { index: number; }) => ReactNode)"}},defaultActiveFirstOption:{defaultValue:null,description:"",name:"defaultActiveFirstOption",required:!1,type:{name:"boolean"}},virtual:{defaultValue:null,description:"",name:"virtual",required:!1,type:{name:"boolean"}},listHeight:{defaultValue:null,description:"",name:"listHeight",required:!1,type:{name:"number"}},listItemHeight:{defaultValue:null,description:"",name:"listItemHeight",required:!1,type:{name:"number"}},labelRender:{defaultValue:null,description:"",name:"labelRender",required:!1,type:{name:"((props: LabelInValueType) => ReactNode)"}},menuItemSelectedIcon:{defaultValue:null,description:"",name:"menuItemSelectedIcon",required:!1,type:{name:"RenderNode"}},labelInValue:{defaultValue:null,description:"",name:"labelInValue",required:!1,type:{name:"boolean"}},maxCount:{defaultValue:null,description:"",name:"maxCount",required:!1,type:{name:"number"}},rootClassName:{defaultValue:null,description:"",name:"rootClassName",required:!1,type:{name:"string"}},bordered:{defaultValue:null,description:"@deprecated Use `variant` instead.",name:"bordered",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:'"outlined"'},description:"@since 5.13.0",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"borderless"'},{value:'"filled"'},{value:'"underlined"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"warning"'},{value:'"error"'}]}},popupClassName:{defaultValue:null,description:"",name:"popupClassName",required:!1,type:{name:"string"}},popupMatchSelectWidth:{defaultValue:null,description:"",name:"popupMatchSelectWidth",required:!1,type:{name:"number | boolean"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"Ref<BaseSelectRef>"}}}}}catch{}try{selectComponent.displayName="selectComponent",selectComponent.__docgenInfo={description:"DForm Select field",displayName:"selectComponent",props:{component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => SelectField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},itemClassName:{defaultValue:null,description:"Field item class name (unlike className, this is the name of the class of the field item container)",name:"itemClassName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Field class name (directly the field itself, not the container)",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string | (string & ReactElement<unknown, string | JSXElementConstructor<any>>) | (string & Iterable<ReactNode>) | (string & ReactPortal) | (string & Promise<...>)"}},defaultValue:{defaultValue:null,description:"Field default value",name:"defaultValue",required:!1,type:{name:"ISelectValue | ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[]"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:`Whether the field default state is readonly
Read only state`,name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly or disabled state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:'boolean | "disabled" | "readOnly"'}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: ISelectValue | ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[], prevValue: ISelectValue | ... 2 more ..., field: SelectField) => void) | undefined"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: SelectField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: SelectField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: SelectField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: SelectField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: SelectField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: SelectField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: SelectField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: SelectField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: ISelectValue | ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[], error: string, isSubmit: boolean, field: SelectField) => void)"}},onFieldDataFetch:{defaultValue:null,description:"fires when the field trying to fetch data",name:"onFieldDataFetch",required:!1,type:{name:"((field: SelectField) => IDFormDataSourcePromise)"}},onFieldDataFetchSuccess:{defaultValue:null,description:"fires when the field fetch success",name:"onFieldDataFetchSuccess",required:!1,type:{name:"((result: { data: Record<string, any>; }, field: SelectField) => void)"}},onFieldDataFetchError:{defaultValue:null,description:"fires when the field fetch failed",name:"onFieldDataFetchError",required:!1,type:{name:"((error: IError, field: SelectField) => void)"}},dataSet:{defaultValue:null,description:"Select options list",name:"dataSet",required:!1,type:{name:"ISelectNode<Record<string, any>>[]"}},value:{defaultValue:null,description:"Selected values",name:"value",required:!1,type:{name:"ISelectValue | ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[]"}},onChange:{defaultValue:null,description:"Fires when selection changed",name:"onChange",required:!1,type:{name:"((value: ISelectValue, option: ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[]) => void)"}},onSelect:{defaultValue:null,description:"Fires when item selected",name:"onSelect",required:!1,type:{name:"((value: ISelectValue, option: ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[]) => void)"}},onDeselect:{defaultValue:null,description:"Fires when item deselected",name:"onDeselect",required:!1,type:{name:"((value: ISelectValue, option: ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[]) => void)"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},allowClear:{defaultValue:null,description:"",name:"allowClear",required:!1,type:{name:"boolean | { clearIcon?: RenderNode; }"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},prefixCls:{defaultValue:null,description:"",name:"prefixCls",required:!1,type:{name:"string"}},builtinPlacements:{defaultValue:null,description:"",name:"builtinPlacements",required:!1,type:{name:"BuildInPlacements"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottomLeft"'},{value:'"bottomRight"'},{value:'"topLeft"'},{value:'"topRight"'}]}},transitionName:{defaultValue:null,description:"",name:"transitionName",required:!1,type:{name:"string"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"string"}},showArrow:{defaultValue:null,description:"@deprecated `showArrow` is deprecated which will be removed in next major version. It will be a\ndefault behavior, you can hide it by setting `suffixIcon` to null.",name:"showArrow",required:!1,type:{name:"boolean"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"multiple"'},{value:'"tags"'}]}},searchValue:{defaultValue:null,description:"",name:"searchValue",required:!1,type:{name:"string"}},autoClearSearchValue:{defaultValue:null,description:"",name:"autoClearSearchValue",required:!1,type:{name:"boolean"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!1,type:{name:"((value: string) => void)"}},showSearch:{defaultValue:null,description:"",name:"showSearch",required:!1,type:{name:"boolean"}},tagRender:{defaultValue:null,description:"",name:"tagRender",required:!1,type:{name:"((props: CustomTagProps) => ReactElement<unknown, string | JSXElementConstructor<any>>)"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"ltr"'},{value:'"rtl"'}]}},notFoundContent:{defaultValue:null,description:"",name:"notFoundContent",required:!1,type:{name:"ReactNode"}},choiceTransitionName:{defaultValue:null,description:"",name:"choiceTransitionName",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},onDropdownVisibleChange:{defaultValue:null,description:"",name:"onDropdownVisibleChange",required:!1,type:{name:"((open: boolean) => void)"}},maxTagTextLength:{defaultValue:null,description:"",name:"maxTagTextLength",required:!1,type:{name:"number"}},maxTagCount:{defaultValue:null,description:"",name:"maxTagCount",required:!1,type:{name:'number | "responsive"'}},maxTagPlaceholder:{defaultValue:null,description:"",name:"maxTagPlaceholder",required:!1,type:{name:"ReactNode | ((omittedValues: DisplayValueType[]) => ReactNode)"}},tokenSeparators:{defaultValue:null,description:"",name:"tokenSeparators",required:!1,type:{name:"string[]"}},suffixIcon:{defaultValue:null,description:"",name:"suffixIcon",required:!1,type:{name:"ReactNode"}},clearIcon:{defaultValue:null,description:"Clear all icon\n@deprecated Please use `allowClear` instead",name:"clearIcon",required:!1,type:{name:"RenderNode"}},removeIcon:{defaultValue:null,description:"Selector remove icon",name:"removeIcon",required:!1,type:{name:"RenderNode"}},dropdownStyle:{defaultValue:null,description:"",name:"dropdownStyle",required:!1,type:{name:"CSSProperties"}},dropdownClassName:{defaultValue:null,description:"@deprecated Please use `popupClassName` instead",name:"dropdownClassName",required:!1,type:{name:"string"}},dropdownMatchSelectWidth:{defaultValue:null,description:"@deprecated Please use `popupMatchSelectWidth` instead",name:"dropdownMatchSelectWidth",required:!1,type:{name:"number | boolean"}},dropdownRender:{defaultValue:null,description:"",name:"dropdownRender",required:!1,type:{name:"((menu: ReactElement<unknown, string | JSXElementConstructor<any>>) => ReactElement<unknown, string | JSXElementConstructor<any>>)"}},dropdownAlign:{defaultValue:null,description:"",name:"dropdownAlign",required:!1,type:{name:"AlignType"}},getPopupContainer:{defaultValue:null,description:"",name:"getPopupContainer",required:!1,type:{name:"RenderDOMFunc"}},showAction:{defaultValue:null,description:"",name:"showAction",required:!1,type:{name:'("focus" | "click")[]'}},onPopupScroll:{defaultValue:null,description:"",name:"onPopupScroll",required:!1,type:{name:"UIEventHandler<HTMLDivElement>"}},onInputKeyDown:{defaultValue:null,description:"",name:"onInputKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>"}},fieldNames:{defaultValue:null,description:"",name:"fieldNames",required:!1,type:{name:"FieldNames"}},inputValue:{defaultValue:null,description:"@deprecated Use `searchValue` instead",name:"inputValue",required:!1,type:{name:"string"}},filterOption:{defaultValue:null,description:"In Select, `false` means do nothing.\nIn TreeSelect, `false` will highlight match item.\nIt's by design.",name:"filterOption",required:!1,type:{name:"boolean | FilterFunc<BaseOptionType | DefaultOptionType>"}},filterSort:{defaultValue:null,description:"",name:"filterSort",required:!1,type:{name:"((optionA: BaseOptionType | DefaultOptionType, optionB: BaseOptionType | DefaultOptionType, info: { ...; }) => number)"}},optionFilterProp:{defaultValue:null,description:"",name:"optionFilterProp",required:!1,type:{name:"string"}},optionLabelProp:{defaultValue:null,description:"",name:"optionLabelProp",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"(BaseOptionType | DefaultOptionType)[]"}},optionRender:{defaultValue:null,description:"",name:"optionRender",required:!1,type:{name:"((oriOption: FlattenOptionData<BaseOptionType | DefaultOptionType>, info: { index: number; }) => ReactNode)"}},defaultActiveFirstOption:{defaultValue:null,description:"",name:"defaultActiveFirstOption",required:!1,type:{name:"boolean"}},virtual:{defaultValue:null,description:"",name:"virtual",required:!1,type:{name:"boolean"}},listHeight:{defaultValue:null,description:"",name:"listHeight",required:!1,type:{name:"number"}},listItemHeight:{defaultValue:null,description:"",name:"listItemHeight",required:!1,type:{name:"number"}},labelRender:{defaultValue:null,description:"",name:"labelRender",required:!1,type:{name:"((props: LabelInValueType) => ReactNode)"}},menuItemSelectedIcon:{defaultValue:null,description:"",name:"menuItemSelectedIcon",required:!1,type:{name:"RenderNode"}},labelInValue:{defaultValue:null,description:"",name:"labelInValue",required:!1,type:{name:"boolean"}},maxCount:{defaultValue:null,description:"",name:"maxCount",required:!1,type:{name:"number"}},rootClassName:{defaultValue:null,description:"",name:"rootClassName",required:!1,type:{name:"string"}},bordered:{defaultValue:null,description:"@deprecated Use `variant` instead.",name:"bordered",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:'"outlined"'},description:"@since 5.13.0",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"borderless"'},{value:'"filled"'},{value:'"underlined"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"warning"'},{value:'"error"'}]}},popupClassName:{defaultValue:null,description:"",name:"popupClassName",required:!1,type:{name:"string"}},popupMatchSelectWidth:{defaultValue:null,description:"",name:"popupMatchSelectWidth",required:!1,type:{name:"number | boolean"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"Ref<BaseSelectRef>"}}}}}catch{}const Ve={title:"DForm/Fields/Select",component:i,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React from "react";
                    import {DForm} from @krinopotam/ui-kit/dForm";
                    import {ISelectFieldProps, SelectField} from @krinopotam/ui-kit/dForm/fields/select/selectField";
                    import {SelectDataSet} from "../../../datasets/select";
                    type IComponent = ISelectFieldProps
                    /** DForm Select field */
                    export const SelectComponent = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, dataSet:SelectDataSet, component: SelectField}}
                        }
                    />
                    export default SelectComponent
                `}}}},n={args:{label:"Select field",onReadyStateChanged:q()}};var d,o,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Select field',
    onReadyStateChanged: fn()
  }
}`,...(u=(o=n.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const ge=["Playground"];export{n as Playground,ge as __namedExportsOrder,Ve as default};
