import{j as a}from"./extends-BRD_ACZV.js";import{B as c}from"./dForm-CnoAkNZ2.js";import{r as o}from"./index-uubelm5h.js";const r=({field:e})=>{var n;o.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const t=e.getProps(),s=e.getValue(),d=((n=t==null?void 0:t.onRender)==null?void 0:n.call(t,s,e))??s;o.useEffect(()=>{e.setReady(!0)},[e]);const u={...{width:e.getWidth()??"100%"},...t.style};return a.jsx("div",{style:u,children:d})};try{r.displayName="CustomFieldRender",r.__docgenInfo={description:"",displayName:"CustomFieldRender",props:{field:{defaultValue:null,description:"",name:"field",required:!0,type:{name:"CustomField"}}}}}catch{}class y extends c{render(){return a.jsx(r,{field:this})}renderField(){return this.render()}}export{y as C};
