import{r as a,j as t,D as p}from"./index-3024f328.js";import{P as m,C as h,S,d as b,a as f}from"./docco-8e796366.js";import{B as o}from"./index-901967cb.js";import{T as D}from"./tabulatorGrid-a1a2b210.js";import{G as s,b as g}from"./tabulatorData-f1a03775.js";import"./dFormModal-09fd0649.js";import"./EyeOutlined-ff2ae648.js";import"./DeleteOutlined-73630e69.js";const C=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],x=()=>{const[r,i]=a.useState(void 0),[e]=a.useState({}),d=a.useCallback(()=>{i(s(1e3,"state"))},[]),n=a.useCallback(()=>{e.setDataSet(s(1e3,"api"))},[e]),l=a.useCallback(()=>{e.fetchData(()=>new Promise((u,c)=>{setTimeout(()=>{Math.random()<.1?c({message:"Ошибка загрузки данных",code:400}):u({data:s(1e3,"async")})},1e3)}))},[e]);return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of updating the dataSet of the Tabulator grid"}),t.jsx(o,{onClick:d,children:"Update DataSet via setState"})," - the entire grid is re-rendered",t.jsx("br",{}),t.jsx("br",{}),t.jsx(o,{onClick:n,children:"Update dataSet via Api.setDataSet"})," - dataSet is updated, but this does not cause the grid to rerender",t.jsx("br",{}),t.jsx("br",{}),t.jsx(o,{onClick:l,children:"Update dataSet asynchronously via Api.fetchData"})," - the rerender is called because it is closed by the loader during loading, but a memoized component is used. Therefore, there is actually no rerender.",t.jsx(D,{id:"TabulatorGridSimple",apiRef:e,columnDefaults:g,columns:C,dataSet:r,height:500,layout:"fitColumns"})]})},P=r=>{const i=`
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
`;return t.jsxs(m,{children:[t.jsx("div",{children:t.jsx(x,{})}),t.jsx(p,{}),t.jsx("div",{children:t.jsx(h,{items:[{key:1,label:"Show source",children:t.jsx(S,{language:"javascript",style:r.darkMode?b:f,showLineNumbers:!0,children:i})}]})})]})};export{P as Page76f6298cf5df4b9f8fe384b18ad28d6a,P as default};
