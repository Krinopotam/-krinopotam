const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CyxzPzPK.js","assets/default-highlight-BA4pzhEA.js","assets/index-Cpuh8Ebd.js"])))=>i.map(i=>d[i]);
import{j as a,r,_ as t,D as o}from"./index-Cpuh8Ebd.js";import{T as i}from"./tabulatorGrid-Da6sMqw5.js";import{a as s,b as l,T as d}from"./tabulatorData-BJFebvAp.js";import{P as n,C as m,d as u,c as g}from"./darcula-hcLbMwDB.js";import"./buttonsRow-MpDC2SN8.js";import"./dForm-t1Ccos62.js";import"./modal-g5li7x1J.js";import"./index-DNdv76Wr.js";import"./dFormModal-iIvnEeWS.js";import"./modal-DJlUd0AK.js";import"./defaultButtonsProps-D12Yt--i.js";import"./PlusOutlined-BTCZ_JD0.js";import"./index-D9n8SM2Y.js";const p={id:"TabulatorGridSimple",columnDefaults:s,columns:l,dataSet:d,height:500},c=()=>a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Example of a simple TabulatorGrid"}),a.jsx(i,{...p})]}),b=r.lazy(()=>t(()=>import("./index-CyxzPzPK.js").then(e=>e.ds),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),Y=e=>a.jsxs(n,{children:[a.jsx("div",{children:a.jsx(c,{})}),a.jsx(o,{}),a.jsx("div",{children:a.jsx(m,{items:[{key:1,label:"Show source",children:a.jsx(r.Suspense,{fallback:a.jsx("div",{children:"Loading source..."}),children:a.jsx(b,{language:"tsx",style:e.darkMode?u:g,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
/**
 export const TabulatorBaseColumnsDef: ITabulatorProps['columnDefaults'] = {
    resizable: 'header',
    headerFilter: true,
    headerFilterFunc: 'like',
 };
 export const TabulatorBaseColumns: ITabulatorProps['columns'] = [
    {field: 'num', title: '№', formatter: 'rownum', accessor: 'rownum',headerSort: false, vertAlign: 'middle'},
    {title: 'Name', field: 'name', headerFilter: true},
    {title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress'},
    {title: 'Favourite Color', field: 'col'},
    {
         title: 'Date Of Birth',
         field: 'dob',
         hozAlign: 'center',
         formatter: DateTimeFormatter,
         formatterParams: {inputFormat: 'DD/MM/YYYY', outputFormat: 'DD.MM.YYYY'},
         sorter: DateTimeSorter,
         sorterParams: {format: 'DD/MM/YYYY'},
    },
    {title: 'Rating', field: 'rating', hozAlign: 'center', formatter: 'star', headerFilterFunc: '='},
    {title: 'Passed?', field: 'passed', hozAlign: 'center', formatter: 'tickCross', headerFilterFunc: '='},
 ];
 export const TabulatorPlainData: IGridRowData[] = [
     {id: '1', name: 'Oli Bob1', age: '12', col: 'red', dob: '', rating: 1, passed: false},
     {id: '2', name: 'Mary May1', age: '1', col: 'blue', dob: '14/05/1982', rating: 2, passed: false},
     {id: '3', name: 'Christine Kozubowski1', age: '42', col: 'green', dob: '22/05/1982', rating: 5, passed: true},
     {id: '4', name: 'Brendon Philips1', age: '125', col: 'orange', dob: '01/08/1980', rating: 4, passed: true},
     {id: '5', name: 'Margret Marmalade1', age: '16', col: 'yellow', dob: '31/01/1999', rating: 3, passed: true},
     {id: '6', name: 'Oli Bob2', age: '12', col: 'red', dob: '', rating: 5, passed: true},
     {id: '7', name: 'Mary May2', age: '1', col: 'blue', dob: '14/05/1982', rating: 2, passed: false},
     {id: '8', name: 'Christine Kozubowski2', age: '42', col: 'green', dob: '22/05/1982', rating: 3, passed: true},
     {id: '9', name: 'Brendon Philips2', age: '125', col: 'orange', dob: '01/08/1980', rating: 3, passed: true},
     {id: '10', name: 'Margret Marmalade2', age: '16', col: 'yellow', dob: '31/01/1999', rating: 2, passed: false},
     {id: '11', name: 'Oli Bob3', age: '12', col: 'red', dob: '', rating: 1, passed: false},
     {id: '12', name: 'Mary May3', age: '1', col: 'blue', dob: '14/05/1982', rating: 4, passed: true},
     {id: '13', name: 'Christine Kozubowski3', age: '42', col: 'green', dob: '22/05/1982', rating: 1, passed: false},
     {id: '14', name: 'Brendon Philips3', age: '125', col: 'orange', dob: '01/08/1980', rating: 5, passed: true},
     {id: '15', name: 'Margret Marmalade3', age: '16', col: 'yellow', dob: '31/01/1999', rating: 1, passed: false},
     {id: '16', name: 'Oli Bob4', age: '12', col: 'red', dob: '', rating: 5, passed: true},
     {id: '17', name: 'Mary May4', age: '1', col: 'blue', dob: '14/05/1982', rating: 2, passed: false},
     {id: '18', name: 'Christine Kozubowski4', age: '42', col: 'green', dob: '22/05/1982', rating: 3, passed: true},
     {id: '19', name: 'Brendon Philips4', age: '125', col: 'orange', dob: '01/08/1980', rating: 4, passed: true},
     {id: '20', name: 'Margret Marmalade4', age: '16', col: 'yellow', dob: '31/01/1999', rating: 1, passed: false},
 ];
 */
const props: IGridProps = {
    id: 'TabulatorGridSimple',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    dataSet: TabulatorPlainData,
    height: 500,
};
export const Simple = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`})})}]})})]});export{Y as Page17e687107cf9489fac8433f9d2456652,Y as default};
