const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-l9Wg9Pc0.js","assets/default-highlight-B7lEcFzY.js","assets/index-DM4KduW8.js"])))=>i.map(i=>d[i]);
import{r as e,j as a,_ as l,D as c}from"./index-DM4KduW8.js";import{B as u}from"./modal-CrAyaDCA.js";import{T as m}from"./tabulatorGrid-hXEGaPy3.js";import{G as d,T as p}from"./tabulatorData-Ci2NRdl6.js";import{P as h,C as f,d as b,c as g}from"./darcula-B-kkYBo3.js";import"./dForm-DnIX3jkH.js";import"./index-B_-TuVyw.js";import"./dFormModal-mDojMLr5.js";import"./modal-DPQg-moX.js";import"./defaultButtonsProps-CTSmhZ4z.js";import"./index-GaKvfcA3.js";const x=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],y=()=>{const[t]=e.useState({}),o=e.useCallback(()=>{t.fetchData(s=>(console.log("params",s),new Promise((i,n)=>{setTimeout(()=>{Math.random()<.5?n({message:"Loading error",code:400}):i({data:d(100,"async")})},1e3)})),{manualParam:"manualValue"})},[t]),r={apiRef:t,columnDefaults:p,columns:x,height:500};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Force asynchronous update of the TabulatorGrid dataset"}),a.jsx("p",{style:{color:"red"},children:"To test boot resumption there is a 50/50 chance of error"}),a.jsx(u,{onClick:o,children:"Update dataSet asynchronously via Api.fetchData"}),a.jsx(m,{...r})]})},D=e.lazy(()=>l(()=>import("./index-l9Wg9Pc0.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),L=t=>a.jsxs(h,{children:[a.jsx("div",{children:a.jsx(y,{})}),a.jsx(c,{}),a.jsx("div",{children:a.jsx(f,{items:[{key:1,label:"Show source",children:a.jsx(e.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(D,{language:"tsx",style:t.darkMode?b:g,showLineNumbers:!0,children:`
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
`})})}]})})]});export{L as Page21fedfd8a2b24072a7e14ba16d3ce550,L as default};