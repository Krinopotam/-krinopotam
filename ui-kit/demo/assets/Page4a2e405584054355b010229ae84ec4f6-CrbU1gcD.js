import{r as l,j as o,D as m}from"./index-CEW5Pw51.js";import{P as n,C as u,h as d,d as c,a as p}from"./docco-BDmKSriJ.js";import{B as f}from"./index-XDwG7I6Z.js";import{D as h}from"./dFormModal-CQxmvlme.js";import{T as a}from"./tabulatorGridField-BVSkdCaP.js";import{F as b}from"./buttonsProps-C5HxqOnh.js";import{T as i,a as s}from"./tabulatorData-CS8n7XKW.js";import"./tabulatorGrid-D_Dw4JJ8.js";import"./EyeOutlined-CTrlI0WT.js";import"./DeleteOutlined-DC7B5UxI.js";const r={},F={title:"Please select",bodyHeight:300,fieldsProps:{select:{component:a,columns:i,dataSet:s,selectionMode:!0,autoHeightResize:!0}}},P={formId:"Test form",apiRef:r,confirmChanges:!0,fieldsProps:{users:{component:a,label:"Пользователи",columns:i,layout:"fitColumns",height:300,selectionFormProps:F,confirmDelete:!0,onDataFetch:()=>new Promise((t,e)=>{setTimeout(()=>{Math.random()<.1?e({message:"Ошибка загрузки данных",code:400}):t({data:s})},500)})}},width:900,buttons:b(r)},D=()=>{const t=l.useCallback(()=>{r.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field with selection form"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(f,{onClick:t,children:"Open form"}),o.jsx(h,{...P})]})]})},I=t=>o.jsxs(n,{children:[o.jsx("div",{children:o.jsx(D,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(u,{items:[{key:1,label:"Show source",children:o.jsx(d,{language:"javascript",style:t.darkMode?c:p,showLineNumbers:!0,children:`
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
`})}]})})]});export{I as Page4a2e405584054355b010229ae84ec4f6,I as default};
