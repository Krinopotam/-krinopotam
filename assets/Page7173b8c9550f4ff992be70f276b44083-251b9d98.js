import{r as m,j as o,D as a}from"./index-23555c5c.js";import{P as l,C as s,S as p,d,a as u}from"./docco-c24c9fde.js";import{B as c}from"./index-e5590f2c.js";import{D as f}from"./dFormModal-9d6a497b.js";import{I as e}from"./inputField-52d55a73.js";import{D as i}from"./dateTimeField-32a17fbb.js";import{F}from"./buttonsProps-b1195f93.js";import"./index-c1cedb01.js";import"./EyeOutlined-cf850273.js";import"./SearchOutlined-d23aaaab.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,fieldsProps:{nameIn:{component:e,label:"Имя входящего",inlineGroup:"row1"},dateIn:{component:i,label:"Дата входа",inlineGroup:"row1",width:150},nameOut:{component:e,label:"Имя выходящего",inlineGroup:"row2"},dateOut:{component:i,label:"Дата выхода",inlineGroup:"row2",width:150}},buttons:F(t)},b=()=>{const r=m.useCallback(()=>{t.open("create")},[]);return o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(c,{onClick:r,children:"Open form"}),o.jsx(f,{...h})]})},y=r=>{const n=`
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
`;return o.jsxs(l,{children:[o.jsx("div",{children:o.jsx(b,{})}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(s,{items:[{key:1,label:"Show source",children:o.jsx(p,{language:"javascript",style:r.darkMode?d:u,showLineNumbers:!0,children:n})}]})})]})};export{y as Page7173b8c9550f4ff992be70f276b44083,y as default};
