import{r as i,j as e,D as l}from"./index-7abbb94e.js";import{P as n,C as d,S as m,d as p,a as u}from"./docco-6bf51e55.js";import{B as g}from"./index-22f8d441.js";import{D as b}from"./dFormModal-d77fb2bf.js";import{I as r}from"./inputField-0673e106.js";import{P as t}from"./passwordField-e3d2d2b1.js";import{T as c,a as f}from"./tabulatorData-c70d6b23.js";import{T as h}from"./tabsField-c7413254.js";import{T as y}from"./tabulatorGridField-12c6c1ff.js";import{F}from"./buttonsProps-48e806a3.js";import"./index-2daee1bb.js";import"./EyeOutlined-4b705a51.js";import"./SearchOutlined-7a7e5389.js";import"./tabulatorGrid-7e279c75.js";import"./DeleteOutlined-038f7985.js";const a={},w=[{id:"1",name:"Oli Bob1",age:"12",col:"red",dob:"",rating:1,passed:!1},{id:"2",name:"Mary May1",age:"1",col:"blue",dob:"14/05/1982",rating:2,passed:!1},{id:"3",name:"Christine Kozubowski1",age:"42",col:"green",dob:"22/05/1982",rating:5,passed:!0},{id:"4",name:"Brendon Philips1",age:"125",col:"orange",dob:"01/08/1980",rating:4,passed:!0},{id:"5",name:"Margret Marmalade1",age:"16",col:"yellow",dob:"31/01/1999",rating:3,passed:!0},{id:"6",name:"Oli Bob2",age:"12",col:"red",dob:"",rating:5,passed:!0},{id:"7",name:"Mary May2",age:"1",col:"blue",dob:"14/05/1982",rating:2,passed:!1},{id:"8",name:"Christine Kozubowski2",age:"42",col:"green",dob:"22/05/1982",rating:3,passed:!0},{id:"9",name:"Brendon Philips2",age:"125",col:"orange",dob:"01/08/1980",rating:3,passed:!0},{id:"10",name:"Margret Marmalade2",age:"16",col:"yellow",dob:"31/01/1999",rating:2,passed:!1}],P={formId:"Test form",apiRef:a,confirmChanges:!0,arrowsButtonsSelection:!0,bodyHeight:500,width:750,fieldsProps:{tabs:{component:h,autoHeightResize:!0,tabs:{" Tab 1":{field1:{component:r,label:"field1",rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},table:{component:y,label:"Table",columnDefaults:c,columns:f,value:w,autoHeightResize:!0,rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},field3:{component:t,label:"field3",width:50,rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]}}," Tab 2":{login:{component:r,label:"Login",rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},password:{component:t,label:"Password",width:50,rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]}}}}},buttons:F(a)},T=()=>{const o=i.useCallback(()=>{a.open("create")},[]);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a form with a TabulatorGrid type field with automatic height in tab"}),e.jsxs("div",{style:{maxWidth:500},children:[e.jsx(g,{onClick:o,children:"Open form"}),e.jsx(b,{...P})]})]})},L=o=>{const s=`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {IPasswordFieldProps, PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef} from '../../data/tabulatorData';
import {ITabulatorGridFieldProps, TabsField, TabulatorGridField} from @krinopotam/ui-kit/dForm';
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
    bodyHeight: 500,
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
`;return e.jsxs(n,{children:[e.jsx("div",{children:e.jsx(T,{})}),e.jsx(l,{}),e.jsx("div",{children:e.jsx(d,{items:[{key:1,label:"Show source",children:e.jsx(m,{language:"javascript",style:o.darkMode?p:u,showLineNumbers:!0,children:s})}]})})]})};export{L as Pageb05e99d1cf0648b18ca63fa59d7c2bae,L as default};
