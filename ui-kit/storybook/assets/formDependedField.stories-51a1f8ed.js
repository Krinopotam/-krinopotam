import{j as e}from"./useToken-268f632d.js";import{D as i}from"./treeSelectFieldRender-28877425.js";import"./index-092ccb3f.js";import"./dayjs.min-bd65d405.js";import{I as r}from"./inputField-20a9e418.js";const p={title:"Dform/Examples/FormDependedFields"},n=()=>{const l={formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:r,label:"Поле 1",placeholder:"Введите что-нибудь"},field2:{component:r,label:"Поле 2 (зависит от Поля 1)",placeholder:"Меня не видно, если поле 1 пусто. Введите что-нибудь",dependsOn:["field1"]},field3:{component:r,label:"Поле 3 (зависит от Поля 1 и 2)",placeholder:"Меня не видно, если поля 1 или 2 пусты",dependsOn:["field1","field2"]}},buttons:{ok:{position:"right"}}},s=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример формы с зависимыми полями"}),e.jsx("p",{children:"Пока родительское поле не заполнено, зависимые поля скрыты"}),e.jsx("div",{style:{maxWidth:500},children:e.jsx(i,{...l})})]});return e.jsx(s,{})};var o,t,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(d=(t=n.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};const m=["Default"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{n as D,F as s};
//# sourceMappingURL=formDependedField.stories-51a1f8ed.js.map