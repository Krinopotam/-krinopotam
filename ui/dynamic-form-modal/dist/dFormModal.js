import { useInitModalFormApi } from './hooks/api';
import React, { useEffect, useMemo, useState } from 'react';
import { DFormModalRender } from './renders/dFormModalRender';
import { HelpersStrings, HelpersObjects } from "@krinopotam/js-helpers";
import { useCallbacks } from './hooks/callbacks';
import { useInitButtons } from './hooks/buttons';
import { useUpdateMessageBoxTheme } from '@krinopotam/ui-message-box';
import { useGetActualProps } from '@krinopotam/common-hooks';
export const DFormModal = (props) => {
    var _a;
    useUpdateMessageBoxTheme();
    const [formId] = useState((_a = props.formId) !== null && _a !== void 0 ? _a : 'dFormModal-' + HelpersStrings.getUuid());
    const [modalFormProps, updateModalFormProps] = useGetActualProps(props);
    const [formProps] = useSeparateProps(modalFormProps);
    const [formApi, setFormApi] = useState((modalFormProps.apiRef || {}));
    const [buttonsApi] = useState({});
    const buttons = useInitButtons(formApi, modalFormProps);
    useInitModalFormApi(formId, formApi, modalFormProps, buttonsApi, updateModalFormProps);
    const formCallbacks = useCallbacks(formApi, modalFormProps);
    useEffect(() => {
        return () => {
            setFormApi({});
        };
    }, []);
    return (React.createElement(DFormModalRender, { formId: formId, formApi: formApi, modalFormProps: modalFormProps, formProps: formProps, buttons: buttons, buttonsApi: buttonsApi, callbacks: formCallbacks }));
};
const useSeparateProps = (props) => {
    return useMemo(() => {
        const result = HelpersObjects.splitObject(props, [
            'notScrollable',
            'title',
            'minWidth',
            'maxWidth',
            'title',
            'bodyHeight',
            'bodyMinHeight',
            'bodyMaxHeight',
            'bodyStyle',
            'resizable',
            'isOpened',
            'closeFormConfirmMessage',
            'formId',
            'apiRef',
            'buttons',
            'callbacks',
        ]);
        const formProps = result[1];
        formProps.buttons = null;
        return [formProps];
    }, [props]);
};
