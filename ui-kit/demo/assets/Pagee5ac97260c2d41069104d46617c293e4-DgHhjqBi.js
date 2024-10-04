const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BCkY1BI4.js","assets/default-highlight-BkRzspxv.js","assets/index-D4bHa_3o.js"])))=>i.map(i=>d[i]);
import{r as e,j as o,_ as m,D as a}from"./index-D4bHa_3o.js";import{B as l}from"./modal-Cje67qL2.js";import{D as s}from"./dFormModal-BCjjhs8Y.js";import{I as i}from"./inputField-DGR4oCWc.js";import{D as n}from"./dateTimeField-BG9nSeY2.js";import{F as p}from"./buttonsProps-DqS9-gaB.js";import{P as d,C as c,d as u,c as f}from"./darcula-DdlBXz-Q.js";import"./dForm-3m-O6pho.js";import"./index-BrKQ3NvS.js";import"./modal-B1kKEzi9.js";import"./index-D0MhsY60.js";import"./SearchOutlined-C-5aAKd9.js";import"./useIcons-DVS72p3F.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,fieldsProps:{nameIn:{component:i,label:"Имя входящего",inlineGroup:"row1"},dateIn:{component:n,label:"Дата входа",inlineGroup:"row1",width:150},nameOut:{component:i,label:"Имя выходящего",inlineGroup:"row2"},dateOut:{component:n,label:"Дата выхода",inlineGroup:"row2",width:150}},buttons:p(t)},F=()=>{const r=e.useCallback(()=>{t.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(l,{onClick:r,children:"Open form"}),o.jsx(s,{...h})]})},x=e.lazy(()=>m(()=>import("./index-BCkY1BI4.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),A=r=>o.jsxs(d,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(c,{items:[{key:1,label:"Show source",children:o.jsx(e.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(x,{language:"tsx",style:r.darkMode?u:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{A as Pagee5ac97260c2d41069104d46617c293e4,A as default};
