import{r as a,j as t,D as p}from"./index-CEW5Pw51.js";import{P as m,C as h,h as b,d as S,a as D}from"./docco-BDmKSriJ.js";import{B as i}from"./index-XDwG7I6Z.js";import{T as f}from"./tabulatorGrid-D_Dw4JJ8.js";import{G as o,b as g}from"./tabulatorData-CS8n7XKW.js";import"./dFormModal-CQxmvlme.js";import"./EyeOutlined-CTrlI0WT.js";import"./DeleteOutlined-DC7B5UxI.js";const C=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],x=()=>{const[r,s]=a.useState(void 0),[e]=a.useState({}),d=a.useCallback(()=>{s(o(1e3,"state"))},[]),l=a.useCallback(()=>{e.setDataSet(o(1e3,"api"))},[e]),n=a.useCallback(()=>{e.fetchData(()=>new Promise((u,c)=>{setTimeout(()=>{Math.random()<.1?c({message:"Ошибка загрузки данных",code:400}):u({data:o(1e3,"async")})},1e3)}))},[e]);return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of updating the dataSet of the Tabulator grid"}),t.jsx(i,{onClick:d,children:"Update DataSet via setState"})," - the entire grid is re-rendered",t.jsx("br",{}),t.jsx("br",{}),t.jsx(i,{onClick:l,children:"Update dataSet via Api.setDataSet"})," - dataSet is updated, but this does not cause the grid to rerender",t.jsx("br",{}),t.jsx("br",{}),t.jsx(i,{onClick:n,children:"Update dataSet asynchronously via Api.fetchData"})," - the rerender is called because it is closed by the loader during loading, but a memoized component is used. Therefore, there is actually no rerender.",t.jsx(f,{id:"TabulatorGridSimple",apiRef:e,columnDefaults:g,columns:C,dataSet:r,height:500,layout:"fitColumns"})]})},P=r=>t.jsxs(m,{children:[t.jsx("div",{children:t.jsx(x,{})}),t.jsx(p,{}),t.jsx("div",{children:t.jsx(h,{items:[{key:1,label:"Show source",children:t.jsx(b,{language:"javascript",style:r.darkMode?S:D,showLineNumbers:!0,children:`
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
`})}]})})]});export{P as Page67c5a3ea4e4143229e653d2b2b05d01b,P as default};
