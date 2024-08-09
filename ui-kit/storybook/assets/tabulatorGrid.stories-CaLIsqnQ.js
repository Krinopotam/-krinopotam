import{j as A}from"./extends-CKwpSh1k.js";import{a as C,b as _}from"./tabulator-B9cYfe78.js";import{T as R}from"./tabulatorGrid-Ba3Q1hza.js";import{f as G}from"./index-BNzM6CSE.js";import"./index-CTjT7uj6.js";import"./client-B7rfcIiV.js";import"./index-Boe84S0F.js";import"./isDebugMode-B-VM_G4X.js";import"./index-DGqZ_Opy.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./helpersString-BLksZHLM.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-7JUZ0eac.js";import"./useToken-DuQNFAH6.js";import"./index-C1vctpir.js";import"./dayjs.min-BljPK31Q.js";import"./helpersObjects-NFjaQN06.js";import"./updateModalTheme-Bz3Tp2K3.js";import"./draggableRender-BoyKbdEU.js";import"./InfoCircleOutlined-B2Jjl6_Y.js";import"./compact-item-B2r7eKHn.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./button-D1pTSzgv.js";import"./button-dqH3xn1c.js";import"./index-DrMe33ah.js";import"./ExclamationCircleFilled-BijZsmvo.js";import"./context-zxaTOXwp.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./motion-D1Ok7SUs.js";import"./motion-4S5rSXvC.js";import"./CloseOutlined-RkEA9oNw.js";import"./KeyCode-DNlgD2sM.js";import"./useClosable-DReJefU5.js";import"./zoom-DgLa7ZOz.js";import"./DownOutlined-dRo7eB-m.js";import"./index-56GSrRrr.js";import"./buttonsRow-CBH5dVpW.js";import"./Sider-C8lbNVsG.js";import"./row-Bz4KYDPc.js";import"./roundedArrow-CdZeBiH2.js";import"./colors-DKxxPweQ.js";import"./index-BRV0Se7Z.js";import"./QuestionCircleOutlined-DItjCDaI.js";import"./index-4vYY965U.js";import"./dFormModal-BStzshBk.js";import"./dForm-BrYUAKUW.js";import"./index-DKKcxpSc.js";import"./useVariants-bMUIY1dl.js";import"./index-BzgAe6ki.js";import"./CheckOutlined-ChgTJtAc.js";import"./iframe-DWITrU6D.js";import"../sb-preview/runtime.js";import"./EyeOutlined-YuvBWI2n.js";import"./iconUtil--KG9isdm.js";import"./List-BvBwYMs3.js";import"./index-Dp8He50A.js";import"./DeleteOutlined-CnGtlBuB.js";import"./MenuOutlined-DbxqBojV.js";import"./index-DuM-I7-B.js";const Ve={title:"Controls/TabulatorGrid",component:R,tags:["autodocs"],parameters:{docs:{}}},t={dataSet:C,columns:_,columnDefaults:{resizable:"header",headerFilter:!0,headerFilterFunc:"like"},height:500,layout:"fitColumns",movableColumns:!0,onDataFetch:void 0,onDataFetchResponse:void 0,onMenuVisibilityChanged:G()},r={args:{...t}},o={args:{...t,showHeaderFilter:!0,footerElement:A.jsx("div",{children:"My Footer"})}},a={args:{...t,dataTree:!0}},i={args:{...t,footerElement:A.jsx("div",{children:"My Footer"})}},n={args:{...t,height:void 0,pagination:!0,paginationMode:"local",paginationSize:10,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows"}},s={args:{...t,dataSet:void 0,height:void 0,pagination:!0,paginationSize:5,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows",paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(e,k)=>new Promise(D=>{setTimeout(()=>{const p=(e==null?void 0:e.page)??1,m=(e==null?void 0:e.size)??k.gridProps.paginationSize??5,j=4,E=C.slice((p-1)*m,p*m);D({data:E,last_page:j})},1e3)}),ajaxParams:{key1:"value1",key2:"value2"}}};var c,d,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
          const size = params?.size ?? gridApi.gridProps.paginationSize ?? 5;
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
