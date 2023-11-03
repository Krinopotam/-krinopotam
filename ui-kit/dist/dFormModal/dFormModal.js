import { useInitModalFormApi } from './hooks/api';
import React, { useEffect, useMemo, useState } from 'react';
import { DFormModalRender } from './renders/dFormModalRender';
import { getUuid, splitObject } from "@krinopotam/js-helpers";
import { useFormCallbacks } from './hooks/callbacks';
import { useInitButtons } from './hooks/buttons';
import { useUpdateMessageBoxTheme } from '../messageBox';
import { useGetActualProps } from '@krinopotam/common-hooks';
export const DFormModal = (props) => {
    var _a;
    useUpdateMessageBoxTheme();
    const [formId] = useState((_a = props.formId) !== null && _a !== void 0 ? _a : 'dFormModal-' + getUuid());
    const [modalFormProps, updateModalFormProps] = useGetActualProps(props);
    const [formApi, setFormApi] = useState((modalFormProps.apiRef || {}));
    const [buttonsApi] = useState({});
    const buttons = useInitButtons(formApi, modalFormProps);
    useInitModalFormApi(formId, formApi, modalFormProps, buttonsApi, updateModalFormProps);
    const formCallbacks = useFormCallbacks(formApi, modalFormProps);
    const [, formProps] = useSeparateProps(modalFormProps, formCallbacks);
    useEffect(() => {
        return () => {
            setFormApi({});
        };
    }, []);
    return (React.createElement(DFormModalRender, { formId: formId, formApi: formApi, modalFormProps: modalFormProps, formProps: formProps, buttons: buttons, buttonsApi: buttonsApi }));
};
const useSeparateProps = (formModalProps, formCallbacks) => {
    return useMemo(() => {
        const [modalProps, formProps] = splitObject(formModalProps, {
            title: true,
            width: true,
            minWidth: true,
            maxWidth: true,
            bodyHeight: true,
            bodyMinHeight: true,
            bodyMaxHeight: true,
            bodyStyle: true,
            notScrollable: true,
            resizable: true,
            isOpened: true,
            headerStyle: true,
            headerIcon: true,
            footerStyle: true,
            closeFormConfirmMessage: true,
        });
        formProps.buttons = null;
        return [modalProps, Object.assign(Object.assign({}, formProps), formCallbacks)];
    }, [formCallbacks, formModalProps]);
};
