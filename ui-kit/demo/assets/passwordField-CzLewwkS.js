import{r as s,j as o}from"./index-CNGiMTrA.js";import{B as p}from"./dForm-DmRsT3BS.js";import{I as h}from"./index-B9vEfmTq.js";const m=({field:e})=>{s.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const a=e.getName(),t=e.getProps(),r=e.getValue(),n=s.useCallback(l=>{e.isReady()&&(e.setValue(l.target.value),e.setDirty(!0))},[e]),u=s.useCallback(()=>{e.setTouched(!0)},[e]);s.useEffect(()=>{e.setReady(!0)},[e]);const c={...{width:e.getWidth()??"100%"},...t.style};return o.jsx(h.Password,{autoFocus:t.autoFocus,disabled:e.isDisabled(),iconRender:t.iconRender,maxLength:t.maxLength,name:a,onBlur:u,onChange:n,placeholder:t.placeholder,readOnly:e.isReadOnly(),showCount:t.showCount,value:r,style:c,autoComplete:t.autocomplete,spellCheck:t.spellcheck})};class b extends p{render(){return o.jsx(m,{field:this})}}export{b as P};
