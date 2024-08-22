import{r as s,j as t,D as d}from"./index-OT-fUFlw.js";import{P as p,C as c,h as u,d as f,a as F}from"./docco-Dp5WB1My.js";import{B as b}from"./messageBox-deXCqDea.js";import{D as h}from"./dFormModal-Brw-56ya.js";import{T as g}from"./tabulatorGridField-BGPBKX2z.js";import{I as r}from"./inputField-Coz0I3xz.js";import{F as m}from"./buttonsProps-BMlR5a_A.js";import{b as D,G as a}from"./tabulatorData-Bua633a3.js";import"./dForm-CXdkNth1.js";import"./index-BzsQSyIK.js";import"./modal-Cu7Nzp09.js";import"./tabulatorGrid-BdayD2VY.js";import"./EyeOutlined-BLUlGsNj.js";import"./DeleteOutlined-BFYA2MP_.js";import"./index-BXyp7rr8.js";import"./SearchOutlined-q14VqUwO.js";const C=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],e={},l={},k={apiRef:l,formId:"formWithGrid",fieldsProps:{col1:{component:r,label:"Column 1"},col2:{component:r,label:"Column 2"},col3:{component:r,label:"Column 3"}},confirmChanges:!0,buttons:m(l)},n={},S={formId:"Test form",apiRef:e,confirmChanges:!0,fieldsProps:{grid:{component:g,apiRef:n,label:"Пользователи",columnDefaults:D,columns:C,layout:"fitColumns",height:300,editFormProps:k,confirmDelete:!0}},width:900,buttons:{...m(e),updateDataSet:{type:"button",title:"Update DataSet",position:"center",onClick:()=>{e.model.getField("grid").setValue(a(1e3,"Set field Value "))}},asyncUpdateDataSet:{type:"button",title:"Async update DataSet",position:"center",onClick:()=>{n.fetchData(()=>new Promise((o,i)=>{setTimeout(()=>{Math.random()<.1?i({message:"Ошибка загрузки данных",code:400}):o({data:a(1e3,"async ")})},1e3)}))}},clearDataSet:{type:"button",title:"Clear DataSet",position:"center",onClick:()=>{e.model.getField("grid").setValue([])}}}},y=()=>{const o=s.useCallback(()=>{e.open("update",{grid:a(1e3,"Initial ")})},[]);return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field"}),t.jsxs("div",{style:{maxWidth:500},children:[t.jsx(b,{onClick:o,children:"Open form"}),t.jsx(h,{...S})]})]})},U=o=>t.jsxs(p,{children:[t.jsx("div",{children:t.jsx(y,{})}),t.jsx(d,{}),t.jsx("div",{children:t.jsx(c,{items:[{key:1,label:"Show source",children:t.jsx(u,{language:"javascript",style:o.darkMode?f:F,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {FormLayoutSwitch} from '../../common/buttonsProps';
import {GenerateDataSet, TabulatorBaseColumnsDef} from '../../data/tabulatorData';
import {ITabulatorProps} from @krinopotam/ui-kit/tabulatorBase';
import {IGridApi} from @krinopotam/ui-kit/tabulatorGrid";
const columns: ITabulatorProps['columns'] = [
    {title: 'Column 1', field: 'col1'},
    {title: 'Column 2', field: 'col2'},
    {title: 'Column 3', field: 'col3'},
];
const formApi = {} as IDFormModalApi;
const editFormApi = {} as IDFormModalApi;
/** Tabulator edit form props */
const editFormProps: IDFormModalProps = {
    apiRef: editFormApi,
    formId: 'formWithGrid',
    fieldsProps: {
        col1: {component: InputField, label: 'Column 1'},
        col2: {component: InputField, label: 'Column 2'},
        col3: {component: InputField, label: 'Column 3'},
    },
    confirmChanges: true,
    buttons: FormLayoutSwitch(editFormApi),
};
const gridApi = {} as IGridApi
/** main modal form props */
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        grid: {
            component: TabulatorGridField,
            apiRef:gridApi,
            label: 'Пользователи',
            columnDefaults: TabulatorBaseColumnsDef,
            columns: columns,
            layout: 'fitColumns',
            height: 300,
            editFormProps: editFormProps,
            confirmDelete: true,
        },
    },
    width: 900,
    buttons: {
        ...FormLayoutSwitch(formApi),
        updateDataSet: {
            type: 'button',
            title: 'Update DataSet',
            position: 'center',
            onClick: () => {
                const model = formApi.model;
                const gridField = model.getField('grid');
                gridField.setValue(GenerateDataSet(1000, 'Set field Value '));
            },
        },
        asyncUpdateDataSet: {
            type: 'button',
            title: 'Async update DataSet',
            position: 'center',
            onClick: () => {
                gridApi.fetchData(() => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if (Math.random() < 0.1) reject({message: 'Ошибка загрузки данных', code: 400});
                            else resolve({data: GenerateDataSet(1000, 'async ')});
                        }, 1000);
                    });
                })
            },
        },
        clearDataSet: {
            type: 'button',
            title: 'Clear DataSet',
            position: 'center',
            onClick: () => {
                const model = formApi.model;
                const gridField = model.getField('grid');
                gridField.setValue([]);
            },
        },
    },
};
export const FormWithGridChangeDataSet = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('update', {grid: GenerateDataSet(1000, 'Initial ')});
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
`})}]})})]});export{U as Page6170f622b0864fd2b10e465242b6c9c9,U as default};
