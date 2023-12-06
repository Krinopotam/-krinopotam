import{r as l,j as o,D as m}from"./index-0409158c.js";import{P as n,C as d,S as u,d as c,a as p}from"./docco-fa9c9fcc.js";import{B as f}from"./index-da9b0dd9.js";import{D as h}from"./dFormModal-235aed86.js";import{T as e}from"./tabulatorGridField-c42e486a.js";import{F as b}from"./buttonsProps-1fa0e94e.js";import{b as a,a as i}from"./tabulatorData-fbb7c043.js";import"./tabulatorGrid-22da0f8d.js";import"./EyeOutlined-c44a8289.js";import"./DeleteOutlined-75656d28.js";const r={},F={title:"Please select",bodyHeight:300,fieldsProps:{select:{component:e,columns:i,dataSet:a,selectionMode:!0,autoHeightResize:!0}}},P={formId:"Test form",apiRef:r,confirmChanges:!0,fieldsProps:{users:{component:e,label:"Пользователи",columns:i,layout:"fitColumns",height:300,selectionFormProps:F,confirmDelete:!0}},width:900,buttons:b(r)},x=()=>{const t=l.useCallback(()=>{r.open("update",{users:a})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field with selection form"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(f,{onClick:t,children:"Open form"}),o.jsx(h,{...P})]})]})},w=t=>{const s=`
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
`;return o.jsxs(n,{children:[o.jsx("div",{children:o.jsx(x,{})}),o.jsx(m,{}),o.jsx("div",{children:o.jsx(d,{items:[{key:1,label:"Show source",children:o.jsx(u,{language:"javascript",style:t.darkMode?c:p,showLineNumbers:!0,children:s})}]})})]})};export{w as Pagea09afec4d32049c98d23980a6bc9daad,w as default};
