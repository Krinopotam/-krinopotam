import{r as s,j as a}from"./index-CNGiMTrA.js";import{B as p}from"./dForm-DmRsT3BS.js";import{I as x}from"./index-B9vEfmTq.js";const{TextArea:h}=x,m=({field:t})=>{s.useSyncExternalStore(t.subscribe.bind(t),t.getSnapshot.bind(t));const o=t.getName(),e=t.getProps(),r=t.getValue(),n=s.useCallback(l=>{t.isReady()&&(t.setValue(l.target.value),t.setDirty(!0))},[t]),u=s.useCallback(()=>{t.setTouched(!0)},[t]);s.useEffect(()=>{t.setReady(!0)},[t]);const c={...{width:t.getWidth()??"100%"},...e.style};return a.jsx(h,{autoFocus:e.autoFocus,autoSize:e.autoSize,cols:e.cols,disabled:t.isDisabled(),maxLength:e.maxLength,name:o,onBlur:u,onChange:n,placeholder:e.placeholder,readOnly:t.isReadOnly(),rows:e.rows,showCount:e.showCount,value:r,wrap:e.wrap,style:c})};class i extends p{render(){return a.jsx(m,{field:this})}}export{i as T};
