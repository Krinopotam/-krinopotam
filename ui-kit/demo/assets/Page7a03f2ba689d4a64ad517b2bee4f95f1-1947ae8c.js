import{r as l,j as o,D as s}from"./index-0409158c.js";import{P as n,C as p,S as d,d as u,a as c}from"./docco-fa9c9fcc.js";import{B as f}from"./index-da9b0dd9.js";import{D as b}from"./dFormModal-235aed86.js";import{T as F}from"./tabulatorGridField-c42e486a.js";import{I as r}from"./inputField-76b34995.js";import{F as i}from"./buttonsProps-1fa0e94e.js";import{b as h,T as D,a as C}from"./tabulatorData-fbb7c043.js";import"./tabulatorGrid-22da0f8d.js";import"./EyeOutlined-c44a8289.js";import"./DeleteOutlined-75656d28.js";import"./index-17293d60.js";import"./SearchOutlined-d2aaca99.js";const a={},e={},x={apiRef:e,formId:"formWithGrid",fieldsProps:{name:{component:r,label:"Name"},age:{component:r,label:"Age"},col:{component:r,label:"Favourite Color"},dob:{component:r,label:"Day of Birth"}},confirmChanges:!0,buttons:i(e)},P={formId:"Test form",apiRef:a,confirmChanges:!0,fieldsProps:{users:{component:F,label:"Пользователи",columnDefaults:D,columns:C,layout:"fitColumns",height:300,editFormProps:x,confirmDelete:!0}},width:900,buttons:i(a)},T=()=>{const t=l.useCallback(()=>{a.open("update",{users:h})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(f,{onClick:t,children:"Open form"}),o.jsx(b,{...P})]})]})},L=t=>{const m=`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField";
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {FormLayoutSwitch} from "../../common/buttonsProps";
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from "../../data/tabulatorData";
const formApi = {} as IDFormModalApi;
const editFormApi = {} as IDFormModalApi;
/** Tabulator edit form props */
const editFormProps: IDFormModalProps = {
    apiRef:editFormApi,
    formId: 'formWithGrid',
    fieldsProps: {
        name: {component: InputField, label: 'Name'} ,
        age: {component: InputField, label: 'Age'} ,
        col: {component: InputField, label: 'Favourite Color'},
        dob: {component: InputField, label: 'Day of Birth'} ,
    },
    confirmChanges: true,
    buttons: FormLayoutSwitch(editFormApi),
};
/** main modal form props */
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        users: {
            component: TabulatorGridField,
            label: 'Пользователи',
            columnDefaults:TabulatorBaseColumnsDef,
            columns: TabulatorBaseColumns,
            layout: 'fitColumns',
            height: 300,
            editFormProps: editFormProps,
            confirmDelete: true,
        },
    },
    width: 900,
    buttons: FormLayoutSwitch(formApi),
};
export const FormWithGrid = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('update', {users: TabulatorPlainData});
    }, []);
    return (
        <>
            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Open form</Button>
                <DFormModal {...formProps} />
            </div>
        </>
    );
};
`;return o.jsxs(n,{children:[o.jsx("div",{children:o.jsx(T,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(p,{items:[{key:1,label:"Show source",children:o.jsx(d,{language:"javascript",style:t.darkMode?u:c,showLineNumbers:!0,children:m})}]})})]})};export{L as Page7a03f2ba689d4a64ad517b2bee4f95f1,L as default};
