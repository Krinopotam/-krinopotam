const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D0Dzp33a.js","assets/default-highlight-DQXVbr5l.js","assets/index-DEKOHtjL.js"])))=>i.map(i=>d[i]);
import{r as t,j as e,D as a,_ as n}from"./index-DEKOHtjL.js";import{b as i}from"./buttonsRow-CRmAST--.js";import{T as r}from"./tabulatorGrid-ueiQSqlo.js";import{G as s,a as o}from"./tabulatorData-CxDKwQJ9.js";import{P as d,C as l}from"./pageLayout-BAEqcME3.js";import{d as u,c}from"./darcula-BqMdvqtY.js";import"./isArray-CilX2EC5.js";import"./messageBox-DiSTOwiN.js";import"./index-B4134D_s.js";import"./dFormModal-CXclmgf1.js";import"./modal-Ddxw_vMx.js";import"./defaultButtonsProps-CTS3EVUl.js";import"./PlusOutlined-DNtPRFLr.js";import"./index-v5l4yKKB.js";const m=[{title:"Column 1",field:"col1"},{title:"Column 2",field:"col2"},{title:"Column 3",field:"col3"}],p=()=>{const[a,n]=t.useState(void 0),[d]=t.useState({}),l=t.useCallback((()=>{n(s(1e3,"state"))}),[]),u=t.useCallback((()=>{d.setDataSet(s(1e3,"api"))}),[d]),c=t.useCallback((()=>{d.fetchData((()=>new Promise(((t,e)=>{setTimeout((()=>{Math.random()<.1?e({message:"Ошибка загрузки данных",code:400}):t({data:s(1e3,"async")})}),1e3)}))))}),[d]);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of updating the dataSet of the Tabulator grid"}),e.jsx(i,{onClick:l,children:"Update DataSet via setState"})," - the entire grid is re-rendered",e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{onClick:u,children:"Update dataSet via Api.setDataSet"})," - dataSet is updated, but this does not cause the grid to rerender",e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{onClick:c,children:"Update dataSet asynchronously via Api.fetchData"})," - the rerender is called because it is closed by the loader during loading, but a memoized component is used. Therefore, there is actually no rerender.",e.jsx(r,{id:"TabulatorGridSimple",apiRef:d,columnDefaults:o,columns:m,dataSet:a,height:500,layout:"fitColumns"})]})},h=t.lazy((()=>n((()=>import("./index-D0Dzp33a.js").then((t=>t.dw))),__vite__mapDeps([0,1,2])).then((t=>({default:t.Prism}))))),b=n=>e.jsxs(d,{children:[e.jsx(p,{}),e.jsx(a,{}),e.jsx("div",{children:e.jsx(l,{items:[{key:1,label:"Show source",children:e.jsx(t.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(h,{language:"tsx",style:n.darkMode?u:c,showLineNumbers:!0,children:"\nimport React, {useCallback, useState} from 'react';\nimport {Button} from @krinopotam/ui-kit/button';\nimport {IGridApi, IGridProps, ITabulatorProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';\nimport {GenerateDataSet, TabulatorBaseColumnsDef} from '../../data/tabulatorData';\nconst columns: ITabulatorProps['columns'] = [\n    {title: 'Column 1', field: 'col1'},\n    {title: 'Column 2', field: 'col2'},\n    {title: 'Column 3', field: 'col3'},\n];\nexport const ChangeDataSet = (): React.JSX.Element => {\n    const [dataSet, setDataSet] = useState<IGridProps['dataSet']>(undefined);\n    const [gridApi] = useState({} as IGridApi);\n    const updateDataViaState = useCallback(() => {\n        setDataSet(GenerateDataSet(1000, 'state'));\n    }, []);\n    const updateDataViaApi = useCallback(() => {\n        gridApi.setDataSet(GenerateDataSet(1000, 'api'));\n    }, [gridApi]);\n    const updateDataViaApiAsync = useCallback(() => {\n        gridApi.fetchData(() => {\n            return new Promise((resolve, reject) => {\n                setTimeout(() => {\n                    if (Math.random() < 0.1) reject({message: 'Ошибка загрузки данных', code: 400});\n                    else resolve({data: GenerateDataSet(1000, 'async')});\n                }, 1000);\n            });\n        });\n    }, [gridApi]);\n    return (\n        <>\n            <Button onClick={updateDataViaState}>Update DataSet via setState</Button> - the entire grid is re-rendered\n            <br />\n            <br />\n            <Button onClick={updateDataViaApi}>Update dataSet via Api.setDataSet</Button> - dataSet is updated, but this does not cause the grid to rerender\n            <br />\n            <br />\n            <Button onClick={updateDataViaApiAsync}>Update dataSet asynchronously via Api.fetchData</Button> - the rerender is called because it is closed by the loader\n            during loading, but a memoized component is used. Therefore, there is actually no rerender.\n            <TabulatorGrid\n                id={'TabulatorGridSimple'}\n                apiRef={gridApi}\n                columnDefaults={TabulatorBaseColumnsDef}\n                columns={columns}\n                dataSet={dataSet}\n                height={500}\n                layout={'fitColumns'}\n            />\n        </>\n    );\n};\n"})})}]})})]});export{b as Pagec9f6085adcfc4b4498cef658359966ed,b as default};
