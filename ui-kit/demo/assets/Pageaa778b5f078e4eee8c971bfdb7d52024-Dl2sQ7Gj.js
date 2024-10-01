const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Co9PZaPl.js","assets/default-highlight-DvtBkdhg.js","assets/index-Dv3qFdjW.js"])))=>i.map(i=>d[i]);
import{r as e,j as o,_ as l,D as m}from"./index-Dv3qFdjW.js";import{B as n}from"./modal-Bp_ASPGm.js";import{D as u}from"./dFormModal-BUbiUSeF.js";import{T as a}from"./tabulatorGridField-B2bifJ-i.js";import{F as d}from"./buttonsProps-CSAEaPaH.js";import{b as i,a as s}from"./tabulatorData-LW4kGiGF.js";import{P as c,C as p,d as f,c as h}from"./darcula-MphVyLu8.js";import"./dForm-QxcKLYQQ.js";import"./index-8gx4Y1o-.js";import"./modal-DoluWT5v.js";import"./tabulatorGrid-COGwSkTc.js";import"./defaultButtonsProps-DchoBAIh.js";import"./index-CWJIcpxl.js";const r={},b={title:"Please select",height:300,fieldsProps:{select:{component:a,columns:s,dataSet:i,selectionMode:!0,autoHeightResize:!0}}},F={formId:"Test form",apiRef:r,confirmChanges:!0,height:500,width:"50%",fieldsProps:{users:{component:a,label:"Пользователи",columns:s,layout:"fitColumns",autoHeightResize:!0,selectionFormProps:b,confirmDelete:!0}},buttons:d(r)},P=()=>{const t=e.useCallback(()=>{r.open("update",{dataSet:{users:i}})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field with selection form"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(n,{onClick:t,children:"Open form"}),o.jsx(u,{...F})]})]})},x=e.lazy(()=>l(()=>import("./index-Co9PZaPl.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),B=t=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(P,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(p,{items:[{key:1,label:"Show source",children:o.jsx(e.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(x,{language:"tsx",style:t.darkMode?f:h,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField';
import {FormLayoutSwitch} from '../../common/buttonsProps';
import {TabulatorBaseColumns, TabulatorPlainData} from '../../data/tabulatorData';
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
    height: 500,
    width: '50%',
    fieldsProps: {
        users: {
            component: TabulatorGridField,
            label: 'Пользователи',
            columns: TabulatorBaseColumns,
            layout: 'fitColumns',
            autoHeightResize: true,
            selectionFormProps: selectionFormProps,
            confirmDelete: true,
            //onDataFetch: () => undefined
        },
    },
    buttons: FormLayoutSwitch(formApi),
};
export const FormWithGridWithSelectionForm = (): React.JSX.Element => {
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
`})})}]})})]});export{B as Pageaa778b5f078e4eee8c971bfdb7d52024,B as default};
