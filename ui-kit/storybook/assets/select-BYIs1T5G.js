import{j as Ne}from"./extends-BRD_ACZV.js";import{r as u}from"./index-uubelm5h.js";import{s as xe}from"./splitObject-C6hVKqbV.js";import{a as _}from"./isArray-Cl7xn3Rc.js";import{C as Te,u as Ee,o as Me,c as H,h as Pe,D as Re}from"./compact-item-Cq9_oKvy.js";import{O as De,a as He,u as Fe,b as _e,D as Le,T as Be,m as je}from"./useShowArrow-C0vaSVDp.js";import{a as Ae}from"./useToken-DcxMJEAm.js";import{g as We}from"./DownOutlined-DgGpJDSU.js";import"./index-DaxZXI7c.js";import"./index-jGjHQRy5.js";import{u as ke,F as ze,a as Ke}from"./context-Dw4q7UZT.js";import{g as Ue}from"./motion-DInqWZju.js";import{u as $e,g as Xe,a as Ge}from"./useVariants-BWqEf-UO.js";import{u as Je}from"./useIcons-C_kJjDLC.js";var Ye=function(e,a){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)a.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(l[t[n]]=e[t[n]]);return l};const L="SECRET_COMBOBOX_MODE_DO_NOT_USE",Ze=(e,a)=>{var l;const{prefixCls:t,bordered:n,className:o,rootClassName:i,getPopupContainer:B,popupClassName:j,dropdownClassName:A,listHeight:W=256,placement:g,listItemHeight:h,size:S,disabled:v,notFoundContent:N,status:k,builtinPlacements:z,dropdownMatchSelectWidth:K,popupMatchSelectWidth:V,direction:b,style:U,allowClear:x,variant:$,dropdownStyle:p,transitionName:X,tagRender:G,maxCount:J}=e,T=Ye(e,["prefixCls","bordered","className","rootClassName","getPopupContainer","popupClassName","dropdownClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","direction","style","allowClear","variant","dropdownStyle","transitionName","tagRender","maxCount"]),{getPopupContainer:Y,getPrefixCls:E,renderEmpty:C,direction:Z,virtual:Q,popupMatchSelectWidth:ee,popupOverflow:te,select:s}=u.useContext(Te),[,q]=Ae(),ne=h??(q==null?void 0:q.controlHeight),r=E("select",t),ae=E(),d=b??Z,{compactSize:le,compactItemClassnames:oe}=Ee(r,d),[re,ie]=$e("select",$,n),w=ke(r),[ue,M,P]=Fe(r,w),f=u.useMemo(()=>{const{mode:m}=e;if(m!=="combobox")return m===L?"combobox":m},[e.mode]),I=f==="multiple"||f==="tags",se=_e(e.suffixIcon,e.showArrow),de=(l=V??K)!==null&&l!==void 0?l:ee,{status:ce,hasFeedback:R,isFormItemInput:me,feedbackIcon:pe}=u.useContext(ze),fe=Ge(ce,k);let y;N!==void 0?y=N:f==="combobox"?y=null:y=(C==null?void 0:C("Select"))||u.createElement(Le,{componentName:"Select"});const{suffixIcon:ye,itemIcon:ge,removeIcon:he,clearIcon:Se}=Je(Object.assign(Object.assign({},T),{multiple:I,hasFeedback:R,feedbackIcon:pe,showSuffixIcon:se,prefixCls:r,componentName:"Select"})),ve=x===!0?{clearIcon:Se}:x,Ve=Me(T,["suffixIcon","itemIcon"]),be=H(j||A,{[`${r}-dropdown-${d}`]:d==="rtl"},i,P,w,M),D=Pe(m=>{var O;return(O=S??le)!==null&&O!==void 0?O:m}),Ce=u.useContext(Re),qe=v??Ce,we=H({[`${r}-lg`]:D==="large",[`${r}-sm`]:D==="small",[`${r}-rtl`]:d==="rtl",[`${r}-${re}`]:ie,[`${r}-in-form-item`]:me},Xe(r,fe,R),oe,s==null?void 0:s.className,o,i,P,w,M),Ie=u.useMemo(()=>g!==void 0?g:d==="rtl"?"bottomRight":"bottomLeft",[g,d]),[Oe]=Ke("SelectLike",p==null?void 0:p.zIndex);return ue(u.createElement(Be,Object.assign({ref:a,virtual:Q,showSearch:s==null?void 0:s.showSearch},Ve,{style:Object.assign(Object.assign({},s==null?void 0:s.style),U),dropdownMatchSelectWidth:de,transitionName:Ue(ae,"slide-up",X),builtinPlacements:je(z,te),listHeight:W,listItemHeight:ne,mode:f,prefixCls:r,placement:Ie,direction:d,suffixIcon:ye,menuItemSelectedIcon:ge,removeIcon:he,allowClear:ve,notFoundContent:y,className:we,getPopupContainer:B||Y,dropdownClassName:be,disabled:qe,dropdownStyle:Object.assign(Object.assign({},p),{zIndex:Oe}),maxCount:I?J:void 0,tagRender:I?G:void 0})))},c=u.forwardRef(Ze),Qe=We(c);c.SECRET_COMBOBOX_MODE_DO_NOT_USE=L;c.Option=De;c.OptGroup=He;c._InternalPanelDoNotUseOrYouWillBeFired=Qe;const ht=[{id:"01",label:"Аналитика"},{id:"02",label:"Продажи"},{id:"03",label:"Закупки"}],F=e=>{const a=nt(e),l=et(e),t=tt(e,e.value);return Ne.jsx(c,{...a,options:l,value:t,disabled:e.disabled||e.readOnly,optionFilterProp:e.optionFilterProp??"label",showSearch:e.showSearch!==!1,onSelect:(n,o)=>{var i;return(i=e.onSelect)==null?void 0:i.call(e,n,o)},onDeselect:(n,o)=>{var i;return(i=e.onDeselect)==null?void 0:i.call(e,n,o)},onChange:(n,o)=>{var i;return(i=e.onChange)==null?void 0:i.call(e,n,o)},children:e.children})},et=e=>u.useMemo(()=>{if(!e.dataSet)return;const a=l=>{const t=[];if(!(!l||!_(l))){for(const n of l){const o={...n};n.id&&(o.value=n.id),n.label&&(o.label=n.label),n.children&&(o.children=a(n.children)),t.push(o)}return t}};return a(e.dataSet)},[e.dataSet]),tt=(e,a)=>u.useMemo(()=>{if(typeof a>"u")return;if(!_(a))return typeof a=="object"?{value:a.id,label:a.label}:a;const l=[];for(const t of a)typeof t=="object"?l.push({value:t.id,label:t.label}):l.push(t);return l},[a]),nt=e=>u.useMemo(()=>xe(e,{dataSet:!0,value:!0,readOnly:!0,onSelect:!0,onDeselect:!0,onChange:!0})[1],[e]);try{F.displayName="Select",F.__docgenInfo={description:"",displayName:"Select",props:{dataSet:{defaultValue:null,description:"Select options list",name:"dataSet",required:!1,type:{name:"ISelectNode<Record<string, any>>[]"}},value:{defaultValue:null,description:"Selected values",name:"value",required:!1,type:{name:"ISelectValue"}},readOnly:{defaultValue:null,description:"Read only state",name:"readOnly",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Fires when selection changed",name:"onChange",required:!1,type:{name:"((value: ISelectValue, option: ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[]) => void)"}},onSelect:{defaultValue:null,description:"Fires when item selected",name:"onSelect",required:!1,type:{name:"((value: ISelectValue, option: ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[]) => void)"}},onDeselect:{defaultValue:null,description:"Fires when item deselected",name:"onDeselect",required:!1,type:{name:"((value: ISelectValue, option: ISelectNode<Record<string, any>> | ISelectNode<Record<string, any>>[]) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},transitionName:{defaultValue:null,description:"",name:"transitionName",required:!1,type:{name:"string"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"string"}},prefixCls:{defaultValue:null,description:"",name:"prefixCls",required:!1,type:{name:"string"}},rootClassName:{defaultValue:null,description:"",name:"rootClassName",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"ltr"'},{value:'"rtl"'}]}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},builtinPlacements:{defaultValue:null,description:"",name:"builtinPlacements",required:!1,type:{name:"BuildInPlacements"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottomLeft"'},{value:'"bottomRight"'},{value:'"topLeft"'},{value:'"topRight"'}]}},showArrow:{defaultValue:null,description:"@deprecated `showArrow` is deprecated which will be removed in next major version. It will be a\ndefault behavior, you can hide it by setting `suffixIcon` to null.",name:"showArrow",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"multiple"'},{value:'"tags"'}]}},searchValue:{defaultValue:null,description:"",name:"searchValue",required:!1,type:{name:"string"}},autoClearSearchValue:{defaultValue:null,description:"",name:"autoClearSearchValue",required:!1,type:{name:"boolean"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!1,type:{name:"((value: string) => void)"}},showSearch:{defaultValue:null,description:"",name:"showSearch",required:!1,type:{name:"boolean"}},tagRender:{defaultValue:null,description:"",name:"tagRender",required:!1,type:{name:"((props: CustomTagProps) => ReactElement<any, string | JSXElementConstructor<any>>)"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},notFoundContent:{defaultValue:null,description:"",name:"notFoundContent",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"ReactNode"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},choiceTransitionName:{defaultValue:null,description:"",name:"choiceTransitionName",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},onDropdownVisibleChange:{defaultValue:null,description:"",name:"onDropdownVisibleChange",required:!1,type:{name:"((open: boolean) => void)"}},maxTagTextLength:{defaultValue:null,description:"",name:"maxTagTextLength",required:!1,type:{name:"number"}},maxTagCount:{defaultValue:null,description:"",name:"maxTagCount",required:!1,type:{name:'number | "responsive"'}},maxTagPlaceholder:{defaultValue:null,description:"",name:"maxTagPlaceholder",required:!1,type:{name:"ReactNode | ((omittedValues: DisplayValueType[]) => ReactNode)"}},tokenSeparators:{defaultValue:null,description:"",name:"tokenSeparators",required:!1,type:{name:"string[]"}},allowClear:{defaultValue:null,description:"",name:"allowClear",required:!1,type:{name:"boolean | { clearIcon?: RenderNode; }"}},suffixIcon:{defaultValue:null,description:"",name:"suffixIcon",required:!1,type:{name:"ReactNode"}},clearIcon:{defaultValue:null,description:"Clear all icon\n@deprecated Please use `allowClear` instead",name:"clearIcon",required:!1,type:{name:"RenderNode"}},removeIcon:{defaultValue:null,description:"Selector remove icon",name:"removeIcon",required:!1,type:{name:"RenderNode"}},dropdownStyle:{defaultValue:null,description:"",name:"dropdownStyle",required:!1,type:{name:"CSSProperties"}},dropdownClassName:{defaultValue:null,description:"@deprecated Please use `popupClassName` instead",name:"dropdownClassName",required:!1,type:{name:"string"}},dropdownMatchSelectWidth:{defaultValue:null,description:"@deprecated Please use `popupMatchSelectWidth` instead",name:"dropdownMatchSelectWidth",required:!1,type:{name:"number | boolean"}},dropdownRender:{defaultValue:null,description:"",name:"dropdownRender",required:!1,type:{name:"((menu: ReactElement<any, string | JSXElementConstructor<any>>) => ReactElement<any, string | JSXElementConstructor<any>>)"}},dropdownAlign:{defaultValue:null,description:"",name:"dropdownAlign",required:!1,type:{name:"AlignType"}},getPopupContainer:{defaultValue:null,description:"",name:"getPopupContainer",required:!1,type:{name:"RenderDOMFunc"}},showAction:{defaultValue:null,description:"",name:"showAction",required:!1,type:{name:'("focus" | "click")[]'}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onPopupScroll:{defaultValue:null,description:"",name:"onPopupScroll",required:!1,type:{name:"UIEventHandler<HTMLDivElement>"}},onInputKeyDown:{defaultValue:null,description:"",name:"onInputKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},fieldNames:{defaultValue:null,description:"",name:"fieldNames",required:!1,type:{name:"FieldNames"}},inputValue:{defaultValue:null,description:"@deprecated Use `searchValue` instead",name:"inputValue",required:!1,type:{name:"string"}},filterOption:{defaultValue:null,description:"In Select, `false` means do nothing.\nIn TreeSelect, `false` will highlight match item.\nIt's by design.",name:"filterOption",required:!1,type:{name:"boolean | FilterFunc<BaseOptionType | DefaultOptionType>"}},filterSort:{defaultValue:null,description:"",name:"filterSort",required:!1,type:{name:"((optionA: BaseOptionType | DefaultOptionType, optionB: BaseOptionType | DefaultOptionType, info: { ...; }) => number)"}},optionFilterProp:{defaultValue:null,description:"",name:"optionFilterProp",required:!1,type:{name:"string"}},optionLabelProp:{defaultValue:null,description:"",name:"optionLabelProp",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"(BaseOptionType | DefaultOptionType)[]"}},optionRender:{defaultValue:null,description:"",name:"optionRender",required:!1,type:{name:"((oriOption: FlattenOptionData<BaseOptionType | DefaultOptionType>, info: { index: number; }) => ReactNode)"}},defaultActiveFirstOption:{defaultValue:null,description:"",name:"defaultActiveFirstOption",required:!1,type:{name:"boolean"}},virtual:{defaultValue:null,description:"",name:"virtual",required:!1,type:{name:"boolean"}},listHeight:{defaultValue:null,description:"",name:"listHeight",required:!1,type:{name:"number"}},listItemHeight:{defaultValue:null,description:"",name:"listItemHeight",required:!1,type:{name:"number"}},labelRender:{defaultValue:null,description:"",name:"labelRender",required:!1,type:{name:"((props: LabelInValueType) => ReactNode)"}},menuItemSelectedIcon:{defaultValue:null,description:"",name:"menuItemSelectedIcon",required:!1,type:{name:"RenderNode"}},labelInValue:{defaultValue:null,description:"",name:"labelInValue",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"unknown"}},maxCount:{defaultValue:null,description:"",name:"maxCount",required:!1,type:{name:"number"}},bordered:{defaultValue:null,description:"@deprecated Use `variant` instead.",name:"bordered",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:'"outlined"'},description:"@since 5.13.0",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"borderless"'},{value:'"filled"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"warning"'},{value:'"error"'}]}},popupClassName:{defaultValue:null,description:"",name:"popupClassName",required:!1,type:{name:"string"}},popupMatchSelectWidth:{defaultValue:null,description:"",name:"popupMatchSelectWidth",required:!1,type:{name:"number | boolean"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<BaseSelectRef>"}}}}}catch{}export{F as S,ht as a};
