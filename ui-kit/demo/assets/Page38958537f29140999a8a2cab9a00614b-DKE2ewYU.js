import{r as s,j as e,D as i}from"./index-jRq8dFl9.js";import{P as l,C as n,h as d,d as m,a as p}from"./docco-DVswO1UK.js";import{B as u}from"./messageBox-A1wgNO27.js";import{D as g}from"./dFormModal-DuFw94ex.js";import{I as r}from"./inputField-DjpktlwZ.js";import{P as t}from"./passwordField-BcOkdDNE.js";import{b,T as c}from"./tabulatorData-D9ENxapK.js";import{T as f}from"./tabsField-cI-OOpP-.js";import{T as h}from"./tabulatorGridField-BMuYQ7dM.js";import{F as y}from"./buttonsProps-C8-j13mC.js";import"./dForm-CmpnCynY.js";import"./index-h_fYsjXx.js";import"./modal-Bq0KGAYX.js";import"./index-CBQ57er9.js";import"./EyeOutlined-B_mcHe4i.js";import"./SearchOutlined-y0oc_54U.js";import"./tabulatorGrid-Dp7y1jLu.js";import"./DeleteOutlined-KSC0BHZd.js";const a={},F=[{id:"1",name:"Oli Bob1",age:"12",col:"red",dob:"",rating:1,passed:!1},{id:"2",name:"Mary May1",age:"1",col:"blue",dob:"14/05/1982",rating:2,passed:!1},{id:"3",name:"Christine Kozubowski1",age:"42",col:"green",dob:"22/05/1982",rating:5,passed:!0},{id:"4",name:"Brendon Philips1",age:"125",col:"orange",dob:"01/08/1980",rating:4,passed:!0},{id:"5",name:"Margret Marmalade1",age:"16",col:"yellow",dob:"31/01/1999",rating:3,passed:!0},{id:"6",name:"Oli Bob2",age:"12",col:"red",dob:"",rating:5,passed:!0},{id:"7",name:"Mary May2",age:"1",col:"blue",dob:"14/05/1982",rating:2,passed:!1},{id:"8",name:"Christine Kozubowski2",age:"42",col:"green",dob:"22/05/1982",rating:3,passed:!0},{id:"9",name:"Brendon Philips2",age:"125",col:"orange",dob:"01/08/1980",rating:3,passed:!0},{id:"10",name:"Margret Marmalade2",age:"16",col:"yellow",dob:"31/01/1999",rating:2,passed:!1}],w={formId:"Test form",apiRef:a,confirmChanges:!0,arrowsButtonsSelection:!0,height:500,width:750,fieldsProps:{tabs:{component:f,autoHeightResize:!0,tabs:{" Tab 1":{field1:{component:r,label:"field1",rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},table:{component:h,label:"Table",columnDefaults:b,columns:c,value:F,autoHeightResize:!0,rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},field3:{component:t,label:"field3",width:50,rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]}}," Tab 2":{login:{component:r,label:"Login",rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},password:{component:t,label:"Password",width:50,rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]}}}}},buttons:y(a)},P=()=>{const o=s.useCallback(()=>{a.open("create")},[]);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a form with a TabulatorGrid type field with automatic height in tab"}),e.jsxs("div",{style:{maxWidth:500},children:[e.jsx(u,{onClick:o,children:"Open form"}),e.jsx(g,{...w})]})]})},K=o=>e.jsxs(l,{children:[e.jsx("div",{children:e.jsx(P,{})}),e.jsx(i,{}),e.jsx("div",{children:e.jsx(n,{items:[{key:1,label:"Show source",children:e.jsx(d,{language:"javascript",style:o.darkMode?m:p,showLineNumbers:!0,children:`
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
                        width: 50,
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
                        width: 50,
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
`})}]})})]});export{K as Page38958537f29140999a8a2cab9a00614b,K as default};
