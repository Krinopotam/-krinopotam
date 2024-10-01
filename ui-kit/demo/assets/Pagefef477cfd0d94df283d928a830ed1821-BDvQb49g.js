const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cz0v0Rp9.js","assets/default-highlight-CrA-MuiQ.js","assets/index-DKsnjJVp.js"])))=>i.map(i=>d[i]);
import{r as e,j as o,_ as m,D as n}from"./index-DKsnjJVp.js";import{B as d}from"./modal-s_O7aRct.js";import{D as u}from"./dFormModal-BxobeehR.js";import{T as i}from"./tabulatorGridField-DgvrGhs8.js";import{F as c}from"./buttonsProps-CvcbfanL.js";import{a as s,b as l}from"./tabulatorData-Dp7qYVQO.js";import{P as p,C as f,d as h,c as b}from"./darcula-CbhncTMN.js";import"./dForm-RzxzTjHO.js";import"./index-CSyocx7G.js";import"./modal-sKRn3jmz.js";import"./tabulatorGrid-DCOzFUIF.js";import"./defaultButtonsProps-Bo_d-5AQ.js";import"./index-CxCukQln.js";const r={},P={title:"Please select",height:300,fieldsProps:{select:{component:i,columns:s,dataSet:l,selectionMode:!0,autoHeightResize:!0}}},F={formId:"Test form",apiRef:r,confirmChanges:!0,fieldsProps:{users:{component:i,label:"Пользователи",columns:s,layout:"fitColumns",height:300,selectionFormProps:P,confirmDelete:!0,onDataFetch:()=>new Promise((t,a)=>{setTimeout(()=>{Math.random()<.1?a({message:"Ошибка загрузки данных",code:400}):t({data:l})},500)})}},width:900,buttons:c(r)},x=()=>{const t=e.useCallback(()=>{r.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field with selection form"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(d,{onClick:t,children:"Open form"}),o.jsx(u,{...F})]})]})},D=e.lazy(()=>m(()=>import("./index-Cz0v0Rp9.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),B=t=>o.jsxs(p,{children:[o.jsx("div",{children:o.jsx(x,{})}),o.jsx(n,{}),o.jsx("div",{children:o.jsx(f,{items:[{key:1,label:"Show source",children:o.jsx(e.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(D,{language:"tsx",style:t.darkMode?h:b,showLineNumbers:!0,children:`
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
`})})}]})})]});export{B as Pagefef477cfd0d94df283d928a830ed1821,B as default};
