import{j as o}from"./extends-BRD_ACZV.js";import{F as t}from"./index-RRW4sUgR.js";import{I as e}from"./index-BW1QLlIf.js";import{R as l}from"./InfoCircleOutlined-rgXyzvM4.js";import"./index-uubelm5h.js";import"./compact-item-IaHZmqF4.js";import"./useToken--rxRg63T.js";import"./index-DaxZXI7c.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./index-C9GPWzHg.js";import"./context-CrsU2UZX.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./pickAttrs-Ceb8JkZg.js";import"./useVariants-BCbWTJhT.js";import"./ContextIsolator-DTA0rjn8.js";import"./index-CSZa4169.js";import"./motion-WmxowxVV.js";import"./row-R-nZpFec.js";import"./roundedArrow-Cy_VYcsu.js";import"./zoom-CqB_wpkX.js";import"./colors-g_WWN96I.js";import"./QuestionCircleOutlined-BwsbN9TT.js";import"./ExclamationCircleFilled-rOw3n2gg.js";import"./EyeOutlined-BMhVa8fk.js";import"./SearchOutlined-D2kGcJ7L.js";import"./button-DvzT6zDE.js";const m=()=>o.jsxs(t,{layout:"horizontal",children:[o.jsx(t.Item,{label:"Field A",required:!0,tooltip:"This is a required field",children:o.jsx(e,{placeholder:"input placeholder"})}),o.jsx(t.Item,{label:"Field B",tooltip:{title:"Tooltip with customize icon",icon:o.jsx(l,{})},children:o.jsx(e,{placeholder:"input placeholder"})})]}),n=m;try{antd.displayName="antd",antd.__docgenInfo={description:"",displayName:"antd",props:{}}}catch{}const P={title:"DForm/Examples/Antd",component:n,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const S=["Playground"];export{r as Playground,S as __namedExportsOrder,P as default};
