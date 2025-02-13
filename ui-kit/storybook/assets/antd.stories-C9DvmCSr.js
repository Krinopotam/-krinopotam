import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{F as t}from"./TextArea-Bx-nz3Fu.js";import{I as e}from"./index-DJtR8zbC.js";import{R as l}from"./InfoCircleOutlined-DgVG6Ryw.js";import"./context-u9dygr8g.js";import"./useToken-C9qwXZKU.js";import"./index-iW-139IE.js";import"./index-mQZ8i_rL.js";import"./index-D_2t0AaZ.js";import"./compact-item-Cxv0YLF9.js";import"./motion-HGHEQR47.js";import"./row-Bq2vx5ix.js";import"./index-H-U0Qhl4.js";import"./ContextIsolator-BX2WkAUK.js";import"./roundedArrow-CIJYWJcZ.js";import"./index-Bi_XhfGV.js";import"./colors-B0jgcrR7.js";import"./QuestionCircleOutlined-BUGNUdLn.js";import"./pickAttrs-DOtYDQG6.js";import"./ExclamationCircleFilled-DO6fsheT.js";import"./useVariants-Cpy17TlJ.js";import"./index-CHrs_Nvn.js";import"./EyeOutlined-BdSgb3nL.js";import"./SearchOutlined-C7GiFsDv.js";import"./button-D87aS1YS.js";const m=()=>o.jsxs(t,{layout:"horizontal",children:[o.jsx(t.Item,{label:"Field A",required:!0,tooltip:"This is a required field",children:o.jsx(e,{placeholder:"input placeholder"})}),o.jsx(t.Item,{label:"Field B",tooltip:{title:"Tooltip with customize icon",icon:o.jsx(l,{})},children:o.jsx(e,{placeholder:"input placeholder"})})]});try{antd.displayName="antd",antd.__docgenInfo={description:"",displayName:"antd",props:{}}}catch{}const k={title:"DForm/Examples/Antd",component:m,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const M=["Playground"];export{r as Playground,M as __namedExportsOrder,k as default};
