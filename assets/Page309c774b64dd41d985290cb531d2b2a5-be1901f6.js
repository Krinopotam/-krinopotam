import{j as e,D as s}from"./index-72bf19bf.js";import{P as c,C as a,S as m,d as h,a as p}from"./docco-47b38a91.js";import{D as u,j as f}from"./index-8ab5ffa3.js";import{T as S}from"./treeSelectField-643f3158.js";import"./dFormModal-6688ff3d.js";import"./useShowArrow-7b93d832.js";import"./DeleteOutlined-607d6fba.js";import"./SearchOutlined-f0393ae4.js";const x=[{id:"01",title:"Департамент аналитики данных",children:[{id:"01-01",title:"Управление аналитики продаж",children:[{id:"01-01-01",title:"Отдел продаж север"},{id:"01-01-02",title:"Отдел продаж юг"},{id:"01-01-03",title:"Отдел продаж запад"}]},{id:"01-02",title:"Управление аналитики закупок",children:[{id:"01-02-01",title:"Отдел закупок север"},{id:"01-02-02",title:"Отдел закупок юг"},{id:"01-02-03",title:"Отдел закупок запад"}]},{id:"01-03",title:"Управление аналитики производства",children:[{id:"01-03-01",title:"Отдел производства север"},{id:"01-03-02",title:"Отдел производства юг"},{id:"01-03-03",title:"Отдел производства запад"}]}]},{id:"02",title:"Департамент инженерных работ",children:[{id:"02-01",title:"Управление строительства",children:[{id:"02-01-01",title:"Отдел строительства север"},{id:"02-01-02",title:"Отдел строительства юг"},{id:"02-01-03",title:"Отдел строительства запад"}]},{id:"02-02",title:"Управление демонтажа",children:[{id:"02-02-01",title:"Отдел демонтажа север"},{id:"02-02-02",title:"Отдел демонтажа юг"},{id:"02-02-03",title:"Отдел демонтажа запад"}]},{id:"02-03",title:"Управление реконструкции",children:[{id:"02-03-01",title:"Отдел реконструкции север"},{id:"02-03-02",title:"Отдел реконструкции юг"},{id:"02-03-03",title:"Отдел реконструкции запад"}]}]},{id:"03",title:"Департамент проектных работ",children:[{id:"03-01",title:"Управление проектирования",children:[{id:"03-01-01",title:"Отдел проектирования север"},{id:"03-01-02",title:"Отдел проектирования юг"},{id:"03-01-03",title:"Отдел проектирования запад"}]},{id:"03-02",title:"Управление согласования",children:[{id:"03-02-01",title:"Отдел согласования север"},{id:"03-02-02",title:"Отдел согласования юг"},{id:"03-02-03",title:"Отдел согласования запад"}]},{id:"03-03",title:"Управление анализа проектов",children:[{id:"03-03-01",title:"Отдел анализа север"},{id:"03-03-02",title:"Отдел анализа юг"},{id:"03-03-03",title:"Отдел анализа запад"}]}]}],n=(t,i)=>{const r=[];let o=[];for(const l of t){const d=f(l);if(l.children&&l.children.length>0&&(o=n(l.children,i)),o.length>0){d.children=o,r.push(d);continue}l.title.toLowerCase().indexOf(i.toLowerCase())>=0&&r.push(d)}return r},j=t=>new Promise(i=>{setTimeout(()=>{const r=n(x,t);i({data:r})},1e3)}),F={formId:"Test form",confirmChanges:!0,fieldsProps:{departments:{component:S,label:"Подразделения",fetchMode:"onUse",noCacheFetchedData:!0,minSearchLength:1,onDataFetch:t=>j(t)}},buttons:null},g=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример асинхронного поиска в TreeSelect"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(u,{...F})})]}),L=t=>{const i=`
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
`;return e.jsxs(c,{children:[e.jsx("div",{children:e.jsx(g,{})}),e.jsx(s,{}),e.jsx("div",{children:e.jsx(a,{items:[{key:1,label:"Show source",children:e.jsx(m,{language:"javascript",style:t.darkMode?h:p,showLineNumbers:!0,children:i})}]})})]})};export{L as Page309c774b64dd41d985290cb531d2b2a5,L as default};
