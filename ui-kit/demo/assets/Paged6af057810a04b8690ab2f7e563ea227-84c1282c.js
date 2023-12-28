import{j as o,D as i}from"./index-353109d5.js";import{P as l,C as s,S as u,d as n,a as d}from"./docco-60b84056.js";import{T as m}from"./tabulatorGrid-ac104063.js";import{b as c,T as t,a as e}from"./tabulatorData-47e7b290.js";import"./index-1664f5a0.js";import{T as p}from"./tabulatorGridField-386ba558.js";import"./dFormModal-cd36bfcf.js";import"./EyeOutlined-da2ead67.js";import"./DeleteOutlined-c8bbeae5.js";const b={title:"Please select",bodyHeight:300,fieldsProps:{select:{component:p,columns:t,dataSet:e,selectionMode:!0,autoHeightResize:!0}}},h={id:"TabulatorGridWithForm",columnDefaults:c,columns:t,dataSet:e,multiSelect:!0,selectionFormProps:b,confirmDelete:!0,height:"100%",layout:"fitColumns"},f=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простого грида Tabulator с формой для выбора значений"}),o.jsx("div",{style:{backgroundColor:"bisque",padding:5,height:300},children:o.jsx(m,{...h})})]}),S=a=>{const r=`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm';
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
`;return o.jsxs(l,{children:[o.jsx("div",{children:o.jsx(f,{})}),o.jsx(i,{}),o.jsx("div",{children:o.jsx(s,{items:[{key:1,label:"Show source",children:o.jsx(u,{language:"javascript",style:a.darkMode?n:d,showLineNumbers:!0,children:r})}]})})]})};export{S as Paged6af057810a04b8690ab2f7e563ea227,S as default};
