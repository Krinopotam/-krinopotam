import{j as e,D as d}from"./index-CRRPgvdi.js";import{P as u,C as m,h as p,d as g,a as h}from"./docco-COLmzWzy.js";import{T as f}from"./tabulatorGrid-qvzlLlhb.js";import{G as x,b as P}from"./tabulatorData-_Zp1siT3.js";import"./index-CR3eF2D1.js";import"./dFormModal-Df9g-P_m.js";import"./EyeOutlined-DQsML7KC.js";import"./DeleteOutlined-CzvauNsJ.js";const S=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],s=x(500,"async"),j=()=>{const a={columnDefaults:P,columns:S,layout:"fitColumns",height:500,progressiveLoad:"scroll",paginationSize:10,progressiveLoadScrollMargin:300,paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(t,i)=>(console.log("params",t),new Promise((l,b)=>{setTimeout(()=>{const r=(t==null?void 0:t.page)??1,o=(t==null?void 0:t.size)??i.gridProps.paginationSize??5,n=Math.ceil(s.length/o),c=s.slice((r-1)*o,r*o);l({data:c,last_page:n})},1e3)})),ajaxParams:{extraKey1:"extraValue1",extraKey2:"extraValue2"}};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Asynchronous progressive loading data to the TabulatorGrid"}),e.jsx(f,{...a})]})},L=a=>e.jsxs(u,{children:[e.jsx("div",{children:e.jsx(j,{})}),e.jsx(d,{}),e.jsx("div",{children:e.jsx(m,{items:[{key:1,label:"Show source",children:e.jsx(p,{language:"javascript",style:a.darkMode?g:h,showLineNumbers:!0,children:`
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
`})}]})})]});export{L as Page7a431178155e4fdabaf21c58e36e216e,L as default};
