import{j as o}from"./extends-BRD_ACZV.js";import{useMDXComponents as d}from"./index-FeUjBnvO.js";import{ai as a,aj as c,ak as f,al as h}from"./index-UJBCcwh9.js";import{D as u}from"./dForm-MbnOLRa1.js";import"./dayjs.min-C_f_bfvq.js";import{I as n}from"./inputField-_pj4E9Sf.js";import"./index-uubelm5h.js";import"./iframe-DDWVRJbR.js";import"../sb-preview/runtime.js";import"./index-DaxZXI7c.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./_baseIsEqual-B0TaGFs9.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./isArray-Cl7xn3Rc.js";import"./index-RRW4sUgR.js";import"./compact-item-IaHZmqF4.js";import"./useToken--rxRg63T.js";import"./index-C9GPWzHg.js";import"./context-CrsU2UZX.js";import"./pickAttrs-Ceb8JkZg.js";import"./useVariants-BCbWTJhT.js";import"./ContextIsolator-DTA0rjn8.js";import"./index-CSZa4169.js";import"./motion-WmxowxVV.js";import"./row-R-nZpFec.js";import"./roundedArrow-Cy_VYcsu.js";import"./zoom-CqB_wpkX.js";import"./colors-g_WWN96I.js";import"./QuestionCircleOutlined-BwsbN9TT.js";import"./ExclamationCircleFilled-rOw3n2gg.js";import"./buttonsRow-B0FOr-SK.js";import"./button-Iix8LbRU.js";import"./button-DvzT6zDE.js";import"./index-CB3XXCqd.js";import"./Sider-CY9JNDYe.js";import"./KeyCode-DNlgD2sM.js";import"./DownOutlined-J6zIsiwY.js";import"./getNanoId-DD8laUaD.js";import"./updateModalTheme-iOjsqUQ8.js";import"./headerRender-ClL5xlLQ.js";import"./index-WZmxnzc0.js";import"./CloseOutlined-xuSWusRf.js";import"./useClosable-DmZ-8Q3E.js";import"./index-D3eZ-H7s.js";import"./InfoCircleOutlined-rgXyzvM4.js";import"./index-0axGYSbf.js";import"./CheckOutlined-ih17Bwkf.js";import"./modal-BqajnxR4.js";import"./useIsDebugMode-_qV3LLe4.js";import"./index-BW1QLlIf.js";import"./EyeOutlined-BMhVa8fk.js";import"./SearchOutlined-D2kGcJ7L.js";const x={title:"Dform/Examples/FormDependedFields"},t=()=>{const e={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:n,label:"Поле 1",placeholder:"Введите что-нибудь"},field2:{component:n,label:"Поле 2 (зависит от Поля 1)",placeholder:"Меня не видно, если поле 1 пусто. Введите что-нибудь",dependsOn:["field1"]},field3:{component:n,label:"Поле 3 (зависит от Поля 1 и 2)",placeholder:"Меня не видно, если поля 1 или 2 пусты",dependsOn:["field1","field2"]}},buttons:{ok:{position:"right"}}},r=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример формы с зависимыми полями"}),o.jsx("p",{children:"Пока родительское поле не заполнено, зависимые поля скрыты"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(u,{...e})})]});return o.jsx(r,{})};var p,m,s;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
      field1: {
        component: InputField,
        label: 'Поле 1',
        placeholder: 'Введите что-нибудь'
      },
      field2: {
        component: InputField,
        label: 'Поле 2 (зависит от Поля 1)',
        placeholder: 'Меня не видно, если поле 1 пусто. Введите что-нибудь',
        dependsOn: ['field1']
      },
      field3: {
        component: InputField,
        label: 'Поле 3 (зависит от Поля 1 и 2)',
        placeholder: 'Меня не видно, если поля 1 или 2 пусты',
        dependsOn: ['field1', 'field2']
      }
    },
    buttons: {
      ok: {
        position: 'right'
      }
    }
  };
  const FormDependedField = (): React.JSX.Element => {
    return <>\r
                {/*Description Start*/}\r
                <h1>Пример формы с зависимыми полями</h1>\r
                <p>Пока родительское поле не заполнено, зависимые поля скрыты</p>\r
                {/*Description End*/}\r
                <div style={{
        maxWidth: 500
      }}>\r
                    <DForm {...formProps} />\r
                </div>\r
            </>;
  };
  return <FormDependedField />;
}`,...(s=(m=t.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const j=["Default"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));function i(e){const r={h1:"h1",p:"p",...d(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:F}),`
`,o.jsx(r.h1,{id:"checkbox",children:"Checkbox"}),`
`,o.jsx(r.p,{children:"A checkbox is a square box that can be activated or deactivated when ticked."}),`
`,o.jsx(r.p,{children:"Use checkboxes to select one or more options from a list of choices."}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(f,{of:t}),`
`,o.jsx(h,{of:t,type:"code",language:"tsx",dark:!0,transform:l=>l.replace(/(\(\) => {)([\s\S]*)(return <[\s\S]*\n})/gm,"$2")})]})}function ko(e={}){const{wrapper:r}={...d(),...e.components};return r?o.jsx(r,{...e,children:o.jsx(i,{...e})}):i(e)}export{ko as default};
