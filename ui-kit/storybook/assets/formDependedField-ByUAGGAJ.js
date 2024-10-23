import{j as o}from"./extends-BRD_ACZV.js";import{useMDXComponents as d}from"./index-FeUjBnvO.js";import{ai as a,aj as c,ak as f,al as h}from"./index-ekNJF_KZ.js";import{D as u}from"./dForm-_-iZQyiv.js";import"./dayjs.min-C_f_bfvq.js";import{I as n}from"./inputField-CyShJEKt.js";import"./index-uubelm5h.js";import"./iframe-DiBZRCl0.js";import"../sb-preview/runtime.js";import"./index-DaxZXI7c.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./_baseIsEqual-B0TaGFs9.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./index-f2g4SNMs.js";import"./compact-item-BeOSZLsy.js";import"./useToken-BDIznhTi.js";import"./index-0oUcX6ux.js";import"./context-O75vn3di.js";import"./pickAttrs-B40rHDqk.js";import"./useVariants-DabNv_YX.js";import"./ContextIsolator-Bneeq0VO.js";import"./index-BwUr6gXK.js";import"./motion-BkNeJ1lN.js";import"./row-DEhRMJcW.js";import"./roundedArrow-oie2LNnU.js";import"./zoom-CJ23mhiy.js";import"./colors-CvqFSB8J.js";import"./QuestionCircleOutlined-B3NJnN9r.js";import"./ExclamationCircleFilled-BtGYKAGo.js";import"./isArray-Cl7xn3Rc.js";import"./mergeButtons-wUAyLRz7.js";import"./button-3n6o8Z5j.js";import"./button-DkKyWrTV.js";import"./index-D62MHgvQ.js";import"./Sider-CDlNlFeD.js";import"./KeyCode-DNlgD2sM.js";import"./DownOutlined-C-j3uwiD.js";import"./getNanoId-DD8laUaD.js";import"./updateModalTheme-CZrPp2TL.js";import"./headerRender-fUZneupX.js";import"./index-rLuHFcUX.js";import"./CloseOutlined-Ch1VG0Li.js";import"./useClosable-BFXERm3r.js";import"./index-D3eZ-H7s.js";import"./InfoCircleOutlined-BjbsVjbL.js";import"./index-DSucG7gu.js";import"./CheckOutlined-UAo7InBl.js";import"./modal-B831m9Lb.js";import"./useIsDebugMode-_qV3LLe4.js";import"./index-BLw3cYKy.js";import"./EyeOutlined-D4mYPtbf.js";import"./SearchOutlined-gONCw02j.js";const x={title:"Dform/Examples/FormDependedFields"},t=()=>{const e={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:n,label:"Поле 1",placeholder:"Введите что-нибудь"},field2:{component:n,label:"Поле 2 (зависит от Поля 1)",placeholder:"Меня не видно, если поле 1 пусто. Введите что-нибудь",dependsOn:["field1"]},field3:{component:n,label:"Поле 3 (зависит от Поля 1 и 2)",placeholder:"Меня не видно, если поля 1 или 2 пусты",dependsOn:["field1","field2"]}},buttons:{ok:{position:"right"}}},r=()=>o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Пример формы с зависимыми полями"}),o.jsx("p",{children:"Пока родительское поле не заполнено, зависимые поля скрыты"}),o.jsx("div",{style:{maxWidth:500},children:o.jsx(u,{...e})})]});return o.jsx(r,{})};var p,m,s;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
