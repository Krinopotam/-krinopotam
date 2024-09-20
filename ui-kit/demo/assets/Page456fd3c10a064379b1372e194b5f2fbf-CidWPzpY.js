const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-9FGXM8eG.js","assets/default-highlight-_K3mzjfK.js","assets/index-CObHp3AH.js"])))=>i.map(i=>d[i]);
import{j as e,r as t,_ as l,D as s}from"./index-CObHp3AH.js";import{D as n}from"./dForm-DjwSwKfj.js";import{I as i}from"./inputField-CMzynz8s.js";import{D as d}from"./dateTimeField-BkGT7rji.js";import{P as m,C as p,d as a,c as u}from"./darcula-D-n55oql.js";import"./modal-BBQwvlDP.js";import"./DownOutlined-BYejAm0U.js";import"./index-BubinFZA.js";import"./CheckOutlined-ka3l-INf.js";import"./index-Bcx3LFQ2.js";import"./SearchOutlined-DZTAjpNT.js";import"./useIcons-Q8Q6Q-7D.js";const c={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:d,label:"Field1",inlineGroup:"row1",rules:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},field2:{component:i,label:"Field2",inlineGroup:"row1"},field3:{component:i,label:"Field3"},field4:{component:i,label:"Field4"}},onFormValuesChanged:(o,r)=>console.log(`${o} changed:`,r[o]),buttons:{ok:{position:"right"}}},f=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример простой формы с вертикальным расположением подписей полей1"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(n,{...c})})]}),F=t.lazy(()=>l(()=>import("./index-9FGXM8eG.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),T=o=>e.jsxs(m,{children:[e.jsx("div",{children:e.jsx(f,{})}),e.jsx(s,{}),e.jsx("div",{children:e.jsx(p,{items:[{key:1,label:"Show source",children:e.jsx(t.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(F,{language:"tsx",style:o.darkMode?a:u,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {DateTimeField, IDateTimeFieldProps} from @krinopotam/ui-kit/dForm/fields/dateTime/dateTimeField';
const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    //layout:'horizontal',
    fieldsProps: {
        field1: {
            component: DateTimeField,
            label: 'Field1',
            inlineGroup: 'row1',
            rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
        } satisfies IDateTimeFieldProps,
        field2: {component: InputField, label: 'Field2', inlineGroup: 'row1'} satisfies IInputFieldProps,
        field3: {component: InputField, label: 'Field3'} satisfies IInputFieldProps,
        /*        group1: {
                    component:InlineGroupField, fieldsProps: {
                        field1: {component: InputField, label: 'Field1' ,inlineGroup:'row1', rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}]} ,
                        field2: {component: InputField, label: 'Field2',inlineGroup:'row1'},
                    },//label:'group1'
                },*/
        field4: {component: InputField, label: 'Field4'} satisfies IInputFieldProps,
    },
    onFormValuesChanged: (fieldName, values) => console.log(\`\${fieldName} changed:\`, values[fieldName]),
    buttons: {ok: {position: 'right'}},
};
export const NewFormSimple = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`})})}]})})]});export{T as Page456fd3c10a064379b1372e194b5f2fbf,T as default};
