const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cz0v0Rp9.js","assets/default-highlight-CrA-MuiQ.js","assets/index-DKsnjJVp.js"])))=>i.map(i=>d[i]);
import{j as t,r as e,_ as d,D as l}from"./index-DKsnjJVp.js";import{T as r}from"./tree-D9GqRho1.js";import{P as c,C as n,d as s,c as o}from"./darcula-CbhncTMN.js";import"./useApiIsNodeSelected-DVBYhN5o.js";import"./dFormModal-BxobeehR.js";import"./modal-s_O7aRct.js";import"./dForm-RzxzTjHO.js";import"./index-CSyocx7G.js";import"./modal-sKRn3jmz.js";import"./defaultButtonsProps-Bo_d-5AQ.js";import"./index-CxCukQln.js";import"./index-j4TMk8Nl.js";const a=[{id:"01",title:"Департамент аналитики данных",children:[{id:"01-01",title:"Управление аналитики продаж",children:[{id:"01-01-01",title:"Отдел продаж север"},{id:"01-01-02",title:"Отдел продаж юг"},{id:"01-01-03",title:"Отдел продаж запад"}]},{id:"01-02",title:"Управление аналитики закупок",children:[{id:"01-02-01",title:"Отдел закупок север"},{id:"01-02-02",title:"Отдел закупок юг"},{id:"01-02-03",title:"Отдел закупок запад"}]},{id:"01-03",title:"Управление аналитики производства",children:[{id:"01-03-01",title:"Отдел производства север"},{id:"01-03-02",title:"Отдел производства юг"},{id:"01-03-03",title:"Отдел производства запад"}]}]},{id:"02",title:"Департамент инженерных работ",children:[{id:"02-01",title:"Управление строительства",children:[{id:"02-01-01",title:"Отдел строительства север"},{id:"02-01-02",title:"Отдел строительства юг"},{id:"02-01-03",title:"Отдел строительства запад"}]},{id:"02-02",title:"Управление демонтажа",children:[{id:"02-02-01",title:"Отдел демонтажа север"},{id:"02-02-02",title:"Отдел демонтажа юг"},{id:"02-02-03",title:"Отдел демонтажа запад"}]},{id:"02-03",title:"Управление реконструкции",children:[{id:"02-03-01",title:"Отдел реконструкции север"},{id:"02-03-02",title:"Отдел реконструкции юг"},{id:"02-03-03",title:"Отдел реконструкции запад"}]}]},{id:"03",title:"Департамент проектных работ",children:[{id:"03-01",title:"Управление проектирования",children:[{id:"03-01-01",title:"Отдел проектирования север"},{id:"03-01-02",title:"Отдел проектирования юг"},{id:"03-01-03",title:"Отдел проектирования запад"}]},{id:"03-02",title:"Управление согласования",children:[{id:"03-02-01",title:"Отдел согласования север"},{id:"03-02-02",title:"Отдел согласования юг"},{id:"03-02-03",title:"Отдел согласования запад"}]},{id:"03-03",title:"Управление анализа проектов",children:[{id:"03-03-01",title:"Отдел анализа север"},{id:"03-03-02",title:"Отдел анализа юг"},{id:"03-03-03",title:"Отдел анализа запад"}]}]}],h={dataSet:a,defaultExpandAll:!0},m=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Пример Extended Tree"}),t.jsx("div",{style:{maxWidth:500},children:t.jsx(r,{...h})})]}),p=e.lazy(()=>d(()=>import("./index-Cz0v0Rp9.js").then(i=>i.ds),__vite__mapDeps([0,1,2])).then(i=>({default:i.Prism}))),k=i=>t.jsxs(c,{children:[t.jsx("div",{children:t.jsx(m,{})}),t.jsx(l,{}),t.jsx("div",{children:t.jsx(n,{items:[{key:1,label:"Show source",children:t.jsx(e.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(p,{language:"tsx",style:i.darkMode?s:o,showLineNumbers:!0,children:`
import React from 'react';
import {IExtTreeProps, Tree} from @krinopotam/ui-kit/tree';
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
const treeProps: IExtTreeProps = {
    dataSet: dataSet,
    defaultExpandAll: true,
};
export const TreeBasic = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <Tree {...treeProps} />
            </div>
        </>
    );
};
`})})}]})})]});export{k as Page0cb42890137d444fa26a8bcc0432e117,k as default};
