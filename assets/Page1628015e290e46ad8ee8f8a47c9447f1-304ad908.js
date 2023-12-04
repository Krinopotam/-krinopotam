import{j as e,D as m}from"./index-72bf19bf.js";import{P as u,C as c,S as d,d as f,a as h}from"./docco-47b38a91.js";import{T as p}from"./tabulatorGrid-25519479.js";import{c as w,D}from"./tabulatorData-6623487d.js";import"./index-8ab5ffa3.js";import"./dFormModal-6688ff3d.js";import"./EyeOutlined-365e9e86.js";import"./DeleteOutlined-607d6fba.js";const b=r=>{const t=r.getRow().getData();return`<span>${t.surname} ${t.name} ${t.patronymic}</span><br/><small style="color:#808080;">${t.email}</small>`},$=(r,a,t)=>`${t.surname} ${t.name} ${t.patronymic} (${t.email})`.toLowerCase().indexOf(r.toLowerCase())>=0,F=(r,a,t,i)=>{const o=t.getData(),n=i.getData(),l=`${o.surname} ${o.name} ${o.patronymic} (${o.email})`,s=`${n.surname} ${n.name} ${n.patronymic} (${n.email})`;return l===s?0:l>s?1:-1},g={resizable:"header",headerFilter:!0,headerFilterFunc:"like"},y=[{title:"ФИО",field:"fio",formatter:b,headerFilterFunc:$,sorter:F,headerFilter:void 0},{title:"День рождения",field:"birthday",sorter:D,headerFilter:void 0}],v=()=>{const r={id:"TabulatorGridCellFormat",columnDefaults:g,columns:y,dataSet:w,height:500};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример грида Tabulator с настраиваемым отображением ячеек"}),e.jsx("p",{children:"В данном примере в ячейке столбца ФИО отображаются данные из полей surname, name, patronymic и email"}),e.jsx("p",{children:"Фильтр и сортировка расчитываются по каждому из этих полей"}),e.jsx(p,{...r})]})},A=r=>{const a=`
import React from 'react';
import {ColumnDefinition} from 'tabulator-tables';
import {TabulatorGrid, ITabulatorProps, IGridProps} from @krinopotam/ui-kit/tabulatorGrid";
import {DateTimeSorter} from @krinopotam/ui-kit/tabulatorBase/sorters/dateTime";
import {TabulatorNamesPlainData} from "../../data/tabulatorData";
const fioFormatter: ColumnDefinition['formatter'] = (cell) => {
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
const columnDefaults: ITabulatorProps['columnDefaults'] = {
    resizable: 'header',
    headerFilter: true,
    headerFilterFunc: 'like'
};
const columns: ITabulatorProps['columns'] = [
    {
        title: 'ФИО',
        field: 'fio',
        formatter: fioFormatter,
        headerFilterFunc: fioFilter,
        sorter: fioSorter,
        headerFilter: undefined
    },
    {
        title: 'День рождения',
        field: 'birthday',
        sorter: DateTimeSorter,
        //sorterParams:{format:'DD.MM.YYYY'} - you can set custom format. Default DD.MM.YYYY
        headerFilter: undefined
    },
];
export const CellFormat = (): React.JSX.Element => {
    const props: IGridProps = {
        id: 'TabulatorGridCellFormat',
        columnDefaults: columnDefaults,
        columns: columns,
        dataSet: TabulatorNamesPlainData,
        height: 500,
    }
    return (
        <>
            <TabulatorGrid {...props}/>
        </>
    );
};
`;return e.jsxs(u,{children:[e.jsx("div",{children:e.jsx(v,{})}),e.jsx(m,{}),e.jsx("div",{children:e.jsx(c,{items:[{key:1,label:"Show source",children:e.jsx(d,{language:"javascript",style:r.darkMode?f:h,showLineNumbers:!0,children:a})}]})})]})};export{A as Page1628015e290e46ad8ee8f8a47c9447f1,A as default};
