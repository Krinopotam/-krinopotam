import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{B as p}from"./baseField-DeDwGRQP.js";import{r as t}from"./index-iW-139IE.js";import{I as i}from"./index-DJtR8zbC.js";const r=({field:e})=>{t.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const o=e.getId(),s=e.getProps(),n=e.getValue(),c=t.useCallback(u=>{e.isReady()&&(e.setValue(u.target.value),e.setDirty(!0))},[e]),d=t.useCallback(()=>{e.setTouched(!0)},[e]);t.useEffect(()=>{e.setReady(!0)},[e]);const l={...{width:e.getWidth()??"100%"},...s.style};return a.jsx(i.Password,{className:s.className,autoFocus:s.autoFocus,disabled:e.isDisabled(),iconRender:s.iconRender,maxLength:s.maxLength,name:o,onBlur:d,onChange:c,placeholder:s.placeholder,readOnly:e.isReadOnly(),showCount:s.showCount,value:n,style:l,autoComplete:s.autocomplete,spellCheck:s.spellcheck})};try{r.displayName="PasswordFieldRender",r.__docgenInfo={description:"",displayName:"PasswordFieldRender",props:{field:{defaultValue:null,description:"",name:"field",required:!0,type:{name:"PasswordField"}}}}}catch{}class w extends p{render(){return a.jsx(r,{field:this})}}export{w as P};
