import{j as r}from"./extends-BRD_ACZV.js";import{B as v,D as h}from"./dForm-GAyejxzN.js";import"./dayjs.min-C_f_bfvq.js";import{r as i}from"./index-uubelm5h.js";import"./index-DaxZXI7c.js";import"./index-ZjhSye4T.js";import"./compact-item-Cc18Jwjb.js";import"./useToken-5hoSZr8q.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./index-DSOWIBN6.js";import"./context-B9fTWsvw.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./pickAttrs-CgiZ8JxW.js";import"./useVariants-DZ-kQ5YQ.js";import"./ContextIsolator-DOOW9rnJ.js";import"./index-Dc2gpPvf.js";import"./motion-882RPeBL.js";import"./row-B5tJJ9FS.js";import"./roundedArrow-BEYe8rhY.js";import"./zoom-BAlMIi5O.js";import"./colors-C2uSR3nC.js";import"./QuestionCircleOutlined-Bk-29y8U.js";import"./ExclamationCircleFilled-DfdUTXTz.js";import"./isArray-Cl7xn3Rc.js";import"./mergeButtons-CGWovgZR.js";import"./button-DkmzalYF.js";import"./button-Cxc_PIz_.js";import"./index-IYDviCHk.js";import"./Sider-CC_ePe8H.js";import"./KeyCode-DNlgD2sM.js";import"./DownOutlined-CLv9oSrw.js";import"./getNanoId-DD8laUaD.js";import"./updateModalTheme-ccBZ7lvN.js";import"./headerRender-CTXCfp3k.js";import"./index-B7x7O6v2.js";import"./CloseOutlined-C4rdU_UQ.js";import"./useClosable-B_cjSSA6.js";import"./index-D3eZ-H7s.js";import"./InfoCircleOutlined-DRg6sOvc.js";import"./index-DdcAgIgo.js";import"./CheckOutlined-Brjc5mOT.js";import"./modal-Dxf_Iu35.js";import"./useIsDebugMode-_qV3LLe4.js";const o=({field:t})=>{i.useSyncExternalStore(t.subscribe.bind(t),t.getSnapshot.bind(t));const e=t.getProps(),p=t.getValue(),f=i.useCallback(a=>{var n;t.setTouched(!0),(n=e==null?void 0:e.onClick)==null||n.call(e,a,t)},[t,e]);i.useEffect(()=>{t.setReady(!0)},[t]);const c={...{width:t.getWidth()??"100%"},...e.style};return r.jsx("a",{href:e.href,target:e.target,style:c,onClick:a=>f(a),onContextMenu:a=>{var n;return(n=e==null?void 0:e.onContextMenu)==null?void 0:n.call(e,a,t)},onDoubleClick:a=>{var n;return(n=e==null?void 0:e.onDoubleClick)==null?void 0:n.call(e,a,t)},onDrag:a=>{var n;return(n=e==null?void 0:e.onDrag)==null?void 0:n.call(e,a,t)},onDragEnd:a=>{var n;return(n=e==null?void 0:e.onDragEnd)==null?void 0:n.call(e,a,t)},onDragEnter:a=>{var n;return(n=e==null?void 0:e.onDragEnter)==null?void 0:n.call(e,a,t)},onDragExit:a=>{var n;return(n=e==null?void 0:e.onDragExit)==null?void 0:n.call(e,a,t)},onDragLeave:a=>{var n;return(n=e==null?void 0:e.onDragLeave)==null?void 0:n.call(e,a,t)},onDragOver:a=>{var n;return(n=e==null?void 0:e.onDragOver)==null?void 0:n.call(e,a,t)},onDragStart:a=>{var n;return(n=e==null?void 0:e.onDragStart)==null?void 0:n.call(e,a,t)},onMouseDown:a=>{var n;return(n=e==null?void 0:e.onMouseDown)==null?void 0:n.call(e,a,t)},onMouseEnter:a=>{var n;return(n=e==null?void 0:e.onMouseEnter)==null?void 0:n.call(e,a,t)},onMouseLeave:a=>{var n;return(n=e==null?void 0:e.onMouseLeave)==null?void 0:n.call(e,a,t)},onMouseMove:a=>{var n;return(n=e==null?void 0:e.onMouseMove)==null?void 0:n.call(e,a,t)},onMouseOut:a=>{var n;return(n=e==null?void 0:e.onMouseOut)==null?void 0:n.call(e,a,t)},onMouseOver:a=>{var n;return(n=e==null?void 0:e.onMouseOver)==null?void 0:n.call(e,a,t)},onBlur:a=>{var n;return(n=e==null?void 0:e.onBlur)==null?void 0:n.call(e,a,t)},onFocus:a=>{var n;return(n=e==null?void 0:e.onFocus)==null?void 0:n.call(e,a,t)},onMouseUp:a=>{var n;return(n=e==null?void 0:e.onMouseUp)==null?void 0:n.call(e,a,t)},children:p})};try{o.displayName="LinkFieldRender",o.__docgenInfo={description:"",displayName:"LinkFieldRender",props:{field:{defaultValue:null,description:"",name:"field",required:!0,type:{name:"LinkField"}}}}}catch{}class g extends v{render(){return r.jsx(o,{field:this})}}const d=t=>r.jsx(h,{buttons:null,fieldsProps:{field1:{...t,component:g}}}),y=d;try{d.displayName="LinkComponent",d.__docgenInfo={description:"DForm Link field",displayName:"LinkComponent",props:{href:{defaultValue:null,description:"Anchor url",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Anchor target",name:"target",required:!1,type:{name:"enum",value:[{value:'"_blank"'},{value:'"_self"'},{value:'"_parent"'},{value:'"_top"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragEnter:{defaultValue:null,description:"",name:"onDragEnter",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragExit:{defaultValue:null,description:"",name:"onDragExit",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragLeave:{defaultValue:null,description:"",name:"onDragLeave",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<Element, Element>, field: LinkField) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<Element, Element>, field: LinkField) => void)"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => LinkField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Field default value",name:"value",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: string, prevValue: string, field: LinkField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: LinkField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: LinkField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: string, error: string, isSubmit: boolean, field: LinkField) => void)"}}}}}catch{}try{linkComponent.displayName="linkComponent",linkComponent.__docgenInfo={description:"DForm Link field",displayName:"linkComponent",props:{href:{defaultValue:null,description:"Anchor url",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Anchor target",name:"target",required:!1,type:{name:"enum",value:[{value:'"_blank"'},{value:'"_self"'},{value:'"_parent"'},{value:'"_top"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragEnter:{defaultValue:null,description:"",name:"onDragEnter",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragExit:{defaultValue:null,description:"",name:"onDragExit",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragLeave:{defaultValue:null,description:"",name:"onDragLeave",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<Element, Element>, field: LinkField) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<Element, Element>, field: LinkField) => void)"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => LinkField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Field default value",name:"value",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: string, prevValue: string, field: LinkField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: LinkField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: LinkField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: string, error: string, isSubmit: boolean, field: LinkField) => void)"}}}}}catch{}const ue={title:"DForm/Fields/Link",component:y,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React from 'react';
                    import {DForm} from @krinopotam/ui-kit/dForm';
                    import {ILinkFieldProps, LinkField} from @krinopotam/ui-kit/dForm/fields/link/linkField';
                    type IComponent = ILinkFieldProps;
                    /** DForm Link field */
                    export const LinkComponent = (props: IComponent): React.JSX.Element => <DForm buttons={null} fieldsProps={{field1: {...props, component: LinkField}}} />;
                    export default LinkComponent;
                `}}}},l={args:{label:"Link field",href:"https://ya.ru",value:"Click me",target:"_blank"}};var u,s,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Link field',
    href: 'https://ya.ru',
    value: 'Click me',
    target: '_blank'
  }
}`,...(m=(s=l.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const se=["Playground"];export{l as Playground,se as __namedExportsOrder,ue as default};
