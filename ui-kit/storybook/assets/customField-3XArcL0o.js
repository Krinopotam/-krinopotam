import{j as d}from"./extends-CKwpSh1k.js";import{B as c}from"./dForm-BrYUAKUW.js";import{r as o}from"./index-CTjT7uj6.js";const r=({field:e})=>{var n;o.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const t=e.getProps(),s=e.getValue(),a=((n=t==null?void 0:t.onRender)==null?void 0:n.call(t,s,e))??s;o.useEffect(()=>{e.setReady(!0)},[e]);const u={...{width:t.width??"100%"},...t.style};return d.jsx("div",{style:u,children:a})};try{r.displayName="CustomFieldRender",r.__docgenInfo={description:"",displayName:"CustomFieldRender",props:{field:{defaultValue:null,description:"",name:"field",required:!0,type:{name:"CustomField"}}}}}catch{}class y extends c{render(){return d.jsx(r,{field:this})}renderField(){return this.render()}}export{y as C};
