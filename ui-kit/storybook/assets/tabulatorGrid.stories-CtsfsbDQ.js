import{j as A}from"./extends-BRD_ACZV.js";import{a as C,b as _}from"./tabulator-BlOPPHQc.js";import{T as R}from"./tabulatorGrid-CnnRNOQx.js";import{f as G}from"./index-C_FWhylE.js";import"./index-uubelm5h.js";import"./client-DRrwG7oJ.js";import"./index-DaxZXI7c.js";import"./isArray-Cl7xn3Rc.js";import"./useIsDebugMode-_qV3LLe4.js";import"./getNanoId-DD8laUaD.js";import"./styled-components.browser.esm-CfkHM83v.js";import"./index-CB3XXCqd.js";import"./useToken--rxRg63T.js";import"./dayjs.min-C_f_bfvq.js";import"./dForm-MbnOLRa1.js";import"./index-RRW4sUgR.js";import"./compact-item-IaHZmqF4.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./index-C9GPWzHg.js";import"./context-CrsU2UZX.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./pickAttrs-Ceb8JkZg.js";import"./useVariants-BCbWTJhT.js";import"./ContextIsolator-DTA0rjn8.js";import"./index-CSZa4169.js";import"./motion-WmxowxVV.js";import"./row-R-nZpFec.js";import"./roundedArrow-Cy_VYcsu.js";import"./zoom-CqB_wpkX.js";import"./colors-g_WWN96I.js";import"./QuestionCircleOutlined-BwsbN9TT.js";import"./ExclamationCircleFilled-rOw3n2gg.js";import"./buttonsRow-B0FOr-SK.js";import"./button-Iix8LbRU.js";import"./button-DvzT6zDE.js";import"./Sider-CY9JNDYe.js";import"./KeyCode-DNlgD2sM.js";import"./DownOutlined-J6zIsiwY.js";import"./updateModalTheme-iOjsqUQ8.js";import"./headerRender-ClL5xlLQ.js";import"./index-WZmxnzc0.js";import"./CloseOutlined-xuSWusRf.js";import"./useClosable-DmZ-8Q3E.js";import"./index-D3eZ-H7s.js";import"./InfoCircleOutlined-rgXyzvM4.js";import"./index-0axGYSbf.js";import"./CheckOutlined-ih17Bwkf.js";import"./modal-BqajnxR4.js";import"./dFormModal-BL1iNji6.js";import"./splitObject-C6hVKqbV.js";import"./defaultButtonsProps-BT9gFo-1.js";import"./List-CGXtmGvj.js";import"./index-Qnib9L3W.js";import"./v4-CQkTLCs1.js";import"./EyeOutlined-BMhVa8fk.js";import"./DeleteOutlined-DQ0x09xk.js";import"./iframe-DDWVRJbR.js";import"../sb-preview/runtime.js";import"./MenuOutlined-CG6u8Ts7.js";const Ve={title:"Controls/TabulatorGrid",component:R,tags:["autodocs"],parameters:{docs:{}}},t={dataSet:C,columns:_,columnDefaults:{resizable:"header",headerFilter:!0,headerFilterFunc:"like"},height:500,layout:"fitColumns",movableColumns:!0,onDataFetch:void 0,onDataFetchResponse:void 0,onMenuVisibilityChanged:G()},r={args:{...t}},o={args:{...t,showHeaderFilter:!0,footerElement:A.jsx("div",{children:"My Footer"})}},a={args:{...t,dataTree:!0}},i={args:{...t,footerElement:A.jsx("div",{children:"My Footer"})}},n={args:{...t,height:void 0,pagination:!0,paginationMode:"local",paginationSize:10,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows"}},s={args:{...t,dataSet:void 0,height:void 0,pagination:!0,paginationSize:5,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows",paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(e,k)=>new Promise(D=>{setTimeout(()=>{const p=(e==null?void 0:e.page)??1,m=(e==null?void 0:e.size)??k.getProps().paginationSize??5,j=4,E=C.slice((p-1)*m,p*m);D({data:E,last_page:j})},1e3)}),ajaxParams:{key1:"value1",key2:"value2"}}};var c,d,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var l,u,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    showHeaderFilter: true,
    footerElement: <div>My Footer</div>
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var S,f,v;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    dataTree: true
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,z,F;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    footerElement: <div>My Footer</div>
  }
}`,...(F=(z=i.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var T,y,P;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    height: undefined,
    pagination: true,
    paginationMode: 'local',
    paginationSize: 10,
    paginationSizeSelector: [5, 10, 50, 100],
    paginationCounter: 'rows'
  }
}`,...(P=(y=n.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var M,w,x;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    dataSet: undefined,
    height: undefined,
    pagination: true,
    paginationSize: 5,
    paginationSizeSelector: [5, 10, 50, 100],
    paginationCounter: 'rows',
    paginationMode: 'remote',
    filterMode: 'remote',
    sortMode: 'remote',
    onDataFetch: (params, gridApi) => {
      return new Promise(resolve => {
        setTimeout(() => {
          //make any remote fetch
          const page = params?.page ?? 1;
          const size = params?.size ?? gridApi.getProps().paginationSize ?? 5;
          const lastPage = 4;
          const dataSet = TabulatorTreeDataset.slice((page - 1) * size, page * size); //remote fetch imitation
          resolve({
            data: dataSet,
            last_page: lastPage
          });
        }, 1000);
      });
    },
    /*        ajaxRequestFunc: (url, config, params) => {\r
        return new Promise((resolve) => {\r
            setTimeout(() => {\r
                //make any remote fetch\r
                const dataSet = TabulatorTreeDataset.slice((params.page - 1) * params.size, params.page * params.size); //remote fetch imitation\r
                resolve({data: dataSet, last_page: 4})\r
            }, 1000)\r
        })\r
    },*/
    ajaxParams: {
      key1: 'value1',
      key2: 'value2'
    } //any additional params (you can pass a callback)
  }
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const Be=["Simple","WithHeaderFilter","Tree","WithFooter","PaginationLocal","PaginationRemote"];export{n as PaginationLocal,s as PaginationRemote,r as Simple,a as Tree,i as WithFooter,o as WithHeaderFilter,Be as __namedExportsOrder,Ve as default};
