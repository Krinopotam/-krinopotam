import{j as e,D as s}from"./index-Bl-1kopd.js";import{P as i,C as l,h as n,d as u,a as m}from"./docco-DI1KRtYq.js";import{T as d}from"./tabulatorGrid-BopOrzIc.js";import{b as c,T as r,a}from"./tabulatorData-_B0aRVvD.js";import"./index-Cz3A2iSd.js";import{T as p}from"./tabulatorGridField-hh0J6WI6.js";import"./dFormModal-COFbO3rY.js";import"./EyeOutlined-VtVLuKtp.js";import"./DeleteOutlined-C4ZPs8sE.js";const h={title:"Please select",bodyHeight:300,fieldsProps:{select:{component:p,columns:r,selectionMode:!0,autoHeightResize:!0,onDataFetch:()=>new Promise((o,t)=>{setTimeout(()=>{Math.random()<.5?t({message:"Ошибка загрузки данных",code:400}):o({data:a})},2e3)})}}},b={id:"TabulatorGridWithForm",columnDefaults:c,columns:r,dataSet:a,multiSelect:!0,selectionFormProps:h,confirmDelete:!0,height:"100%",layout:"fitColumns",onDataFetch:()=>{}},f=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример простого грида Tabulator с асинхронной формой для выбора значений"}),e.jsx("div",{style:{backgroundColor:"bisque",padding:5,height:300},children:e.jsx(d,{...b})})]}),k=o=>e.jsxs(i,{children:[e.jsx("div",{children:e.jsx(f,{})}),e.jsx(s,{}),e.jsx("div",{children:e.jsx(l,{items:[{key:1,label:"Show source",children:e.jsx(n,{language:"javascript",style:o.darkMode?u:m,showLineNumbers:!0,children:`
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
`})}]})})]});export{k as Page54608f531e5e4cf6a5ef0955a64e0547,k as default};
