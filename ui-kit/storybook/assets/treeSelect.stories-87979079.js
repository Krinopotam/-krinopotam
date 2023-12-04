import{j as o}from"./useToken-268f632d.js";import{b as oe}from"./treeSelectFieldRender-28877425.js";import{C as se}from"./DownOutlined-7d62f4d3.js";import{I as re}from"./inputField-20a9e418.js";import{T as C}from"./treeSelect-1bf9a6c4.js";import{_ as ae}from"./isNativeReflectConstruct-2f1897fe.js";import{r as te}from"./index-5819ae2c.js";import{A as ce}from"./compact-item-e0eb0d02.js";import"./updateModalTheme-6aea8425.js";import"./draggableRender-458e69e5.js";import"./index-e0a25a8d.js";import"./InfoCircleOutlined-14b312e0.js";import"./button-ec5b8345.js";import"./button-a395f6e7.js";import"./index-092ccb3f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_commonjsHelpers-de833af9.js";import"./helpersString-59da762c.js";import"./v4-4a60fe23.js";import"./index-ba109c1e.js";import"./ExclamationCircleFilled-8e2dacf4.js";import"./context-acf775e7.js";import"./motion-3729e44c.js";import"./useClosable-7a147c6b.js";import"./useZIndex-9f7c196b.js";import"./KeyCode-6413d982.js";import"./pickAttrs-f49ef707.js";import"./zoom-f1d5320d.js";import"./PurePanel-a66be90d.js";import"./index-53e6b65f.js";import"./buttonsRow-55ffb0a1.js";import"./Sider-f270e7a7.js";import"./row-353874ab.js";import"./roundedArrow-cf08b32b.js";import"./colors-dae18b42.js";import"./index-9d475cdf.js";import"./QuestionCircleOutlined-3fb4f056.js";import"./index-15561246.js";import"./dayjs.min-bd65d405.js";import"./index-762b8d87.js";import"./index-47c1009a.js";import"./statusUtils-8e8708fb.js";import"./SearchOutlined-826801c4.js";import"./select-cf6df97f.js";import"./tabulatorBase-f6b82542.js";import"./client-36d50ed5.js";import"./styled-components.browser.esm-11e59584.js";import"./datePicker-5bbc1bc4.js";import"./quillEditor-f8546acc.js";import"./_baseIsEqual-93bb5583.js";import"./iframe-5abe4b45.js";import"../sb-preview/runtime.js";import"./MenuOutlined-207c5478.js";var me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};const ie=me;var le=function(r,n){return te.createElement(ce,ae({},r,{ref:n,icon:ie}))};const de=te.forwardRef(le),dr={title:"Controls/TreeSelect",component:oe,tags:["autodocs"],parameters:{docs:{}}},t={dataSet:C,style:{width:400},placeholder:"Select value"},a={args:{...t}},c={args:{...t,allowClear:!0}},m={args:{...t,bordered:!1}},i={args:{...t,disabled:!0}},l={args:{...t,readOnly:!0}},d={args:{...t,value:"03-03-01"}},p={args:{...t,titleRender:e=>o.jsxs(o.Fragment,{children:[e.title,o.jsx("br",{}),o.jsxs("small",{style:{color:"#808080"},children:[o.jsx(de,{})," "," "+e.head]})]}),labelRender:e=>o.jsxs(o.Fragment,{children:[e.title," ",o.jsx("small",{style:{color:"#808080"},children:" ("+e.head+")"})]}),filterTreeNode:(e,r)=>(r.title+" ("+r.head+")").toLowerCase().indexOf(e.toLowerCase())>=0}},u={args:{...t,fetchMode:"onUse",noCacheFetchedData:!0,onDataFetch:()=>new Promise((e,r)=>{setTimeout(()=>{Math.random()<0?r({message:"Ошибка загрузки данных",code:400}):e({data:C})},2e3)})}},ne=(e,r)=>{var D;const n=[];let S=[];for(const s of e){const b=se(s);if(s.children&&s.children.length>0&&(S=ne(s.children,r)),S.length>0){b.children=S,n.push(b);continue}const A=(D=s.title)==null?void 0:D.toString().toLowerCase().indexOf(r.toLowerCase());typeof A<"u"&&A>=0&&n.push(b)}return n},g={args:{...t,fetchMode:"onUse",noCacheFetchedData:!0,minSearchLength:1,onDataFetch:e=>new Promise(r=>{setTimeout(()=>{const n=ne(C,e);r({data:n})},1e3)})}},h={args:{...t,confirmDelete:!0,editFormProps:{confirmChanges:!0,bodyHeight:100,fieldsProps:{title:{component:re,label:"Department"}}}}},f={args:{...t,confirmDelete:!0,onDelete:()=>new Promise((e,r)=>{setTimeout(()=>{Math.random()<.1?r({message:"Ошибка удаления строк",code:400}):e({data:{result:"OK"}})},2e3)}),editFormProps:{confirmChanges:!0,bodyHeight:100,onSubmit:e=>new Promise((r,n)=>{setTimeout(()=>{Math.random()<.3?n({message:"Ошибка сохранения",code:400}):r({data:e})},3e3)}),fieldsProps:{title:{component:re,label:"Department"}}}}};var w,y,v;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...commonArgs
  }
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var F,T,x;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true
  }
}`,...(x=(T=c.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var O,P,j;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    bordered: false
  }
}`,...(j=(P=m.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var N,M,R;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    disabled: true
  }
}`,...(R=(M=i.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var U,I,E;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    readOnly: true
  }
}`,...(E=(I=l.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var L,_,H;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    value: '03-03-01'
  }
}`,...(H=(_=d.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var V,B,z;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    /** node title render */
    titleRender: (treeNode: ITreeSelectNode) => {
      return <>\r
                    {treeNode.title}\r
                    <br />\r
                    <small style={{
          color: '#808080'
        }}><UserOutlined /> {' ' + treeNode.head}</small>\r
                </>;
    },
    /** selected value render */
    labelRender: (treeNode: ITreeSelectNode) => {
      return <>\r
                    {treeNode.title} <small style={{
          color: '#808080'
        }}>{' (' + treeNode.head + ')'}</small>\r
                </>;
    },
    /** custom filter */
    filterTreeNode: (inputValue: string, treeNode: ITreeSelectNode) => {
      const nodeString = (treeNode.title + ' (' + treeNode.head + ')').toLowerCase();
      return nodeString.indexOf(inputValue.toLowerCase()) >= 0;
    }
  }
}`,...(z=(B=p.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var K,$,k;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    fetchMode: 'onUse',
    noCacheFetchedData: true,
    onDataFetch: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.0) reject({
            message: 'Ошибка загрузки данных',
            code: 400
          });else resolve({
            data: TreeSelectDataSet
          });
        }, 2000);
      });
    }
  }
}`,...(k=($=u.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var q,G,J;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    fetchMode: 'onUse',
    noCacheFetchedData: true,
    minSearchLength: 1,
    onDataFetch: (search: string) => {
      return new Promise(resolve => {
        setTimeout(() => {
          const result = filterDataSet(TreeSelectDataSet, search);
          resolve({
            data: result
          });
        }, 1000);
      });
    }
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,W,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    confirmDelete: true,
    editFormProps: {
      confirmChanges: true,
      bodyHeight: 100,
      fieldsProps: {
        title: {
          component: InputField,
          label: 'Department'
        }
      }
    }
  }
}`,...(X=(W=h.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    confirmDelete: true,
    onDelete: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.1) reject({
            message: 'Ошибка удаления строк',
            code: 400
          });else resolve({
            data: {
              result: 'OK'
            }
          });
        }, 2000);
      });
    },
    editFormProps: {
      confirmChanges: true,
      bodyHeight: 100,
      onSubmit: (values: Record<string, unknown>) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (Math.random() < 0.3) reject({
              message: 'Ошибка сохранения',
              code: 400
            });else resolve({
              data: values
            });
          }, 3000);
        });
      },
      fieldsProps: {
        title: {
          component: InputField,
          label: 'Department'
        }
      }
    }
  }
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const pr=["Simple","AllowClear","NoBorder","Disabled","ReadOnly","DefaultValue","CustomRenders","AsyncFetch","AsyncSearch","Editable","EditableAsync"];export{c as AllowClear,u as AsyncFetch,g as AsyncSearch,p as CustomRenders,d as DefaultValue,i as Disabled,h as Editable,f as EditableAsync,m as NoBorder,l as ReadOnly,a as Simple,pr as __namedExportsOrder,dr as default};
//# sourceMappingURL=treeSelect.stories-87979079.js.map
