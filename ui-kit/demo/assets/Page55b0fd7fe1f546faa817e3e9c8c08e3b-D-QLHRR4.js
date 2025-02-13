const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D0Dzp33a.js","assets/default-highlight-DQXVbr5l.js","assets/index-DEKOHtjL.js"])))=>i.map(i=>d[i]);
import{j as t,D as n,r as o,_ as a}from"./index-DEKOHtjL.js";import{T as s}from"./tabulatorGrid-ueiQSqlo.js";import{b as e,T as i,a as r}from"./tabulatorData-CxDKwQJ9.js";import{P as l,C as u}from"./pageLayout-BAEqcME3.js";import{d as m,c as d}from"./darcula-BqMdvqtY.js";import"./buttonsRow-CRmAST--.js";import"./isArray-CilX2EC5.js";import"./messageBox-DiSTOwiN.js";import"./index-B4134D_s.js";import"./dFormModal-CXclmgf1.js";import"./modal-Ddxw_vMx.js";import"./defaultButtonsProps-CTS3EVUl.js";import"./PlusOutlined-DNtPRFLr.js";import"./index-v5l4yKKB.js";const c={id:"TabulatorGridButtons",columnDefaults:r,columns:i,dataSet:e,height:500,buttonsPosition:"left",buttons:{button1:{title:"Button 1",onClick:()=>{alert("Button 1 clicked")}},button2:{title:"Row name",active:!0,onClick:(t,n)=>{alert(`${n.title} clicked`)},onActiveRowChanged:(t,n,o,a)=>{a.getButtonsApi().updateButtons({button2:{title:(null==o?void 0:o.getData().name)??" --- "}})}}}},p=()=>t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Example of a TabulatorGrid with custom buttons"}),t.jsx(s,{...c})]}),b=o.lazy((()=>a((()=>import("./index-D0Dzp33a.js").then((t=>t.dw))),__vite__mapDeps([0,1,2])).then((t=>({default:t.Prism}))))),j=a=>t.jsxs(l,{children:[t.jsx(p,{}),t.jsx(n,{}),t.jsx("div",{children:t.jsx(u,{items:[{key:1,label:"Show source",children:t.jsx(o.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(b,{language:"tsx",style:a.darkMode?m:d,showLineNumbers:!0,children:"\nimport React from 'react';\nimport {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';\nimport {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';\nconst props: IGridProps = {\n    id: 'TabulatorGridButtons',\n    columnDefaults: TabulatorBaseColumnsDef,\n    columns: TabulatorBaseColumns,\n    dataSet: TabulatorPlainData,\n    height: 500,\n    buttonsPosition: 'left',\n    buttons: {\n        button1: {\n            title: 'Button 1',\n            onClick: () => {\n                alert('Button 1 clicked');\n            },\n        },\n        button2: {\n            title: 'Row name',\n            active: true,\n            onClick: (_buttonName, button) => {\n                alert(`${button.title} clicked`);\n            },\n            onActiveRowChanged: (_buttonName, button, row, gridApi) => {\n                const buttonsApi = gridApi.getButtonsApi();\n                buttonsApi.updateButtons({\n                    button2: {\n                        title: row?.getData().name ?? ' --- ',\n                    },\n                })\n            }\n        }\n    }\n};\nexport const Simple = (): React.JSX.Element => {\n    return (\n        <>\n            <TabulatorGrid {...props} />\n        </>\n    );\n};\n"})})}]})})]});export{j as Page55b0fd7fe1f546faa817e3e9c8c08e3b,j as default};
