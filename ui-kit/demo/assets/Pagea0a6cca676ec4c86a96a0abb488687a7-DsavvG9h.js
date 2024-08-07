import{j as e,D as a}from"./index-CEW5Pw51.js";import{P as i,C as l,h as m,d as n,a as s}from"./docco-BDmKSriJ.js";import{T as u}from"./tabulatorGrid-D_Dw4JJ8.js";import{T as d}from"./treeSelectField-Bi01LVz5.js";import{I as t}from"./inputField-BWxo0HQm.js";import{N as p}from"./numberField-BRxomag1.js";import{f as o,b as c,T as f}from"./tabulatorData-CS8n7XKW.js";import"./index-XDwG7I6Z.js";import"./dFormModal-CQxmvlme.js";import"./EyeOutlined-CTrlI0WT.js";import"./DeleteOutlined-DC7B5UxI.js";import"./useShowArrow-ITxIezjc.js";import"./useIcons-C2JgOeKM.js";import"./SearchOutlined-3RvbUWh0.js";import"./index-Csn6HTCS.js";const b=[...o],F={formId:"gridEditForm",fieldsProps:{parent:{component:d,label:"Родитель",dataSet:b,fieldNames:{title:"name"}},name:{component:t,label:"Name"},age:{component:p,label:"Age"},col:{component:t,label:"Favourite Color"},dob:{component:t,label:"Day of Birth"}},confirmChanges:!0},T={id:"TabulatorGridTreeWithForm",columnDefaults:c,columns:f,dataSet:o,dataTree:!0,height:500,layout:"fitColumns",editFormProps:F,confirmDelete:!0,multiSelect:!0},h=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a hierarchical Tabulator grid with a form"}),e.jsx(u,{...T})]}),W=r=>e.jsxs(i,{children:[e.jsx("div",{children:e.jsx(h,{})}),e.jsx(a,{}),e.jsx("div",{children:e.jsx(l,{items:[{key:1,label:"Show source",children:e.jsx(m,{language:"javascript",style:r.darkMode?n:s,showLineNumbers:!0,children:`
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
`})}]})})]});export{W as Pagea0a6cca676ec4c86a96a0abb488687a7,W as default};
