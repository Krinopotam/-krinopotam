const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BCkY1BI4.js","assets/default-highlight-BkRzspxv.js","assets/index-D4bHa_3o.js"])))=>i.map(i=>d[i]);
import{j as e,r as i,_ as u,D as m}from"./index-D4bHa_3o.js";import{T as p}from"./tabulatorGrid-DeNUCISi.js";import{G as g,T as h}from"./tabulatorData-rU-MgCHl.js";import{P as x,C as f,d as P,c as S}from"./darcula-DdlBXz-Q.js";import"./modal-Cje67qL2.js";import"./dForm-3m-O6pho.js";import"./index-BrKQ3NvS.js";import"./dFormModal-BCjjhs8Y.js";import"./modal-B1kKEzi9.js";import"./defaultButtonsProps-D413j251.js";import"./index-BVoWYqDG.js";const y=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],s=g(500,"async"),j=()=>{const a={columnDefaults:h,columns:y,layout:"fitColumns",height:500,progressiveLoad:"scroll",paginationSize:10,progressiveLoadScrollMargin:300,paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(t,l)=>(console.log("params",t),new Promise((n,b)=>{setTimeout(()=>{const r=(t==null?void 0:t.page)??1,o=(t==null?void 0:t.size)??l.getProps().paginationSize??5,c=Math.ceil(s.length/o),d=s.slice((r-1)*o,r*o);n({data:d,last_page:c})},1e3)})),ajaxParams:{extraKey1:"extraValue1",extraKey2:"extraValue2"}};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Asynchronous progressive loading data to the TabulatorGrid"}),e.jsx(p,{...a})]})},D=i.lazy(()=>u(()=>import("./index-BCkY1BI4.js").then(a=>a.ds),__vite__mapDeps([0,1,2])).then(a=>({default:a.Prism}))),I=a=>e.jsxs(x,{children:[e.jsx("div",{children:e.jsx(j,{})}),e.jsx(m,{}),e.jsx("div",{children:e.jsx(f,{items:[{key:1,label:"Show source",children:e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(D,{language:"tsx",style:a.darkMode?P:S,showLineNumbers:!0,children:`
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
`})})}]})})]});export{I as Page71e54c691e404702a1ed900fe8bee8f7,I as default};
