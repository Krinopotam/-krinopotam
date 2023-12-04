import{j as e,D as i}from"./index-c797af55.js";import{P as l,C as m,S as n,d as s,a as d}from"./docco-e40295f3.js";import{T as u}from"./tabulatorGrid-31aae25d.js";import{T as p}from"./treeSelectField-165f593b.js";import{I as t}from"./inputField-d14c5b2b.js";import{N as c}from"./numberField-e2f9f64e.js";import{e as o,T as f,a as b}from"./tabulatorData-7c778850.js";import"./index-8c229de7.js";import"./dFormModal-cedb0440.js";import"./EyeOutlined-8bcb47e2.js";import"./DeleteOutlined-bba666a5.js";import"./useShowArrow-a7f16987.js";import"./SearchOutlined-f62686db.js";import"./index-e62611d6.js";const F=[...o],T={formId:"gridEditForm",fieldsProps:{parent:{component:p,label:"Родитель",dataSet:F,fieldNames:{title:"name"}},name:{component:t,label:"Name"},age:{component:c,label:"Age"},col:{component:t,label:"Favourite Color"},dob:{component:t,label:"Day of Birth"}},confirmChanges:!0},h={id:"TabulatorGridTreeWithForm",columnDefaults:f,columns:b,dataSet:o,dataTree:!0,height:500,layout:"fitColumns",editFormProps:T,confirmDelete:!0,multiSelect:!0},g=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a hierarchical Tabulator grid with a form"}),e.jsx(u,{...h})]}),M=r=>{const a=`
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
`;return e.jsxs(l,{children:[e.jsx("div",{children:e.jsx(g,{})}),e.jsx(i,{}),e.jsx("div",{children:e.jsx(m,{items:[{key:1,label:"Show source",children:e.jsx(n,{language:"javascript",style:r.darkMode?s:d,showLineNumbers:!0,children:a})}]})})]})};export{M as Page946637e7e9ee405980f98927f2e6f8b6,M as default};
