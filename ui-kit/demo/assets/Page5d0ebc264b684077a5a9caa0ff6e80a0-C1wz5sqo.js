const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-9FGXM8eG.js","assets/default-highlight-_K3mzjfK.js","assets/index-CObHp3AH.js"])))=>i.map(i=>d[i]);
import{j as e,r as o,_ as s,D as n}from"./index-CObHp3AH.js";import{D as a}from"./dForm-DjwSwKfj.js";import{a as l}from"./treeSelectField-BDvgibdt.js";import{P as c,C as m,d as p,c as u}from"./darcula-D-n55oql.js";import"./modal-BBQwvlDP.js";import"./DownOutlined-BYejAm0U.js";import"./index-BubinFZA.js";import"./CheckOutlined-ka3l-INf.js";import"./dFormModal-BBSecmha.js";import"./modal-B2hVzaN7.js";import"./defaultButtonsProps-DSb7WT6w.js";import"./iconUtil-DejahXk-.js";import"./index-C0zsZX4a.js";import"./useShowArrow-DWc_B7kV.js";import"./useIcons-Q8Q6Q-7D.js";import"./SearchOutlined-DZTAjpNT.js";import"./useApiIsNodeSelected-DsZSnUgD.js";const h=[{id:"01",title:"Департамент аналитики данных"},{id:"02",title:"Департамент инженерных работ"},{id:"03",title:"Департамент проектных работ"}],f=[{id:"01-01",title:"Управление аналитики продаж",children:[{id:"01-01-01",title:"Отдел прода север"},{id:"01-01-02",title:"Отдел прода юг"},{id:"01-01-03",title:"Отдел прода запад"}]},{id:"01-02",title:"Управление аналитики закупок",children:[{id:"01-02-01",title:"Отдел закупок север"},{id:"01-02-02",title:"Отдел закупок юг"},{id:"01-02-03",title:"Отдел закупок запад"}]},{id:"01-03",title:"Управление аналитики производства",children:[{id:"01-03-01",title:"Отдел производства север"},{id:"01-03-02",title:"Отдел производства юг"},{id:"01-03-03",title:"Отдел производства запад"}]}],v=[{id:"02-01",title:"Управление строительства",children:[{id:"02-01-01",title:"Отдел строительства север"},{id:"02-01-02",title:"Отдел строительства юг"},{id:"02-01-03",title:"Отдел строительства запад"}]},{id:"02-02",title:"Управление демонтажа",children:[{id:"02-02-01",title:"Отдел демонтажа север"},{id:"02-02-02",title:"Отдел демонтажа юг"},{id:"02-02-03",title:"Отдел демонтажа запад"}]},{id:"02-03",title:"Управление реконструкции",children:[{id:"02-03-01",title:"Отдел реконструкции север"},{id:"02-03-02",title:"Отдел реконструкции юг"},{id:"02-03-03",title:"Отдел реконструкции запад"}]}],F=[{id:"03-01",title:"Управление проектирования",children:[{id:"03-01-01",title:"Отдел проектирования север"},{id:"03-01-02",title:"Отдел проектирования юг"},{id:"03-01-03",title:"Отдел проектирования запад"}]},{id:"03-02",title:"Управление согласования",children:[{id:"03-02-01",title:"Отдел согласования север"},{id:"03-02-02",title:"Отдел согласования юг"},{id:"03-02-03",title:"Отдел согласования запад"}]},{id:"03-03",title:"Управление анализа проектов",children:[{id:"03-03-01",title:"Отдел анализа север"},{id:"03-03-02",title:"Отдел анализа юг"},{id:"03-03-03",title:"Отдел анализа запад"}]}],r={},D={formId:"Test form",apiRef:r,confirmChanges:!0,fieldsProps:{department:{component:l,label:"Департамент",fetchMode:"onUse",onDataFetch:()=>new Promise((t,i)=>{setTimeout(()=>{Math.random()<0?i({message:"Ошибка загрузки данных",code:400}):t({data:h})},2e3)}),onValueChanged:(t,i,d)=>{d.getModel().getField("division").setValue(null)}},division:{component:l,label:"Управления",fetchMode:"onUse",dependsOn:["department"],noCacheFetchedData:!0,onDataFetch:()=>new Promise(t=>{setTimeout(()=>{const i=r.model.getField("department").getValue();let d;i?i==="01"?d=f:i==="02"?d=v:i==="03"?d=F:d=[]:d=[],t({data:d})},2e3)})}},buttons:null},S=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример отображения зависимых асинхронных TreeSelect"}),e.jsx("p",{children:"Пока не выбран департамент, поле Управление скрыто. При изменении департамента изменяются параметры запроса списка управлений."}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(a,{...D})})]}),g=o.lazy(()=>s(()=>import("./index-9FGXM8eG.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),O=t=>e.jsxs(c,{children:[e.jsx("div",{children:e.jsx(S,{})}),e.jsx(n,{}),e.jsx("div",{children:e.jsx(m,{items:[{key:1,label:"Show source",children:e.jsx(o.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(g,{language:"tsx",style:t.darkMode?p:u,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {IDFormModalApi} from @krinopotam/ui-kit/dFormModal';
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
            component: TreeSelectField,
            label: 'Департамент',
            fetchMode: 'onUse',
            onDataFetch: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (Math.random() < 0.0) reject({message: 'Ошибка загрузки данных', code: 400});
                        else resolve({data: departments});
                    }, 2000);
                });
            },
            onValueChanged: (value, prevValue, field) => {
                const division = field.getModel().getField('division');
                division.setValue(null);
            },
        } as ITreeSelectFieldProps,
        division: {
            component: TreeSelectField,
            label: 'Управления',
            fetchMode: 'onUse',
            dependsOn: ['department'],
            noCacheFetchedData: true,
            onDataFetch: () => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const departmentValue = formApi.model.getField('department').getValue(); //we can get the current department value and use it for server request
                        /** the server request imitation */
                        let newDataSet: ITreeSelectFieldProps['dataSet'];
                        if (!departmentValue) newDataSet = [];
                        else if (departmentValue === '01') newDataSet = divisions1;
                        else if (departmentValue === '02') newDataSet = divisions2;
                        else if (departmentValue === '03') newDataSet = divisions3;
                        else newDataSet = [];
                        resolve({data: newDataSet});
                    }, 2000);
                });
            },
        } satisfies ITreeSelectFieldProps,
    },
    buttons: null,
};
export const TreeSelectDependedAsync = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`})})}]})})]});export{O as Page5d0ebc264b684077a5a9caa0ff6e80a0,O as default};