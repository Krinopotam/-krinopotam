import{j as o,D as a}from"./index-OT-fUFlw.js";import{P as e,C as i,h as l,d as m,a as n}from"./docco-Dp5WB1My.js";import{T as s}from"./tabulatorGrid-BdayD2VY.js";import{I as r}from"./inputField-Coz0I3xz.js";import{N as u}from"./numberField-BKRK3cJk.js";import{b as d,T as p,a as c}from"./tabulatorData-Bua633a3.js";import"./messageBox-deXCqDea.js";import"./dForm-CXdkNth1.js";import"./index-BzsQSyIK.js";import"./dFormModal-Brw-56ya.js";import"./modal-Cu7Nzp09.js";import"./EyeOutlined-BLUlGsNj.js";import"./DeleteOutlined-BFYA2MP_.js";import"./index-BXyp7rr8.js";import"./SearchOutlined-q14VqUwO.js";const b={formId:"gridEditForm",layout:"horizontal",fieldsProps:{name:{component:r,label:"Name"},age:{component:u,label:"Age"},col:{component:r,label:"Favourite Color"},dob:{component:r,label:"Day of Birth"}},confirmChanges:!0},f={id:"TabulatorGridWithForm",columnDefaults:d,columns:p,dataSet:c,multiSelect:!0,editFormProps:b,confirmDelete:!0,height:"100%",layout:"fitColumns",language:"en"},h=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простого грида Tabulator с формой редактирование"}),o.jsx("div",{style:{backgroundColor:"bisque",padding:5,height:300},children:o.jsx(s,{...f})})]}),E=t=>o.jsxs(e,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(i,{items:[{key:1,label:"Show source",children:o.jsx(l,{language:"javascript",style:t.darkMode?m:n,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {NumberField} from @krinopotam/ui-kit/dForm/fields/number/numberField';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
const editFormConfig: IDFormModalProps = {
    formId: 'gridEditForm',
    layout: 'horizontal',
    fieldsProps: {
        name: {component: InputField, label: 'Name'},
        age: {component: NumberField, label: 'Age'},
        col: {component: InputField, label: 'Favourite Color'},
        dob: {component: InputField, label: 'Day of Birth'},
    },
    confirmChanges: true,
};
const props: IGridProps = {
    id: 'TabulatorGridWithForm',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    dataSet: TabulatorPlainData,
    multiSelect: true,
    editFormProps: editFormConfig,
    confirmDelete: true,
    height: '100%',
    layout: 'fitColumns',
    language: 'en',
};
export const WithForm = (): React.JSX.Element => {
    return (
        <>
            <div style={{backgroundColor: 'bisque', padding: 5, height: 300}}>
                <TabulatorGrid {...props} />
            </div>
        </>
    );
};
`})}]})})]});export{E as Page6644df0e4a3f49cdad0aa9e1f88ae4e5,E as default};
