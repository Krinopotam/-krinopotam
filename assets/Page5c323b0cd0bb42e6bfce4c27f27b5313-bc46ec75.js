import{j as o,D as s}from"./index-bd83bb7b.js";import{P as i,C as l,S as n,d as u,a as m}from"./docco-5da19923.js";import{T as d}from"./tabulatorGrid-c8d5ca90.js";import{T as c,a as r,b as a}from"./tabulatorData-cbbee66e.js";import"./index-70b17d15.js";import{T as p}from"./tabulatorGridField-c53a9992.js";import"./dFormModal-65650ab1.js";import"./EyeOutlined-9bf5471e.js";import"./DeleteOutlined-cdccffb7.js";const b={title:"Please select",bodyHeight:300,fieldsProps:{select:{component:p,columns:r,dataSet:a,selectionMode:!0,autoHeightResize:!0,onDataFetch:()=>new Promise((t,e)=>{setTimeout(()=>{Math.random()<.5?e({message:"Ошибка загрузки данных",code:400}):t({data:a})},2e3)})}}},h={id:"TabulatorGridWithForm",columnDefaults:c,columns:r,dataSet:a,multiSelect:!0,selectionFormProps:b,confirmDelete:!0,height:"100%",layout:"fitColumns",onDataFetch:()=>{}},f=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простого грида Tabulator с асинхронной формой для выбора значений"}),o.jsx("div",{style:{backgroundColor:"bisque",padding:5,height:300},children:o.jsx(d,{...h})})]}),S=t=>{const e=`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../../data/tabulatorData';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm';
const selectionFormProps: IDFormModalProps = {
    title: 'Please select',
    bodyHeight: 300,
    fieldsProps: {
        select: {
            component: TabulatorGridField,
            columns: TabulatorBaseColumns,
            dataSet: TabulatorPlainData,
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
`;return o.jsxs(i,{children:[o.jsx("div",{children:o.jsx(f,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(l,{items:[{key:1,label:"Show source",children:o.jsx(n,{language:"javascript",style:t.darkMode?u:m,showLineNumbers:!0,children:e})}]})})]})};export{S as Page5c323b0cd0bb42e6bfce4c27f27b5313,S as default};
