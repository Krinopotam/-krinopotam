import{r as p,j as a,D as h}from"./index-B_ePoftH.js";import{P as f,C as S,h as x,d as P,a as D}from"./docco-BMPGIKWL.js";import{B as y}from"./messageBox-BvRGMm6l.js";import{T as z}from"./tabulatorGrid-BoxMDKyU.js";import{G as b,b as j}from"./tabulatorData-DSn3rW_I.js";import"./dForm-CcoZZ7WD.js";import"./index-CFabrBDT.js";import"./dFormModal-M3vltEal.js";import"./modal-CKEVbAO9.js";import"./EyeOutlined-MiG0h1ef.js";import"./DeleteOutlined-RKHBD1Gm.js";const A=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],r=b(1e4,"async"),C=()=>{const[t]=p.useState({}),d=p.useCallback(()=>{t.fetchData(e=>(console.log("params",e),new Promise((s,n)=>{setTimeout(()=>{Math.random()<.5&&n({message:"Loading error",code:400});const l=(e==null?void 0:e.page)??1,o=(e==null?void 0:e.size)??t.gridProps.paginationSize??10,i=Math.ceil(r.length/o),c=r.slice((l-1)*o,l*o);s({data:c,last_page:i})},1e3)})),{manualParam:"manualValue"})},[t]),m={apiRef:t,columnDefaults:j,columns:A,height:500,pagination:!0,paginationSize:10,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows",paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(e,s)=>(console.log("params",e),new Promise((n,u)=>{setTimeout(()=>{Math.random()<.5&&u({message:"Loading error",code:400});const o=(e==null?void 0:e.page)??1,i=(e==null?void 0:e.size)??s.gridProps.paginationSize??10,c=Math.ceil(r.length/i),g=r.slice((o-1)*i,o*i);n({data:g,last_page:c})},1e3)})),ajaxParams:{extraKey1:"extraValue1",extraKey2:"extraValue2"}};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Force asynchronous update of the TabulatorGrid dataset in the page mode"}),a.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 50/50 chance of error"}),a.jsx(y,{onClick:d,children:"Update dataSet asynchronously via Api.fetchData"}),a.jsx(z,{...m})]})},R=t=>a.jsxs(f,{children:[a.jsx("div",{children:a.jsx(C,{})}),a.jsx(h,{}),a.jsx("div",{children:a.jsx(S,{items:[{key:1,label:"Show source",children:a.jsx(x,{language:"javascript",style:t.darkMode?P:D,showLineNumbers:!0,children:`
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
                        const size = params?.size ?? gridApi.gridProps.paginationSize ?? 10;
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
                    const size = params?.size ?? gridApi.gridProps.paginationSize ?? 10;
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
`})}]})})]});export{R as Page25a5213d743940f0b75731242e91c044,R as default};
