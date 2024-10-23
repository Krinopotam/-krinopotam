const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-UHTfNfHP.js","assets/default-highlight-BW2eIfdj.js","assets/index-fLDE7RV8.js"])))=>i.map(i=>d[i]);
import{j as e,r,_ as i,D as l}from"./index-fLDE7RV8.js";import{T as m}from"./tabulatorGrid-BJwlOlPS.js";import{T as n}from"./treeSelectField-BrPQtOSY.js";import{I as o}from"./inputField-CjWubR6e.js";import{N as s}from"./numberField-BRjKoRoA.js";import{f as a,b as d,T as u}from"./tabulatorData-DJNiiClm.js";import{P as p,C as c,d as f,c as b}from"./darcula-BAaai0cd.js";import"./mergeButtons-5jDhs16v.js";import"./dForm-DcZj9aOC.js";import"./modal-CJqMGIFI.js";import"./index-Dm8OxE-t.js";import"./dFormModal-BONKQnKH.js";import"./modal-DKiW44iu.js";import"./defaultButtonsProps-BRD3xjmK.js";import"./index-CTvaTwjg.js";import"./useApiGetGroupsOnly-DmM5f8UP.js";import"./useShowArrow-Cn6xTPHQ.js";import"./useIcons-C467XfOT.js";import"./SearchOutlined-bm7ljvup.js";import"./index-BoVgkjiJ.js";const F=[...a],T={formId:"gridEditForm",fieldsProps:{parent:{component:n,label:"Родитель",dataSet:F,fieldNames:{title:"name"}},name:{component:o,label:"Name"},age:{component:s,label:"Age"},col:{component:o,label:"Favourite Color"},dob:{component:o,label:"Day of Birth"}},confirmChanges:!0},h={id:"TabulatorGridTreeWithForm",columnDefaults:d,columns:u,dataSet:a,dataTree:!0,height:500,layout:"fitColumns",editFormProps:T,onDelete:()=>{},confirmDelete:!0,multiSelect:!0},D=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a hierarchical Tabulator grid with a form"}),e.jsx(m,{...h})]}),g=r.lazy(()=>i(()=>import("./index-UHTfNfHP.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),H=t=>e.jsxs(p,{children:[e.jsx("div",{children:e.jsx(D,{})}),e.jsx(l,{}),e.jsx("div",{children:e.jsx(c,{items:[{key:1,label:"Show source",children:e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(g,{language:"tsx",style:t.darkMode?f:b,showLineNumbers:!0,children:`
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
`})})}]})})]});export{H as Pageb22eeb8ec0644892adb56b1e4f35695c,H as default};
