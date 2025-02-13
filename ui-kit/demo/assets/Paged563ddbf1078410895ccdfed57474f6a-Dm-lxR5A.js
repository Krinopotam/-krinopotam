const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D0Dzp33a.js","assets/default-highlight-DQXVbr5l.js","assets/index-DEKOHtjL.js"])))=>i.map(i=>d[i]);
import{r as e,j as t,S as i,a as n,D as d,_ as l}from"./index-DEKOHtjL.js";import{I as r}from"./inputField-CnoVCY_k.js";import{T as o}from"./treeSelectField-_2tThtJm.js";import{P as s}from"./useApiGetGroupsOnly-B3lhi2d3.js";import{d as a}from"./dFormModal-CXclmgf1.js";import{T as m}from"./tree-DIIsvXVt.js";import{P as p,C as c}from"./pageLayout-BAEqcME3.js";import{d as u,c as h}from"./darcula-BqMdvqtY.js";import"./baseField-C1lQOwhI.js";import"./isArray-CilX2EC5.js";import"./buttonsRow-CRmAST--.js";import"./messageBox-DiSTOwiN.js";import"./index-B4134D_s.js";import"./index-BJ8pwC2Z.js";import"./SearchOutlined-DDbavnRP.js";import"./defaultButtonsProps-CTS3EVUl.js";import"./PlusOutlined-DNtPRFLr.js";import"./useShowArrow-DbNT8REh.js";import"./useIcons-D-Pv2D3R.js";import"./index-C1U0rq59.js";import"./modal-Ddxw_vMx.js";import"./index-v5l4yKKB.js";import"./index-CebQ6_Hs.js";const f=()=>{const d=S(),[l,r]=e.useState(!1),[o,s]=e.useState(!1),[a,p]=e.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Пример Extended Tree с формой редактирования"}),t.jsxs(i,{style:{paddingBottom:10},children:[t.jsxs("div",{children:["Multi select ",t.jsx(n,{onClick:e=>p(e)})]}),t.jsxs("div",{children:["Read only ",t.jsx(n,{onClick:e=>r(e)})]}),t.jsxs("div",{children:["Disabled ",t.jsx(n,{onClick:e=>s(e)})]})]}),t.jsx("div",{style:{maxWidth:500,maxHeight:500,height:"100%",overflow:"auto"},children:t.jsx(m,{...d,multiple:a,readOnly:l,disabled:o})})]})},j={},S=()=>{const e=x();return{apiRef:j,dataSet:F,defaultExpandAll:!0,confirmDelete:!0,selectNewNode:!0,buttonsIconsOnly:!0,editFormProps:e,draggableOrder:!0,onDelete:()=>{}}},x=()=>e.useMemo((()=>({onFormInit:e=>{const t=e.model,i=t.getField("parent"),n=j.getDataSet();if("update"!==t.getFormMode())return void i.updateProps({dataSet:n});const d=t.getFormDataSet().id,l=a(n);s(d,l,{key:"id",children:"children"}),i.updateProps({dataSet:l})},formId:"EditForm",confirmChanges:!0,fieldsProps:{title:{component:r,label:"Подразделение"},parent:{component:o,label:"Родитель"}}})),[]),F=[{id:"01",title:"Департамент аналитики данных",children:[{id:"01-01",title:"Управление аналитики продаж",children:[{id:"01-01-01",title:"Отдел продаж север"},{id:"01-01-02",title:"Отдел продаж юг"},{id:"01-01-03",title:"Отдел продаж запад"}]},{id:"01-02",title:"Управление аналитики закупок",children:[{id:"01-02-01",title:"Отдел закупок север"},{id:"01-02-02",title:"Отдел закупок юг"},{id:"01-02-03",title:"Отдел закупок запад"}]},{id:"01-03",title:"Управление аналитики производства",children:[{id:"01-03-01",title:"Отдел производства север"},{id:"01-03-02",title:"Отдел производства юг"},{id:"01-03-03",title:"Отдел производства запад"}]}]},{id:"02",title:"Департамент инженерных работ",children:[{id:"02-01",title:"Управление строительства",children:[{id:"02-01-01",title:"Отдел строительства север"},{id:"02-01-02",title:"Отдел строительства юг"},{id:"02-01-03",title:"Отдел строительства запад"}]},{id:"02-02",title:"Управление демонтажа",children:[{id:"02-02-01",title:"Отдел демонтажа север"},{id:"02-02-02",title:"Отдел демонтажа юг"},{id:"02-02-03",title:"Отдел демонтажа запад"}]},{id:"02-03",title:"Управление реконструкции",children:[{id:"02-03-01",title:"Отдел реконструкции север"},{id:"02-03-02",title:"Отдел реконструкции юг"},{id:"02-03-03",title:"Отдел реконструкции запад"}]}]},{id:"03",title:"Департамент проектных работ",children:[{id:"03-01",title:"Управление проектирования",children:[{id:"03-01-01",title:"Отдел проектирования север"},{id:"03-01-02",title:"Отдел проектирования юг"},{id:"03-01-03",title:"Отдел проектирования запад"}]},{id:"03-02",title:"Управление согласования",children:[{id:"03-02-01",title:"Отдел согласования север"},{id:"03-02-02",title:"Отдел согласования юг"},{id:"03-02-03",title:"Отдел согласования запад"}]},{id:"03-03",title:"Управление анализа проектов",children:[{id:"03-03-01",title:"Отдел анализа север"},{id:"03-03-02",title:"Отдел анализа юг"},{id:"03-03-03",title:"Отдел анализа запад"}]}]}],P=e.lazy((()=>l((()=>import("./index-D0Dzp33a.js").then((e=>e.dw))),__vite__mapDeps([0,1,2])).then((e=>({default:e.Prism}))))),g=i=>t.jsxs(p,{children:[t.jsx(f,{}),t.jsx(d,{}),t.jsx("div",{children:t.jsx(c,{items:[{key:1,label:"Show source",children:t.jsx(e.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(P,{language:"tsx",style:i.darkMode?u:h,showLineNumbers:!0,children:"\nimport React, {useMemo, useState} from 'react';\nimport {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';\nimport {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';\nimport {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField';\nimport {ITreeSelectApi, ITreeSelectNode} from @krinopotam/ui-kit/treeSelect';\nimport {removeFromTree} from @krinopotam/ui-kit/_shared/hooks/treeComponentApiMethods/serviceMethods/removeFromTree';\nimport {CloneObject} from '@krinopotam/js-helpers';\nimport {IExtTreeProps, Tree} from @krinopotam/ui-kit/tree';\nimport {Space, Switch} from 'antd';\nexport const TreeWithForm = (): React.JSX.Element => {\n    const treeProps = useTreeProps();\n    const [readOnly, setReadOnly] = useState(false);\n    const [disabled, setDisabled] = useState(false);\n    const [multiple, setMultiple] = useState(false);\n    return (\n        <>\n            <Space style={{paddingBottom: 10}}>\n                <div>\n                    Multi select <Switch onClick={e => setMultiple(e)} />\n                </div>\n                <div>\n                    Read only <Switch onClick={e => setReadOnly(e)} />\n                </div>\n                <div>\n                    Disabled <Switch onClick={e => setDisabled(e)} />\n                </div>\n            </Space>\n            <div style={{maxWidth: 500, maxHeight: 500, height: '100%', overflow: 'auto'}}>\n                <Tree {...treeProps} multiple={multiple} readOnly={readOnly} disabled={disabled} />\n            </div>\n        </>\n    );\n};\nconst departmentsApi = {} as ITreeSelectApi;\nconst useTreeProps = () => {\n    const editFormProps = useTreeEditFormProps();\n    return {\n        apiRef: departmentsApi,\n        dataSet: dataSet,\n        defaultExpandAll: true,\n        confirmDelete: true,\n        selectNewNode: true,\n        buttonsIconsOnly: true,\n        editFormProps: editFormProps,\n        draggableOrder:true,\n        onDelete: () => {},\n    } satisfies IExtTreeProps;\n};\nconst useTreeEditFormProps = () => {\n    return useMemo(\n        (): IDFormModalProps => ({\n            onFormInit: formApi => {\n                const model = formApi.model;\n                const field = model.getField('parent');\n                const data = departmentsApi.getDataSet();\n                const formMode = model.getFormMode();\n                if (formMode !== 'update') {\n                    field.updateProps({dataSet: data});\n                    return;\n                }\n                /** modify dataset for update to avoid the possibility of a parent node choosing itself or its own child node */\n                const id = model.getFormDataSet()['id'];\n                const clonedData = CloneObject(data);\n                removeFromTree(id, clonedData, {key: 'id', children: 'children'});\n                field.updateProps({dataSet: clonedData});\n            },\n            formId: 'EditForm',\n            confirmChanges: true,\n            fieldsProps: {\n                title: {component: InputField, label: 'Подразделение'} satisfies IInputFieldProps,\n                parent: {\n                    component: TreeSelectField,\n                    label: 'Родитель',\n                } satisfies ITreeSelectFieldProps,\n            },\n        }),\n        []\n    );\n};\nconst dataSet: ITreeSelectNode[] = [\n    {\n        id: '01',\n        title: 'Департамент аналитики данных',\n        children: [\n            {\n                id: '01-01',\n                title: 'Управление аналитики продаж',\n                children: [\n                    {id: '01-01-01', title: 'Отдел продаж север'},\n                    {id: '01-01-02', title: 'Отдел продаж юг'},\n                    {id: '01-01-03', title: 'Отдел продаж запад'},\n                ],\n            },\n            {\n                id: '01-02',\n                title: 'Управление аналитики закупок',\n                children: [\n                    {id: '01-02-01', title: 'Отдел закупок север'},\n                    {id: '01-02-02', title: 'Отдел закупок юг'},\n                    {id: '01-02-03', title: 'Отдел закупок запад'},\n                ],\n            },\n            {\n                id: '01-03',\n                title: 'Управление аналитики производства',\n                children: [\n                    {id: '01-03-01', title: 'Отдел производства север'},\n                    {id: '01-03-02', title: 'Отдел производства юг'},\n                    {id: '01-03-03', title: 'Отдел производства запад'},\n                ],\n            },\n        ],\n    },\n    {\n        id: '02',\n        title: 'Департамент инженерных работ',\n        children: [\n            {\n                id: '02-01',\n                title: 'Управление строительства',\n                children: [\n                    {id: '02-01-01', title: 'Отдел строительства север'},\n                    {id: '02-01-02', title: 'Отдел строительства юг'},\n                    {id: '02-01-03', title: 'Отдел строительства запад'},\n                ],\n            },\n            {\n                id: '02-02',\n                title: 'Управление демонтажа',\n                children: [\n                    {id: '02-02-01', title: 'Отдел демонтажа север'},\n                    {id: '02-02-02', title: 'Отдел демонтажа юг'},\n                    {id: '02-02-03', title: 'Отдел демонтажа запад'},\n                ],\n            },\n            {\n                id: '02-03',\n                title: 'Управление реконструкции',\n                children: [\n                    {id: '02-03-01', title: 'Отдел реконструкции север'},\n                    {id: '02-03-02', title: 'Отдел реконструкции юг'},\n                    {id: '02-03-03', title: 'Отдел реконструкции запад'},\n                ],\n            },\n        ],\n    },\n    {\n        id: '03',\n        title: 'Департамент проектных работ',\n        children: [\n            {\n                id: '03-01',\n                title: 'Управление проектирования',\n                children: [\n                    {id: '03-01-01', title: 'Отдел проектирования север'},\n                    {id: '03-01-02', title: 'Отдел проектирования юг'},\n                    {id: '03-01-03', title: 'Отдел проектирования запад'},\n                ],\n            },\n            {\n                id: '03-02',\n                title: 'Управление согласования',\n                children: [\n                    {id: '03-02-01', title: 'Отдел согласования север'},\n                    {id: '03-02-02', title: 'Отдел согласования юг'},\n                    {id: '03-02-03', title: 'Отдел согласования запад'},\n                ],\n            },\n            {\n                id: '03-03',\n                title: 'Управление анализа проектов',\n                children: [\n                    {id: '03-03-01', title: 'Отдел анализа север'},\n                    {id: '03-03-02', title: 'Отдел анализа юг'},\n                    {id: '03-03-03', title: 'Отдел анализа запад'},\n                ],\n            },\n        ],\n    },\n];\n"})})}]})})]});export{g as Paged563ddbf1078410895ccdfed57474f6a,g as default};
