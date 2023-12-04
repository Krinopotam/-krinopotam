import{r as s,j as o,D as l}from"./index-9944374f.js";import{P as n,C as d,S as p,d as u,a as c}from"./docco-d767795b.js";import{B as f}from"./index-df6b3fec.js";import{D as b}from"./dFormModal-d04b30b3.js";import{I as a}from"./inputField-d7a6ced8.js";import{N as F}from"./numberField-9135c854.js";import{T as h}from"./tabulatorGridField-b6fc80dd.js";import{a as P,b as D}from"./tabulatorData-eaf688e2.js";import{F as m}from"./buttonsProps-a911ca67.js";import"./index-1ed5fd40.js";import"./EyeOutlined-4433dc0b.js";import"./SearchOutlined-58270f91.js";import"./tabulatorGrid-7651107b.js";import"./DeleteOutlined-31742ae8.js";const e={},i={},k={apiRef:i,formId:"formWithGrid",layout:"horizontal",fieldsProps:{name:{component:a,label:"Name"},age:{component:F,label:"Age"},col:{component:a,label:"Favourite Color"},dob:{component:a,label:"Day of Birth"}},confirmChanges:!0,buttons:m(i)},x={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{users:{component:h,label:"Пользователи",columns:P,layout:"fitColumns",height:300,editFormProps:k,confirmDelete:!0,onDataFetch:()=>new Promise((r,t)=>{setTimeout(()=>{Math.random()<.5?t({message:"Ошибка загрузки данных",code:400}):r({data:D})},1e3)})}},width:900,buttons:m(e)},g=()=>{const r=s.useCallback(()=>{e.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a async Tabulator grid"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(f,{onClick:r,children:"Open form"}),o.jsx(b,{...x})]})]})},L=r=>{const t=`
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
                        if (Math.random() < 0.5) reject({message: 'Ошибка загрузки данных', code: 400});
                        else resolve({data: TabulatorPlainData}) ;
                    }, 1000);
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
`;return o.jsxs(n,{children:[o.jsx("div",{children:o.jsx(g,{})}),o.jsx(l,{}),o.jsx("div",{children:o.jsx(d,{items:[{key:1,label:"Show source",children:o.jsx(p,{language:"javascript",style:r.darkMode?u:c,showLineNumbers:!0,children:t})}]})})]})};export{L as Page098a71726f694fe7b8506d1d0411f052,L as default};
