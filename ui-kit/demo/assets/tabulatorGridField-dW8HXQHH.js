var R=Object.defineProperty;var y=(e,t,o)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var D=(e,t,o)=>y(e,typeof t!="symbol"?t+"":t,o);import{r as c,j as i}from"./index-BZKbt60r.js";import{B as S}from"./dForm-Cc85MzR5.js";import{s as b}from"./dFormModal-Br15X1Ve.js";import{T as F}from"./tabulatorGrid-3cY8rgqo.js";const d=({field:e,gridApi:t})=>{c.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const o=e.getProps(),[s]=c.useState(t),n=M(o),r=e.getValue(),a=c.useRef();typeof a.current>"u"&&(o.selectionMode?a.current=o.dataSet:a.current=r);const u=m(e,o),g=e.getWidth()??"100%",h=o.autoHeightResize?"100%":o.height,C=o.autoHeightResize?{position:"absolute",inset:0}:{};return i.jsx("div",{style:C,children:i.jsx(F,{...n,...u,apiRef:s,dataSet:a.current,readOnly:o.readOnly,placeholder:o.placeholder,width:g,height:h,resizeHeightWithParent:o.resizeHeightWithForm?"#"+e.getModel().getFormId():o.resizeHeightWithParent})})},M=e=>c.useMemo(()=>b(e,{value:!0,dataSet:!0,onMenuVisibilityChanged:!0,onDataLoading:!0,onDataLoaded:!0,onDataProcessed:!0,onDataLoadError:!0,onDataChanged:!0,onDataFetch:!0,onDataFetchResponse:!0,onDataFetching:!0,fetchInCreateMode:!0,onSelectionChange:!0,onActiveRowChanged:!0,onDelete:!0,readOnly:!0,onValueChanged:!0,width:!0,autoHeightResize:!0,component:!0,rules:!0,onReadyStateChanged:!0,autoFocus:!0,dependsOn:!0,disabled:!0,helpClass:!0,hidden:!0,label:!0,nonEditable:!0,inlineGroup:!0,onDirtyStateChanged:!0,onDisabledStateChanged:!0,onErrorChanged:!0,onHiddenStateChanged:!0,onLabelChanged:!0,ajaxRequestFunc:!0,onReadOnlyStateChanged:!0,placeholder:!0,onTouchedStateChanged:!0,onValidated:!0,requiredMark:!0,rowStyle:!0,style:!0,tooltip:!0,resizeHeightWithForm:!0})[1],[e]),m=(e,t)=>{const s=e.getModel().getFormMode();return{onDataChanged:(n,r)=>{var a;return e.isReady()&&(t.selectionMode||(e.setValue(n??[],!1,!0,!0),e.setDirty(!0))),(a=t.onDataChanged)==null?void 0:a.call(t,n,r,e)},onActiveRowChanged:(n,r)=>{var a;return(a=t.onActiveRowChanged)==null?void 0:a.call(t,n,r,e)},onSelectionChange:(n,r,a,u,g)=>{var h;return e.isReady()&&(t.selectionMode&&(e.setValue(n??[],!1,!0,!0),e.setDirty(!0)),e.setTouched(!0)),(h=t.onSelectionChange)==null?void 0:h.call(t,n,r,a,u,g,e)},onDataLoading:(n,r)=>{var a;return e.setReady(!1),(a=t.onDataLoading)==null?void 0:a.call(t,n,r,e)},onDataLoaded:(n,r)=>{var u;e.setReady(!0);const a=e.getProps();return a.selectionMode||e.setValue(n??[],!1,!0,!0),(u=a.onDataLoaded)==null?void 0:u.call(a,n,r,e)},onDataProcessed:(n,r)=>{var u;const a=e.getProps();return a.selectionMode&&r.setSelectedRows(e.getValue()),(u=a.onDataProcessed)==null?void 0:u.call(a,n,r,e)},onDataLoadError:(n,r,a)=>{var u;return e.setReady(!1),(u=t.onDataLoadError)==null?void 0:u.call(t,n,r,a,e)},onDataFetch:!t.onDataFetch||s==="create"&&!t.fetchInCreateMode?void 0:(n,r)=>t.onDataFetch(n,r,e),onDataFetching:t.onDataFetching?(n,r,a)=>t.onDataFetching(n,r,a,e):void 0,onDataFetchResponse:t.onDataFetchResponse?(n,r,a)=>{var u;return((u=t==null?void 0:t.onDataFetchResponse)==null?void 0:u.call(t,n,r,a,e))??n}:void 0,onMenuVisibilityChanged:t.onMenuVisibilityChanged?(n,r)=>{var a;return(a=t==null?void 0:t.onMenuVisibilityChanged)==null?void 0:a.call(t,n,r,e)}:void 0,onDelete:t.onDelete?(n,r)=>{var a;return(a=t==null?void 0:t.onDelete)==null?void 0:a.call(t,n,r,e)}:void 0}};class E extends S{constructor(){super(...arguments);D(this,"gridApi",{})}render(){const o=this.getProps();return o.apiRef&&(this.gridApi=o.apiRef),i.jsx(d,{field:this,gridApi:this.gridApi})}getGridApi(){return this.gridApi}setValue(o,s,n,r){const a=this.getProps();return!r&&!a.selectionMode&&this.gridApi.setDataSet(o),super.setValue(o,s,n)}setDataSet(o,s){this.getProps().selectionMode?this.gridApi.setDataSet(o):this.setValue(o,s)}getDataSet(){return this.gridApi.getDataSet()}}export{E as T};
