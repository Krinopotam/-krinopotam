import{r as e,j as t,D as p}from"./index-239f7c99.js";import{P as m,C as S,S as D,d as f,a as h}from"./docco-df193236.js";import{B as o}from"./index-e86df101.js";import{T as b}from"./tabulatorGrid-76a09af9.js";import{G as s}from"./tabulatorData-6512b762.js";import"./dFormModal-2ecf2b9b.js";import"./EyeOutlined-6214a1a0.js";import"./DeleteOutlined-01bac62e.js";const C={resizable:"header",headerFilter:!0,headerFilterFunc:"like"},x=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],j=()=>{const[i,r]=e.useState(void 0),[a]=e.useState({}),l=e.useCallback(()=>{r(s(1e3,"state"))},[]),n=e.useCallback(()=>{a.setDataSet(s(1e3,"api"))},[a]),u=e.useCallback(()=>{a.fetchData(()=>new Promise((c,d)=>{setTimeout(()=>{Math.random()<.5?d({message:"Ошибка загрузки данных",code:400}):c({data:s(1e3,"async")})},1e3)}))},[a]);return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Пример обновбения dataSet грида Tabulator"}),t.jsx(o,{onClick:l,children:"Обновить DataSet через state"})," - грид целиком перерендеривается",t.jsx("br",{}),t.jsx("br",{}),t.jsx(o,{onClick:n,children:"Обновить dataSet через Api.setDataSet"})," - dataSet обновляется, но это не вызывает ререндер грида",t.jsx("br",{}),t.jsx("br",{}),t.jsx(o,{onClick:u,children:"Обновить dataSet асинхронно через Api.fetchData"})," - ререндер вызывается, так как закрывается лоадером на время загрузки, но используется мемоизированный компонет. Поэтому фактически ререндера нет.",t.jsx(b,{id:"TabulatorGridSimple",apiRef:a,columnDefaults:C,columns:x,dataSet:i,height:500,layout:"fitColumns"})]})},V=i=>{const r=`
import React, {useCallback, useState} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IGridApi, IGridProps, ITabulatorProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {GenerateDataSet} from '../../data/tabulatorData';
const columnDefaults: ITabulatorProps['columnDefaults'] = {
    resizable: 'header',
    headerFilter: true,
    headerFilterFunc: 'like',
};
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
                    if (Math.random() < 0.5) reject({message: 'Ошибка загрузки данных', code: 400});
                    else resolve({data: GenerateDataSet(1000, 'async')});
                }, 1000);
            });
        });
    }, [gridApi]);
    return (
        <>
            <Button onClick={updateDataViaState}>Обновить DataSet через state</Button> - грид целиком перерендеривается
            <br />
            <br />
            <Button onClick={updateDataViaApi}>Обновить dataSet через Api.setDataSet</Button> - dataSet обновляется, но это не вызывает ререндер грида
            <br />
            <br />
            <Button onClick={updateDataViaApiAsync}>Обновить dataSet асинхронно через Api.fetchData</Button> - ререндер вызывается, так как закрывается лоадером
            на время загрузки, но используется мемоизированный компонет. Поэтому фактически ререндера нет.
            <TabulatorGrid
                id={'TabulatorGridSimple'}
                apiRef={gridApi}
                columnDefaults={columnDefaults}
                columns={columns}
                dataSet={dataSet}
                height={500}
                layout={'fitColumns'}
            />
        </>
    );
};
`;return t.jsxs(m,{children:[t.jsx("div",{children:t.jsx(j,{})}),t.jsx(p,{}),t.jsx("div",{children:t.jsx(S,{items:[{key:1,label:"Show source",children:t.jsx(D,{language:"javascript",style:i.darkMode?f:h,showLineNumbers:!0,children:r})}]})})]})};export{V as Pageaf3f52bf6e56457e85c8ec4512791822,V as default};