import{j as o,D as C}from"./index-CRRPgvdi.js";import{P as V,C as B,h as L,d as w,a as G}from"./docco-COLmzWzy.js";import{T as O}from"./tabulatorGrid-qvzlLlhb.js";import{b as P,a as z,e as I,D as $}from"./tabulatorData-_Zp1siT3.js";import{q as T}from"./index-CR3eF2D1.js";import"./dFormModal-Df9g-P_m.js";import"./EyeOutlined-DQsML7KC.js";import"./DeleteOutlined-CzvauNsJ.js";const A=(n,u,Y,d,r)=>{const t=document.createElement("input"),a=document.createElement("input"),p=n.getColumn();p.getDefinition().headerFilterLiveFilter=!1;let m=n.getValue();const l=m.split(" - "),s=l[0]??"",c=l[1]??"",F=e=>{const f=t.value,x=a.value,H=e?f:x,v=e?s:c;if(v&&H===v){d(void 0);return}const D=f+" - "+x;Y(D)&&(console.log(D),m=D)},g=(e,f)=>{e.relatedTarget&&F(f)},M=e=>{g(e,!0)},k=e=>{g(e,!1)},b=(e,f)=>{switch(e.keyCode){case 13:F(f);break;case 27:d(void 0);break;case 35:case 36:e.stopPropagation();break}},S=e=>{b(e,!0)},E=e=>{b(e,!1)},i=document.createElement("div");i.style.display="flex",i.style.flexDirection="row",i.addEventListener("keyup",e=>{e.stopPropagation()}),i.addEventListener("search",e=>{e.stopPropagation()});const h=(r==null?void 0:r.filterType)==="datetime"?"datetime-local":"date",y=(r==null?void 0:r.filterType)==="datetime"&&(r!=null&&r.showSeconds)?"1":"";t.value=s,t.type=h,t.step=y,t.style.flex="1",t.style.padding="4px",t.style.marginLeft="6px",t.style.marginRight="6px",t.style.boxSizing="border-box",t.addEventListener("blur",M),t.addEventListener("keydown",S),a.value=c,a.type=h,a.step=y,a.style.flex="1",a.style.padding="4px",a.style.marginLeft="6px",a.style.boxSizing="border-box",a.addEventListener("blur",k),a.addEventListener("keydown",E);const R=document.createTextNode("с"),j=document.createTextNode("по");return i.appendChild(R),i.appendChild(t),i.appendChild(j),i.appendChild(a),u(function(){n.getType()==="cell"&&(t.focus({preventScroll:!0}),t.select())}),i},K=(n,u,Y,d)=>{if(!n)return!0;if(!u)return!!d.keepEmpty;const r=n.split(" - "),t=r[0],a=r[1],p=T(t),m=T(a);if(!p.isValid()&&!m.isValid())return!0;let l=d.valuesFormat;l||(u.length===10?l="DD.MM.YYYY":u.length===16?l="DD.MM.YYYY HH:mm":l="DD.MM.YYYY HH:mm:ss");const s=T(u,l);if(!s.isValid())return!!d.keepEmpty;let c;return p.isValid()&&(c=s.isAfter(p)||s.isSame(p)),m.isValid()&&c!==!1&&(c=s.isBefore(m)||s.isSame(m)),!!c},N=[{title:"Date Of Birth",field:"dob",hozAlign:"center",headerFilter:A,headerFilterFunc:K,headerFilterFuncParams:{filterType:"date",valuesFormat:"DD/MM/YYYY"},formatter:I,formatterParams:{inputFormat:"DD/MM/YYYY",outputFormat:"DD.MM.YYYY"},sorter:$,sorterParams:{format:"DD/MM/YYYY"}}],q={id:"TabulatorGridSimple",columnDefaults:P,columns:N,dataSet:z,height:500},J=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"The Tabulator DataRangeHeaderFilter example"}),o.jsx(O,{...q})]}),ae=n=>o.jsxs(V,{children:[o.jsx("div",{children:o.jsx(J,{})}),o.jsx(C,{}),o.jsx("div",{children:o.jsx(B,{items:[{key:1,label:"Show source",children:o.jsx(L,{language:"javascript",style:n.darkMode?w:G,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, ITabulatorProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import { TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
import {DateTimeFormatter, DateTimeRangeHeaderFilterFunc, DateTimeSorter} from @krinopotam/ui-kit/tabulatorBase";
import {DateTimeRangeHeaderFilter} from @krinopotam/ui-kit/tabulatorBase/filters/dateTimeRangeHeaderFilter";
const columns :ITabulatorProps['columns'] = [
    {
        title: 'Date Of Birth',
        field: 'dob',
        hozAlign: 'center',
        headerFilter:DateTimeRangeHeaderFilter,
        headerFilterFunc: DateTimeRangeHeaderFilterFunc,
        headerFilterFuncParams: {filterType: 'date', valuesFormat:'DD/MM/YYYY'},
        formatter: DateTimeFormatter,
        formatterParams: {inputFormat: 'DD/MM/YYYY', outputFormat: 'DD.MM.YYYY'},
        sorter: DateTimeSorter,
        sorterParams: {format: 'DD/MM/YYYY'},
    },
];
const props: IGridProps = {
    id: 'TabulatorGridSimple',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: columns,
    dataSet: TabulatorPlainData,
    height: 500,
};
export const DateTimeRangeHeaderFilterExample = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`})}]})})]});export{ae as Pageb43ae5b9e9354bbca4ab0caee8b422fa,ae as default};
