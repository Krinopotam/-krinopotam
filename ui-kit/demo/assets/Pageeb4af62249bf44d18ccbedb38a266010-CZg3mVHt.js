import{r as m,j as o,D as s}from"./index-CEW5Pw51.js";import{P as l,C as n,h as p,d as u,a as d}from"./docco-BDmKSriJ.js";import{B as c}from"./index-XDwG7I6Z.js";import{D as f}from"./dFormModal-CQxmvlme.js";import{T as b}from"./tabulatorGridField-BVSkdCaP.js";import{I as r}from"./inputField-BWxo0HQm.js";import{F as i}from"./buttonsProps-C5HxqOnh.js";import{a as F,b as h,T as D}from"./tabulatorData-CS8n7XKW.js";import"./tabulatorGrid-D_Dw4JJ8.js";import"./EyeOutlined-CTrlI0WT.js";import"./DeleteOutlined-DC7B5UxI.js";import"./index-Csn6HTCS.js";import"./SearchOutlined-3RvbUWh0.js";const a={},e={},C={apiRef:e,formId:"formWithGrid",fieldsProps:{name:{component:r,label:"Name"},age:{component:r,label:"Age"},col:{component:r,label:"Favourite Color"},dob:{component:r,label:"Day of Birth"}},confirmChanges:!0,buttons:i(e)},P={formId:"Test form",apiRef:a,confirmChanges:!0,fieldsProps:{users:{component:b,label:"Пользователи",columnDefaults:h,columns:D,layout:"fitColumns",height:300,editFormProps:C,confirmDelete:!0}},width:900,buttons:i(a)},x=()=>{const t=m.useCallback(()=>{a.open("update",{users:F})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(c,{onClick:t,children:"Open form"}),o.jsx(f,{...P})]})]})},S=t=>o.jsxs(l,{children:[o.jsx("div",{children:o.jsx(x,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(n,{items:[{key:1,label:"Show source",children:o.jsx(p,{language:"javascript",style:t.darkMode?u:d,showLineNumbers:!0,children:`
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
`})}]})})]});export{S as Pageeb4af62249bf44d18ccbedb38a266010,S as default};
