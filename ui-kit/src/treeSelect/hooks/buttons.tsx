import {IFormButtons} from '@src/buttonsRow/buttonsRow';
import {HelpersObjects} from "@krinopotam/js-helpers";
import React, {useMemo} from 'react';
import {ITreeSelectApi, ITreeSelectDeletePromise} from '@src/treeSelect';
import {DeleteOutlined, EditOutlined, PlusOutlined} from '@ant-design/icons';
import {IDFormModalApi} from '@src/dFormModal';
import {MessageBoxApi, MessageBox} from '@src/messageBox';

/** Generate buttons */
export const useInitButtons = (api: ITreeSelectApi, formApi: IDFormModalApi) => {
    const selectedNodes = api.getValues();
    const treeProps = api.getProps();
    return useMemo((): IFormButtons => {
        const defaultButtons: IFormButtons = {
            add: {
                icon: <PlusOutlined />,
                tooltip: 'Добавить',
                position: 'left',
                onClick: () => {
                    formApi.open('create');
                },
            },
            edit: {
                icon: <EditOutlined />,
                tooltip: 'Редактировать',
                position: 'center',
                disabled: !selectedNodes || selectedNodes.length !== 1,
                onClick: () => {
                    const values = api.getValues();
                    if (values.length !== 1) return;
                    formApi.open('update', values[0]);
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

        return HelpersObjects.mergeObjects(defaultButtons, treeProps.editButtons);
    }, [api, formApi, selectedNodes, treeProps.editButtons]);
};

const deleteHandler = (api: ITreeSelectApi) => {
    const treeProps = api.getProps();
    const selectedNodes = api.getValues();
    if (selectedNodes.length < 1) return;

    let messageBox: MessageBoxApi;
    const removeRows = () => {
        const deletePromise = treeProps?.onDelete?.(selectedNodes, api);

        if (HelpersObjects.isPromise(deletePromise)) {
            if (!treeProps.confirmDelete) {
                api.buttonsApi.loading('delete', true);
                api.buttonsApi.disabled('add', true);
                api.buttonsApi.disabled('edit', true);
            }
            const promiseResult = deletePromise as ITreeSelectDeletePromise;
            promiseResult
                .then(() => {
                    if (!api.isMounted()) return;
                    api.deleteNodes(selectedNodes);
                    api.setValues(null);
                    if (!treeProps.confirmDelete) {
                        api.buttonsApi.loading('delete', false);
                        api.buttonsApi.disabled('delete', true);
                        api.buttonsApi.disabled('add', false);
                    } else messageBox?.destroy();
                })
                .catch((error:{message:string}) => {
                    if (!api.isMounted()) return;
                    if (!treeProps.confirmDelete) {
                        api.buttonsApi.loading('delete', false);
                        api.buttonsApi.disabled('add', false);
                        api.buttonsApi.disabled('edit', false);
                    } else messageBox?.destroy();
                    MessageBox.alert({content: error.message, colorType: 'danger'});
                });
            return;
        }

        api.deleteNodes(selectedNodes);
        api.setValues(null);
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
