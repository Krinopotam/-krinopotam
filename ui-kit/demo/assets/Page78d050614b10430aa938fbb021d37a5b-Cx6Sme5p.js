const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DwVYDlRJ.js","assets/default-highlight-B_-WNUR5.js","assets/index-DQhjKTAX.js"])))=>i.map(i=>d[i]);
import{j as e,r as d,_ as l,D as r}from"./index-DQhjKTAX.js";import{D as a}from"./dForm-CrwAE8Nv.js";import{T as o}from"./treeSelectField-CiRD9l7h.js";import{P as h,C as n,d as s,c}from"./darcula-CRC2cY0A.js";import"./modal-CoK2ultv.js";import"./index-BoiGZk6f.js";import"./dFormModal-DVkDXjc5.js";import"./modal-DUXxSXRd.js";import"./defaultButtonsProps-C3Ko1m4X.js";import"./useApiGetGroupsOnly-Bi5q4hN0.js";import"./useShowArrow-DUOCLEzN.js";import"./useIcons-DVMS-BEC.js";import"./SearchOutlined-BHQSD20H.js";const m=[{id:"01",title:"Департамент аналитики данных",head:"Иванов Иван Иванович",children:[{id:"01-01",title:"Управление аналитики продаж",children:[{id:"01-01-01",title:"Отдел продаж север",head:"Петров Петр Петрович"},{id:"01-01-02",title:"Отдел продаж юг",head:"Сидоров Сидр Сидорович"},{id:"01-01-03",title:"Отдел продаж запад",head:"Дмитриев Дмитрий Дмитриевич"}]},{id:"01-02",title:"Управление аналитики закупок",head:"Семенов Семен Семенович",children:[{id:"01-02-01",title:"Отдел закупок север",head:"Максимов Максим Максимович"},{id:"01-02-02",title:"Отдел закупок юг",head:"Русланов Руслан Русланович"},{id:"01-02-03",title:"Отдел закупок запад",head:"Сметанин Сметан Сметанович"}]},{id:"01-03",title:"Управление аналитики производства",head:"Саратов Сарат Саратович",children:[{id:"01-03-01",title:"Отдел производства север",head:"Трибратов Трибрат Трибратович"},{id:"01-03-02",title:"Отдел производства юг",head:"Уваров Увар Уварович"},{id:"01-03-03",title:"Отдел производства запад",head:"Каямов Каям Каямович"}]}]},{id:"02",title:"Департамент инженерных работ",head:"Примеров Пример Примерович",children:[{id:"02-01",title:"Управление строительства",children:[{id:"02-01-01",title:"Отдел строительства север",head:"Неверов Невер Неверович"},{id:"02-01-02",title:"Отдел строительства юг",head:"Занудов Зануд Занудович"},{id:"02-01-03",title:"Отдел строительства запад",head:"Сигизмундов Сигизмунд Сигизмундович"}]},{id:"02-02",title:"Управление демонтажа",head:"Картонов Картон Картонович",children:[{id:"02-02-01",title:"Отдел демонтажа север",head:"Помидоров Помидор Помидорович"},{id:"02-02-02",title:"Отдел демонтажа юг",head:"Бананов Банан Бананович"},{id:"02-02-03",title:"Отдел демонтажа запад",head:"Огурцов Огурец Огурцович"}]},{id:"02-03",title:"Управление реконструкции",head:"Ремонтов Ремонт Ремонтович",children:[{id:"02-03-01",title:"Отдел реконструкции север",head:"Лимонов Лимон Лимонович"},{id:"02-03-02",title:"Отдел реконструкции юг",head:"Маркелов Маркел Маркелович"},{id:"02-03-03",title:"Отдел реконструкции запад",head:"Карпелов Карпел Карпелович"}]}]},{id:"03",title:"Департамент проектных работ",head:"Терпелов Терпел Терпелович",children:[{id:"03-01",title:"Управление проектирования",children:[{id:"03-01-01",title:"Отдел проектирования север",head:"Березин Берез Березович"},{id:"03-01-02",title:"Отдел проектирования юг",head:"Битов Бит Битович"},{id:"03-01-03",title:"Отдел проектирования запад",head:"Литеров Литер Литерович"}]},{id:"03-02",title:"Управление согласования",children:[{id:"03-02-01",title:"Отдел согласования север",head:"Рамов Рама Рамович"},{id:"03-02-02",title:"Отдел согласования юг",head:"Груздев Грузд Груздевич"},{id:"03-02-03",title:"Отдел согласования запад",head:"Блинов Блин Блинович"}]},{id:"03-03",title:"Управление анализа проектов",children:[{id:"03-03-01",title:"Отдел анализа север",head:"Котов Кот Котович"},{id:"03-03-02",title:"Отдел анализа юг",head:"Самолетов Самолет Самолетович"},{id:"03-03-03",title:"Отдел анализа запад",head:"Кораллов Коралл Кораллович"}]}]}],p=t=>e.jsxs(e.Fragment,{children:[t.title,e.jsx("br",{}),e.jsx("small",{style:{color:"#808080"},children:t.head?"("+t.head+")":""})]}),u=t=>e.jsxs(e.Fragment,{children:[t.title," ",e.jsx("small",{style:{color:"#808080"},children:t.head?"("+t.head+")":""})]}),f=(t,i)=>(i.title+" ("+i.head+")").toLowerCase().indexOf(t.toLowerCase())>=0,S={formId:"Test form",confirmChanges:!0,fieldsProps:{departments:{component:o,label:"Подразделения",dataSet:m,titleRender:p,selectedRender:u,filterTreeNode:f,fieldNames:{key:"id",title:"title",children:"children"}}},buttons:null},x=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример TreeSelect настраиваемым отображением строк"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(a,{...S})})]}),T=d.lazy(()=>l(()=>import("./index-DwVYDlRJ.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),_=t=>e.jsxs(h,{children:[e.jsx("div",{children:e.jsx(x,{})}),e.jsx(r,{}),e.jsx("div",{children:e.jsx(n,{items:[{key:1,label:"Show source",children:e.jsx(d.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(T,{language:"tsx",style:t.darkMode?s:c,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField";
import {ITreeSelectNode} from @krinopotam/ui-kit/treeSelect";
const dataSet: ITreeSelectFieldProps['dataSet'] = [
    {
        id: '01',
        title: 'Департамент аналитики данных',
        head: 'Иванов Иван Иванович',
        children: [
            {
                id: '01-01',
                title: 'Управление аналитики продаж',
                children: [
                    {id: '01-01-01', title: 'Отдел продаж север', head: 'Петров Петр Петрович'},
                    {id: '01-01-02', title: 'Отдел продаж юг', head: 'Сидоров Сидр Сидорович'},
                    {id: '01-01-03', title: 'Отдел продаж запад', head: 'Дмитриев Дмитрий Дмитриевич'},
                ],
            },
            {
                id: '01-02',
                title: 'Управление аналитики закупок',
                head: 'Семенов Семен Семенович',
                children: [
                    {id: '01-02-01', title: 'Отдел закупок север', head: 'Максимов Максим Максимович'},
                    {id: '01-02-02', title: 'Отдел закупок юг', head: 'Русланов Руслан Русланович'},
                    {id: '01-02-03', title: 'Отдел закупок запад', head: 'Сметанин Сметан Сметанович'},
                ],
            },
            {
                id: '01-03',
                title: 'Управление аналитики производства',
                head: 'Саратов Сарат Саратович',
                children: [
                    {id: '01-03-01', title: 'Отдел производства север', head: 'Трибратов Трибрат Трибратович'},
                    {id: '01-03-02', title: 'Отдел производства юг', head: 'Уваров Увар Уварович'},
                    {id: '01-03-03', title: 'Отдел производства запад', head: 'Каямов Каям Каямович'},
                ],
            },
        ],
    },
    {
        id: '02',
        title: 'Департамент инженерных работ',
        head: 'Примеров Пример Примерович',
        children: [
            {
                id: '02-01',
                title: 'Управление строительства',
                children: [
                    {id: '02-01-01', title: 'Отдел строительства север', head: 'Неверов Невер Неверович'},
                    {id: '02-01-02', title: 'Отдел строительства юг', head: 'Занудов Зануд Занудович'},
                    {id: '02-01-03', title: 'Отдел строительства запад', head: 'Сигизмундов Сигизмунд Сигизмундович'},
                ],
            },
            {
                id: '02-02',
                title: 'Управление демонтажа',
                head: 'Картонов Картон Картонович',
                children: [
                    {id: '02-02-01', title: 'Отдел демонтажа север', head: 'Помидоров Помидор Помидорович'},
                    {id: '02-02-02', title: 'Отдел демонтажа юг', head: 'Бананов Банан Бананович'},
                    {id: '02-02-03', title: 'Отдел демонтажа запад', head: 'Огурцов Огурец Огурцович'},
                ],
            },
            {
                id: '02-03',
                title: 'Управление реконструкции',
                head: 'Ремонтов Ремонт Ремонтович',
                children: [
                    {id: '02-03-01', title: 'Отдел реконструкции север', head: 'Лимонов Лимон Лимонович'},
                    {id: '02-03-02', title: 'Отдел реконструкции юг', head: 'Маркелов Маркел Маркелович'},
                    {id: '02-03-03', title: 'Отдел реконструкции запад', head: 'Карпелов Карпел Карпелович'},
                ],
            },
        ],
    },
    {
        id: '03',
        title: 'Департамент проектных работ',
        head: 'Терпелов Терпел Терпелович',
        children: [
            {
                id: '03-01',
                title: 'Управление проектирования',
                children: [
                    {id: '03-01-01', title: 'Отдел проектирования север', head: 'Березин Берез Березович'},
                    {id: '03-01-02', title: 'Отдел проектирования юг', head: 'Битов Бит Битович'},
                    {id: '03-01-03', title: 'Отдел проектирования запад', head: 'Литеров Литер Литерович'},
                ],
            },
            {
                id: '03-02',
                title: 'Управление согласования',
                children: [
                    {id: '03-02-01', title: 'Отдел согласования север', head: 'Рамов Рама Рамович'},
                    {id: '03-02-02', title: 'Отдел согласования юг', head: 'Груздев Грузд Груздевич'},
                    {id: '03-02-03', title: 'Отдел согласования запад', head: 'Блинов Блин Блинович'},
                ],
            },
            {
                id: '03-03',
                title: 'Управление анализа проектов',
                children: [
                    {id: '03-03-01', title: 'Отдел анализа север', head: 'Котов Кот Котович'},
                    {id: '03-03-02', title: 'Отдел анализа юг', head: 'Самолетов Самолет Самолетович'},
                    {id: '03-03-03', title: 'Отдел анализа запад', head: 'Кораллов Коралл Кораллович'},
                ],
            },
        ],
    },
];
const titleRender: ITreeSelectFieldProps['titleRender'] = (treeNode: ITreeSelectNode) => {
    return (
        <>
            {treeNode.title}
            <br />
            <small style={{color: '#808080'}}>{treeNode.head ? '(' + treeNode.head + ')' : ''}</small>
        </>
    );
};
const selectRender: ITreeSelectFieldProps['selectedRender'] = (treeNode: ITreeSelectNode) => {
    return (
        <>
            {treeNode.title} <small style={{color: '#808080'}}>{treeNode.head ? '(' + treeNode.head + ')' : ''}</small>
        </>
    );
};
const filterTreeNode: ITreeSelectFieldProps['filterTreeNode'] = (inputValue: string, treeNode: ITreeSelectNode) => {
    const nodeString = (treeNode.title + ' (' + treeNode.head + ')').toLowerCase();
    return nodeString.indexOf(inputValue.toLowerCase()) >= 0;
};
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        departments: {
            component: TreeSelectField,
            label: 'Подразделения',
            dataSet: dataSet,
            titleRender: titleRender, //node title render
            selectedRender: selectRender, //node label render
            filterTreeNode: filterTreeNode, //custom filter
            fieldNames: {
                key:'id'    ,
                title:'title',
                children:'children',
            }
        } satisfies ITreeSelectFieldProps,
    },
    buttons: null,
};
export const TreeSelectNodeRender = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`})})}]})})]});export{_ as Page78d050614b10430aa938fbb021d37a5b,_ as default};
