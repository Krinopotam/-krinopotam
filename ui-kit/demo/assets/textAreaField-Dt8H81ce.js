import{r as e,j as s}from"./index-DEKOHtjL.js";import{B as a}from"./baseField-C1lQOwhI.js";import{I as t}from"./index-BJ8pwC2Z.js";const{TextArea:o}=t,r=({field:a})=>{e.useSyncExternalStore(a.subscribe.bind(a),a.getSnapshot.bind(a));const t=a.getName(),r=a.getProps(),l=a.getValue(),n=e.useCallback((e=>{a.isReady()&&(a.setValue(e.target.value),a.setDirty(!0))}),[a]),i=e.useCallback((()=>{a.setTouched(!0)}),[a]);e.useEffect((()=>{a.setReady(!0)}),[a]);const d={...{width:a.getWidth()??"100%"},...r.style};return s.jsx(o,{className:r.className,autoFocus:r.autoFocus,autoSize:r.autoSize,cols:r.cols,disabled:a.isDisabled(),maxLength:r.maxLength,name:t,onBlur:i,onChange:n,placeholder:r.placeholder,readOnly:a.isReadOnly(),rows:r.rows,showCount:r.showCount,value:l,wrap:r.wrap,style:d})};class TextAreaField extends a{render(){return s.jsx(r,{field:this})}}export{TextAreaField as T};
