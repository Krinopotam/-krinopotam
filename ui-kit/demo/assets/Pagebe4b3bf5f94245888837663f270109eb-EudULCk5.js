const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-PpfmoLrq.js","assets/default-highlight-CWL5sYcU.js","assets/index-DLyGJszd.js"])))=>i.map(i=>d[i]);
import{r as e,j as o,_ as m,D as a}from"./index-DLyGJszd.js";import{b as l}from"./mergeButtons-OmCcH4N9.js";import{D as s}from"./dFormModal-L6NStncr.js";import{I as i}from"./inputField-CrUAS0Ct.js";import{D as n}from"./dateTimeField-Bt5Ip1z5.js";import{F as p}from"./buttonsProps-CVwH8epV.js";import{P as d,C as u,d as c,c as f}from"./darcula-BfEmJZ6D.js";import"./dForm-8o49JMOI.js";import"./modal-CjmvIDqE.js";import"./index-CGhTEYKp.js";import"./modal-BEhuKh3S.js";import"./index-DlQkoOxi.js";import"./SearchOutlined-B4yj2tsd.js";import"./useIcons-BA3OUTWw.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,fieldsProps:{nameIn:{component:i,label:"Имя входящего",inlineGroup:"row1"},dateIn:{component:n,label:"Дата входа",inlineGroup:"row1",width:150},nameOut:{component:i,label:"Имя выходящего",inlineGroup:"row2"},dateOut:{component:n,label:"Дата выхода",inlineGroup:"row2",width:150}},buttons:p(t)},F=()=>{const r=e.useCallback(()=>{t.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(l,{onClick:r,children:"Open form"}),o.jsx(s,{...h})]})},b=e.lazy(()=>m(()=>import("./index-PpfmoLrq.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),_=r=>o.jsxs(d,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(u,{items:[{key:1,label:"Show source",children:o.jsx(e.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(b,{language:"tsx",style:r.darkMode?c:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{_ as Pagebe4b3bf5f94245888837663f270109eb,_ as default};
