const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-UHTfNfHP.js","assets/default-highlight-BW2eIfdj.js","assets/index-fLDE7RV8.js"])))=>i.map(i=>d[i]);
import{j as t,r as e,_ as a,D as o}from"./index-fLDE7RV8.js";import{T as i}from"./tabulatorGrid-BJwlOlPS.js";import{b as l,a as s,e as m,D as n}from"./tabulatorData-DJNiiClm.js";import"./dForm-DcZj9aOC.js";import{P as u,C as d,d as f,c}from"./darcula-BAaai0cd.js";import"./mergeButtons-5jDhs16v.js";import"./modal-CJqMGIFI.js";import"./dFormModal-BONKQnKH.js";import"./modal-DKiW44iu.js";import"./defaultButtonsProps-BRD3xjmK.js";import"./index-Dm8OxE-t.js";import"./index-CTvaTwjg.js";const p=[{title:"Name",field:"name",headerFilter:!0,frozen:!0},{title:"Age",field:"age",hozAlign:"left",formatter:"progress"},{title:"Favourite Color",field:"col"},{title:"Date Of Birth",field:"dob",hozAlign:"center",formatter:m,formatterParams:{inputFormat:"DD/MM/YYYY",outputFormat:"DD.MM.YYYY"},sorter:n,sorterParams:{format:"DD/MM/YYYY"}},{title:"Rating",field:"rating",hozAlign:"center",formatter:"star",headerFilterFunc:"=",frozen:!0},{title:"Passed?",field:"passed",hozAlign:"center",formatter:"tickCross",headerFilterFunc:"=",frozen:!0}],h={id:"TabulatorGridSimple",columnDefaults:l,columns:p,dataSet:s,height:500},D=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a the TabulatorGrid with frozen columns"}),t.jsx(i,{...h})]}),g=e.lazy(()=>a(()=>import("./index-UHTfNfHP.js").then(r=>r.ds),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),G=r=>t.jsxs(u,{children:[t.jsx("div",{children:t.jsx(D,{})}),t.jsx(o,{}),t.jsx("div",{children:t.jsx(d,{items:[{key:1,label:"Show source",children:t.jsx(e.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(g,{language:"tsx",style:r.darkMode?f:c,showLineNumbers:!0,children:`
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
`})})}]})})]});export{G as Pagee3787914ada94f3684f47eaf8c78dfb3,G as default};
