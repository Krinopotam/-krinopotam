import{j as e,D as m}from"./index-CRRPgvdi.js";import{P as c,C as u,h as d,d as f,a as h}from"./docco-COLmzWzy.js";import{T as p}from"./tabulatorGrid-qvzlLlhb.js";import{c as w,D}from"./tabulatorData-_Zp1siT3.js";import"./index-CR3eF2D1.js";import"./dFormModal-Df9g-P_m.js";import"./EyeOutlined-DQsML7KC.js";import"./DeleteOutlined-CzvauNsJ.js";const b=t=>{const r=t.getRow().getData();return`<span>${r.surname} ${r.name} ${r.patronymic}</span><br/><small style="color:#808080;">${r.email}</small>`},$=(t,n,r)=>`${r.surname} ${r.name} ${r.patronymic} (${r.email})`.toLowerCase().indexOf(t.toLowerCase())>=0,F=(t,n,r,i)=>{const a=r.getData(),o=i.getData(),l=`${a.surname} ${a.name} ${a.patronymic} (${a.email})`,s=`${o.surname} ${o.name} ${o.patronymic} (${o.email})`;return l===s?0:l>s?1:-1},g={resizable:"header",headerFilter:!0,headerFilterFunc:"like"},y=[{title:"ФИО",field:"fio",formatter:b,headerFilterFunc:$,sorter:F,headerFilter:void 0},{title:"День рождения",field:"birthday",sorter:D,headerFilter:void 0}],v=()=>{const t={id:"TabulatorGridCellFormat",columnDefaults:g,columns:y,dataSet:w,height:500};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример грида Tabulator с настраиваемым отображением ячеек"}),e.jsx("p",{children:"В данном примере в ячейке столбца ФИО отображаются данные из полей surname, name, patronymic и email"}),e.jsx("p",{children:"Фильтр и сортировка расчитываются по каждому из этих полей"}),e.jsx(p,{...t})]})},A=t=>e.jsxs(c,{children:[e.jsx("div",{children:e.jsx(v,{})}),e.jsx(m,{}),e.jsx("div",{children:e.jsx(u,{items:[{key:1,label:"Show source",children:e.jsx(d,{language:"javascript",style:t.darkMode?f:h,showLineNumbers:!0,children:`
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
`})}]})})]});export{A as Pageb16318ccf417462da74c82c0d825fd9f,A as default};
