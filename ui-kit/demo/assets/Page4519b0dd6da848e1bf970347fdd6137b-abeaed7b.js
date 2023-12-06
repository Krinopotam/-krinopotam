import{r as e,j as t,D as p}from"./index-0409158c.js";import{P as m,C as S,S as D,d as b,a as f}from"./docco-fa9c9fcc.js";import{B as o}from"./index-da9b0dd9.js";import{T as h}from"./tabulatorGrid-22da0f8d.js";import{G as s}from"./tabulatorData-fbb7c043.js";import"./dFormModal-235aed86.js";import"./EyeOutlined-c44a8289.js";import"./DeleteOutlined-75656d28.js";const C={resizable:"header",headerFilter:!0,headerFilterFunc:"like"},x=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],j=()=>{const[i,r]=e.useState(void 0),[a]=e.useState({}),l=e.useCallback(()=>{r(s(1e3,"state"))},[]),n=e.useCallback(()=>{a.setDataSet(s(1e3,"api"))},[a]),u=e.useCallback(()=>{a.fetchData(()=>new Promise((d,c)=>{setTimeout(()=>{Math.random()<.5?c({message:"Ошибка загрузки данных",code:400}):d({data:s(1e3,"async")})},1e3)}))},[a]);return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Пример обновбения dataSet грида Tabulator"}),t.jsx(o,{onClick:l,children:"Обновить DataSet через state"})," - грид целиком перерендеривается",t.jsx("br",{}),t.jsx("br",{}),t.jsx(o,{onClick:n,children:"Обновить dataSet через Api.setDataSet"})," - dataSet обновляется, но это не вызывает ререндер грида",t.jsx("br",{}),t.jsx("br",{}),t.jsx(o,{onClick:u,children:"Обновить dataSet асинхронно через Api.fetchData"})," - ререндер вызывается, так как закрывается лоадером на время загрузки, но используется мемоизированный компонет. Поэтому фактически ререндера нет.",t.jsx(h,{id:"TabulatorGridSimple",apiRef:a,columnDefaults:C,columns:x,dataSet:i,height:500,layout:"fitColumns"})]})},V=i=>{const r=`
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
`;return t.jsxs(m,{children:[t.jsx("div",{children:t.jsx(j,{})}),t.jsx(p,{}),t.jsx("div",{children:t.jsx(S,{items:[{key:1,label:"Show source",children:t.jsx(D,{language:"javascript",style:i.darkMode?b:f,showLineNumbers:!0,children:r})}]})})]})};export{V as Page4519b0dd6da848e1bf970347fdd6137b,V as default};
