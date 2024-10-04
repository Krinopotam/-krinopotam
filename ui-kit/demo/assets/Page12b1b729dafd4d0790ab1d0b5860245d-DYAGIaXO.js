const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-HHVvrn9L.js","assets/default-highlight-Bg-yw1Xy.js","assets/index-C4KfxKt0.js"])))=>i.map(i=>d[i]);
import{j as a,r as i,_ as m,D as p}from"./index-C4KfxKt0.js";import{T as g}from"./tabulatorGrid-CPBHSndK.js";import{T as h,a as x,b as s}from"./tabulatorData-DHVxAiby.js";import"./dForm-DkkmO2de.js";import{P as b,C as f,d as P,c as T}from"./darcula-Dn2EXRAk.js";import"./modal-B9kdAnYE.js";import"./dFormModal-NILuEzR7.js";import"./modal-DhSU9O67.js";import"./defaultButtonsProps-DB_b1JyB.js";import"./index-kYmYzKiJ.js";import"./index-BK8ljC1v.js";const j={"ru-ru":{columns:{name:"Наименование"},data:{loading:"Загрузка",error:"Ошибка"},groups:{item:"элемент",items:"элементы"},pagination:{page_size:"Строк на странице",page_title:"Показать страницу",first:"Перв.",first_title:"Первая страница",last:"Послед.",last_title:"Последняя страница",prev:"Пред.",prev_title:"Предыдущая страница",next:"След.",next_title:"Следующая страница",all:"Все",counter:{showing:"Выведено",of:"из",rows:"строк",pages:"страниц"}},headerFilters:{default:"фильтр...",columns:{name:"фильтр..."}}}},y=()=>{const t={locale:"ru-ru",langs:j,columnDefaults:h,columns:x,layout:"fitColumns",height:void 0,pagination:!0,paginationSize:5,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows",paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(e,n)=>(console.log("params",e),new Promise((l,u)=>{setTimeout(()=>{Math.random()<.1&&u({message:"Loading error",code:400});const r=(e==null?void 0:e.page)??1,o=(e==null?void 0:e.size)??n.getProps().paginationSize??5,c=Math.ceil(s.length/o),d=s.slice((r-1)*o,r*o);l({data:d,last_page:c})},1e3)})),ajaxParams:{extraKey1:"extraValue1",extraKey2:"extraValue2"}};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Asynchronous data loading to the TabulatorGrid in the page mode"}),a.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 10% chance of error"}),a.jsx(g,{...t})]})},D=i.lazy(()=>m(()=>import("./index-HHVvrn9L.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),A=t=>a.jsxs(b,{children:[a.jsx("div",{children:a.jsx(y,{})}),a.jsx(p,{}),a.jsx("div",{children:a.jsx(f,{items:[{key:1,label:"Show source",children:a.jsx(i.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(D,{language:"tsx",style:t.darkMode?P:T,showLineNumbers:!0,children:`
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
`})})}]})})]});export{A as Page12b1b729dafd4d0790ab1d0b5860245d,A as default};
