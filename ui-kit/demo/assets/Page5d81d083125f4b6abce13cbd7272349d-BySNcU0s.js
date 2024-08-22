import{r as n,j as o,D as m}from"./index-BRcPwwbH.js";import{P as a,C as l,h as p,d as s,a as d}from"./docco-8ZfxCt3s.js";import{B as c}from"./messageBox-Dgk4xpFW.js";import{D as u}from"./dFormModal-TbW2WofU.js";import{I as e}from"./inputField-CVlfFeBg.js";import{D as i}from"./dateTimeField-CiNYwCus.js";import{F as f}from"./buttonsProps-mfzB23hP.js";import"./dForm-CIlSW0lt.js";import"./index-Bcoz37Cc.js";import"./modal-BltPdufQ.js";import"./index-Bcnila5k.js";import"./EyeOutlined-CTsTM-Dg.js";import"./SearchOutlined-DcT_nl9L.js";import"./useIcons-BREFb3H_.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,fieldsProps:{nameIn:{component:e,label:"Имя входящего",inlineGroup:"row1"},dateIn:{component:i,label:"Дата входа",inlineGroup:"row1",width:150},nameOut:{component:e,label:"Имя выходящего",inlineGroup:"row2"},dateOut:{component:i,label:"Дата выхода",inlineGroup:"row2",width:150}},buttons:f(t)},F=()=>{const r=n.useCallback(()=>{t.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(c,{onClick:r,children:"Open form"}),o.jsx(u,{...h})]})},A=r=>o.jsxs(a,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(l,{items:[{key:1,label:"Show source",children:o.jsx(p,{language:"javascript",style:r.darkMode?s:d,showLineNumbers:!0,children:`
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
`})}]})})]});export{A as Page5d81d083125f4b6abce13cbd7272349d,A as default};
