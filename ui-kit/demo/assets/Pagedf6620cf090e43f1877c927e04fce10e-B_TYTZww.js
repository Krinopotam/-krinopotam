import{j as a,D as m}from"./index-DhMwsQtd.js";import{P as d,C as p,h as g,d as h,a as f}from"./docco-BR1GjPZn.js";import{T as x}from"./tabulatorGrid-CVRHT1bL.js";import{b,T,a as i}from"./tabulatorData-rIJmlee8.js";import"./dForm-BvND7aMS.js";import"./messageBox-CQECnf8I.js";import"./dFormModal-B9s_VGMc.js";import"./modal-eXRNn5Q9.js";import"./EyeOutlined-D8voB2bB.js";import"./index-DNVFzPvX.js";import"./DeleteOutlined-BqcAHwXU.js";const P={"ru-ru":{columns:{name:"Наименование"},data:{loading:"Загрузка",error:"Ошибка"},groups:{item:"элемент",items:"элементы"},pagination:{page_size:"Строк на странице",page_title:"Показать страницу",first:"Перв.",first_title:"Первая страница",last:"Послед.",last_title:"Последняя страница",prev:"Пред.",prev_title:"Предыдущая страница",next:"След.",next_title:"Следующая страница",all:"Все",counter:{showing:"Выведено",of:"из",rows:"строк",pages:"страниц"}},headerFilters:{default:"фильтр...",columns:{name:"фильтр..."}}}},j=()=>{const t={locale:"ru-ru",langs:P,columnDefaults:b,columns:T,layout:"fitColumns",height:void 0,pagination:!0,paginationSize:5,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows",paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(e,s)=>(console.log("params",e),new Promise((n,l)=>{setTimeout(()=>{Math.random()<.1&&l({message:"Loading error",code:400});const r=(e==null?void 0:e.page)??1,o=(e==null?void 0:e.size)??s.gridProps.paginationSize??5,u=Math.ceil(i.length/o),c=i.slice((r-1)*o,r*o);n({data:c,last_page:u})},1e3)})),ajaxParams:{extraKey1:"extraValue1",extraKey2:"extraValue2"}};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Asynchronous data loading to the TabulatorGrid in the page mode"}),a.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 10% chance of error"}),a.jsx(x,{...t})]})},L=t=>a.jsxs(d,{children:[a.jsx("div",{children:a.jsx(j,{})}),a.jsx(m,{}),a.jsx("div",{children:a.jsx(p,{items:[{key:1,label:"Show source",children:a.jsx(g,{language:"javascript",style:t.darkMode?h:f,showLineNumbers:!0,children:`
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
                    const size = params?.size ?? gridApi.gridProps.paginationSize ?? 5;
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
`})}]})})]});export{L as Pagedf6620cf090e43f1877c927e04fce10e,L as default};
