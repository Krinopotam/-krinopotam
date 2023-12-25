import{j as e,D as d}from"./index-3024f328.js";import{P as u,C as m,S as p,d as g,a as f}from"./docco-8e796366.js";import{T as h}from"./tabulatorGrid-a1a2b210.js";import{G as x,b as S}from"./tabulatorData-f1a03775.js";import"./index-901967cb.js";import"./dFormModal-09fd0649.js";import"./EyeOutlined-ff2ae648.js";import"./DeleteOutlined-73630e69.js";const P=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],s=x(500,"async"),b=()=>{const a={columnDefaults:S,columns:P,layout:"fitColumns",height:500,progressiveLoad:"scroll",paginationSize:10,progressiveLoadScrollMargin:300,paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(t,i)=>(console.log("params",t),new Promise((l,j)=>{setTimeout(()=>{const r=(t==null?void 0:t.page)??1,o=(t==null?void 0:t.size)??i.gridProps.paginationSize??5,n=Math.ceil(s.length/o),c=s.slice((r-1)*o,r*o);l({data:c,last_page:n})},1e3)})),ajaxParams:{extraKey1:"extraValue1",extraKey2:"extraValue2"}};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Asynchronous progressive loading data to the TabulatorGrid"}),e.jsx(h,{...a})]})},L=a=>{const t=`
import React from 'react';
import {IGridProps, ITabulatorProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {GenerateDataSet, TabulatorBaseColumnsDef} from '../../../data/tabulatorData';
const columns: ITabulatorProps['columns'] = [
    {title: 'Column 1', field: 'col1'},
    {title: 'Column 2', field: 'col2'},
    {title: 'Column 3', field: 'col3'},
];
const dataSet = GenerateDataSet(500, 'async');
export const AsyncProgressive = (): React.JSX.Element => {
    const props: IGridProps = {
        columnDefaults: TabulatorBaseColumnsDef,
        columns: columns,
        layout: 'fitColumns',
        height: 500,
        progressiveLoad: 'scroll',
        paginationSize: 10,
        progressiveLoadScrollMargin:300,
        paginationMode: 'remote',
        filterMode: 'remote',
        sortMode: 'remote',
        onDataFetch: (params, gridApi) => {
            console.log('params', params);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const page = params?.page ?? 1;
                    const size = params?.size ?? gridApi.gridProps.paginationSize ?? 5;
                    const lastPage = Math.ceil(dataSet.length / size);
                    const slicedDataSet = dataSet.slice((page - 1) * size, page * size); //remote fetch imitation
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
`;return e.jsxs(u,{children:[e.jsx("div",{children:e.jsx(b,{})}),e.jsx(d,{}),e.jsx("div",{children:e.jsx(m,{items:[{key:1,label:"Show source",children:e.jsx(p,{language:"javascript",style:a.darkMode?g:f,showLineNumbers:!0,children:t})}]})})]})};export{L as Pagef86ffcc85c0245e2be0ae775b5542e8e,L as default};
