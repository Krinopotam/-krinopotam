var e=Object.defineProperty,t=(t,a,o)=>((t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o)(t,"symbol"!=typeof a?a+"":a,o);import{r as a,j as o}from"./index-DEKOHtjL.js";import{B as n}from"./baseField-C1lQOwhI.js";import{s as i}from"./dFormModal-CXclmgf1.js";import{T as r}from"./tabulatorGrid-ueiQSqlo.js";const d=({field:e,gridApi:t})=>{a.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const n=e.getProps(),[i]=a.useState(t),d=l(n),c=e.getValue(),h=a.useRef(void 0);void 0===h.current&&(n.selectionMode?h.current=n.dataSet:h.current=c);const u=s(e,n),g=e.getWidth()??"100%",D=n.autoHeightResize?"100%":n.height,p=n.autoHeightResize?{position:"absolute",inset:0}:{};return o.jsx("div",{style:p,children:o.jsx(r,{...d,...u,className:n.className,apiRef:i,dataSet:h.current,readOnly:n.readOnly,placeholder:n.placeholder,width:g,height:D,resizeHeightWithParent:n.resizeHeightWithForm?"#"+e.getModel().getFormId():n.resizeHeightWithParent})})},l=e=>a.useMemo((()=>i(e,{defaultValue:!0,dataSet:!0,onMenuVisibilityChanged:!0,onDataLoading:!0,onDataLoaded:!0,onDataProcessed:!0,onDataLoadError:!0,onDataChanged:!0,onDataFetch:!0,onDataFetchResponse:!0,onDataFetching:!0,fetchInCreateMode:!0,onSelectionChange:!0,onActiveRowChanged:!0,onDelete:!0,readOnly:!0,onValueChanged:!0,width:!0,autoHeightResize:!0,component:!0,rules:!0,onReadyStateChanged:!0,autoFocus:!0,dependsOn:!0,disabled:!0,helpClass:!0,hidden:!0,label:!0,nonEditable:!0,onDirtyStateChanged:!0,onDisabledStateChanged:!0,onErrorChanged:!0,onHiddenStateChanged:!0,onLabelChanged:!0,ajaxRequestFunc:!0,onReadOnlyStateChanged:!0,placeholder:!0,onTouchedStateChanged:!0,onValidated:!0,requiredMark:!0,rowStyle:!0,style:!0,tooltip:!0,resizeHeightWithForm:!0,onFieldDataFetch:!0,onFieldDataFetchError:!0,onFieldDataFetchSuccess:!0,className:!0,itemClassName:!0})[1]),[e]),s=(e,t)=>{const a=e.getModel().getFormMode();return{onDataChanged:(a,o)=>{var n;return e.isReady()&&(t.selectionMode||(e.setValue(a??[],!1,!0,!0),e.setDirty(!0))),null==(n=t.onDataChanged)?void 0:n.call(t,a,o,e)},onActiveRowChanged:(a,o)=>{var n;return null==(n=t.onActiveRowChanged)?void 0:n.call(t,a,o,e)},onSelectionChange:(a,o,n,i,r)=>{var d;return e.getModel().isFormReady()&&(t.selectionMode&&(e.setValue(a??[],!1,!0,!0),e.setDirty(!0)),e.setTouched(!0)),null==(d=t.onSelectionChange)?void 0:d.call(t,a,o,n,i,r,e)},onDataLoading:(a,o)=>{var n;return e.setReady(!1),null==(n=t.onDataLoading)?void 0:n.call(t,a,o,e)},onDataLoaded:(t,a)=>{var o;e.setReady(!0);const n=e.getProps();return n.selectionMode||e.setValue(t??[],!1,!0,!0),null==(o=n.onDataLoaded)?void 0:o.call(n,t,a,e)},onDataProcessed:(t,a)=>{var o;const n=e.getProps();return n.selectionMode&&a.setSelectedRows(e.getValue()),null==(o=n.onDataProcessed)?void 0:o.call(n,t,a,e)},onDataLoadError:(a,o,n)=>{var i;return e.setReady(!1),null==(i=t.onDataLoadError)?void 0:i.call(t,a,o,n,e)},onDataFetch:!t.onDataFetch||"create"===a&&!t.fetchInCreateMode?void 0:(a,o)=>t.onDataFetch(a,o,e),onDataFetching:t.onDataFetching?(a,o,n)=>t.onDataFetching(a,o,n,e):void 0,onDataFetchResponse:t.onDataFetchResponse?(a,o,n)=>{var i;return(null==(i=null==t?void 0:t.onDataFetchResponse)?void 0:i.call(t,a,o,n,e))??a}:void 0,onMenuVisibilityChanged:t.onMenuVisibilityChanged?(a,o)=>{var n;return null==(n=null==t?void 0:t.onMenuVisibilityChanged)?void 0:n.call(t,a,o,e)}:void 0,onDelete:t.onDelete?(a,o)=>{var n;return null==(n=null==t?void 0:t.onDelete)?void 0:n.call(t,a,o,e)}:void 0}};class TabulatorGridField extends n{constructor(){super(...arguments),t(this,"gridApi",{})}render(){const e=this.getProps();return e.apiRef&&(this.gridApi=e.apiRef),o.jsx(d,{field:this,gridApi:this.gridApi})}getGridApi(){return this.gridApi}setValue(e,t,a,o){const n=this.getProps();return o||n.selectionMode||this.gridApi.setDataSet(e),super.setValue(e,t,a)}setDataSet(e,t){this.getProps().selectionMode?this.gridApi.setDataSet(e):this.setValue(e,t)}getDataSet(){return this.gridApi.getDataSet()}}export{TabulatorGridField as T};
