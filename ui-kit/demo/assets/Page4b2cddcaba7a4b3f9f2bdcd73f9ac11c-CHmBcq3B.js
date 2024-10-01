const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Co9PZaPl.js","assets/default-highlight-DvtBkdhg.js","assets/index-Dv3qFdjW.js"])))=>i.map(i=>d[i]);
import{j as e,r as d,_ as l,D as r}from"./index-Dv3qFdjW.js";import{D as s}from"./dForm-QxcKLYQQ.js";import{T as o}from"./treeSelectField-BUD0w8Bo.js";import{P as c,C as n,d as a,c as h}from"./darcula-MphVyLu8.js";import"./modal-Bp_ASPGm.js";import"./index-8gx4Y1o-.js";import"./dFormModal-BUbiUSeF.js";import"./modal-DoluWT5v.js";import"./defaultButtonsProps-DchoBAIh.js";import"./useShowArrow-CHTHTBiw.js";import"./useIcons-CEssDIMU.js";import"./SearchOutlined-DCaoIkCx.js";import"./useApiIsNodeSelected-CouYiEi1.js";const m=[{id:"01",title:"Департамент аналитики данных",children:[{id:"01-01",title:"Управление аналитики продаж",children:[{id:"01-01-01",title:"Отдел продаж север"},{id:"01-01-02",title:"Отдел продаж юг"},{id:"01-01-03",title:"Отдел продаж запад"}]},{id:"01-02",title:"Управление аналитики закупок",children:[{id:"01-02-01",title:"Отдел закупок север"},{id:"01-02-02",title:"Отдел закупок юг"},{id:"01-02-03",title:"Отдел закупок запад"}]},{id:"01-03",title:"Управление аналитики производства",children:[{id:"01-03-01",title:"Отдел производства север"},{id:"01-03-02",title:"Отдел производства юг"},{id:"01-03-03",title:"Отдел производства запад"}]}]},{id:"02",title:"Департамент инженерных работ",children:[{id:"02-01",title:"Управление строительства",children:[{id:"02-01-01",title:"Отдел строительства север"},{id:"02-01-02",title:"Отдел строительства юг"},{id:"02-01-03",title:"Отдел строительства запад"}]},{id:"02-02",title:"Управление демонтажа",children:[{id:"02-02-01",title:"Отдел демонтажа север"},{id:"02-02-02",title:"Отдел демонтажа юг"},{id:"02-02-03",title:"Отдел демонтажа запад"}]},{id:"02-03",title:"Управление реконструкции",children:[{id:"02-03-01",title:"Отдел реконструкции север"},{id:"02-03-02",title:"Отдел реконструкции юг"},{id:"02-03-03",title:"Отдел реконструкции запад"}]}]},{id:"03",title:"Департамент проектных работ",children:[{id:"03-01",title:"Управление проектирования",children:[{id:"03-01-01",title:"Отдел проектирования север"},{id:"03-01-02",title:"Отдел проектирования юг"},{id:"03-01-03",title:"Отдел проектирования запад"}]},{id:"03-02",title:"Управление согласования",children:[{id:"03-02-01",title:"Отдел согласования север"},{id:"03-02-02",title:"Отдел согласования юг"},{id:"03-02-03",title:"Отдел согласования запад"}]},{id:"03-03",title:"Управление анализа проектов",children:[{id:"03-03-01",title:"Отдел анализа север"},{id:"03-03-02",title:"Отдел анализа юг"},{id:"03-03-03",title:"Отдел анализа запад"}]}]}],p={formId:"Test form",confirmChanges:!0,fieldsProps:{departments:{component:o,label:"Подразделения",fetchMode:"onUse",noCacheFetchedData:!0,onDataFetch:()=>new Promise((t,i)=>{setTimeout(()=>{Math.random()<0?i({message:"Ошибка загрузки данных",code:400}):t({data:m})},2e3)})}},buttons:null},x=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример асинхронной загрузки полного набора данных при открытии TreeSelect"}),e.jsx("p",{children:"Данные начнут загружаться при открытии комбобокса"}),e.jsx("p",{children:"Для примера, с вероятность 30% произойдет ошибка загрузки данных"}),e.jsxs("p",{children:["Режим запроса данных определяется при помощи параметра ",e.jsx("b",{children:"fetchMode"})]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"onLoad"})," - запрос данных сразу при загрузке компонента TreeView (по умолчанию)"]}),e.jsxs("li",{children:[e.jsx("b",{children:"onUse"})," - загрузка данных при открытии выпадающей формы TreeView"]})]}),e.jsxs("p",{children:["Если данные загружены в полном объеме (с пустой строкой поиска), то они кэшируются. Параметр ",e.jsx("b",{children:"noCacheFetchedData"})," позволяет изменить данное поведение."]}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(s,{...p})})]}),u=d.lazy(()=>l(()=>import("./index-Co9PZaPl.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),C=t=>e.jsxs(c,{children:[e.jsx("div",{children:e.jsx(x,{})}),e.jsx(r,{}),e.jsx("div",{children:e.jsx(n,{items:[{key:1,label:"Show source",children:e.jsx(d.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(u,{language:"tsx",style:t.darkMode?a:h,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField";
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
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        departments: {
            component: TreeSelectField, label: 'Подразделения', fetchMode: 'onUse', noCacheFetchedData: true, onDataFetch: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (Math.random() < 0.0) reject({message: 'Ошибка загрузки данных', code: 400});
                        else resolve({data: dataSet});
                    }, 2000);
                });
            }
        } satisfies ITreeSelectFieldProps,
    },
    buttons: null,
};
export const TreeSelectAsync = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`})})}]})})]});export{C as Page4b2cddcaba7a4b3f9f2bdcd73f9ac11c,C as default};
