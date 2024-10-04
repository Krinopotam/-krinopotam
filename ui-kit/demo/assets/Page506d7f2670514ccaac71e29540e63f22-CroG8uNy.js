const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-0uqxO8u4.js","assets/default-highlight-AspSjZVb.js","assets/index-BvGUw9C6.js"])))=>i.map(i=>d[i]);
import{j as e,r as i,_ as u,D as m}from"./index-BvGUw9C6.js";import{T as p}from"./tabulatorGrid-YoC4snix.js";import{G as g,T as h}from"./tabulatorData-7wwdtTXj.js";import{P as x,C as f,d as P,c as S}from"./darcula-ztsHFdQx.js";import"./modal-DNjBPuEU.js";import"./dForm-CuoIYVbt.js";import"./index-D8Aqgh10.js";import"./dFormModal-DG3y0daw.js";import"./modal-CFEDQlJ_.js";import"./defaultButtonsProps-CC5Jyskk.js";import"./index-Bb6r_g7-.js";const y=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],s=g(500,"async"),j=()=>{const a={columnDefaults:h,columns:y,layout:"fitColumns",height:500,progressiveLoad:"scroll",paginationSize:10,progressiveLoadScrollMargin:300,paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(t,l)=>(console.log("params",t),new Promise((n,b)=>{setTimeout(()=>{const r=(t==null?void 0:t.page)??1,o=(t==null?void 0:t.size)??l.getProps().paginationSize??5,c=Math.ceil(s.length/o),d=s.slice((r-1)*o,r*o);n({data:d,last_page:c})},1e3)})),ajaxParams:{extraKey1:"extraValue1",extraKey2:"extraValue2"}};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Asynchronous progressive loading data to the TabulatorGrid"}),e.jsx(p,{...a})]})},D=i.lazy(()=>u(()=>import("./index-0uqxO8u4.js").then(a=>a.ds),__vite__mapDeps([0,1,2])).then(a=>({default:a.Prism}))),I=a=>e.jsxs(x,{children:[e.jsx("div",{children:e.jsx(j,{})}),e.jsx(m,{}),e.jsx("div",{children:e.jsx(f,{items:[{key:1,label:"Show source",children:e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(D,{language:"tsx",style:a.darkMode?P:S,showLineNumbers:!0,children:`
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
                    const size = params?.size ?? gridApi.getProps().paginationSize ?? 5;
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
`})})}]})})]});export{I as Page506d7f2670514ccaac71e29540e63f22,I as default};
