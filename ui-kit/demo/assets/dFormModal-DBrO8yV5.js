import{r as f,j as C}from"./index-CtAjfk3U.js";import{u as S,t as k,c as A,d as M,e as T,f as v,a as O,m as B,P as j}from"./buttonsRow-DIWV9y5m.js";import{e as D,r as I,z as x,u as R,a as h,C as d,c as E,D as U,E as _,f as G}from"./isArray-Dq3mFmoY.js";import{m as b}from"./messageBox-BEJz6LZv.js";import{M as H}from"./modal-CqlI0vXJ.js";const W=(e,n)=>{const t={},o={};for(const u in e)n[u]?t[u]=e[u]:o[u]=e[u];return[t,o]},z={...D,cancelChangesQn:"Cancel the changes made?",viewing:"Viewing",creating:"Creating",editing:"Editing",cloning:"Cloning"},Q={...I,cancelChangesQn:"Отменить сделанные изменения?",viewing:"Просмотр",creating:"Создание",editing:"Редактирование",cloning:"Клонирование"},F={...x,cancelChangesQn:"取消已做的更改？",viewing:"查看",creating:"创建",editing:"编辑",cloning:"克隆"},K={en_US:z,ru_RU:Q,zh_CN:F},N=e=>R(e.language,K,e.translation),P=(e,n)=>{const t=V(e,n),[o,u]=f.useState(t);return f.useEffect(()=>{u(t)},[t]),[o,u]},V=(e,n)=>f.useMemo(()=>{const t=e.formMode??"create",o=e.title;return o||(t==="view"?n.t("viewing"):t==="create"?n.t("creating"):t==="clone"?n.t("cloning"):t==="update"?n.t("editing"):"&nbsp;")},[n,e.formMode,e.title]),q=e=>()=>e,J=e=>n=>{e(n)},w=e=>{if(e===null||typeof e!="object")return!1;const n=Object.getPrototypeOf(e);return n&&n!==Object.prototype&&n.constructor&&n.constructor!==Object},L=(e,n)=>e?Object.prototype.hasOwnProperty.call(e,n):!1,X=(e,n)=>{const t=new Map,o=(s,l)=>{if(!s)return s;if(t.has(s))return t.get(s);const c={};t.set(s,c);for(const a in s){if(!L(s,a))continue;const i=s[a];!i||typeof i!="object"||!h(i)&&w(i)||n?c[a]=i:c[a]=h(i)?u(i):o(i)}return c},u=(s,l)=>{const c=[];for(let a=0;a<s.length;a++){const i=s[a];!i||typeof i!="object"||!h(i)&&w(i)||n?c[a]=i:c[a]=h(i)?u(i):o(i)}return c};return typeof e!="object"||e===null||!h(e)&&w(e)?e:h(e)?u(e):o(e)},Y=e=>(n,t)=>{var c,a,i;if(!n){console.warn("The form mode is not set");return}const o=(t==null?void 0:t.dataSet)??e.getProps().dataSet,u=o?X(o):void 0,s=e.getProps(),l={open:!0,formMode:n,dataSet:u,...t};(c=l.buttons)!=null&&c.ok&&(l.buttons.ok.disabled=!0),((a=s.onOpen)==null?void 0:a.call(s,e,u,l,new d))!==!1&&((i=t==null?void 0:t.onOpen)==null?void 0:i.call(t,e,u,l,new d))!==!1&&(e.updateProps(l),setTimeout(()=>{var g;const r=e.getProps();(g=r.onOpened)==null||g.call(r,e,r.dataSet,new d)},0))},Z=e=>()=>{var t,o;const n=e.getProps();if(((t=n.onClosing)==null?void 0:t.call(n,e,new d))===!1)return!1;e.updateProps({open:!1}),(o=n.onClosed)==null||o.call(n,e,new d)},$=(e,n)=>()=>{var t,o;if(((t=n.onClosing)==null?void 0:t.call(n,e,new d))!==!1){if(e.model.isFormDirty()&&n.confirmChanges){b.confirm({language:n.language,content:n.closeFormConfirmMessage??e.t("cancelChangesQn"),okText:e.t("yes"),cancelText:e.t("no"),onOk:()=>{var u;(u=n.onCancel)==null||u.call(n,e,new d),e.forceClose()}});return}(o=n.onCancel)==null||o.call(n,e,new d),e.forceClose()}},p=({props:e,setProps:n})=>{const[t]=f.useState(e.apiRef||{});t.getId=S(e.formId??"dFormModal-"+k()),t.getButtonsApi=E(),t.getProps=A(e),t.setProps=M(n),t.updateProps=T(e,n),t.getIsMounted=v(),t.t=N(e),t.open=Y(t),t.close=$(t,e),t.forceClose=Z(t);const[o,u]=P(e,t);return t.getTitle=q(o),t.setTitle=J(u),t},ee=({buttons:e,formApi:n,formProps:t,modalFormProps:o})=>{const u=o.modalProps;return C.jsx(H,{open:o.open,maskProps:{style:{zIndex:1060}},wrapProps:{style:{zIndex:1060}},modalId:n.getId(),centered:!0,maskClosable:!1,keyboard:!1,destroyOnClose:!0,title:n.getTitle(),onCancel:n.close,footer:C.jsx(O,{buttons:e,apiRef:n.getButtonsApi(),color:t.colorType,arrowsSelection:t.arrowsButtonsSelection,style:t.buttonsRowStyle,styles:t.buttonsRowStyles,context:n}),height:o.height,maxHeight:o.maxHeight,minHeight:o.minHeight,width:o.width,maxWidth:o.maxWidth,minWidth:o.minWidth,...u,children:o.open?C.jsx(U,{apiRef:n,...t,formStyle:{height:"100%",width:"100%",...t.formStyle},containerStyle:{height:"100%",...t.containerStyle},_overriddenApi:{getId:!0,t:!0,getButtonsApi:!0,getProps:!0,setProps:!0,updateProps:!0,getIsMounted:!0}}):null})},te=e=>f.useMemo(()=>({...e,...{onDataFetchError:(t,o,u)=>{var l;if((l=e==null?void 0:e.onDataFetchError)==null||l.call(e,t,o,u),u.isPrevented())return;u.preventOriginal();const s=b.confirm({language:e.language,title:o.t("error"),content:C.jsx(_,{error:t,extraMessage:o.t("tryAgainQt")}),colorType:"danger",buttons:{ok:{onClick:()=>{s.destroy(),o.model.fetchData()}},cancel:{onClick:()=>{var c;s.destroy(),(c=o.forceClose)==null||c.call(o)}}}})},onSubmit:(t,o,u,s)=>{var c,a,i,r,g,m,y;const l=(c=e==null?void 0:e.onSubmit)==null?void 0:c.call(e,t,o,u,s);return s.isPrevented()||(s.preventOriginal(),(i=(a=u.getButtonsApi()).disabled)==null||i.call(a,"ok",!0),(g=(r=u.getButtonsApi()).disabled)==null||g.call(r,"cancel",!0),e.confirmChanges||(y=(m=u.getButtonsApi()).loading)==null||y.call(m,"ok",!0)),l},onSubmitSuccess:(t,o,u,s,l)=>{var c;(c=e==null?void 0:e.onSubmitSuccess)==null||c.call(e,t,o,u,s,l),!l.isPrevented()&&s.forceClose()},onSubmitComplete:(t,o,u,s,l)=>{var c,a,i,r,g,m,y;(c=e==null?void 0:e.onSubmitComplete)==null||c.call(e,t,o,u,s,l),!l.isPrevented()&&(l.preventOriginal(),(i=(a=s.getButtonsApi()).disabled)==null||i.call(a,"ok",!1),(g=(r=s.getButtonsApi()).disabled)==null||g.call(r,"cancel",!1),(y=(m=s.getButtonsApi()).loading)==null||y.call(m,"ok",!1))}}}),[e]),ne=(e,n)=>f.useMemo(()=>{const t={ok:{position:"right",active:n.formMode!=="view",hidden:n.formMode==="view",title:e.t("ok"),disabled:!0,hotKeys:[{key:"enter",ctrl:!0},{key:"s",ctrl:!0},{key:"ы",ctrl:!0}],onClick:()=>{e.submitForm()}},cancel:{position:"right",title:e.t("cancel"),hotKeys:[{key:"escape"}],active:n.formMode==="view",onClick:()=>{e.close()}}};return B(t,n.buttons)},[e,n.buttons,n.formMode]),ae=e=>{G();const[n,t]=j(e),o=te(n),[,u]=oe(o),s=p({props:o,setProps:t}),l=ne(s,o);return C.jsx(ee,{formApi:s,modalFormProps:o,formProps:u,buttons:l})},oe=e=>f.useMemo(()=>{const[n,t]=W(e,{closeFormConfirmMessage:!0,modalProps:!0,title:!0,open:!0,width:!0,maxWidth:!0,minWidth:!0,height:!0,minHeight:!0,maxHeight:!0,onCancel:!0,onOpen:!0,onClosed:!0,onClosing:!0,onOpened:!0,language:!0,translation:!0});return t.buttons=null,[n,{...t,language:e.language,translation:e.translation}]},[e]);export{ae as D,X as d,W as s};
