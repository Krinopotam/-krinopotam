const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-aRU0KM20.js","assets/default-highlight-Kf2sMSRd.js","assets/index-BEbJdilr.js"])))=>i.map(i=>d[i]);
import{j as e,r,_ as i,D as l}from"./index-BEbJdilr.js";import{T as n}from"./tabulatorGrid-CJPVjLWW.js";import{T as u,a,b as s}from"./tabulatorData-BPeH5Pnm.js";import{T as m}from"./tabulatorGridField-CXWk-EJc.js";import{P as d,C as c,d as p,c as h}from"./darcula-DUU8WC9V.js";import"./modal-DZ70cJBI.js";import"./dForm-BUs8TQbJ.js";import"./index-DJAh43lQ.js";import"./dFormModal-DVM0pNWI.js";import"./modal-CKnotMHS.js";import"./defaultButtonsProps-BuloFMuY.js";import"./index-BnCadmn7.js";const b={title:"Please select",height:300,fieldsProps:{select:{component:m,columns:a,selectionMode:!0,autoHeightResize:!0,onDataFetch:()=>new Promise((o,t)=>{setTimeout(()=>{Math.random()<.5?t({message:"Ошибка загрузки данных",code:400}):o({data:s})},2e3)})}}},f={id:"TabulatorGridWithForm",columnDefaults:u,columns:a,dataSet:s,multiSelect:!0,selectionFormProps:b,confirmDelete:!0,height:"100%",layout:"fitColumns",onDataFetch:()=>{}},T=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример простого грида Tabulator с асинхронной формой для выбора значений"}),e.jsx("div",{style:{backgroundColor:"bisque",padding:5,height:300},children:e.jsx(n,{...f})})]}),P=r.lazy(()=>i(()=>import("./index-aRU0KM20.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),B=o=>e.jsxs(d,{children:[e.jsx("div",{children:e.jsx(T,{})}),e.jsx(l,{}),e.jsx("div",{children:e.jsx(c,{items:[{key:1,label:"Show source",children:e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(P,{language:"tsx",style:o.darkMode?p:h,showLineNumbers:!0,children:`
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
`})})}]})})]});export{B as Page0b8bf403e7904890ad100e5196e0b6be,B as default};
