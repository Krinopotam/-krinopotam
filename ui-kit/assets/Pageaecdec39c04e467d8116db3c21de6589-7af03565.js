import{j as e,D as i}from"./index-9944374f.js";import{P as s,C as m,S as n,d as l,a as u}from"./docco-d767795b.js";import{T as d}from"./tabulatorGrid-7651107b.js";import{I as a}from"./inputField-d7a6ced8.js";import{N as c}from"./numberField-9135c854.js";import{a as p,T as f,b}from"./tabulatorData-eaf688e2.js";import"./index-df6b3fec.js";import"./dFormModal-d04b30b3.js";import"./EyeOutlined-4433dc0b.js";import"./DeleteOutlined-31742ae8.js";import"./index-1ed5fd40.js";import"./SearchOutlined-58270f91.js";const h={formId:"gridEditForm",layout:"horizontal",fieldsProps:{name:{component:a,label:"Name"},age:{component:c,label:"Age"},col:{component:a,label:"Favourite Color"},dob:{component:a,label:"Day of Birth"}},confirmChanges:!0,onSubmit:r=>new Promise((o,t)=>{setTimeout(()=>{Math.random()<.5?t({message:"Ошибка сохранения",code:400}):o({data:r})},2e3)})},F={id:"TabulatorGridWithFormAsync",columns:p,columnDefaults:f,editFormProps:h,confirmDelete:!0,height:500,layout:"fitColumns",onDataFetch:()=>new Promise((r,o)=>{setTimeout(()=>{Math.random()<.5?o({message:"Ошибка загрузки данных",code:400}):r({data:b})},2e3)}),onDelete:r=>new Promise((o,t)=>{setTimeout(()=>{Math.random()<.3?t({message:"Ошибка удаления строк",code:400}):o({data:!0})},2e3)})},g=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример простого асинхронного грида Tabulator с формой редактирование"}),e.jsx(d,{...F})]}),B=r=>{const o=`
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
`;return e.jsxs(s,{children:[e.jsx("div",{children:e.jsx(g,{})}),e.jsx(i,{}),e.jsx("div",{children:e.jsx(m,{items:[{key:1,label:"Show source",children:e.jsx(n,{language:"javascript",style:r.darkMode?l:u,showLineNumbers:!0,children:o})}]})})]})};export{B as Pageaecdec39c04e467d8116db3c21de6589,B as default};
