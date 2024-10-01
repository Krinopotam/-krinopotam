const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cz0v0Rp9.js","assets/default-highlight-CrA-MuiQ.js","assets/index-DKsnjJVp.js"])))=>i.map(i=>d[i]);
import{j as e,r as n,_ as c,D as a}from"./index-DKsnjJVp.js";import{D as m}from"./dForm-RzxzTjHO.js";import"./useApiIsNodeSelected-DVBYhN5o.js";import"./modal-s_O7aRct.js";import{m as h}from"./dFormModal-BxobeehR.js";import{T as p}from"./treeSelectField-GZfiUGts.js";import{P as u,C as f,d as x,c as S}from"./darcula-CbhncTMN.js";import"./index-CSyocx7G.js";import"./modal-sKRn3jmz.js";import"./defaultButtonsProps-Bo_d-5AQ.js";import"./useShowArrow-42klRCfV.js";import"./useIcons-CWHa1yEa.js";import"./SearchOutlined-K0l7o9jX.js";const F=[{id:"01",title:"Департамент аналитики данных",children:[{id:"01-01",title:"Управление аналитики продаж",children:[{id:"01-01-01",title:"Отдел продаж север"},{id:"01-01-02",title:"Отдел продаж юг"},{id:"01-01-03",title:"Отдел продаж запад"}]},{id:"01-02",title:"Управление аналитики закупок",children:[{id:"01-02-01",title:"Отдел закупок север"},{id:"01-02-02",title:"Отдел закупок юг"},{id:"01-02-03",title:"Отдел закупок запад"}]},{id:"01-03",title:"Управление аналитики производства",children:[{id:"01-03-01",title:"Отдел производства север"},{id:"01-03-02",title:"Отдел производства юг"},{id:"01-03-03",title:"Отдел производства запад"}]}]},{id:"02",title:"Департамент инженерных работ",children:[{id:"02-01",title:"Управление строительства",children:[{id:"02-01-01",title:"Отдел строительства север"},{id:"02-01-02",title:"Отдел строительства юг"},{id:"02-01-03",title:"Отдел строительства запад"}]},{id:"02-02",title:"Управление демонтажа",children:[{id:"02-02-01",title:"Отдел демонтажа север"},{id:"02-02-02",title:"Отдел демонтажа юг"},{id:"02-02-03",title:"Отдел демонтажа запад"}]},{id:"02-03",title:"Управление реконструкции",children:[{id:"02-03-01",title:"Отдел реконструкции север"},{id:"02-03-02",title:"Отдел реконструкции юг"},{id:"02-03-03",title:"Отдел реконструкции запад"}]}]},{id:"03",title:"Департамент проектных работ",children:[{id:"03-01",title:"Управление проектирования",children:[{id:"03-01-01",title:"Отдел проектирования север"},{id:"03-01-02",title:"Отдел проектирования юг"},{id:"03-01-03",title:"Отдел проектирования запад"}]},{id:"03-02",title:"Управление согласования",children:[{id:"03-02-01",title:"Отдел согласования север"},{id:"03-02-02",title:"Отдел согласования юг"},{id:"03-02-03",title:"Отдел согласования запад"}]},{id:"03-03",title:"Управление анализа проектов",children:[{id:"03-03-01",title:"Отдел анализа север"},{id:"03-03-02",title:"Отдел анализа юг"},{id:"03-03-03",title:"Отдел анализа запад"}]}]}],s=(t,i)=>{const r=[];let l=[];for(const o of t){const d=h(o);if(o.children&&o.children.length>0&&(l=s(o.children,i)),l.length>0){d.children=l,r.push(d);continue}o.title.toLowerCase().indexOf(i.toLowerCase())>=0&&r.push(d)}return r},P=t=>new Promise(i=>{setTimeout(()=>{const r=s(F,t);i({data:r})},1e3)}),j={formId:"Test form",confirmChanges:!0,fieldsProps:{departments:{component:p,label:"Подразделения",fetchMode:"onUse",noCacheFetchedData:!0,minSearchLength:1,onDataFetch:t=>P(t)}},buttons:null},g=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример асинхронного поиска в TreeSelect"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(m,{...j})})]}),T=n.lazy(()=>c(()=>import("./index-Cz0v0Rp9.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),O=t=>e.jsxs(u,{children:[e.jsx("div",{children:e.jsx(g,{})}),e.jsx(a,{}),e.jsx("div",{children:e.jsx(f,{items:[{key:1,label:"Show source",children:e.jsx(n.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(T,{language:"tsx",style:t.darkMode?x:S,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {ITreeSelectSourcePromise} from @krinopotam/ui-kit/treeSelect'
import {CloneObject} from "@krinopotam/js-helpers";
import {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField";
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        departments: {
            component: TreeSelectField, label: 'Подразделения', fetchMode: 'onUse', noCacheFetchedData: true, minSearchLength: 1, onDataFetch: (search:string) => {
                return asyncFetch(search) as ITreeSelectSourcePromise;
            }
        } satisfies ITreeSelectFieldProps,
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
`})})}]})})]});export{O as Page2ae08eb3ddeb4f3c847afb846bbafc1a,O as default};
