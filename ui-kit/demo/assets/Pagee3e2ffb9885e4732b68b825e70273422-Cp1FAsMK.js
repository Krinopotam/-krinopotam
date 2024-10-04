const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BCkY1BI4.js","assets/default-highlight-BkRzspxv.js","assets/index-D4bHa_3o.js"])))=>i.map(i=>d[i]);
import{j as e,r as i,_ as d,D as p}from"./index-D4bHa_3o.js";import{T as g}from"./tabulatorGrid-DeNUCISi.js";import{T as h,a as x,b as s}from"./tabulatorData-rU-MgCHl.js";import"./dForm-3m-O6pho.js";import{P as f,C as b,d as P,c as T}from"./darcula-DdlBXz-Q.js";import"./modal-Cje67qL2.js";import"./dFormModal-BCjjhs8Y.js";import"./modal-B1kKEzi9.js";import"./defaultButtonsProps-D413j251.js";import"./index-BrKQ3NvS.js";import"./index-BVoWYqDG.js";const j={"ru-ru":{columns:{name:"Наименование"},data:{loading:"Загрузка",error:"Ошибка"},groups:{item:"элемент",items:"элементы"},pagination:{page_size:"Строк на странице",page_title:"Показать страницу",first:"Перв.",first_title:"Первая страница",last:"Послед.",last_title:"Последняя страница",prev:"Пред.",prev_title:"Предыдущая страница",next:"След.",next_title:"Следующая страница",all:"Все",counter:{showing:"Выведено",of:"из",rows:"строк",pages:"страниц"}},headerFilters:{default:"фильтр...",columns:{name:"фильтр..."}}}},y=()=>{const t={locale:"ru-ru",langs:j,columnDefaults:h,columns:x,layout:"fitColumns",height:void 0,pagination:!0,paginationSize:5,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows",paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(a,n)=>(console.log("params",a),new Promise((l,u)=>{setTimeout(()=>{Math.random()<.1&&u({message:"Loading error",code:400});const r=(a==null?void 0:a.page)??1,o=(a==null?void 0:a.size)??n.getProps().paginationSize??5,c=Math.ceil(s.length/o),m=s.slice((r-1)*o,r*o);l({data:m,last_page:c})},1e3)})),ajaxParams:{extraKey1:"extraValue1",extraKey2:"extraValue2"}};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Asynchronous data loading to the TabulatorGrid in the page mode"}),e.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 10% chance of error"}),e.jsx(g,{...t})]})},D=i.lazy(()=>d(()=>import("./index-BCkY1BI4.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),A=t=>e.jsxs(f,{children:[e.jsx("div",{children:e.jsx(y,{})}),e.jsx(p,{}),e.jsx("div",{children:e.jsx(b,{items:[{key:1,label:"Show source",children:e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(D,{language:"tsx",style:t.darkMode?P:T,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../../data/tabulatorData';
import {TabulatorLocaleRu} from @krinopotam/ui-kit/tabulatorBase";
export const AsyncPages = (): React.JSX.Element => {
    const props: IGridProps = {
        locale: 'ru-ru',
        langs: TabulatorLocaleRu,
        columnDefaults: TabulatorBaseColumnsDef,
        columns: TabulatorBaseColumns,
        layout: 'fitColumns',
        height: undefined,
        pagination: true,
        paginationSize: 5,
        paginationSizeSelector: [5, 10, 50, 100],
        paginationCounter: 'rows',
        paginationMode: 'remote',
        filterMode: 'remote',
        sortMode: 'remote',
        onDataFetch: (params, gridApi) => {
            console.log('params', params);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const random = Math.random();
                    if (random < 0.1) reject({message: 'Loading error', code: 400});
                    const page = params?.page ?? 1;
                    const size = params?.size ?? gridApi.getProps().paginationSize ?? 5;
                    const lastPage = Math.ceil(TabulatorPlainData.length / size);
                    const slicedDataSet = TabulatorPlainData.slice((page - 1) * size, page * size); //remote fetch imitation
                    resolve({data: slicedDataSet, last_page: lastPage});
                }, 1000);
            });
        },
        ajaxParams: {extraKey1: 'extraValue1', extraKey2: 'extraValue2'}, //any additional params (you can pass a callback)
    };
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`})})}]})})]});export{A as Pagee3e2ffb9885e4732b68b825e70273422,A as default};
