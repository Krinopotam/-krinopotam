import{j as e}from"./jsx-runtime-CLpGMVip.js";import{S as f,B as n}from"./button-4AcyERAA.js";import{u as g,m as C}from"./updateModalTheme-UYJBKmLU.js";import{r as s}from"./index-C9MQhBv9.js";import"./compact-item-DA-GXfnI.js";import"./useToken-C7r1PZCj.js";import"./index-DYSaHhaM.js";import"./index-B-Tif3g2.js";import"./index-BW5SL8mY.js";import"./button-bcPEIH53.js";import"./headerRender-DccPdHnJ.js";import"./index-C3W8-LPG.js";import"./ExclamationCircleFilled-DH9qZ7y2.js";import"./pickAttrs-Br7KB4bY.js";import"./context-55JlqysY.js";import"./motion-hLQ8GYzu.js";import"./CloseOutlined-DRVLVuFC.js";import"./KeyCode-lh1qUinJ.js";import"./ContextIsolator-QgC1AqAH.js";import"./useClosable-D8jC4WSZ.js";import"./index-3upY0JfS.js";import"./DownOutlined-LA98A-kK.js";import"./index-CEaSTCJ_.js";import"./buttonsRow-DgoUOL1l.js";import"./Sider-DE0fVHvD.js";import"./row-CIeG6Ir6.js";import"./roundedArrow-DmDmIiOY.js";import"./colors-DUoAwKpO.js";import"./getNanoId-CghKzzgc.js";import"./InfoCircleOutlined-DifEp91c.js";import"./QuestionCircleOutlined-cSUxXC2W.js";import"./index--n2SL9R3.js";const l=o=>{var i;g();const r=s.useRef(null);r.current&&((i=r.current)==null||i.update(o));const a=s.useCallback(p=>{r.current=C.confirmWaiter({...o,title:"Please confirm",content:"Are you sure?",waitContent:"Please wait",waitTitle:"Processing",colorType:p,onOk:d=>{setTimeout(()=>{d.destroy()},3e3)}})},[o]);return e.jsxs(f,{children:[e.jsx(n,{onClick:()=>a(),children:"Open confirm waiter"}),e.jsx(n,{color:"info",variant:"solid",onClick:()=>a("info"),children:"Open confirm waiter"}),e.jsx(n,{color:"warning",variant:"solid",onClick:()=>a("warning"),children:"Open confirm waiter"}),e.jsx(n,{color:"success",variant:"solid",onClick:()=>a("success"),children:"Open confirm waiter"}),e.jsx(n,{color:"danger",variant:"solid",onClick:()=>a("danger"),children:"Open confirm waiter"})]})};try{l.displayName="ConfirmWaiterMessageBoxComponent",l.__docgenInfo={description:"MessageBox Confirm Wait component",displayName:"ConfirmWaiterMessageBoxComponent",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"danger"'},{value:'"default"'},{value:'"primary"'},{value:'"blue"'},{value:'"purple"'},{value:'"cyan"'},{value:'"green"'},{value:'"magenta"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"volcano"'},{value:'"geekblue"'},{value:'"lime"'},{value:'"gold"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}},language:{defaultValue:null,description:"Language",name:"language",required:!1,type:{name:"enum",value:[{value:'"en_US"'},{value:'"ru_RU"'},{value:'"zh_CN"'}]}},translation:{defaultValue:null,description:"Custom translation",name:"translation",required:!1,type:{name:"Partial<{ ok: string; cancel: string; attention: string; processing: string; pleaseWait: string; }>"}}}}}catch{}try{confirmWaiterMessageBox.displayName="confirmWaiterMessageBox",confirmWaiterMessageBox.__docgenInfo={description:"MessageBox Confirm Wait component",displayName:"confirmWaiterMessageBox",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"danger"'},{value:'"default"'},{value:'"primary"'},{value:'"blue"'},{value:'"purple"'},{value:'"cyan"'},{value:'"green"'},{value:'"magenta"'},{value:'"pink"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"volcano"'},{value:'"geekblue"'},{value:'"lime"'},{value:'"gold"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}},language:{defaultValue:null,description:"Language",name:"language",required:!1,type:{name:"enum",value:[{value:'"en_US"'},{value:'"ru_RU"'},{value:'"zh_CN"'}]}},translation:{defaultValue:null,description:"Custom translation",name:"translation",required:!1,type:{name:"Partial<{ ok: string; cancel: string; attention: string; processing: string; pleaseWait: string; }>"}}}}}catch{}const K={title:"Controls/MessageBox/ConfirmWaiter",component:l,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import {Button, IButtonProps} from @krinopotam/ui-kit/button';
                    import {IModalConfirmConfig, MessageBox, MessageBoxApi, useUpdateMessageBoxTheme} from @krinopotam/ui-kit/messageBox';
                    import {Space} from 'antd';
                    import React, {useCallback, useRef} from 'react';
                    type IComponent = IModalConfirmConfig;
                    /** MessageBox Confirm Wait component */
                    export const ConfirmWaiterMessageBoxComponent = (props: IComponent): React.JSX.Element => {
                        useUpdateMessageBoxTheme(); //set current theme to messageBox
                        const curMessageBox = useRef<MessageBoxApi | null>(null);
                        if (curMessageBox.current) curMessageBox.current?.update(props);
                        const onClick = useCallback(
                            (colorType?: IButtonProps['color']) => {
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
                                <Button color="info" variant="solid" onClick={() => onClick('info')}>
                                    Open confirm waiter
                                </Button>
                                <Button color="warning" variant="solid" onClick={() => onClick('warning')}>
                                    Open confirm waiter
                                </Button>
                                <Button color="success" variant="solid" onClick={() => onClick('success')}>
                                    Open confirm waiter
                                </Button>
                                <Button color="danger" variant="solid" onClick={() => onClick('danger')}>
                                    Open confirm waiter
                                </Button>
                            </Space>
                        );
                    };
                    export default ConfirmWaiterMessageBoxComponent;
                `}}}},t={args:{content:"Info"}};var u,c,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    content: 'Info'
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const Q=["ConfirmWaiter"];export{t as ConfirmWaiter,Q as __namedExportsOrder,K as default};
