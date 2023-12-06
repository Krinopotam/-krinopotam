import{j as A}from"./useToken-268f632d.js";import{T as k,a as _}from"./tabulator-6aaff015.js";import{T as R}from"./treeSelectFieldRender-0de2af8b.js";import"./index-5819ae2c.js";import"./_commonjsHelpers-de833af9.js";import"./tabulatorBase-50de2949.js";import"./client-36d50ed5.js";import"./index-092ccb3f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./helpersString-59da762c.js";import"./v4-4a60fe23.js";import"./styled-components.browser.esm-11e59584.js";import"./index-e0a25a8d.js";import"./dayjs.min-bd65d405.js";import"./updateModalTheme-3177d112.js";import"./draggableRender-68189bdb.js";import"./InfoCircleOutlined-14b312e0.js";import"./isNativeReflectConstruct-2f1897fe.js";import"./compact-item-e0eb0d02.js";import"./button-11c62e43.js";import"./button-a395f6e7.js";import"./index-ba109c1e.js";import"./ExclamationCircleFilled-8e2dacf4.js";import"./context-acf775e7.js";import"./motion-3729e44c.js";import"./useClosable-7a147c6b.js";import"./useZIndex-9f7c196b.js";import"./KeyCode-6413d982.js";import"./pickAttrs-f49ef707.js";import"./zoom-f1d5320d.js";import"./PurePanel-a66be90d.js";import"./index-53e6b65f.js";import"./buttonsRow-ca0a2aba.js";import"./Sider-f270e7a7.js";import"./row-353874ab.js";import"./roundedArrow-cf08b32b.js";import"./colors-dae18b42.js";import"./DownOutlined-7d62f4d3.js";import"./index-9d475cdf.js";import"./QuestionCircleOutlined-3fb4f056.js";import"./index-15561246.js";import"./index-762b8d87.js";import"./index-47c1009a.js";import"./statusUtils-8e8708fb.js";import"./SearchOutlined-826801c4.js";import"./select-82188730.js";import"./datePicker-280e4e43.js";import"./quillEditor-b0c11980.js";import"./_baseIsEqual-93bb5583.js";import"./iframe-57919a18.js";import"../sb-preview/runtime.js";import"./MenuOutlined-207c5478.js";const _e={title:"Controls/TabulatorGrid",component:R,tags:["autodocs"],parameters:{docs:{}}},t={dataSet:k,columns:_,columnDefaults:{resizable:"header",headerFilter:!0,headerFilterFunc:"like"},height:500,layout:"fitColumns",movableColumns:!0,onDataFetch:void 0,onDataFetchResponse:void 0},r={args:{...t}},a={args:{...t,showHeaderFilter:!0,footerElement:A.jsx("div",{children:"My Footer"})}},o={args:{...t,dataTree:!0}},i={args:{...t,footerElement:A.jsx("div",{children:"My Footer"})}},s={args:{...t,height:void 0,pagination:!0,paginationMode:"local",paginationSize:10,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows"}},n={args:{...t,dataSet:void 0,height:void 0,pagination:!0,paginationSize:5,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows",paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(e,C)=>new Promise(D=>{setTimeout(()=>{const p=(e==null?void 0:e.page)??1,m=(e==null?void 0:e.size)??C.gridProps.paginationSize??5,j=4,E=k.slice((p-1)*m,p*m);D({data:E,last_page:j})},1e3)}),ajaxParams:{key1:"value1",key2:"value2"}}};var c,d,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var l,u,S;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    showHeaderFilter: true,
    footerElement: <div>My Footer</div>
  }
}`,...(S=(u=a.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var h,f,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    dataTree: true
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var z,F,T;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    footerElement: <div>My Footer</div>
  }
}`,...(T=(F=i.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var b,P,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    height: undefined,
    pagination: true,
    paginationMode: 'local',
    paginationSize: 10,
    paginationSizeSelector: [5, 10, 50, 100],
    paginationCounter: "rows"
  }
}`,...(y=(P=s.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var M,w,x;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(x=(w=n.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const Re=["Simple","WithHeaderFilter","Tree","WithFooter","PaginationLocal","PaginationRemote"];export{s as PaginationLocal,n as PaginationRemote,r as Simple,o as Tree,i as WithFooter,a as WithHeaderFilter,Re as __namedExportsOrder,_e as default};
//# sourceMappingURL=tabulatorGrid.stories-3807a54d.js.map
