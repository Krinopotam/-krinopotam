import{j as o,D as a}from"./index-B_ePoftH.js";import{P as e,C as i,h as l,d as m,a as n}from"./docco-BMPGIKWL.js";import{T as s}from"./tabulatorGrid-BoxMDKyU.js";import{I as r}from"./inputField-Di5-nvCH.js";import{N as u}from"./numberField-ORwKBsIX.js";import{b as d,T as p,a as c}from"./tabulatorData-DSn3rW_I.js";import"./messageBox-BvRGMm6l.js";import"./dForm-CcoZZ7WD.js";import"./index-CFabrBDT.js";import"./dFormModal-M3vltEal.js";import"./modal-CKEVbAO9.js";import"./EyeOutlined-MiG0h1ef.js";import"./DeleteOutlined-RKHBD1Gm.js";import"./index-BmPwU4as.js";import"./SearchOutlined-fNJs2EgW.js";const b={formId:"gridEditForm",layout:"horizontal",fieldsProps:{name:{component:r,label:"Name"},age:{component:u,label:"Age"},col:{component:r,label:"Favourite Color"},dob:{component:r,label:"Day of Birth"}},confirmChanges:!0},f={id:"TabulatorGridWithForm",columnDefaults:d,columns:p,dataSet:c,multiSelect:!0,editFormProps:b,confirmDelete:!0,height:"100%",layout:"fitColumns",language:"en"},h=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простого грида Tabulator с формой редактирование"}),o.jsx("div",{style:{backgroundColor:"bisque",padding:5,height:300},children:o.jsx(s,{...f})})]}),E=t=>o.jsxs(e,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(i,{items:[{key:1,label:"Show source",children:o.jsx(l,{language:"javascript",style:t.darkMode?m:n,showLineNumbers:!0,children:`
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
`})}]})})]});export{E as Page894523758ab04f44b00b0cef5d2e5566,E as default};
