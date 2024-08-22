import{j as e,D as o}from"./index-OT-fUFlw.js";import{P as n,C as s,h as a,d as c,a as m}from"./docco-Dp5WB1My.js";import{D as p}from"./dForm-CXdkNth1.js";import"./messageBox-deXCqDea.js";import{T as l}from"./treeSelectField-CqdpmTlb.js";import"./index-BzsQSyIK.js";import"./dFormModal-Brw-56ya.js";import"./modal-Cu7Nzp09.js";import"./useShowArrow-C9rEyr0b.js";import"./DeleteOutlined-BFYA2MP_.js";import"./useIcons-BZ-gWI9M.js";import"./SearchOutlined-q14VqUwO.js";const h=[{id:"01",title:"Департамент аналитики данных"},{id:"02",title:"Департамент инженерных работ"},{id:"03",title:"Департамент проектных работ"}],u=[{id:"01-01",title:"Управление аналитики продаж",children:[{id:"01-01-01",title:"Отдел прода север"},{id:"01-01-02",title:"Отдел прода юг"},{id:"01-01-03",title:"Отдел прода запад"}]},{id:"01-02",title:"Управление аналитики закупок",children:[{id:"01-02-01",title:"Отдел закупок север"},{id:"01-02-02",title:"Отдел закупок юг"},{id:"01-02-03",title:"Отдел закупок запад"}]},{id:"01-03",title:"Управление аналитики производства",children:[{id:"01-03-01",title:"Отдел производства север"},{id:"01-03-02",title:"Отдел производства юг"},{id:"01-03-03",title:"Отдел производства запад"}]}],f=[{id:"02-01",title:"Управление строительства",children:[{id:"02-01-01",title:"Отдел строительства север"},{id:"02-01-02",title:"Отдел строительства юг"},{id:"02-01-03",title:"Отдел строительства запад"}]},{id:"02-02",title:"Управление демонтажа",children:[{id:"02-02-01",title:"Отдел демонтажа север"},{id:"02-02-02",title:"Отдел демонтажа юг"},{id:"02-02-03",title:"Отдел демонтажа запад"}]},{id:"02-03",title:"Управление реконструкции",children:[{id:"02-03-01",title:"Отдел реконструкции север"},{id:"02-03-02",title:"Отдел реконструкции юг"},{id:"02-03-03",title:"Отдел реконструкции запад"}]}],v=[{id:"03-01",title:"Управление проектирования",children:[{id:"03-01-01",title:"Отдел проектирования север"},{id:"03-01-02",title:"Отдел проектирования юг"},{id:"03-01-03",title:"Отдел проектирования запад"}]},{id:"03-02",title:"Управление согласования",children:[{id:"03-02-01",title:"Отдел согласования север"},{id:"03-02-02",title:"Отдел согласования юг"},{id:"03-02-03",title:"Отдел согласования запад"}]},{id:"03-03",title:"Управление анализа проектов",children:[{id:"03-03-01",title:"Отдел анализа север"},{id:"03-03-02",title:"Отдел анализа юг"},{id:"03-03-03",title:"Отдел анализа запад"}]}],r={},F={formId:"Test form",apiRef:r,confirmChanges:!0,fieldsProps:{department:{component:l,label:"Департамент",fetchMode:"onUse",onDataFetch:()=>new Promise((d,t)=>{setTimeout(()=>{Math.random()<0?t({message:"Ошибка загрузки данных",code:400}):d({data:h})},2e3)}),onValueChanged:(d,t,i)=>{i.getModel().getField("division").setValue(null)}},division:{component:l,label:"Управления",fetchMode:"onUse",dependsOn:["department"],noCacheFetchedData:!0,onDataFetch:()=>new Promise(d=>{setTimeout(()=>{const t=r.model.getField("department").getValue();let i;t?t.id==="01"?i=u:t.id==="02"?i=f:t.id==="03"?i=v:i=[]:i=[],d({data:i})},2e3)})}},buttons:null},D=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример отображения зависимых асинхронных TreeSelect"}),e.jsx("p",{children:"Пока не выбран департамент, поле Управление скрыто. При изменении департамента изменяются параметры запроса списка управлений."}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(p,{...F})})]}),C=d=>e.jsxs(n,{children:[e.jsx("div",{children:e.jsx(D,{})}),e.jsx(o,{}),e.jsx("div",{children:e.jsx(s,{items:[{key:1,label:"Show source",children:e.jsx(a,{language:"javascript",style:d.darkMode?c:m,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {IDFormModalApi} from @krinopotam/ui-kit/dFormModal';
import {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField";
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
            {id: '01-01-01', title: 'Отдел прода север'},
            {id: '01-01-02', title: 'Отдел прода юг'},
            {id: '01-01-03', title: 'Отдел прода запад'},
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
const formApi = {} as IDFormModalApi;
const formProps: IDFormProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        department: {
            component: TreeSelectField, label: 'Департамент', fetchMode: 'onUse', onDataFetch: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (Math.random() < 0.0) reject({message: 'Ошибка загрузки данных', code: 400});
                        else resolve({data: departments});
                    }, 2000);
                })
            },
            onValueChanged:(value, prevValue, field)=>{
                const division = field.getModel().getField('division')
                division.setValue(null)
            }
        } as ITreeSelectFieldProps,
        division: {
            component: TreeSelectField, label: 'Управления', fetchMode: 'onUse', dependsOn: ['department'], noCacheFetchedData: true, onDataFetch: () => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const departmentValue = formApi.model.getField('department').getValue() as Record<'id', unknown>; //we can get the current department value and use it for server request
                        /** the server request imitation */
                        let newDataSet: ITreeSelectFieldProps['dataSet'];
                        if (!departmentValue) newDataSet = [];
                        else if (departmentValue.id === '01') newDataSet = divisions1;
                        else if (departmentValue.id === '02') newDataSet = divisions2;
                        else if (departmentValue.id === '03') newDataSet = divisions3;
                        else newDataSet = [];
                        resolve({data: newDataSet});
                    }, 2000);
                });
            }
        } ,
    },
    buttons: null
}
export const TreeSelectDependedAsync = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`})}]})})]});export{C as Pagec654699186f740c8add7a58763f7b16b,C as default};
