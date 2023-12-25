import{r as s,j as o,D as l}from"./index-3024f328.js";import{P as n,C as d,S as p,d as u,a as c}from"./docco-8e796366.js";import{B as f}from"./index-901967cb.js";import{D as b}from"./dFormModal-09fd0649.js";import{I as a}from"./inputField-a558b472.js";import{N as F}from"./numberField-87204ed2.js";import{T as h}from"./tabulatorGridField-47eb5197.js";import{T as P,a as D}from"./tabulatorData-f1a03775.js";import{F as m}from"./buttonsProps-718efc56.js";import"./index-83c0c0ea.js";import"./EyeOutlined-ff2ae648.js";import"./SearchOutlined-8979e289.js";import"./tabulatorGrid-a1a2b210.js";import"./DeleteOutlined-73630e69.js";const e={},i={},k={apiRef:i,formId:"formWithGrid",layout:"horizontal",fieldsProps:{name:{component:a,label:"Name"},age:{component:F,label:"Age"},col:{component:a,label:"Favourite Color"},dob:{component:a,label:"Day of Birth"}},confirmChanges:!0,buttons:m(i)},x={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{users:{component:h,label:"Пользователи",columns:P,layout:"fitColumns",height:300,editFormProps:k,confirmDelete:!0,onDataFetch:()=>new Promise((r,t)=>{setTimeout(()=>{Math.random()<.3?t({message:"Ошибка загрузки данных",code:400}):r({data:D})},500)})}},width:900,buttons:m(e)},T=()=>{const r=s.useCallback(()=>{e.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a async Tabulator grid"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(f,{onClick:r,children:"Open form"}),o.jsx(b,{...x})]})]})},L=r=>{const t=`
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
`;return o.jsxs(n,{children:[o.jsx("div",{children:o.jsx(T,{})}),o.jsx(l,{}),o.jsx("div",{children:o.jsx(d,{items:[{key:1,label:"Show source",children:o.jsx(p,{language:"javascript",style:r.darkMode?u:c,showLineNumbers:!0,children:t})}]})})]})};export{L as Page07cbd56d4d5f417fa997d73859676d4b,L as default};
