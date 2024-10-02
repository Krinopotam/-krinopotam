const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C2SUEjL0.js","assets/default-highlight-BDFjN1OP.js","assets/index-CgBeyb-e.js"])))=>i.map(i=>d[i]);
import{j as e,r as m,_ as u,D as c}from"./index-CgBeyb-e.js";import{T as d}from"./tabulatorGrid-DAyVcvcb.js";import{T as f,g as h,D as p}from"./tabulatorData-CNf7XRJ4.js";import{P as w,C as D,d as b,c as $}from"./darcula-Bm4NDPn1.js";import"./modal-hi51mlNB.js";import"./dForm-B-6Y2TlM.js";import"./index-Birbnh4n.js";import"./dFormModal-B-TtMmSz.js";import"./modal-D01YMXTL.js";import"./defaultButtonsProps-BjCvvsD6.js";import"./index-blBfG32B.js";const T=a=>{const t=a.getRow().getData();return`<span>${t.surname} ${t.name} ${t.patronymic}</span><br/><small style="color:#808080;">${t.email}</small>`},g=(a,n,t)=>`${t.surname} ${t.name} ${t.patronymic} (${t.email})`.toLowerCase().indexOf(a.toLowerCase())>=0,y=(a,n,t,s)=>{const r=t.getData(),o=s.getData(),l=`${r.surname} ${r.name} ${r.patronymic} (${r.email})`,i=`${o.surname} ${o.name} ${o.patronymic} (${o.email})`;return l===i?0:l>i?1:-1},x=[{title:"ФИО",field:"fio",formatter:T,headerFilterFunc:g,sorter:y},{title:"День рождения",field:"birthday",sorter:p}],F={id:"TabulatorGridTreeCellFormat",columnDefaults:f,columns:x,dataSet:h,dataTree:!0,height:500,layout:"fitColumns"},v=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a hierarchical Tabulator grid with customizable cell display"}),e.jsx("p",{children:"In this example, the cell in the full name column displays data from the fields surname, name, patronymic and email"}),e.jsx("p",{children:"Filter and sort are calculated for each of these fields"}),e.jsx(d,{...F})]}),C=m.lazy(()=>u(()=>import("./index-C2SUEjL0.js").then(a=>a.ds),__vite__mapDeps([0,1,2])).then(a=>({default:a.Prism}))),E=a=>e.jsxs(w,{children:[e.jsx("div",{children:e.jsx(v,{})}),e.jsx(c,{}),e.jsx("div",{children:e.jsx(D,{items:[{key:1,label:"Show source",children:e.jsx(m.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(C,{language:"tsx",style:a.darkMode?b:$,showLineNumbers:!0,children:`
import React from 'react';
import {ColumnDefinition} from 'tabulator-tables';
import {IGridProps, ITabulatorProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {DateTimeSorter} from @krinopotam/ui-kit/tabulatorBase/sorters/dateTime';
import {TabulatorBaseColumnsDef, TabulatorNamesTreeData} from '../../data/tabulatorData';
const fioFormatter: ColumnDefinition['formatter'] = cell => {
    //cell - the cell component
    //formatterParams - parameters set for the column
    //onRendered - function to call when the formatter has been rendered
    const row = cell.getRow();
    const rowData = row.getData();
    return \`<span>\${rowData['surname']} \${rowData['name']} \${rowData['patronymic']}</span><br/><small style="color:#808080;">\${rowData['email']}</small>\`; //return the contents of the cell;
};
const fioFilter: ColumnDefinition['headerFilterFunc'] = (headerValue, _rowValue, rowData) => {
    //headerValue - the value of the header filter element
    //rowValue - the value of the column in this row
    //rowData - the data for the row being filtered
    //filterParams - params object passed to the headerFilterFuncParams property
    //must return a boolean, true if it passes the filter.
    const rowString = \`\${rowData['surname']} \${rowData['name']} \${rowData['patronymic']} (\${rowData['email']})\`.toLowerCase();
    return rowString.indexOf(headerValue.toLowerCase()) >= 0;
};
const fioSorter: ColumnDefinition['sorter'] = (_a, _b, aRow, bRow): number => {
    //a, b - the two values being compared
    //aRow, bRow - the row components for the values being compared (useful if you need to access additional fields in the row data for the sort)
    //column - the column component for the column being sorted
    //dir - the direction of the sort ("asc" or "desc")
    //sorterParams - sorterParams object from column definition array
    const rowDataA = aRow.getData();
    const rowDataB = bRow.getData();
    const valA = \`\${rowDataA['surname']} \${rowDataA['name']} \${rowDataA['patronymic']} (\${rowDataA['email']})\`;
    const valB = \`\${rowDataB['surname']} \${rowDataB['name']} \${rowDataB['patronymic']} (\${rowDataB['email']})\`;
    if (valA === valB) return 0;
    return valA > valB ? 1 : -1; //you must return the difference between the two values
};
const columns: ITabulatorProps['columns'] = [
    {
        title: 'ФИО',
        field: 'fio',
        formatter: fioFormatter,
        headerFilterFunc: fioFilter,
        sorter: fioSorter,
    },
    {
        title: 'День рождения',
        field: 'birthday',
        sorter: DateTimeSorter,
    },
];
const props: IGridProps = {
    id: 'TabulatorGridTreeCellFormat',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: columns,
    dataSet: TabulatorNamesTreeData,
    dataTree: true,
    height: 500,
    layout: 'fitColumns',
};
export const TreeCellFormat = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`})})}]})})]});export{E as Page7aee7d50a940404f8b34ad3265a65f14,E as default};
