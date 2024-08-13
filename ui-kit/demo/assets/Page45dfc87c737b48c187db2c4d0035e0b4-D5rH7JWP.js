import{j as t,D as e}from"./index-zp8t8nBI.js";import{P as a,C as o,h as i,d as l,a as s}from"./docco-qM7CaTt5.js";import{T as m}from"./tabulatorGrid-LGmx6kUr.js";import{b as n,a as u,e as d,D as c}from"./tabulatorData-BJ5jlgxT.js";import"./dForm-CtyM7E66.js";import"./dFormModal-DQXWVkWJ.js";import"./EyeOutlined-B9jVFvSG.js";import"./DeleteOutlined-oAPYnq6c.js";const f=[{title:"Name",field:"name",headerFilter:!0,frozen:!0},{title:"Age",field:"age",hozAlign:"left",formatter:"progress"},{title:"Favourite Color",field:"col"},{title:"Date Of Birth",field:"dob",hozAlign:"center",formatter:d,formatterParams:{inputFormat:"DD/MM/YYYY",outputFormat:"DD.MM.YYYY"},sorter:c,sorterParams:{format:"DD/MM/YYYY"}},{title:"Rating",field:"rating",hozAlign:"center",formatter:"star",headerFilterFunc:"=",frozen:!0},{title:"Passed?",field:"passed",hozAlign:"center",formatter:"tickCross",headerFilterFunc:"=",frozen:!0}],p={id:"TabulatorGridSimple",columnDefaults:n,columns:f,dataSet:u,height:500},h=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a the TabulatorGrid with frozen columns"}),t.jsx(m,{...p})]}),j=r=>t.jsxs(a,{children:[t.jsx("div",{children:t.jsx(h,{})}),t.jsx(e,{}),t.jsx("div",{children:t.jsx(o,{items:[{key:1,label:"Show source",children:t.jsx(i,{language:"javascript",style:r.darkMode?l:s,showLineNumbers:!0,children:`
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
`})}]})})]});export{j as Page45dfc87c737b48c187db2c4d0035e0b4,j as default};
