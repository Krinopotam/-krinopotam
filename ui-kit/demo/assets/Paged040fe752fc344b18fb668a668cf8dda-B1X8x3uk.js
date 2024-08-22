import{j as o,D as s}from"./index-DDBz1-0O.js";import{P as i,C as l,h as n,d as u,a as m}from"./docco-C1crFo0W.js";import{T as d}from"./tabulatorGrid-DacXqSyX.js";import{b as c,T as r,a}from"./tabulatorData-DjWGs0rZ.js";import{T as p}from"./tabulatorGridField-CHw4G8oV.js";import"./messageBox-DliIkF0r.js";import"./dForm-BA1kBRHr.js";import"./index-DF9EXunC.js";import"./dFormModal-nAwu1QC2.js";import"./modal-DePWROKc.js";import"./EyeOutlined-Dh1NUrDq.js";import"./DeleteOutlined-fRhgWf_l.js";const h={title:"Please select",height:300,fieldsProps:{select:{component:p,columns:r,selectionMode:!0,autoHeightResize:!0,onDataFetch:()=>new Promise((e,t)=>{setTimeout(()=>{Math.random()<.5?t({message:"Ошибка загрузки данных",code:400}):e({data:a})},2e3)})}}},b={id:"TabulatorGridWithForm",columnDefaults:c,columns:r,dataSet:a,multiSelect:!0,selectionFormProps:h,confirmDelete:!0,height:"100%",layout:"fitColumns",onDataFetch:()=>{}},f=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простого грида Tabulator с асинхронной формой для выбора значений"}),o.jsx("div",{style:{backgroundColor:"bisque",padding:5,height:300},children:o.jsx(d,{...b})})]}),S=e=>o.jsxs(i,{children:[o.jsx("div",{children:o.jsx(f,{})}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(l,{items:[{key:1,label:"Show source",children:o.jsx(n,{language:"javascript",style:e.darkMode?u:m,showLineNumbers:!0,children:`
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
`})}]})})]});export{S as Paged040fe752fc344b18fb668a668cf8dda,S as default};
