const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{j as e,D as s,r as i,_ as m}from"./index-CtAjfk3U.js";import{T as n}from"./tabulatorGrid-Bes3Jt16.js";import{I as a}from"./inputField-i3gDy1o8.js";import{N as l}from"./numberField-Y6rNbDcV.js";import{a as u,T as d,b as c}from"./tabulatorData-DSy7h6X7.js";import{P as p,C as f}from"./pageLayout-BYJr8qhp.js";import{d as b,c as h}from"./darcula-BqMdvqtY.js";import"./buttonsRow-DIWV9y5m.js";import"./isArray-Dq3mFmoY.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./dFormModal-DBrO8yV5.js";import"./modal-CqlI0vXJ.js";import"./defaultButtonsProps-BFWSm065.js";import"./PlusOutlined-CjmZvIFI.js";import"./index-C2aIs9ND.js";import"./baseField-CLOOMrMa.js";import"./index-tEAOawB8.js";import"./SearchOutlined-BPRhDdUX.js";const F={formId:"gridEditForm",layout:"horizontal",fieldsProps:{name:{component:a,label:"Name"},age:{component:l,label:"Age"},col:{component:a,label:"Favourite Color"},dob:{component:a,label:"Day of Birth"}},confirmChanges:!0,onSubmit:o=>new Promise((r,t)=>{setTimeout(()=>{Math.random()<.5?t({message:"Ошибка сохранения",code:400}):r({data:o})},2e3)})},g={id:"TabulatorGridWithFormAsync",columns:d,columnDefaults:u,editFormProps:F,confirmDelete:!0,height:500,layout:"fitColumns",onDataFetch:()=>new Promise((o,r)=>{setTimeout(()=>{Math.random()<.5?r({message:"Ошибка загрузки данных",code:400}):o({data:c})},2e3)}),onDelete:o=>new Promise((r,t)=>{setTimeout(()=>{Math.random()<.3?t({message:"Ошибка удаления строк",code:400}):r({data:!0})},2e3)})},T=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример простого асинхронного грида Tabulator с формой редактирование"}),e.jsx(n,{...g})]}),P=i.lazy(()=>m(()=>import("./index-DY4jbcst.js").then(o=>o.dw),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),W=o=>e.jsxs(p,{children:[e.jsx(T,{}),e.jsx(s,{}),e.jsx("div",{children:e.jsx(f,{items:[{key:1,label:"Show source",children:e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(P,{language:"tsx",style:o.darkMode?b:h,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {NumberField} from @krinopotam/ui-kit/dForm/fields/number/numberField';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../../data/tabulatorData';
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
    onSubmit: values => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.5) reject({message: 'Ошибка сохранения', code: 400});
                else resolve({data: values});
            }, 2000);
        });
    },
};
const props: IGridProps = {
    id: 'TabulatorGridWithFormAsync',
    columns: TabulatorBaseColumns,
    columnDefaults: TabulatorBaseColumnsDef,
    editFormProps: editFormConfig,
    confirmDelete: true,
    height: 500,
    layout: 'fitColumns',
    onDataFetch: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random < 0.5) reject({message: 'Ошибка загрузки данных', code: 400});
                else resolve({data: TabulatorPlainData});
            }, 2000);
        });
    },
    onDelete: rows => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.3) reject({message: 'Ошибка удаления строк', code: 400});
                else resolve({data: true});
            }, 2000);
        });
    },
};
export const AsyncWithForm = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`})})}]})})]});export{W as Pageec5eb5f4b77144898c384e561c921190,W as default};
