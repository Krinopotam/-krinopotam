import{r as s,j as o,D as l}from"./index-BRcPwwbH.js";import{P as m,C as n,h as d,d as u,a as c}from"./docco-8ZfxCt3s.js";import{B as p}from"./messageBox-Dgk4xpFW.js";import{D as f}from"./dFormModal-TbW2WofU.js";import{T as e}from"./tabulatorGridField-CNdwY8af.js";import{F as h}from"./buttonsProps-mfzB23hP.js";import{a,T as i}from"./tabulatorData-B34ZnO01.js";import"./dForm-CIlSW0lt.js";import"./index-Bcoz37Cc.js";import"./modal-BltPdufQ.js";import"./tabulatorGrid-BC2Pjm80.js";import"./EyeOutlined-CTsTM-Dg.js";import"./DeleteOutlined-CKLDhuks.js";const r={},b={title:"Please select",bodyHeight:300,fieldsProps:{select:{component:e,columns:i,dataSet:a,selectionMode:!0,autoHeightResize:!0}}},F={formId:"Test form",apiRef:r,confirmChanges:!0,fieldsProps:{users:{component:e,label:"Пользователи",columns:i,layout:"fitColumns",height:300,selectionFormProps:b,confirmDelete:!0}},width:900,buttons:h(r)},P=()=>{const t=s.useCallback(()=>{r.open("update",{users:a})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field with selection form"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(p,{onClick:t,children:"Open form"}),o.jsx(f,{...F})]})]})},v=t=>o.jsxs(m,{children:[o.jsx("div",{children:o.jsx(P,{})}),o.jsx(l,{}),o.jsx("div",{children:o.jsx(n,{items:[{key:1,label:"Show source",children:o.jsx(d,{language:"javascript",style:t.darkMode?u:c,showLineNumbers:!0,children:`
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
`})}]})})]});export{v as Pageedaa4da58e93489abd3e178401242c92,v as default};
