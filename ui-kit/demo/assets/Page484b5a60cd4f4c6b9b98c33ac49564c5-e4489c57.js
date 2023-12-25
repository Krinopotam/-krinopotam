import{r as l,j as o,D as s}from"./index-3024f328.js";import{P as n,C as p,S as u,d,a as c}from"./docco-8e796366.js";import{B as f}from"./index-901967cb.js";import{D as b}from"./dFormModal-09fd0649.js";import{T as F}from"./tabulatorGridField-47eb5197.js";import{I as r}from"./inputField-a558b472.js";import{F as i}from"./buttonsProps-718efc56.js";import{a as h,b as D,T as C}from"./tabulatorData-f1a03775.js";import"./tabulatorGrid-a1a2b210.js";import"./EyeOutlined-ff2ae648.js";import"./DeleteOutlined-73630e69.js";import"./index-83c0c0ea.js";import"./SearchOutlined-8979e289.js";const a={},e={},x={apiRef:e,formId:"formWithGrid",fieldsProps:{name:{component:r,label:"Name"},age:{component:r,label:"Age"},col:{component:r,label:"Favourite Color"},dob:{component:r,label:"Day of Birth"}},confirmChanges:!0,buttons:i(e)},P={formId:"Test form",apiRef:a,confirmChanges:!0,fieldsProps:{users:{component:F,label:"Пользователи",columnDefaults:D,columns:C,layout:"fitColumns",height:300,editFormProps:x,confirmDelete:!0}},width:900,buttons:i(a)},T=()=>{const t=l.useCallback(()=>{a.open("update",{users:h})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(f,{onClick:t,children:"Open form"}),o.jsx(b,{...P})]})]})},L=t=>{const m=`
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
`;return o.jsxs(n,{children:[o.jsx("div",{children:o.jsx(T,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(p,{items:[{key:1,label:"Show source",children:o.jsx(u,{language:"javascript",style:t.darkMode?d:c,showLineNumbers:!0,children:m})}]})})]})};export{L as Page484b5a60cd4f4c6b9b98c33ac49564c5,L as default};
