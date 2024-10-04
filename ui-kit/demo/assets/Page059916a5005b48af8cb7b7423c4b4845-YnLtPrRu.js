const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BCkY1BI4.js","assets/default-highlight-BkRzspxv.js","assets/index-D4bHa_3o.js"])))=>i.map(i=>d[i]);
import{j as e,r as o,_ as i,D as l}from"./index-D4bHa_3o.js";import{T as m}from"./tabulatorGrid-DeNUCISi.js";import{T as s}from"./treeSelectField-BMcCeLPz.js";import{I as r}from"./inputField-DGR4oCWc.js";import{N as n}from"./numberField-CJ-rFpHC.js";import{f as a,T as d,a as u}from"./tabulatorData-rU-MgCHl.js";import{P as p,C as c,d as f,c as b}from"./darcula-DdlBXz-Q.js";import"./modal-Cje67qL2.js";import"./dForm-3m-O6pho.js";import"./index-BrKQ3NvS.js";import"./dFormModal-BCjjhs8Y.js";import"./modal-B1kKEzi9.js";import"./defaultButtonsProps-D413j251.js";import"./index-BVoWYqDG.js";import"./useApiGetGroupsOnly-T5Kwr76U.js";import"./useShowArrow-DkzcVp1t.js";import"./useIcons-DVS72p3F.js";import"./SearchOutlined-C-5aAKd9.js";import"./index-D0MhsY60.js";const F=[...a],T={formId:"gridEditForm",fieldsProps:{parent:{component:s,label:"Родитель",dataSet:F,fieldNames:{title:"name"}},name:{component:r,label:"Name"},age:{component:n,label:"Age"},col:{component:r,label:"Favourite Color"},dob:{component:r,label:"Day of Birth"}},confirmChanges:!0},h={id:"TabulatorGridTreeWithForm",columnDefaults:d,columns:u,dataSet:a,dataTree:!0,height:500,layout:"fitColumns",editFormProps:T,confirmDelete:!0,multiSelect:!0},g=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a hierarchical Tabulator grid with a form"}),e.jsx(m,{...h})]}),D=o.lazy(()=>i(()=>import("./index-BCkY1BI4.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),z=t=>e.jsxs(p,{children:[e.jsx("div",{children:e.jsx(g,{})}),e.jsx(l,{}),e.jsx("div",{children:e.jsx(c,{items:[{key:1,label:"Show source",children:e.jsx(o.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(D,{language:"tsx",style:t.darkMode?f:b,showLineNumbers:!0,children:`
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
`})})}]})})]});export{z as Page059916a5005b48af8cb7b7423c4b4845,z as default};
