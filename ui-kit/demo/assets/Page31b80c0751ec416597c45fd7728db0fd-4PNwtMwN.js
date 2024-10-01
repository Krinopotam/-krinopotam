const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Co9PZaPl.js","assets/default-highlight-DvtBkdhg.js","assets/index-Dv3qFdjW.js"])))=>i.map(i=>d[i]);
import{r as a,j as o,_ as l,D as n}from"./index-Dv3qFdjW.js";import{B as d}from"./modal-Bp_ASPGm.js";import{D as p}from"./dFormModal-BUbiUSeF.js";import{I as t}from"./inputField-C4gwpQCw.js";import{N as u}from"./numberField-J6EDWD1M.js";import{T as c}from"./tabulatorGridField-B2bifJ-i.js";import{a as f,b}from"./tabulatorData-LW4kGiGF.js";import{F as s}from"./buttonsProps-CSAEaPaH.js";import{P as F,C as h,d as P,c as D}from"./darcula-MphVyLu8.js";import"./dForm-QxcKLYQQ.js";import"./index-8gx4Y1o-.js";import"./modal-DoluWT5v.js";import"./index-qOGxHuln.js";import"./SearchOutlined-DCaoIkCx.js";import"./tabulatorGrid-COGwSkTc.js";import"./defaultButtonsProps-DchoBAIh.js";import"./index-CWJIcpxl.js";const e={},m={},x={apiRef:m,formId:"formWithGrid",layout:"horizontal",fieldsProps:{name:{component:t,label:"Name"},age:{component:u,label:"Age"},col:{component:t,label:"Favourite Color"},dob:{component:t,label:"Day of Birth"}},confirmChanges:!0,buttons:s(m)},k={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{users:{component:c,label:"Пользователи",columns:f,layout:"fitColumns",height:300,editFormProps:x,confirmDelete:!0,onDataFetch:()=>new Promise((r,i)=>{setTimeout(()=>{Math.random()<.3?i({message:"Ошибка загрузки данных",code:400}):r({data:b})},500)})}},width:900,buttons:s(e)},g=()=>{const r=a.useCallback(()=>{e.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a async Tabulator grid"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(d,{onClick:r,children:"Open form"}),o.jsx(p,{...k})]})]})},y=a.lazy(()=>l(()=>import("./index-Co9PZaPl.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),z=r=>o.jsxs(F,{children:[o.jsx("div",{children:o.jsx(g,{})}),o.jsx(n,{}),o.jsx("div",{children:o.jsx(h,{items:[{key:1,label:"Show source",children:o.jsx(a.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(y,{language:"tsx",style:r.darkMode?P:D,showLineNumbers:!0,children:`
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
`})})}]})})]});export{z as Page31b80c0751ec416597c45fd7728db0fd,z as default};
