import{r as i,j as o,D as l}from"./index-Bl-1kopd.js";import{P as m,C as n,h as u,d,a as c}from"./docco-DI1KRtYq.js";import{B as p}from"./index-Cz3A2iSd.js";import{D as f}from"./dFormModal-COFbO3rY.js";import{T as e}from"./tabulatorGridField-hh0J6WI6.js";import{F as h}from"./buttonsProps-DZhizrpW.js";import{a,T as s}from"./tabulatorData-_B0aRVvD.js";import"./tabulatorGrid-BopOrzIc.js";import"./EyeOutlined-VtVLuKtp.js";import"./DeleteOutlined-C4ZPs8sE.js";const r={},b={title:"Please select",bodyHeight:300,fieldsProps:{select:{component:e,columns:s,dataSet:a,selectionMode:!0,autoHeightResize:!0}}},F={formId:"Test form",apiRef:r,confirmChanges:!0,fieldsProps:{users:{component:e,label:"Пользователи",columns:s,layout:"fitColumns",height:300,selectionFormProps:b,confirmDelete:!0}},width:900,buttons:h(r)},P=()=>{const t=i.useCallback(()=>{r.open("update",{users:a})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field with selection form"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(p,{onClick:t,children:"Open form"}),o.jsx(f,{...F})]})]})},B=t=>o.jsxs(m,{children:[o.jsx("div",{children:o.jsx(P,{})}),o.jsx(l,{}),o.jsx("div",{children:o.jsx(n,{items:[{key:1,label:"Show source",children:o.jsx(u,{language:"javascript",style:t.darkMode?d:c,showLineNumbers:!0,children:`
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
`})}]})})]});export{B as Page91aba21ca78641aaa2b0381506958be9,B as default};
