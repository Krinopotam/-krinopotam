const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DJhjoKXt.js","assets/default-highlight-1wZDEzJ6.js","assets/index-B5poLpDm.js"])))=>i.map(i=>d[i]);
import{j as e,D as i,r as o,_ as l}from"./index-B5poLpDm.js";import{T as m}from"./tabulatorGrid-igE2XdiX.js";import{T as n}from"./treeSelectField-B_h9TBfM.js";import{I as r}from"./inputField-Bxibjdcf.js";import{N as s}from"./numberField-QPb425aV.js";import{f as a,T as d,a as u}from"./tabulatorData-BmpfO34x.js";import{P as p,C as c,d as f,c as b}from"./darcula-DszBWugp.js";import"./buttonsRow-aX3TQ5bu.js";import"./dForm-vrGhQ6Lh.js";import"./messageBox-1o2XjDyt.js";import"./index-AMqWlYeY.js";import"./dFormModal-C_QqbNS_.js";import"./modal-tHBgt86o.js";import"./defaultButtonsProps-DtqWhfDr.js";import"./PlusOutlined-Bg-hNKo-.js";import"./index--2ky6TFp.js";import"./useApiGetGroupsOnly-5VEr3Syr.js";import"./index-BVhKSSo6.js";import"./useShowArrow-Dw-Bhs1H.js";import"./useIcons-BKmiU9RQ.js";import"./SearchOutlined-D8SaSDI5.js";import"./index-ldRzAboz.js";const F=[...a],T={formId:"gridEditForm",fieldsProps:{parent:{component:n,label:"Родитель",dataSet:F,fieldNames:{title:"name"}},name:{component:r,label:"Name"},age:{component:s,label:"Age"},col:{component:r,label:"Favourite Color"},dob:{component:r,label:"Day of Birth"}},confirmChanges:!0},h={id:"TabulatorGridTreeWithForm",columnDefaults:u,columns:d,dataSet:a,dataTree:!0,height:500,layout:"fitColumns",editFormProps:T,onDelete:()=>{},confirmDelete:!0,multiSelect:!0},D=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a hierarchical Tabulator grid with a form"}),e.jsx(m,{...h})]}),g=o.lazy(()=>l(()=>import("./index-DJhjoKXt.js").then(t=>t.dw),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),O=t=>e.jsxs(p,{children:[e.jsx("div",{children:e.jsx(D,{})}),e.jsx(i,{}),e.jsx("div",{children:e.jsx(c,{items:[{key:1,label:"Show source",children:e.jsx(o.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(g,{language:"tsx",style:t.darkMode?f:b,showLineNumbers:!0,children:`
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
`})})}]})})]});export{O as Paged174ece1950e42feaed12c997ca0919b,O as default};
