import{j as o,D as C}from"./index-DhMwsQtd.js";import{P as V,C as B,h as L,d as w,a as G}from"./docco-BR1GjPZn.js";import{T as O}from"./tabulatorGrid-CVRHT1bL.js";import{b as P,a as z,e as I,D as $}from"./tabulatorData-rIJmlee8.js";import{d as T}from"./dForm-BvND7aMS.js";import"./messageBox-CQECnf8I.js";import"./dFormModal-B9s_VGMc.js";import"./modal-eXRNn5Q9.js";import"./EyeOutlined-D8voB2bB.js";import"./index-DNVFzPvX.js";import"./DeleteOutlined-BqcAHwXU.js";const A=(n,m,Y,c,r)=>{const t=document.createElement("input"),a=document.createElement("input"),p=n.getColumn();p.getDefinition().headerFilterLiveFilter=!1;let u=n.getValue();const l=u.split(" - "),s=l[0]??"",d=l[1]??"",F=e=>{const f=t.value,x=a.value,H=e?f:x,v=e?s:d;if(v&&H===v){c(void 0);return}const D=f+" - "+x;Y(D)&&(console.log(D),u=D)},g=(e,f)=>{e.relatedTarget&&F(f)},M=e=>{g(e,!0)},k=e=>{g(e,!1)},h=(e,f)=>{switch(e.keyCode){case 13:F(f);break;case 27:c(void 0);break;case 35:case 36:e.stopPropagation();break}},S=e=>{h(e,!0)},E=e=>{h(e,!1)},i=document.createElement("div");i.style.display="flex",i.style.flexDirection="row",i.addEventListener("keyup",e=>{e.stopPropagation()}),i.addEventListener("search",e=>{e.stopPropagation()});const b=(r==null?void 0:r.filterType)==="datetime"?"datetime-local":"date",y=(r==null?void 0:r.filterType)==="datetime"&&(r!=null&&r.showSeconds)?"1":"";t.value=s,t.type=b,t.step=y,t.style.flex="1",t.style.padding="4px",t.style.marginLeft="6px",t.style.marginRight="6px",t.style.boxSizing="border-box",t.addEventListener("blur",M),t.addEventListener("keydown",S),a.value=d,a.type=b,a.step=y,a.style.flex="1",a.style.padding="4px",a.style.marginLeft="6px",a.style.boxSizing="border-box",a.addEventListener("blur",k),a.addEventListener("keydown",E);const R=document.createTextNode("с"),j=document.createTextNode("по");return i.appendChild(R),i.appendChild(t),i.appendChild(j),i.appendChild(a),m(function(){n.getType()==="cell"&&(t.focus({preventScroll:!0}),t.select())}),i},K=(n,m,Y,c)=>{if(!n)return!0;if(!m)return!!c.keepEmpty;const r=n.split(" - "),t=r[0],a=r[1],p=T(t),u=T(a);if(!p.isValid()&&!u.isValid())return!0;let l=c.valuesFormat;l||(m.length===10?l="DD.MM.YYYY":m.length===16?l="DD.MM.YYYY HH:mm":l="DD.MM.YYYY HH:mm:ss");const s=T(m,l);if(!s.isValid())return!!c.keepEmpty;let d;return p.isValid()&&(d=s.isAfter(p)||s.isSame(p)),u.isValid()&&d!==!1&&(d=s.isBefore(u)||s.isSame(u)),!!d},N=[{title:"Date Of Birth",field:"dob",hozAlign:"center",headerFilter:A,headerFilterFunc:K,headerFilterFuncParams:{filterType:"date",valuesFormat:"DD/MM/YYYY"},formatter:I,formatterParams:{inputFormat:"DD/MM/YYYY",outputFormat:"DD.MM.YYYY"},sorter:$,sorterParams:{format:"DD/MM/YYYY"}}],J={id:"TabulatorGridSimple",columnDefaults:P,columns:N,dataSet:z,height:500},X=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"The Tabulator DataRangeHeaderFilter example"}),o.jsx(O,{...J})]}),ie=n=>o.jsxs(V,{children:[o.jsx("div",{children:o.jsx(X,{})}),o.jsx(C,{}),o.jsx("div",{children:o.jsx(B,{items:[{key:1,label:"Show source",children:o.jsx(L,{language:"javascript",style:n.darkMode?w:G,showLineNumbers:!0,children:`
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
`})}]})})]});export{ie as Page52b1eb477f6440f5a52a45270bf4661a,ie as default};
