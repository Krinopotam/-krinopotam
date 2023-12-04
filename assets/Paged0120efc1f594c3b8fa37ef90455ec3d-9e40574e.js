import{j as o,D as e}from"./index-c797af55.js";import{P as i,C as l,S as m,d as n,a as s}from"./docco-e40295f3.js";import{T as u}from"./tabulatorGrid-31aae25d.js";import{I as r}from"./inputField-d14c5b2b.js";import{N as d}from"./numberField-e2f9f64e.js";import{T as p,a as c,b}from"./tabulatorData-7c778850.js";import"./index-8c229de7.js";import"./dFormModal-cedb0440.js";import"./EyeOutlined-8bcb47e2.js";import"./DeleteOutlined-bba666a5.js";import"./index-e62611d6.js";import"./SearchOutlined-f62686db.js";const f={formId:"gridEditForm",layout:"horizontal",fieldsProps:{name:{component:r,label:"Name"},age:{component:d,label:"Age"},col:{component:r,label:"Favourite Color"},dob:{component:r,label:"Day of Birth"}},confirmChanges:!0},h={id:"TabulatorGridWithForm",columnDefaults:p,columns:c,dataSet:b,multiSelect:!0,editFormProps:f,confirmDelete:!0,height:"100%",layout:"fitColumns"},F=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простого грида Tabulator с формой редактирование"}),o.jsx("div",{style:{backgroundColor:"bisque",padding:5,height:300},children:o.jsx(u,{...h})})]}),G=t=>{const a=`
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
`;return o.jsxs(i,{children:[o.jsx("div",{children:o.jsx(F,{})}),o.jsx(e,{}),o.jsx("div",{children:o.jsx(l,{items:[{key:1,label:"Show source",children:o.jsx(m,{language:"javascript",style:t.darkMode?n:s,showLineNumbers:!0,children:a})}]})})]})};export{G as Paged0120efc1f594c3b8fa37ef90455ec3d,G as default};
