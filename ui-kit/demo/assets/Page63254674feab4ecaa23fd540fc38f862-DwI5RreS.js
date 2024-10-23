const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-PpfmoLrq.js","assets/default-highlight-CWL5sYcU.js","assets/index-DLyGJszd.js"])))=>i.map(i=>d[i]);
import{r,j as o,_ as m,D as n}from"./index-DLyGJszd.js";import{b as d}from"./mergeButtons-OmCcH4N9.js";import{D as c}from"./dFormModal-L6NStncr.js";import{T as i}from"./tabulatorGridField-Ca2SLFyR.js";import{F as u}from"./buttonsProps-CVwH8epV.js";import{T as s,a as l}from"./tabulatorData-8UvrI1Ir.js";import{P as p,C as f,d as h,c as b}from"./darcula-BfEmJZ6D.js";import"./dForm-8o49JMOI.js";import"./modal-CjmvIDqE.js";import"./index-CGhTEYKp.js";import"./modal-BEhuKh3S.js";import"./tabulatorGrid-rDkNf4Ba.js";import"./defaultButtonsProps-D0FGE1rH.js";import"./index-BGgfnEtT.js";const e={},P={title:"Please select",height:300,fieldsProps:{select:{component:i,columns:s,dataSet:l,selectionMode:!0,autoHeightResize:!0}}},F={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{users:{component:i,label:"Пользователи",columns:s,layout:"fitColumns",height:300,selectionFormProps:P,confirmDelete:!1,onDelete:()=>{},onDataFetch:()=>new Promise((t,a)=>{setTimeout(()=>{Math.random()<.1?a({message:"Ошибка загрузки данных",code:400}):t({data:l})},500)})}},width:900,buttons:u(e)},D=()=>{const t=r.useCallback(()=>{e.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field with selection form"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(d,{onClick:t,children:"Open form"}),o.jsx(c,{...F})]})]})},x=r.lazy(()=>m(()=>import("./index-PpfmoLrq.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),R=t=>o.jsxs(p,{children:[o.jsx("div",{children:o.jsx(D,{})}),o.jsx(n,{}),o.jsx("div",{children:o.jsx(f,{items:[{key:1,label:"Show source",children:o.jsx(r.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(x,{language:"tsx",style:t.darkMode?h:b,showLineNumbers:!0,children:`
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
`})})}]})})]});export{R as Page63254674feab4ecaa23fd540fc38f862,R as default};
