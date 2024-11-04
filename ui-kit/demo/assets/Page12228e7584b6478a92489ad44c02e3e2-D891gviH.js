const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CaEZq3o6.js","assets/default-highlight-Co1BbaV1.js","assets/index-CzYOWtY3.js"])))=>i.map(i=>d[i]);
import{j as e,r,_ as i,D as l}from"./index-CzYOWtY3.js";import{T as m}from"./tabulatorGrid-CHQlxMIO.js";import{T as n}from"./treeSelectField-dcna2607.js";import{I as o}from"./inputField-JsxEKsAN.js";import{N as s}from"./numberField-DTDBx6q-.js";import{f as a,a as d,b as u}from"./tabulatorData-A6MdMGe-.js";import{P as p,C as c,d as f,c as b}from"./darcula-fwW_2Y8a.js";import"./buttonsRow-NOziNv-G.js";import"./dForm-oEAd0w94.js";import"./modal-BG6C0-ZR.js";import"./index-DX1MZAsy.js";import"./dFormModal-6yYFB7nU.js";import"./modal-Bv76__XP.js";import"./defaultButtonsProps-DlxVY7Az.js";import"./PlusOutlined-BAR0uPLn.js";import"./index-CCx_ORm0.js";import"./useApiGetGroupsOnly-CWBHFz_R.js";import"./useShowArrow-uFV0qQa6.js";import"./useIcons-LdXygS9_.js";import"./SearchOutlined-C3qLh6j9.js";import"./index-BQhEJFnB.js";const F=[...a],T={formId:"gridEditForm",fieldsProps:{parent:{component:n,label:"Родитель",dataSet:F,fieldNames:{title:"name"}},name:{component:o,label:"Name"},age:{component:s,label:"Age"},col:{component:o,label:"Favourite Color"},dob:{component:o,label:"Day of Birth"}},confirmChanges:!0},h={id:"TabulatorGridTreeWithForm",columnDefaults:d,columns:u,dataSet:a,dataTree:!0,height:500,layout:"fitColumns",editFormProps:T,onDelete:()=>{},confirmDelete:!0,multiSelect:!0},D=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a hierarchical Tabulator grid with a form"}),e.jsx(m,{...h})]}),g=r.lazy(()=>i(()=>import("./index-CaEZq3o6.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),J=t=>e.jsxs(p,{children:[e.jsx("div",{children:e.jsx(D,{})}),e.jsx(l,{}),e.jsx("div",{children:e.jsx(c,{items:[{key:1,label:"Show source",children:e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(g,{language:"tsx",style:t.darkMode?f:b,showLineNumbers:!0,children:`
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
    onDelete: () => {},
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
`})})}]})})]});export{J as Page12228e7584b6478a92489ad44c02e3e2,J as default};
