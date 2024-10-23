const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-PpfmoLrq.js","assets/default-highlight-CWL5sYcU.js","assets/index-DLyGJszd.js"])))=>i.map(i=>d[i]);
import{j as o,r as e,_ as a,D as i}from"./index-DLyGJszd.js";import{T as l}from"./tabulatorGrid-rDkNf4Ba.js";import{I as t}from"./inputField-CrUAS0Ct.js";import{N as m}from"./numberField-Do0N03wv.js";import{b as n,T as s,a as d}from"./tabulatorData-8UvrI1Ir.js";import{P as u,C as p,d as c,c as b}from"./darcula-BfEmJZ6D.js";import"./mergeButtons-OmCcH4N9.js";import"./dForm-8o49JMOI.js";import"./modal-CjmvIDqE.js";import"./index-CGhTEYKp.js";import"./dFormModal-L6NStncr.js";import"./modal-BEhuKh3S.js";import"./defaultButtonsProps-D0FGE1rH.js";import"./index-BGgfnEtT.js";import"./index-DlQkoOxi.js";import"./SearchOutlined-B4yj2tsd.js";const f={formId:"gridEditForm",layout:"horizontal",fieldsProps:{name:{component:t,label:"Name"},age:{component:m,label:"Age"},col:{component:t,label:"Favourite Color"},dob:{component:t,label:"Day of Birth"}},confirmChanges:!0},h={id:"TabulatorGridWithForm",columnDefaults:n,columns:s,dataSet:d,multiSelect:!0,editFormProps:f,confirmDelete:!0,onDelete:()=>{},height:"100%",layout:"fitColumns",language:"en"},g=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простого грида Tabulator с формой редактирование"}),o.jsx("div",{style:{padding:5,height:300},children:o.jsx(l,{...h})})]}),F=e.lazy(()=>a(()=>import("./index-PpfmoLrq.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),M=r=>o.jsxs(u,{children:[o.jsx("div",{children:o.jsx(g,{})}),o.jsx(i,{}),o.jsx("div",{children:o.jsx(p,{items:[{key:1,label:"Show source",children:o.jsx(e.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(F,{language:"tsx",style:r.darkMode?c:b,showLineNumbers:!0,children:`
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
    onDelete: () => {},
    height: '100%',
    layout: 'fitColumns',
    language: 'en',
};
export const WithForm = (): React.JSX.Element => {
    return (
        <>
            <div style={{padding: 5, height: 300}}>
                <TabulatorGrid {...props} />
            </div>
        </>
    );
};
`})})}]})})]});export{M as Pageac0fbc0a3afb4deaa6c8251d8d76160b,M as default};
