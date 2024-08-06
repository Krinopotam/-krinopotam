import{j as o,D as e}from"./index-Bl-1kopd.js";import{P as a,C as i,h as l,d as m,a as n}from"./docco-DI1KRtYq.js";import{T as s}from"./tabulatorGrid-BopOrzIc.js";import{I as r}from"./inputField-BJn_KJf5.js";import{N as u}from"./numberField-obfwZ_ue.js";import{b as d,T as p,a as c}from"./tabulatorData-_B0aRVvD.js";import"./index-Cz3A2iSd.js";import"./dFormModal-COFbO3rY.js";import"./EyeOutlined-VtVLuKtp.js";import"./DeleteOutlined-C4ZPs8sE.js";import"./index-dliuYOsp.js";import"./SearchOutlined-Drmuc8b0.js";const b={formId:"gridEditForm",layout:"horizontal",fieldsProps:{name:{component:r,label:"Name"},age:{component:u,label:"Age"},col:{component:r,label:"Favourite Color"},dob:{component:r,label:"Day of Birth"}},confirmChanges:!0},f={id:"TabulatorGridWithForm",columnDefaults:d,columns:p,dataSet:c,multiSelect:!0,editFormProps:b,confirmDelete:!0,height:"100%",layout:"fitColumns"},h=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простого грида Tabulator с формой редактирование"}),o.jsx("div",{style:{backgroundColor:"bisque",padding:5,height:300},children:o.jsx(s,{...f})})]}),G=t=>o.jsxs(a,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(e,{}),o.jsx("div",{children:o.jsx(i,{items:[{key:1,label:"Show source",children:o.jsx(l,{language:"javascript",style:t.darkMode?m:n,showLineNumbers:!0,children:`
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
`})}]})})]});export{G as Pagec1189d410ed549ef8605db0ff6ac4e6e,G as default};
