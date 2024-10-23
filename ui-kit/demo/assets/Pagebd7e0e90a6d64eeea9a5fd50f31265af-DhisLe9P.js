const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-PpfmoLrq.js","assets/default-highlight-CWL5sYcU.js","assets/index-DLyGJszd.js"])))=>i.map(i=>d[i]);
import{j as t,r,_ as n,D as s}from"./index-DLyGJszd.js";import{T as u}from"./tabulatorGrid-rDkNf4Ba.js";import{b as l,T as m,a as c}from"./tabulatorData-8UvrI1Ir.js";import{P as d,C as b,d as p,c as h}from"./darcula-BfEmJZ6D.js";import"./mergeButtons-OmCcH4N9.js";import"./dForm-8o49JMOI.js";import"./modal-CjmvIDqE.js";import"./index-CGhTEYKp.js";import"./dFormModal-L6NStncr.js";import"./modal-BEhuKh3S.js";import"./defaultButtonsProps-D0FGE1rH.js";import"./index-BGgfnEtT.js";const f={id:"TabulatorGridButtons",columnDefaults:l,columns:m,dataSet:c,height:500,buttonsPosition:"left",buttons:{button1:{title:"Button 1",onClick:()=>{alert("Button 1 clicked")}},button2:{title:"Row name",active:!0,onClick:(o,a)=>{alert(`${a.title} clicked`)},onActiveRowChanged:(o,a,e,i)=>{i.getButtonsApi().updateButtons({button2:{title:(e==null?void 0:e.getData().name)??" --- "}})}}}},x=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a TabulatorGrid with custom buttons"}),t.jsx(u,{...f})]}),g=r.lazy(()=>n(()=>import("./index-PpfmoLrq.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),y=o=>t.jsxs(d,{children:[t.jsx("div",{children:t.jsx(x,{})}),t.jsx(s,{}),t.jsx("div",{children:t.jsx(b,{items:[{key:1,label:"Show source",children:t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(g,{language:"tsx",style:o.darkMode?p:h,showLineNumbers:!0,children:`
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
                        title: row?.getData().name ?? ' --- ',
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
`})})}]})})]});export{y as Pagebd7e0e90a6d64eeea9a5fd50f31265af,y as default};
