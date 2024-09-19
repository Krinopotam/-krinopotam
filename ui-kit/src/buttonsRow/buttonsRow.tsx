import {Col, Row} from 'antd';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {RenderButtonGroup} from '@src/buttonsRow/components/renderButtonGroup';
import {useApi} from '@src/buttonsRow/hooks/api/api';
import {ButtonRowWrapperContext} from '@src/buttonsRow/components/buttonsRowWrapper';
import {keyDownHandler} from '@src/buttonsRow/helpers/keypressProcessing';
import {IButtonRowProps, IButtonsRowApi, IFormButtons} from '@src/buttonsRow/types/types';
import {useAddEventListener, useGetActualProps} from '@krinopotam/common-hooks';
import {useGetPreparedButtons} from '@src/buttonsRow/hooks/useGetPreparedButtons';

export const ButtonsRow = (props: IButtonRowProps): React.JSX.Element => {
    const [allProps, setAllProps] = useGetActualProps(props); //props can be set both by parent component and via api
    const [curButtons, setCurButtons] = usePrepareButtons(allProps);

    const api = useApi(allProps, setAllProps, curButtons, setCurButtons);

    useSubscribeToKeyDownEvent(allProps, api);

    if (!curButtons) return <></>;

    return (
        <div style={{display: 'block', ...allProps.style}} className={'controls-buttons-dynamic-row ' + (allProps.className ?? '')}>
            <Row wrap={false}>
                <Col flex="auto" style={{textAlign: 'left'}}>
                    <RenderButtonGroup key="leftButtons" buttons={curButtons} position="left" context={allProps.context} rowProps={allProps} />
                </Col>
                <Col flex="auto" style={{textAlign: 'center'}}>
                    <RenderButtonGroup key="centerButtons" buttons={curButtons} position="center" context={allProps.context} rowProps={allProps} />
                </Col>
                <Col flex="auto" style={{textAlign: 'right'}}>
                    <RenderButtonGroup key="rightButtons" buttons={curButtons} position="right" context={allProps.context} rowProps={allProps} />
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

    useAddEventListener('keydown', (e: KeyboardEvent) => keyDownHandler(e, props, api, wrapperContext.wrapperId), wrapperContext?.wrapperRef);
};

const usePrepareButtons = (props: IButtonRowProps): [IFormButtons, (buttons: IFormButtons) => void] => {
    const preparedButtons = useGetPreparedButtons(props.buttons, props);
    const [curButtons, setCurButtons] = useState(preparedButtons);

    const setTimeoutCurButtons = (buttons: IFormButtons) => {
        setTimeout(() => {
            setCurButtons(buttons); //Workaround to avoid error: Cannot update a component while rendering a different component.
        }, 0);
    };

    useEffect(() => {
        setCurButtons(preparedButtons);
    }, [preparedButtons]);

    return [curButtons, setTimeoutCurButtons];
};
