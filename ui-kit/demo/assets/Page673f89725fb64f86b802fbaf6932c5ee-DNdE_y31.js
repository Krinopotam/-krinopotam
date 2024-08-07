import{j as o,D as a}from"./index-CEW5Pw51.js";import{P as i,C as s,h as l,d as u,a as n}from"./docco-BDmKSriJ.js";import{T as d}from"./tabulatorGrid-D_Dw4JJ8.js";import{b as m,T as t,a as e}from"./tabulatorData-CS8n7XKW.js";import"./index-XDwG7I6Z.js";import{T as c}from"./tabulatorGridField-BVSkdCaP.js";import"./dFormModal-CQxmvlme.js";import"./EyeOutlined-CTrlI0WT.js";import"./DeleteOutlined-DC7B5UxI.js";const p={title:"Please select",bodyHeight:300,fieldsProps:{select:{component:c,columns:t,dataSet:e,selectionMode:!0,autoHeightResize:!0}}},b={id:"TabulatorGridWithForm",columnDefaults:m,columns:t,dataSet:e,multiSelect:!0,selectionFormProps:p,confirmDelete:!0,height:"100%",layout:"fitColumns"},h=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример простого грида Tabulator с формой для выбора значений"}),o.jsx("div",{style:{backgroundColor:"bisque",padding:5,height:300},children:o.jsx(d,{...b})})]}),S=r=>o.jsxs(i,{children:[o.jsx("div",{children:o.jsx(h,{})}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(s,{items:[{key:1,label:"Show source",children:o.jsx(l,{language:"javascript",style:r.darkMode?u:n,showLineNumbers:!0,children:`
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
`})}]})})]});export{S as Page673f89725fb64f86b802fbaf6932c5ee,S as default};
