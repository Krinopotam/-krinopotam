import{r as l,j as o,D as m}from"./index-HhzJ4ZAZ.js";import{P as n,C as d,h as u,d as c,a as p}from"./docco-DFBk-y2S.js";import{B as f}from"./messageBox-B4gQYQRN.js";import{D as h}from"./dFormModal-CWIdSG_N.js";import{T as a}from"./tabulatorGridField-D9F5loQ8.js";import{F as b}from"./buttonsProps-KQ-MVoay.js";import{T as i,a as s}from"./tabulatorData-BplLbar6.js";import"./dForm-CEoJtw24.js";import"./index-B0AR281A.js";import"./modal-BNnPWca4.js";import"./tabulatorGrid-ClXLsEKq.js";import"./EyeOutlined-iPePv-Sb.js";import"./DeleteOutlined-BU6ZfEzd.js";const r={},F={title:"Please select",bodyHeight:300,fieldsProps:{select:{component:a,columns:i,dataSet:s,selectionMode:!0,autoHeightResize:!0}}},P={formId:"Test form",apiRef:r,confirmChanges:!0,fieldsProps:{users:{component:a,label:"Пользователи",columns:i,layout:"fitColumns",height:300,selectionFormProps:F,confirmDelete:!0,onDataFetch:()=>new Promise((t,e)=>{setTimeout(()=>{Math.random()<.1?e({message:"Ошибка загрузки данных",code:400}):t({data:s})},500)})}},width:900,buttons:b(r)},D=()=>{const t=l.useCallback(()=>{r.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field with selection form"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(f,{onClick:t,children:"Open form"}),o.jsx(h,{...P})]})]})},A=t=>o.jsxs(n,{children:[o.jsx("div",{children:o.jsx(D,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(d,{items:[{key:1,label:"Show source",children:o.jsx(u,{language:"javascript",style:t.darkMode?c:p,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField';
import {FormLayoutSwitch} from '../../../common/buttonsProps';
import {TabulatorBaseColumns, TabulatorPlainData} from '../../../data/tabulatorData';
import {IGridDataSourcePromise} from @krinopotam/ui-kit/tabulatorGrid";
const formApi = {} as IDFormModalApi;
/*Tabulator selection form props*/
const selectionFormProps: IDFormModalProps = {
    title: 'Please select',
    bodyHeight: 300,
    fieldsProps: {
        select: {
            component: TabulatorGridField,
            columns: TabulatorBaseColumns,
            dataSet: TabulatorPlainData,
            selectionMode: true,
            autoHeightResize: true,
        } satisfies ITabulatorGridFieldProps,
    },
};
/** main modal form props */
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        users: {
            component: TabulatorGridField,
            label: 'Пользователи',
            columns: TabulatorBaseColumns,
            layout: 'fitColumns',
            height: 300,
            selectionFormProps: selectionFormProps,
            confirmDelete: true,
            onDataFetch: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (Math.random() < 0.1) reject({message: 'Ошибка загрузки данных', code: 400});
                        else resolve({data: TabulatorPlainData}) ;
                    }, 500);
                }) as IGridDataSourcePromise;
            } ,
        },
    },
    width: 900,
    buttons: FormLayoutSwitch(formApi),
};
export const FormWithAsyncGridWithSelectionForm = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('update');
    }, []);
    return (
        <>
            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Open form</Button>
                <DFormModal {...formProps} />
            </div>
        </>
    );
};
`})}]})})]});export{A as Paged11a16abe63246a8a77eac4cec9f90f9,A as default};
