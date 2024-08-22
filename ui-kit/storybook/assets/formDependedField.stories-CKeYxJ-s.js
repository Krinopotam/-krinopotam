import{j as u}from"./extends-CKwpSh1k.js";import{D as s}from"./dForm-Da4ufNov.js";import"./index-DGqZ_Opy.js";import"./dayjs.min-BljPK31Q.js";import{I as n}from"./inputField-C_ZL1v2A.js";const i={title:"Dform/Examples/FormDependedFields"},e=()=>{const d={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:n,label:"Поле 1",placeholder:"Введите что-нибудь"},field2:{component:n,label:"Поле 2 (зависит от Поля 1)",placeholder:"Меня не видно, если поле 1 пусто. Введите что-нибудь",dependsOn:["field1"]},field3:{component:n,label:"Поле 3 (зависит от Поля 1 и 2)",placeholder:"Меня не видно, если поля 1 или 2 пусты",dependsOn:["field1","field2"]}},buttons:{ok:{position:"right"}}},l=()=>u.jsxs(u.Fragment,{children:[u.jsx("h1",{children:"Пример формы с зависимыми полями"}),u.jsx("p",{children:"Пока родительское поле не заполнено, зависимые поля скрыты"}),u.jsx("div",{style:{maxWidth:500},children:u.jsx(s,{...d})})]});return u.jsx(l,{})};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const p=["Default"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:p,default:i},Symbol.toStringTag,{value:"Module"}));export{e as D,E as s};
