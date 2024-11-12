import{j as r}from"./extends-BRD_ACZV.js";import{D as d}from"./dForm-MbnOLRa1.js";import"./dayjs.min-C_f_bfvq.js";import{I as e}from"./inputField-_pj4E9Sf.js";import"./index-uubelm5h.js";import"./isArray-Cl7xn3Rc.js";import"./index-DaxZXI7c.js";import"./index-RRW4sUgR.js";import"./compact-item-IaHZmqF4.js";import"./useToken--rxRg63T.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./index-C9GPWzHg.js";import"./context-CrsU2UZX.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./pickAttrs-Ceb8JkZg.js";import"./useVariants-BCbWTJhT.js";import"./ContextIsolator-DTA0rjn8.js";import"./index-CSZa4169.js";import"./motion-WmxowxVV.js";import"./row-R-nZpFec.js";import"./roundedArrow-Cy_VYcsu.js";import"./zoom-CqB_wpkX.js";import"./colors-g_WWN96I.js";import"./QuestionCircleOutlined-BwsbN9TT.js";import"./ExclamationCircleFilled-rOw3n2gg.js";import"./buttonsRow-B0FOr-SK.js";import"./button-Iix8LbRU.js";import"./button-DvzT6zDE.js";import"./index-CB3XXCqd.js";import"./Sider-CY9JNDYe.js";import"./KeyCode-DNlgD2sM.js";import"./DownOutlined-J6zIsiwY.js";import"./getNanoId-DD8laUaD.js";import"./updateModalTheme-iOjsqUQ8.js";import"./headerRender-ClL5xlLQ.js";import"./index-WZmxnzc0.js";import"./CloseOutlined-xuSWusRf.js";import"./useClosable-DmZ-8Q3E.js";import"./index-D3eZ-H7s.js";import"./InfoCircleOutlined-rgXyzvM4.js";import"./index-0axGYSbf.js";import"./CheckOutlined-ih17Bwkf.js";import"./modal-BqajnxR4.js";import"./useIsDebugMode-_qV3LLe4.js";import"./index-BW1QLlIf.js";import"./EyeOutlined-BMhVa8fk.js";import"./SearchOutlined-D2kGcJ7L.js";const er={title:"Dform/Examples/FormDependedFields"},o=()=>{const p={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:e,label:"Поле 1",placeholder:"Введите что-нибудь"},field2:{component:e,label:"Поле 2 (зависит от Поля 1)",placeholder:"Меня не видно, если поле 1 пусто. Введите что-нибудь",dependsOn:["field1"]},field3:{component:e,label:"Поле 3 (зависит от Поля 1 и 2)",placeholder:"Меня не видно, если поля 1 или 2 пусты",dependsOn:["field1","field2"]}},buttons:{ok:{position:"right"}}},m=()=>r.jsxs(r.Fragment,{children:[r.jsx("h1",{children:"Пример формы с зависимыми полями"}),r.jsx("p",{children:"Пока родительское поле не заполнено, зависимые поля скрыты"}),r.jsx("div",{style:{maxWidth:500},children:r.jsx(d,{...p})})]});return r.jsx(m,{})};var t,n,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const tr=["Default"];export{o as Default,tr as __namedExportsOrder,er as default};
