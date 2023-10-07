import {IButtonProps} from '@src/button';
import {Col, Row} from 'antd';
import React, {CSSProperties, FocusEventHandler, HTMLAttributeAnchorTarget, MouseEventHandler, useContext, useEffect, useRef, useState} from 'react';
import RenderButtonGroup from '@src/buttonsRow/components/renderButtonGroup';
import {useApi} from '@src/buttonsRow/hooks/api';
import {prepareButtons} from '@src/buttonsRow/helpers/buttonMethods';
import {ButtonRowWrapperContext} from '@src/buttonsRow/components/buttonsRowWrapper';
import {keyDownHandler} from '@src/buttonsRow/helpers/keypressProcessing';

//region Types

export type IFormType = 'primary' | 'confirm' | 'info' | 'success' | 'error' | 'warning';

interface IHotKey {
    ctrl?: boolean;
    alt?: boolean;
    shift?: boolean;
    meta?: boolean;
    key: string;
}

export interface IFormButton {
    //TODO: implement info, danger, warning buttons type

    /** Button title */
    title?: React.ReactNode;

    type?: 'button' | 'link' | 'text' | 'divider' | 'group' | 'element';

    /** Is button active (set primary style) */
    active?: boolean;

    /** Is button danger has style */
    danger?: boolean;

    /** Is button has ghost (outline) style */
    ghost?: boolean;

    /** is button or divider dashed */
    dashed?: boolean;

    /** Is button disabled */
    disabled?: boolean;

    /** Is button in loading mode */
    loading?: boolean;

    /** Is button hidden (not displayed) */
    hidden?: boolean;

    /** Button position */
    position?: 'center' | 'left' | 'right';

    /** Button icon */
    icon?: string | React.ReactNode;

    /** Icon for expand DropDown menu (right side icon)/ Default: <DownOutlined />*/
    expandIcon?: React.ReactNode;

    /** Button size*/
    size?: 'large' | 'middle' | 'small';

    /** Button hotkeys */
    hotKeys?: IHotKey[];

    /** Button tooltip */
    tooltip?: string;

    /** Href for link button type */
    href?: string;

    /** Targets for link button type */
    target?: HTMLAttributeAnchorTarget;

    /** Rel for link button type */
    rel?: string;

    /** Button dropDown children*/
    children?: IFormButtons;

    /** Button style*/
    style?: CSSProperties;

    /** Button class name*/
    className?: string;

    /************* Callbacks *************/
    /**Button onClick callback */
    onClick?: (buttonName: string, button: IFormButton, context?: unknown) => void;
}

export type IFormButtons = Record<string, IFormButton | null>;

export interface IButtonRowProps {
    /** Buttons props */
    buttons?: IFormButtons;

    /** Buttons row container class name */
    className?: string;

    /** Buttons row container style */
    style?: React.CSSProperties;

    /** Form type */
    formType?: IFormType;

    /** A mutable object to merge with these controls api */
    apiRef?: IButtonsRowApi;

    /** Any context. Will use in buttons callbacks  */
    context?: unknown;

    /** allow select buttons using arrows keys */
    arrowsSelection?: boolean;

    /** When button arrowSelection mode the active button will be of type Primary. Otherwise, the active button will have focus */
    makeActivePrimary?: boolean;
}

export interface IButtonsRowApi {
    buttons: (buttons?: IFormButtons) => IFormButtons;
    updateButtons: (buttons: IFormButtons) => IFormButtons;
    setNextActive: (direction: 'forward' | 'backward') => void;
    setActive: (name: string, active?: boolean) => void;
    loading: (name: string, loading?: boolean) => boolean;
    disabled: (name: string, disabled?: boolean) => boolean;
    hidden: (name: string, hidden?: boolean) => boolean;
    triggerClick: (name: string) => void;
    activeTriggerClick: () => void;
}

//endregion

export const ButtonsRow = (props: IButtonRowProps): React.JSX.Element => {
    const [curButtons, setCurButtons] = usePrepareButtons(props);

    const api = useApi(props, curButtons, setCurButtons);

    useSubscribeToKeyDownEvent(props, api);

    if (!curButtons) return <></>;

    return (
        <div style={{display: 'block', ...props.style}} className={'controls-buttons-dynamic-row ' + props.className}>
            <Row wrap={false}>
                <Col flex="auto" style={{textAlign: 'left'}}>
                    <RenderButtonGroup key="leftButtons" buttons={curButtons} position="left" context={props.context} componentProps={props} />
                </Col>
                <Col flex="auto" style={{textAlign: 'center'}}>
                    <RenderButtonGroup key="centerButtons" buttons={curButtons} position="center" context={props.context} componentProps={props} />
                </Col>
                <Col flex="auto" style={{textAlign: 'right'}}>
                    <RenderButtonGroup key="rightButtons" buttons={curButtons} position="right" context={props.context} componentProps={props} />
                </Col>
            </Row>
        </div>
    );
};

export default ButtonsRow;

const useSubscribeToKeyDownEvent = (props: IButtonRowProps, api: IButtonsRowApi) => {
    //We use refs, since the subscription for the event occurs only 1 time, and Props can change
    const propsRef = useRef(props);
    propsRef.current = props;

    const wrapperContext = useContext(ButtonRowWrapperContext);

    useEffect(() => {
        if (!wrapperContext.wrapperRef?.current) return;
        const wrapperElement = wrapperContext.wrapperRef.current;

        const onKeyDown = (e: KeyboardEvent) => keyDownHandler(e, propsRef, api, wrapperContext.wrapperId);
        wrapperElement.addEventListener('keydown', onKeyDown);
        return () => wrapperElement.removeEventListener('keydown', onKeyDown);

        // eslint-disable-next-line
    }, []);
};
const usePrepareButtons = (props: IButtonRowProps): [IFormButtons, (buttons: IFormButtons) => void] => {
    const [curButtons, setCurButtons] = useState(prepareButtons(props.buttons, props.formType));

    const setTimeoutCurButtons = (buttons: IFormButtons) => {
        setTimeout(() => {
            //Workaround to avoid error: Cannot update a component while rendering a different component.
            setCurButtons(buttons);
        }, 0);
    };

    //useUpdateButtonProps(setCurButtons)
    useEffect(() => {
        const _buttons = prepareButtons(props.buttons, props.formType);
        setCurButtons(_buttons);
    }, [props.buttons, props.formType]);

    return [curButtons, setTimeoutCurButtons];
};
