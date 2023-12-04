import{j as t,D as d}from"./index-491b5652.js";import{P as l,C as r,S as o,d as n,a as m}from"./docco-2ccfe26d.js";import{D as s}from"./index-bb222d24.js";import{I as c}from"./inputField-d0938683.js";import{T as a}from"./treeSelectField-e8dd91dc.js";import"./index-92c2cdb7.js";import"./EyeOutlined-ab0d6fcf.js";import"./SearchOutlined-62734d32.js";import"./dFormModal-03c7f003.js";import"./useShowArrow-91d12773.js";import"./DeleteOutlined-4ad9d1b1.js";const p=[{id:"01",title:"Департамент аналитики данных",children:[{id:"01-01",title:"Управление аналитики продаж",children:[{id:"01-01-01",title:"Отдел продаж север"},{id:"01-01-02",title:"Отдел продаж юг"},{id:"01-01-03",title:"Отдел продаж запад"}]},{id:"01-02",title:"Управление аналитики закупок",children:[{id:"01-02-01",title:"Отдел закупок север"},{id:"01-02-02",title:"Отдел закупок юг"},{id:"01-02-03",title:"Отдел закупок запад"}]},{id:"01-03",title:"Управление аналитики производства",children:[{id:"01-03-01",title:"Отдел производства север"},{id:"01-03-02",title:"Отдел производства юг"},{id:"01-03-03",title:"Отдел производства запад"}]}]},{id:"02",title:"Департамент инженерных работ",children:[{id:"02-01",title:"Управление строительства",children:[{id:"02-01-01",title:"Отдел строительства север"},{id:"02-01-02",title:"Отдел строительства юг"},{id:"02-01-03",title:"Отдел строительства запад"}]},{id:"02-02",title:"Управление демонтажа",children:[{id:"02-02-01",title:"Отдел демонтажа север"},{id:"02-02-02",title:"Отдел демонтажа юг"},{id:"02-02-03",title:"Отдел демонтажа запад"}]},{id:"02-03",title:"Управление реконструкции",children:[{id:"02-03-01",title:"Отдел реконструкции север"},{id:"02-03-02",title:"Отдел реконструкции юг"},{id:"02-03-03",title:"Отдел реконструкции запад"}]}]},{id:"03",title:"Департамент проектных работ",children:[{id:"03-01",title:"Управление проектирования",children:[{id:"03-01-01",title:"Отдел проектирования север"},{id:"03-01-02",title:"Отдел проектирования юг"},{id:"03-01-03",title:"Отдел проектирования запад"}]},{id:"03-02",title:"Управление согласования",children:[{id:"03-02-01",title:"Отдел согласования север"},{id:"03-02-02",title:"Отдел согласования юг"},{id:"03-02-03",title:"Отдел согласования запад"}]},{id:"03-03",title:"Управление анализа проектов",children:[{id:"03-03-01",title:"Отдел анализа север"},{id:"03-03-02",title:"Отдел анализа юг"},{id:"03-03-03",title:"Отдел анализа запад"}]}]}],h={formId:"EditForm",confirmChanges:!0,bodyHeight:100,fieldsProps:{title:{component:c,label:"Подразделение"}}},f={formId:"Test form",confirmChanges:!0,fieldsProps:{departments:{component:a,label:"Подразделения",editFormProps:h,confirmDelete:!0,dataSet:p}},buttons:null},u=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Пример TreeSelect с формой редактирования"}),t.jsx("div",{style:{maxWidth:500},children:t.jsx(s,{...f})})]}),y=i=>{const e=`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal";
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField";
const dataSet = [
    {
        id: '01',
        title: 'Департамент аналитики данных',
        children: [
            {
                id: '01-01',
                title: 'Управление аналитики продаж',
                children: [
                    {id: '01-01-01', title: 'Отдел продаж север'},
                    {id: '01-01-02', title: 'Отдел продаж юг'},
                    {id: '01-01-03', title: 'Отдел продаж запад'},
                ],
            },
            {
                id: '01-02',
                title: 'Управление аналитики закупок',
                children: [
                    {id: '01-02-01', title: 'Отдел закупок север'},
                    {id: '01-02-02', title: 'Отдел закупок юг'},
                    {id: '01-02-03', title: 'Отдел закупок запад'},
                ],
            },
            {
                id: '01-03',
                title: 'Управление аналитики производства',
                children: [
                    {id: '01-03-01', title: 'Отдел производства север'},
                    {id: '01-03-02', title: 'Отдел производства юг'},
                    {id: '01-03-03', title: 'Отдел производства запад'},
                ],
            },
        ],
    },
    {
        id: '02',
        title: 'Департамент инженерных работ',
        children: [
            {
                id: '02-01',
                title: 'Управление строительства',
                children: [
                    {id: '02-01-01', title: 'Отдел строительства север'},
                    {id: '02-01-02', title: 'Отдел строительства юг'},
                    {id: '02-01-03', title: 'Отдел строительства запад'},
                ],
            },
            {
                id: '02-02',
                title: 'Управление демонтажа',
                children: [
                    {id: '02-02-01', title: 'Отдел демонтажа север'},
                    {id: '02-02-02', title: 'Отдел демонтажа юг'},
                    {id: '02-02-03', title: 'Отдел демонтажа запад'},
                ],
            },
            {
                id: '02-03',
                title: 'Управление реконструкции',
                children: [
                    {id: '02-03-01', title: 'Отдел реконструкции север'},
                    {id: '02-03-02', title: 'Отдел реконструкции юг'},
                    {id: '02-03-03', title: 'Отдел реконструкции запад'},
                ],
            },
        ],
    },
    {
        id: '03',
        title: 'Департамент проектных работ',
        children: [
            {
                id: '03-01',
                title: 'Управление проектирования',
                children: [
                    {id: '03-01-01', title: 'Отдел проектирования север'},
                    {id: '03-01-02', title: 'Отдел проектирования юг'},
                    {id: '03-01-03', title: 'Отдел проектирования запад'},
                ],
            },
            {
                id: '03-02',
                title: 'Управление согласования',
                children: [
                    {id: '03-02-01', title: 'Отдел согласования север'},
                    {id: '03-02-02', title: 'Отдел согласования юг'},
                    {id: '03-02-03', title: 'Отдел согласования запад'},
                ],
            },
            {
                id: '03-03',
                title: 'Управление анализа проектов',
                children: [
                    {id: '03-03-01', title: 'Отдел анализа север'},
                    {id: '03-03-02', title: 'Отдел анализа юг'},
                    {id: '03-03-03', title: 'Отдел анализа запад'},
                ],
            },
        ],
    },
];
const editForm: IDFormModalProps = {
    formId: 'EditForm',
    confirmChanges: true,
    bodyHeight: 100,
    fieldsProps: {
        title: {component: InputField, label: 'Подразделение'},
    },
};
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        departments: {component: TreeSelectField, label: 'Подразделения', editFormProps: editForm, confirmDelete: true, dataSet: dataSet},
    },
    buttons: null,
};
export const TreeSelectWithForm = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`;return t.jsxs(l,{children:[t.jsx("div",{children:t.jsx(u,{})}),t.jsx(d,{}),t.jsx("div",{children:t.jsx(r,{items:[{key:1,label:"Show source",children:t.jsx(o,{language:"javascript",style:i.darkMode?n:m,showLineNumbers:!0,children:e})}]})})]})};export{y as Pageac7a4a6dd6364a879e3e893359f3c2bf,y as default};
