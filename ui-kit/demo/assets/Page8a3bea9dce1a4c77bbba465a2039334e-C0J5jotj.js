const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CyxzPzPK.js","assets/default-highlight-BA4pzhEA.js","assets/index-Cpuh8Ebd.js"])))=>i.map(i=>d[i]);
import{r as e,j as o,_ as m,D as a}from"./index-Cpuh8Ebd.js";import{b as l}from"./buttonsRow-MpDC2SN8.js";import{D as s}from"./dFormModal-iIvnEeWS.js";import{I as i}from"./inputField-DrHpZyP5.js";import{D as n}from"./dateTimeField-DMD1m-to.js";import{F as p}from"./buttonsProps-CFHTGBOJ.js";import{P as d,C as c,d as u,c as f}from"./darcula-hcLbMwDB.js";import"./dForm-t1Ccos62.js";import"./modal-g5li7x1J.js";import"./index-DNdv76Wr.js";import"./modal-DJlUd0AK.js";import"./index-B7DtBnw9.js";import"./SearchOutlined-mv_WcC67.js";import"./useIcons-BgIqUolS.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,fieldsProps:{nameIn:{component:i,label:"Имя входящего",inlineGroup:"row1"},dateIn:{component:n,label:"Дата входа",inlineGroup:"row1",width:150},nameOut:{component:i,label:"Имя выходящего",inlineGroup:"row2"},dateOut:{component:n,label:"Дата выхода",inlineGroup:"row2",width:150}},buttons:p(t)},F=()=>{const r=e.useCallback(()=>{t.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(l,{onClick:r,children:"Open form"}),o.jsx(s,{...h})]})},b=e.lazy(()=>m(()=>import("./index-CyxzPzPK.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),_=r=>o.jsxs(d,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(c,{items:[{key:1,label:"Show source",children:o.jsx(e.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(b,{language:"tsx",style:r.darkMode?u:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{_ as Page8a3bea9dce1a4c77bbba465a2039334e,_ as default};
