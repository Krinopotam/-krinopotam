import{r as c,j as d,W as N}from"./index-CtAjfk3U.js";import{C as P,B as R}from"./baseField-CLOOMrMa.js";import{F as w}from"./isArray-Dq3mFmoY.js";const j=({field:e})=>{c.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e)),c.useEffect(()=>{e.setReady(!0)},[e]);const t=c.useRef(null),n=e.getModel().getFormProps(),l=e.getProps(),r=e.getRootFields();let o;for(const a in r){const i=r[a];i.isHidden()||(o=i)}const f=e.isHidden()||!e.hasVisibleChildren(),g=e.getLabel();let u="";n.layout==="horizontal"&&(u=g??(o==null?void 0:o.getLabel()));const h={width:e.getWidth(),margin:0,marginBottom:0};l.autoHeightResize&&(h.height="100%");const F={...h,...l.style},p=24,m={display:"flex",flexDirection:"row",flexWrap:"nowrap",gap:p+"px",alignItems:"top",width:"100%"};l.autoHeightResize&&(m.height="100%");const b=O(r,p);return d.jsx(P,{nodeRef:t,in:!f,timeout:300,classNames:"zoom",unmountOnExit:!0,children:d.jsx("div",{ref:t,className:"dform-field-container",children:d.jsx(w.Item,{label:u,style:F,className:l.className,children:d.jsx("div",{style:m,children:Object.keys(r).map(a=>{const i=r[a],x={flex:i.getProps().width||i.noGrowWidth()?"0 0 auto":"1 1 auto",width:S(i,b)},y=n.layout==="horizontal"&&i===o?null:void 0;return d.jsx(N.Fragment,{children:i.renderField({altLabel:y,fieldContainerStyle:x})},`item_${e.getName()}_subitem_${i.getName()}`)})})})})})},O=(e,t)=>{const s=Object.keys(e).length;return s>0?(s-1)*t/s:0},S=(e,t)=>{const s=e.getProps();if(s.width)return C(s.width)?s.width+"px":`calc(${s.width} - ${t}px)`},C=e=>typeof e=="number"?!0:e.length>0&&!isNaN(Number(e[e.length-1]));class M extends R{initChildrenFields(){const t=this.getProps(),s=t.fieldsProps;return t.fieldsProps?([this.fieldsMap,this.rootFields]=this.getModel().prepareFieldCollection(s,this),[this.fieldsMap,this.rootFields]):[{},{}]}render(){return d.jsx(j,{field:this})}renderField(){return this.render()}getFieldsMap(){return this.fieldsMap}getRootFields(){return this.rootFields}getValue(){}setValue(){}canHaveValue(){return!1}managesChildWidth(){return!0}setDisabled(t,s,n){if(this.isDisabled()!==t){for(const r in this.rootFields)this.rootFields[r].setDisabled(t,s,!0);super.setDisabled(t,s,n)}}setReadOnly(t,s,n){if(this.isReadOnly()!==t){for(const r in this.rootFields)this.rootFields[r].setReadOnly(t,s,!0);super.setReadOnly(t,s,n)}}}export{M as I};
