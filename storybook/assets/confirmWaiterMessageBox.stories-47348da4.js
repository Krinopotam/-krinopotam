import{j as e}from"./useToken-268f632d.js";import{r as s}from"./index-5819ae2c.js";import{S as f,B as n}from"./button-83f0aeae.js";import{u as y,m as g}from"./updateModalTheme-ee4dea50.js";import"./draggableRender-ff3f45b2.js";import"./index-092ccb3f.js";import"./_commonjsHelpers-de833af9.js";import"./compact-item-e0eb0d02.js";import"./isNativeReflectConstruct-2f1897fe.js";import"./button-a395f6e7.js";import"./index-e0a25a8d.js";import"./DownOutlined-7d62f4d3.js";import"./index-53e6b65f.js";import"./useZIndex-9f7c196b.js";import"./helpersString-59da762c.js";import"./v4-4a60fe23.js";import"./QuestionCircleOutlined-3fb4f056.js";import"./index-15561246.js";import"./useClosable-7a147c6b.js";import"./KeyCode-6413d982.js";import"./ExclamationCircleFilled-8e2dacf4.js";import"./context-acf775e7.js";import"./index-ba109c1e.js";import"./motion-3729e44c.js";import"./pickAttrs-f49ef707.js";import"./zoom-f1d5320d.js";import"./InfoCircleOutlined-14b312e0.js";import"./PurePanel-a66be90d.js";import"./buttonsRow-300bee12.js";import"./Sider-f270e7a7.js";import"./row-353874ab.js";import"./roundedArrow-cf08b32b.js";import"./colors-dae18b42.js";import"./index-9d475cdf.js";import"./_commonjs-dynamic-modules-302442b1.js";const i=o=>{var l;y();const r=s.useRef(null);r.current&&((l=r.current)==null||l.update(o));const t=s.useCallback(p=>{r.current=g.confirmWaiter({...o,title:"Please confirm",content:"Are you sure?",waitContent:"Please wait",waitTitle:"Processing",colorType:p,onOk:d=>{setTimeout(()=>{d.destroy()},3e3)}})},[o]);return e.jsxs(f,{children:[e.jsx(n,{onClick:()=>t(),children:"Open confirm waiter"}),e.jsx(n,{type:"primary",colorType:"info",onClick:()=>t("info"),children:"Open confirm waiter"}),e.jsx(n,{type:"primary",colorType:"warning",onClick:()=>t("warning"),children:"Open confirm waiter"}),e.jsx(n,{type:"primary",colorType:"success",onClick:()=>t("success"),children:"Open confirm waiter"}),e.jsx(n,{type:"primary",colorType:"danger",onClick:()=>t("danger"),children:"Open confirm waiter"})]})},C=i;try{i.displayName="ConfirmWaiterMessageBoxComponent",i.__docgenInfo={description:"MessageBox Confirm Wait component",displayName:"ConfirmWaiterMessageBoxComponent",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}}}}}catch{}try{confirmWaiterMessageBox.displayName="confirmWaiterMessageBox",confirmWaiterMessageBox.__docgenInfo={description:"MessageBox Confirm Wait component",displayName:"confirmWaiterMessageBox",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const Z={title:"Controls/MessageBox/ConfirmWaiter",component:C,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React, {useCallback, useRef} from 'react';
                    import {Button} from @krinopotam/ui-kit/button';
                    import {IModalConfirmConfig, MessageBox, MessageBoxApi, useUpdateMessageBoxTheme} from @krinopotam/ui-kit/messageBox';
                    import {Space} from 'antd';
                    import {IColorType} from @krinopotam/ui-kit/button/button';
                    type IComponent = IModalConfirmConfig;
                    /** MessageBox Confirm Wait component */
                    export const ConfirmWaiterMessageBoxComponent = (props: IComponent): React.JSX.Element => {
                        useUpdateMessageBoxTheme(); //set current theme to messageBox
                        const curMessageBox = useRef<MessageBoxApi | null>(null);
                        if (curMessageBox.current) curMessageBox.current?.update(props);
                        const onClick = useCallback(
                            (colorType?: IColorType) => {
                                curMessageBox.current = MessageBox.confirmWaiter({
                                    ...props,
                                    title: 'Please confirm',
                                    content: 'Are you sure?',
                                    waitContent: 'Please wait',
                                    waitTitle: 'Processing',
                                    colorType: colorType,
                                    onOk: messageBox => {
                                        setTimeout(() => {
                                            messageBox.destroy();
                                        }, 3000);
                                    },
                                });
                            },
                            [props]
                        );
                        return (
                            <Space>
                                <Button onClick={() => onClick()}>Open confirm waiter</Button>
                                <Button type={'primary'} colorType="info" onClick={() => onClick('info')}>
                                    Open confirm waiter
                                </Button>
                                <Button type={'primary'} colorType="warning" onClick={() => onClick('warning')}>
                                    Open confirm waiter
                                </Button>
                                <Button type={'primary'} colorType="success" onClick={() => onClick('success')}>
                                    Open confirm waiter
                                </Button>
                                <Button type={'primary'} colorType="danger" onClick={() => onClick('danger')}>
                                    Open confirm waiter
                                </Button>
                            </Space>
                        );
                    };
                    export default ConfirmWaiterMessageBoxComponent;
                `}}}},a={args:{content:"Info"}};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    content: 'Info'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const ee=["ConfirmWaiter"];export{a as ConfirmWaiter,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=confirmWaiterMessageBox.stories-47348da4.js.map
