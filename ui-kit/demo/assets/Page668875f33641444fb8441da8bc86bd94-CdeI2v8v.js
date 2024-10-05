const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DdqqSCj0.js","assets/default-highlight-9uSTSbTs.js","assets/index-c6xXn22Z.js"])))=>i.map(i=>d[i]);
import{j as e,r,_ as i,D as l}from"./index-c6xXn22Z.js";import{T as n}from"./tabulatorGrid-COfwlYwE.js";import{T as u,a,b as s}from"./tabulatorData-CVKtEvPi.js";import{T as d}from"./tabulatorGridField-rOuDDpl0.js";import{P as m,C as c,d as p,c as h}from"./darcula-DhxqnDMh.js";import"./modal-CDnUOe4A.js";import"./dForm-CZw76wHB.js";import"./index-CzWkA8Ku.js";import"./dFormModal-C6Y0IuSi.js";import"./modal-CyZhQyS5.js";import"./defaultButtonsProps-B2tjDYAJ.js";import"./index-OjxplGiv.js";const b={title:"Please select",height:300,fieldsProps:{select:{component:d,columns:a,selectionMode:!0,autoHeightResize:!0,onDataFetch:()=>new Promise((o,t)=>{setTimeout(()=>{Math.random()<.5?t({message:"Ошибка загрузки данных",code:400}):o({data:s})},2e3)})}}},f={id:"TabulatorGridWithForm",columnDefaults:u,columns:a,dataSet:s,multiSelect:!0,selectionFormProps:b,confirmDelete:!0,height:"100%",layout:"fitColumns",onDataFetch:()=>{}},T=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример простого грида Tabulator с асинхронной формой для выбора значений"}),e.jsx("div",{style:{backgroundColor:"bisque",padding:5,height:300},children:e.jsx(n,{...f})})]}),P=r.lazy(()=>i(()=>import("./index-DdqqSCj0.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),B=o=>e.jsxs(m,{children:[e.jsx("div",{children:e.jsx(T,{})}),e.jsx(l,{}),e.jsx("div",{children:e.jsx(c,{items:[{key:1,label:"Show source",children:e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(P,{language:"tsx",style:o.darkMode?p:h,showLineNumbers:!0,children:`
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
`})})}]})})]});export{B as Page668875f33641444fb8441da8bc86bd94,B as default};
