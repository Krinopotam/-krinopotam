import{r as e,j as t}from"./index-DEKOHtjL.js";import{u as o,t as n,c as l,d as r,e as s,f as i,a,m as c,P as u}from"./buttonsRow-CRmAST--.js";import{e as d,r as g,z as p,u as m,a as f,C as h,c as v,D as b,E as C,f as y}from"./isArray-CilX2EC5.js";import{m as w}from"./messageBox-DiSTOwiN.js";import{M as P}from"./modal-Ddxw_vMx.js";const S=(e,t)=>{const o={},n={};for(const l in e)t[l]?o[l]=e[l]:n[l]=e[l];return[o,n]},k={en_US:{...d,cancelChangesQn:"Cancel the changes made?",viewing:"Viewing",creating:"Creating",editing:"Editing",cloning:"Cloning"},ru_RU:{...g,cancelChangesQn:"Отменить сделанные изменения?",viewing:"Просмотр",creating:"Создание",editing:"Редактирование",cloning:"Клонирование"},zh_CN:{...p,cancelChangesQn:"取消已做的更改？",viewing:"查看",creating:"创建",editing:"编辑",cloning:"克隆"}},x=(t,o)=>e.useMemo((()=>{const e=t.formMode??"create",n=t.title;return n||("view"===e?o.t("viewing"):"create"===e?o.t("creating"):"clone"===e?o.t("cloning"):"update"===e?o.t("editing"):"&nbsp;")}),[o,t.formMode,t.title]),j=e=>{if(null===e||"object"!=typeof e)return!1;const t=Object.getPrototypeOf(e);return t&&t!==Object.prototype&&t.constructor&&t.constructor!==Object},M=(e,t)=>!!e&&Object.prototype.hasOwnProperty.call(e,t),O=(e,t)=>{const o=new Map,n=(e,r)=>{if(!e)return e;if(o.has(e))return o.get(e);const s={};o.set(e,s);for(const o in e){if(!M(e,o))continue;const r=e[o];!r||"object"!=typeof r||!f(r)&&j(r)||t?s[o]=r:s[o]=f(r)?l(r):n(r)}return s},l=(e,o)=>{const r=[];for(let s=0;s<e.length;s++){const o=e[s];!o||"object"!=typeof o||!f(o)&&j(o)||t?r[s]=o:r[s]=f(o)?l(o):n(o)}return r};return"object"!=typeof e||null===e||!f(e)&&j(e)?e:f(e)?l(e):n(e)},A=({props:t,setProps:a})=>{const[c]=e.useState(t.apiRef||{});c.getId=o(t.formId??"dFormModal-"+n()),c.getButtonsApi=v(),c.getProps=l(t),c.setProps=r(a),c.updateProps=s(t,a),c.getIsMounted=i(),c.t=(e=>m(e.language,k,e.translation))(t),c.open=(e=>(t,o)=>{var n,l,r;if(!t)return void console.warn("The form mode is not set");const s=(null==o?void 0:o.dataSet)??e.getProps().dataSet,i=s?O(s):void 0,a=e.getProps(),c={open:!0,formMode:t,dataSet:i,...o};(null==(n=c.buttons)?void 0:n.ok)&&(c.buttons.ok.disabled=!0),!1!==(null==(l=a.onOpen)?void 0:l.call(a,e,i,c,new h))&&!1!==(null==(r=null==o?void 0:o.onOpen)?void 0:r.call(o,e,i,c,new h))&&(e.updateProps(c),setTimeout((()=>{var t;const o=e.getProps();null==(t=o.onOpened)||t.call(o,e,o.dataSet,new h)}),0))})(c),c.close=((e,t)=>()=>{var o,n;!1!==(null==(o=t.onClosing)?void 0:o.call(t,e,new h))&&(e.model.isFormDirty()&&t.confirmChanges?w.confirm({language:t.language,content:t.closeFormConfirmMessage??e.t("cancelChangesQn"),okText:e.t("yes"),cancelText:e.t("no"),onOk:()=>{var o;null==(o=t.onCancel)||o.call(t,e,new h),e.forceClose()}}):(null==(n=t.onCancel)||n.call(t,e,new h),e.forceClose()))})(c,t),c.forceClose=(e=>()=>{var t,o;const n=e.getProps();if(!1===(null==(t=n.onClosing)?void 0:t.call(n,e,new h)))return!1;e.updateProps({open:!1}),null==(o=n.onClosed)||o.call(n,e,new h)})(c);const[u,d]=((t,o)=>{const n=x(t,o),[l,r]=e.useState(n);return e.useEffect((()=>{r(n)}),[n]),[l,r]})(t,c);return c.getTitle=(e=>()=>e)(u),c.setTitle=(e=>t=>{e(t)})(d),c},B=({buttons:e,formApi:o,formProps:n,modalFormProps:l})=>{const r=l.modalProps;return t.jsx(P,{open:l.open,maskProps:{style:{zIndex:1060}},wrapProps:{style:{zIndex:1060}},modalId:o.getId(),centered:!0,maskClosable:!1,keyboard:!1,destroyOnClose:!0,title:o.getTitle(),onCancel:o.close,footer:t.jsx(a,{buttons:e,apiRef:o.getButtonsApi(),color:n.colorType,arrowsSelection:n.arrowsButtonsSelection,style:n.buttonsRowStyle,styles:n.buttonsRowStyles,context:o}),height:l.height,maxHeight:l.maxHeight,minHeight:l.minHeight,width:l.width,maxWidth:l.maxWidth,minWidth:l.minWidth,...r,children:l.open?t.jsx(b,{apiRef:o,...n,formStyle:{height:"100%",width:"100%",...n.formStyle},containerStyle:{height:"100%",...n.containerStyle},_overriddenApi:{getId:!0,t:!0,getButtonsApi:!0,getProps:!0,setProps:!0,updateProps:!0,getIsMounted:!0}}):null})},F=o=>{y();const[n,l]=u(o),r=(o=>e.useMemo((()=>{const e={onDataFetchError:(e,n,l)=>{var r;if(null==(r=null==o?void 0:o.onDataFetchError)||r.call(o,e,n,l),l.isPrevented())return;l.preventOriginal();const s=w.confirm({language:o.language,title:n.t("error"),content:t.jsx(C,{error:e,extraMessage:n.t("tryAgainQt")}),colorType:"danger",buttons:{ok:{onClick:()=>{s.destroy(),n.model.fetchData()}},cancel:{onClick:()=>{var e;s.destroy(),null==(e=n.forceClose)||e.call(n)}}}})},onSubmit:(e,t,n,l)=>{var r,s,i,a,c,u,d;const g=null==(r=null==o?void 0:o.onSubmit)?void 0:r.call(o,e,t,n,l);return l.isPrevented()||(l.preventOriginal(),null==(i=(s=n.getButtonsApi()).disabled)||i.call(s,"ok",!0),null==(c=(a=n.getButtonsApi()).disabled)||c.call(a,"cancel",!0),o.confirmChanges||null==(d=(u=n.getButtonsApi()).loading)||d.call(u,"ok",!0)),g},onSubmitSuccess:(e,t,n,l,r)=>{var s;null==(s=null==o?void 0:o.onSubmitSuccess)||s.call(o,e,t,n,l,r),r.isPrevented()||l.forceClose()},onSubmitComplete:(e,t,n,l,r)=>{var s,i,a,c,u,d,g;null==(s=null==o?void 0:o.onSubmitComplete)||s.call(o,e,t,n,l,r),r.isPrevented()||(r.preventOriginal(),null==(a=(i=l.getButtonsApi()).disabled)||a.call(i,"ok",!1),null==(u=(c=l.getButtonsApi()).disabled)||u.call(c,"cancel",!1),null==(g=(d=l.getButtonsApi()).loading)||g.call(d,"ok",!1))}};return{...o,...e}}),[o]))(n),[,s]=I(r),i=A({props:r,setProps:l}),a=((t,o)=>e.useMemo((()=>{const e={ok:{position:"right",active:"view"!==o.formMode,hidden:"view"===o.formMode,title:t.t("ok"),disabled:!0,hotKeys:[{key:"enter",ctrl:!0},{key:"s",ctrl:!0},{key:"ы",ctrl:!0}],onClick:()=>{t.submitForm()}},cancel:{position:"right",title:t.t("cancel"),hotKeys:[{key:"escape"}],active:"view"===o.formMode,onClick:()=>{t.close()}}};return c(e,o.buttons)}),[t,o.buttons,o.formMode]))(i,r);return t.jsx(B,{formApi:i,modalFormProps:r,formProps:s,buttons:a})},I=t=>e.useMemo((()=>{const[e,o]=S(t,{closeFormConfirmMessage:!0,modalProps:!0,title:!0,open:!0,width:!0,maxWidth:!0,minWidth:!0,height:!0,minHeight:!0,maxHeight:!0,onCancel:!0,onOpen:!0,onClosed:!0,onClosing:!0,onOpened:!0,language:!0,translation:!0});return o.buttons=null,[e,{...o,language:t.language,translation:t.translation}]}),[t]);export{F as D,O as d,S as s};
