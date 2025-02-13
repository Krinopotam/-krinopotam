const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D0Dzp33a.js","assets/default-highlight-DQXVbr5l.js","assets/index-DEKOHtjL.js"])))=>i.map(i=>d[i]);
import{W as e,j as o,S as r,a as n,D as s,r as i,_ as t}from"./index-DEKOHtjL.js";import{D as a}from"./isArray-CilX2EC5.js";import{I as l}from"./inputField-CnoVCY_k.js";import{P as d}from"./passwordField-DLeEeMAV.js";import{P as m,C as c}from"./pageLayout-BAEqcME3.js";import{d as p,c as u}from"./darcula-BqMdvqtY.js";import"./buttonsRow-CRmAST--.js";import"./messageBox-DiSTOwiN.js";import"./index-B4134D_s.js";import"./baseField-C1lQOwhI.js";import"./index-BJ8pwC2Z.js";import"./SearchOutlined-DDbavnRP.js";const h=()=>{const[s,i]=e.useState(!1),t=f(s);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of form data submitting"}),o.jsx("p",{children:"To ensure submitting, you need to pass a function to the onSubmit callback that returns a Promise, which, if the server responds successfully (resolve), returns an object like:"}),o.jsx("code",{children:'data:{field_name1: "value", field_name2: "value 2"...}'}),o.jsx("p",{children:"and in case of error (reject):"}),o.jsx("code",{children:"error:{message: string, code: number}"}),o.jsx("p",{children:"For example, the probability of failure when saving is 50%"}),o.jsx("p",{}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(r,{style:{marginBottom:30},children:o.jsx(n,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>i((e=>!e))})}),o.jsx(a,{...t})]})]})},f=e=>({formId:"Test form",layout:e?"horizontal":"vertical",confirmChanges:!0,fieldsProps:{login:{component:l,label:"Login"},password:{component:d,label:"Password"}},onSubmit:()=>new Promise(((e,o)=>{setTimeout((()=>{Math.random()<.5?o({message:"Submit error",code:400}):e({data:{login:"new login",password:"new password"}})}),3e3)})),buttons:{ok:{position:"right"}}}),j=i.lazy((()=>t((()=>import("./index-D0Dzp33a.js").then((e=>e.dw))),__vite__mapDeps([0,1,2])).then((e=>({default:e.Prism}))))),x=e=>o.jsxs(m,{children:[o.jsx(h,{}),o.jsx(s,{}),o.jsx("div",{children:o.jsx(c,{items:[{key:1,label:"Show source",children:o.jsx(i.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(j,{language:"tsx",style:e.darkMode?p:u,showLineNumbers:!0,children:"\nimport React from 'react';\nimport {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';\nimport {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';\nimport {PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField';\nimport {Space, Switch} from 'antd';\nexport const Example = (): React.JSX.Element => {\n    const [horizontal, setHorizontal] = React.useState(false);\n    const formProps = useFormProps(horizontal);\n    return (\n        <>\n            <div style={{maxWidth: 500}}>\n                <Space style={{marginBottom: 30}}>\n                    <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={() => setHorizontal(cur => !cur)} />\n                </Space>\n                <DForm {...formProps} />\n            </div>\n        </>\n    );\n};\nconst useFormProps = (horizontal: boolean) => {\n    return {\n        formId: 'Test form',\n        layout: horizontal ? 'horizontal' : 'vertical',\n        confirmChanges: true,\n        fieldsProps: {\n            login: {component: InputField, label: 'Login'},\n            password: {component: PasswordField, label: 'Password'},\n        },\n        onSubmit: () => {\n            return new Promise((resolve, reject) => {\n                setTimeout(() => {\n                    if (Math.random() < 0.5) reject({message: 'Submit error', code: 400});\n                    else resolve({data: {login: 'new login', password: 'new password'}});\n                }, 3000);\n            });\n        },\n        buttons: {ok: {position: 'right'}},\n    } satisfies IDFormProps;\n};\n"})})}]})})]});export{x as Page5b5539f657f04360894d2d41e5d173d2,x as default};
