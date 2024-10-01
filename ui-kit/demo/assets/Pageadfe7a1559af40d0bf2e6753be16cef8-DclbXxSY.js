const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cs1HhVBL.js","assets/default-highlight-PwdVU7L6.js","assets/index-CNGiMTrA.js"])))=>i.map(i=>d[i]);
import{r as a,j as o,_ as l,D as n}from"./index-CNGiMTrA.js";import{B as d}from"./modal-DVHWH6Qh.js";import{D as p}from"./dFormModal-Clfa5FkM.js";import{I as t}from"./inputField-B4IJanij.js";import{N as u}from"./numberField-DE6GVTLS.js";import{T as c}from"./tabulatorGridField-D-R1xypf.js";import{a as f,b}from"./tabulatorData-BgTLNkAe.js";import{F as s}from"./buttonsProps-SkvPiZH9.js";import{P as F,C as h,d as P,c as D}from"./darcula-BjE4oQkF.js";import"./dForm-DmRsT3BS.js";import"./index-u-jxti1R.js";import"./modal-BKWxOyv5.js";import"./index-B9vEfmTq.js";import"./SearchOutlined-DGkPMlC6.js";import"./tabulatorGrid-C2BdhVJ6.js";import"./defaultButtonsProps-YE4_7d0V.js";import"./index-UyGeAaCN.js";const e={},m={},x={apiRef:m,formId:"formWithGrid",layout:"horizontal",fieldsProps:{name:{component:t,label:"Name"},age:{component:u,label:"Age"},col:{component:t,label:"Favourite Color"},dob:{component:t,label:"Day of Birth"}},confirmChanges:!0,buttons:s(m)},k={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{users:{component:c,label:"Пользователи",columns:f,layout:"fitColumns",height:300,editFormProps:x,confirmDelete:!0,onDataFetch:()=>new Promise((r,i)=>{setTimeout(()=>{Math.random()<.3?i({message:"Ошибка загрузки данных",code:400}):r({data:b})},500)})}},width:900,buttons:s(e)},g=()=>{const r=a.useCallback(()=>{e.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a async Tabulator grid"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(d,{onClick:r,children:"Open form"}),o.jsx(p,{...k})]})]})},y=a.lazy(()=>l(()=>import("./index-Cs1HhVBL.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),z=r=>o.jsxs(F,{children:[o.jsx("div",{children:o.jsx(g,{})}),o.jsx(n,{}),o.jsx("div",{children:o.jsx(h,{items:[{key:1,label:"Show source",children:o.jsx(a.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(y,{language:"tsx",style:r.darkMode?P:D,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {IGridDataSourcePromise} from @krinopotam/ui-kit/tabulatorGrid';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {NumberField} from @krinopotam/ui-kit/dForm/fields/number/numberField";
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField";
import {TabulatorBaseColumns, TabulatorPlainData} from "../../../data/tabulatorData";
import {FormLayoutSwitch} from "../../../common/buttonsProps";
const formApi = {} as IDFormModalApi;
const editFormApi = {} as IDFormModalApi;
/** Tabulator edit form props */
const editFormProps: IDFormModalProps = {
    apiRef:editFormApi,
    formId: 'formWithGrid',
    layout: 'horizontal',
    fieldsProps: {
        name: {component: InputField, label: 'Name'},
        age: {component: NumberField, label: 'Age'},
        col: {component: InputField, label: 'Favourite Color'},
        dob: {component: InputField, label: 'Day of Birth'},
    },
    confirmChanges: true,
    buttons: FormLayoutSwitch(editFormApi),
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
            editFormProps: editFormProps,
            confirmDelete: true,
            onDataFetch: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (Math.random() < 0.3) reject({message: 'Ошибка загрузки данных', code: 400});
                        else resolve({data: TabulatorPlainData}) ;
                    }, 500);
                }) as IGridDataSourcePromise;
            } ,
        } satisfies ITabulatorGridFieldProps,
    },
    width: 900,
    buttons: FormLayoutSwitch(formApi),
};
export const FormWithAsyncTabulatorGrid = (): React.JSX.Element => {
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
`})})}]})})]});export{z as Pageadfe7a1559af40d0bf2e6753be16cef8,z as default};
