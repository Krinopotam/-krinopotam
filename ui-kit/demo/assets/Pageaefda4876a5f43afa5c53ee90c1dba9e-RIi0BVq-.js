const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DJhjoKXt.js","assets/default-highlight-1wZDEzJ6.js","assets/index-B5poLpDm.js"])))=>i.map(i=>d[i]);
import{j as e,D as u,r as i,_ as m}from"./index-B5poLpDm.js";import{T as p}from"./tabulatorGrid-igE2XdiX.js";import{a as g,G as f}from"./tabulatorData-BmpfO34x.js";import{P as h,C as x,d as P,c as S}from"./darcula-DszBWugp.js";import"./buttonsRow-aX3TQ5bu.js";import"./dForm-vrGhQ6Lh.js";import"./messageBox-1o2XjDyt.js";import"./index-AMqWlYeY.js";import"./dFormModal-C_QqbNS_.js";import"./modal-tHBgt86o.js";import"./defaultButtonsProps-DtqWhfDr.js";import"./PlusOutlined-Bg-hNKo-.js";import"./index--2ky6TFp.js";const y=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],s=f(500,"async"),j=()=>{const a={columnDefaults:g,columns:y,layout:"fitColumns",height:500,progressiveLoad:"scroll",paginationSize:10,progressiveLoadScrollMargin:300,paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(t,l)=>(console.log("params",t),new Promise((n,b)=>{setTimeout(()=>{const r=(t==null?void 0:t.page)??1,o=(t==null?void 0:t.size)??l.getProps().paginationSize??5,c=Math.ceil(s.length/o),d=s.slice((r-1)*o,r*o);n({data:d,last_page:c})},1e3)})),ajaxParams:{extraKey1:"extraValue1",extraKey2:"extraValue2"}};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Asynchronous progressive loading data to the TabulatorGrid"}),e.jsx(p,{...a})]})},D=i.lazy(()=>m(()=>import("./index-DJhjoKXt.js").then(a=>a.dw),__vite__mapDeps([0,1,2])).then(a=>({default:a.Prism}))),V=a=>e.jsxs(h,{children:[e.jsx("div",{children:e.jsx(j,{})}),e.jsx(u,{}),e.jsx("div",{children:e.jsx(x,{items:[{key:1,label:"Show source",children:e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(D,{language:"tsx",style:a.darkMode?P:S,showLineNumbers:!0,children:`
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
`})})}]})})]});export{V as Pageaefda4876a5f43afa5c53ee90c1dba9e,V as default};
