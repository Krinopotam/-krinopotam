const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CyxzPzPK.js","assets/default-highlight-BA4pzhEA.js","assets/index-Cpuh8Ebd.js"])))=>i.map(i=>d[i]);
import{j as t,r as o,_ as i,D as s}from"./index-Cpuh8Ebd.js";import{T as l}from"./tabulatorGrid-Da6sMqw5.js";import{a as u,b as r,T as a}from"./tabulatorData-BJFebvAp.js";import{T as d}from"./tabulatorGridField-1FlYJ5im.js";import{P as n,C as m,d as c,c as p}from"./darcula-hcLbMwDB.js";import"./buttonsRow-MpDC2SN8.js";import"./dForm-t1Ccos62.js";import"./modal-g5li7x1J.js";import"./index-DNdv76Wr.js";import"./dFormModal-iIvnEeWS.js";import"./modal-DJlUd0AK.js";import"./defaultButtonsProps-D12Yt--i.js";import"./PlusOutlined-BTCZ_JD0.js";import"./index-D9n8SM2Y.js";const h={title:"Please select",height:300,fieldsProps:{select:{component:d,columns:r,dataSet:a,selectionMode:!0,autoHeightResize:!0}}},b={id:"TabulatorGridWithForm",columnDefaults:u,columns:r,dataSet:a,multiSelect:!0,selectionFormProps:h,onDelete:()=>{},confirmDelete:!0,height:"100%",layout:"fitColumns"},f=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Пример простого грида Tabulator с формой для выбора значений"}),t.jsx("div",{style:{padding:5,height:300},children:t.jsx(l,{...b})})]}),T=o.lazy(()=>i(()=>import("./index-CyxzPzPK.js").then(e=>e.ds),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),M=e=>t.jsxs(n,{children:[t.jsx("div",{children:t.jsx(f,{})}),t.jsx(s,{}),t.jsx("div",{children:t.jsx(m,{items:[{key:1,label:"Show source",children:t.jsx(o.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(T,{language:"tsx",style:e.darkMode?c:p,showLineNumbers:!0,children:`
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
`})})}]})})]});export{M as Pageea9edfdd5f384123add6ce901eb3f984,M as default};
