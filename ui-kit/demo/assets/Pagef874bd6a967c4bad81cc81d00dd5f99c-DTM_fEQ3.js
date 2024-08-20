import{j as e,D as a}from"./index-C88KkuCB.js";import{P as i,C as l,h as m,d as n,a as s}from"./docco-ByJX3Scg.js";import{T as d}from"./tabulatorGrid-DKkDsMvF.js";import{T as u}from"./treeSelectField-7jW8iUXc.js";import{I as t}from"./inputField-lf7PiFAE.js";import{N as p}from"./numberField-CI0dJAx1.js";import{f as o,b as c,T as f}from"./tabulatorData-CkYiJt45.js";import"./messageBox-DwID5iMj.js";import"./dForm-Dv7JeuEm.js";import"./index-BuXson94.js";import"./dFormModal-BPcYJqc1.js";import"./modal-mTGTPhaP.js";import"./EyeOutlined-RPGYlChj.js";import"./DeleteOutlined-D2DZven6.js";import"./useShowArrow-B5dIhitG.js";import"./useIcons-veu9Tqux.js";import"./SearchOutlined-B0z9pdPP.js";import"./index-CCZkxA_l.js";const b=[...o],F={formId:"gridEditForm",fieldsProps:{parent:{component:u,label:"Родитель",dataSet:b,fieldNames:{title:"name"}},name:{component:t,label:"Name"},age:{component:p,label:"Age"},col:{component:t,label:"Favourite Color"},dob:{component:t,label:"Day of Birth"}},confirmChanges:!0},T={id:"TabulatorGridTreeWithForm",columnDefaults:c,columns:f,dataSet:o,dataTree:!0,height:500,layout:"fitColumns",editFormProps:F,confirmDelete:!0,multiSelect:!0},h=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a hierarchical Tabulator grid with a form"}),e.jsx(d,{...T})]}),A=r=>e.jsxs(i,{children:[e.jsx("div",{children:e.jsx(h,{})}),e.jsx(a,{}),e.jsx("div",{children:e.jsx(l,{items:[{key:1,label:"Show source",children:e.jsx(m,{language:"javascript",style:r.darkMode?n:s,showLineNumbers:!0,children:`
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
`})}]})})]});export{A as Pagef874bd6a967c4bad81cc81d00dd5f99c,A as default};
