import {ITreeSelectApi, ITreeSelectDeletePromise, ITreeSelectNode, ITreeSelectProps} from '@src/treeSelect';
import React, {Key, useCallback} from 'react';
import {MessageBox, MessageBoxApi} from '@src/messageBox';
import {IsPromise} from '@krinopotam/js-helpers';
import {IError} from '@krinopotam/service-types';
import {IsDebugMode} from '@krinopotam/common-hooks';
import {IButtonsRowApi} from '@src/buttonsRow';

export const useApiDeleteNode = (api: ITreeSelectApi): ITreeSelectApi['deleteNode'] => {
    return useCallback(
        (node: Key | ITreeSelectNode) => {
            const props = api.getProps();
            const buttonsApi = api.getButtonsApi();

            api.setIsOpen(true);
            if (props.confirmDelete) {
                const messageBox = MessageBox.confirmWaiter({
                    content: props.nodeDeleteMessage ?? 'Удалить выбранные строки?',
                    onOk: () => {
                        deleteNode(node, props, api, buttonsApi, messageBox);
                    },
                    onCancel: () => {
                        messageBox.destroy();
                        api.setIsOpen(undefined);
                    },
                });
            } else {
                deleteNode(node, props, api, buttonsApi);
            }
        },
        [api]
    );
};

const deleteNode = (node: Key | ITreeSelectNode, props: ITreeSelectProps, api: ITreeSelectApi, buttonsApi: IButtonsRowApi, messageBox?: MessageBoxApi) => {
    const delNode = typeof node === 'object' ? node : api.getNode(node);
    if (!delNode) {
        api.setIsOpen(undefined);
        if (messageBox) messageBox.destroy();
        return;
    }

    const onDelete = props?.onDelete?.(delNode, api);

    if (!IsPromise(onDelete)) {
        if (api.isNodeSelected(delNode)) api.selectNode(delNode, false);
        api.removeNode(delNode);
        api.setIsOpen(undefined);
        if (messageBox) messageBox.destroy();
        return;
    }

    if (!props.confirmDelete) {
        buttonsApi.loading('delete', true);
        buttonsApi.disabled('create', true);
        buttonsApi.disabled('createGroup', true);
        buttonsApi.disabled('clone', true);
        buttonsApi.disabled('update', true);
    }

    const promiseResult = onDelete as ITreeSelectDeletePromise;
    promiseResult
        .then(() => {
            if (!api.getIsMounted()) return;
            api.removeNode(delNode);
            api.setIsOpen(undefined);
            if (!props.confirmDelete) {
                buttonsApi.loading('delete', false);
                //buttonsApi.disabled('delete', true);
                //buttonsApi.disabled('create', false);
                //buttonsApi.disabled('createGroup', false);
                //buttonsApi.disabled('clone', false);
                //buttonsApi.disabled('update', false);
            } else messageBox?.destroy();
        })
        .catch((error: IError) => {
            if (!api.getIsMounted()) return;
            if (!props.confirmDelete) {
                buttonsApi.loading('delete', false);
                buttonsApi.disabled('create', false);
                buttonsApi.disabled('createGroup', false);
                buttonsApi.disabled('clone', false);
                buttonsApi.disabled('update', false);
            } else messageBox?.destroy();

            MessageBox.alert({
                content: (
                    <>
                        <p>
                            <b>{error.message}</b>
                        </p>
                        {error.stack && IsDebugMode() ? <p>{error.stack}</p> : ''}
                    </>
                ),
                colorType: 'danger',
                onOk: () => {
                    api.setIsOpen(undefined);
                },
            });
        });
};
