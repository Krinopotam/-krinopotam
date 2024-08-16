import{j as r}from"./extends-CKwpSh1k.js";import{B as h,D as y}from"./dForm-Bv2L02vf.js";import"./index-DGqZ_Opy.js";import"./dayjs.min-BljPK31Q.js";import{r as i}from"./index-CTjT7uj6.js";import"./helpersObjects-NFjaQN06.js";import"./index-Boe84S0F.js";import"./index-DKKcxpSc.js";import"./compact-item-B2r7eKHn.js";import"./useToken-DuQNFAH6.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./index-56GSrRrr.js";import"./motion-D1Ok7SUs.js";import"./context-zxaTOXwp.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./useVariants-bMUIY1dl.js";import"./index-BzgAe6ki.js";import"./motion-4S5rSXvC.js";import"./row-Bz4KYDPc.js";import"./roundedArrow-CdZeBiH2.js";import"./zoom-DgLa7ZOz.js";import"./colors-DKxxPweQ.js";import"./QuestionCircleOutlined-DItjCDaI.js";import"./ExclamationCircleFilled-BijZsmvo.js";import"./updateModalTheme-nn0WQEFL.js";import"./modalRender-C0UNESu4.js";import"./index-C1vctpir.js";import"./InfoCircleOutlined-B2Jjl6_Y.js";import"./button-cAudtZ5H.js";import"./button-dqH3xn1c.js";import"./buttonsRow-UYP48lyS.js";import"./Sider-C8lbNVsG.js";import"./KeyCode-DNlgD2sM.js";import"./DownOutlined-dRo7eB-m.js";import"./helpersString-BLksZHLM.js";import"./v4-CQkTLCs1.js";import"./index-BRV0Se7Z.js";import"./index-DrMe33ah.js";import"./CloseOutlined-RkEA9oNw.js";import"./useClosable-DReJefU5.js";import"./index-4vYY965U.js";import"./CheckOutlined-ChgTJtAc.js";import"./useIsDebugMode-B-VM_G4X.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const o=({field:t})=>{i.useSyncExternalStore(t.subscribe.bind(t),t.getSnapshot.bind(t));const e=t.getProps(),f=t.getValue(),c=i.useCallback(a=>{var n;t.setTouched(!0),(n=e==null?void 0:e.onClick)==null||n.call(e,a,t)},[t,e]);i.useEffect(()=>{t.setReady(!0)},[t]);let u={};e.width&&(u={width:e.width});const v={...u,...e.style};return r.jsx("a",{href:e.href,target:e.target,style:v,onClick:a=>c(a),onContextMenu:a=>{var n;return(n=e==null?void 0:e.onContextMenu)==null?void 0:n.call(e,a,t)},onDoubleClick:a=>{var n;return(n=e==null?void 0:e.onDoubleClick)==null?void 0:n.call(e,a,t)},onDrag:a=>{var n;return(n=e==null?void 0:e.onDrag)==null?void 0:n.call(e,a,t)},onDragEnd:a=>{var n;return(n=e==null?void 0:e.onDragEnd)==null?void 0:n.call(e,a,t)},onDragEnter:a=>{var n;return(n=e==null?void 0:e.onDragEnter)==null?void 0:n.call(e,a,t)},onDragExit:a=>{var n;return(n=e==null?void 0:e.onDragExit)==null?void 0:n.call(e,a,t)},onDragLeave:a=>{var n;return(n=e==null?void 0:e.onDragLeave)==null?void 0:n.call(e,a,t)},onDragOver:a=>{var n;return(n=e==null?void 0:e.onDragOver)==null?void 0:n.call(e,a,t)},onDragStart:a=>{var n;return(n=e==null?void 0:e.onDragStart)==null?void 0:n.call(e,a,t)},onMouseDown:a=>{var n;return(n=e==null?void 0:e.onMouseDown)==null?void 0:n.call(e,a,t)},onMouseEnter:a=>{var n;return(n=e==null?void 0:e.onMouseEnter)==null?void 0:n.call(e,a,t)},onMouseLeave:a=>{var n;return(n=e==null?void 0:e.onMouseLeave)==null?void 0:n.call(e,a,t)},onMouseMove:a=>{var n;return(n=e==null?void 0:e.onMouseMove)==null?void 0:n.call(e,a,t)},onMouseOut:a=>{var n;return(n=e==null?void 0:e.onMouseOut)==null?void 0:n.call(e,a,t)},onMouseOver:a=>{var n;return(n=e==null?void 0:e.onMouseOver)==null?void 0:n.call(e,a,t)},onMouseUp:a=>{var n;return(n=e==null?void 0:e.onMouseUp)==null?void 0:n.call(e,a,t)},children:f})};try{o.displayName="LinkFieldRender",o.__docgenInfo={description:"",displayName:"LinkFieldRender",props:{field:{defaultValue:null,description:"",name:"field",required:!0,type:{name:"LinkField"}}}}}catch{}class g extends h{render(){return r.jsx(o,{field:this})}}const d=t=>r.jsx(y,{buttons:null,fieldsProps:{field1:{...t,component:g}}}),E=d;try{d.displayName="LinkComponent",d.__docgenInfo={description:"DForm Link field",displayName:"LinkComponent",props:{href:{defaultValue:null,description:"Anchor url",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Anchor target",name:"target",required:!1,type:{name:"enum",value:[{value:'"_blank"'},{value:'"_self"'},{value:'"_parent"'},{value:'"_top"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragEnter:{defaultValue:null,description:"",name:"onDragEnter",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragExit:{defaultValue:null,description:"",name:"onDragExit",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragLeave:{defaultValue:null,description:"",name:"onDragLeave",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => LinkField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Field default value",name:"value",required:!1,type:{name:"any"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: unknown, prevValue: unknown, field: LinkField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: LinkField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: LinkField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: unknown, error: string, isSubmit: boolean, field: LinkField) => void)"}}}}}catch{}try{linkComponent.displayName="linkComponent",linkComponent.__docgenInfo={description:"DForm Link field",displayName:"linkComponent",props:{href:{defaultValue:null,description:"Anchor url",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Anchor target",name:"target",required:!1,type:{name:"enum",value:[{value:'"_blank"'},{value:'"_self"'},{value:'"_parent"'},{value:'"_top"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragEnter:{defaultValue:null,description:"",name:"onDragEnter",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragExit:{defaultValue:null,description:"",name:"onDragExit",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragLeave:{defaultValue:null,description:"",name:"onDragLeave",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"((event: DragEvent<Element>, field: LinkField) => void)"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, field: LinkField) => void)"}},component:{defaultValue:null,description:"Field React component",name:"component",required:!0,type:{name:"new (fieldName: string, fieldProps: any, model: DModel, parent?: IBaseField | undefined) => LinkField"}},helpClass:{defaultValue:null,description:"Help class",name:"helpClass",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"Field placeholder",name:"placeholder",required:!1,type:{name:"string"}},inlineGroup:{defaultValue:null,description:"inline group name",name:"inlineGroup",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Field default value",name:"value",required:!1,type:{name:"any"}},hidden:{defaultValue:null,description:"Whether the field default state is hidden",name:"hidden",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the field default state is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Whether the field default state is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},nonEditable:{defaultValue:null,description:"Whether the field can not be edited (the field will have readOnly state if formMode is 'update')",name:"nonEditable",required:!1,type:{name:"boolean"}},dependsOn:{defaultValue:null,description:"List of fields that must be filled in order to display this field",name:"dependsOn",required:!1,type:{name:"string[]"}},width:{defaultValue:null,description:"Field width",name:"width",required:!1,type:{name:"string | number"}},autoHeightResize:{defaultValue:null,description:"Field container height auto resize",name:"autoHeightResize",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Get focus by default",name:"autoFocus",required:!1,type:{name:"boolean"}},requiredMark:{defaultValue:null,description:"Mark Field Label as Required",name:"requiredMark",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Config tooltip info",name:"tooltip",required:!1,type:{name:"LabelTooltipType"}},style:{defaultValue:null,description:"Field CSS style",name:"style",required:!1,type:{name:"CSSProperties"}},rowStyle:{defaultValue:null,description:"Row field container CSS style",name:"rowStyle",required:!1,type:{name:"CSSProperties"}},rules:{defaultValue:null,description:"Field validation rules",name:"rules",required:!1,type:{name:"IRuleType[]"}},onValueChanged:{defaultValue:null,description:"fires when the value of a field changed",name:"onValueChanged",required:!1,type:{name:"((value: unknown, prevValue: unknown, field: LinkField) => void)"}},onTouchedStateChanged:{defaultValue:null,description:"fires when the touched state of a field changed",name:"onTouchedStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onDirtyStateChanged:{defaultValue:null,description:"fires when the dirty state of a field changed",name:"onDirtyStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onErrorChanged:{defaultValue:null,description:"fires when the error of a field changed",name:"onErrorChanged",required:!1,type:{name:"((error: string, field: LinkField) => void)"}},onHiddenStateChanged:{defaultValue:null,description:"fires when the hidden state of a field changed",name:"onHiddenStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onReadOnlyStateChanged:{defaultValue:null,description:"fires when read only state of a field changed",name:"onReadOnlyStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onLabelChanged:{defaultValue:null,description:"fires when label of a field changed",name:"onLabelChanged",required:!1,type:{name:"((label: ReactNode, prevLabel: ReactNode, field: LinkField) => void)"}},onDisabledStateChanged:{defaultValue:null,description:"fires when the disable state of a field changes",name:"onDisabledStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onReadyStateChanged:{defaultValue:null,description:"fires when a field is completely initialized, its data is loaded",name:"onReadyStateChanged",required:!1,type:{name:"((state: boolean, field: LinkField) => void)"}},onValidated:{defaultValue:null,description:"fires when a field validated",name:"onValidated",required:!1,type:{name:"((value: unknown, error: string, isSubmit: boolean, field: LinkField) => void)"}}}}}catch{}const se={title:"DForm/Fields/Link",component:E,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React from 'react';
                    import {DForm} from @krinopotam/ui-kit/dForm';
                    import {ILinkFieldProps, LinkField} from @krinopotam/ui-kit/dForm/fields/link/linkField';
                    type IComponent = ILinkFieldProps;
                    /** DForm Link field */
                    export const LinkComponent = (props: IComponent): React.JSX.Element => <DForm buttons={null} fieldsProps={{field1: {...props, component: LinkField}}} />;
                    export default LinkComponent;
                `}}}},l={args:{label:"Link field",href:"https://ya.ru",value:"Click me",target:"_blank"}};var s,m,p;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Link field',
    href: 'https://ya.ru',
    value: 'Click me',
    target: '_blank'
  }
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const me=["Playground"];export{l as Playground,me as __namedExportsOrder,se as default};
