const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-UHTfNfHP.js","assets/default-highlight-BW2eIfdj.js","assets/index-fLDE7RV8.js"])))=>i.map(i=>d[i]);
import{r,j as o,_ as m,D as n}from"./index-fLDE7RV8.js";import{b as d}from"./mergeButtons-5jDhs16v.js";import{D as c}from"./dFormModal-BONKQnKH.js";import{T as i}from"./tabulatorGridField-DZZlCS7S.js";import{F as u}from"./buttonsProps-LpFfehxM.js";import{T as s,a as l}from"./tabulatorData-DJNiiClm.js";import{P as p,C as f,d as h,c as b}from"./darcula-BAaai0cd.js";import"./dForm-DcZj9aOC.js";import"./modal-CJqMGIFI.js";import"./index-Dm8OxE-t.js";import"./modal-DKiW44iu.js";import"./tabulatorGrid-BJwlOlPS.js";import"./defaultButtonsProps-BRD3xjmK.js";import"./index-CTvaTwjg.js";const e={},P={title:"Please select",height:300,fieldsProps:{select:{component:i,columns:s,dataSet:l,selectionMode:!0,autoHeightResize:!0}}},F={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{users:{component:i,label:"Пользователи",columns:s,layout:"fitColumns",height:300,selectionFormProps:P,confirmDelete:!1,onDelete:()=>{},onDataFetch:()=>new Promise((t,a)=>{setTimeout(()=>{Math.random()<.1?a({message:"Ошибка загрузки данных",code:400}):t({data:l})},500)})}},width:900,buttons:u(e)},D=()=>{const t=r.useCallback(()=>{e.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field with selection form"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(d,{onClick:t,children:"Open form"}),o.jsx(c,{...F})]})]})},x=r.lazy(()=>m(()=>import("./index-UHTfNfHP.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),R=t=>o.jsxs(p,{children:[o.jsx("div",{children:o.jsx(D,{})}),o.jsx(n,{}),o.jsx("div",{children:o.jsx(f,{items:[{key:1,label:"Show source",children:o.jsx(r.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(x,{language:"tsx",style:t.darkMode?h:b,showLineNumbers:!0,children:`
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
`})})}]})})]});export{R as Pagea42f8ac8fcfd40e99499b26e7bed1ae0,R as default};
