const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{j as e,D as u,r as m,_ as c}from"./index-CtAjfk3U.js";import{T as d}from"./tabulatorGrid-Bes3Jt16.js";import{c as f,D as h}from"./tabulatorData-DSy7h6X7.js";import{P as p,C as w}from"./pageLayout-BYJr8qhp.js";import{d as b,c as D}from"./darcula-BqMdvqtY.js";import"./buttonsRow-DIWV9y5m.js";import"./isArray-Dq3mFmoY.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./dFormModal-DBrO8yV5.js";import"./modal-CqlI0vXJ.js";import"./defaultButtonsProps-BFWSm065.js";import"./PlusOutlined-CjmZvIFI.js";import"./index-C2aIs9ND.js";const $=r=>{const t=r.getRow().getData();return`<span>${t.surname} ${t.name} ${t.patronymic}</span><br/><small style="color:#808080;">${t.email}</small>`},F=(r,l,t)=>`${t.surname} ${t.name} ${t.patronymic} (${t.email})`.toLowerCase().indexOf(r.toLowerCase())>=0,g=(r,l,t,n)=>{const a=t.getData(),o=n.getData(),i=`${a.surname} ${a.name} ${a.patronymic} (${a.email})`,s=`${o.surname} ${o.name} ${o.patronymic} (${o.email})`;return i===s?0:i>s?1:-1},y={resizable:"header",headerFilter:!0,headerFilterFunc:"like"},x=[{title:"ФИО",field:"fio",formatter:$,headerFilterFunc:F,sorter:g,headerFilter:void 0},{title:"День рождения",field:"birthday",sorter:h,headerFilter:void 0}],T=()=>{const r={id:"TabulatorGridCellFormat",columnDefaults:y,columns:x,dataSet:f,height:500};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример грида Tabulator с настраиваемым отображением ячеек"}),e.jsx("p",{children:"В данном примере в ячейке столбца ФИО отображаются данные из полей surname, name, patronymic и email"}),e.jsx("p",{children:"Фильтр и сортировка производятся по каждому из этих полей"}),e.jsx(d,{...r})]})},v=m.lazy(()=>c(()=>import("./index-DY4jbcst.js").then(r=>r.dw),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),E=r=>e.jsxs(p,{children:[e.jsx(T,{}),e.jsx(u,{}),e.jsx("div",{children:e.jsx(w,{items:[{key:1,label:"Show source",children:e.jsx(m.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(v,{language:"tsx",style:r.darkMode?b:D,showLineNumbers:!0,children:`
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
`})})}]})})]});export{E as Page507b652708304b679820c8fc048bfac0,E as default};
