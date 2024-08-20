import{j as o}from"./extends-CKwpSh1k.js";import{r as a}from"./index-CTjT7uj6.js";import{S as f,B as e}from"./button-vgvLkGmN.js";import{M as k}from"./modalRender-CScw6VrL.js";import{B as g}from"./buttonsRow-C85kNrz9.js";import"./compact-item-B2r7eKHn.js";import"./useToken-DuQNFAH6.js";import"./index-Boe84S0F.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./button-dqH3xn1c.js";import"./index-C1vctpir.js";import"./index-DGqZ_Opy.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./InfoCircleOutlined-B2Jjl6_Y.js";import"./index-BRV0Se7Z.js";import"./helpersString-BLksZHLM.js";import"./v4-CQkTLCs1.js";import"./index-DrMe33ah.js";import"./ExclamationCircleFilled-BijZsmvo.js";import"./context-zxaTOXwp.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./motion-D1Ok7SUs.js";import"./motion-4S5rSXvC.js";import"./CloseOutlined-RkEA9oNw.js";import"./KeyCode-DNlgD2sM.js";import"./useClosable-DReJefU5.js";import"./zoom-DgLa7ZOz.js";import"./DownOutlined-dRo7eB-m.js";import"./index-56GSrRrr.js";import"./Sider-C8lbNVsG.js";import"./row-Bz4KYDPc.js";import"./roundedArrow-CdZeBiH2.js";import"./colors-DKxxPweQ.js";import"./helpersObjects-NFjaQN06.js";const s=n=>{const[u,i]=a.useState(!1),[d,y]=a.useState(void 0),p={...{modalId:"testForm",colorType:d},...n},t=a.useCallback(C=>{i(!0),y(C)},[]);return o.jsxs(o.Fragment,{children:[o.jsxs(f,{children:[o.jsx(e,{onClick:()=>t(),children:"Open modal"}),o.jsx(e,{type:"primary",onClick:()=>t("info"),colorType:"info",children:"Open modal"}),o.jsx(e,{type:"primary",onClick:()=>t("success"),colorType:"success",children:"Open modal"}),o.jsx(e,{type:"primary",onClick:()=>t("warning"),colorType:"warning",children:"Open modal"}),o.jsx(e,{type:"primary",onClick:()=>t("danger"),colorType:"danger",children:"Open modal"})]}),o.jsxs(k,{...p,open:u,onCancel:()=>i(!1),footer:o.jsx(g,{colorType:p.colorType,buttons:{close:{title:"Close",active:!0,onClick:()=>i(!1)}}}),children:[o.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum mattis tempor. Nam a vulputate sem, et hendrerit lectus. Duis nec dictum ipsum, at luctus dui."}),o.jsx("p",{children:"Cras sollicitudin justo magna, eu tincidunt elit aliquet vel. Praesent et dolor et felis auctor rhoncus ut porttitor nisi. Cras ligula nisi, ornare in convallis eu, posuere ut massa."}),o.jsx("p",{children:"Vivamus arcu orci, venenatis id semper in, ornare ut metus. Etiam aliquet ligula luctus, dapibus neque vel, consequat lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."})]})]})},T=s;try{s.displayName="ModalComponent",s.__docgenInfo={description:"Modal component",displayName:"ModalComponent",props:{}}}catch{}try{modal.displayName="modal",modal.__docgenInfo={description:"Modal component",displayName:"modal",props:{}}}catch{}const to={title:"Controls/Modal",component:T,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React, {useCallback, useState} from 'react';
                    import {Button} from @krinopotam/ui-kit/button';
                    import {Space} from 'antd';
                    import {IColorType} from @krinopotam/ui-kit/button/button';
                    import {IExtendedModalProps, Modal} from @krinopotam/ui-kit/modal/modal';
                    import {ButtonsRow} from @krinopotam/ui-kit/buttonsRow';
                    /** Modal component */
                    export const ModalComponent = (props?: IModalProps): React.JSX.Element => {
                        const [open, setOpen] = useState(false);
                        const [colorType, setColorType] = useState<IColorType | undefined>(undefined);
                        const defProps: IModalProps = {
                            modalId: 'testForm',
                            colorType: colorType,
                        };
                        const compProps = {...defProps, ...props};
                        const onClick = useCallback((colorType?: IColorType) => {
                            setOpen(true);
                            setColorType(colorType);
                        }, []);
                        return (
                            <>
                                <Space>
                                    <Button onClick={() => onClick()}>Open modal</Button>
                                    <Button type="primary" onClick={() => onClick('info')} colorType="info">
                                        Open modal
                                    </Button>
                                    <Button type="primary" onClick={() => onClick('success')} colorType="success">
                                        Open modal
                                    </Button>
                                    <Button type="primary" onClick={() => onClick('warning')} colorType="warning">
                                        Open modal
                                    </Button>
                                    <Button type="primary" onClick={() => onClick('danger')} colorType="danger">
                                        Open modal
                                    </Button>
                                </Space>
                                <Modal
                                    {...compProps}
                                    open={open}
                                    onCancel={() => setOpen(false)}
                                    footer={<ButtonsRow colorType={compProps.colorType} buttons={{close: {title: 'Close', active: true, onClick: () => setOpen(false)}}} />}
                                >
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum mattis tempor. Nam a vulputate sem, et hendrerit lectus. Duis nec dictum ipsum, at luctus dui.</p>
                                    <p>
                                        Cras sollicitudin justo magna, eu tincidunt elit aliquet vel. Praesent et dolor et felis auctor rhoncus ut porttitor nisi. Cras ligula nisi, ornare in convallis eu, posuere ut
                                        massa.
                                    </p>
                                    <p>
                                        Vivamus arcu orci, venenatis id semper in, ornare ut metus. Etiam aliquet ligula luctus, dapibus neque vel, consequat lorem. Class aptent taciti sociosqu ad litora torquent per
                                        conubia nostra, per inceptos himenaeos.
                                    </p>
                                </Modal>
                            </>
                        );
                    };
                    export default ModalComponent;
                `}}}},r={args:{}};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const eo=["Modal"];export{r as Modal,eo as __namedExportsOrder,to as default};
