const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CyxzPzPK.js","assets/default-highlight-BA4pzhEA.js","assets/index-Cpuh8Ebd.js"])))=>i.map(i=>d[i]);
import{r as e,j as o,_ as m,D as n}from"./index-Cpuh8Ebd.js";import{b as d}from"./buttonsRow-MpDC2SN8.js";import{D as c}from"./dFormModal-iIvnEeWS.js";import{T as i}from"./tabulatorGridField-1FlYJ5im.js";import{F as u}from"./buttonsProps-CFHTGBOJ.js";import{b as s,T as l}from"./tabulatorData-BJFebvAp.js";import{P as p,C as f,d as h,c as b}from"./darcula-hcLbMwDB.js";import"./dForm-t1Ccos62.js";import"./modal-g5li7x1J.js";import"./index-DNdv76Wr.js";import"./modal-DJlUd0AK.js";import"./tabulatorGrid-Da6sMqw5.js";import"./defaultButtonsProps-D12Yt--i.js";import"./PlusOutlined-BTCZ_JD0.js";import"./index-D9n8SM2Y.js";const r={},P={title:"Please select",height:300,fieldsProps:{select:{component:i,columns:s,dataSet:l,selectionMode:!0,autoHeightResize:!0}}},F={formId:"Test form",apiRef:r,confirmChanges:!0,fieldsProps:{users:{component:i,label:"Пользователи",columns:s,layout:"fitColumns",height:300,selectionFormProps:P,confirmDelete:!1,onDelete:()=>{},onDataFetch:()=>new Promise((t,a)=>{setTimeout(()=>{Math.random()<.1?a({message:"Ошибка загрузки данных",code:400}):t({data:l})},500)})}},width:900,buttons:u(r)},D=()=>{const t=e.useCallback(()=>{r.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field with selection form"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(d,{onClick:t,children:"Open form"}),o.jsx(c,{...F})]})]})},x=e.lazy(()=>m(()=>import("./index-CyxzPzPK.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),_=t=>o.jsxs(p,{children:[o.jsx("div",{children:o.jsx(D,{})}),o.jsx(n,{}),o.jsx("div",{children:o.jsx(f,{items:[{key:1,label:"Show source",children:o.jsx(e.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(x,{language:"tsx",style:t.darkMode?h:b,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField';
import {FormLayoutSwitch} from '../../../common/buttonsProps';
import {TabulatorBaseColumns, TabulatorPlainData} from '../../../data/tabulatorData';
import {IGridDataSourcePromise} from @krinopotam/ui-kit/tabulatorGrid';
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
            confirmDelete: false,
            onDelete: () => {},
            onDataFetch: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (Math.random() < 0.1) reject({message: 'Ошибка загрузки данных', code: 400});
                        else resolve({data: TabulatorPlainData});
                    }, 500);
                }) as IGridDataSourcePromise;
            },
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
`})})}]})})]});export{_ as Pagec56f0bb1d7c844019dcb409948bb297c,_ as default};
