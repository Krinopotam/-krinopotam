import{j as e}from"./extends-CKwpSh1k.js";import{r}from"./index-CTjT7uj6.js";import{S as h,B as l}from"./button-BSX3QbyL.js";import{M as b}from"./draggableRender-DNX-aZJH.js";import{B as g}from"./buttonsRow-3L7aKrpm.js";import"./compact-item-ayXXrr5p.js";import"./useToken-DpCeTUe_.js";import"./index-Boe84S0F.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./button-Crg2y5WX.js";import"./index-BC6X-wEl.js";import"./index-DGqZ_Opy.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./InfoCircleOutlined-CU1G_igP.js";import"./helpersString-BLksZHLM.js";import"./v4-CQkTLCs1.js";import"./index-DEvyy-28.js";import"./ExclamationCircleFilled-DJhyVcaJ.js";import"./context-DoEgZWg9.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./motion-Gs4finkr.js";import"./motion-4S5rSXvC.js";import"./CloseOutlined-CjEpmO_q.js";import"./KeyCode-DNlgD2sM.js";import"./useClosable-ezpuUIzh.js";import"./zoom-uZCgAuxp.js";import"./DownOutlined-D2B1m1ns.js";import"./index-CwWsuzc7.js";import"./index-BRV0Se7Z.js";import"./Sider-D04GUbHb.js";import"./row-DM0mVdYK.js";import"./roundedArrow-ChNxh3ai.js";import"./colors-Chrt_s-B.js";import"./helpersObjects-NFjaQN06.js";const i=t=>{const[p,o]=r.useState(!1),[c,f]=r.useState(void 0),s={...{modalId:"testForm",colorType:c},...t},a=r.useCallback(y=>{o(!0),f(y)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[e.jsx(l,{onClick:()=>a(),children:"Open modal"}),e.jsx(l,{type:"primary",onClick:()=>a("info"),colorType:"info",children:"Open modal"}),e.jsx(l,{type:"primary",onClick:()=>a("success"),colorType:"success",children:"Open modal"}),e.jsx(l,{type:"primary",onClick:()=>a("warning"),colorType:"warning",children:"Open modal"}),e.jsx(l,{type:"primary",onClick:()=>a("danger"),colorType:"danger",children:"Open modal"})]}),e.jsxs(b,{...s,open:p,onCancel:()=>o(!1),footer:e.jsx(g,{colorType:s.colorType,buttons:{close:{title:"Close",active:!0,onClick:()=>o(!1)}}}),children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum mattis tempor. Nam a vulputate sem, et hendrerit lectus. Duis nec dictum ipsum, at luctus dui."}),e.jsx("p",{children:"Cras sollicitudin justo magna, eu tincidunt elit aliquet vel. Praesent et dolor et felis auctor rhoncus ut porttitor nisi. Cras ligula nisi, ornare in convallis eu, posuere ut massa."}),e.jsx("p",{children:"Vivamus arcu orci, venenatis id semper in, ornare ut metus. Etiam aliquet ligula luctus, dapibus neque vel, consequat lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."})]})]})},q=i;try{i.displayName="ModalComponent",i.__docgenInfo={description:"Modal component",displayName:"ModalComponent",props:{modalId:{defaultValue:null,description:"The modal ID for form dispatcher",name:"modalId",required:!1,type:{name:"string"}},bodyCss:{defaultValue:null,description:"The form body style. WORKAROUND: renamed from bodyStyle to bodyCss because of antd deprecation warnings",name:"bodyCss",required:!1,type:{name:"CSSProperties"}},bodyHeight:{defaultValue:null,description:"The form body initial height",name:"bodyHeight",required:!1,type:{name:"number"}},bodyMinHeight:{defaultValue:null,description:"The form body min height",name:"bodyMinHeight",required:!1,type:{name:"number"}},bodyMaxHeight:{defaultValue:null,description:"The form body max height",name:"bodyMaxHeight",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"The form initial width",name:"width",required:!1,type:{name:"number"}},minWidth:{defaultValue:null,description:"The form min width",name:"minWidth",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"The form max width",name:"maxWidth",required:!1,type:{name:"number"}},notScrollable:{defaultValue:null,description:"Is the form body not scrollable",name:"notScrollable",required:!1,type:{name:"boolean"}},resizable:{defaultValue:null,description:"Is the for can be resized (show the resize handler). Default: true",name:"resizable",required:!1,type:{name:"boolean"}},colorType:{defaultValue:null,description:"Form color type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"success"'},{value:'"neutral"'},{value:'"info"'},{value:'"danger"'}]}},headerStyle:{defaultValue:null,description:"Form header style",name:"headerStyle",required:!1,type:{name:"CSSProperties"}},headerIcon:{defaultValue:null,description:"Form header icon",name:"headerIcon",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"Footer content",name:"footer",required:!1,type:{name:"ReactNode"}},footerStyle:{defaultValue:null,description:"Form footer style",name:"footerStyle",required:!1,type:{name:"CSSProperties"}},isDraggable:{defaultValue:null,description:"Is the form draggable",name:"isDraggable",required:!1,type:{name:"boolean"}},onAfterOpenChange:{defaultValue:null,description:"Callback when the animation ends when Modal is turned on and off",name:"onAfterOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},visible:{defaultValue:null,description:"@deprecated Please use `open` instead.",name:"visible",required:!1,type:{name:"boolean"}},prefixCls:{defaultValue:null,description:"",name:"prefixCls",required:!1,type:{name:"string"}},forceRender:{defaultValue:null,description:"Force render Modal",name:"forceRender",required:!1,type:{name:"boolean"}},transitionName:{defaultValue:null,description:"",name:"transitionName",required:!1,type:{name:"string"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"any"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"The modal dialog's title",name:"title",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"@since 5.18.0",name:"loading",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"Whether the modal dialog is visible or not",name:"open",required:!1,type:{name:"boolean"}},rootClassName:{defaultValue:null,description:"",name:"rootClassName",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"ModalClassNames"}},keyboard:{defaultValue:null,description:"",name:"keyboard",required:!1,type:{name:"boolean"}},styles:{defaultValue:null,description:"",name:"styles",required:!1,type:{name:"ModalStyles"}},mask:{defaultValue:null,description:"",name:"mask",required:!1,type:{name:"boolean"}},afterClose:{defaultValue:null,description:"",name:"afterClose",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e: SyntheticEvent<Element, Event>) => any)"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not. Recommend to use closeIcon instead.",name:"closable",required:!1,type:{name:"ClosableType"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},destroyOnClose:{defaultValue:null,description:"",name:"destroyOnClose",required:!1,type:{name:"boolean"}},mousePosition:{defaultValue:null,description:"",name:"mousePosition",required:!1,type:{name:"MousePosition"}},maskTransitionName:{defaultValue:null,description:"",name:"maskTransitionName",required:!1,type:{name:"string"}},maskAnimation:{defaultValue:null,description:"",name:"maskAnimation",required:!1,type:{name:"any"}},wrapStyle:{defaultValue:null,description:"",name:"wrapStyle",required:!1,type:{name:"Record<string, any>"}},maskStyle:{defaultValue:null,description:"@deprecated Please use `styles.mask` instead",name:"maskStyle",required:!1,type:{name:"CSSProperties"}},wrapClassName:{defaultValue:null,description:"",name:"wrapClassName",required:!1,type:{name:"string"}},bodyProps:{defaultValue:null,description:"",name:"bodyProps",required:!1,type:{name:"any"}},maskProps:{defaultValue:null,description:"",name:"maskProps",required:!1,type:{name:"any"}},wrapProps:{defaultValue:null,description:"",name:"wrapProps",required:!1,type:{name:"any"}},getContainer:{defaultValue:null,description:"",name:"getContainer",required:!1,type:{name:"string | false | HTMLElement | getContainerFunc"}},closeIcon:{defaultValue:null,description:"",name:"closeIcon",required:!1,type:{name:"ReactNode"}},modalRender:{defaultValue:null,description:"",name:"modalRender",required:!1,type:{name:"((node: ReactNode) => ReactNode)"}},focusTriggerAfterClose:{defaultValue:null,description:"",name:"focusTriggerAfterClose",required:!1,type:{name:"boolean"}},panelRef:{defaultValue:null,description:"",name:"panelRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},confirmLoading:{defaultValue:null,description:"Whether to apply loading visual effect for OK button or not",name:"confirmLoading",required:!1,type:{name:"boolean"}},onCancel:{defaultValue:null,description:"Specify a function that will be called when a user clicks mask, close button on top right or Cancel button",name:"onCancel",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},centered:{defaultValue:null,description:"Centered Modal",name:"centered",required:!1,type:{name:"boolean"}}}}}catch{}try{modal.displayName="modal",modal.__docgenInfo={description:"Modal component",displayName:"modal",props:{modalId:{defaultValue:null,description:"The modal ID for form dispatcher",name:"modalId",required:!1,type:{name:"string"}},bodyCss:{defaultValue:null,description:"The form body style. WORKAROUND: renamed from bodyStyle to bodyCss because of antd deprecation warnings",name:"bodyCss",required:!1,type:{name:"CSSProperties"}},bodyHeight:{defaultValue:null,description:"The form body initial height",name:"bodyHeight",required:!1,type:{name:"number"}},bodyMinHeight:{defaultValue:null,description:"The form body min height",name:"bodyMinHeight",required:!1,type:{name:"number"}},bodyMaxHeight:{defaultValue:null,description:"The form body max height",name:"bodyMaxHeight",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"The form initial width",name:"width",required:!1,type:{name:"number"}},minWidth:{defaultValue:null,description:"The form min width",name:"minWidth",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"The form max width",name:"maxWidth",required:!1,type:{name:"number"}},notScrollable:{defaultValue:null,description:"Is the form body not scrollable",name:"notScrollable",required:!1,type:{name:"boolean"}},resizable:{defaultValue:null,description:"Is the for can be resized (show the resize handler). Default: true",name:"resizable",required:!1,type:{name:"boolean"}},colorType:{defaultValue:null,description:"Form color type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"success"'},{value:'"neutral"'},{value:'"info"'},{value:'"danger"'}]}},headerStyle:{defaultValue:null,description:"Form header style",name:"headerStyle",required:!1,type:{name:"CSSProperties"}},headerIcon:{defaultValue:null,description:"Form header icon",name:"headerIcon",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"Footer content",name:"footer",required:!1,type:{name:"ReactNode"}},footerStyle:{defaultValue:null,description:"Form footer style",name:"footerStyle",required:!1,type:{name:"CSSProperties"}},isDraggable:{defaultValue:null,description:"Is the form draggable",name:"isDraggable",required:!1,type:{name:"boolean"}},onAfterOpenChange:{defaultValue:null,description:"Callback when the animation ends when Modal is turned on and off",name:"onAfterOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},visible:{defaultValue:null,description:"@deprecated Please use `open` instead.",name:"visible",required:!1,type:{name:"boolean"}},prefixCls:{defaultValue:null,description:"",name:"prefixCls",required:!1,type:{name:"string"}},forceRender:{defaultValue:null,description:"Force render Modal",name:"forceRender",required:!1,type:{name:"boolean"}},transitionName:{defaultValue:null,description:"",name:"transitionName",required:!1,type:{name:"string"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"any"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"The modal dialog's title",name:"title",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"@since 5.18.0",name:"loading",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"Whether the modal dialog is visible or not",name:"open",required:!1,type:{name:"boolean"}},rootClassName:{defaultValue:null,description:"",name:"rootClassName",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"ModalClassNames"}},keyboard:{defaultValue:null,description:"",name:"keyboard",required:!1,type:{name:"boolean"}},styles:{defaultValue:null,description:"",name:"styles",required:!1,type:{name:"ModalStyles"}},mask:{defaultValue:null,description:"",name:"mask",required:!1,type:{name:"boolean"}},afterClose:{defaultValue:null,description:"",name:"afterClose",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e: SyntheticEvent<Element, Event>) => any)"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not. Recommend to use closeIcon instead.",name:"closable",required:!1,type:{name:"ClosableType"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},destroyOnClose:{defaultValue:null,description:"",name:"destroyOnClose",required:!1,type:{name:"boolean"}},mousePosition:{defaultValue:null,description:"",name:"mousePosition",required:!1,type:{name:"MousePosition"}},maskTransitionName:{defaultValue:null,description:"",name:"maskTransitionName",required:!1,type:{name:"string"}},maskAnimation:{defaultValue:null,description:"",name:"maskAnimation",required:!1,type:{name:"any"}},wrapStyle:{defaultValue:null,description:"",name:"wrapStyle",required:!1,type:{name:"Record<string, any>"}},maskStyle:{defaultValue:null,description:"@deprecated Please use `styles.mask` instead",name:"maskStyle",required:!1,type:{name:"CSSProperties"}},wrapClassName:{defaultValue:null,description:"",name:"wrapClassName",required:!1,type:{name:"string"}},bodyProps:{defaultValue:null,description:"",name:"bodyProps",required:!1,type:{name:"any"}},maskProps:{defaultValue:null,description:"",name:"maskProps",required:!1,type:{name:"any"}},wrapProps:{defaultValue:null,description:"",name:"wrapProps",required:!1,type:{name:"any"}},getContainer:{defaultValue:null,description:"",name:"getContainer",required:!1,type:{name:"string | false | HTMLElement | getContainerFunc"}},closeIcon:{defaultValue:null,description:"",name:"closeIcon",required:!1,type:{name:"ReactNode"}},modalRender:{defaultValue:null,description:"",name:"modalRender",required:!1,type:{name:"((node: ReactNode) => ReactNode)"}},focusTriggerAfterClose:{defaultValue:null,description:"",name:"focusTriggerAfterClose",required:!1,type:{name:"boolean"}},panelRef:{defaultValue:null,description:"",name:"panelRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},confirmLoading:{defaultValue:null,description:"Whether to apply loading visual effect for OK button or not",name:"confirmLoading",required:!1,type:{name:"boolean"}},onCancel:{defaultValue:null,description:"Specify a function that will be called when a user clicks mask, close button on top right or Cancel button",name:"onCancel",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},centered:{defaultValue:null,description:"Centered Modal",name:"centered",required:!1,type:{name:"boolean"}}}}}catch{}const ae={title:"Controls/Modal",component:q,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React, {useCallback, useState} from 'react';
                    import {Button} from @krinopotam/ui-kit/button';
                    import {Space} from 'antd';
                    import {IColorType} from @krinopotam/ui-kit/button/button';
                    import {IModalProps, Modal} from @krinopotam/ui-kit/modal';
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
                `}}}},n={args:{}};var u,d,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const le=["Modal"];export{n as Modal,le as __namedExportsOrder,ae as default};
