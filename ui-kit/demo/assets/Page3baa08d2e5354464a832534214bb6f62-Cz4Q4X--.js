import{j as e,D as a}from"./index-B_ePoftH.js";import{P as i,C as l,h as m,d as n,a as s}from"./docco-BMPGIKWL.js";import{T as d}from"./tabulatorGrid-BoxMDKyU.js";import{T as u}from"./treeSelectField-CdsUepGc.js";import{I as t}from"./inputField-Di5-nvCH.js";import{N as p}from"./numberField-ORwKBsIX.js";import{f as o,b as c,T as f}from"./tabulatorData-DSn3rW_I.js";import"./messageBox-BvRGMm6l.js";import"./dForm-CcoZZ7WD.js";import"./index-CFabrBDT.js";import"./dFormModal-M3vltEal.js";import"./modal-CKEVbAO9.js";import"./EyeOutlined-MiG0h1ef.js";import"./DeleteOutlined-RKHBD1Gm.js";import"./useShowArrow-CMAIAfVr.js";import"./useIcons-CQb7q79F.js";import"./SearchOutlined-fNJs2EgW.js";import"./index-BmPwU4as.js";const b=[...o],F={formId:"gridEditForm",fieldsProps:{parent:{component:u,label:"Родитель",dataSet:b,fieldNames:{title:"name"}},name:{component:t,label:"Name"},age:{component:p,label:"Age"},col:{component:t,label:"Favourite Color"},dob:{component:t,label:"Day of Birth"}},confirmChanges:!0},T={id:"TabulatorGridTreeWithForm",columnDefaults:c,columns:f,dataSet:o,dataTree:!0,height:500,layout:"fitColumns",editFormProps:F,confirmDelete:!0,multiSelect:!0},h=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a hierarchical Tabulator grid with a form"}),e.jsx(d,{...T})]}),A=r=>e.jsxs(i,{children:[e.jsx("div",{children:e.jsx(h,{})}),e.jsx(a,{}),e.jsx("div",{children:e.jsx(l,{items:[{key:1,label:"Show source",children:e.jsx(m,{language:"javascript",style:r.darkMode?n:s,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {NumberField} from @krinopotam/ui-kit/dForm/fields/number/numberField';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorTreeData} from '../../data/tabulatorData';
const treeSelectDataSet = [...TabulatorTreeData];
const editFormConfig: IDFormModalProps = {
    formId: 'gridEditForm',
    fieldsProps: {
        parent: {component: TreeSelectField, label: 'Родитель', dataSet: treeSelectDataSet, fieldNames: {title: 'name'}},
        name: {component: InputField, label: 'Name'},
        age: {component: NumberField, label: 'Age'},
        col: {component: InputField, label: 'Favourite Color'},
        dob: {component: InputField, label: 'Day of Birth'},
    },
    confirmChanges: true,
};
const props: IGridProps = {
    id: 'TabulatorGridTreeWithForm',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    dataSet: TabulatorTreeData,
    dataTree: true,
    height: 500,
    layout: 'fitColumns',
    editFormProps: editFormConfig,
    confirmDelete: true,
    multiSelect: true,
};
export const TreeWithForm = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`})}]})})]});export{A as Page3baa08d2e5354464a832534214bb6f62,A as default};
