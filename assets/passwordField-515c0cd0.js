import{r as t,j as a}from"./index-bd83bb7b.js";import{a as l}from"./index-70b17d15.js";import{I as d}from"./index-45228462.js";const h=({field:s})=>{t.useSyncExternalStore(s.subscribe.bind(s),s.getSnapshot.bind(s));const r=s.getName(),e=s.getProps(),o=s.getValue(),n=t.useCallback(c=>{s.isReady()&&(s.setValue(c.target.value||null),s.setDirty(!0))},[s]),u=t.useCallback(()=>{s.setTouched(!0)},[s]);return t.useEffect(()=>{s.setReady(!0)},[s]),a.jsx(d.Password,{autoFocus:e.autoFocus,disabled:s.isDisabled(),iconRender:e.iconRender,maxLength:e.maxLength,name:r,onBlur:u,onChange:n,placeholder:e.placeholder,readOnly:s.isReadOnly(),showCount:e.showCount,value:o,style:e.style,width:e.width})};class i extends l{render(){return a.jsx(h,{field:this})}}export{i as P};
