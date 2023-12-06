import{j as e}from"./useToken-268f632d.js";import{r as i}from"./index-5819ae2c.js";import{S as d,B as r}from"./button-11c62e43.js";import{u as f,m as y}from"./updateModalTheme-3177d112.js";import"./draggableRender-68189bdb.js";import"./index-092ccb3f.js";import"./_commonjsHelpers-de833af9.js";import"./compact-item-e0eb0d02.js";import"./isNativeReflectConstruct-2f1897fe.js";import"./button-a395f6e7.js";import"./index-e0a25a8d.js";import"./DownOutlined-7d62f4d3.js";import"./index-53e6b65f.js";import"./useZIndex-9f7c196b.js";import"./helpersString-59da762c.js";import"./v4-4a60fe23.js";import"./QuestionCircleOutlined-3fb4f056.js";import"./index-15561246.js";import"./useClosable-7a147c6b.js";import"./KeyCode-6413d982.js";import"./ExclamationCircleFilled-8e2dacf4.js";import"./context-acf775e7.js";import"./index-ba109c1e.js";import"./motion-3729e44c.js";import"./pickAttrs-f49ef707.js";import"./zoom-f1d5320d.js";import"./InfoCircleOutlined-14b312e0.js";import"./PurePanel-a66be90d.js";import"./buttonsRow-ca0a2aba.js";import"./Sider-f270e7a7.js";import"./row-353874ab.js";import"./roundedArrow-cf08b32b.js";import"./colors-dae18b42.js";import"./index-9d475cdf.js";import"./_commonjs-dynamic-modules-302442b1.js";const l=o=>{var s;f();const n=i.useRef(null);n.current&&((s=n.current)==null||s.update(o));const t=i.useCallback(m=>{n.current=y.alert({...o,colorType:m})},[o]);return e.jsxs(d,{children:[e.jsx(r,{onClick:()=>t(),children:"Open alert"}),e.jsx(r,{type:"primary",colorType:"info",onClick:()=>t("info"),children:"Open alert"}),e.jsx(r,{type:"primary",colorType:"warning",onClick:()=>t("warning"),children:"Open alert"}),e.jsx(r,{type:"primary",colorType:"success",onClick:()=>t("success"),children:"Open alert"}),e.jsx(r,{type:"primary",colorType:"danger",onClick:()=>t("danger"),children:"Open alert"})]})},g=l;try{l.displayName="AlertMessageBoxComponent",l.__docgenInfo={description:"MessageBox Alert component",displayName:"AlertMessageBoxComponent",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"neutral"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'}]}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}}}}}catch{}try{alertMessageBox.displayName="alertMessageBox",alertMessageBox.__docgenInfo={description:"MessageBox Alert component",displayName:"alertMessageBox",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"neutral"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'}]}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const Y={title:"Controls/MessageBox/Alert",component:g,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React, {useCallback, useRef} from 'react';
                    import {Button} from @krinopotam/ui-kit/button';
                    import {IModalAlertConfig, MessageBox, MessageBoxApi, useUpdateMessageBoxTheme} from @krinopotam/ui-kit/messageBox';
                    import {Space} from 'antd';
                    import {IColorType} from @krinopotam/ui-kit/button/button';
                    type IComponent = IModalAlertConfig;
                    /** MessageBox Alert component */
                    export const AlertMessageBoxComponent = (props: IComponent): React.JSX.Element => {
                        useUpdateMessageBoxTheme(); //set current theme to messageBox
                        const curMessageBox = useRef<MessageBoxApi|null>(null);
                        if (curMessageBox.current) curMessageBox.current?.update(props)
                        const onClick = useCallback(
                            (colorType?: IColorType) => {
                                curMessageBox.current = MessageBox.alert({...props, colorType: colorType});
                            },
                            [props]
                        );
                        return (
                            <Space>
                                <Button onClick={() => onClick()}>
                                    Open alert
                                </Button>
                                <Button type={'primary'} colorType="info" onClick={() => onClick('info')}>
                                    Open alert
                                </Button>
                                <Button type={'primary'} colorType="warning" onClick={() => onClick('warning')}>
                                    Open alert
                                </Button>
                                <Button type={'primary'} colorType="success" onClick={() => onClick('success')}>
                                    Open alert
                                </Button>
                                <Button type={'primary'} colorType="danger" onClick={() => onClick('danger')}>
                                    Open alert
                                </Button>
                            </Space>
                        );
                    };
                    export default AlertMessageBoxComponent;
                `}}}},a={args:{content:"Info"}};var p,c,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    content: 'Info'
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const Z=["Alert"];export{a as Alert,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=alertMessageBox.stories-bebf48f7.js.map
