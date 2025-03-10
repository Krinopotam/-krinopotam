import{r as e,k as t,x as o,H as l,ab as a,a1 as s,aF as n,B as r,c as i,y as c,ax as d,a4 as u,bs as m,j as p}from"./index-CQvKQJ1H.js";import{B as b}from"./baseField-gHIWNuTG.js";import{s as f}from"./dFormModal-B_Bp8jqf.js";import{a as h}from"./isArray-1gBtd_za.js";import{u as C,a as S,D as g,T as O,m as x,O as v,b as w}from"./useShowArrow-CdF4eu_d.js";import{j as y}from"./buttonsRow-Tlbvi7M1.js";import{c as I,d as j,e as N}from"./index-RaL56j3R.js";import{u as M}from"./useIcons-DXScDn8f.js";const P="SECRET_COMBOBOX_MODE_DO_NOT_USE",E=(p,b)=>{var f;const{prefixCls:h,bordered:v,className:w,rootClassName:y,getPopupContainer:E,popupClassName:F,dropdownClassName:D,listHeight:R=256,placement:_,listItemHeight:k,size:B,disabled:H,notFoundContent:W,status:$,builtinPlacements:T,dropdownMatchSelectWidth:z,popupMatchSelectWidth:V,direction:A,style:U,allowClear:L,variant:X,dropdownStyle:G,transitionName:J,tagRender:Y,maxCount:q,prefix:K}=p,Q=function(e,t){var o={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(o[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(o[l[a]]=e[l[a]])}return o}(p,["prefixCls","bordered","className","rootClassName","getPopupContainer","popupClassName","dropdownClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","direction","style","allowClear","variant","dropdownStyle","transitionName","tagRender","maxCount","prefix"]),{getPopupContainer:Z,getPrefixCls:ee,renderEmpty:te,direction:oe,virtual:le,popupMatchSelectWidth:ae,popupOverflow:se}=e.useContext(t),ne=o("select"),[,re]=l(),ie=null!=k?k:null==re?void 0:re.controlHeight,ce=ee("select",h),de=ee(),ue=null!=A?A:oe,{compactSize:me,compactItemClassnames:pe}=a(ce,ue),[be,fe]=I("select",X,v),he=s(ce),[Ce,Se,ge]=C(ce,he),Oe=e.useMemo((()=>{const{mode:e}=p;if("combobox"!==e)return e===P?"combobox":e}),[p.mode]),xe="multiple"===Oe||"tags"===Oe,ve=S(p.suffixIcon,p.showArrow),we=null!==(f=null!=V?V:z)&&void 0!==f?f:ae,{status:ye,hasFeedback:Ie,isFormItemInput:je,feedbackIcon:Ne}=e.useContext(n),Me=N(ye,$);let Pe;Pe=void 0!==W?W:"combobox"===Oe?null:(null==te?void 0:te("Select"))||e.createElement(g,{componentName:"Select"});const{suffixIcon:Ee,itemIcon:Fe,removeIcon:De,clearIcon:Re}=M(Object.assign(Object.assign({},Q),{multiple:xe,hasFeedback:Ie,feedbackIcon:Ne,showSuffixIcon:ve,prefixCls:ce,componentName:"Select"})),_e=!0===L?{clearIcon:Re}:L,ke=r(Q,["suffixIcon","itemIcon"]),Be=i(F||D,{[`${ce}-dropdown-${ue}`]:"rtl"===ue},y,ge,he,Se),He=c((e=>{var t;return null!==(t=null!=B?B:me)&&void 0!==t?t:e})),We=e.useContext(d),$e=null!=H?H:We,Te=i({[`${ce}-lg`]:"large"===He,[`${ce}-sm`]:"small"===He,[`${ce}-rtl`]:"rtl"===ue,[`${ce}-${be}`]:fe,[`${ce}-in-form-item`]:je},j(ce,Me,Ie),pe,ne.className,w,y,ge,he,Se),ze=e.useMemo((()=>void 0!==_?_:"rtl"===ue?"bottomRight":"bottomLeft"),[_,ue]),[Ve]=u("SelectLike",null==G?void 0:G.zIndex);return Ce(e.createElement(O,Object.assign({ref:b,virtual:le,showSearch:ne.showSearch},ke,{style:Object.assign(Object.assign({},ne.style),U),dropdownMatchSelectWidth:we,transitionName:m(de,"slide-up",J),builtinPlacements:x(T,se),listHeight:R,listItemHeight:ie,mode:Oe,prefixCls:ce,placement:ze,direction:ue,prefix:K,suffixIcon:Ee,menuItemSelectedIcon:Fe,removeIcon:De,allowClear:_e,notFoundContent:Pe,className:Te,getPopupContainer:E||Z,dropdownClassName:Be,disabled:$e,dropdownStyle:Object.assign(Object.assign({},G),{zIndex:Ve}),maxCount:xe?q:void 0,tagRender:xe?Y:void 0})))},F=e.forwardRef(E),D=y(F,"dropdownAlign");F.SECRET_COMBOBOX_MODE_DO_NOT_USE=P,F.Option=v,F.OptGroup=w,F._InternalPanelDoNotUseOrYouWillBeFired=D;const R=e=>{const t=B(e),o=_(e),l=k(e,e.value);return p.jsx(F,{...t,options:o,value:l,disabled:e.disabled||e.readOnly,optionFilterProp:e.optionFilterProp??"label",showSearch:!1!==e.showSearch,onSelect:(t,o)=>{var l;return null==(l=e.onSelect)?void 0:l.call(e,t,o)},onDeselect:(t,o)=>{var l;return null==(l=e.onDeselect)?void 0:l.call(e,t,o)},onChange:(t,o)=>{var l;return null==(l=e.onChange)?void 0:l.call(e,t,o)},children:e.children})},_=t=>e.useMemo((()=>{if(!t.dataSet)return;const e=t=>{const o=[];if(t&&h(t)){for(const l of t){const t={...l};l.id&&(t.value=l.id),l.label&&(t.label=l.label),l.children&&(t.children=e(l.children)),o.push(t)}return o}};return e(t.dataSet)}),[t.dataSet]),k=(t,o)=>e.useMemo((()=>{if(void 0===o)return;if(!h(o))return"object"==typeof o?{value:o.id??"0",label:o.label}:o;const e=[];for(const t of o)"object"==typeof t?e.push({value:t.id,label:t.label}):e.push(t);return e}),[o]),B=t=>e.useMemo((()=>f(t,{dataSet:!0,value:!0,readOnly:!0,onSelect:!0,onDeselect:!0,onChange:!0})[1]),[t]),H=({field:t})=>{e.useSyncExternalStore(t.subscribe.bind(t),t.getSnapshot.bind(t));const{component:o,...l}=t.getProps(),a=t.getValue(),s=e.useCallback(((e,o)=>{t.isReady()&&(l.fullItemValue?t.setValue(o):t.setValue(e),t.setDirty(!0))}),[t,l.fullItemValue]),n=e.useCallback((()=>{t.setTouched(!0)}),[t]);e.useEffect((()=>{t.setReady(!0)}),[t]);const r={...{width:t.getWidth()??"100%"},...l.style};return p.jsx(R,{className:l.className,allowClear:!0,...l,disabled:t.isDisabled(),readOnly:t.isReadOnly(),value:a,style:r,onBlur:n,onChange:s})};class SelectField extends b{render(){return p.jsx(H,{field:this})}}export{SelectField as S,R as a};
