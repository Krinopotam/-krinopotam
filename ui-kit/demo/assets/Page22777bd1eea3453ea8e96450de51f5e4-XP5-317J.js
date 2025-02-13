const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D0Dzp33a.js","assets/default-highlight-DQXVbr5l.js","assets/index-DEKOHtjL.js"])))=>i.map(i=>d[i]);
import{j as e,D as t,r as n,_ as s}from"./index-DEKOHtjL.js";import{D as o}from"./isArray-CilX2EC5.js";import{T as i}from"./treeSelectField-_2tThtJm.js";import{P as r,C as d}from"./pageLayout-BAEqcME3.js";import{d as a,c as l}from"./darcula-BqMdvqtY.js";import"./buttonsRow-CRmAST--.js";import"./messageBox-DiSTOwiN.js";import"./index-B4134D_s.js";import"./baseField-C1lQOwhI.js";import"./dFormModal-CXclmgf1.js";import"./modal-Ddxw_vMx.js";import"./defaultButtonsProps-CTS3EVUl.js";import"./PlusOutlined-DNtPRFLr.js";import"./useApiGetGroupsOnly-B3lhi2d3.js";import"./index-C1U0rq59.js";import"./useShowArrow-DbNT8REh.js";import"./useIcons-D-Pv2D3R.js";import"./SearchOutlined-DDbavnRP.js";const p=[{id:"1",title:"First"},{id:"2",title:"Second"},{id:"3",title:"Third"}],c=[{id:"1",title:"First type process 1"},{id:"2",title:"First type process 2"}],m=[{id:"3",title:"Second type process 1"},{id:"4",title:"Second type process 2"}],u=()=>{const t=S();return e.jsxs("div",{children:[e.jsx("h1",{children:"An example of a form with TreeSelect fields, the data set of one of which depends on the selection in the other"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(o,{...t})})]})},S=()=>({formId:"TestForm",confirmChanges:!0,fieldsProps:{tip:{component:i,label:"Process type",fetchMode:"onUse",dataSet:p,onValueChanged:(e,t,n)=>{const s=n.getValue();let o;if(o=s?"1"===s.id?c:"2"===s.id?m:[]:[],!o)return;n.getModel().getField("process").updateProps({dataSet:o})}},process:{component:i,label:"Process",fetchMode:"onUse",dataSet:[{}]}},buttons:{ok:{position:"right"}}}),f=n.lazy((()=>s((()=>import("./index-D0Dzp33a.js").then((e=>e.dw))),__vite__mapDeps([0,1,2])).then((e=>({default:e.Prism}))))),h=s=>e.jsxs(r,{children:[e.jsx(u,{}),e.jsx(t,{}),e.jsx("div",{children:e.jsx(d,{items:[{key:1,label:"Show source",children:e.jsx(n.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(f,{language:"tsx",style:s.darkMode?a:l,showLineNumbers:!0,children:"\nimport {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';\nimport React from 'react';\nimport {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField';\nimport {Space, Switch} from 'antd';\nimport {AnyType} from '@krinopotam/service-types';\nconst dataSet1 = [\n    {\n        id: '1',\n        title: 'First',\n    },\n    {\n        id: '2',\n        title: 'Second',\n    },\n    {\n        id: '3',\n        title: 'Third',\n    },\n];\nconst dataSet2_1 = [\n    {\n        id: '1',\n        title: 'First type process 1',\n    },\n    {\n        id: '2',\n        title: 'First type process 2',\n    },\n];\nconst dataSet2_2 = [\n    {\n        id: '3',\n        title: 'Second type process 1',\n    },\n    {\n        id: '4',\n        title: 'Second type process 2',\n    },\n];\nexport const Example = (): React.JSX.Element => {\n    const formProps = useFormProps();\n    return (\n        <div>\n            <div style={{maxWidth: 500}}>\n                <DForm {...formProps} />\n            </div>\n        </div>\n    );\n};\nconst useFormProps = () => {\n    return {\n        formId: 'TestForm',\n        confirmChanges: true,\n        fieldsProps: {\n            tip: {\n                component: TreeSelectField,\n                label: 'Process type',\n                fetchMode: 'onUse',\n                dataSet: dataSet1,\n                onValueChanged: (value, prevValue, field) => {\n                    const tipValue = field.getValue() as Record<string, AnyType>;\n                    let newDataSet: ITreeSelectFieldProps['dataSet'];\n                    if (!tipValue) newDataSet = [];\n                    else if (tipValue.id === '1') newDataSet = dataSet2_1;\n                    else if (tipValue.id === '2') newDataSet = dataSet2_2;\n                    else newDataSet = [];\n                    if (!newDataSet) return;\n                    const process = field.getModel().getField('process');\n                    process.updateProps({dataSet: newDataSet});\n                },\n            } as ITreeSelectFieldProps,\n            process: {component: TreeSelectField, label: 'Process', fetchMode: 'onUse', dataSet: [{}]},\n        },\n        buttons: {ok: {position: 'right'}},\n    } satisfies IDFormProps;\n};\n"})})}]})})]});export{h as Page22777bd1eea3453ea8e96450de51f5e4,h as default};
