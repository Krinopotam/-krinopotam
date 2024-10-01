const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cz0v0Rp9.js","assets/default-highlight-CrA-MuiQ.js","assets/index-DKsnjJVp.js"])))=>i.map(i=>d[i]);
import{j as o,r as e,_ as a,D as i}from"./index-DKsnjJVp.js";import{T as l}from"./tabulatorGrid-DCOzFUIF.js";import{I as t}from"./inputField-E9h4FWeh.js";import{N as m}from"./numberField-CSMOH_1r.js";import{T as n,a as s,b as u}from"./tabulatorData-Dp7qYVQO.js";import{P as d,C as p,d as c,c as b}from"./darcula-CbhncTMN.js";import"./modal-s_O7aRct.js";import"./dForm-RzxzTjHO.js";import"./index-CSyocx7G.js";import"./dFormModal-BxobeehR.js";import"./modal-sKRn3jmz.js";import"./defaultButtonsProps-Bo_d-5AQ.js";import"./index-CxCukQln.js";import"./index-Cr9wBgfG.js";import"./SearchOutlined-K0l7o9jX.js";const f={formId:"gridEditForm",layout:"horizontal",fieldsProps:{name:{component:t,label:"Name"},age:{component:m,label:"Age"},col:{component:t,label:"Favourite Color"},dob:{component:t,label:"Day of Birth"}},confirmChanges:!0},h={id:"TabulatorGridWithForm",columnDefaults:n,columns:s,dataSet:u,multiSelect:!0,editFormProps:f,confirmDelete:!0,height:"100%",layout:"fitColumns",language:"en"},g=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простого грида Tabulator с формой редактирование"}),o.jsx("div",{style:{backgroundColor:"bisque",padding:5,height:300},children:o.jsx(l,{...h})})]}),F=e.lazy(()=>a(()=>import("./index-Cz0v0Rp9.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),L=r=>o.jsxs(d,{children:[o.jsx("div",{children:o.jsx(g,{})}),o.jsx(i,{}),o.jsx("div",{children:o.jsx(p,{items:[{key:1,label:"Show source",children:o.jsx(e.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(F,{language:"tsx",style:r.darkMode?c:b,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {NumberField} from @krinopotam/ui-kit/dForm/fields/number/numberField';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
const editFormConfig: IDFormModalProps = {
    formId: 'gridEditForm',
    layout: 'horizontal',
    fieldsProps: {
        name: {component: InputField, label: 'Name'},
        age: {component: NumberField, label: 'Age'},
        col: {component: InputField, label: 'Favourite Color'},
        dob: {component: InputField, label: 'Day of Birth'},
    },
    confirmChanges: true,
};
const props: IGridProps = {
    id: 'TabulatorGridWithForm',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    dataSet: TabulatorPlainData,
    multiSelect: true,
    editFormProps: editFormConfig,
    confirmDelete: true,
    height: '100%',
    layout: 'fitColumns',
    language: 'en',
};
export const WithForm = (): React.JSX.Element => {
    return (
        <>
            <div style={{backgroundColor: 'bisque', padding: 5, height: 300}}>
                <TabulatorGrid {...props} />
            </div>
        </>
    );
};
`})})}]})})]});export{L as Page174d055b0bdf4398b73e6b3b57034571,L as default};
