import{j as e,D as a}from"./index-jRq8dFl9.js";import{P as i,C as l,h as m,d as n,a as s}from"./docco-DVswO1UK.js";import{T as d}from"./tabulatorGrid-Dp7y1jLu.js";import{T as u}from"./treeSelectField-BB9lFwXw.js";import{I as t}from"./inputField-DjpktlwZ.js";import{N as p}from"./numberField-jevYAl40.js";import{f as o,b as c,T as f}from"./tabulatorData-D9ENxapK.js";import"./messageBox-A1wgNO27.js";import"./dForm-CmpnCynY.js";import"./index-h_fYsjXx.js";import"./dFormModal-DuFw94ex.js";import"./modal-Bq0KGAYX.js";import"./EyeOutlined-B_mcHe4i.js";import"./DeleteOutlined-KSC0BHZd.js";import"./useShowArrow-CrKdZmFJ.js";import"./useIcons-BKWTrDFZ.js";import"./SearchOutlined-y0oc_54U.js";import"./index-CBQ57er9.js";const b=[...o],F={formId:"gridEditForm",fieldsProps:{parent:{component:u,label:"Родитель",dataSet:b,fieldNames:{title:"name"}},name:{component:t,label:"Name"},age:{component:p,label:"Age"},col:{component:t,label:"Favourite Color"},dob:{component:t,label:"Day of Birth"}},confirmChanges:!0},T={id:"TabulatorGridTreeWithForm",columnDefaults:c,columns:f,dataSet:o,dataTree:!0,height:500,layout:"fitColumns",editFormProps:F,confirmDelete:!0,multiSelect:!0},h=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a hierarchical Tabulator grid with a form"}),e.jsx(d,{...T})]}),A=r=>e.jsxs(i,{children:[e.jsx("div",{children:e.jsx(h,{})}),e.jsx(a,{}),e.jsx("div",{children:e.jsx(l,{items:[{key:1,label:"Show source",children:e.jsx(m,{language:"javascript",style:r.darkMode?n:s,showLineNumbers:!0,children:`
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
`})}]})})]});export{A as Page7803d22cb8ff4062ab7224ee9104e57a,A as default};
