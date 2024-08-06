import{j as e,D as a}from"./index-CRRPgvdi.js";import{P as i,C as l,h as m,d as n,a as s}from"./docco-COLmzWzy.js";import{T as d}from"./tabulatorGrid-qvzlLlhb.js";import{T as u}from"./treeSelectField-Dk2yCZ7N.js";import{I as t}from"./inputField-BCG6Hv6R.js";import{N as p}from"./numberField-CPBIwQkv.js";import{f as o,b as c,T as f}from"./tabulatorData-_Zp1siT3.js";import"./index-CR3eF2D1.js";import"./dFormModal-Df9g-P_m.js";import"./EyeOutlined-DQsML7KC.js";import"./DeleteOutlined-CzvauNsJ.js";import"./useShowArrow-Cy7EkWLx.js";import"./useIcons-BN1b1-Dw.js";import"./SearchOutlined-BOezqQLT.js";import"./index-Dx0n4lO3.js";const b=[...o],F={formId:"gridEditForm",fieldsProps:{parent:{component:u,label:"Родитель",dataSet:b,fieldNames:{title:"name"}},name:{component:t,label:"Name"},age:{component:p,label:"Age"},col:{component:t,label:"Favourite Color"},dob:{component:t,label:"Day of Birth"}},confirmChanges:!0},T={id:"TabulatorGridTreeWithForm",columnDefaults:c,columns:f,dataSet:o,dataTree:!0,height:500,layout:"fitColumns",editFormProps:F,confirmDelete:!0,multiSelect:!0},h=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a hierarchical Tabulator grid with a form"}),e.jsx(d,{...T})]}),W=r=>e.jsxs(i,{children:[e.jsx("div",{children:e.jsx(h,{})}),e.jsx(a,{}),e.jsx("div",{children:e.jsx(l,{items:[{key:1,label:"Show source",children:e.jsx(m,{language:"javascript",style:r.darkMode?n:s,showLineNumbers:!0,children:`
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
`})}]})})]});export{W as Pageb7f17f2bc56d42e49c815366dc605d98,W as default};
