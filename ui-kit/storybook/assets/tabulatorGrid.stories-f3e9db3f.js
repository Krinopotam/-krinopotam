import{j as A}from"./useToken-a9416e4a.js";import{T as k,a as _}from"./tabulator-4b9dcba5.js";import{T as R}from"./tabulatorGrid-0f16191b.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./tabulatorBase-4bee7925.js";import"./client-3399ac50.js";import"./index-a764d3ff.js";import"./index-092ccb3f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./helpersString-59da762c.js";import"./v4-4a60fe23.js";import"./styled-components.browser.esm-ea02c5fb.js";import"./index-00bf92b7.js";import"./dayjs.min-bd65d405.js";import"./helpersObjects-80970c28.js";import"./compact-item-065385a4.js";import"./assertThisInitialized-8802cfe2.js";import"./index-d6bd501e.js";import"./motion-98dddd30.js";import"./updateModalTheme-8f171516.js";import"./draggableRender-0125ae20.js";import"./InfoCircleOutlined-86235823.js";import"./button-f2d700d6.js";import"./button-34478241.js";import"./index-ffee8d33.js";import"./ExclamationCircleFilled-3771385a.js";import"./context-67ce65ca.js";import"./motion-3729e44c.js";import"./useClosable-fd68c6c6.js";import"./KeyCode-6413d982.js";import"./pickAttrs-a0343510.js";import"./zoom-ad82ed8d.js";import"./PurePanel-ab2d6f85.js";import"./buttonsRow-d7c79a8c.js";import"./Sider-8cb48e9b.js";import"./row-62b547d9.js";import"./roundedArrow-1602316a.js";import"./colors-a767a02d.js";import"./index-9d475cdf.js";import"./QuestionCircleOutlined-4f561e0b.js";import"./index-57bc639f.js";import"./index-b899e8ff.js";import"./index-1ebd326d.js";import"./statusUtils-31e49fff.js";import"./SearchOutlined-cb161250.js";import"./select-08fda9ef.js";import"./datePicker-2eb85503.js";import"./quillEditor-34bb60b6.js";import"./_baseIsEqual-93bb5583.js";import"./iframe-8ee707cb.js";import"../sb-preview/runtime.js";import"./MenuOutlined-d91f7220.js";const Ge={title:"Controls/TabulatorGrid",component:R,tags:["autodocs"],parameters:{docs:{}}},t={dataSet:k,columns:_,columnDefaults:{resizable:"header",headerFilter:!0,headerFilterFunc:"like"},height:500,layout:"fitColumns",movableColumns:!0,onDataFetch:void 0,onDataFetchResponse:void 0},r={args:{...t}},o={args:{...t,showHeaderFilter:!0,footerElement:A.jsx("div",{children:"My Footer"})}},a={args:{...t,dataTree:!0}},i={args:{...t,footerElement:A.jsx("div",{children:"My Footer"})}},n={args:{...t,height:void 0,pagination:!0,paginationMode:"local",paginationSize:10,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows"}},s={args:{...t,dataSet:void 0,height:void 0,pagination:!0,paginationSize:5,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows",paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(e,C)=>new Promise(D=>{setTimeout(()=>{const p=(e==null?void 0:e.page)??1,m=(e==null?void 0:e.size)??C.gridProps.paginationSize??5,j=4,E=k.slice((p-1)*m,p*m);D({data:E,last_page:j})},1e3)}),ajaxParams:{key1:"value1",key2:"value2"}}};var c,d,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
