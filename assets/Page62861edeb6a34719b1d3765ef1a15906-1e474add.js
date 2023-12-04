import{r as m,j as o,D as a}from"./index-c797af55.js";import{P as l,C as s,S as p,d,a as u}from"./docco-e40295f3.js";import{B as c}from"./index-8c229de7.js";import{D as f}from"./dFormModal-cedb0440.js";import{I as e}from"./inputField-d14c5b2b.js";import{D as i}from"./dateTimeField-91ec61c3.js";import{F}from"./buttonsProps-f5de3b41.js";import"./index-e62611d6.js";import"./EyeOutlined-8bcb47e2.js";import"./SearchOutlined-f62686db.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,fieldsProps:{nameIn:{component:e,label:"Имя входящего",inlineGroup:"row1"},dateIn:{component:i,label:"Дата входа",inlineGroup:"row1",width:150},nameOut:{component:e,label:"Имя выходящего",inlineGroup:"row2"},dateOut:{component:i,label:"Дата выхода",inlineGroup:"row2",width:150}},buttons:F(t)},b=()=>{const r=m.useCallback(()=>{t.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(c,{onClick:r,children:"Open form"}),o.jsx(f,{...h})]})},y=r=>{const n=`
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
`;return o.jsxs(l,{children:[o.jsx("div",{children:o.jsx(b,{})}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(s,{items:[{key:1,label:"Show source",children:o.jsx(p,{language:"javascript",style:r.darkMode?d:u,showLineNumbers:!0,children:n})}]})})]})};export{y as Page62861edeb6a34719b1d3765ef1a15906,y as default};
