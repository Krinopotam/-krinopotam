import{r as l,j as o,D as m}from"./index-9944374f.js";import{P as n,C as d,S as u,d as c,a as p}from"./docco-d767795b.js";import{B as f}from"./index-df6b3fec.js";import{D as h}from"./dFormModal-d04b30b3.js";import{T as e}from"./tabulatorGridField-b6fc80dd.js";import{F as b}from"./buttonsProps-a911ca67.js";import{b as a,a as i}from"./tabulatorData-eaf688e2.js";import"./tabulatorGrid-7651107b.js";import"./EyeOutlined-4433dc0b.js";import"./DeleteOutlined-31742ae8.js";const r={},F={title:"Please select",bodyHeight:300,fieldsProps:{select:{component:e,columns:i,dataSet:a,selectionMode:!0,autoHeightResize:!0}}},P={formId:"Test form",apiRef:r,confirmChanges:!0,fieldsProps:{users:{component:e,label:"Пользователи",columns:i,layout:"fitColumns",height:300,selectionFormProps:F,confirmDelete:!0}},width:900,buttons:b(r)},x=()=>{const t=l.useCallback(()=>{r.open("update",{users:a})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field with selection form"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(f,{onClick:t,children:"Open form"}),o.jsx(h,{...P})]})]})},w=t=>{const s=`
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
    bodyHeight: 300,
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
            //onDataFetch: () => undefined
        },
    },
    width: 900,
    buttons: FormLayoutSwitch(formApi),
};
export const FormWithGridWithSelectionForm = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('update', {users: TabulatorPlainData});
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
`;return o.jsxs(n,{children:[o.jsx("div",{children:o.jsx(x,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(d,{items:[{key:1,label:"Show source",children:o.jsx(u,{language:"javascript",style:t.darkMode?c:p,showLineNumbers:!0,children:s})}]})})]})};export{w as Pagec39e18371f1a466eacfd4a019b0fd527,w as default};
