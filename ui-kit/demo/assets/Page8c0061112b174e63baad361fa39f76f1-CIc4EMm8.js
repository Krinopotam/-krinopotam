const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CGS66BNA.js","assets/default-highlight-CcEIfVOS.js","assets/index-D5qwc_YF.js"])))=>i.map(i=>d[i]);
import{r as e,j as o,_ as m,D as a}from"./index-D5qwc_YF.js";import{B as l}from"./modal-Ba-Ua4rS.js";import{D as s}from"./dFormModal-CeNnxCAb.js";import{I as i}from"./inputField-CQ70iDwA.js";import{D as n}from"./dateTimeField-7rGRd0rq.js";import{F as p}from"./buttonsProps-BySAuIC5.js";import{P as d,C as u,d as c,c as f}from"./darcula-DCElNxcl.js";import"./dForm-D9Yj5CGv.js";import"./index-DfWwWpfW.js";import"./modal-BT6G55W2.js";import"./index-C64nsPO3.js";import"./SearchOutlined-C5suFlPC.js";import"./useIcons-c7Gyy1VW.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,fieldsProps:{nameIn:{component:i,label:"Имя входящего",inlineGroup:"row1"},dateIn:{component:n,label:"Дата входа",inlineGroup:"row1",width:150},nameOut:{component:i,label:"Имя выходящего",inlineGroup:"row2"},dateOut:{component:n,label:"Дата выхода",inlineGroup:"row2",width:150}},buttons:p(t)},F=()=>{const r=e.useCallback(()=>{t.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(l,{onClick:r,children:"Open form"}),o.jsx(s,{...h})]})},x=e.lazy(()=>m(()=>import("./index-CGS66BNA.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),A=r=>o.jsxs(d,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(u,{items:[{key:1,label:"Show source",children:o.jsx(e.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(x,{language:"tsx",style:r.darkMode?c:f,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {DateTimeField} from @krinopotam/ui-kit/dForm/fields/dateTime/dateTimeField";
import {FormLayoutSwitch} from "../../common/buttonsProps";
const formApi = {} as IDFormModalApi;
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        nameIn: {component: InputField, label: 'Имя входящего', inlineGroup: 'row1'},
        dateIn: {component: DateTimeField, label: 'Дата входа', inlineGroup: 'row1', width: 150},
        nameOut: {component: InputField, label: 'Имя выходящего', inlineGroup: 'row2'},
        dateOut: {component: DateTimeField, label: 'Дата выхода', inlineGroup: 'row2', width: 150},
    },
    buttons: FormLayoutSwitch(formApi),
}
export const ModalFormWithGroups = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('create');
    }, []);
    return (
        <div style={{maxWidth: 500}}>
            <Button onClick={onClick}>Open form</Button>
            <DFormModal {...formProps} />
        </div>
    );
};
`})})}]})})]});export{A as Page8c0061112b174e63baad361fa39f76f1,A as default};
