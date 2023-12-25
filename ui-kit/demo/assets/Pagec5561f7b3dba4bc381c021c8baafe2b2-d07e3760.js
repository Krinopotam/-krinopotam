import{j as t,D as n}from"./index-3024f328.js";import{P as d,C as u,S as p,d as c,a as b}from"./docco-8e796366.js";import{T as h}from"./tabulatorGrid-a1a2b210.js";import{T as f}from"./tabulatorGridField-47eb5197.js";import{b as a,T as F,a as i}from"./tabulatorData-f1a03775.js";import{F as g}from"./buttonsProps-718efc56.js";import"./index-901967cb.js";import"./dFormModal-09fd0649.js";import"./EyeOutlined-ff2ae648.js";import"./DeleteOutlined-73630e69.js";const r={},T={apiRef:r,confirmChanges:!0,bodyHeight:400,width:600,fieldsProps:{inputs:{component:f,columnDefaults:a,columns:[{title:"Name",field:"name",headerFilter:!0}],headerFilterHidden:!0,autoHeightResize:!0,height:"100%",resizeHeightWithForm:!0,layout:"fitColumns",onDataFetch:(o,e,s)=>(console.log("form data set",s.getModel().getFormDataSet()),console.log("params",o),new Promise((l,m)=>{setTimeout(()=>{Math.random()<.5?m({message:"Loading error",code:400}):l({data:i})},2e3)}))}},buttons:g(r)},G={columnDefaults:a,columns:F,dataSet:i,layout:"fitColumns",movableColumns:!0,buttonsSize:"middle",editFormProps:T,height:"100%",buttons:{title:{type:"element",title:t.jsx("b",{style:{fontSize:18},children:"Системы"}),position:"left"}}},P=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"An example of an editable TabulatorGrid, on the editing form of which there is another asynchronous TabulatorGrid"}),t.jsx(h,{...G}),";"]}),v=o=>{const e=`
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
`;return t.jsxs(d,{children:[t.jsx("div",{children:t.jsx(P,{})}),t.jsx(n,{}),t.jsx("div",{children:t.jsx(u,{items:[{key:1,label:"Show source",children:t.jsx(p,{language:"javascript",style:o.darkMode?c:b,showLineNumbers:!0,children:e})}]})})]})};export{v as Pagec5561f7b3dba4bc381c021c8baafe2b2,v as default};
