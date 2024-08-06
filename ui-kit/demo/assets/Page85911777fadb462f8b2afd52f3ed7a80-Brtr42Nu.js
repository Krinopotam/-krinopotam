import{j as e,D as s}from"./index-Bl-1kopd.js";import{P as c,C as a,h as m,d as h,a as f}from"./docco-DI1KRtYq.js";import{D as p,k as u}from"./index-Cz3A2iSd.js";import{T as S}from"./treeSelectField-iQRr4tKX.js";import"./dFormModal-COFbO3rY.js";import"./useShowArrow-DdEFLD-v.js";import"./DeleteOutlined-C4ZPs8sE.js";import"./useIcons-nrTxXwn9.js";import"./SearchOutlined-Drmuc8b0.js";const x=[{id:"01",title:"Департамент аналитики данных",children:[{id:"01-01",title:"Управление аналитики продаж",children:[{id:"01-01-01",title:"Отдел продаж север"},{id:"01-01-02",title:"Отдел продаж юг"},{id:"01-01-03",title:"Отдел продаж запад"}]},{id:"01-02",title:"Управление аналитики закупок",children:[{id:"01-02-01",title:"Отдел закупок север"},{id:"01-02-02",title:"Отдел закупок юг"},{id:"01-02-03",title:"Отдел закупок запад"}]},{id:"01-03",title:"Управление аналитики производства",children:[{id:"01-03-01",title:"Отдел производства север"},{id:"01-03-02",title:"Отдел производства юг"},{id:"01-03-03",title:"Отдел производства запад"}]}]},{id:"02",title:"Департамент инженерных работ",children:[{id:"02-01",title:"Управление строительства",children:[{id:"02-01-01",title:"Отдел строительства север"},{id:"02-01-02",title:"Отдел строительства юг"},{id:"02-01-03",title:"Отдел строительства запад"}]},{id:"02-02",title:"Управление демонтажа",children:[{id:"02-02-01",title:"Отдел демонтажа север"},{id:"02-02-02",title:"Отдел демонтажа юг"},{id:"02-02-03",title:"Отдел демонтажа запад"}]},{id:"02-03",title:"Управление реконструкции",children:[{id:"02-03-01",title:"Отдел реконструкции север"},{id:"02-03-02",title:"Отдел реконструкции юг"},{id:"02-03-03",title:"Отдел реконструкции запад"}]}]},{id:"03",title:"Департамент проектных работ",children:[{id:"03-01",title:"Управление проектирования",children:[{id:"03-01-01",title:"Отдел проектирования север"},{id:"03-01-02",title:"Отдел проектирования юг"},{id:"03-01-03",title:"Отдел проектирования запад"}]},{id:"03-02",title:"Управление согласования",children:[{id:"03-02-01",title:"Отдел согласования север"},{id:"03-02-02",title:"Отдел согласования юг"},{id:"03-02-03",title:"Отдел согласования запад"}]},{id:"03-03",title:"Управление анализа проектов",children:[{id:"03-03-01",title:"Отдел анализа север"},{id:"03-03-02",title:"Отдел анализа юг"},{id:"03-03-03",title:"Отдел анализа запад"}]}]}],n=(t,i)=>{const r=[];let o=[];for(const l of t){const d=u(l);if(l.children&&l.children.length>0&&(o=n(l.children,i)),o.length>0){d.children=o,r.push(d);continue}l.title.toLowerCase().indexOf(i.toLowerCase())>=0&&r.push(d)}return r},F=t=>new Promise(i=>{setTimeout(()=>{const r=n(x,t);i({data:r})},1e3)}),j={formId:"Test form",confirmChanges:!0,fieldsProps:{departments:{component:S,label:"Подразделения",fetchMode:"onUse",noCacheFetchedData:!0,minSearchLength:1,onDataFetch:t=>F(t)}},buttons:null},g=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример асинхронного поиска в TreeSelect"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(p,{...j})})]}),w=t=>e.jsxs(c,{children:[e.jsx("div",{children:e.jsx(g,{})}),e.jsx(s,{}),e.jsx("div",{children:e.jsx(a,{items:[{key:1,label:"Show source",children:e.jsx(m,{language:"javascript",style:t.darkMode?h:f,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {ITreeSelectSourcePromise} from @krinopotam/ui-kit/treeSelect'
import {CloneObject} from "@krinopotam/js-helpers";
import {TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField";
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        departments: {
            component: TreeSelectField, label: 'Подразделения', fetchMode: 'onUse', noCacheFetchedData: true, minSearchLength: 1, onDataFetch: (search:string) => {
                return asyncFetch(search) as ITreeSelectSourcePromise;
            }
        } ,
    },
    buttons: null,
};
export const TreeSelectAsyncSearch = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`})}]})})]});export{w as Page85911777fadb462f8b2afd52f3ed7a80,w as default};
