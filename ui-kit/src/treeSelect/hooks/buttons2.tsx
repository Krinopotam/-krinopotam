import {IFormButtons} from '@src/buttonsRow/buttonsRow';
import {IsPromise, MergeObjects} from '@krinopotam/js-helpers';
import React, {useMemo} from 'react';
import {ITreeSelectApi, ITreeSelectDeletePromise} from '@src/treeSelect';
import {DeleteOutlined, EditOutlined, PlusOutlined} from '@ant-design/icons';
import {IDFormModalApi} from '@src/dFormModal';
import {MessageBoxApi, MessageBox} from '@src/messageBox';
import {IError} from '@krinopotam/service-types';
import {IsDebugMode} from "@krinopotam/common-hooks";

/** Generate buttons */
export const useInitButtons = (api: ITreeSelectApi, formApi: IDFormModalApi) => {
    const selectedNodes = api.getSelectedNodes();
    const treeProps = api.getProps();
    return useMemo((): IFormButtons => {
        const defaultButtons: IFormButtons = {
            add: {
                icon: <PlusOutlined />,
                tooltip: 'Добавить',
                position: 'right',
                onClick: () => {
                    formApi.open('create');
                },
            },
            edit: {
                icon: <EditOutlined />,
                tooltip: 'Редактировать',
                position: 'right',
                disabled: !selectedNodes || selectedNodes.length !== 1,
                onClick: () => {
                    const nodes = api.getSelectedNodes();
                    if (nodes?.length !== 1) return;
                    formApi.open('update', {dataSet: nodes[0]});
                },
            },
            delete: {
                icon: <DeleteOutlined />,
                tooltip: 'Удалить',
                position: 'right',
                disabled: !selectedNodes || selectedNodes.length < 1,
                onClick: () => {
                    deleteHandler(api);
                },
            },
        };

        return MergeObjects(defaultButtons, treeProps.editButtons);
    }, [api, formApi, selectedNodes, treeProps.editButtons]);
};

const deleteHandler = (api: ITreeSelectApi) => {
    const treeProps = api.getProps();
    const buttonsApi = api.getButtonsApi()
    const selectedNodes = api.getSelectedNodes();
    if (!selectedNodes?.length) return;

    let messageBox: MessageBoxApi;
    const removeRows = () => {
        const deletePromise = treeProps?.onDelete?.(selectedNodes, api);

        if (IsPromise(deletePromise)) {
            if (!treeProps.confirmDelete) {
                buttonsApi.loading('delete', true);
                buttonsApi.disabled('add', true);
                buttonsApi.disabled('edit', true);
            }
            const promiseResult = deletePromise as ITreeSelectDeletePromise;
            promiseResult
                .then(() => {
                    if (!api.isMounted()) return;
                    api.deleteNodes(selectedNodes);
                    api.setValue(null);
                    if (!treeProps.confirmDelete) {
                        buttonsApi.loading('delete', false);
                        buttonsApi.disabled('delete', true);
                        buttonsApi.disabled('add', false);
                    } else messageBox?.destroy();
                })
                .catch((error: IError) => {
                    if (!api.isMounted()) return;
                    if (!treeProps.confirmDelete) {
                        buttonsApi.loading('delete', false);
                        buttonsApi.disabled('add', false);
                        buttonsApi.disabled('edit', false);
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
                    });
                });
            return;
        }

        api.deleteNodes(selectedNodes);
        api.setValue(null);
        if (messageBox) messageBox.destroy();
    };

    if (treeProps.confirmDelete) {
        messageBox = MessageBox.confirmWaiter({
            content: treeProps.nodeDeleteMessage ?? 'Удалить выбранные строки?',
            onOk: removeRows,
        });
    } else {
        removeRows();
    }
};
