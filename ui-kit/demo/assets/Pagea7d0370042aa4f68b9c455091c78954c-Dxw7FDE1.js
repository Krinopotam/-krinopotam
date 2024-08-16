import{j as e,D as m}from"./index-jRq8dFl9.js";import{P as u,C as c,h as d,d as f,a as h}from"./docco-DVswO1UK.js";import{T as p}from"./tabulatorGrid-Dp7y1jLu.js";import{b as w,g as D,D as b}from"./tabulatorData-D9ENxapK.js";import"./messageBox-A1wgNO27.js";import"./dForm-CmpnCynY.js";import"./index-h_fYsjXx.js";import"./dFormModal-DuFw94ex.js";import"./modal-Bq0KGAYX.js";import"./EyeOutlined-B_mcHe4i.js";import"./DeleteOutlined-KSC0BHZd.js";const $=a=>{const t=a.getRow().getData();return`<span>${t.surname} ${t.name} ${t.patronymic}</span><br/><small style="color:#808080;">${t.email}</small>`},T=(a,l,t)=>`${t.surname} ${t.name} ${t.patronymic} (${t.email})`.toLowerCase().indexOf(a.toLowerCase())>=0,g=(a,l,t,n)=>{const r=t.getData(),o=n.getData(),s=`${r.surname} ${r.name} ${r.patronymic} (${r.email})`,i=`${o.surname} ${o.name} ${o.patronymic} (${o.email})`;return s===i?0:s>i?1:-1},y=[{title:"ФИО",field:"fio",formatter:$,headerFilterFunc:T,sorter:g},{title:"День рождения",field:"birthday",sorter:b}],x={id:"TabulatorGridTreeCellFormat",columnDefaults:w,columns:y,dataSet:D,dataTree:!0,height:500,layout:"fitColumns"},F=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a hierarchical Tabulator grid with customizable cell display"}),e.jsx("p",{children:"In this example, the cell in the full name column displays data from the fields surname, name, patronymic and email"}),e.jsx("p",{children:"Filter and sort are calculated for each of these fields"}),e.jsx(p,{...x})]}),V=a=>e.jsxs(u,{children:[e.jsx("div",{children:e.jsx(F,{})}),e.jsx(m,{}),e.jsx("div",{children:e.jsx(c,{items:[{key:1,label:"Show source",children:e.jsx(d,{language:"javascript",style:a.darkMode?f:h,showLineNumbers:!0,children:`
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
`})}]})})]});export{V as Pagea7d0370042aa4f68b9c455091c78954c,V as default};
