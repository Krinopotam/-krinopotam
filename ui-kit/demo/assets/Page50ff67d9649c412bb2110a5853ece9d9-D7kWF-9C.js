const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cz0v0Rp9.js","assets/default-highlight-CrA-MuiQ.js","assets/index-DKsnjJVp.js"])))=>i.map(i=>d[i]);
import{j as t,r as e,_ as i,D as s}from"./index-DKsnjJVp.js";import{T as l}from"./tabulatorGrid-DCOzFUIF.js";import{T as u,a as r,b as a}from"./tabulatorData-Dp7qYVQO.js";import{T as n}from"./tabulatorGridField-DgvrGhs8.js";import{P as d,C as m,d as c,c as p}from"./darcula-CbhncTMN.js";import"./modal-s_O7aRct.js";import"./dForm-RzxzTjHO.js";import"./index-CSyocx7G.js";import"./dFormModal-BxobeehR.js";import"./modal-sKRn3jmz.js";import"./defaultButtonsProps-Bo_d-5AQ.js";import"./index-CxCukQln.js";const b={title:"Please select",height:300,fieldsProps:{select:{component:n,columns:r,dataSet:a,selectionMode:!0,autoHeightResize:!0}}},h={id:"TabulatorGridWithForm",columnDefaults:u,columns:r,dataSet:a,multiSelect:!0,selectionFormProps:b,confirmDelete:!0,height:"100%",layout:"fitColumns"},f=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Пример простого грида Tabulator с формой для выбора значений"}),t.jsx("div",{style:{backgroundColor:"bisque",padding:5,height:300},children:t.jsx(l,{...h})})]}),T=e.lazy(()=>i(()=>import("./index-Cz0v0Rp9.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),B=o=>t.jsxs(d,{children:[t.jsx("div",{children:t.jsx(f,{})}),t.jsx(s,{}),t.jsx("div",{children:t.jsx(m,{items:[{key:1,label:"Show source",children:t.jsx(e.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(T,{language:"tsx",style:o.darkMode?c:p,showLineNumbers:!0,children:`
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
    //appendSelection:true, //Do not clear old selected values
    confirmDelete: true,
    height: '100%',
    layout: 'fitColumns',
};
export const WithSelectionForm = (): React.JSX.Element => {
    return (
        <>
            <div style={{backgroundColor: 'bisque', padding: 5, height: 300}}>
                <TabulatorGrid {...props} />
            </div>
        </>
    );
};
`})})}]})})]});export{B as Page50ff67d9649c412bb2110a5853ece9d9,B as default};
