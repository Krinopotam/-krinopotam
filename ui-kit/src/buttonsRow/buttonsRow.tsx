import { IButtonProps,} from '@src/button';
import {Col, Row,} from 'antd';
import React, {useContext, useEffect, useRef, useState} from 'react';
import ButtonsGroup from "@src/buttonsRow/components/buttonsGroup";
import {useApi} from "@src/buttonsRow/hooks/api";
import {prepareButtons} from "@src/buttonsRow/helpers/buttonMethods";
import {ButtonRowWrapperContext} from "@src/buttonsRow/components/buttonsRowWrapper";
import {keyDownHandler} from "@src/buttonsRow/helpers/keypressProcessing";

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
    title?: React.ReactNode;
    //TODO implement info, danger, warning buttons type
    type?: 'default' | 'dashed' | 'link' | 'text' | 'element';
    active?: boolean;
    danger?: boolean;
    disabled?: boolean;
    ghost?: boolean;
    loading?: boolean;
    hidden?: boolean;
    position?: 'center' | 'left' | 'right';
    onClick?: (buttonName: string, button: IFormButton, context?: unknown) => void;
    props?: IButtonProps;
    icon?: string | React.ReactNode;
    size?: 'large' | 'middle' | 'small';
    hotKeys?: IHotKey[];

    /** Button tooltip */
    tooltip?: string;

    //TODO: to implement href and multi -level buttons
    href?: string;
    children?: IFormButtons;
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
    makeActivePrimary? :boolean;
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
                    <ButtonsGroup key="leftButtons" buttons={curButtons} position='left' context={props.context} componentProps={props} />
                </Col>
                <Col flex="auto" style={{textAlign: 'center'}}>
                    <ButtonsGroup key="centerButtons" buttons={curButtons} position='center' context={props.context} componentProps={props} />
                </Col>
                <Col flex="auto" style={{textAlign: 'right'}}>
                    <ButtonsGroup key="rightButtons" buttons={curButtons} position="right" context={props.context} componentProps={props} />
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

    const wrapperContext = useContext(ButtonRowWrapperContext)

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
