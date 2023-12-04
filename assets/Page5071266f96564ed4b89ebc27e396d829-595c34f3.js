import{r as s,j as o,D as l}from"./index-23555c5c.js";import{P as n,C as d,S as p,d as u,a as c}from"./docco-c24c9fde.js";import{B as f}from"./index-e5590f2c.js";import{D as b}from"./dFormModal-9d6a497b.js";import{I as e}from"./inputField-52d55a73.js";import{N as F}from"./numberField-f26d7fce.js";import{T as h}from"./tabulatorGridField-264ab788.js";import{a as P,b as D}from"./tabulatorData-2c657cfc.js";import{F as m}from"./buttonsProps-b1195f93.js";import"./index-c1cedb01.js";import"./EyeOutlined-cf850273.js";import"./SearchOutlined-d23aaaab.js";import"./tabulatorGrid-1186b9ea.js";import"./DeleteOutlined-6d7b808b.js";const a={},i={},k={apiRef:i,formId:"formWithGrid",layout:"horizontal",fieldsProps:{name:{component:e,label:"Name"},age:{component:F,label:"Age"},col:{component:e,label:"Favourite Color"},dob:{component:e,label:"Day of Birth"}},confirmChanges:!0,buttons:m(i)},x={formId:"Test form",apiRef:a,confirmChanges:!0,fieldsProps:{users:{component:h,label:"Пользователи",columns:P,layout:"fitColumns",height:300,editFormProps:k,confirmDelete:!0,onDataFetch:()=>new Promise((r,t)=>{setTimeout(()=>{Math.random()<.5?t({message:"Ошибка загрузки данных",code:400}):r({data:D})},1e3)})}},width:900,buttons:m(a)},g=()=>{const r=s.useCallback(()=>{a.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a async Tabulator grid"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(f,{onClick:r,children:"Open form"}),o.jsx(b,{...x})]})]})},L=r=>{const t=`
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
`;return o.jsxs(n,{children:[o.jsx("div",{children:o.jsx(g,{})}),o.jsx(l,{}),o.jsx("div",{children:o.jsx(d,{items:[{key:1,label:"Show source",children:o.jsx(p,{language:"javascript",style:r.darkMode?u:c,showLineNumbers:!0,children:t})}]})})]})};export{L as Page5071266f96564ed4b89ebc27e396d829,L as default};
