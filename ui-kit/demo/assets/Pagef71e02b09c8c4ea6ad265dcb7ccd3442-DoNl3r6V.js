const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D0Dzp33a.js","assets/default-highlight-DQXVbr5l.js","assets/index-DEKOHtjL.js"])))=>i.map(i=>d[i]);
import{j as e,D as o,r as t,_ as r}from"./index-DEKOHtjL.js";import{T as a}from"./tabulatorGrid-ueiQSqlo.js";import{T as i}from"./treeSelectField-_2tThtJm.js";import{I as n}from"./inputField-CnoVCY_k.js";import{N as l}from"./numberField-9a3vBh07.js";import{f as m,T as s,a as d}from"./tabulatorData-CxDKwQJ9.js";import{P as p,C as u}from"./pageLayout-BAEqcME3.js";import{d as c,c as f}from"./darcula-BqMdvqtY.js";import"./buttonsRow-CRmAST--.js";import"./isArray-CilX2EC5.js";import"./messageBox-DiSTOwiN.js";import"./index-B4134D_s.js";import"./dFormModal-CXclmgf1.js";import"./modal-Ddxw_vMx.js";import"./defaultButtonsProps-CTS3EVUl.js";import"./PlusOutlined-DNtPRFLr.js";import"./index-v5l4yKKB.js";import"./baseField-C1lQOwhI.js";import"./useApiGetGroupsOnly-B3lhi2d3.js";import"./index-C1U0rq59.js";import"./useShowArrow-DbNT8REh.js";import"./useIcons-D-Pv2D3R.js";import"./SearchOutlined-DDbavnRP.js";import"./index-BJ8pwC2Z.js";const b={id:"TabulatorGridTreeWithForm",columnDefaults:d,columns:s,dataSet:m,dataTree:!0,height:500,layout:"fitColumns",editFormProps:{formId:"gridEditForm",fieldsProps:{parent:{component:i,label:"Родитель",dataSet:[...m],fieldNames:{title:"name"}},name:{component:n,label:"Name"},age:{component:l,label:"Age"},col:{component:n,label:"Favourite Color"},dob:{component:n,label:"Day of Birth"}},confirmChanges:!0},onDelete:()=>{},confirmDelete:!0,multiSelect:!0},j=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a hierarchical Tabulator grid with a form"}),e.jsx(a,{...b})]}),F=t.lazy((()=>r((()=>import("./index-D0Dzp33a.js").then((e=>e.dw))),__vite__mapDeps([0,1,2])).then((e=>({default:e.Prism}))))),h=r=>e.jsxs(p,{children:[e.jsx(j,{}),e.jsx(o,{}),e.jsx("div",{children:e.jsx(u,{items:[{key:1,label:"Show source",children:e.jsx(t.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(F,{language:"tsx",style:r.darkMode?c:f,showLineNumbers:!0,children:"\nimport React from 'react';\nimport {IGridProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';\nimport {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';\nimport {TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField';\nimport {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';\nimport {NumberField} from @krinopotam/ui-kit/dForm/fields/number/numberField';\nimport {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorTreeData} from '../../data/tabulatorData';\nconst treeSelectDataSet = [...TabulatorTreeData];\nconst editFormConfig: IDFormModalProps = {\n    formId: 'gridEditForm',\n    fieldsProps: {\n        parent: {component: TreeSelectField, label: 'Родитель', dataSet: treeSelectDataSet, fieldNames: {title: 'name'}},\n        name: {component: InputField, label: 'Name'},\n        age: {component: NumberField, label: 'Age'},\n        col: {component: InputField, label: 'Favourite Color'},\n        dob: {component: InputField, label: 'Day of Birth'},\n    },\n    confirmChanges: true,\n};\nconst props: IGridProps = {\n    id: 'TabulatorGridTreeWithForm',\n    columnDefaults: TabulatorBaseColumnsDef,\n    columns: TabulatorBaseColumns,\n    dataSet: TabulatorTreeData,\n    dataTree: true,\n    height: 500,\n    layout: 'fitColumns',\n    editFormProps: editFormConfig,\n    onDelete: () => {},\n    confirmDelete: true,\n    multiSelect: true,\n};\nexport const TreeWithForm = (): React.JSX.Element => {\n    return (\n        <>\n            <TabulatorGrid {...props} />\n        </>\n    );\n};\n"})})}]})})]});export{h as Pagef71e02b09c8c4ea6ad265dcb7ccd3442,h as default};
