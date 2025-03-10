import{j as xe}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-iW-139IE.js";import{s as Re}from"./splitObject-C6hVKqbV.js";import{a as _}from"./isArray-Cl7xn3Rc.js";import{C as Te,u as Ee,h as Me,o as Pe,c as H,i as De,D as He}from"./compact-item-Cxv0YLF9.js";import{u as Fe,a as _e,D as Le,T as Be,m as Ae,O as je,b as ke}from"./useShowArrow-DKg9nTFS.js";import{b as We}from"./useToken-C9qwXZKU.js";import{g as ze}from"./DownOutlined-CSg1yAI9.js";import"./index-mQZ8i_rL.js";import"./index-H-U0Qhl4.js";import{u as Ke,F as Ue,a as $e}from"./context-u9dygr8g.js";import{g as Xe}from"./motion-HGHEQR47.js";import{u as Ge,g as Je,a as Ye}from"./useVariants-Cpy17TlJ.js";import{u as Ze}from"./useIcons-jH37no42.js";var Qe=function(e,a){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)a.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(l[t[n]]=e[t[n]]);return l};const L="SECRET_COMBOBOX_MODE_DO_NOT_USE",et=(e,a)=>{var l;const{prefixCls:t,bordered:n,className:o,rootClassName:i,getPopupContainer:B,popupClassName:A,dropdownClassName:j,listHeight:k=256,placement:y,listItemHeight:g,size:h,disabled:S,notFoundContent:N,status:W,builtinPlacements:z,dropdownMatchSelectWidth:K,popupMatchSelectWidth:V,direction:b,style:U,allowClear:x,variant:$,dropdownStyle:m,transitionName:X,tagRender:G,maxCount:J,prefix:Y}=e,R=Qe(e,["prefixCls","bordered","className","rootClassName","getPopupContainer","popupClassName","dropdownClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","direction","style","allowClear","variant","dropdownStyle","transitionName","tagRender","maxCount","prefix"]),{getPopupContainer:Z,getPrefixCls:T,renderEmpty:v,direction:Q,virtual:ee,popupMatchSelectWidth:te,popupOverflow:ne}=u.useContext(Te),C=Ee("select"),[,q]=We(),ae=g??(q==null?void 0:q.controlHeight),r=T("select",t),le=T(),s=b??Q,{compactSize:oe,compactItemClassnames:re}=Me(r,s),[ie,ue]=Ge("select",$,n),w=Ke(r),[se,E,M]=Fe(r,w),p=u.useMemo(()=>{const{mode:c}=e;if(c!=="combobox")return c===L?"combobox":c},[e.mode]),I=p==="multiple"||p==="tags",de=_e(e.suffixIcon,e.showArrow),ce=(l=V??K)!==null&&l!==void 0?l:te,{status:me,hasFeedback:P,isFormItemInput:pe,feedbackIcon:fe}=u.useContext(Ue),ye=Ye(me,W);let f;N!==void 0?f=N:p==="combobox"?f=null:f=(v==null?void 0:v("Select"))||u.createElement(Le,{componentName:"Select"});const{suffixIcon:ge,itemIcon:he,removeIcon:Se,clearIcon:Ve}=Ze(Object.assign(Object.assign({},R),{multiple:I,hasFeedback:P,feedbackIcon:fe,showSuffixIcon:de,prefixCls:r,componentName:"Select"})),be=x===!0?{clearIcon:Ve}:x,ve=Pe(R,["suffixIcon","itemIcon"]),Ce=H(A||j,{[`${r}-dropdown-${s}`]:s==="rtl"},i,M,w,E),D=De(c=>{var O;return(O=h??oe)!==null&&O!==void 0?O:c}),qe=u.useContext(He),we=S??qe,Ie=H({[`${r}-lg`]:D==="large",[`${r}-sm`]:D==="small",[`${r}-rtl`]:s==="rtl",[`${r}-${ie}`]:ue,[`${r}-in-form-item`]:pe},Je(r,ye,P),re,C.className,o,i,M,w,E),Oe=u.useMemo(()=>y!==void 0?y:s==="rtl"?"bottomRight":"bottomLeft",[y,s]),[Ne]=$e("SelectLike",m==null?void 0:m.zIndex);return se(u.createElement(Be,Object.assign({ref:a,virtual:ee,showSearch:C.showSearch},ve,{style:Object.assign(Object.assign({},C.style),U),dropdownMatchSelectWidth:ce,transitionName:Xe(le,"slide-up",X),builtinPlacements:Ae(z,ne),listHeight:k,listItemHeight:ae,mode:p,prefixCls:r,placement:Oe,direction:s,prefix:Y,suffixIcon:ge,menuItemSelectedIcon:he,removeIcon:Se,allowClear:be,notFoundContent:f,className:Ie,getPopupContainer:B||Z,dropdownClassName:Ce,disabled:we,dropdownStyle:Object.assign(Object.assign({},m),{zIndex:Ne}),maxCount:I?J:void 0,tagRender:I?G:void 0})))},d=u.forwardRef(et),tt=ze(d,"dropdownAlign");d.SECRET_COMBOBOX_MODE_DO_NOT_USE=L;d.Option=je;d.OptGroup=ke;d._InternalPanelDoNotUseOrYouWillBeFired=tt;const Vt=[{id:"01",label:"Аналитика"},{id:"02",label:"Продажи"},{id:"03",label:"Закупки"}],F=e=>{const a=lt(e),l=nt(e),t=at(e,e.value);return xe.jsx(d,{...a,options:l,value:t,disabled:e.disabled||e.readOnly,optionFilterProp:e.optionFilterProp??"label",showSearch:e.showSearch!==!1,onSelect:(n,o)=>{var i;return(i=e.onSelect)==null?void 0:i.call(e,n,o)},onDeselect:(n,o)=>{var i;return(i=e.onDeselect)==null?void 0:i.call(e,n,o)},onChange:(n,o)=>{var i;return(i=e.onChange)==null?void 0:i.call(e,n,o)},children:e.children})},nt=e=>u.useMemo(()=>{if(!e.dataSet)return;const a=l=>{const t=[];if(!(!l||!_(l))){for(const n of l){const o={...n};n.id&&(o.value=n.id),n.label&&(o.label=n.label),n.children&&(o.children=a(n.children)),t.push(o)}return t}};return a(e.dataSet)},[e.dataSet]),at=(e,a)=>u.useMemo(()=>{if(typeof a>"u")return;if(!_(a))return typeof a=="object"?{value:a.id??"0",label:a.label}:a;const l=[];for(const t of a)typeof t=="object"?l.push({value:t.id,label:t.label}):l.push(t);return l},[a]),lt=e=>u.useMemo(()=>Re(e,{dataSet:!0,value:!0,readOnly:!0,onSelect:!0,onDeselect:!0,onChange:!0})[1],[e]);try{F.displayName="Select",F.__docgenInfo={description:"",displayName:"Select",props:{dataSet:{defaultValue:null,description:"Select options list",name:"dataSet",required:!1,type:{name:"ISelectNode<Record<string, any>>[]"}},value:{defaultValue:null,description:"Selected values",name:"value",required:!1,type:{name:"ISelectValue | ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[]"}},readOnly:{defaultValue:null,description:"Read only state",name:"readOnly",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Fires when selection changed",name:"onChange",required:!1,type:{name:"((value: ISelectValue, option: ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[]) => void)"}},onSelect:{defaultValue:null,description:"Fires when item selected",name:"onSelect",required:!1,type:{name:"((value: ISelectValue, option: ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[]) => void)"}},onDeselect:{defaultValue:null,description:"Fires when item deselected",name:"onDeselect",required:!1,type:{name:"((value: ISelectValue, option: ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[]) => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},builtinPlacements:{defaultValue:null,description:"",name:"builtinPlacements",required:!1,type:{name:"BuildInPlacements"}},prefixCls:{defaultValue:null,description:"",name:"prefixCls",required:!1,type:{name:"string"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottomLeft"'},{value:'"bottomRight"'},{value:'"topLeft"'},{value:'"topRight"'}]}},transitionName:{defaultValue:null,description:"",name:"transitionName",required:!1,type:{name:"string"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"string"}},showArrow:{defaultValue:null,description:"@deprecated `showArrow` is deprecated which will be removed in next major version. It will be a\ndefault behavior, you can hide it by setting `suffixIcon` to null.",name:"showArrow",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"ReactNode"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"unknown"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},allowClear:{defaultValue:null,description:"",name:"allowClear",required:!1,type:{name:"boolean | { clearIcon?: RenderNode; }"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"warning"'},{value:'"error"'}]}},variant:{defaultValue:{value:'"outlined"'},description:"@since 5.13.0",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"borderless"'},{value:'"filled"'},{value:'"underlined"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},rootClassName:{defaultValue:null,description:"",name:"rootClassName",required:!1,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"multiple"'},{value:'"tags"'}]}},searchValue:{defaultValue:null,description:"",name:"searchValue",required:!1,type:{name:"string"}},autoClearSearchValue:{defaultValue:null,description:"",name:"autoClearSearchValue",required:!1,type:{name:"boolean"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!1,type:{name:"((value: string) => void)"}},showSearch:{defaultValue:null,description:"",name:"showSearch",required:!1,type:{name:"boolean"}},tagRender:{defaultValue:null,description:"",name:"tagRender",required:!1,type:{name:"((props: CustomTagProps) => ReactElement<unknown, string | JSXElementConstructor<any>>)"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"ltr"'},{value:'"rtl"'}]}},notFoundContent:{defaultValue:null,description:"",name:"notFoundContent",required:!1,type:{name:"ReactNode"}},choiceTransitionName:{defaultValue:null,description:"",name:"choiceTransitionName",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},onDropdownVisibleChange:{defaultValue:null,description:"",name:"onDropdownVisibleChange",required:!1,type:{name:"((open: boolean) => void)"}},maxTagTextLength:{defaultValue:null,description:"",name:"maxTagTextLength",required:!1,type:{name:"number"}},maxTagCount:{defaultValue:null,description:"",name:"maxTagCount",required:!1,type:{name:'number | "responsive"'}},maxTagPlaceholder:{defaultValue:null,description:"",name:"maxTagPlaceholder",required:!1,type:{name:"ReactNode | ((omittedValues: DisplayValueType[]) => ReactNode)"}},tokenSeparators:{defaultValue:null,description:"",name:"tokenSeparators",required:!1,type:{name:"string[]"}},suffixIcon:{defaultValue:null,description:"",name:"suffixIcon",required:!1,type:{name:"ReactNode"}},clearIcon:{defaultValue:null,description:"Clear all icon\n@deprecated Please use `allowClear` instead",name:"clearIcon",required:!1,type:{name:"RenderNode"}},removeIcon:{defaultValue:null,description:"Selector remove icon",name:"removeIcon",required:!1,type:{name:"RenderNode"}},dropdownStyle:{defaultValue:null,description:"",name:"dropdownStyle",required:!1,type:{name:"CSSProperties"}},dropdownClassName:{defaultValue:null,description:"@deprecated Please use `popupClassName` instead",name:"dropdownClassName",required:!1,type:{name:"string"}},dropdownMatchSelectWidth:{defaultValue:null,description:"@deprecated Please use `popupMatchSelectWidth` instead",name:"dropdownMatchSelectWidth",required:!1,type:{name:"number | boolean"}},dropdownRender:{defaultValue:null,description:"",name:"dropdownRender",required:!1,type:{name:"((menu: ReactElement<unknown, string | JSXElementConstructor<any>>) => ReactElement<unknown, string | JSXElementConstructor<any>>)"}},dropdownAlign:{defaultValue:null,description:"",name:"dropdownAlign",required:!1,type:{name:"AlignType"}},getPopupContainer:{defaultValue:null,description:"",name:"getPopupContainer",required:!1,type:{name:"RenderDOMFunc"}},showAction:{defaultValue:null,description:"",name:"showAction",required:!1,type:{name:'("focus" | "click")[]'}},onPopupScroll:{defaultValue:null,description:"",name:"onPopupScroll",required:!1,type:{name:"UIEventHandler<HTMLDivElement>"}},onInputKeyDown:{defaultValue:null,description:"",name:"onInputKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>"}},fieldNames:{defaultValue:null,description:"",name:"fieldNames",required:!1,type:{name:"FieldNames"}},inputValue:{defaultValue:null,description:"@deprecated Use `searchValue` instead",name:"inputValue",required:!1,type:{name:"string"}},filterOption:{defaultValue:null,description:"In Select, `false` means do nothing.\nIn TreeSelect, `false` will highlight match item.\nIt's by design.",name:"filterOption",required:!1,type:{name:"boolean | FilterFunc<BaseOptionType | DefaultOptionType>"}},filterSort:{defaultValue:null,description:"",name:"filterSort",required:!1,type:{name:"((optionA: BaseOptionType | DefaultOptionType, optionB: BaseOptionType | DefaultOptionType, info: { ...; }) => number)"}},optionFilterProp:{defaultValue:null,description:"",name:"optionFilterProp",required:!1,type:{name:"string"}},optionLabelProp:{defaultValue:null,description:"",name:"optionLabelProp",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"(BaseOptionType | DefaultOptionType)[]"}},optionRender:{defaultValue:null,description:"",name:"optionRender",required:!1,type:{name:"((oriOption: FlattenOptionData<BaseOptionType | DefaultOptionType>, info: { index: number; }) => ReactNode)"}},defaultActiveFirstOption:{defaultValue:null,description:"",name:"defaultActiveFirstOption",required:!1,type:{name:"boolean"}},virtual:{defaultValue:null,description:"",name:"virtual",required:!1,type:{name:"boolean"}},listHeight:{defaultValue:null,description:"",name:"listHeight",required:!1,type:{name:"number"}},listItemHeight:{defaultValue:null,description:"",name:"listItemHeight",required:!1,type:{name:"number"}},labelRender:{defaultValue:null,description:"",name:"labelRender",required:!1,type:{name:"((props: LabelInValueType) => ReactNode)"}},menuItemSelectedIcon:{defaultValue:null,description:"",name:"menuItemSelectedIcon",required:!1,type:{name:"RenderNode"}},labelInValue:{defaultValue:null,description:"",name:"labelInValue",required:!1,type:{name:"boolean"}},maxCount:{defaultValue:null,description:"",name:"maxCount",required:!1,type:{name:"number"}},bordered:{defaultValue:null,description:"@deprecated Use `variant` instead.",name:"bordered",required:!1,type:{name:"boolean"}},popupClassName:{defaultValue:null,description:"",name:"popupClassName",required:!1,type:{name:"string"}},popupMatchSelectWidth:{defaultValue:null,description:"",name:"popupMatchSelectWidth",required:!1,type:{name:"number | boolean"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"Ref<BaseSelectRef>"}}}}}catch{}export{F as S,Vt as a};
