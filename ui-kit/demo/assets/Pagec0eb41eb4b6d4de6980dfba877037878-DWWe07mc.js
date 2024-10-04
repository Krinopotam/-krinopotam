const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-HHVvrn9L.js","assets/default-highlight-Bg-yw1Xy.js","assets/index-C4KfxKt0.js"])))=>i.map(i=>d[i]);
import{r,j as e,_ as t,D as s}from"./index-C4KfxKt0.js";import{B as i}from"./modal-B9kdAnYE.js";import{D as l}from"./dFormModal-NILuEzR7.js";import{I as n}from"./inputField-DP4apb2P.js";import{P as d}from"./passwordField-NHDAhQx4.js";import{T as m,a as p}from"./tabulatorData-DHVxAiby.js";import{T as u}from"./tabulatorGridField-Cj8FLCet.js";import{F as c}from"./buttonsProps-DJ62UfWI.js";import{P as g,C as b,d as f,c as h}from"./darcula-Dn2EXRAk.js";import"./dForm-DkkmO2de.js";import"./index-kYmYzKiJ.js";import"./modal-DhSU9O67.js";import"./index-DguPym-O.js";import"./SearchOutlined-1XjRaxWd.js";import"./tabulatorGrid-CPBHSndK.js";import"./defaultButtonsProps-DB_b1JyB.js";import"./index-BK8ljC1v.js";const a={},y=[{id:"1",name:"Oli Bob1",age:"12",col:"red",dob:"",rating:1,passed:!1},{id:"2",name:"Mary May1",age:"1",col:"blue",dob:"14/05/1982",rating:2,passed:!1},{id:"3",name:"Christine Kozubowski1",age:"42",col:"green",dob:"22/05/1982",rating:5,passed:!0},{id:"4",name:"Brendon Philips1",age:"125",col:"orange",dob:"01/08/1980",rating:4,passed:!0},{id:"5",name:"Margret Marmalade1",age:"16",col:"yellow",dob:"31/01/1999",rating:3,passed:!0},{id:"6",name:"Oli Bob2",age:"12",col:"red",dob:"",rating:5,passed:!0},{id:"7",name:"Mary May2",age:"1",col:"blue",dob:"14/05/1982",rating:2,passed:!1},{id:"8",name:"Christine Kozubowski2",age:"42",col:"green",dob:"22/05/1982",rating:3,passed:!0},{id:"9",name:"Brendon Philips2",age:"125",col:"orange",dob:"01/08/1980",rating:3,passed:!0},{id:"10",name:"Margret Marmalade2",age:"16",col:"yellow",dob:"31/01/1999",rating:2,passed:!1}],w={formId:"Test form",apiRef:a,confirmChanges:!0,arrowsButtonsSelection:!0,height:500,width:750,fieldsProps:{login:{component:n,label:"Login",rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},table:{component:u,label:"Table",columnDefaults:m,columns:p,value:y,autoHeightResize:!0,rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},password:{component:d,label:"Password",width:50,rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]}},buttons:c(a)},F=()=>{const o=r.useCallback(()=>{a.open("create")},[]);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a form with a TabulatorGrid type field with automatic height"}),e.jsxs("div",{style:{maxWidth:500},children:[e.jsx(i,{onClick:o,children:"Open form"}),e.jsx(l,{...w})]})]})},P=r.lazy(()=>t(()=>import("./index-HHVvrn9L.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),E=o=>e.jsxs(g,{children:[e.jsx("div",{children:e.jsx(F,{})}),e.jsx(s,{}),e.jsx("div",{children:e.jsx(b,{items:[{key:1,label:"Show source",children:e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(P,{language:"tsx",style:o.darkMode?f:h,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {IPasswordFieldProps, PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef} from '../../data/tabulatorData';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid';
import {IGridRowData} from @krinopotam/ui-kit/tabulatorGrid';
import {FormLayoutSwitch} from "../../common/buttonsProps";
const formApi = {} as IDFormModalApi;
export const dataSet: IGridRowData[] = [
    {id: '1', name: 'Oli Bob1', age: '12', col: 'red', dob: '', rating: 1, passed: false},
    {id: '2', name: 'Mary May1', age: '1', col: 'blue', dob: '14/05/1982', rating: 2, passed: false},
    {id: '3', name: 'Christine Kozubowski1', age: '42', col: 'green', dob: '22/05/1982', rating: 5, passed: true},
    {id: '4', name: 'Brendon Philips1', age: '125', col: 'orange', dob: '01/08/1980', rating: 4, passed: true},
    {id: '5', name: 'Margret Marmalade1', age: '16', col: 'yellow', dob: '31/01/1999', rating: 3, passed: true},
    {id: '6', name: 'Oli Bob2', age: '12', col: 'red', dob: '', rating: 5, passed: true},
    {id: '7', name: 'Mary May2', age: '1', col: 'blue', dob: '14/05/1982', rating: 2, passed: false},
    {id: '8', name: 'Christine Kozubowski2', age: '42', col: 'green', dob: '22/05/1982', rating: 3, passed: true},
    {id: '9', name: 'Brendon Philips2', age: '125', col: 'orange', dob: '01/08/1980', rating: 3, passed: true},
    {id: '10', name: 'Margret Marmalade2', age: '16', col: 'yellow', dob: '31/01/1999', rating: 2, passed: false},
];
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    arrowsButtonsSelection: true,
    height:500,
    width:750,
    fieldsProps: {
        login: {
            component: InputField,
            label: 'Login',
            rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
        } as IInputFieldProps,
        table: {
            component: TabulatorGridField,
            label: 'Table',
            columnDefaults: TabulatorBaseColumnsDef,
            columns: TabulatorBaseColumns,
            value: dataSet,
            autoHeightResize: true,
            rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
        } as ITabulatorGridFieldProps,
        password: {
            component: PasswordField,
            label: 'Password',
            width: 50,
            rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
        } as IPasswordFieldProps,
    },
    buttons: FormLayoutSwitch(formApi),
};
export const AutoHeightTabulator = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('create');
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
`})})}]})})]});export{E as Pagec0eb41eb4b6d4de6980dfba877037878,E as default};
