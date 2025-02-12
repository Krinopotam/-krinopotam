import {DFormModal, IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import React, {useState} from 'react';
import {SourceEditor} from '@src/dFormConstructor/renders/sourceEditor/sourceEditor';
import {CustomField, ICustomFieldProps} from '@src/dForm/fields/custom';
import {ISourceEditorApi} from "@src/dFormConstructor/renders/sourceEditor/api/usePrepareApi";

export const SourceEditorModal = ({sourceFormApi}: { sourceFormApi: IDFormModalApi }) => {
    const [codeEditorApi] = useState({} as ISourceEditorApi);

    const formProps: IDFormModalProps = {
        apiRef: sourceFormApi,
        height: 500,
        width: 700,
        confirmChanges: false,
        fieldsProps: {
            codeEditor: {
                component: CustomField,
                onRender: () => <SourceEditor apiRef={codeEditorApi}/>,
                style: {position: 'relative', display: "flex", flex: 1,        minHeight: 0,
                    minWidth:0,}
            } as ICustomFieldProps,
        },

        buttons: {
            ok: {
                title: 'Submit',
                weight: 1,
                onClick: () => {
                    codeEditorApi.apply();
                    sourceFormApi.forceClose();
                },
            },
            apply: {
                title: 'Apply',
                weight: 2,
                onClick: () => {
                    codeEditorApi.apply();
                },
            },
            cancel: {title: 'Close', weight: 3},
        },
    };

    return <DFormModal {...formProps} />;
};
