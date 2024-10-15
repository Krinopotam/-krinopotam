const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BL7bdWBR.js","assets/default-highlight-Dl6tLCjN.js","assets/index-1vveH9ac.js"])))=>i.map(i=>d[i]);
import{r as a,j as t,_ as p,D as m}from"./index-1vveH9ac.js";import{b as i}from"./mergeButtons-DTGr5PDV.js";import{T as h}from"./tabulatorGrid-D5G9O9wz.js";import{G as o,T as S}from"./tabulatorData-DQ2nqhzb.js";import{P as b,C as f,d as D,c as g}from"./darcula-DpQ7T8l_.js";import"./dForm-D5DpcrSR.js";import"./modal-DQmoWYEp.js";import"./index-X3DQSWWD.js";import"./dFormModal-0jOrNNg7.js";import"./modal-CIPFU5OD.js";import"./defaultButtonsProps-BsF6dd38.js";import"./index-ClZuhHMx.js";const C=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],x=()=>{const[e,s]=a.useState(void 0),[r]=a.useState({}),d=a.useCallback(()=>{s(o(1e3,"state"))},[]),n=a.useCallback(()=>{r.setDataSet(o(1e3,"api"))},[r]),l=a.useCallback(()=>{r.fetchData(()=>new Promise((u,c)=>{setTimeout(()=>{Math.random()<.1?c({message:"Ошибка загрузки данных",code:400}):u({data:o(1e3,"async")})},1e3)}))},[r]);return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of updating the dataSet of the Tabulator grid"}),t.jsx(i,{onClick:d,children:"Update DataSet via setState"})," - the entire grid is re-rendered",t.jsx("br",{}),t.jsx("br",{}),t.jsx(i,{onClick:n,children:"Update dataSet via Api.setDataSet"})," - dataSet is updated, but this does not cause the grid to rerender",t.jsx("br",{}),t.jsx("br",{}),t.jsx(i,{onClick:l,children:"Update dataSet asynchronously via Api.fetchData"})," - the rerender is called because it is closed by the loader during loading, but a memoized component is used. Therefore, there is actually no rerender.",t.jsx(h,{id:"TabulatorGridSimple",apiRef:r,columnDefaults:S,columns:C,dataSet:e,height:500,layout:"fitColumns"})]})},j=a.lazy(()=>p(()=>import("./index-BL7bdWBR.js").then(e=>e.ds),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),R=e=>t.jsxs(b,{children:[t.jsx("div",{children:t.jsx(x,{})}),t.jsx(m,{}),t.jsx("div",{children:t.jsx(f,{items:[{key:1,label:"Show source",children:t.jsx(a.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(j,{language:"tsx",style:e.darkMode?D:g,showLineNumbers:!0,children:`
import React, {useCallback, useState} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IGridApi, IGridProps, ITabulatorProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {GenerateDataSet, TabulatorBaseColumnsDef} from '../../data/tabulatorData';
const columns: ITabulatorProps['columns'] = [
    {title: 'Column 1', field: 'col1'},
    {title: 'Column 2', field: 'col2'},
    {title: 'Column 3', field: 'col3'},
];
export const ChangeDataSet = (): React.JSX.Element => {
    const [dataSet, setDataSet] = useState<IGridProps['dataSet']>(undefined);
    const [gridApi] = useState({} as IGridApi);
    const updateDataViaState = useCallback(() => {
        setDataSet(GenerateDataSet(1000, 'state'));
    }, []);
    const updateDataViaApi = useCallback(() => {
        gridApi.setDataSet(GenerateDataSet(1000, 'api'));
    }, [gridApi]);
    const updateDataViaApiAsync = useCallback(() => {
        gridApi.fetchData(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() < 0.1) reject({message: 'Ошибка загрузки данных', code: 400});
                    else resolve({data: GenerateDataSet(1000, 'async')});
                }, 1000);
            });
        });
    }, [gridApi]);
    return (
        <>
            <Button onClick={updateDataViaState}>Update DataSet via setState</Button> - the entire grid is re-rendered
            <br />
            <br />
            <Button onClick={updateDataViaApi}>Update dataSet via Api.setDataSet</Button> - dataSet is updated, but this does not cause the grid to rerender
            <br />
            <br />
            <Button onClick={updateDataViaApiAsync}>Update dataSet asynchronously via Api.fetchData</Button> - the rerender is called because it is closed by the loader
            during loading, but a memoized component is used. Therefore, there is actually no rerender.
            <TabulatorGrid
                id={'TabulatorGridSimple'}
                apiRef={gridApi}
                columnDefaults={TabulatorBaseColumnsDef}
                columns={columns}
                dataSet={dataSet}
                height={500}
                layout={'fitColumns'}
            />
        </>
    );
};
`})})}]})})]});export{R as Page6584d78df6584a888dd9132e1264be16,R as default};
