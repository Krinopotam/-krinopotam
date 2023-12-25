import{j as a,D as u}from"./index-3024f328.js";import{P as m,C as p,S as g,d as h,a as x}from"./docco-8e796366.js";import{T as b}from"./tabulatorGrid-a1a2b210.js";import{b as f,T as P,a as s}from"./tabulatorData-f1a03775.js";import"./index-901967cb.js";import"./dFormModal-09fd0649.js";import"./EyeOutlined-ff2ae648.js";import"./DeleteOutlined-73630e69.js";const T=()=>{const t={columnDefaults:f,columns:P,layout:"fitColumns",height:void 0,pagination:!0,paginationSize:5,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows",paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(e,i)=>(console.log("params",e),new Promise((n,l)=>{setTimeout(()=>{Math.random()<.5&&l({message:"Loading error",code:400});const r=(e==null?void 0:e.page)??1,o=(e==null?void 0:e.size)??i.gridProps.paginationSize??5,c=Math.ceil(s.length/o),d=s.slice((r-1)*o,r*o);n({data:d,last_page:c})},1e3)})),ajaxParams:{extraKey1:"extraValue1",extraKey2:"extraValue2"}};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Asynchronous data loading to the TabulatorGrid in the page mode"}),a.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 50/50 chance of error"}),a.jsx(b,{...t})]})},w=t=>{const e=`
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
`;return a.jsxs(m,{children:[a.jsx("div",{children:a.jsx(T,{})}),a.jsx(u,{}),a.jsx("div",{children:a.jsx(p,{items:[{key:1,label:"Show source",children:a.jsx(g,{language:"javascript",style:t.darkMode?h:x,showLineNumbers:!0,children:e})}]})})]})};export{w as Page621629b3d2734a6d9d7cd83598fdb50e,w as default};
