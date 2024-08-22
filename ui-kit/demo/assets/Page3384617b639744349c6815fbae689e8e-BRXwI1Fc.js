import{r as o,j as a,D as n}from"./index-OT-fUFlw.js";import{P as c,C as u,h as m,d,a as p}from"./docco-Dp5WB1My.js";import{B as h}from"./messageBox-deXCqDea.js";import{T as f}from"./tabulatorGrid-BdayD2VY.js";import{G as b,b as g}from"./tabulatorData-Bua633a3.js";import"./dForm-CXdkNth1.js";import"./index-BzsQSyIK.js";import"./dFormModal-Brw-56ya.js";import"./modal-Cu7Nzp09.js";import"./EyeOutlined-BLUlGsNj.js";import"./DeleteOutlined-BFYA2MP_.js";const D=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],j=()=>{const[t]=o.useState({}),e=o.useCallback(()=>{t.fetchData(s=>(console.log("params",s),new Promise((i,l)=>{setTimeout(()=>{Math.random()<.5?l({message:"Loading error",code:400}):i({data:b(100,"async")})},1e3)})),{manualParam:"manualValue"})},[t]),r={apiRef:t,columnDefaults:g,columns:D,height:500};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Force asynchronous update of the TabulatorGrid dataset"}),a.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 50/50 chance of error"}),a.jsx(h,{onClick:e,children:"Update dataSet asynchronously via Api.fetchData"}),a.jsx(f,{...r})]})},M=t=>a.jsxs(c,{children:[a.jsx("div",{children:a.jsx(j,{})}),a.jsx(n,{}),a.jsx("div",{children:a.jsx(u,{items:[{key:1,label:"Show source",children:a.jsx(m,{language:"javascript",style:t.darkMode?d:p,showLineNumbers:!0,children:`
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
`})}]})})]});export{M as Page3384617b639744349c6815fbae689e8e,M as default};
