const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DwVYDlRJ.js","assets/default-highlight-B_-WNUR5.js","assets/index-DQhjKTAX.js"])))=>i.map(i=>d[i]);
import{r as a,j as t,_ as p,D as m}from"./index-DQhjKTAX.js";import{B as i}from"./modal-CoK2ultv.js";import{T as h}from"./tabulatorGrid-Dx7eIu4n.js";import{G as o,T as S}from"./tabulatorData-CQpWr8_L.js";import{P as b,C as f,d as D,c as g}from"./darcula-CRC2cY0A.js";import"./dForm-CrwAE8Nv.js";import"./index-BoiGZk6f.js";import"./dFormModal-DVkDXjc5.js";import"./modal-DUXxSXRd.js";import"./defaultButtonsProps-C3Ko1m4X.js";import"./index-DuCGSJa9.js";const C=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],x=()=>{const[e,s]=a.useState(void 0),[r]=a.useState({}),d=a.useCallback(()=>{s(o(1e3,"state"))},[]),n=a.useCallback(()=>{r.setDataSet(o(1e3,"api"))},[r]),l=a.useCallback(()=>{r.fetchData(()=>new Promise((u,c)=>{setTimeout(()=>{Math.random()<.1?c({message:"Ошибка загрузки данных",code:400}):u({data:o(1e3,"async")})},1e3)}))},[r]);return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of updating the dataSet of the Tabulator grid"}),t.jsx(i,{onClick:d,children:"Update DataSet via setState"})," - the entire grid is re-rendered",t.jsx("br",{}),t.jsx("br",{}),t.jsx(i,{onClick:n,children:"Update dataSet via Api.setDataSet"})," - dataSet is updated, but this does not cause the grid to rerender",t.jsx("br",{}),t.jsx("br",{}),t.jsx(i,{onClick:l,children:"Update dataSet asynchronously via Api.fetchData"})," - the rerender is called because it is closed by the loader during loading, but a memoized component is used. Therefore, there is actually no rerender.",t.jsx(h,{id:"TabulatorGridSimple",apiRef:r,columnDefaults:S,columns:C,dataSet:e,height:500,layout:"fitColumns"})]})},j=a.lazy(()=>p(()=>import("./index-DwVYDlRJ.js").then(e=>e.ds),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),E=e=>t.jsxs(b,{children:[t.jsx("div",{children:t.jsx(x,{})}),t.jsx(m,{}),t.jsx("div",{children:t.jsx(f,{items:[{key:1,label:"Show source",children:t.jsx(a.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(j,{language:"tsx",style:e.darkMode?D:g,showLineNumbers:!0,children:`
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
`})})}]})})]});export{E as Pageff02937cb889404d84ba2f86e35cdeb7,E as default};
