import{j as o}from"./useToken-268f632d.js";import{F as e,I as t}from"./index-762b8d87.js";import{I as l}from"./InfoCircleOutlined-14b312e0.js";import"./index-5819ae2c.js";import"./_commonjsHelpers-de833af9.js";import"./compact-item-e0eb0d02.js";import"./isNativeReflectConstruct-2f1897fe.js";import"./context-acf775e7.js";import"./index-47c1009a.js";import"./index-53e6b65f.js";import"./useZIndex-9f7c196b.js";import"./statusUtils-8e8708fb.js";import"./SearchOutlined-826801c4.js";import"./button-a395f6e7.js";import"./motion-3729e44c.js";import"./zoom-f1d5320d.js";import"./row-353874ab.js";import"./roundedArrow-cf08b32b.js";import"./colors-dae18b42.js";import"./QuestionCircleOutlined-3fb4f056.js";import"./ExclamationCircleFilled-8e2dacf4.js";const n=()=>o.jsxs(e,{layout:"horizontal",children:[o.jsx(e.Item,{label:"Field A",required:!0,tooltip:"This is a required field",children:o.jsx(t,{placeholder:"input placeholder"})}),o.jsx(e.Item,{label:"Field B",tooltip:{title:"Tooltip with customize icon",icon:o.jsx(l,{})},children:o.jsx(t,{placeholder:"input placeholder"})})]}),m=n;try{antd.displayName="antd",antd.__docgenInfo={description:"",displayName:"antd",props:{}}}catch{}const B={title:"DForm/Examples/Antd",component:m,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React, { useState } from 'react';
                    import { InfoCircleOutlined } from '@ant-design/icons';
                    import { Button, Form, Input, Radio, Tag } from 'antd';
                    type RequiredMark = boolean | 'optional' | 'customize';
                    const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
                        <>
                            {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
                            {label}
                        </>
                    );
                    const App: React.FC = () => {
                        return (
                            <Form
                                layout="horizontal"
                            >
                                <Form.Item label="Field A" required tooltip="This is a required field">
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                                <Form.Item
                                    label="Field B"
                                    tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                                >
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                            </Form>
                        );
                    };
                    export default App;
                `}}}},r={args:{}};var i,a,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const E=["Playground"];export{r as Playground,E as __namedExportsOrder,B as default};
//# sourceMappingURL=antd.stories-60d21b76.js.map
