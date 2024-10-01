const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cz0v0Rp9.js","assets/default-highlight-CrA-MuiQ.js","assets/index-DKsnjJVp.js"])))=>i.map(i=>d[i]);
import{r as e,j as o,_ as s,D as l}from"./index-DKsnjJVp.js";import{B as n}from"./modal-s_O7aRct.js";import{D as d}from"./dFormModal-BxobeehR.js";import{T as u}from"./tabulatorGridField-DgvrGhs8.js";import{I as r}from"./inputField-E9h4FWeh.js";import{F as m}from"./buttonsProps-CvcbfanL.js";import{b as p,T as c,a as f}from"./tabulatorData-Dp7qYVQO.js";import{P as b,C as h,d as F,c as D}from"./darcula-CbhncTMN.js";import"./dForm-RzxzTjHO.js";import"./index-CSyocx7G.js";import"./modal-sKRn3jmz.js";import"./tabulatorGrid-DCOzFUIF.js";import"./defaultButtonsProps-Bo_d-5AQ.js";import"./index-CxCukQln.js";import"./index-Cr9wBgfG.js";import"./SearchOutlined-K0l7o9jX.js";const a={},i={},x={apiRef:i,formId:"formWithGrid",fieldsProps:{name:{component:r,label:"Name"},age:{component:r,label:"Age"},col:{component:r,label:"Favourite Color"},dob:{component:r,label:"Day of Birth"}},confirmChanges:!0,buttons:m(i)},P={formId:"Test form",apiRef:a,confirmChanges:!0,height:500,width:"50%",fieldsProps:{users:{component:u,label:"Пользователи",columnDefaults:c,columns:f,layout:"fitColumns",autoHeightResize:!0,editFormProps:x,confirmDelete:!0}},buttons:m(a)},C=()=>{const t=e.useCallback(()=>{a.open("update",{dataSet:{users:p}})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(n,{onClick:t,children:"Open form"}),o.jsx(d,{...P})]})]})},g=e.lazy(()=>s(()=>import("./index-Cz0v0Rp9.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),z=t=>o.jsxs(b,{children:[o.jsx("div",{children:o.jsx(C,{})}),o.jsx(l,{}),o.jsx("div",{children:o.jsx(h,{items:[{key:1,label:"Show source",children:o.jsx(e.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(g,{language:"tsx",style:t.darkMode?F:D,showLineNumbers:!0,children:`
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
`})})}]})})]});export{z as Page6aac819fe22743a682fd28348d6073b4,z as default};
