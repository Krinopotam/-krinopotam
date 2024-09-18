/**
 * @DynamicModalForm
 * @version 0.0.33.59
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {IDFormProps} from '@src/dForm';
import {useInitApi} from './hooks/api/api';
import React, {useMemo} from 'react';

import {DFormModalRender} from './renders/dFormModalRender';
import {SplitObject} from '@krinopotam/js-helpers/helpersObjects/splitObject';
import {useOverrideCallbacks} from './hooks/useOverrideCallbacks';
import {useInitButtons} from './hooks/useInitButtons';
import {useUpdateMessageBoxTheme} from '@src/messageBox';
import {useGetActualProps} from '@krinopotam/common-hooks';
import {IDFormModalOwnProps, IDFormModalProps} from '@src/dFormModal/types/dFormModalTypes';

export const DFormModal = (props: IDFormModalProps): React.JSX.Element => {
    useUpdateMessageBoxTheme(); //set current theme to messageBox

    const [allProps, setAllProps] = useGetActualProps(props); //props can be set both by parent component and via api
    const allPropsUpd = useOverrideCallbacks(allProps);

    const api = useInitApi({props: allPropsUpd, setProps: setAllProps});
    const buttons = useInitButtons(api, allPropsUpd);

    /** Separating DForm props from pure DFormModal props */
    const [, formProps] = useSeparateProps(allPropsUpd);

    return <DFormModalRender formApi={api} modalFormProps={allPropsUpd} formProps={formProps} buttons={buttons} />;
};

/** Separating props directly related to the DFormModel component from props directly related to the DForm component */
const useSeparateProps = (formModalProps: IDFormModalProps) => {
    return useMemo((): [IDFormModalOwnProps, IDFormProps] => {
        const [formModalOwnProps, formProps] = SplitObject<IDFormModalOwnProps, IDFormProps>(formModalProps, {
            /** these properties will be in formModalOwnProps, rest in formProps */
            closeFormConfirmMessage: true,
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
            onFirstRender: true,
            language: true, //common property
            translation: true, //common property
            modalProps: true,
            title: true,
            open: true,
            width: true,
            maxWidth: true,
            minWidth: true,
            height: true,
            minHeight: true,
            maxHeight: true,
        });

        formProps.buttons = null; //clear form buttons because the modal form has it own buttons

        return [
            formModalOwnProps,
            {
                ...formProps,
                language: formModalProps.language,
                translation: formModalProps.translation,
            },
        ];
    }, [formModalProps]);
};
