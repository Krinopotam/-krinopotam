import{j as a}from"./extends-CKwpSh1k.js";import{B as l}from"./dForm-BrYUAKUW.js";import{r as t}from"./index-CTjT7uj6.js";import{I as p}from"./index-C2sbGtmw.js";const r=({field:e})=>{t.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const o=e.getName(),s=e.getProps(),n=e.getValue(),u=t.useCallback(d=>{e.isReady()&&(e.setValue(d.target.value||null),e.setDirty(!0))},[e]),c=t.useCallback(()=>{e.setTouched(!0)},[e]);return t.useEffect(()=>{e.setReady(!0)},[e]),a.jsx(p.Password,{autoFocus:s.autoFocus,disabled:e.isDisabled(),iconRender:s.iconRender,maxLength:s.maxLength,name:o,onBlur:c,onChange:u,placeholder:s.placeholder,readOnly:e.isReadOnly(),showCount:s.showCount,value:n,style:s.style,width:s.width,autoComplete:s.autocomplete,spellCheck:s.spellcheck})};try{r.displayName="PasswordFieldRender",r.__docgenInfo={description:"",displayName:"PasswordFieldRender",props:{field:{defaultValue:null,description:"",name:"field",required:!0,type:{name:"PasswordField"}}}}}catch{}class g extends l{render(){return a.jsx(r,{field:this})}}export{g as P};
