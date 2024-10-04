const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DwVYDlRJ.js","assets/default-highlight-B_-WNUR5.js","assets/index-DQhjKTAX.js"])))=>i.map(i=>d[i]);
import{r,j as t,_ as h,D as f}from"./index-DQhjKTAX.js";import{B as S}from"./modal-CoK2ultv.js";import{T as x}from"./tabulatorGrid-Dx7eIu4n.js";import{G as P,T as D}from"./tabulatorData-CQpWr8_L.js";import{P as y,C as z,d as b,c as j}from"./darcula-CRC2cY0A.js";import"./dForm-CrwAE8Nv.js";import"./index-BoiGZk6f.js";import"./dFormModal-DVkDXjc5.js";import"./modal-DUXxSXRd.js";import"./defaultButtonsProps-C3Ko1m4X.js";import"./index-DuCGSJa9.js";const A=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],s=P(1e4,"async"),C=()=>{const[a]=r.useState({}),u=r.useCallback(()=>{a.fetchData(e=>(console.log("params",e),new Promise((n,l)=>{setTimeout(()=>{Math.random()<.5&&l({message:"Loading error",code:400});const c=(e==null?void 0:e.page)??1,o=(e==null?void 0:e.size)??a.getProps().paginationSize??10,i=Math.ceil(s.length/o),d=s.slice((c-1)*o,c*o);n({data:d,last_page:i})},1e3)})),{manualParam:"manualValue"})},[a]),m={apiRef:a,columnDefaults:D,columns:A,height:500,pagination:!0,paginationSize:10,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows",paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(e,n)=>(console.log("params",e),new Promise((l,p)=>{setTimeout(()=>{Math.random()<.5&&p({message:"Loading error",code:400});const o=(e==null?void 0:e.page)??1,i=(e==null?void 0:e.size)??n.getProps().paginationSize??10,d=Math.ceil(s.length/i),g=s.slice((o-1)*i,o*i);l({data:g,last_page:d})},1e3)})),ajaxParams:{extraKey1:"extraValue1",extraKey2:"extraValue2"}};return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Force asynchronous update of the TabulatorGrid dataset in the page mode"}),t.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 50/50 chance of error"}),t.jsx(S,{onClick:u,children:"Update dataSet asynchronously via Api.fetchData"}),t.jsx(x,{...m})]})},M=r.lazy(()=>h(()=>import("./index-DwVYDlRJ.js").then(a=>a.ds),__vite__mapDeps([0,1,2])).then(a=>({default:a.Prism}))),R=a=>t.jsxs(y,{children:[t.jsx("div",{children:t.jsx(C,{})}),t.jsx(f,{}),t.jsx("div",{children:t.jsx(z,{items:[{key:1,label:"Show source",children:t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(M,{language:"tsx",style:a.darkMode?b:j,showLineNumbers:!0,children:`
import React, {useCallback, useState} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {TabulatorGrid, ITabulatorProps, IGridProps, IGridApi} from @krinopotam/ui-kit/tabulatorGrid';
import {GenerateDataSet, TabulatorBaseColumnsDef} from '../../../data/tabulatorData';
const columns: ITabulatorProps['columns'] = [
    {title: 'Column 1', field: 'col1'},
    {title: 'Column 2', field: 'col2'},
    {title: 'Column 3', field: 'col3'},
];
const dataSet = GenerateDataSet(10000, 'async');
export const AsyncPagesManualFetch = (): React.JSX.Element => {
    const [gridApi] = useState({} as IGridApi);
    const updateDataViaApiAsync = useCallback(() => {
        gridApi.fetchData(
            params => {
                console.log('params', params);
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const random = Math.random();
                        if (random < 0.5) reject({message: 'Loading error', code: 400});
                        const page = params?.page ?? 1;
                        const size = params?.size ?? gridApi.getProps().paginationSize ?? 10;
                        const lastPage = Math.ceil(dataSet.length / size);
                        const slicedDataSet = dataSet.slice((page - 1) * size, page * size); //remote fetch imitation
                        resolve({data: slicedDataSet, last_page: lastPage});
                    }, 1000);
                });
            },
            {manualParam: 'manualValue'}
        );
    }, [gridApi]);
    const props: IGridProps = {
        apiRef: gridApi,
        columnDefaults: TabulatorBaseColumnsDef,
        columns: columns,
        height: 500,
        pagination: true,
        paginationSize: 10,
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
                    const size = params?.size ?? gridApi.getProps().paginationSize ?? 10;
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
            <Button onClick={updateDataViaApiAsync}>Update dataSet asynchronously via Api.fetchData</Button>
            <TabulatorGrid {...props} />
        </>
    );
};
`})})}]})})]});export{R as Pageb40708aa40304d92961e9c054b3d0805,R as default};
