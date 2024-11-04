const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CaEZq3o6.js","assets/default-highlight-Co1BbaV1.js","assets/index-CzYOWtY3.js"])))=>i.map(i=>d[i]);
import{r as a,j as o,_ as l,D as n}from"./index-CzYOWtY3.js";import{b as d}from"./buttonsRow-NOziNv-G.js";import{D as p}from"./dFormModal-6yYFB7nU.js";import{I as t}from"./inputField-JsxEKsAN.js";import{N as u}from"./numberField-DTDBx6q-.js";import{T as c}from"./tabulatorGridField-PJ_t9CPq.js";import{b as f,T as b}from"./tabulatorData-A6MdMGe-.js";import{F as s}from"./buttonsProps-DOMeKhty.js";import{P as F,C as h,d as P,c as D}from"./darcula-fwW_2Y8a.js";import"./dForm-oEAd0w94.js";import"./modal-BG6C0-ZR.js";import"./index-DX1MZAsy.js";import"./modal-Bv76__XP.js";import"./index-BQhEJFnB.js";import"./SearchOutlined-C3qLh6j9.js";import"./tabulatorGrid-CHQlxMIO.js";import"./defaultButtonsProps-DlxVY7Az.js";import"./PlusOutlined-BAR0uPLn.js";import"./index-CCx_ORm0.js";const e={},m={},x={apiRef:m,formId:"formWithGrid",layout:"horizontal",fieldsProps:{name:{component:t,label:"Name"},age:{component:u,label:"Age"},col:{component:t,label:"Favourite Color"},dob:{component:t,label:"Day of Birth"}},confirmChanges:!0,buttons:s(m)},g={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{users:{component:c,label:"Пользователи",columns:f,layout:"fitColumns",height:300,editFormProps:x,confirmDelete:!0,onDelete:()=>{},onDataFetch:()=>new Promise((r,i)=>{setTimeout(()=>{Math.random()<.3?i({message:"Random loading data error",code:400}):r({data:b})},500)})}},width:900,buttons:s(e)},k=()=>{const r=a.useCallback(()=>{e.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a async Tabulator grid"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(d,{onClick:r,children:"Open form"}),o.jsx(p,{...g})]})]})},T=a.lazy(()=>l(()=>import("./index-CaEZq3o6.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),H=r=>o.jsxs(F,{children:[o.jsx("div",{children:o.jsx(k,{})}),o.jsx(n,{}),o.jsx("div",{children:o.jsx(h,{items:[{key:1,label:"Show source",children:o.jsx(a.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(T,{language:"tsx",style:r.darkMode?P:D,showLineNumbers:!0,children:`
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
            onDelete: () => {},
            onDataFetch: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (Math.random() < 0.3) reject({message: 'Random loading data error', code: 400});
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
`})})}]})})]});export{H as Pagec279954127cf47739951bbb63e6fda1e,H as default};
