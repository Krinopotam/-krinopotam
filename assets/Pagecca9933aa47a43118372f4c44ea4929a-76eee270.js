import{j as e,D as i}from"./index-72bf19bf.js";import{P as l,C as m,S as n,d as s,a as d}from"./docco-47b38a91.js";import{T as u}from"./tabulatorGrid-25519479.js";import{T as p}from"./treeSelectField-643f3158.js";import{I as t}from"./inputField-aa73a447.js";import{N as c}from"./numberField-ac8a067d.js";import{e as o,T as f,a as b}from"./tabulatorData-6623487d.js";import"./index-8ab5ffa3.js";import"./dFormModal-6688ff3d.js";import"./EyeOutlined-365e9e86.js";import"./DeleteOutlined-607d6fba.js";import"./useShowArrow-7b93d832.js";import"./SearchOutlined-f0393ae4.js";import"./index-f788a2c8.js";const F=[...o],T={formId:"gridEditForm",fieldsProps:{parent:{component:p,label:"Родитель",dataSet:F,fieldNames:{title:"name"}},name:{component:t,label:"Name"},age:{component:c,label:"Age"},col:{component:t,label:"Favourite Color"},dob:{component:t,label:"Day of Birth"}},confirmChanges:!0},h={id:"TabulatorGridTreeWithForm",columnDefaults:f,columns:b,dataSet:o,dataTree:!0,height:500,layout:"fitColumns",editFormProps:T,confirmDelete:!0,multiSelect:!0},g=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a hierarchical Tabulator grid with a form"}),e.jsx(u,{...h})]}),M=r=>{const a=`
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
`;return e.jsxs(l,{children:[e.jsx("div",{children:e.jsx(g,{})}),e.jsx(i,{}),e.jsx("div",{children:e.jsx(m,{items:[{key:1,label:"Show source",children:e.jsx(n,{language:"javascript",style:r.darkMode?s:d,showLineNumbers:!0,children:a})}]})})]})};export{M as Pagecca9933aa47a43118372f4c44ea4929a,M as default};
