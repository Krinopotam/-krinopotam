const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-UHTfNfHP.js","assets/default-highlight-BW2eIfdj.js","assets/index-fLDE7RV8.js"])))=>i.map(i=>d[i]);
import{r as a,j as o,_ as l,D as n}from"./index-fLDE7RV8.js";import{b as d}from"./mergeButtons-5jDhs16v.js";import{D as p}from"./dFormModal-BONKQnKH.js";import{I as t}from"./inputField-CjWubR6e.js";import{N as u}from"./numberField-BRjKoRoA.js";import{T as c}from"./tabulatorGridField-DZZlCS7S.js";import{T as f,a as b}from"./tabulatorData-DJNiiClm.js";import{F as s}from"./buttonsProps-LpFfehxM.js";import{P as F,C as h,d as P,c as D}from"./darcula-BAaai0cd.js";import"./dForm-DcZj9aOC.js";import"./modal-CJqMGIFI.js";import"./index-Dm8OxE-t.js";import"./modal-DKiW44iu.js";import"./index-BoVgkjiJ.js";import"./SearchOutlined-bm7ljvup.js";import"./tabulatorGrid-BJwlOlPS.js";import"./defaultButtonsProps-BRD3xjmK.js";import"./index-CTvaTwjg.js";const e={},m={},x={apiRef:m,formId:"formWithGrid",layout:"horizontal",fieldsProps:{name:{component:t,label:"Name"},age:{component:u,label:"Age"},col:{component:t,label:"Favourite Color"},dob:{component:t,label:"Day of Birth"}},confirmChanges:!0,buttons:s(m)},k={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{users:{component:c,label:"Пользователи",columns:f,layout:"fitColumns",height:300,editFormProps:x,confirmDelete:!0,onDelete:()=>{},onDataFetch:()=>new Promise((r,i)=>{setTimeout(()=>{Math.random()<.3?i({message:"Ошибка загрузки данных",code:400}):r({data:b})},500)})}},width:900,buttons:s(e)},T=()=>{const r=a.useCallback(()=>{e.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a async Tabulator grid"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(d,{onClick:r,children:"Open form"}),o.jsx(p,{...k})]})]})},g=a.lazy(()=>l(()=>import("./index-UHTfNfHP.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),O=r=>o.jsxs(F,{children:[o.jsx("div",{children:o.jsx(T,{})}),o.jsx(n,{}),o.jsx("div",{children:o.jsx(h,{items:[{key:1,label:"Show source",children:o.jsx(a.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(g,{language:"tsx",style:r.darkMode?P:D,showLineNumbers:!0,children:`
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
            onDelete: () => {},
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
`})})}]})})]});export{O as Page2a092fbda01b4c2a8c69ad808c1f8ead,O as default};
