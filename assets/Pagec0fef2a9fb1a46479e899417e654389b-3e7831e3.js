import{j as e,D as i}from"./index-bd83bb7b.js";import{P as l,C as m,S as n,d as s,a as d}from"./docco-5da19923.js";import{T as u}from"./tabulatorGrid-c8d5ca90.js";import{T as p}from"./treeSelectField-52eba6fd.js";import{I as t}from"./inputField-0d7c82a2.js";import{N as c}from"./numberField-d4fc0f1d.js";import{e as o,T as f,a as b}from"./tabulatorData-cbbee66e.js";import"./index-70b17d15.js";import"./dFormModal-65650ab1.js";import"./EyeOutlined-9bf5471e.js";import"./DeleteOutlined-cdccffb7.js";import"./useShowArrow-e5ccd822.js";import"./SearchOutlined-5813b664.js";import"./index-45228462.js";const F=[...o],T={formId:"gridEditForm",fieldsProps:{parent:{component:p,label:"Родитель",dataSet:F,fieldNames:{title:"name"}},name:{component:t,label:"Name"},age:{component:c,label:"Age"},col:{component:t,label:"Favourite Color"},dob:{component:t,label:"Day of Birth"}},confirmChanges:!0},h={id:"TabulatorGridTreeWithForm",columnDefaults:f,columns:b,dataSet:o,dataTree:!0,height:500,layout:"fitColumns",editFormProps:T,confirmDelete:!0,multiSelect:!0},g=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a hierarchical Tabulator grid with a form"}),e.jsx(u,{...h})]}),M=r=>{const a=`
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
`;return e.jsxs(l,{children:[e.jsx("div",{children:e.jsx(g,{})}),e.jsx(i,{}),e.jsx("div",{children:e.jsx(m,{items:[{key:1,label:"Show source",children:e.jsx(n,{language:"javascript",style:r.darkMode?s:d,showLineNumbers:!0,children:a})}]})})]})};export{M as Pagec0fef2a9fb1a46479e899417e654389b,M as default};
