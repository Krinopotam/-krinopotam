import{j as o,D as s}from"./index-jRq8dFl9.js";import{P as i,C as l,h as n,d as u,a as m}from"./docco-DVswO1UK.js";import{T as d}from"./tabulatorGrid-Dp7y1jLu.js";import{b as c,T as r,a}from"./tabulatorData-D9ENxapK.js";import{T as p}from"./tabulatorGridField-BMuYQ7dM.js";import"./messageBox-A1wgNO27.js";import"./dForm-CmpnCynY.js";import"./index-h_fYsjXx.js";import"./dFormModal-DuFw94ex.js";import"./modal-Bq0KGAYX.js";import"./EyeOutlined-B_mcHe4i.js";import"./DeleteOutlined-KSC0BHZd.js";const h={title:"Please select",height:300,fieldsProps:{select:{component:p,columns:r,selectionMode:!0,autoHeightResize:!0,onDataFetch:()=>new Promise((t,e)=>{setTimeout(()=>{Math.random()<.5?e({message:"Ошибка загрузки данных",code:400}):t({data:a})},2e3)})}}},b={id:"TabulatorGridWithForm",columnDefaults:c,columns:r,dataSet:a,multiSelect:!0,selectionFormProps:h,confirmDelete:!0,height:"100%",layout:"fitColumns",onDataFetch:()=>{}},f=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простого грида Tabulator с асинхронной формой для выбора значений"}),o.jsx("div",{style:{backgroundColor:"bisque",padding:5,height:300},children:o.jsx(d,{...b})})]}),S=t=>o.jsxs(i,{children:[o.jsx("div",{children:o.jsx(f,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(l,{items:[{key:1,label:"Show source",children:o.jsx(n,{language:"javascript",style:t.darkMode?u:m,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../../data/tabulatorData';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid';
const selectionFormProps: IDFormModalProps = {
    title: 'Please select',
    height: 300,
    fieldsProps: {
        select: {
            component: TabulatorGridField,
            columns: TabulatorBaseColumns,
            selectionMode: true,
            autoHeightResize: true,
            onDataFetch: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const random = Math.random();
                        if (random < 0.5) reject({message: 'Ошибка загрузки данных', code: 400});
                        else resolve({data: TabulatorPlainData});
                    }, 2000);
                });
            },
        } satisfies ITabulatorGridFieldProps,
    },
};
const props: IGridProps = {
    id: 'TabulatorGridWithForm',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    dataSet: TabulatorPlainData,
    multiSelect: true,
    selectionFormProps: selectionFormProps,
    confirmDelete: true,
    height: '100%',
    layout: 'fitColumns',
    onDataFetch: () => {return undefined}
};
export const AsyncWithSelectionForm = (): React.JSX.Element => {
    return (
        <>
            <div style={{backgroundColor: 'bisque', padding: 5, height: 300}}>
                <TabulatorGrid {...props} />
            </div>
        </>
    );
};
`})}]})})]});export{S as Page9d7365d4da624d85b757254b649887cd,S as default};
