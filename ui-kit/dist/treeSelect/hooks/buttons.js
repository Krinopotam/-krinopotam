import { HelpersObjects } from "@krinopotam/js-helpers";
import React, { useMemo } from 'react';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { MessageBox } from '../../messageBox';
export const useInitButtons = (api, formApi) => {
    const selectedNodes = api.getValues();
    const treeProps = api.getProps();
    return useMemo(() => {
        const defaultButtons = {
            add: {
                icon: React.createElement(PlusOutlined, null),
                tooltip: 'Добавить',
                position: 'left',
                onClick: () => {
                    formApi.open('create');
                },
            },
            edit: {
                icon: React.createElement(EditOutlined, null),
                tooltip: 'Редактировать',
                position: 'center',
                disabled: !selectedNodes || selectedNodes.length !== 1,
                onClick: () => {
                    const values = api.getValues();
                    if (values.length !== 1)
                        return;
                    formApi.open('update', values[0]);
                },
            },
            delete: {
                icon: React.createElement(DeleteOutlined, null),
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
const deleteHandler = (api) => {
    var _a;
    const treeProps = api.getProps();
    const selectedNodes = api.getValues();
    if (selectedNodes.length < 1)
        return;
    let messageBox;
    const removeRows = () => {
        var _a;
        const deletePromise = (_a = treeProps === null || treeProps === void 0 ? void 0 : treeProps.onDelete) === null || _a === void 0 ? void 0 : _a.call(treeProps, selectedNodes, api);
        if (HelpersObjects.isPromise(deletePromise)) {
            if (!treeProps.confirmDelete) {
                api.buttonsApi.loading('delete', true);
                api.buttonsApi.disabled('add', true);
                api.buttonsApi.disabled('edit', true);
            }
            const promiseResult = deletePromise;
            promiseResult
                .then(() => {
                if (!api.isMounted())
                    return;
                api.deleteNodes(selectedNodes);
                api.setValues(null);
                if (!treeProps.confirmDelete) {
                    api.buttonsApi.loading('delete', false);
                    api.buttonsApi.disabled('delete', true);
                    api.buttonsApi.disabled('add', false);
                }
                else
                    messageBox === null || messageBox === void 0 ? void 0 : messageBox.destroy();
            })
                .catch((error) => {
                if (!api.isMounted())
                    return;
                if (!treeProps.confirmDelete) {
                    api.buttonsApi.loading('delete', false);
                    api.buttonsApi.disabled('add', false);
                    api.buttonsApi.disabled('edit', false);
                }
                else
                    messageBox === null || messageBox === void 0 ? void 0 : messageBox.destroy();
                MessageBox.alert({ content: error.message, colorType: 'danger' });
            });
            return;
        }
        api.deleteNodes(selectedNodes);
        api.setValues(null);
        if (messageBox)
            messageBox.destroy();
    };
    if (treeProps.confirmDelete) {
        messageBox = MessageBox.confirmWaiter({
            content: (_a = treeProps.nodeDeleteMessage) !== null && _a !== void 0 ? _a : 'Удалить выбранные строки?',
            onOk: removeRows,
        });
    }
    else {
        removeRows();
    }
};
