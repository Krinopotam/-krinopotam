const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-9FGXM8eG.js","assets/default-highlight-_K3mzjfK.js","assets/index-CObHp3AH.js"])))=>i.map(i=>d[i]);
import{j as r,r as M,_ as V,D as B}from"./index-CObHp3AH.js";import{T as C}from"./tabulatorGrid-C-CHviK6.js";import{b as w,a as G,e as P,D as _}from"./tabulatorData-B7Pu9KOW.js";import{d as T}from"./dForm-DjwSwKfj.js";import{P as O,C as z,d as I,c as A}from"./darcula-D-n55oql.js";import"./modal-BBQwvlDP.js";import"./DownOutlined-BYejAm0U.js";import"./dFormModal-BBSecmha.js";import"./modal-B2hVzaN7.js";import"./defaultButtonsProps-DSb7WT6w.js";import"./iconUtil-DejahXk-.js";import"./index-BubinFZA.js";import"./CheckOutlined-ka3l-INf.js";import"./index-CVqHkW2e.js";const $=(o,m,Y,d,i)=>{const t=document.createElement("input"),a=document.createElement("input"),p=o.getColumn();p.getDefinition().headerFilterLiveFilter=!1;let u=o.getValue();const l=u.split(" - "),s=l[0]??"",c=l[1]??"",F=e=>{const f=t.value,y=a.value,L=e?f:y,v=e?s:c;if(v&&L===v){d(void 0);return}const D=f+" - "+y;Y(D)&&(console.log(D),u=D)},g=(e,f)=>{e.relatedTarget&&F(f)},E=e=>{g(e,!0)},k=e=>{g(e,!1)},h=(e,f)=>{switch(e.key){case"Enter":F(f);break;case"Escape":d(void 0);break;case"Home":case"End":e.stopPropagation();break}},S=e=>{h(e,!0)},H=e=>{h(e,!1)},n=document.createElement("div");n.style.display="flex",n.style.flexDirection="row",n.addEventListener("keyup",e=>{e.stopPropagation()}),n.addEventListener("search",e=>{e.stopPropagation()});const b=(i==null?void 0:i.filterType)==="datetime"?"datetime-local":"date",x=(i==null?void 0:i.filterType)==="datetime"&&(i!=null&&i.showSeconds)?"1":"";t.value=s,t.type=b,t.step=x,t.style.flex="1",t.style.padding="4px",t.style.marginLeft="6px",t.style.marginRight="6px",t.style.boxSizing="border-box",t.addEventListener("blur",E),t.addEventListener("keydown",S),a.value=c,a.type=b,a.step=x,a.style.flex="1",a.style.padding="4px",a.style.marginLeft="6px",a.style.boxSizing="border-box",a.addEventListener("blur",k),a.addEventListener("keydown",H);const R=document.createTextNode("с"),j=document.createTextNode("по");return n.appendChild(R),n.appendChild(t),n.appendChild(j),n.appendChild(a),m(function(){o.getType()==="cell"&&(t.focus({preventScroll:!0}),t.select())}),n},K=(o,m,Y,d)=>{if(!o)return!0;if(!m)return!!d.keepEmpty;const i=o.split(" - "),t=i[0],a=i[1],p=T(t),u=T(a);if(!p.isValid()&&!u.isValid())return!0;let l=d.valuesFormat;l||(m.length===10?l="DD.MM.YYYY":m.length===16?l="DD.MM.YYYY HH:mm":l="DD.MM.YYYY HH:mm:ss");const s=T(m,l);if(!s.isValid())return!!d.keepEmpty;let c;return p.isValid()&&(c=s.isAfter(p)||s.isSame(p)),u.isValid()&&c!==!1&&(c=s.isBefore(u)||s.isSame(u)),!!c},N=[{title:"Date Of Birth",field:"dob",hozAlign:"center",headerFilter:$,headerFilterFunc:K,headerFilterFuncParams:{filterType:"date",valuesFormat:"DD/MM/YYYY"},formatter:P,formatterParams:{inputFormat:"DD/MM/YYYY",outputFormat:"DD.MM.YYYY"},sorter:_,sorterParams:{format:"DD/MM/YYYY"}}],J={id:"TabulatorGridSimple",columnDefaults:w,columns:N,dataSet:G,height:500},X=()=>r.jsxs(r.Fragment,{children:[r.jsx("h1",{children:"The Tabulator DataRangeHeaderFilter example"}),r.jsx(C,{...J})]}),q=M.lazy(()=>V(()=>import("./index-9FGXM8eG.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),ue=o=>r.jsxs(O,{children:[r.jsx("div",{children:r.jsx(X,{})}),r.jsx(B,{}),r.jsx("div",{children:r.jsx(z,{items:[{key:1,label:"Show source",children:r.jsx(M.Suspense,{fallback:r.jsx("div",{children:"Loading source..."}),children:r.jsx(q,{language:"tsx",style:o.darkMode?I:A,showLineNumbers:!0,children:`
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
`})})}]})})]});export{ue as Page9118471c3eb546f3b75c6086f328ebc6,ue as default};
