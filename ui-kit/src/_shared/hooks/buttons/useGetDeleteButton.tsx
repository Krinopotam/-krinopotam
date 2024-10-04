import {IsPromise} from '@krinopotam/js-helpers/helpersObjects/isPromise';
import {AnyType, IError} from '@krinopotam/service-types';
import {defaultButtonDelete} from '@src/_shared/hooks/buttons/defaultButtonsProps';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IButtonsRowApi, IFormButton, IFormButtons} from '@src/buttonsRow';
import {ErrorMessage} from '@src/errorMessage';
import {MessageBox, MessageBoxApi} from '@src/messageBox';
import React, {useMemo} from 'react';

/** Get delete button props */
export const useGetDeleteButton = (
    api: {
        t: (str: 'error' | 'delete' | 'deleteGroup' | 'deleteRecord' | 'deleteRecordsGroup' | 'deleteSelectedRecordQt') => string;
        getIsMounted: ITreeComponentApi['getIsMounted'];
        getButtonsApi: () => IButtonsRowApi;
        removeNode: ITreeComponentApi['removeNode'];
    },
    props: {
        confirmDelete?: boolean;
        groupsMode?: boolean;
        disabled?: boolean;
        readOnly?: boolean;
        language?: AnyType;
        buttons?: IFormButtons;
        nodeDeleteMessage?: React.ReactNode;
        onDelete?: (node: Record<string, AnyType>, api: AnyType) => Promise<AnyType> | void | undefined;
    },
    activeNode: Record<string, AnyType> | undefined,
    isLeaf?: boolean,
    onStart?: () => void,
    onComplete?: () => void
): IFormButton | undefined => {
    return useMemo(() => {
        if (!props.onDelete || props.disabled || props.readOnly || props.buttons?.delete === null) return undefined;
        return {
            ...defaultButtonDelete,
            title: !isLeaf && props.groupsMode ? api.t('deleteGroup') : api.t('delete'),
            tooltip: !isLeaf && props.groupsMode ? api.t('deleteRecordsGroup') : api.t('deleteRecord'),
            disabled: !activeNode,
            onClick: () => {
                if (!activeNode) return;
                onStart?.();
                if (!props.confirmDelete) {
                    deleteNode(activeNode, props, api, undefined, onComplete);
                    return;
                }

                const messageBox = MessageBox.confirmWaiter({
                    language: props.language,
                    content: props.nodeDeleteMessage ?? api.t('deleteSelectedRecordQt'),
                    colorType: 'danger',
                    onOk: () => {
                        deleteNode(activeNode, props, api, messageBox, onComplete);
                    },
                    onCancel: () => {
                        messageBox.destroy();
                        onComplete?.();
                    },
                });
            },
        } satisfies IFormButton;
    }, [props, isLeaf, api, activeNode, onStart, onComplete]);
};

const deleteNode = (
    node: Record<string, AnyType>,
    props: {
        confirmDelete?: boolean;
        selectNewNode?: boolean;
        language?: AnyType;
        onDelete?: (node: Record<string, AnyType>, api: AnyType) => Promise<AnyType> | void | undefined;
    },
    api: {
        t: (str: 'error' | 'delete' | 'deleteGroup' | 'deleteRecord' | 'deleteRecordsGroup' | 'deleteSelectedRecordQt') => string;
        getIsMounted: ITreeComponentApi['getIsMounted'];
        getButtonsApi: () => IButtonsRowApi;
        removeNode: ITreeComponentApi['removeNode'];
    },
    messageBox?: MessageBoxApi,
    onComplete?: () => void
) => {
    const buttonsApi: IButtonsRowApi = api.getButtonsApi();
    const deleteResult = props?.onDelete?.(node, api);

    if (!IsPromise(deleteResult)) {
        api.removeNode(node, {select: props.selectNewNode ? 'next' : undefined});
        if (messageBox) messageBox.destroy();
        onComplete?.();
        return;
    }

    if (!props.confirmDelete) {
        buttonsApi.loading('delete', true);
        buttonsApi.disableAll(true);
    }

    deleteResult
        .then(() => {
            messageBox?.destroy();
            if (!api.getIsMounted()) return;
            api.removeNode(node, {select: props.selectNewNode ? 'next' : undefined});
            if (!props.confirmDelete) {
                buttonsApi.loading('delete', false);
                buttonsApi.disableAll(false);
            }
            onComplete?.();
        })
        .catch((error: IError) => {
            messageBox?.destroy();
            if (!api.getIsMounted()) return;
            if (!props.confirmDelete) {
                buttonsApi.loading('delete', false);
                buttonsApi.disableAll(false);
            }

            MessageBox.alert({
                language: props.language,
                title: api.t('error'),
                content: <ErrorMessage error={error} />,
                colorType: 'danger',
                onOk: () => {
                    onComplete?.();
                },
            });
        });
};
