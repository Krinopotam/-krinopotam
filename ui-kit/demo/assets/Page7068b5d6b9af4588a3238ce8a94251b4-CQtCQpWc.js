const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cs1HhVBL.js","assets/default-highlight-PwdVU7L6.js","assets/index-CNGiMTrA.js"])))=>i.map(i=>d[i]);
import{j as e,r as o,_ as i,D as l}from"./index-CNGiMTrA.js";import{T as m}from"./tabulatorGrid-C2BdhVJ6.js";import{T as s}from"./treeSelectField-9q9pUOKS.js";import{I as r}from"./inputField-B4IJanij.js";import{N as n}from"./numberField-DE6GVTLS.js";import{f as a,T as d,a as u}from"./tabulatorData-BgTLNkAe.js";import{P as p,C as c,d as f,c as b}from"./darcula-BjE4oQkF.js";import"./modal-DVHWH6Qh.js";import"./dForm-DmRsT3BS.js";import"./index-u-jxti1R.js";import"./dFormModal-Clfa5FkM.js";import"./modal-BKWxOyv5.js";import"./defaultButtonsProps-YE4_7d0V.js";import"./index-UyGeAaCN.js";import"./useShowArrow-D-EuJM8o.js";import"./useIcons-B7FuD7ir.js";import"./SearchOutlined-DGkPMlC6.js";import"./useApiIsNodeSelected-Bqe8ESB8.js";import"./index-B9vEfmTq.js";const F=[...a],T={formId:"gridEditForm",fieldsProps:{parent:{component:s,label:"Родитель",dataSet:F,fieldNames:{title:"name"}},name:{component:r,label:"Name"},age:{component:n,label:"Age"},col:{component:r,label:"Favourite Color"},dob:{component:r,label:"Day of Birth"}},confirmChanges:!0},h={id:"TabulatorGridTreeWithForm",columnDefaults:d,columns:u,dataSet:a,dataTree:!0,height:500,layout:"fitColumns",editFormProps:T,confirmDelete:!0,multiSelect:!0},g=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a hierarchical Tabulator grid with a form"}),e.jsx(m,{...h})]}),D=o.lazy(()=>i(()=>import("./index-Cs1HhVBL.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),z=t=>e.jsxs(p,{children:[e.jsx("div",{children:e.jsx(g,{})}),e.jsx(l,{}),e.jsx("div",{children:e.jsx(c,{items:[{key:1,label:"Show source",children:e.jsx(o.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(D,{language:"tsx",style:t.darkMode?f:b,showLineNumbers:!0,children:`
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
`})})}]})})]});export{z as Page7068b5d6b9af4588a3238ce8a94251b4,z as default};
