import{j as r}from"./extends-BRD_ACZV.js";import{D as d}from"./dForm-_-iZQyiv.js";import"./dayjs.min-C_f_bfvq.js";import{I as e}from"./inputField-CyShJEKt.js";import"./index-uubelm5h.js";import"./index-DaxZXI7c.js";import"./index-f2g4SNMs.js";import"./compact-item-BeOSZLsy.js";import"./useToken-BDIznhTi.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./index-0oUcX6ux.js";import"./context-O75vn3di.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./pickAttrs-B40rHDqk.js";import"./useVariants-DabNv_YX.js";import"./ContextIsolator-Bneeq0VO.js";import"./index-BwUr6gXK.js";import"./motion-BkNeJ1lN.js";import"./row-DEhRMJcW.js";import"./roundedArrow-oie2LNnU.js";import"./zoom-CJ23mhiy.js";import"./colors-CvqFSB8J.js";import"./QuestionCircleOutlined-B3NJnN9r.js";import"./ExclamationCircleFilled-BtGYKAGo.js";import"./isArray-Cl7xn3Rc.js";import"./mergeButtons-wUAyLRz7.js";import"./button-3n6o8Z5j.js";import"./button-DkKyWrTV.js";import"./index-D62MHgvQ.js";import"./Sider-CDlNlFeD.js";import"./KeyCode-DNlgD2sM.js";import"./DownOutlined-C-j3uwiD.js";import"./getNanoId-DD8laUaD.js";import"./updateModalTheme-CZrPp2TL.js";import"./headerRender-fUZneupX.js";import"./index-rLuHFcUX.js";import"./CloseOutlined-Ch1VG0Li.js";import"./useClosable-BFXERm3r.js";import"./index-D3eZ-H7s.js";import"./InfoCircleOutlined-BjbsVjbL.js";import"./index-DSucG7gu.js";import"./CheckOutlined-UAo7InBl.js";import"./modal-B831m9Lb.js";import"./useIsDebugMode-_qV3LLe4.js";import"./index-BLw3cYKy.js";import"./EyeOutlined-D4mYPtbf.js";import"./SearchOutlined-gONCw02j.js";const er={title:"Dform/Examples/FormDependedFields"},o=()=>{const p={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:e,label:"Поле 1",placeholder:"Введите что-нибудь"},field2:{component:e,label:"Поле 2 (зависит от Поля 1)",placeholder:"Меня не видно, если поле 1 пусто. Введите что-нибудь",dependsOn:["field1"]},field3:{component:e,label:"Поле 3 (зависит от Поля 1 и 2)",placeholder:"Меня не видно, если поля 1 или 2 пусты",dependsOn:["field1","field2"]}},buttons:{ok:{position:"right"}}},m=()=>r.jsxs(r.Fragment,{children:[r.jsx("h1",{children:"Пример формы с зависимыми полями"}),r.jsx("p",{children:"Пока родительское поле не заполнено, зависимые поля скрыты"}),r.jsx("div",{style:{maxWidth:500},children:r.jsx(d,{...p})})]});return r.jsx(m,{})};var t,n,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
