const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D0Dzp33a.js","assets/default-highlight-DQXVbr5l.js","assets/index-DEKOHtjL.js"])))=>i.map(i=>d[i]);
import{j as e,D as i,r as o,_ as r}from"./index-DEKOHtjL.js";import{E as n}from"./inlineFields-WsIFznS-.js";import{P as t,C as l}from"./pageLayout-BAEqcME3.js";import{d as s,c as d}from"./darcula-BqMdvqtY.js";import"./isArray-CilX2EC5.js";import"./buttonsRow-CRmAST--.js";import"./messageBox-DiSTOwiN.js";import"./index-B4134D_s.js";import"./inputField-CnoVCY_k.js";import"./baseField-C1lQOwhI.js";import"./index-BJ8pwC2Z.js";import"./SearchOutlined-DDbavnRP.js";import"./inlineGroupField-CYHId46J.js";import"./defaultButtonsProps-CTS3EVUl.js";import"./PlusOutlined-DNtPRFLr.js";import"./passwordField-DLeEeMAV.js";import"./numberField-9a3vBh07.js";import"./treeSelectField-_2tThtJm.js";import"./dFormModal-CXclmgf1.js";import"./modal-Ddxw_vMx.js";import"./useApiGetGroupsOnly-B3lhi2d3.js";import"./index-C1U0rq59.js";import"./useShowArrow-DbNT8REh.js";import"./useIcons-D-Pv2D3R.js";import"./selectField-B6AnosDg.js";const p=o.lazy((()=>r((()=>import("./index-D0Dzp33a.js").then((e=>e.dw))),__vite__mapDeps([0,1,2])).then((e=>({default:e.Prism}))))),a=r=>e.jsxs(t,{children:[e.jsx(n,{}),e.jsx(i,{}),e.jsx("div",{children:e.jsx(l,{items:[{key:1,label:"Show source",children:e.jsx(o.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(p,{language:"tsx",style:r.darkMode?s:d,showLineNumbers:!0,children:"\nimport React from 'react';\nimport {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';\nimport {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';\nimport {Space, Switch} from 'antd';\nimport {IInlineGroupFieldProps, InlineGroupField} from @krinopotam/ui-kit/dForm/fields/inlineGroup';\nimport {CheckboxField, ICheckboxFieldProps} from @krinopotam/ui-kit/dForm/fields/checkbox\";\nimport {IPasswordFieldProps, PasswordField} from @krinopotam/ui-kit/dForm/fields/password\";\nimport {INumberFieldProps, NumberField} from @krinopotam/ui-kit/dForm/fields/number\";\nimport {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect\";\nimport {ISelectFieldProps, SelectField} from @krinopotam/ui-kit/dForm/fields/select\";\nimport {ILinkFieldProps, LinkField} from @krinopotam/ui-kit/dForm/fields/link\";\nexport const Example = (): React.JSX.Element => {\n    const [horizontal, setHorizontal] = React.useState(false);\n    const formProps = useFormProps(horizontal);\n    return (\n        <div>\n            <div style={{maxWidth: 1000, border: '1px solid gray', padding: 5}}>\n                <Space style={{marginBottom: 30}}>\n                    <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={() => setHorizontal(cur => !cur)} />\n                </Space>\n                <DForm {...formProps} />\n            </div>\n        </div>\n    );\n};\nexport const useFormProps = (horizontal: boolean) => {\n    return {\n        layout: horizontal ? 'horizontal' : 'vertical',\n        fieldsProps: {\n            inline1: {\n                component: InlineGroupField,\n                fieldsProps: {\n                    field1_1: {component: InputField, label: 'Field1_1', placeholder: '200px', width: 200} satisfies IInputFieldProps,\n                    field1_2: {component: PasswordField, label: 'Field1_2', placeholder: 'auto (not set)', autoFocus: true} satisfies IPasswordFieldProps,\n                    field1_3: {component: NumberField, label: 'Field1_3', placeholder: '100px', width: 100} satisfies INumberFieldProps,\n                },\n            } satisfies IInlineGroupFieldProps,\n            inline2: {\n                component: InlineGroupField,\n                fieldsProps: {\n                    field2_1: {component: TreeSelectField, label: 'Field2_1', placeholder: '50%', width: '50%'} satisfies ITreeSelectFieldProps,\n                    field2_2: {component: SelectField, label: 'Field2_2', placeholder: 'auto (not set)'} satisfies ISelectFieldProps,\n                    field2_3: {component: LinkField, label: 'Field2_3', href: 'https://test.ru/link', defaultValue:'https://test.ru/link', placeholder: '20%', width: '20%'} satisfies ILinkFieldProps,\n                },\n            } satisfies IInlineGroupFieldProps,\n            inline3: {\n                component: InlineGroupField,\n                fieldsProps: {\n                    field3_1: {component: InputField, label: 'Field3_1', placeholder: 'auto (not set)'} satisfies IInputFieldProps,\n                    field3_2: {component: InputField, label: 'Field3_2', placeholder: '100px', width: '100px'} satisfies IInputFieldProps,\n                    field3_3: {component: CheckboxField, label: 'Field3_3', width:50} satisfies ICheckboxFieldProps,\n                },\n            } satisfies IInlineGroupFieldProps,\n        },\n        buttons: {ok: {position: 'right'}},\n    } satisfies IDFormProps;\n};\n"})})}]})})]});export{a as Page7fb540f223f74cad83cedbd7765e0853,a as default};
