import{r as s,j as t,D as d}from"./index-3024f328.js";import{P as p,C as c,S as u,d as f,a as F}from"./docco-8e796366.js";import{B as b}from"./index-901967cb.js";import{D as g}from"./dFormModal-09fd0649.js";import{T as h}from"./tabulatorGridField-47eb5197.js";import{I as r}from"./inputField-a558b472.js";import{F as m}from"./buttonsProps-718efc56.js";import{b as D,G as a}from"./tabulatorData-f1a03775.js";import"./tabulatorGrid-a1a2b210.js";import"./EyeOutlined-ff2ae648.js";import"./DeleteOutlined-73630e69.js";import"./index-83c0c0ea.js";import"./SearchOutlined-8979e289.js";const C=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],i={},l={},S={apiRef:l,formId:"formWithGrid",fieldsProps:{col1:{component:r,label:"Column 1"},col2:{component:r,label:"Column 2"},col3:{component:r,label:"Column 3"}},confirmChanges:!0,buttons:m(l)},n={},k={formId:"Test form",apiRef:i,confirmChanges:!0,fieldsProps:{grid:{component:h,apiRef:n,label:"Пользователи",columnDefaults:D,columns:C,layout:"fitColumns",height:300,editFormProps:S,confirmDelete:!0}},width:900,buttons:{...m(i),updateDataSet:{type:"button",title:"Update DataSet",position:"center",onClick:()=>{i.model.getField("grid").setValue(a(1e3,"Set field Value "))}},asyncUpdateDataSet:{type:"button",title:"Async update DataSet",position:"center",onClick:()=>{n.fetchData(()=>new Promise((o,e)=>{setTimeout(()=>{Math.random()<.1?e({message:"Ошибка загрузки данных",code:400}):o({data:a(1e3,"async ")})},1e3)}))}},clearDataSet:{type:"button",title:"Clear DataSet",position:"center",onClick:()=>{i.model.getField("grid").setValue([])}}}},y=()=>{const o=s.useCallback(()=>{i.open("update",{grid:a(1e3,"Initial ")})},[]);return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a modal form with a TabulatorGrid field"}),t.jsxs("div",{style:{maxWidth:500},children:[t.jsx(b,{onClick:o,children:"Open form"}),t.jsx(g,{...k})]})]})},V=o=>{const e=`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField';
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
`;return t.jsxs(p,{children:[t.jsx("div",{children:t.jsx(y,{})}),t.jsx(d,{}),t.jsx("div",{children:t.jsx(c,{items:[{key:1,label:"Show source",children:t.jsx(u,{language:"javascript",style:o.darkMode?f:F,showLineNumbers:!0,children:e})}]})})]})};export{V as Page5a9fff44754c4fe8b28a8277e67eb8f5,V as default};
