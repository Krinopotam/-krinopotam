import{j as e,D as i}from"./index-DhMwsQtd.js";import{P as s,C as m,h as n,d as l,a as u}from"./docco-BR1GjPZn.js";import{T as d}from"./tabulatorGrid-CVRHT1bL.js";import{I as a}from"./inputField-C-ak15WA.js";import{N as c}from"./numberField-B6U47u78.js";import{T as p,b as f,a as b}from"./tabulatorData-rIJmlee8.js";import"./messageBox-CQECnf8I.js";import"./dForm-BvND7aMS.js";import"./index-DNVFzPvX.js";import"./dFormModal-B9s_VGMc.js";import"./modal-eXRNn5Q9.js";import"./EyeOutlined-D8voB2bB.js";import"./DeleteOutlined-BqcAHwXU.js";import"./index-CYDA0FvV.js";import"./SearchOutlined-klO5lwg7.js";const h={formId:"gridEditForm",layout:"horizontal",fieldsProps:{name:{component:a,label:"Name"},age:{component:c,label:"Age"},col:{component:a,label:"Favourite Color"},dob:{component:a,label:"Day of Birth"}},confirmChanges:!0,onSubmit:o=>new Promise((r,t)=>{setTimeout(()=>{Math.random()<.5?t({message:"Ошибка сохранения",code:400}):r({data:o})},2e3)})},F={id:"TabulatorGridWithFormAsync",columns:p,columnDefaults:f,editFormProps:h,confirmDelete:!0,height:500,layout:"fitColumns",onDataFetch:()=>new Promise((o,r)=>{setTimeout(()=>{Math.random()<.5?r({message:"Ошибка загрузки данных",code:400}):o({data:b})},2e3)}),onDelete:o=>new Promise((r,t)=>{setTimeout(()=>{Math.random()<.3?t({message:"Ошибка удаления строк",code:400}):r({data:!0})},2e3)})},g=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример простого асинхронного грида Tabulator с формой редактирование"}),e.jsx(d,{...F})]}),A=o=>e.jsxs(s,{children:[e.jsx("div",{children:e.jsx(g,{})}),e.jsx(i,{}),e.jsx("div",{children:e.jsx(m,{items:[{key:1,label:"Show source",children:e.jsx(n,{language:"javascript",style:o.darkMode?l:u,showLineNumbers:!0,children:`
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
`})}]})})]});export{A as Page936f377687974cb6ac93ed83e91a8da7,A as default};