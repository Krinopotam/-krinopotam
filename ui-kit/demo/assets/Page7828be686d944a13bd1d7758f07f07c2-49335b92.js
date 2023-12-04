import{j as t,D as d}from"./index-491b5652.js";import{P as n,C as u,S as p,d as c,a as b}from"./docco-2ccfe26d.js";import{T as h}from"./tabulatorGrid-1fa6dc01.js";import{T as f}from"./tabulatorGridField-275097e0.js";import{T as a,a as F,b as i}from"./tabulatorData-db3ba943.js";import{F as g}from"./buttonsProps-74f10d61.js";import"./index-bb222d24.js";import"./dFormModal-03c7f003.js";import"./EyeOutlined-ab0d6fcf.js";import"./DeleteOutlined-4ad9d1b1.js";const r={},T={apiRef:r,confirmChanges:!0,bodyHeight:400,width:600,fieldsProps:{inputs:{component:f,columnDefaults:a,columns:[{title:"Name",field:"name",headerFilter:!0}],headerFilterHidden:!0,autoHeightResize:!0,height:"100%",resizeHeightWithForm:!0,layout:"fitColumns",onDataFetch:(o,e,s)=>(console.log("form data set",s.getModel().getFormDataSet()),console.log("params",o),new Promise((l,m)=>{setTimeout(()=>{Math.random()<.5?m({message:"Loading error",code:400}):l({data:i})},2e3)}))}},buttons:g(r)},G={columnDefaults:a,columns:F,dataSet:i,layout:"fitColumns",movableColumns:!0,buttonsSize:"middle",editFormProps:T,height:"100%",buttons:{title:{type:"element",title:t.jsx("b",{style:{fontSize:18},children:"Системы"}),position:"left"}}},P=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"An example of an editable TabulatorGrid, on the editing form of which there is another asynchronous TabulatorGrid"}),t.jsx(h,{...G}),";"]}),v=o=>{const e=`
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
`;return t.jsxs(n,{children:[t.jsx("div",{children:t.jsx(P,{})}),t.jsx(d,{}),t.jsx("div",{children:t.jsx(u,{items:[{key:1,label:"Show source",children:t.jsx(p,{language:"javascript",style:o.darkMode?c:b,showLineNumbers:!0,children:e})}]})})]})};export{v as Page7828be686d944a13bd1d7758f07f07c2,v as default};
