import{j as e,D as s}from"./index-491b5652.js";import{P as i,C as l,S as n,d as u,a as m}from"./docco-2ccfe26d.js";import{T as d}from"./tabulatorGrid-1fa6dc01.js";import{T as c,a as r,b as a}from"./tabulatorData-db3ba943.js";import"./index-bb222d24.js";import{T as p}from"./tabulatorGridField-275097e0.js";import"./dFormModal-03c7f003.js";import"./EyeOutlined-ab0d6fcf.js";import"./DeleteOutlined-4ad9d1b1.js";const b={title:"Please select",bodyHeight:300,fieldsProps:{select:{component:p,columns:r,dataSet:a,selectionMode:!0,autoHeightResize:!0,onDataFetch:()=>new Promise((o,t)=>{setTimeout(()=>{Math.random()<.5?t({message:"Ошибка загрузки данных",code:400}):o({data:a})},2e3)})}}},h={id:"TabulatorGridWithForm",columnDefaults:c,columns:r,dataSet:a,multiSelect:!0,selectionFormProps:b,confirmDelete:!0,height:"100%",layout:"fitColumns",onDataFetch:()=>{}},f=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример простого грида Tabulator с асинхронной формой для выбора значений"}),e.jsx("div",{style:{backgroundColor:"bisque",padding:5,height:300},children:e.jsx(d,{...h})})]}),S=o=>{const t=`
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
`;return e.jsxs(i,{children:[e.jsx("div",{children:e.jsx(f,{})}),e.jsx(s,{}),e.jsx("div",{children:e.jsx(l,{items:[{key:1,label:"Show source",children:e.jsx(n,{language:"javascript",style:o.darkMode?u:m,showLineNumbers:!0,children:t})}]})})]})};export{S as Pagee70823ea2ca14ed7a8ff891022bb8cf6,S as default};
