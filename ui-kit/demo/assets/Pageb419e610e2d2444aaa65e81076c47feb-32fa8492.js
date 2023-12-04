import{r as t,j as e,D as s}from"./index-491b5652.js";import{P as i,C as l,S as n,d,a as m}from"./docco-2ccfe26d.js";import{B as p}from"./index-bb222d24.js";import{D as u}from"./dFormModal-03c7f003.js";import{I as g}from"./inputField-d0938683.js";import{P as c}from"./passwordField-7e2da4e3.js";import{T as b,a as f}from"./tabulatorData-db3ba943.js";import{T as h}from"./tabulatorGridField-275097e0.js";import{F as y}from"./buttonsProps-74f10d61.js";import"./index-92c2cdb7.js";import"./EyeOutlined-ab0d6fcf.js";import"./SearchOutlined-62734d32.js";import"./tabulatorGrid-1fa6dc01.js";import"./DeleteOutlined-4ad9d1b1.js";const a={},w=[{id:"1",name:"Oli Bob1",age:"12",col:"red",dob:"",rating:1,passed:!1},{id:"2",name:"Mary May1",age:"1",col:"blue",dob:"14/05/1982",rating:2,passed:!1},{id:"3",name:"Christine Kozubowski1",age:"42",col:"green",dob:"22/05/1982",rating:5,passed:!0},{id:"4",name:"Brendon Philips1",age:"125",col:"orange",dob:"01/08/1980",rating:4,passed:!0},{id:"5",name:"Margret Marmalade1",age:"16",col:"yellow",dob:"31/01/1999",rating:3,passed:!0},{id:"6",name:"Oli Bob2",age:"12",col:"red",dob:"",rating:5,passed:!0},{id:"7",name:"Mary May2",age:"1",col:"blue",dob:"14/05/1982",rating:2,passed:!1},{id:"8",name:"Christine Kozubowski2",age:"42",col:"green",dob:"22/05/1982",rating:3,passed:!0},{id:"9",name:"Brendon Philips2",age:"125",col:"orange",dob:"01/08/1980",rating:3,passed:!0},{id:"10",name:"Margret Marmalade2",age:"16",col:"yellow",dob:"31/01/1999",rating:2,passed:!1}],F={formId:"Test form",apiRef:a,confirmChanges:!0,arrowsButtonsSelection:!0,bodyHeight:500,width:750,fieldsProps:{login:{component:g,label:"Login",rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},table:{component:h,label:"Table",columnDefaults:b,columns:f,value:w,autoHeightResize:!0,rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},password:{component:c,label:"Password",width:50,rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]}},buttons:y(a)},P=()=>{const o=t.useCallback(()=>{a.open("create")},[]);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a form with a TabulatorGrid type field with automatic height"}),e.jsxs("div",{style:{maxWidth:500},children:[e.jsx(p,{onClick:o,children:"Open form"}),e.jsx(u,{...F})]})]})},H=o=>{const r=`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {IPasswordFieldProps, PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef} from '../../data/tabulatorData';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm';
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
    bodyHeight:500,
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
`;return e.jsxs(i,{children:[e.jsx("div",{children:e.jsx(P,{})}),e.jsx(s,{}),e.jsx("div",{children:e.jsx(l,{items:[{key:1,label:"Show source",children:e.jsx(n,{language:"javascript",style:o.darkMode?d:m,showLineNumbers:!0,children:r})}]})})]})};export{H as Pageb419e610e2d2444aaa65e81076c47feb,H as default};
