import{r as l,j as o,D as m}from"./index-OT-fUFlw.js";import{P as n,C as u,h as c,d,a as p}from"./docco-Dp5WB1My.js";import{B as f}from"./messageBox-deXCqDea.js";import{D as h}from"./dFormModal-Brw-56ya.js";import{T as a}from"./tabulatorGridField-BGPBKX2z.js";import{F as b}from"./buttonsProps-BMlR5a_A.js";import{T as i,a as s}from"./tabulatorData-Bua633a3.js";import"./dForm-CXdkNth1.js";import"./index-BzsQSyIK.js";import"./modal-Cu7Nzp09.js";import"./tabulatorGrid-BdayD2VY.js";import"./EyeOutlined-BLUlGsNj.js";import"./DeleteOutlined-BFYA2MP_.js";const r={},F={title:"Please select",height:300,fieldsProps:{select:{component:a,columns:i,dataSet:s,selectionMode:!0,autoHeightResize:!0}}},P={formId:"Test form",apiRef:r,confirmChanges:!0,fieldsProps:{users:{component:a,label:"Пользователи",columns:i,layout:"fitColumns",height:300,selectionFormProps:F,confirmDelete:!0,onDataFetch:()=>new Promise((t,e)=>{setTimeout(()=>{Math.random()<.1?e({message:"Ошибка загрузки данных",code:400}):t({data:s})},500)})}},width:900,buttons:b(r)},D=()=>{const t=l.useCallback(()=>{r.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field with selection form"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(f,{onClick:t,children:"Open form"}),o.jsx(h,{...P})]})]})},A=t=>o.jsxs(n,{children:[o.jsx("div",{children:o.jsx(D,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(u,{items:[{key:1,label:"Show source",children:o.jsx(c,{language:"javascript",style:t.darkMode?d:p,showLineNumbers:!0,children:`
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
    height: 300,
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
`})}]})})]});export{A as Page380b7fdab59a4cbcbe41a6baf677b9fe,A as default};
