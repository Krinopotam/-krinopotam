const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-aRU0KM20.js","assets/default-highlight-Kf2sMSRd.js","assets/index-BEbJdilr.js"])))=>i.map(i=>d[i]);
import{r as a,j as o,_ as s,D as l}from"./index-BEbJdilr.js";import{B as n}from"./modal-DZ70cJBI.js";import{D as d}from"./dFormModal-DVM0pNWI.js";import{T as u}from"./tabulatorGridField-CXWk-EJc.js";import{I as r}from"./inputField-CHnFv8h3.js";import{F as m}from"./buttonsProps-DUvqEtm5.js";import{b as p,T as c,a as f}from"./tabulatorData-BPeH5Pnm.js";import{P as b,C as h,d as F,c as D}from"./darcula-DUU8WC9V.js";import"./dForm-BUs8TQbJ.js";import"./index-DJAh43lQ.js";import"./modal-CKnotMHS.js";import"./tabulatorGrid-CJPVjLWW.js";import"./defaultButtonsProps-BuloFMuY.js";import"./index-BnCadmn7.js";import"./index-C0ukGqzI.js";import"./SearchOutlined-CqkiXlgD.js";const e={},i={},x={apiRef:i,formId:"formWithGrid",fieldsProps:{name:{component:r,label:"Name"},age:{component:r,label:"Age"},col:{component:r,label:"Favourite Color"},dob:{component:r,label:"Day of Birth"}},confirmChanges:!0,buttons:m(i)},P={formId:"Test form",apiRef:e,confirmChanges:!0,height:500,width:"50%",fieldsProps:{users:{component:u,label:"Пользователи",columnDefaults:c,columns:f,layout:"fitColumns",autoHeightResize:!0,editFormProps:x,confirmDelete:!0}},buttons:m(e)},C=()=>{const t=a.useCallback(()=>{e.open("update",{dataSet:{users:p}})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(n,{onClick:t,children:"Open form"}),o.jsx(d,{...P})]})]})},g=a.lazy(()=>s(()=>import("./index-aRU0KM20.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),z=t=>o.jsxs(b,{children:[o.jsx("div",{children:o.jsx(C,{})}),o.jsx(l,{}),o.jsx("div",{children:o.jsx(h,{items:[{key:1,label:"Show source",children:o.jsx(a.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(g,{language:"tsx",style:t.darkMode?F:D,showLineNumbers:!0,children:`
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
`})})}]})})]});export{z as Page393d7251e662466895fd166dfbefff9a,z as default};
