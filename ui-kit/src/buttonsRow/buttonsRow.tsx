import {Col, Row} from 'antd';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {RenderButtonGroup} from '@src/buttonsRow/components/renderButtonGroup';
import {useApi} from '@src/buttonsRow/hooks/api';
import {prepareButtons} from '@src/buttonsRow/helpers/buttonMethods';
import {ButtonRowWrapperContext} from '@src/buttonsRow/components/buttonsRowWrapper';
import {keyDownHandler} from '@src/buttonsRow/helpers/keypressProcessing';
import {IButtonRowProps, IButtonsRowApi, IFormButtons} from '@src/buttonsRow/types/types';
import {useGetActualProps} from "@krinopotam/common-hooks";

export const ButtonsRow = (props: IButtonRowProps): React.JSX.Element => {
    const [allProps, setAllProps] = useGetActualProps(props); //props can be set both by parent component and via api
    const [curButtons, setCurButtons] = usePrepareButtons(props);

    const api = useApi(allProps, setAllProps, curButtons, setCurButtons);

    useSubscribeToKeyDownEvent(props, api);

    if (!curButtons) return <></>;

    return (
        <div style={{display: 'block', ...props.style}} className={'controls-buttons-dynamic-row ' + (props.className ?? '')}>
            <Row wrap={false}>
                <Col flex="auto" style={{textAlign: 'left'}}>
                    <RenderButtonGroup key="leftButtons" buttons={curButtons} position="left" context={props.context} rowProps={props} />
                </Col>
                <Col flex="auto" style={{textAlign: 'center'}}>
                    <RenderButtonGroup key="centerButtons" buttons={curButtons} position="center" context={props.context} rowProps={props} />
                </Col>
                <Col flex="auto" style={{textAlign: 'right'}}>
                    <RenderButtonGroup key="rightButtons" buttons={curButtons} position="right" context={props.context} rowProps={props} />
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

        const onKeyDown = (e: KeyboardEvent) => keyDownHandler(e, propsRef, api, wrapperContext.wrapperId, props);
        wrapperElement.addEventListener('keydown', onKeyDown);
        return () => wrapperElement.removeEventListener('keydown', onKeyDown);

        // eslint-disable-next-line
    }, []);
};
const usePrepareButtons = (props: IButtonRowProps): [IFormButtons, (buttons: IFormButtons) => void] => {
    const [curButtons, setCurButtons] = useState(prepareButtons(props.buttons, props));

    const setTimeoutCurButtons = (buttons: IFormButtons) => {
        setTimeout(() => {
            setCurButtons(buttons); //Workaround to avoid error: Cannot update a component while rendering a different component.
        }, 0);
    };

    //useUpdateButtonProps(setCurButtons)
    useEffect(() => {
        const _buttons = prepareButtons(props.buttons, props);
        setCurButtons(_buttons);
    }, [props, props.buttons]);

    return [curButtons, setTimeoutCurButtons];
};
