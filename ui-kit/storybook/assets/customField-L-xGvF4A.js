import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as p}from"./baseField-SNOxHRgJ.js";import{r as a}from"./index-iW-139IE.js";const n=({field:e})=>{var o;a.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const r=e.getProps(),s=e.getValue(),u=((o=r==null?void 0:r.onRender)==null?void 0:o.call(r,s,e))??s;return a.useEffect(()=>{e.setReady(!0)},[e]),t.jsxs(t.Fragment,{children:[u," "]})};try{n.displayName="CustomFieldRender",n.__docgenInfo={description:"",displayName:"CustomFieldRender",props:{field:{defaultValue:null,description:"",name:"field",required:!0,type:{name:"CustomField"}}}}}catch{}class d extends p{render(){return t.jsx(n,{field:this})}noItemWrapper(){return this.getProps().noItemWrapper!==!1}noContainer(){return this.getProps().noContainer!==!1}}export{d as C};
