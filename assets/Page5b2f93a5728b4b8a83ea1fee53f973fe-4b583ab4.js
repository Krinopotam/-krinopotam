import{j as a,D as d}from"./index-c797af55.js";import{P as m,C as p,S as g,d as h,a as f}from"./docco-e40295f3.js";import{T as x}from"./tabulatorGrid-31aae25d.js";import{T as b,a as P,b as s}from"./tabulatorData-7c778850.js";import"./index-8c229de7.js";import"./dFormModal-cedb0440.js";import"./EyeOutlined-8bcb47e2.js";import"./DeleteOutlined-bba666a5.js";const T=()=>{const t={columnDefaults:b,columns:P,layout:"fitColumns",height:void 0,pagination:!0,paginationSize:5,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows",paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(e,i)=>(console.log("params",e),new Promise((n,l)=>{setTimeout(()=>{Math.random()<.5&&l({message:"Loading error",code:400});const r=(e==null?void 0:e.page)??1,o=(e==null?void 0:e.size)??i.gridProps.paginationSize??5,c=Math.ceil(s.length/o),u=s.slice((r-1)*o,r*o);n({data:u,last_page:c})},1e3)})),ajaxParams:{extraKey1:"extraValue1",extraKey2:"extraValue2"}};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Asynchronous data loading to the TabulatorGrid in the page mode"}),a.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 50/50 chance of error"}),a.jsx(x,{...t})]})},w=t=>{const e=`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../../data/tabulatorData';
export const AsyncPages = (): React.JSX.Element => {
    const props: IGridProps = {
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
                    if (random < 0.5) reject({message: 'Loading error', code: 400});
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
`;return a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(T,{})}),a.jsx(d,{}),a.jsx("div",{children:a.jsx(p,{items:[{key:1,label:"Show source",children:a.jsx(g,{language:"javascript",style:t.darkMode?h:f,showLineNumbers:!0,children:e})}]})})]})};export{w as Page5b2f93a5728b4b8a83ea1fee53f973fe,w as default};
