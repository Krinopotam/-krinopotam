const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{j as i,D as V,r as M,_ as w}from"./index-CtAjfk3U.js";import{T as B}from"./tabulatorGrid-Bes3Jt16.js";import{b as C,D as G,e as P,a as _}from"./tabulatorData-DSy7h6X7.js";import{d as T}from"./isArray-Dq3mFmoY.js";import{P as O,C as z}from"./pageLayout-BYJr8qhp.js";import{d as I,c as A}from"./darcula-BqMdvqtY.js";import"./buttonsRow-DIWV9y5m.js";import"./messageBox-BEJz6LZv.js";import"./dFormModal-DBrO8yV5.js";import"./modal-CqlI0vXJ.js";import"./defaultButtonsProps-BFWSm065.js";import"./PlusOutlined-CjmZvIFI.js";import"./index-CQ36vsgA.js";import"./index-C2aIs9ND.js";const $=(r,m,Y,c,o)=>{const t=document.createElement("input"),a=document.createElement("input"),p=r.getColumn();p.getDefinition().headerFilterLiveFilter=!1;let u=r.getValue();const l=u.split(" - "),s=l[0]??"",d=l[1]??"",F=e=>{const f=t.value,y=a.value,L=e?f:y,v=e?s:d;if(v&&L===v){c(void 0);return}const D=f+" - "+y;Y(D)&&(console.log(D),u=D)},g=(e,f)=>{e.relatedTarget&&F(f)},E=e=>{g(e,!0)},k=e=>{g(e,!1)},h=(e,f)=>{switch(e.key){case"Enter":F(f);break;case"Escape":c(void 0);break;case"Home":case"End":e.stopPropagation();break}},S=e=>{h(e,!0)},H=e=>{h(e,!1)},n=document.createElement("div");n.style.display="flex",n.style.flexDirection="row",n.addEventListener("keyup",e=>{e.stopPropagation()}),n.addEventListener("search",e=>{e.stopPropagation()});const b=(o==null?void 0:o.filterType)==="datetime"?"datetime-local":"date",x=(o==null?void 0:o.filterType)==="datetime"&&(o!=null&&o.showSeconds)?"1":"";t.value=s,t.type=b,t.step=x,t.style.flex="1",t.style.padding="4px",t.style.marginLeft="6px",t.style.marginRight="6px",t.style.boxSizing="border-box",t.addEventListener("blur",E),t.addEventListener("keydown",S),a.value=d,a.type=b,a.step=x,a.style.flex="1",a.style.padding="4px",a.style.marginLeft="6px",a.style.boxSizing="border-box",a.addEventListener("blur",k),a.addEventListener("keydown",H);const R=document.createTextNode("с"),j=document.createTextNode("по");return n.appendChild(R),n.appendChild(t),n.appendChild(j),n.appendChild(a),m(function(){r.getType()==="cell"&&(t.focus({preventScroll:!0}),t.select())}),n},K=(r,m,Y,c)=>{if(!r)return!0;if(!m)return!!c.keepEmpty;const o=r.split(" - "),t=o[0],a=o[1],p=T(t),u=T(a);if(!p.isValid()&&!u.isValid())return!0;let l=c.valuesFormat;l||(m.length===10?l="DD.MM.YYYY":m.length===16?l="DD.MM.YYYY HH:mm":l="DD.MM.YYYY HH:mm:ss");const s=T(m,l);if(!s.isValid())return!!c.keepEmpty;let d;return p.isValid()&&(d=s.isAfter(p)||s.isSame(p)),u.isValid()&&d!==!1&&(d=s.isBefore(u)||s.isSame(u)),!!d},N=[{title:"Date Of Birth",field:"dob",hozAlign:"center",headerFilter:$,headerFilterFunc:K,headerFilterFuncParams:{filterType:"date",valuesFormat:"DD/MM/YYYY"},formatter:P,formatterParams:{inputFormat:"DD/MM/YYYY",outputFormat:"DD.MM.YYYY"},sorter:G,sorterParams:{format:"DD/MM/YYYY"}}],J={id:"TabulatorGridSimple",columnDefaults:_,columns:N,dataSet:C,height:500},X=()=>i.jsxs(i.Fragment,{children:[i.jsx("h1",{children:"The Tabulator DataRangeHeaderFilter example"}),i.jsx(B,{...J})]}),q=M.lazy(()=>w(()=>import("./index-DY4jbcst.js").then(r=>r.dw),__vite__mapDeps([0,1,2])).then(r=>({default:r.Prism}))),ue=r=>i.jsxs(O,{children:[i.jsx(X,{}),i.jsx(V,{}),i.jsx("div",{children:i.jsx(z,{items:[{key:1,label:"Show source",children:i.jsx(M.Suspense,{fallback:i.jsx("div",{children:"Loading source..."}),children:i.jsx(q,{language:"tsx",style:r.darkMode?I:A,showLineNumbers:!0,children:`
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
`})})}]})})]});export{ue as Pagedf5b84e28f9d4bc4822f4c6135268dfe,ue as default};
