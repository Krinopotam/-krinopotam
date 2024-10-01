const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cz0v0Rp9.js","assets/default-highlight-CrA-MuiQ.js","assets/index-DKsnjJVp.js"])))=>i.map(i=>d[i]);
import{r,j as e,_ as i,D as l}from"./index-DKsnjJVp.js";import{B as n}from"./modal-s_O7aRct.js";import{D as d}from"./dFormModal-BxobeehR.js";import{I as t}from"./inputField-E9h4FWeh.js";import{P as s}from"./passwordField-D9paVcUu.js";import{T as m,a as p}from"./tabulatorData-Dp7qYVQO.js";import{T as u}from"./tabsField-B3Vnownd.js";import{T as g}from"./tabulatorGridField-DgvrGhs8.js";import{F as b}from"./buttonsProps-CvcbfanL.js";import{P as c,C as f,d as h,c as y}from"./darcula-CbhncTMN.js";import"./dForm-RzxzTjHO.js";import"./index-CSyocx7G.js";import"./modal-sKRn3jmz.js";import"./index-Cr9wBgfG.js";import"./SearchOutlined-K0l7o9jX.js";import"./tabulatorGrid-DCOzFUIF.js";import"./defaultButtonsProps-Bo_d-5AQ.js";import"./index-CxCukQln.js";import"./index-j4TMk8Nl.js";const a={},F=[{id:"1",name:"Oli Bob1",age:"12",col:"red",dob:"",rating:1,passed:!1},{id:"2",name:"Mary May1",age:"1",col:"blue",dob:"14/05/1982",rating:2,passed:!1},{id:"3",name:"Christine Kozubowski1",age:"42",col:"green",dob:"22/05/1982",rating:5,passed:!0},{id:"4",name:"Brendon Philips1",age:"125",col:"orange",dob:"01/08/1980",rating:4,passed:!0},{id:"5",name:"Margret Marmalade1",age:"16",col:"yellow",dob:"31/01/1999",rating:3,passed:!0},{id:"6",name:"Oli Bob2",age:"12",col:"red",dob:"",rating:5,passed:!0},{id:"7",name:"Mary May2",age:"1",col:"blue",dob:"14/05/1982",rating:2,passed:!1},{id:"8",name:"Christine Kozubowski2",age:"42",col:"green",dob:"22/05/1982",rating:3,passed:!0},{id:"9",name:"Brendon Philips2",age:"125",col:"orange",dob:"01/08/1980",rating:3,passed:!0},{id:"10",name:"Margret Marmalade2",age:"16",col:"yellow",dob:"31/01/1999",rating:2,passed:!1}],w={formId:"Test form",apiRef:a,confirmChanges:!0,arrowsButtonsSelection:!0,height:500,width:750,fieldsProps:{tabs:{component:u,autoHeightResize:!0,tabs:{" Tab 1":{field1:{component:t,label:"field1",rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},table:{component:g,label:"Table",columnDefaults:m,columns:p,value:F,autoHeightResize:!0,rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},field3:{component:s,label:"field3",width:100,rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]}}," Tab 2":{login:{component:t,label:"Login",rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},password:{component:s,label:"Password",width:100,rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]}}}}},buttons:b(a)},P=()=>{const o=r.useCallback(()=>{a.open("create")},[]);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a form with a TabulatorGrid type field with automatic height in tab"}),e.jsxs("div",{style:{maxWidth:500},children:[e.jsx(n,{onClick:o,children:"Open form"}),e.jsx(d,{...w})]})]})},T=r.lazy(()=>i(()=>import("./index-Cz0v0Rp9.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),W=o=>e.jsxs(c,{children:[e.jsx("div",{children:e.jsx(P,{})}),e.jsx(l,{}),e.jsx("div",{children:e.jsx(f,{items:[{key:1,label:"Show source",children:e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(T,{language:"tsx",style:o.darkMode?h:y,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {IPasswordFieldProps, PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef} from '../../data/tabulatorData';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs';
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
    height: 500,
    width: 750,
    fieldsProps: {
        tabs: {
            component: TabsField, autoHeightResize: true, tabs: {
                ' Tab 1': {
                    field1: {
                        component: InputField,
                        label: 'field1',
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
                    field3: {
                        component: PasswordField,
                        label: 'field3',
                        width: 100,
                        rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
                    } as IPasswordFieldProps,
                },
                ' Tab 2': {
                    login: {
                        component: InputField,
                        label: 'Login',
                        rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
                    } as IInputFieldProps,
                    password: {
                        component: PasswordField,
                        label: 'Password',
                        width: 100,
                        rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
                    } as IPasswordFieldProps,
                }
            }
        },
    },
    buttons: FormLayoutSwitch(formApi),
};
export const AutoHeightTabulatorInTab = (): React.JSX.Element => {
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
`})})}]})})]});export{W as Page07a75fe9a65b4be2895462eada86a933,W as default};
