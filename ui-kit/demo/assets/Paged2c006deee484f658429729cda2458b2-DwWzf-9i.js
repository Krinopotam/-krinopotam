const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BCkY1BI4.js","assets/default-highlight-BkRzspxv.js","assets/index-D4bHa_3o.js"])))=>i.map(i=>d[i]);
import{r as a,j as o,_ as s,D as l}from"./index-D4bHa_3o.js";import{B as n}from"./modal-Cje67qL2.js";import{D as d}from"./dFormModal-BCjjhs8Y.js";import{T as u}from"./tabulatorGridField-oOAvFXnu.js";import{I as r}from"./inputField-DGR4oCWc.js";import{F as m}from"./buttonsProps-DqS9-gaB.js";import{b as p,T as c,a as f}from"./tabulatorData-rU-MgCHl.js";import{P as b,C as h,d as F,c as D}from"./darcula-DdlBXz-Q.js";import"./dForm-3m-O6pho.js";import"./index-BrKQ3NvS.js";import"./modal-B1kKEzi9.js";import"./tabulatorGrid-DeNUCISi.js";import"./defaultButtonsProps-D413j251.js";import"./index-BVoWYqDG.js";import"./index-D0MhsY60.js";import"./SearchOutlined-C-5aAKd9.js";const e={},i={},x={apiRef:i,formId:"formWithGrid",fieldsProps:{name:{component:r,label:"Name"},age:{component:r,label:"Age"},col:{component:r,label:"Favourite Color"},dob:{component:r,label:"Day of Birth"}},confirmChanges:!0,buttons:m(i)},P={formId:"Test form",apiRef:e,confirmChanges:!0,height:500,width:"50%",fieldsProps:{users:{component:u,label:"Пользователи",columnDefaults:c,columns:f,layout:"fitColumns",autoHeightResize:!0,editFormProps:x,confirmDelete:!0}},buttons:m(e)},C=()=>{const t=a.useCallback(()=>{e.open("update",{dataSet:{users:p}})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(n,{onClick:t,children:"Open form"}),o.jsx(d,{...P})]})]})},g=a.lazy(()=>s(()=>import("./index-BCkY1BI4.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),z=t=>o.jsxs(b,{children:[o.jsx("div",{children:o.jsx(C,{})}),o.jsx(l,{}),o.jsx("div",{children:o.jsx(h,{items:[{key:1,label:"Show source",children:o.jsx(a.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(g,{language:"tsx",style:t.darkMode?F:D,showLineNumbers:!0,children:`
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
`})})}]})})]});export{z as Paged2c006deee484f658429729cda2458b2,z as default};
