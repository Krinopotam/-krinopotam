const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{j as e,D as i,r,_ as l}from"./index-CtAjfk3U.js";import{T as m}from"./tabulatorGrid-Bes3Jt16.js";import{T as n}from"./treeSelectField-n2q6sRnM.js";import{I as o}from"./inputField-i3gDy1o8.js";import{N as s}from"./numberField-Y6rNbDcV.js";import{f as a,T as d,a as u}from"./tabulatorData-DSy7h6X7.js";import{P as p,C as c}from"./pageLayout-BYJr8qhp.js";import{d as f,c as b}from"./darcula-BqMdvqtY.js";import"./buttonsRow-DIWV9y5m.js";import"./isArray-Dq3mFmoY.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./dFormModal-DBrO8yV5.js";import"./modal-CqlI0vXJ.js";import"./defaultButtonsProps-BFWSm065.js";import"./PlusOutlined-CjmZvIFI.js";import"./index-C2aIs9ND.js";import"./baseField-CLOOMrMa.js";import"./useApiGetGroupsOnly-Bxa2nsTp.js";import"./index-BypK2dcJ.js";import"./useShowArrow-aGotVQ22.js";import"./useIcons-BRnDxCLJ.js";import"./SearchOutlined-BPRhDdUX.js";import"./index-tEAOawB8.js";const F=[...a],T={formId:"gridEditForm",fieldsProps:{parent:{component:n,label:"Родитель",dataSet:F,fieldNames:{title:"name"}},name:{component:o,label:"Name"},age:{component:s,label:"Age"},col:{component:o,label:"Favourite Color"},dob:{component:o,label:"Day of Birth"}},confirmChanges:!0},h={id:"TabulatorGridTreeWithForm",columnDefaults:u,columns:d,dataSet:a,dataTree:!0,height:500,layout:"fitColumns",editFormProps:T,onDelete:()=>{},confirmDelete:!0,multiSelect:!0},D=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a hierarchical Tabulator grid with a form"}),e.jsx(m,{...h})]}),g=r.lazy(()=>l(()=>import("./index-DY4jbcst.js").then(t=>t.dw),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),X=t=>e.jsxs(p,{children:[e.jsx(D,{}),e.jsx(i,{}),e.jsx("div",{children:e.jsx(c,{items:[{key:1,label:"Show source",children:e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(g,{language:"tsx",style:t.darkMode?f:b,showLineNumbers:!0,children:`
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
`})})}]})})]});export{X as Pagecfcfbc67c68c48c286b7a6e060b0cab4,X as default};
