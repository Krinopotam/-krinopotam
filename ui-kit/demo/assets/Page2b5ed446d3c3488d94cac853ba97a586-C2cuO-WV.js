const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C2SUEjL0.js","assets/default-highlight-BDFjN1OP.js","assets/index-CgBeyb-e.js"])))=>i.map(i=>d[i]);
import{r as e,j as o,_ as l,D as m}from"./index-CgBeyb-e.js";import{B as n}from"./modal-hi51mlNB.js";import{D as u}from"./dFormModal-B-TtMmSz.js";import{T as a}from"./tabulatorGridField-eanR-mo2.js";import{F as d}from"./buttonsProps-4AZ7BKsV.js";import{b as i,a as s}from"./tabulatorData-CNf7XRJ4.js";import{P as c,C as p,d as f,c as h}from"./darcula-Bm4NDPn1.js";import"./dForm-B-6Y2TlM.js";import"./index-Birbnh4n.js";import"./modal-D01YMXTL.js";import"./tabulatorGrid-DAyVcvcb.js";import"./defaultButtonsProps-BjCvvsD6.js";import"./index-blBfG32B.js";const r={},b={title:"Please select",height:300,fieldsProps:{select:{component:a,columns:s,dataSet:i,selectionMode:!0,autoHeightResize:!0}}},F={formId:"Test form",apiRef:r,confirmChanges:!0,height:500,width:"50%",fieldsProps:{users:{component:a,label:"Пользователи",columns:s,layout:"fitColumns",autoHeightResize:!0,selectionFormProps:b,confirmDelete:!0}},buttons:d(r)},P=()=>{const t=e.useCallback(()=>{r.open("update",{dataSet:{users:i}})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field with selection form"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(n,{onClick:t,children:"Open form"}),o.jsx(u,{...F})]})]})},x=e.lazy(()=>l(()=>import("./index-C2SUEjL0.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),B=t=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(P,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(p,{items:[{key:1,label:"Show source",children:o.jsx(e.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(x,{language:"tsx",style:t.darkMode?f:h,showLineNumbers:!0,children:`
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
`})})}]})})]});export{B as Page2b5ed446d3c3488d94cac853ba97a586,B as default};
