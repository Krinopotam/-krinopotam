import{j as t,D as d}from"./index-HhzJ4ZAZ.js";import{P as n,C as u,h as p,d as c,a as h}from"./docco-DFBk-y2S.js";import{T as b}from"./tabulatorGrid-ClXLsEKq.js";import{T as f}from"./tabulatorGridField-D9F5loQ8.js";import{b as r,T as F,a}from"./tabulatorData-BplLbar6.js";import{F as g}from"./buttonsProps-KQ-MVoay.js";import"./messageBox-B4gQYQRN.js";import"./dForm-CEoJtw24.js";import"./index-B0AR281A.js";import"./dFormModal-CWIdSG_N.js";import"./modal-BNnPWca4.js";import"./EyeOutlined-iPePv-Sb.js";import"./DeleteOutlined-BU6ZfEzd.js";const e={},T={apiRef:e,confirmChanges:!0,bodyHeight:400,width:600,fieldsProps:{inputs:{component:f,columnDefaults:r,columns:[{title:"Name",field:"name",headerFilter:!0}],headerFilterHidden:!0,autoHeightResize:!0,height:"100%",resizeHeightWithForm:!0,layout:"fitColumns",onDataFetch:(o,i,s)=>(console.log("form data set",s.getModel().getFormDataSet()),console.log("params",o),new Promise((l,m)=>{setTimeout(()=>{Math.random()<.5?m({message:"Loading error",code:400}):l({data:a})},2e3)}))}},buttons:g(e)},G={columnDefaults:r,columns:F,dataSet:a,layout:"fitColumns",movableColumns:!0,buttonsSize:"middle",editFormProps:T,height:"100%",buttons:{title:{type:"element",title:t.jsx("b",{style:{fontSize:18},children:"Системы"}),position:"left"}}},P=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"An example of an editable TabulatorGrid, on the editing form of which there is another asynchronous TabulatorGrid"}),t.jsx(b,{...G}),";"]}),B=o=>t.jsxs(n,{children:[t.jsx("div",{children:t.jsx(P,{})}),t.jsx(d,{}),t.jsx("div",{children:t.jsx(u,{items:[{key:1,label:"Show source",children:t.jsx(p,{language:"javascript",style:o.darkMode?c:h,showLineNumbers:!0,children:`
import React from 'react';
import {TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid/tabulatorGrid';
import {IGridProps} from @krinopotam/ui-kit/tabulatorGrid/types/tabulatorGridTypes';
import {IDFormModalApi, IDFormModalProps} from @krinopotam/ui-kit/dFormModal/types/dFormModalTypes';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../../data/tabulatorData';
import {FormLayoutSwitch} from '../../../common/buttonsProps';
const editFormApi = {} as IDFormModalApi;
const editFormProps: IDFormModalProps = {
    apiRef: editFormApi,
    confirmChanges: true,
    bodyHeight: 400,
    width: 600,
    fieldsProps: {
        inputs: {
            component: TabulatorGridField,
            columnDefaults: TabulatorBaseColumnsDef,
            columns: [{title: 'Name', field: 'name', headerFilter: true}],
            headerFilterHidden: true,
            autoHeightResize: true,
            height: '100%',
            resizeHeightWithForm: true,
            layout: 'fitColumns',
            onDataFetch: (params, gridApi, field) => {
                console.log('form data set', field.getModel().getFormDataSet());
                console.log('params', params);
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const random = Math.random();
                        if (random < 0.5) reject({message: 'Loading error', code: 400});
                        else resolve({data: TabulatorPlainData});
                    }, 2000);
                });
            },
        } satisfies ITabulatorGridFieldProps,
    },
    buttons: FormLayoutSwitch(editFormApi),
};
const mainGridProps: IGridProps = {
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    dataSet: TabulatorPlainData,
    layout: 'fitColumns',
    movableColumns: true,
    buttonsSize: 'middle',
    editFormProps: editFormProps,
    height: '100%',
    buttons: {title: {type: 'element', title: <b style={{fontSize: 18}}>Системы</b>, position: 'left'}},
};
export const EditableGridWithAsyncTabulatorGrid = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...mainGridProps} />;
        </>
    );
};
`})}]})})]});export{B as Page139ef1474f4d4930be386b2cceed5e6b,B as default};
