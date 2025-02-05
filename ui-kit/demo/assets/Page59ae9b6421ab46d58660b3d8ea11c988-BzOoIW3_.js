const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DJhjoKXt.js","assets/default-highlight-1wZDEzJ6.js","assets/index-B5poLpDm.js"])))=>i.map(i=>d[i]);
import{r,j as o,D as l,_ as m}from"./index-B5poLpDm.js";import{b as n}from"./buttonsRow-aX3TQ5bu.js";import{D as d}from"./dFormModal-C_QqbNS_.js";import{T as a}from"./tabulatorGridField-CReHSRkk.js";import{F as u}from"./buttonsProps-AMpdU5hQ.js";import{b as i,T as s}from"./tabulatorData-BmpfO34x.js";import{P as c,C as p,d as f,c as h}from"./darcula-DszBWugp.js";import"./dForm-vrGhQ6Lh.js";import"./messageBox-1o2XjDyt.js";import"./index-AMqWlYeY.js";import"./modal-tHBgt86o.js";import"./tabulatorGrid-igE2XdiX.js";import"./defaultButtonsProps-DtqWhfDr.js";import"./PlusOutlined-Bg-hNKo-.js";import"./index--2ky6TFp.js";const e={},b={title:"Please select",height:300,fieldsProps:{select:{component:a,columns:s,dataSet:i,selectionMode:!0,autoHeightResize:!0}}},F={formId:"Test form",apiRef:e,confirmChanges:!0,height:500,width:"50%",fieldsProps:{users:{component:a,label:"Пользователи",columns:s,layout:"fitColumns",autoHeightResize:!0,selectionFormProps:b,confirmDelete:!1,onDelete:()=>{}}},buttons:u(e)},P=()=>{const t=r.useCallback(()=>{e.open("update",{dataSet:{users:i}})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field with selection form"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(n,{onClick:t,children:"Open form"}),o.jsx(d,{...F})]})]})},x=r.lazy(()=>m(()=>import("./index-DJhjoKXt.js").then(t=>t.dw),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),_=t=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(P,{})}),o.jsx(l,{}),o.jsx("div",{children:o.jsx(p,{items:[{key:1,label:"Show source",children:o.jsx(r.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(x,{language:"tsx",style:t.darkMode?f:h,showLineNumbers:!0,children:`
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
            confirmDelete: false,
            onDelete: () => {},
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
`})})}]})})]});export{_ as Page59ae9b6421ab46d58660b3d8ea11c988,_ as default};
