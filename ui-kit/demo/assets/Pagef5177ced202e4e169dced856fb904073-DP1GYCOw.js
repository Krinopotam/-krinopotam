import{j as e,D as d}from"./index-CRRPgvdi.js";import{P as l,C as r,h as a,d as o,a as h}from"./docco-COLmzWzy.js";import{D as n}from"./index-CR3eF2D1.js";import{T as s}from"./treeSelectField-Dk2yCZ7N.js";import"./dFormModal-Df9g-P_m.js";import"./useShowArrow-Cy7EkWLx.js";import"./DeleteOutlined-CzvauNsJ.js";import"./useIcons-BN1b1-Dw.js";import"./SearchOutlined-BOezqQLT.js";const c=[{id:"01",title:"Департамент аналитики данных",head:"Иванов Иван Иванович",children:[{id:"01-01",title:"Управление аналитики продаж",children:[{id:"01-01-01",title:"Отдел продаж север",head:"Петров Петр Петрович"},{id:"01-01-02",title:"Отдел продаж юг",head:"Сидоров Сидр Сидорович"},{id:"01-01-03",title:"Отдел продаж запад",head:"Дмитриев Дмитрий Дмитриевич"}]},{id:"01-02",title:"Управление аналитики закупок",head:"Семенов Семен Семенович",children:[{id:"01-02-01",title:"Отдел закупок север",head:"Максимов Максим Максимович"},{id:"01-02-02",title:"Отдел закупок юг",head:"Русланов Руслан Русланович"},{id:"01-02-03",title:"Отдел закупок запад",head:"Сметанин Сметан Сметанович"}]},{id:"01-03",title:"Управление аналитики производства",head:"Саратов Сарат Саратович",children:[{id:"01-03-01",title:"Отдел производства север",head:"Трибратов Трибрат Трибратович"},{id:"01-03-02",title:"Отдел производства юг",head:"Уваров Увар Уварович"},{id:"01-03-03",title:"Отдел производства запад",head:"Каямов Каям Каямович"}]}]},{id:"02",title:"Департамент инженерных работ",head:"Примеров Пример Примерович",children:[{id:"02-01",title:"Управление строительства",children:[{id:"02-01-01",title:"Отдел строительства север",head:"Неверов Невер Неверович"},{id:"02-01-02",title:"Отдел строительства юг",head:"Занудов Зануд Занудович"},{id:"02-01-03",title:"Отдел строительства запад",head:"Сигизмундов Сигизмунд Сигизмундович"}]},{id:"02-02",title:"Управление демонтажа",head:"Картонов Картон Картонович",children:[{id:"02-02-01",title:"Отдел демонтажа север",head:"Помидоров Помидор Помидорович"},{id:"02-02-02",title:"Отдел демонтажа юг",head:"Бананов Банан Бананович"},{id:"02-02-03",title:"Отдел демонтажа запад",head:"Огурцов Огурец Огурцович"}]},{id:"02-03",title:"Управление реконструкции",head:"Ремонтов Ремонт Ремонтович",children:[{id:"02-03-01",title:"Отдел реконструкции север",head:"Лимонов Лимон Лимонович"},{id:"02-03-02",title:"Отдел реконструкции юг",head:"Маркелов Маркел Маркелович"},{id:"02-03-03",title:"Отдел реконструкции запад",head:"Карпелов Карпел Карпелович"}]}]},{id:"03",title:"Департамент проектных работ",head:"Терпелов Терпел Терпелович",children:[{id:"03-01",title:"Управление проектирования",children:[{id:"03-01-01",title:"Отдел проектирования север",head:"Березин Берез Березович"},{id:"03-01-02",title:"Отдел проектирования юг",head:"Битов Бит Битович"},{id:"03-01-03",title:"Отдел проектирования запад",head:"Литеров Литер Литерович"}]},{id:"03-02",title:"Управление согласования",children:[{id:"03-02-01",title:"Отдел согласования север",head:"Рамов Рама Рамович"},{id:"03-02-02",title:"Отдел согласования юг",head:"Груздев Грузд Груздевич"},{id:"03-02-03",title:"Отдел согласования запад",head:"Блинов Блин Блинович"}]},{id:"03-03",title:"Управление анализа проектов",children:[{id:"03-03-01",title:"Отдел анализа север",head:"Котов Кот Котович"},{id:"03-03-02",title:"Отдел анализа юг",head:"Самолетов Самолет Самолетович"},{id:"03-03-03",title:"Отдел анализа запад",head:"Кораллов Коралл Кораллович"}]}]}],m=t=>e.jsxs(e.Fragment,{children:[t.title,e.jsx("br",{}),e.jsx("small",{style:{color:"#808080"},children:t.head?"("+t.head+")":""})]}),p=t=>e.jsxs(e.Fragment,{children:[t.title," ",e.jsx("small",{style:{color:"#808080"},children:t.head?"("+t.head+")":""})]}),u=(t,i)=>(i.title+" ("+i.head+")").toLowerCase().indexOf(t.toLowerCase())>=0,f={formId:"Test form",confirmChanges:!0,fieldsProps:{departments:{component:s,label:"Подразделения",dataSet:c,plainList:!0,titleRender:m,labelRender:p,filterTreeNode:u}},buttons:null},S=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример TreeSelect настраиваемым отображением строк"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(n,{...f})})]}),y=t=>e.jsxs(l,{children:[e.jsx("div",{children:e.jsx(S,{})}),e.jsx(d,{}),e.jsx("div",{children:e.jsx(r,{items:[{key:1,label:"Show source",children:e.jsx(a,{language:"javascript",style:t.darkMode?o:h,showLineNumbers:!0,children:`
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
const labelRender: ITreeSelectFieldProps['labelRender'] = (treeNode: ITreeSelectNode) => {
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
            plainList:true,
            titleRender: titleRender, //node title render
            labelRender: labelRender, //selected value render
            filterTreeNode: filterTreeNode, //custom filter
        } ,
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
`})}]})})]});export{y as Pagef5177ced202e4e169dced856fb904073,y as default};
