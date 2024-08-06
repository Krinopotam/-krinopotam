import{r as s,j as o,D as l}from"./index-Bl-1kopd.js";import{P as n,C as d,h as p,d as u,a as c}from"./docco-DI1KRtYq.js";import{B as f}from"./index-Cz3A2iSd.js";import{D as b}from"./dFormModal-COFbO3rY.js";import{I as t}from"./inputField-BJn_KJf5.js";import{N as F}from"./numberField-obfwZ_ue.js";import{T as h}from"./tabulatorGridField-hh0J6WI6.js";import{T as P,a as D}from"./tabulatorData-_B0aRVvD.js";import{F as m}from"./buttonsProps-DZhizrpW.js";import"./index-dliuYOsp.js";import"./EyeOutlined-VtVLuKtp.js";import"./SearchOutlined-Drmuc8b0.js";import"./tabulatorGrid-BopOrzIc.js";import"./DeleteOutlined-C4ZPs8sE.js";const e={},i={},k={apiRef:i,formId:"formWithGrid",layout:"horizontal",fieldsProps:{name:{component:t,label:"Name"},age:{component:F,label:"Age"},col:{component:t,label:"Favourite Color"},dob:{component:t,label:"Day of Birth"}},confirmChanges:!0,buttons:m(i)},T={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{users:{component:h,label:"Пользователи",columns:P,layout:"fitColumns",height:300,editFormProps:k,confirmDelete:!0,onDataFetch:()=>new Promise((r,a)=>{setTimeout(()=>{Math.random()<.3?a({message:"Ошибка загрузки данных",code:400}):r({data:D})},500)})}},width:900,buttons:m(e)},g=()=>{const r=s.useCallback(()=>{e.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a async Tabulator grid"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(f,{onClick:r,children:"Open form"}),o.jsx(b,{...T})]})]})},L=r=>o.jsxs(n,{children:[o.jsx("div",{children:o.jsx(g,{})}),o.jsx(l,{}),o.jsx("div",{children:o.jsx(d,{items:[{key:1,label:"Show source",children:o.jsx(p,{language:"javascript",style:r.darkMode?u:c,showLineNumbers:!0,children:`
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
`})}]})})]});export{L as Page1e52e54b481b4c4c83a49cc26de545c9,L as default};
