import{r as o,j as a,D as l}from"./index-239f7c99.js";import{P as c,C as u,S as m,d,a as p}from"./docco-df193236.js";import{B as f}from"./index-e86df101.js";import{T as h}from"./tabulatorGrid-76a09af9.js";import{G as g,T as b}from"./tabulatorData-6512b762.js";import"./dFormModal-2ecf2b9b.js";import"./EyeOutlined-6214a1a0.js";import"./DeleteOutlined-01bac62e.js";const x=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],D=()=>{const[t]=o.useState({}),e=o.useCallback(()=>{t.fetchData(s=>(console.log("params",s),new Promise((i,n)=>{setTimeout(()=>{Math.random()<.5?n({message:"Loading error",code:400}):i({data:g(100,"async")})},1e3)})),{manualParam:"manualValue"})},[t]),r={apiRef:t,columnDefaults:b,columns:x,height:500};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Force asynchronous update of the TabulatorGrid dataset"}),a.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 50/50 chance of error"}),a.jsx(f,{onClick:e,children:"Update dataSet asynchronously via Api.fetchData"}),a.jsx(h,{...r})]})},v=t=>{const e=`
import React, {useCallback, useState} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {TabulatorGrid, ITabulatorProps, IGridProps, IGridApi} from @krinopotam/ui-kit/tabulatorGrid';
import {GenerateDataSet, TabulatorBaseColumnsDef} from '../../../data/tabulatorData';
const columns: ITabulatorProps['columns'] = [
    {title: 'Column 1', field: 'col1'},
    {title: 'Column 2', field: 'col2'},
    {title: 'Column 3', field: 'col3'},
];
export const AsyncManualFetch = (): React.JSX.Element => {
    const [gridApi] = useState({} as IGridApi);
    const updateDataViaApiAsync = useCallback(() => {
        gridApi.fetchData(params => {
            console.log('params', params);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const random = Math.random();
                    if (random < 0.5) reject({message: 'Loading error', code: 400});
                    else resolve({data: GenerateDataSet(100, 'async')});
                }, 1000);
            });
        }, {manualParam:'manualValue'});
    }, [gridApi]);
    const props: IGridProps = {
        apiRef: gridApi,
        columnDefaults: TabulatorBaseColumnsDef,
        columns: columns,
        height: 500,
    };
    return (
        <>
            <Button onClick={updateDataViaApiAsync}>Update dataSet asynchronously via Api.fetchData</Button>
            <TabulatorGrid {...props} />
        </>
    );
};
`;return a.jsxs(c,{children:[a.jsx("div",{children:a.jsx(D,{})}),a.jsx(l,{}),a.jsx("div",{children:a.jsx(u,{items:[{key:1,label:"Show source",children:a.jsx(m,{language:"javascript",style:t.darkMode?d:p,showLineNumbers:!0,children:e})}]})})]})};export{v as Page1836c7be3e344a85953eafcfd0194c08,v as default};
