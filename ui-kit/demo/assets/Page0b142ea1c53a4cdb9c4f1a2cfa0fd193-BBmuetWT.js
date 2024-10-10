const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D988I8zH.js","assets/default-highlight-CW7-1fMQ.js","assets/index-BZKbt60r.js"])))=>i.map(i=>d[i]);
import{j as t,r as e,_ as n,D as s}from"./index-BZKbt60r.js";import{T as l}from"./tabulatorGrid-3cY8rgqo.js";import{T as u,a as c,b as m}from"./tabulatorData-IudciEXS.js";import{P as d,C as b,d as p,c as h}from"./darcula-BNSS4uSE.js";import"./modal-BFvfzGH2.js";import"./dForm-Cc85MzR5.js";import"./index-BYKAZVg4.js";import"./dFormModal-Br15X1Ve.js";import"./modal-DVeoQbYX.js";import"./defaultButtonsProps-rqR8zV0W.js";import"./index-Cz18NXdk.js";const f={id:"TabulatorGridSimple",columnDefaults:u,columns:c,dataSet:m,height:500,buttonsPosition:"left",buttons:{button1:{title:"Button 1",onClick:()=>{alert("Button 1 clicked")}},button2:{title:"Row name",active:!0,onClick:(o,a)=>{alert(`${a.title} clicked`)},onActiveRowChanged:(o,a,r,i)=>{i.getButtonsApi().updateButtons({button2:{title:r.getData().name}})}}}},x=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a TabulatorGrid with custom buttons"}),t.jsx(l,{...f})]}),g=e.lazy(()=>n(()=>import("./index-D988I8zH.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),G=o=>t.jsxs(d,{children:[t.jsx("div",{children:t.jsx(x,{})}),t.jsx(s,{}),t.jsx("div",{children:t.jsx(b,{items:[{key:1,label:"Show source",children:t.jsx(e.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(g,{language:"tsx",style:o.darkMode?p:h,showLineNumbers:!0,children:`
import React from 'react';
import {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
const props: IGridProps = {
    id: 'TabulatorGridSimple',
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
`})})}]})})]});export{G as Page0b142ea1c53a4cdb9c4f1a2cfa0fd193,G as default};
