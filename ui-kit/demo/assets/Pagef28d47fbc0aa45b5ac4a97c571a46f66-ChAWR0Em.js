const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D0Dzp33a.js","assets/default-highlight-DQXVbr5l.js","assets/index-DEKOHtjL.js"])))=>i.map(i=>d[i]);
import{r as e,j as o,D as a,_ as r}from"./index-DEKOHtjL.js";import{b as n}from"./buttonsRow-CRmAST--.js";import{D as t}from"./dFormModal-CXclmgf1.js";import{I as s}from"./inputField-CnoVCY_k.js";import{P as i}from"./passwordField-DLeEeMAV.js";import{T as l,a as d}from"./tabulatorData-CxDKwQJ9.js";import{T as m}from"./tabulatorGridField-tADVGxLo.js";import{F as p}from"./buttonsProps-FlsJeWwa.js";import{P as u,C as g}from"./pageLayout-BAEqcME3.js";import{d as c,c as b}from"./darcula-BqMdvqtY.js";import"./isArray-CilX2EC5.js";import"./messageBox-DiSTOwiN.js";import"./index-B4134D_s.js";import"./modal-Ddxw_vMx.js";import"./baseField-C1lQOwhI.js";import"./index-BJ8pwC2Z.js";import"./SearchOutlined-DDbavnRP.js";import"./tabulatorGrid-ueiQSqlo.js";import"./defaultButtonsProps-CTS3EVUl.js";import"./PlusOutlined-DNtPRFLr.js";import"./index-v5l4yKKB.js";const f={},h={formId:"Test form",apiRef:f,confirmChanges:!0,arrowsButtonsSelection:!0,height:500,width:750,fieldsProps:{login:{component:s,label:"Login",rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},table:{component:m,label:"Table",columnDefaults:d,columns:l,defaultValue:[{id:"1",name:"Oli Bob1",age:"12",col:"red",dob:"",rating:1,passed:!1},{id:"2",name:"Mary May1",age:"1",col:"blue",dob:"14/05/1982",rating:2,passed:!1},{id:"3",name:"Christine Kozubowski1",age:"42",col:"green",dob:"22/05/1982",rating:5,passed:!0},{id:"4",name:"Brendon Philips1",age:"125",col:"orange",dob:"01/08/1980",rating:4,passed:!0},{id:"5",name:"Margret Marmalade1",age:"16",col:"yellow",dob:"31/01/1999",rating:3,passed:!0},{id:"6",name:"Oli Bob2",age:"12",col:"red",dob:"",rating:5,passed:!0},{id:"7",name:"Mary May2",age:"1",col:"blue",dob:"14/05/1982",rating:2,passed:!1},{id:"8",name:"Christine Kozubowski2",age:"42",col:"green",dob:"22/05/1982",rating:3,passed:!0},{id:"9",name:"Brendon Philips2",age:"125",col:"orange",dob:"01/08/1980",rating:3,passed:!0},{id:"10",name:"Margret Marmalade2",age:"16",col:"yellow",dob:"31/01/1999",rating:2,passed:!1}],autoHeightResize:!0,rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},password:{component:i,label:"Password",width:50,rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]}},buttons:p(f)},j=()=>{const a=e.useCallback((()=>{f.open("create")}),[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a form with a TabulatorGrid type field with automatic height"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(n,{onClick:a,children:"Open form"}),o.jsx(t,{...h})]})]})},w=e.lazy((()=>r((()=>import("./index-D0Dzp33a.js").then((e=>e.dw))),__vite__mapDeps([0,1,2])).then((e=>({default:e.Prism}))))),y=r=>o.jsxs(u,{children:[o.jsx(j,{}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(g,{items:[{key:1,label:"Show source",children:o.jsx(e.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(w,{language:"tsx",style:r.darkMode?c:b,showLineNumbers:!0,children:"\nimport React, {useCallback} from 'react';\nimport {Button} from @krinopotam/ui-kit/button';\nimport {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';\nimport {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';\nimport {IPasswordFieldProps, PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField';\nimport {TabulatorBaseColumns, TabulatorBaseColumnsDef} from '../../data/tabulatorData';\nimport {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid';\nimport {IGridRowData} from @krinopotam/ui-kit/tabulatorGrid';\nimport {FormLayoutSwitch} from \"../../common/buttonsProps\";\nconst formApi = {} as IDFormModalApi;\nexport const dataSet: IGridRowData[] = [\n    {id: '1', name: 'Oli Bob1', age: '12', col: 'red', dob: '', rating: 1, passed: false},\n    {id: '2', name: 'Mary May1', age: '1', col: 'blue', dob: '14/05/1982', rating: 2, passed: false},\n    {id: '3', name: 'Christine Kozubowski1', age: '42', col: 'green', dob: '22/05/1982', rating: 5, passed: true},\n    {id: '4', name: 'Brendon Philips1', age: '125', col: 'orange', dob: '01/08/1980', rating: 4, passed: true},\n    {id: '5', name: 'Margret Marmalade1', age: '16', col: 'yellow', dob: '31/01/1999', rating: 3, passed: true},\n    {id: '6', name: 'Oli Bob2', age: '12', col: 'red', dob: '', rating: 5, passed: true},\n    {id: '7', name: 'Mary May2', age: '1', col: 'blue', dob: '14/05/1982', rating: 2, passed: false},\n    {id: '8', name: 'Christine Kozubowski2', age: '42', col: 'green', dob: '22/05/1982', rating: 3, passed: true},\n    {id: '9', name: 'Brendon Philips2', age: '125', col: 'orange', dob: '01/08/1980', rating: 3, passed: true},\n    {id: '10', name: 'Margret Marmalade2', age: '16', col: 'yellow', dob: '31/01/1999', rating: 2, passed: false},\n];\nconst formProps: IDFormModalProps = {\n    formId: 'Test form',\n    apiRef: formApi,\n    confirmChanges: true,\n    arrowsButtonsSelection: true,\n    height:500,\n    width:750,\n    fieldsProps: {\n        login: {\n            component: InputField,\n            label: 'Login',\n            rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],\n        } as IInputFieldProps,\n        table: {\n            component: TabulatorGridField,\n            label: 'Table',\n            columnDefaults: TabulatorBaseColumnsDef,\n            columns: TabulatorBaseColumns,\n            defaultValue: dataSet,\n            autoHeightResize: true,\n            rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],\n        } as ITabulatorGridFieldProps,\n        password: {\n            component: PasswordField,\n            label: 'Password',\n            width: 50,\n            rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],\n        } as IPasswordFieldProps,\n    },\n    buttons: FormLayoutSwitch(formApi),\n};\nexport const AutoHeightTabulator = (): React.JSX.Element => {\n    const onClick = useCallback(() => {\n        formApi.open('create');\n    }, []);\n    return (\n        <>\n            <div style={{maxWidth: 500}}>\n                <Button onClick={onClick}>Open form</Button>\n                <DFormModal {...formProps} />\n            </div>\n        </>\n    );\n};\n"})})}]})})]});export{y as Pagef28d47fbc0aa45b5ac4a97c571a46f66,y as default};
