/**
 * @DynamicModalForm
 * @version 0.0.33.59
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {IDFormCallbacks, IDFormProps} from '@src/dForm';
import {useInitModalFormApi} from './hooks/api';
import React, {useMemo} from 'react';

import {DFormModalRender} from './renders/dFormModalRender';
import {SplitObject} from '@krinopotam/js-helpers/helpersObjects/splitObject';
import {useFormCallbacks} from './hooks/callbacks';
import {useInitButtons} from './hooks/buttons';
import {useUpdateMessageBoxTheme} from '@src/messageBox';
import {useGetActualProps} from '@krinopotam/common-hooks';
import {IDFormModalOwnProps, IDFormModalProps, IDFormModalWithoutModalProps, IExtendedModalOwnProps} from '@src/dFormModal/types/dFormModalTypes';

export const DFormModal = (props: IDFormModalProps): React.JSX.Element => {
    useUpdateMessageBoxTheme(); //set current theme to messageBox

    const [allProps, setAllProps] = useGetActualProps(props); //props can be set both by parent component and via api

    /** Separating props related to the Modal component from props directly related to the DFormModal component */
    const [modalProps, formModalProps] = useSeparateModalPropsFromFormProps(allProps);

    //region Init api
    const api = useInitModalFormApi({props: allProps, setProps: setAllProps});
    const buttons = useInitButtons(api, allProps);
    //endregion

    const formCallbacks = useFormCallbacks(api, allProps);
    /** Separating DForm props from pure DFormModal props */
    const [, formProps] = useSeparateProps(formModalProps, formCallbacks);

    return <DFormModalRender formApi={api} modalFormProps={allProps} modalProps={modalProps} formProps={formProps} buttons={buttons} />;
};

/** Separating props related to the Modal component from props directly related to the DFormModal component */
const useSeparateModalPropsFromFormProps = (formModalProps: IDFormModalProps) => {
    return useMemo((): [IExtendedModalOwnProps, IDFormModalWithoutModalProps] => {
        const [modalProps, formProps] = SplitObject<IExtendedModalOwnProps, IDFormModalWithoutModalProps>(formModalProps, {
            afterClose: true,
            animation: true,
            bodyProps: true,
            centered: true,
            children: true,
            className: true,
            classNames: true,
            closable: true,
            closeIcon: true,
            colorType: true,
            confirmLoading: true,
            focusTriggerAfterClose: true,
            forceRender: true,
            getContainer: true,
            headerIcon: true,
            height: true,
            isDraggable: true,
            loading: true,
            mask: true,
            maskAnimation: true,
            maskProps: true,
            maskTransitionName: true,
            modalRender: true,
            mousePosition: true,
            notScrollable: true,
            onAfterOpenChange: true,
            open: true,
            panelRef: true,
            prefixCls: true,
            resizable: true,
            rootClassName: true,
            title: true,
            transitionName: true,
            width: true,
            wrapClassName: true,
            wrapProps: true,
            wrapStyle: true,
            zIndex: true,
            maxHeight: true,
            minHeight: true,
            minWidth: true,
            maxWidth: true,
        });

        return [modalProps, formProps];
    }, [formModalProps]);
};

/** Separating props directly related to the DFormModel component from props directly related to the DForm component */
const useSeparateProps = (formModalProps: IDFormModalWithoutModalProps, formCallbacks: IDFormCallbacks) => {
    return useMemo((): [IDFormModalOwnProps, IDFormProps] => {
        const [formModalOwnProps, formProps] = SplitObject<IDFormModalOwnProps, IDFormProps>(formModalProps, {
            /** these properties will be in formModalOwnProps, rest in formProps */
            closeFormConfirmMessage: true,
            modalStyle: true,
            modalStyles: true,
            onClosed: true,
            onClosing: true,
            onDataFetch: true,
            onDataFetchComplete: true,
            onDataFetchError: true,
            onDataFetchSuccess: true,
            onDataSetChange: true,
            onFormDirtyStateChanged: true,
            onFormDisabledStateChanged: true,
            onFormHasErrors: true,
            onFormHasNoErrors: true,
            onFormInit: true,
            onFormModelInitialized: true,
            onFormReadOnlyStateChanged: true,
            onFormReadyStateChanged: true,
            onFormValidated: true,
            onFormValuesChanged: true,
            onOpen: true,
            onOpened: true,
            onSubmit: true,
            onSubmitComplete: true,
            onSubmitError: true,
            onSubmitSuccess: true,
            onSubmitValidation: true,
            onCancel: true,
            language: true, //common property
            translation: true, //common property
        });

        formProps.buttons = null; //clear form buttons because the modal form has it own buttons

        return [
            formModalOwnProps,
            {
                ...formProps,
                ...formCallbacks,
                language: formModalProps.language,
                translation: formModalProps.translation,
            },
        ];
    }, [formCallbacks, formModalProps]);
};
