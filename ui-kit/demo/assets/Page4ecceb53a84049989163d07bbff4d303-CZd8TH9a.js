const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CGS66BNA.js","assets/default-highlight-CcEIfVOS.js","assets/index-D5qwc_YF.js"])))=>i.map(i=>d[i]);
import{j as t,r as o,_ as i,D as s}from"./index-D5qwc_YF.js";import{T as l}from"./tabulatorGrid-xmrOiwzB.js";import{T as u,a as r,b as a}from"./tabulatorData-A50l7rHb.js";import{T as n}from"./tabulatorGridField-bEFM9dcc.js";import{P as d,C as m,d as c,c as p}from"./darcula-DCElNxcl.js";import"./modal-Ba-Ua4rS.js";import"./dForm-D9Yj5CGv.js";import"./index-DfWwWpfW.js";import"./dFormModal-CeNnxCAb.js";import"./modal-BT6G55W2.js";import"./defaultButtonsProps-BAcIqfvm.js";import"./index-DVORizd9.js";const h={title:"Please select",height:300,fieldsProps:{select:{component:n,columns:r,dataSet:a,selectionMode:!0,autoHeightResize:!0}}},b={id:"TabulatorGridWithForm",columnDefaults:u,columns:r,dataSet:a,multiSelect:!0,selectionFormProps:h,onDelete:()=>{},confirmDelete:!0,height:"100%",layout:"fitColumns"},f=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Пример простого грида Tabulator с формой для выбора значений"}),t.jsx("div",{style:{padding:5,height:300},children:t.jsx(l,{...b})})]}),T=o.lazy(()=>i(()=>import("./index-CGS66BNA.js").then(e=>e.ds),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),B=e=>t.jsxs(d,{children:[t.jsx("div",{children:t.jsx(f,{})}),t.jsx(s,{}),t.jsx("div",{children:t.jsx(m,{items:[{key:1,label:"Show source",children:t.jsx(o.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(T,{language:"tsx",style:e.darkMode?c:p,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid';
const selectionFormProps: IDFormModalProps = {
    title:'Please select',
    height:300,
    fieldsProps: {
        select: {
            component: TabulatorGridField,
            columns: TabulatorBaseColumns,
            dataSet: TabulatorPlainData,
            selectionMode: true,
            autoHeightResize:true,
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
    onDelete: () => {},
    //appendSelection:true, //Do not clear old selected values
    confirmDelete: true,
    height: '100%',
    layout: 'fitColumns',
};
export const WithSelectionForm = (): React.JSX.Element => {
    return (
        <>
            <div style={{padding: 5, height: 300}}>
                <TabulatorGrid {...props} />
            </div>
        </>
    );
};
`})})}]})})]});export{B as Page4ecceb53a84049989163d07bbff4d303,B as default};
