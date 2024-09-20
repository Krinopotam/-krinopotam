const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-9FGXM8eG.js","assets/default-highlight-_K3mzjfK.js","assets/index-CObHp3AH.js"])))=>i.map(i=>d[i]);
import{r as a,j as o,_ as s,D as l}from"./index-CObHp3AH.js";import{B as n}from"./modal-BBQwvlDP.js";import{D as d}from"./dFormModal-BBSecmha.js";import{T as p}from"./tabulatorGridField-C-PNx9nT.js";import{I as r}from"./inputField-CMzynz8s.js";import{F as m}from"./buttonsProps-D1fpiIoG.js";import{a as u,b as c,T as f}from"./tabulatorData-B7Pu9KOW.js";import{P as b,C as h,d as F,c as D}from"./darcula-D-n55oql.js";import"./DownOutlined-BYejAm0U.js";import"./dForm-DjwSwKfj.js";import"./index-BubinFZA.js";import"./CheckOutlined-ka3l-INf.js";import"./modal-B2hVzaN7.js";import"./tabulatorGrid-C-CHviK6.js";import"./defaultButtonsProps-DSb7WT6w.js";import"./iconUtil-DejahXk-.js";import"./index-CVqHkW2e.js";import"./index-Bcx3LFQ2.js";import"./SearchOutlined-DZTAjpNT.js";const e={},i={},x={apiRef:i,formId:"formWithGrid",fieldsProps:{name:{component:r,label:"Name"},age:{component:r,label:"Age"},col:{component:r,label:"Favourite Color"},dob:{component:r,label:"Day of Birth"}},confirmChanges:!0,buttons:m(i)},P={formId:"Test form",apiRef:e,confirmChanges:!0,height:500,width:"50%",fieldsProps:{users:{component:p,label:"Пользователи",columnDefaults:c,columns:f,layout:"fitColumns",autoHeightResize:!0,editFormProps:x,confirmDelete:!0}},buttons:m(e)},C=()=>{const t=a.useCallback(()=>{e.open("update",{dataSet:{users:u}})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(n,{onClick:t,children:"Open form"}),o.jsx(d,{...P})]})]})},g=a.lazy(()=>s(()=>import("./index-9FGXM8eG.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),O=t=>o.jsxs(b,{children:[o.jsx("div",{children:o.jsx(C,{})}),o.jsx(l,{}),o.jsx("div",{children:o.jsx(h,{items:[{key:1,label:"Show source",children:o.jsx(a.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(g,{language:"tsx",style:t.darkMode?F:D,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField";
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {FormLayoutSwitch} from "../../common/buttonsProps";
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from "../../data/tabulatorData";
const formApi = {} as IDFormModalApi;
const editFormApi = {} as IDFormModalApi;
/** Tabulator edit form props */
const editFormProps: IDFormModalProps = {
    apiRef:editFormApi,
    formId: 'formWithGrid',
    fieldsProps: {
        name: {component: InputField, label: 'Name'} ,
        age: {component: InputField, label: 'Age'} ,
        col: {component: InputField, label: 'Favourite Color'},
        dob: {component: InputField, label: 'Day of Birth'} ,
    },
    confirmChanges: true,
    buttons: FormLayoutSwitch(editFormApi),
};
/** main modal form props */
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    height: 500,
    width: '50%',
    fieldsProps: {
        users: {
            component: TabulatorGridField,
            label: 'Пользователи',
            columnDefaults:TabulatorBaseColumnsDef,
            columns: TabulatorBaseColumns,
            layout: 'fitColumns',
            autoHeightResize: true,
            editFormProps: editFormProps,
            confirmDelete: true,
        },
    },
    buttons: FormLayoutSwitch(formApi),
};
export const FormWithGrid = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('update', {dataSet: {users: TabulatorPlainData}});
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
`})})}]})})]});export{O as Pagead6de248c8bf4584a02b99f62bb4feef,O as default};
