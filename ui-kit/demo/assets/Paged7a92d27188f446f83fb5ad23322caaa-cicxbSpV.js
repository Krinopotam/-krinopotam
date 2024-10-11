const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CGS66BNA.js","assets/default-highlight-CcEIfVOS.js","assets/index-D5qwc_YF.js"])))=>i.map(i=>d[i]);
import{j as t,r as e,_ as n,D as s}from"./index-D5qwc_YF.js";import{T as u}from"./tabulatorGrid-xmrOiwzB.js";import{T as l,a as c,b as m}from"./tabulatorData-A50l7rHb.js";import{P as d,C as b,d as p,c as h}from"./darcula-DCElNxcl.js";import"./modal-Ba-Ua4rS.js";import"./dForm-D9Yj5CGv.js";import"./index-DfWwWpfW.js";import"./dFormModal-CeNnxCAb.js";import"./modal-BT6G55W2.js";import"./defaultButtonsProps-BAcIqfvm.js";import"./index-DVORizd9.js";const f={id:"TabulatorGridButtons",columnDefaults:l,columns:c,dataSet:m,height:500,buttonsPosition:"left",buttons:{button1:{title:"Button 1",onClick:()=>{alert("Button 1 clicked")}},button2:{title:"Row name",active:!0,onClick:(o,a)=>{alert(`${a.title} clicked`)},onActiveRowChanged:(o,a,r,i)=>{i.getButtonsApi().updateButtons({button2:{title:r.getData().name}})}}}},x=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a TabulatorGrid with custom buttons"}),t.jsx(u,{...f})]}),g=e.lazy(()=>n(()=>import("./index-CGS66BNA.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),R=o=>t.jsxs(d,{children:[t.jsx("div",{children:t.jsx(x,{})}),t.jsx(s,{}),t.jsx("div",{children:t.jsx(b,{items:[{key:1,label:"Show source",children:t.jsx(e.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(g,{language:"tsx",style:o.darkMode?p:h,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
const props: IGridProps = {
    id: 'TabulatorGridButtons',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    dataSet: TabulatorPlainData,
    height: 500,
    buttonsPosition: 'left',
    buttons: {
        button1: {
            title: 'Button 1',
            onClick: () => {
                alert('Button 1 clicked');
            },
        },
        button2: {
            title: 'Row name',
            active: true,
            onClick: (_buttonName, button) => {
                alert(\`\${button.title} clicked\`);
            },
            onActiveRowChanged: (_buttonName, button, row, gridApi) => {
                const buttonsApi = gridApi.getButtonsApi();
                buttonsApi.updateButtons({
                    button2: {
                        title: row.getData().name,
                    },
                })
            }
        }
    }
};
export const Simple = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid {...props} />
        </>
    );
};
`})})}]})})]});export{R as Paged7a92d27188f446f83fb5ad23322caaa,R as default};
