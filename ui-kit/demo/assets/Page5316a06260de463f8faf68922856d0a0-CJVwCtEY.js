const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-UHTfNfHP.js","assets/default-highlight-BW2eIfdj.js","assets/index-fLDE7RV8.js"])))=>i.map(i=>d[i]);
import{j as e,r as i,_ as s,D as m}from"./index-fLDE7RV8.js";import{T as n}from"./tabulatorGrid-BJwlOlPS.js";import{I as a}from"./inputField-CjWubR6e.js";import{N as l}from"./numberField-BRjKoRoA.js";import{T as u,b as d,a as c}from"./tabulatorData-DJNiiClm.js";import{P as p,C as f,d as b,c as h}from"./darcula-BAaai0cd.js";import"./mergeButtons-5jDhs16v.js";import"./dForm-DcZj9aOC.js";import"./modal-CJqMGIFI.js";import"./index-Dm8OxE-t.js";import"./dFormModal-BONKQnKH.js";import"./modal-DKiW44iu.js";import"./defaultButtonsProps-BRD3xjmK.js";import"./index-CTvaTwjg.js";import"./index-BoVgkjiJ.js";import"./SearchOutlined-bm7ljvup.js";const F={formId:"gridEditForm",layout:"horizontal",fieldsProps:{name:{component:a,label:"Name"},age:{component:l,label:"Age"},col:{component:a,label:"Favourite Color"},dob:{component:a,label:"Day of Birth"}},confirmChanges:!0,onSubmit:o=>new Promise((r,t)=>{setTimeout(()=>{Math.random()<.5?t({message:"Ошибка сохранения",code:400}):r({data:o})},2e3)})},g={id:"TabulatorGridWithFormAsync",columns:u,columnDefaults:d,editFormProps:F,confirmDelete:!0,height:500,layout:"fitColumns",onDataFetch:()=>new Promise((o,r)=>{setTimeout(()=>{Math.random()<.5?r({message:"Ошибка загрузки данных",code:400}):o({data:c})},2e3)}),onDelete:o=>new Promise((r,t)=>{setTimeout(()=>{Math.random()<.3?t({message:"Ошибка удаления строк",code:400}):r({data:!0})},2e3)})},T=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример простого асинхронного грида Tabulator с формой редактирование"}),e.jsx(n,{...g})]}),P=i.lazy(()=>s(()=>import("./index-UHTfNfHP.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),S=o=>e.jsxs(p,{children:[e.jsx("div",{children:e.jsx(T,{})}),e.jsx(m,{}),e.jsx("div",{children:e.jsx(f,{items:[{key:1,label:"Show source",children:e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(P,{language:"tsx",style:o.darkMode?b:h,showLineNumbers:!0,children:`
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
`})})}]})})]});export{S as Page5316a06260de463f8faf68922856d0a0,S as default};
