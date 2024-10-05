const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-aRU0KM20.js","assets/default-highlight-Kf2sMSRd.js","assets/index-BEbJdilr.js"])))=>i.map(i=>d[i]);
import{j as e,r,_ as n,D as a}from"./index-BEbJdilr.js";import{D as c}from"./dForm-BUs8TQbJ.js";import{T as d}from"./treeSelectField-1yWgJPJB.js";import{P as m,C as p,d as h,c as u}from"./darcula-DUU8WC9V.js";import"./modal-DZ70cJBI.js";import"./index-DJAh43lQ.js";import"./dFormModal-DVM0pNWI.js";import"./modal-CKnotMHS.js";import"./defaultButtonsProps-BuloFMuY.js";import"./useApiGetGroupsOnly-B8IoRGb1.js";import"./useShowArrow-Co7GTLtH.js";import"./useIcons-go0WpEcA.js";import"./SearchOutlined-CqkiXlgD.js";const f=[{id:"01",title:"Департамент аналитики данных"},{id:"02",title:"Департамент инженерных работ"},{id:"03",title:"Департамент проектных работ"}],v=[{id:"01-01",title:"Управление аналитики продаж",children:[{id:"01-01-01",title:"Отдел продаж север"},{id:"01-01-02",title:"Отдел продаж юг"},{id:"01-01-03",title:"Отдел продаж запад"}]},{id:"01-02",title:"Управление аналитики закупок",children:[{id:"01-02-01",title:"Отдел закупок север"},{id:"01-02-02",title:"Отдел закупок юг"},{id:"01-02-03",title:"Отдел закупок запад"}]},{id:"01-03",title:"Управление аналитики производства",children:[{id:"01-03-01",title:"Отдел производства север"},{id:"01-03-02",title:"Отдел производства юг"},{id:"01-03-03",title:"Отдел производства запад"}]}],S=[{id:"02-01",title:"Управление строительства",children:[{id:"02-01-01",title:"Отдел строительства север"},{id:"02-01-02",title:"Отдел строительства юг"},{id:"02-01-03",title:"Отдел строительства запад"}]},{id:"02-02",title:"Управление демонтажа",children:[{id:"02-02-01",title:"Отдел демонтажа север"},{id:"02-02-02",title:"Отдел демонтажа юг"},{id:"02-02-03",title:"Отдел демонтажа запад"}]},{id:"02-03",title:"Управление реконструкции",children:[{id:"02-03-01",title:"Отдел реконструкции север"},{id:"02-03-02",title:"Отдел реконструкции юг"},{id:"02-03-03",title:"Отдел реконструкции запад"}]}],x=[{id:"03-01",title:"Управление проектирования",children:[{id:"03-01-01",title:"Отдел проектирования север"},{id:"03-01-02",title:"Отдел проектирования юг"},{id:"03-01-03",title:"Отдел проектирования запад"}]},{id:"03-02",title:"Управление согласования",children:[{id:"03-02-01",title:"Отдел согласования север"},{id:"03-02-02",title:"Отдел согласования юг"},{id:"03-02-03",title:"Отдел согласования запад"}]},{id:"03-03",title:"Управление анализа проектов",children:[{id:"03-03-01",title:"Отдел анализа север"},{id:"03-03-02",title:"Отдел анализа юг"},{id:"03-03-03",title:"Отдел анализа запад"}]}],F={formId:"Test form",confirmChanges:!0,fieldsProps:{department:{component:d,label:"Департамент",dataSet:f,valueType:"key",onValueChanged:(i,s,o)=>{let t;i?i==="01"?t=v:i==="02"?t=S:i==="03"?t=x:t=[]:t=[];const l=o.getModel().getField("division");l.updateProps({dataSet:t}),l.setValue(null)}},division:{component:d,label:"Управления",dependsOn:["department"],valueType:"key"}},buttons:null},T=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример отображения зависимых TreeSelect"}),e.jsx("p",{children:"Пока не выбран департамент, поле Управление скрыто. При изменении департамента меняется список управлений."}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(c,{...F})})]}),D=r.lazy(()=>n(()=>import("./index-aRU0KM20.js").then(i=>i.ds),__vite__mapDeps([0,1,2])).then(i=>({default:i.Prism}))),M=i=>e.jsxs(m,{children:[e.jsx("div",{children:e.jsx(T,{})}),e.jsx(a,{}),e.jsx("div",{children:e.jsx(p,{items:[{key:1,label:"Show source",children:e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(D,{language:"tsx",style:i.darkMode?h:u,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField';
const departments = [
    {
        id: '01',
        title: 'Департамент аналитики данных',
    },
    {
        id: '02',
        title: 'Департамент инженерных работ',
    },
    {
        id: '03',
        title: 'Департамент проектных работ',
    },
];
const divisions1 = [
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
];
const divisions2 = [
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
];
const divisions3 = [
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
];
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        department: {
            component: TreeSelectField,
            label: 'Департамент',
            dataSet: departments,
            valueType: 'key',
            onValueChanged: (value, _prevValue, field) => {
                let newDataSet: ITreeSelectFieldProps['dataSet'];
                if (!value) newDataSet = [];
                else if (value === '01') newDataSet = divisions1;
                else if (value === '02') newDataSet = divisions2;
                else if (value === '03') newDataSet = divisions3;
                else newDataSet = [];
                const model = field.getModel();
                const division = model.getField<TreeSelectField>('division');
                division.updateProps({dataSet: newDataSet});
                division.setValue(null);
            },
        } satisfies ITreeSelectFieldProps,
        division: {
            component: TreeSelectField,
            label: 'Управления',
            dependsOn: ['department'],
            valueType: 'key',
        } satisfies ITreeSelectFieldProps,
    },
    buttons: null,
};
export const TreeSelectDepended = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`})})}]})})]});export{M as Pageca84486b8e8b4d1494c400a813c57d6c,M as default};
