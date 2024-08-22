import{r as n,j as o,D as m}from"./index-OT-fUFlw.js";import{P as a,C as l,h as p,d as s,a as d}from"./docco-Dp5WB1My.js";import{B as c}from"./messageBox-deXCqDea.js";import{D as u}from"./dFormModal-Brw-56ya.js";import{I as e}from"./inputField-Coz0I3xz.js";import{D as i}from"./dateTimeField-BKqkPkVT.js";import{F as f}from"./buttonsProps-BMlR5a_A.js";import"./dForm-CXdkNth1.js";import"./index-BzsQSyIK.js";import"./modal-Cu7Nzp09.js";import"./index-BXyp7rr8.js";import"./EyeOutlined-BLUlGsNj.js";import"./SearchOutlined-q14VqUwO.js";import"./useIcons-BZ-gWI9M.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,fieldsProps:{nameIn:{component:e,label:"Имя входящего",inlineGroup:"row1"},dateIn:{component:i,label:"Дата входа",inlineGroup:"row1",width:150},nameOut:{component:e,label:"Имя выходящего",inlineGroup:"row2"},dateOut:{component:i,label:"Дата выхода",inlineGroup:"row2",width:150}},buttons:f(t)},F=()=>{const r=n.useCallback(()=>{t.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(c,{onClick:r,children:"Open form"}),o.jsx(u,{...h})]})},A=r=>o.jsxs(a,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(l,{items:[{key:1,label:"Show source",children:o.jsx(p,{language:"javascript",style:r.darkMode?s:d,showLineNumbers:!0,children:`
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
`})}]})})]});export{A as Pagec8bc66c24941456da12e0d6d681835b3,A as default};
