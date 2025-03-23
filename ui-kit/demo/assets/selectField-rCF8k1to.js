import{r as e,k as t,x as a,H as o,ab as l,a1 as n,aF as s,B as r,c as i,y as d,ax as c,a4 as u,bs as p,j as m}from"./index-D91CPeas.js";import{B as h}from"./baseField-Ck1FIJOr.js";import{s as b}from"./dFormModal-B1f3hIKb.js";import{a as f}from"./isArray-kfOH8zvo.js";import{u as C,a as g,D as S,T as O,m as y,O as x,b as v}from"./useShowArrow-DfiETnwc.js";import{j as w}from"./buttonsRow-GmLsAxIS.js";import{c as I,d as j,e as N}from"./index-CqQxpQkp.js";import{u as F}from"./useIcons-CuGhJ3PN.js";const M="SECRET_COMBOBOX_MODE_DO_NOT_USE",D=(m,h)=>{var b;const{prefixCls:f,bordered:x,className:v,rootClassName:w,getPopupContainer:D,popupClassName:E,dropdownClassName:P,listHeight:R=256,placement:W,listItemHeight:_,size:H,disabled:k,notFoundContent:B,status:V,builtinPlacements:$,dropdownMatchSelectWidth:T,popupMatchSelectWidth:z,direction:A,style:L,allowClear:U,variant:X,dropdownStyle:q,transitionName:G,tagRender:J,maxCount:Y,prefix:K}=m,Q=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(a[o[l]]=e[o[l]])}return a}(m,["prefixCls","bordered","className","rootClassName","getPopupContainer","popupClassName","dropdownClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","direction","style","allowClear","variant","dropdownStyle","transitionName","tagRender","maxCount","prefix"]),{getPopupContainer:Z,getPrefixCls:ee,renderEmpty:te,direction:ae,virtual:oe,popupMatchSelectWidth:le,popupOverflow:ne}=e.useContext(t),se=a("select"),[,re]=o(),ie=null!=_?_:null==re?void 0:re.controlHeight,de=ee("select",f),ce=ee(),ue=null!=A?A:ae,{compactSize:pe,compactItemClassnames:me}=l(de,ue),[he,be]=I("select",X,x),fe=n(de),[Ce,ge,Se]=C(de,fe),Oe=e.useMemo((()=>{const{mode:e}=m;if("combobox"!==e)return e===M?"combobox":e}),[m.mode]),ye="multiple"===Oe||"tags"===Oe,xe=g(m.suffixIcon,m.showArrow),ve=null!==(b=null!=z?z:T)&&void 0!==b?b:le,{status:we,hasFeedback:Ie,isFormItemInput:je,feedbackIcon:Ne}=e.useContext(s),Fe=N(we,V);let Me;Me=void 0!==B?B:"combobox"===Oe?null:(null==te?void 0:te("Select"))||e.createElement(S,{componentName:"Select"});const{suffixIcon:De,itemIcon:Ee,removeIcon:Pe,clearIcon:Re}=F(Object.assign(Object.assign({},Q),{multiple:ye,hasFeedback:Ie,feedbackIcon:Ne,showSuffixIcon:xe,prefixCls:de,componentName:"Select"})),We=!0===U?{clearIcon:Re}:U,_e=r(Q,["suffixIcon","itemIcon"]),He=i(E||P,{[`${de}-dropdown-${ue}`]:"rtl"===ue},w,Se,fe,ge),ke=d((e=>{var t;return null!==(t=null!=H?H:pe)&&void 0!==t?t:e})),Be=e.useContext(c),Ve=null!=k?k:Be,$e=i({[`${de}-lg`]:"large"===ke,[`${de}-sm`]:"small"===ke,[`${de}-rtl`]:"rtl"===ue,[`${de}-${he}`]:be,[`${de}-in-form-item`]:je},j(de,Fe,Ie),me,se.className,v,w,Se,fe,ge),Te=e.useMemo((()=>void 0!==W?W:"rtl"===ue?"bottomRight":"bottomLeft"),[W,ue]),[ze]=u("SelectLike",null==q?void 0:q.zIndex);return Ce(e.createElement(O,Object.assign({ref:h,virtual:oe,showSearch:se.showSearch},_e,{style:Object.assign(Object.assign({},se.style),L),dropdownMatchSelectWidth:ve,transitionName:p(ce,"slide-up",G),builtinPlacements:y($,ne),listHeight:R,listItemHeight:ie,mode:Oe,prefixCls:de,placement:Te,direction:ue,prefix:K,suffixIcon:De,menuItemSelectedIcon:Ee,removeIcon:Pe,allowClear:We,notFoundContent:Me,className:$e,getPopupContainer:D||Z,dropdownClassName:He,disabled:Ve,dropdownStyle:Object.assign(Object.assign({},q),{zIndex:ze}),maxCount:ye?Y:void 0,tagRender:ye?J:void 0})))},E=e.forwardRef(D),P=w(E,"dropdownAlign");E.SECRET_COMBOBOX_MODE_DO_NOT_USE=M,E.Option=x,E.OptGroup=v,E._InternalPanelDoNotUseOrYouWillBeFired=P;const R=e=>{const t=H(e),a=W(e),o=_(e,e.value);return m.jsx(E,{...t,options:a,value:o,disabled:e.disabled||e.readOnly,optionFilterProp:e.optionFilterProp??"label",showSearch:!1!==e.showSearch,onSelect:(t,a)=>{var o;return null==(o=e.onSelect)?void 0:o.call(e,t,a)},onDeselect:(t,a)=>{var o;return null==(o=e.onDeselect)?void 0:o.call(e,t,a)},onChange:(t,a)=>{var o;return null==(o=e.onChange)?void 0:o.call(e,t,a)},children:e.children})},W=t=>e.useMemo((()=>{if(!t.dataSet)return;const e=t=>{const a=[];if(t&&f(t)){for(const o of t){const t={...o};o.id&&(t.value=o.id),o.label&&(t.label=o.label),o.children&&(t.children=e(o.children)),a.push(t)}return a}};return e(t.dataSet)}),[t.dataSet]),_=(t,a)=>e.useMemo((()=>{if(void 0===a)return;if(!f(a))return"object"==typeof a?{value:a.id??"0",label:a.label}:a;const e=[];for(const t of a)"object"==typeof t?e.push({value:t.id,label:t.label}):e.push(t);return e}),[a]),H=t=>e.useMemo((()=>b(t,{dataSet:!0,value:!0,readOnly:!0,onSelect:!0,onDeselect:!0,onChange:!0})[1]),[t]),k=({field:t})=>{e.useSyncExternalStore(t.subscribe.bind(t),t.getSnapshot.bind(t));const a=t.getProps(),o=B(a),l=t.getValue(),n=e.useCallback(((e,o)=>{t.isReady()&&(a.fullItemValue?t.setValue(o):t.setValue(e),t.setDirty(!0))}),[t,a.fullItemValue]),s=e.useCallback((()=>{t.setTouched(!0)}),[t]);e.useEffect((()=>{t.setReady(!0)}),[t]);const r={...{width:t.getWidth()??"100%"},...a.style};return m.jsx(R,{className:a.className,allowClear:!0,...o,disabled:t.isDisabled(),readOnly:t.isReadOnly(),value:l,style:r,onBlur:s,onChange:n})},B=t=>e.useMemo((()=>b(t,{autoFocus:!0,autoHeightResize:!0,component:!0,dependsOn:!0,disabled:!0,helpClass:!0,hidden:!0,label:!0,nonEditable:!0,onDirtyStateChanged:!0,onDisabledStateChanged:!0,onErrorChanged:!0,onHiddenStateChanged:!0,onLabelChanged:!0,onReadOnlyStateChanged:!0,onReadyStateChanged:!0,onTouchedStateChanged:!0,onValidated:!0,onValueChanged:!0,placeholder:!0,readOnly:!0,requiredMark:!0,itemWrapperStyle:!0,rules:!0,style:!0,tooltip:!0,defaultValue:!0,width:!0,onFieldDataFetch:!0,onFieldDataFetchError:!0,onFieldDataFetchSuccess:!0,className:!0,itemWrapperClassName:!0,containerClassName:!0,containerStyle:!0,noContainer:!0,noItemWrapper:!0})[1]),[t]);class SelectField extends h{render(){return m.jsx(k,{field:this})}}export{SelectField as S,R as a};
