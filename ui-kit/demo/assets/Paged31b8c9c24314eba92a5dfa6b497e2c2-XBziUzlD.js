import{r as n,j as o,D as m}from"./index-CEW5Pw51.js";import{P as a,C as l,h as s,d as p,a as d}from"./docco-BDmKSriJ.js";import{B as c}from"./index-XDwG7I6Z.js";import{D as u}from"./dFormModal-CQxmvlme.js";import{I as e}from"./inputField-BWxo0HQm.js";import{D as i}from"./dateTimeField-QhPZ3x3K.js";import{F as f}from"./buttonsProps-C5HxqOnh.js";import"./index-Csn6HTCS.js";import"./EyeOutlined-CTrlI0WT.js";import"./SearchOutlined-3RvbUWh0.js";import"./useIcons-C2JgOeKM.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,fieldsProps:{nameIn:{component:e,label:"Имя входящего",inlineGroup:"row1"},dateIn:{component:i,label:"Дата входа",inlineGroup:"row1",width:150},nameOut:{component:e,label:"Имя выходящего",inlineGroup:"row2"},dateOut:{component:i,label:"Дата выхода",inlineGroup:"row2",width:150}},buttons:f(t)},F=()=>{const r=n.useCallback(()=>{t.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(c,{onClick:r,children:"Open form"}),o.jsx(u,{...h})]})},y=r=>o.jsxs(a,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(l,{items:[{key:1,label:"Show source",children:o.jsx(s,{language:"javascript",style:r.darkMode?p:d,showLineNumbers:!0,children:`
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
`})}]})})]});export{y as Paged31b8c9c24314eba92a5dfa6b497e2c2,y as default};
