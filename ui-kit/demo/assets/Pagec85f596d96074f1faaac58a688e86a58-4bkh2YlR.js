import{r as s,j as o,D as l}from"./index-DhMwsQtd.js";import{P as n,C as d,h as p,d as u,a as c}from"./docco-BR1GjPZn.js";import{B as f}from"./messageBox-CQECnf8I.js";import{D as F}from"./dFormModal-B9s_VGMc.js";import{I as t}from"./inputField-C-ak15WA.js";import{N as b}from"./numberField-B6U47u78.js";import{T as h}from"./tabulatorGridField-B2ianJVO.js";import{T as P,a as D}from"./tabulatorData-rIJmlee8.js";import{F as m}from"./buttonsProps-BdlAnOxn.js";import"./dForm-BvND7aMS.js";import"./index-DNVFzPvX.js";import"./modal-eXRNn5Q9.js";import"./index-CYDA0FvV.js";import"./EyeOutlined-D8voB2bB.js";import"./SearchOutlined-klO5lwg7.js";import"./tabulatorGrid-CVRHT1bL.js";import"./DeleteOutlined-BqcAHwXU.js";const a={},i={},k={apiRef:i,formId:"formWithGrid",layout:"horizontal",fieldsProps:{name:{component:t,label:"Name"},age:{component:b,label:"Age"},col:{component:t,label:"Favourite Color"},dob:{component:t,label:"Day of Birth"}},confirmChanges:!0,buttons:m(i)},T={formId:"Test form",apiRef:a,confirmChanges:!0,fieldsProps:{users:{component:h,label:"Пользователи",columns:P,layout:"fitColumns",height:300,editFormProps:k,confirmDelete:!0,onDataFetch:()=>new Promise((r,e)=>{setTimeout(()=>{Math.random()<.3?e({message:"Ошибка загрузки данных",code:400}):r({data:D})},500)})}},width:900,buttons:m(a)},g=()=>{const r=s.useCallback(()=>{a.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a async Tabulator grid"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(f,{onClick:r,children:"Open form"}),o.jsx(F,{...T})]})]})},z=r=>o.jsxs(n,{children:[o.jsx("div",{children:o.jsx(g,{})}),o.jsx(l,{}),o.jsx("div",{children:o.jsx(d,{items:[{key:1,label:"Show source",children:o.jsx(p,{language:"javascript",style:r.darkMode?u:c,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {IGridDataSourcePromise} from @krinopotam/ui-kit/tabulatorGrid';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {NumberField} from @krinopotam/ui-kit/dForm/fields/number/numberField";
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField";
import {TabulatorBaseColumns, TabulatorPlainData} from "../../../data/tabulatorData";
import {FormLayoutSwitch} from "../../../common/buttonsProps";
const formApi = {} as IDFormModalApi;
const editFormApi = {} as IDFormModalApi;
/** Tabulator edit form props */
const editFormProps: IDFormModalProps = {
    apiRef:editFormApi,
    formId: 'formWithGrid',
    layout: 'horizontal',
    fieldsProps: {
        name: {component: InputField, label: 'Name'},
        age: {component: NumberField, label: 'Age'},
        col: {component: InputField, label: 'Favourite Color'},
        dob: {component: InputField, label: 'Day of Birth'},
    },
    confirmChanges: true,
    buttons: FormLayoutSwitch(editFormApi),
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
            editFormProps: editFormProps,
            confirmDelete: true,
            onDataFetch: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (Math.random() < 0.3) reject({message: 'Ошибка загрузки данных', code: 400});
                        else resolve({data: TabulatorPlainData}) ;
                    }, 500);
                }) as IGridDataSourcePromise;
            } ,
        } satisfies ITabulatorGridFieldProps,
    },
    width: 900,
    buttons: FormLayoutSwitch(formApi),
};
export const FormWithAsyncTabulatorGrid = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('update');
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
`})}]})})]});export{z as Pagec85f596d96074f1faaac58a688e86a58,z as default};