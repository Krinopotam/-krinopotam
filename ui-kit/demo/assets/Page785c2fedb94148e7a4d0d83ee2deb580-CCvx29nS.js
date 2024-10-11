const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CGS66BNA.js","assets/default-highlight-CcEIfVOS.js","assets/index-D5qwc_YF.js"])))=>i.map(i=>d[i]);
import{j as e,r,_ as i,D as l}from"./index-D5qwc_YF.js";import{T as m}from"./tabulatorGrid-xmrOiwzB.js";import{T as n}from"./treeSelectField-7_YE1frO.js";import{I as o}from"./inputField-CQ70iDwA.js";import{N as s}from"./numberField-Ck-tn8B9.js";import{f as a,T as d,a as u}from"./tabulatorData-A50l7rHb.js";import{P as p,C as c,d as f,c as b}from"./darcula-DCElNxcl.js";import"./modal-Ba-Ua4rS.js";import"./dForm-D9Yj5CGv.js";import"./index-DfWwWpfW.js";import"./dFormModal-CeNnxCAb.js";import"./modal-BT6G55W2.js";import"./defaultButtonsProps-BAcIqfvm.js";import"./index-DVORizd9.js";import"./useApiGetGroupsOnly-bkxEAo4A.js";import"./useShowArrow-DS8-lNfb.js";import"./useIcons-c7Gyy1VW.js";import"./SearchOutlined-C5suFlPC.js";import"./index-C64nsPO3.js";const F=[...a],T={formId:"gridEditForm",fieldsProps:{parent:{component:n,label:"Родитель",dataSet:F,fieldNames:{title:"name"}},name:{component:o,label:"Name"},age:{component:s,label:"Age"},col:{component:o,label:"Favourite Color"},dob:{component:o,label:"Day of Birth"}},confirmChanges:!0},h={id:"TabulatorGridTreeWithForm",columnDefaults:d,columns:u,dataSet:a,dataTree:!0,height:500,layout:"fitColumns",editFormProps:T,onDelete:()=>{},confirmDelete:!0,multiSelect:!0},D=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a hierarchical Tabulator grid with a form"}),e.jsx(m,{...h})]}),g=r.lazy(()=>i(()=>import("./index-CGS66BNA.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),z=t=>e.jsxs(p,{children:[e.jsx("div",{children:e.jsx(D,{})}),e.jsx(l,{}),e.jsx("div",{children:e.jsx(c,{items:[{key:1,label:"Show source",children:e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(g,{language:"tsx",style:t.darkMode?f:b,showLineNumbers:!0,children:`
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
`})})}]})})]});export{z as Page785c2fedb94148e7a4d0d83ee2deb580,z as default};
