const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{j as t,D as n,r,_ as s}from"./index-CtAjfk3U.js";import{T as u}from"./tabulatorGrid-Bes3Jt16.js";import{b as l,T as m,a as c}from"./tabulatorData-DSy7h6X7.js";import{P as d,C as b}from"./pageLayout-BYJr8qhp.js";import{d as p,c as h}from"./darcula-BqMdvqtY.js";import"./buttonsRow-DIWV9y5m.js";import"./isArray-Dq3mFmoY.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./dFormModal-DBrO8yV5.js";import"./modal-CqlI0vXJ.js";import"./defaultButtonsProps-BFWSm065.js";import"./PlusOutlined-CjmZvIFI.js";import"./index-C2aIs9ND.js";const f={id:"TabulatorGridButtons",columnDefaults:c,columns:m,dataSet:l,height:500,buttonsPosition:"left",buttons:{button1:{title:"Button 1",onClick:()=>{alert("Button 1 clicked")}},button2:{title:"Row name",active:!0,onClick:(o,a)=>{alert(`${a.title} clicked`)},onActiveRowChanged:(o,a,e,i)=>{i.getButtonsApi().updateButtons({button2:{title:(e==null?void 0:e.getData().name)??" --- "}})}}}},x=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a TabulatorGrid with custom buttons"}),t.jsx(u,{...f})]}),g=r.lazy(()=>s(()=>import("./index-DY4jbcst.js").then(o=>o.dw),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),E=o=>t.jsxs(d,{children:[t.jsx(x,{}),t.jsx(n,{}),t.jsx("div",{children:t.jsx(b,{items:[{key:1,label:"Show source",children:t.jsx(r.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(g,{language:"tsx",style:o.darkMode?p:h,showLineNumbers:!0,children:`
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
`})})}]})})]});export{E as Pagefe034c6b0a5e4e0dacc0089acb7456ad,E as default};
