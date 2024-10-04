const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-0uqxO8u4.js","assets/default-highlight-AspSjZVb.js","assets/index-BvGUw9C6.js"])))=>i.map(i=>d[i]);
import{j as t,r as e,_ as a,D as o}from"./index-BvGUw9C6.js";import{T as i}from"./tabulatorGrid-YoC4snix.js";import{T as l,b as s,e as n,D as m}from"./tabulatorData-7wwdtTXj.js";import"./dForm-CuoIYVbt.js";import{P as u,C as d,d as f,c}from"./darcula-ztsHFdQx.js";import"./modal-DNjBPuEU.js";import"./dFormModal-DG3y0daw.js";import"./modal-CFEDQlJ_.js";import"./defaultButtonsProps-CC5Jyskk.js";import"./index-D8Aqgh10.js";import"./index-Bb6r_g7-.js";const p=[{title:"Name",field:"name",headerFilter:!0,frozen:!0},{title:"Age",field:"age",hozAlign:"left",formatter:"progress"},{title:"Favourite Color",field:"col"},{title:"Date Of Birth",field:"dob",hozAlign:"center",formatter:n,formatterParams:{inputFormat:"DD/MM/YYYY",outputFormat:"DD.MM.YYYY"},sorter:m,sorterParams:{format:"DD/MM/YYYY"}},{title:"Rating",field:"rating",hozAlign:"center",formatter:"star",headerFilterFunc:"=",frozen:!0},{title:"Passed?",field:"passed",hozAlign:"center",formatter:"tickCross",headerFilterFunc:"=",frozen:!0}],h={id:"TabulatorGridSimple",columnDefaults:l,columns:p,dataSet:s,height:500},D=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a the TabulatorGrid with frozen columns"}),t.jsx(i,{...h})]}),g=e.lazy(()=>a(()=>import("./index-0uqxO8u4.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),k=r=>t.jsxs(u,{children:[t.jsx("div",{children:t.jsx(D,{})}),t.jsx(o,{}),t.jsx("div",{children:t.jsx(d,{items:[{key:1,label:"Show source",children:t.jsx(e.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(g,{language:"tsx",style:r.darkMode?f:c,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, ITabulatorProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
import {DateTimeFormatter, DateTimeSorter} from @krinopotam/ui-kit/tabulatorBase";
const columns: ITabulatorProps['columns'] = [
    {title: 'Name', field: 'name', headerFilter: true, frozen:true},
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
    {title: 'Rating', field: 'rating', hozAlign: 'center', formatter: 'star', headerFilterFunc: '=', frozen:true},
    {title: 'Passed?', field: 'passed', hozAlign: 'center', formatter: 'tickCross', headerFilterFunc: '=', frozen:true},
];
const props: IGridProps = {
    id: 'TabulatorGridSimple',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: columns,
    dataSet: TabulatorPlainData,
    height: 500,
};
export const FixedColumns = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`})})}]})})]});export{k as Page5b9bdffe8c0e4f858e1cb9cf70537df8,k as default};
