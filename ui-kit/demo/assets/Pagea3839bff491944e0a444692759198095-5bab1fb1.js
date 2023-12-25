import{j as o,D as i}from"./index-3024f328.js";import{P as l,C as s,S as u,d as n,a as d}from"./docco-8e796366.js";import{T as m}from"./tabulatorGrid-a1a2b210.js";import{b as c,T as t,a as e}from"./tabulatorData-f1a03775.js";import"./index-901967cb.js";import{T as p}from"./tabulatorGridField-47eb5197.js";import"./dFormModal-09fd0649.js";import"./EyeOutlined-ff2ae648.js";import"./DeleteOutlined-73630e69.js";const b={title:"Please select",bodyHeight:300,fieldsProps:{select:{component:p,columns:t,dataSet:e,selectionMode:!0,autoHeightResize:!0}}},h={id:"TabulatorGridWithForm",columnDefaults:c,columns:t,dataSet:e,multiSelect:!0,selectionFormProps:b,confirmDelete:!0,height:"100%",layout:"fitColumns"},f=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простого грида Tabulator с формой для выбора значений"}),o.jsx("div",{style:{backgroundColor:"bisque",padding:5,height:300},children:o.jsx(m,{...h})})]}),S=a=>{const r=`
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
`;return o.jsxs(l,{children:[o.jsx("div",{children:o.jsx(f,{})}),o.jsx(i,{}),o.jsx("div",{children:o.jsx(s,{items:[{key:1,label:"Show source",children:o.jsx(u,{language:"javascript",style:a.darkMode?n:d,showLineNumbers:!0,children:r})}]})})]})};export{S as Pagea3839bff491944e0a444692759198095,S as default};
