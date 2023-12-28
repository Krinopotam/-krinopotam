import{j as A}from"./useToken-b19ab62a.js";import{T as k,a as _}from"./tabulator-c8d1c5f9.js";import{T as R}from"./tabulatorGrid-e0bda04d.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./tabulatorBase-55a14ce2.js";import"./client-3399ac50.js";import"./index-a764d3ff.js";import"./index-092ccb3f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./helpersString-59da762c.js";import"./v4-4a60fe23.js";import"./styled-components.browser.esm-af1ba35b.js";import"./index-84136495.js";import"./dayjs.min-bd65d405.js";import"./helpersObjects-335d2932.js";import"./compact-item-153ccf6f.js";import"./assertThisInitialized-8802cfe2.js";import"./index-6ed6bb17.js";import"./motion-a9f81d2c.js";import"./updateModalTheme-425bc3b2.js";import"./draggableRender-817e2d38.js";import"./InfoCircleOutlined-b0bd8909.js";import"./button-13ccc7ad.js";import"./button-3e1cd756.js";import"./index-b1d11547.js";import"./ExclamationCircleFilled-cf151277.js";import"./context-5a13208d.js";import"./motion-3729e44c.js";import"./useClosable-bab051fc.js";import"./KeyCode-6413d982.js";import"./pickAttrs-f83e05d3.js";import"./zoom-faeb00d0.js";import"./PurePanel-71bfc635.js";import"./buttonsRow-f20d8f58.js";import"./Sider-ab22ad9d.js";import"./row-1394a33e.js";import"./roundedArrow-d75250bf.js";import"./colors-91786050.js";import"./index-9d475cdf.js";import"./QuestionCircleOutlined-41527efc.js";import"./index-e792aa35.js";import"./index-89674408.js";import"./index-26e00ff7.js";import"./statusUtils-fe2ccc25.js";import"./SearchOutlined-2078d1e8.js";import"./select-682fa1e1.js";import"./datePicker-b41297a7.js";import"./quillEditor-7c013428.js";import"./_baseIsEqual-66ace112.js";import"./iframe-b9fc7715.js";import"../sb-preview/runtime.js";import"./MenuOutlined-d7aaaba5.js";const Ge={title:"Controls/TabulatorGrid",component:R,tags:["autodocs"],parameters:{docs:{}}},t={dataSet:k,columns:_,columnDefaults:{resizable:"header",headerFilter:!0,headerFilterFunc:"like"},height:500,layout:"fitColumns",movableColumns:!0,onDataFetch:void 0,onDataFetchResponse:void 0},r={args:{...t}},o={args:{...t,showHeaderFilter:!0,footerElement:A.jsx("div",{children:"My Footer"})}},a={args:{...t,dataTree:!0}},i={args:{...t,footerElement:A.jsx("div",{children:"My Footer"})}},n={args:{...t,height:void 0,pagination:!0,paginationMode:"local",paginationSize:10,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows"}},s={args:{...t,dataSet:void 0,height:void 0,pagination:!0,paginationSize:5,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows",paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(e,C)=>new Promise(D=>{setTimeout(()=>{const p=(e==null?void 0:e.page)??1,m=(e==null?void 0:e.size)??C.gridProps.paginationSize??5,j=4,E=k.slice((p-1)*m,p*m);D({data:E,last_page:j})},1e3)}),ajaxParams:{key1:"value1",key2:"value2"}}};var c,d,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var l,u,S;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    showHeaderFilter: true,
    footerElement: <div>My Footer</div>
  }
}`,...(S=(u=o.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var h,f,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    dataTree: true
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var z,F,T;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    footerElement: <div>My Footer</div>
  }
}`,...(T=(F=i.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var b,P,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    height: undefined,
    pagination: true,
    paginationMode: 'local',
    paginationSize: 10,
    paginationSizeSelector: [5, 10, 50, 100],
    paginationCounter: "rows"
  }
}`,...(y=(P=n.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var M,w,x;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    dataSet: undefined,
    height: undefined,
    pagination: true,
    paginationSize: 5,
    paginationSizeSelector: [5, 10, 50, 100],
    paginationCounter: "rows",
    paginationMode: 'remote',
    filterMode: "remote",
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
      key1: "value1",
      key2: "value2"
    } //any additional params (you can pass a callback)
  }
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const He=["Simple","WithHeaderFilter","Tree","WithFooter","PaginationLocal","PaginationRemote"];export{n as PaginationLocal,s as PaginationRemote,r as Simple,a as Tree,i as WithFooter,o as WithHeaderFilter,He as __namedExportsOrder,Ge as default};
