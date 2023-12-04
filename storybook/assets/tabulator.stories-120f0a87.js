import{j as k}from"./useToken-268f632d.js";import{T as E}from"./tabulatorBase-35fae480.js";import"./dayjs.min-bd65d405.js";import{T as l,a as L}from"./tabulator-1212b158.js";import"./index-5819ae2c.js";import"./_commonjsHelpers-de833af9.js";import"./client-36d50ed5.js";import"./index-092ccb3f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./helpersString-59da762c.js";import"./v4-4a60fe23.js";import"./styled-components.browser.esm-11e59584.js";import"./index-e0a25a8d.js";const X={title:"Controls/TabulatorBase",component:E,tags:["autodocs"],parameters:{docs:{}}},a={data:l,columns:L,columnDefaults:{resizable:"header",headerFilter:!0,headerFilterFunc:"like"},height:500,layout:"fitColumns",movableColumns:!0},t={args:{...a}},o={args:{...a,showHeaderFilter:!0,footerElement:k.jsx("div",{children:"My Footer"})}},r={args:{...a,dataTree:!0}},s={args:{...a,footerElement:k.jsx("div",{children:"My Footer"})}},i={args:{...a,height:void 0,pagination:!0,paginationMode:"local",paginationSize:10,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows"}},n={args:{...a,data:void 0,height:void 0,pagination:!0,paginationSize:5,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows",paginationMode:"remote",filterMode:"remote",sortMode:"remote",ajaxURL:"-",ajaxRequestFunc:(W,_,e)=>new Promise(A=>{setTimeout(()=>{const u=(e==null?void 0:e.page)??1,c=(e==null?void 0:e.size)??5,C=Math.ceil(l.length/c),R=l.slice((u-1)*c,u*c);A({data:R,last_page:C})},1e3)}),ajaxParams:{key1:"value1",key2:"value2"}}};var m,g,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var d,h,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    showHeaderFilter: true,
    footerElement: <div>My Footer</div>
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,y,b;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    dataTree: true
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var T,v,z;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    footerElement: <div>My Footer</div>
  }
}`,...(z=(v=s.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var x,F,M;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    height: undefined,
    pagination: true,
    paginationMode: 'local',
    paginationSize: 10,
    paginationSizeSelector: [5, 10, 50, 100],
    paginationCounter: "rows"
  }
}`,...(M=(F=i.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var j,P,w;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    data: undefined,
    height: undefined,
    pagination: true,
    paginationSize: 5,
    paginationSizeSelector: [5, 10, 50, 100],
    paginationCounter: "rows",
    paginationMode: 'remote',
    filterMode: "remote",
    sortMode: 'remote',
    ajaxURL: '-',
    //ajax URL. Workaround: if you need to use your own fetcher (for example Axios), then you must specify any non-empty string
    ajaxRequestFunc: (url, config, params) => {
      return new Promise(resolve => {
        setTimeout(() => {
          //make any remote fetch
          const page = params?.page ?? 1;
          const size = params?.size ?? 5;
          const lastPage = Math.ceil(TabulatorTreeDataset.length / size);
          const dataSet = TabulatorTreeDataset.slice((page - 1) * size, page * size); //remote fetch imitation
          resolve({
            data: dataSet,
            last_page: lastPage
          });
        }, 1000);
      });
    },
    ajaxParams: {
      key1: "value1",
      key2: "value2"
    } //any additional params (you can pass a callback)
  }
}`,...(w=(P=n.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};const Y=["Simple","WithHeaderFilter","Tree","WithFooter","PaginationLocal","PaginationRemote"];export{i as PaginationLocal,n as PaginationRemote,t as Simple,r as Tree,s as WithFooter,o as WithHeaderFilter,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=tabulator.stories-120f0a87.js.map
