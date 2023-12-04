import{r as s,j as o,D as l}from"./index-bd83bb7b.js";import{P as n,C as p,S as d,d as u,a as c}from"./docco-5da19923.js";import{B as f}from"./index-70b17d15.js";import{D as F}from"./dFormModal-65650ab1.js";import{T as b}from"./tabulatorGridField-c53a9992.js";import{I as r}from"./inputField-0d7c82a2.js";import{F as e}from"./buttonsProps-f993c1ba.js";import{b as h,a as x}from"./tabulatorData-cbbee66e.js";import"./tabulatorGrid-c8d5ca90.js";import"./EyeOutlined-9bf5471e.js";import"./DeleteOutlined-cdccffb7.js";import"./index-45228462.js";import"./SearchOutlined-5813b664.js";const a={},i={},P={apiRef:i,formId:"formWithGrid",fieldsProps:{name:{component:r,label:"Name"},age:{component:r,label:"Age"},col:{component:r,label:"Favourite Color"},dob:{component:r,label:"Day of Birth"}},confirmChanges:!0,buttons:e(i)},C={formId:"Test form",apiRef:a,confirmChanges:!0,fieldsProps:{users:{component:b,label:"Пользователи",columns:x,layout:"fitColumns",height:300,editFormProps:P,confirmDelete:!0}},width:900,buttons:e(a)},D=()=>{const t=s.useCallback(()=>{a.open("update",{users:h})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(f,{onClick:t,children:"Open form"}),o.jsx(F,{...C})]})]})},R=t=>{const m=`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField";
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {FormLayoutSwitch} from "../../common/buttonsProps";
import {TabulatorBaseColumns, TabulatorPlainData} from "../../data/tabulatorData";
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
`;return o.jsxs(n,{children:[o.jsx("div",{children:o.jsx(D,{})}),o.jsx(l,{}),o.jsx("div",{children:o.jsx(p,{items:[{key:1,label:"Show source",children:o.jsx(d,{language:"javascript",style:t.darkMode?u:c,showLineNumbers:!0,children:m})}]})})]})};export{R as Page3687c95c50aa4a1abf04bd23e33c8262,R as default};
