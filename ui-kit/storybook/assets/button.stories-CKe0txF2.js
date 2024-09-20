import{j as t}from"./extends-BRD_ACZV.js";import{B as n,S as o,D as k}from"./button-B5xZEXLf.js";import"./index-uubelm5h.js";import"./compact-item-Dm6Ps-bl.js";import"./useToken-yCFB6tRL.js";import"./index-DaxZXI7c.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./button-lOV44FFc.js";import"./index-DmgirUAD.js";const q={title:"Controls/Button",component:n,tags:["autodocs"],parameters:{docs:{}}},v=()=>alert("The button has clicked"),e={onClick:v},s={args:{...e},render:r=>t.jsxs(o,{children:[t.jsx(n,{...r,children:"Button"}),t.jsx(k,{type:"vertical"}),t.jsx(n,{...r,type:"primary",colorType:"info",children:"Button"}),t.jsx(n,{...r,type:"primary",colorType:"success",children:"Button"}),t.jsx(n,{...r,type:"primary",colorType:"warning",children:"Button"}),t.jsx(n,{...r,type:"primary",colorType:"danger",children:"Button"})]})},a={args:{...e},render:r=>t.jsxs(o,{children:[t.jsx(n,{...r,type:"default",children:"Button"}),t.jsx(n,{...r,type:"primary",children:"Button"}),t.jsx(n,{...r,type:"link",children:"Button"}),t.jsx(n,{...r,type:"dashed",children:"Button"}),t.jsx(n,{...r,type:"text",children:"Button"})]})},u={args:{...e},render:r=>t.jsxs(o,{children:[t.jsx(n,{...r,children:"Button"}),t.jsx(n,{...r,disabled:!0,children:"Button"}),t.jsx(n,{...r,loading:!0,children:"Button"}),t.jsx(n,{...r,ghost:!0,children:"Button"})]})},c={args:{...e},render:r=>t.jsxs(o,{children:[t.jsxs(n,{...r,size:"small",children:[" ","Button"," "]}),t.jsxs(n,{...r,size:"middle",children:[" ","Button"," "]}),t.jsxs(n,{...r,size:"large",children:[" ","Button"," "]})]})},p={args:{...e},render:r=>t.jsxs(o,{children:[t.jsx(n,{...r,shape:"default",children:"Button"}),t.jsx(n,{...r,shape:"round",children:"Button"}),t.jsx(n,{...r,shape:"circle",children:"Button"})]})};var B,i,d;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...commonArgs
  },
  render: args => <Space>\r
            <Button {...args}>Button</Button>\r
            <Divider type="vertical"></Divider>\r
            <Button {...args} type="primary" colorType="info">\r
                Button\r
            </Button>\r
            <Button {...args} type="primary" colorType="success">\r
                Button\r
            </Button>\r
            <Button {...args} type="primary" colorType="warning">\r
                Button\r
            </Button>\r
            <Button {...args} type="primary" colorType="danger">\r
                Button\r
            </Button>\r
        </Space>
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,m,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...commonArgs
  },
  render: args => <Space>\r
            <Button {...args} type="default">\r
                Button\r
            </Button>\r
            <Button {...args} type="primary">\r
                Button\r
            </Button>\r
            <Button {...args} type="link">\r
                Button\r
            </Button>\r
            <Button {...args} type="dashed">\r
                Button\r
            </Button>\r
            <Button {...args} type="text">\r
                Button\r
            </Button>\r
        </Space>
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var y,h,x;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...commonArgs
  },
  render: args => <Space>\r
            <Button {...args}>Button</Button>\r
            <Button {...args} disabled>\r
                Button\r
            </Button>\r
            <Button {...args} loading>\r
                Button\r
            </Button>\r
            <Button {...args} ghost>\r
                Button\r
            </Button>\r
        </Space>
}`,...(x=(h=u.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,S,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...commonArgs
  },
  render: args => <Space>\r
            <Button {...args} size="small">\r
                {' '}\r
                Button{' '}\r
            </Button>\r
            <Button {...args} size="middle">\r
                {' '}\r
                Button{' '}\r
            </Button>\r
            <Button {...args} size="large">\r
                {' '}\r
                Button{' '}\r
            </Button>\r
        </Space>
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var f,z,A;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...commonArgs
  },
  render: args => <Space>\r
            <Button {...args} shape="default">\r
                Button\r
            </Button>\r
            <Button {...args} shape="round">\r
                Button\r
            </Button>\r
            <Button {...args} shape="circle">\r
                Button\r
            </Button>\r
        </Space>
}`,...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const F=["ButtonColors","ButtonTypes","ButtonStates","ButtonSizes","ButtonShapes"];export{s as ButtonColors,p as ButtonShapes,c as ButtonSizes,u as ButtonStates,a as ButtonTypes,F as __namedExportsOrder,q as default};
