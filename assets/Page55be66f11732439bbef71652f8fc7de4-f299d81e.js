import{j as o,D as i}from"./index-23555c5c.js";import{P as l,C as s,S as u,d as n,a as d}from"./docco-c24c9fde.js";import{T as m}from"./tabulatorGrid-1186b9ea.js";import{T as c,a as t,b as e}from"./tabulatorData-2c657cfc.js";import"./index-e5590f2c.js";import{T as p}from"./tabulatorGridField-264ab788.js";import"./dFormModal-9d6a497b.js";import"./EyeOutlined-cf850273.js";import"./DeleteOutlined-6d7b808b.js";const b={title:"Please select",bodyHeight:300,fieldsProps:{select:{component:p,columns:t,dataSet:e,selectionMode:!0,autoHeightResize:!0}}},h={id:"TabulatorGridWithForm",columnDefaults:c,columns:t,dataSet:e,multiSelect:!0,selectionFormProps:b,confirmDelete:!0,height:"100%",layout:"fitColumns"},f=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простого грида Tabulator с формой для выбора значений"}),o.jsx("div",{style:{backgroundColor:"bisque",padding:5,height:300},children:o.jsx(m,{...h})})]}),S=r=>{const a=`
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
`;return o.jsxs(l,{children:[o.jsx("div",{children:o.jsx(f,{})}),o.jsx(i,{}),o.jsx("div",{children:o.jsx(s,{items:[{key:1,label:"Show source",children:o.jsx(u,{language:"javascript",style:r.darkMode?n:d,showLineNumbers:!0,children:a})}]})})]})};export{S as Page55be66f11732439bbef71652f8fc7de4,S as default};
