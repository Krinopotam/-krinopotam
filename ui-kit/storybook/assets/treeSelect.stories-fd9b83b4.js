import{j as n}from"./useToken-a9416e4a.js";import{b as ne}from"./tabulatorGrid-0f16191b.js";import{C as se}from"./helpersObjects-80970c28.js";import{I as re}from"./inputField-95641417.js";import{T as A}from"./treeSelect-1bf9a6c4.js";import{_ as ae}from"./extends-98964cd2.js";import{r as te}from"./index-76fb7be0.js";import{A as ce}from"./compact-item-065385a4.js";import"./helpersString-59da762c.js";import"./v4-4a60fe23.js";import"./_commonjsHelpers-de833af9.js";import"./updateModalTheme-8f171516.js";import"./draggableRender-0125ae20.js";import"./index-00bf92b7.js";import"./InfoCircleOutlined-86235823.js";import"./button-f2d700d6.js";import"./button-34478241.js";import"./index-092ccb3f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-ffee8d33.js";import"./ExclamationCircleFilled-3771385a.js";import"./context-67ce65ca.js";import"./assertThisInitialized-8802cfe2.js";import"./motion-98dddd30.js";import"./index-a764d3ff.js";import"./motion-3729e44c.js";import"./useClosable-fd68c6c6.js";import"./KeyCode-6413d982.js";import"./pickAttrs-a0343510.js";import"./zoom-ad82ed8d.js";import"./PurePanel-ab2d6f85.js";import"./index-d6bd501e.js";import"./buttonsRow-d7c79a8c.js";import"./Sider-8cb48e9b.js";import"./row-62b547d9.js";import"./roundedArrow-1602316a.js";import"./colors-a767a02d.js";import"./index-9d475cdf.js";import"./QuestionCircleOutlined-4f561e0b.js";import"./index-57bc639f.js";import"./tabulatorBase-4bee7925.js";import"./client-3399ac50.js";import"./styled-components.browser.esm-ea02c5fb.js";import"./dayjs.min-bd65d405.js";import"./index-b899e8ff.js";import"./index-1ebd326d.js";import"./statusUtils-31e49fff.js";import"./SearchOutlined-cb161250.js";import"./select-08fda9ef.js";import"./datePicker-2eb85503.js";import"./quillEditor-34bb60b6.js";import"./_baseIsEqual-93bb5583.js";import"./iframe-8ee707cb.js";import"../sb-preview/runtime.js";import"./MenuOutlined-d91f7220.js";var me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};const ie=me;var le=function(r,o){return te.createElement(ce,ae({},r,{ref:o,icon:ie}))};const ue=te.forwardRef(le),pr={title:"Controls/TreeSelect",component:ne,tags:["autodocs"],parameters:{docs:{}}},t={dataSet:A,style:{width:400},placeholder:"Select value"},a={args:{...t}},c={args:{...t,allowClear:!0}},m={args:{...t,bordered:!1}},i={args:{...t,disabled:!0}},l={args:{...t,readOnly:!0}},u={args:{...t,value:"03-03-01"}},d={args:{...t,titleRender:e=>n.jsxs(n.Fragment,{children:[e.title,n.jsx("br",{}),n.jsxs("small",{style:{color:"#808080"},children:[n.jsx(ue,{})," "," "+e.head]})]}),labelRender:e=>n.jsxs(n.Fragment,{children:[e.title," ",n.jsx("small",{style:{color:"#808080"},children:" ("+e.head+")"})]}),filterTreeNode:(e,r)=>(r.title+" ("+r.head+")").toLowerCase().indexOf(e.toLowerCase())>=0}},p={args:{...t,fetchMode:"onUse",noCacheFetchedData:!0,onDataFetch:()=>new Promise((e,r)=>{setTimeout(()=>{Math.random()<0?r({message:"Ошибка загрузки данных",code:400}):e({data:A})},2e3)})}},oe=(e,r)=>{var b;const o=[];let S=[];for(const s of e){const D=se(s);if(s.children&&s.children.length>0&&(S=oe(s.children,r)),S.length>0){D.children=S,o.push(D);continue}const C=(b=s.title)==null?void 0:b.toString().toLowerCase().indexOf(r.toLowerCase());typeof C<"u"&&C>=0&&o.push(D)}return o},g={args:{...t,fetchMode:"onUse",noCacheFetchedData:!0,minSearchLength:1,onDataFetch:e=>new Promise(r=>{setTimeout(()=>{const o=oe(A,e);r({data:o})},1e3)})}},h={args:{...t,confirmDelete:!0,editFormProps:{confirmChanges:!0,bodyHeight:100,fieldsProps:{title:{component:re,label:"Department"}}}}},f={args:{...t,confirmDelete:!0,onDelete:()=>new Promise((e,r)=>{setTimeout(()=>{Math.random()<.1?r({message:"Ошибка удаления строк",code:400}):e({data:{result:"OK"}})},2e3)}),editFormProps:{confirmChanges:!0,bodyHeight:100,onSubmit:e=>new Promise((r,o)=>{setTimeout(()=>{Math.random()<.3?o({message:"Ошибка сохранения",code:400}):r({data:e})},3e3)}),fieldsProps:{title:{component:re,label:"Department"}}}}};var w,F,y;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...commonArgs
  }
}`,...(y=(F=a.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};var v,T,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true
  }
}`,...(x=(T=c.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var O,P,j;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    bordered: false
  }
}`,...(j=(P=m.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var E,N,M;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    disabled: true
  }
}`,...(M=(N=i.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var R,U,I;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    readOnly: true
  }
}`,...(I=(U=l.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var L,B,_;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    value: '03-03-01'
  }
}`,...(_=(B=u.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var H,V,z;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(z=(V=d.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var K,$,k;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(k=($=p.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var q,G,J;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const gr=["Simple","AllowClear","NoBorder","Disabled","ReadOnly","DefaultValue","CustomRenders","AsyncFetch","AsyncSearch","Editable","EditableAsync"];export{c as AllowClear,p as AsyncFetch,g as AsyncSearch,d as CustomRenders,u as DefaultValue,i as Disabled,h as Editable,f as EditableAsync,m as NoBorder,l as ReadOnly,a as Simple,gr as __namedExportsOrder,pr as default};
