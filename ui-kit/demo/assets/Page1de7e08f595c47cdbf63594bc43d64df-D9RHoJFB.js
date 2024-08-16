import{j as o,D as a}from"./index-jRq8dFl9.js";import{P as i,C as l,h as s,d as u,a as d}from"./docco-DVswO1UK.js";import{T as m}from"./tabulatorGrid-Dp7y1jLu.js";import{b as n,T as t,a as e}from"./tabulatorData-D9ENxapK.js";import{T as c}from"./tabulatorGridField-BMuYQ7dM.js";import"./messageBox-A1wgNO27.js";import"./dForm-CmpnCynY.js";import"./index-h_fYsjXx.js";import"./dFormModal-DuFw94ex.js";import"./modal-Bq0KGAYX.js";import"./EyeOutlined-B_mcHe4i.js";import"./DeleteOutlined-KSC0BHZd.js";const p={title:"Please select",bodyHeight:300,fieldsProps:{select:{component:c,columns:t,dataSet:e,selectionMode:!0,autoHeightResize:!0}}},b={id:"TabulatorGridWithForm",columnDefaults:n,columns:t,dataSet:e,multiSelect:!0,selectionFormProps:p,confirmDelete:!0,height:"100%",layout:"fitColumns"},h=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простого грида Tabulator с формой для выбора значений"}),o.jsx("div",{style:{backgroundColor:"bisque",padding:5,height:300},children:o.jsx(m,{...b})})]}),v=r=>o.jsxs(i,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(l,{items:[{key:1,label:"Show source",children:o.jsx(s,{language:"javascript",style:r.darkMode?u:d,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid';
const selectionFormProps: IDFormModalProps = {
    title:'Please select',
    bodyHeight:300,
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
`})}]})})]});export{v as Page1de7e08f595c47cdbf63594bc43d64df,v as default};
