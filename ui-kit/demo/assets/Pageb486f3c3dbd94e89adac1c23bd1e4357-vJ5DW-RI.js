import{j as e,D as m}from"./index-jRq8dFl9.js";import{P as u,C as c,h as d,d as f,a as h}from"./docco-DVswO1UK.js";import{T as p}from"./tabulatorGrid-Dp7y1jLu.js";import{c as w,D as b}from"./tabulatorData-D9ENxapK.js";import"./messageBox-A1wgNO27.js";import"./dForm-CmpnCynY.js";import"./index-h_fYsjXx.js";import"./dFormModal-DuFw94ex.js";import"./modal-Bq0KGAYX.js";import"./EyeOutlined-B_mcHe4i.js";import"./DeleteOutlined-KSC0BHZd.js";const D=t=>{const r=t.getRow().getData();return`<span>${r.surname} ${r.name} ${r.patronymic}</span><br/><small style="color:#808080;">${r.email}</small>`},$=(t,l,r)=>`${r.surname} ${r.name} ${r.patronymic} (${r.email})`.toLowerCase().indexOf(t.toLowerCase())>=0,F=(t,l,r,n)=>{const a=r.getData(),o=n.getData(),i=`${a.surname} ${a.name} ${a.patronymic} (${a.email})`,s=`${o.surname} ${o.name} ${o.patronymic} (${o.email})`;return i===s?0:i>s?1:-1},g={resizable:"header",headerFilter:!0,headerFilterFunc:"like"},y=[{title:"ФИО",field:"fio",formatter:D,headerFilterFunc:$,sorter:F,headerFilter:void 0},{title:"День рождения",field:"birthday",sorter:b,headerFilter:void 0}],T=()=>{const t={id:"TabulatorGridCellFormat",columnDefaults:g,columns:y,dataSet:w,height:500};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример грида Tabulator с настраиваемым отображением ячеек"}),e.jsx("p",{children:"В данном примере в ячейке столбца ФИО отображаются данные из полей surname, name, patronymic и email"}),e.jsx("p",{children:"Фильтр и сортировка расчитываются по каждому из этих полей"}),e.jsx(p,{...t})]})},G=t=>e.jsxs(u,{children:[e.jsx("div",{children:e.jsx(T,{})}),e.jsx(m,{}),e.jsx("div",{children:e.jsx(c,{items:[{key:1,label:"Show source",children:e.jsx(d,{language:"javascript",style:t.darkMode?f:h,showLineNumbers:!0,children:`
import React from 'react';
import {TabulatorGrid, ITabulatorProps, IGridProps} from @krinopotam/ui-kit/tabulatorGrid";
import {DateTimeSorter} from @krinopotam/ui-kit/tabulatorBase/sorters/dateTime";
import {TabulatorNamesPlainData} from "../../data/tabulatorData";
import {ITabulatorColumn} from @krinopotam/ui-kit/tabulatorBase";
const fioFormatter: ITabulatorColumn['formatter'] = (cell) => {
    //cell - the cell component
    //formatterParams - parameters set for the column
    //onRendered - function to call when the formatter has been rendered
    const row = cell.getRow();
    const rowData = row.getData();
    return \`<span>\${rowData['surname']} \${rowData['name']} \${rowData['patronymic']}</span><br/><small style="color:#808080;">\${rowData['email']}</small>\`; //return the contents of the cell;
};
const fioFilter: ITabulatorColumn['headerFilterFunc'] = (headerValue, _rowValue, rowData) => {
    //headerValue - the value of the header filter element
    //rowValue - the value of the column in this row
    //rowData - the data for the row being filtered
    //filterParams - params object passed to the headerFilterFuncParams property
    //must return a boolean, true if it passes the filter.
    const rowString = \`\${rowData['surname']} \${rowData['name']} \${rowData['patronymic']} (\${rowData['email']})\`.toLowerCase();
    return rowString.indexOf(headerValue.toLowerCase()) >= 0;
};
const fioSorter: ITabulatorColumn['sorter'] = (_a, _b, aRow, bRow): number => {
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
`})}]})})]});export{G as Pageb486f3c3dbd94e89adac1c23bd1e4357,G as default};
