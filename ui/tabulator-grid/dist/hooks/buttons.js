import React, { useCallback, useMemo, useRef, useState } from 'react';
import { CopyOutlined, DeleteOutlined, EditOutlined, EyeOutlined, FilterOutlined, PlusOutlined } from '@ant-design/icons';
import { MessageBox } from '@krinopotam/ui-message-box';
import { HelpersObjects } from '@krinopotam/js-helpers';
export const useInitButtons = (gridApi) => {
    const [, refreshButtons] = useState({});
    const buttons = gridApi.gridProps.buttons;
    const activeRow = gridApi.getActiveRow();
    const selectedRows = gridApi.getSelectedRows();
    gridApi.buttonsApi.refreshButtons = useRefreshButtons(refreshButtons);
    const vewButton = useGetViewButton(gridApi, activeRow, selectedRows);
    const createButton = useGetCreateButton(gridApi);
    const cloneButton = useGetCloneButton(gridApi, activeRow, selectedRows);
    const updateButton = useGetUpdateButton(gridApi, activeRow, selectedRows);
    const deleteButton = useGetDeleteButton(gridApi, selectedRows);
    const filterToggleButton = useGetFilterToggleButton(gridApi);
    return useMemo(() => {
        const defaultButtons = {
            view: vewButton,
            create: createButton,
            clone: cloneButton,
            update: updateButton,
            delete: deleteButton,
            filterToggle: filterToggleButton,
        };
        return HelpersObjects.mergeObjects(defaultButtons, buttons);
    }, [buttons, cloneButton, createButton, deleteButton, filterToggleButton, updateButton, vewButton]);
};
const useRefreshButtons = (refreshButtons) => {
    return useCallback(() => {
        refreshButtons({});
    }, [refreshButtons]);
};
const useGetViewButton = (gridApi, activeRow, selectedRows) => {
    return useMemo(() => {
        var _a;
        const gridProps = gridApi.gridProps;
        const editFormApi = gridApi.editFormApi;
        if (!gridProps.editFormProps || !gridProps.readOnly || ((_a = gridProps.buttons) === null || _a === void 0 ? void 0 : _a.view) === null)
            return undefined;
        return {
            title: 'Просмотреть',
            icon: React.createElement(EyeOutlined, null),
            position: 'right',
            size: 'small',
            disabled: !activeRow || selectedRows.length !== 1,
            onClick: () => {
                if (!gridApi.getActiveRow())
                    return;
                const dataSet = getRowDataSet(gridApi, true);
                editFormApi.open('view', dataSet);
            },
        };
    }, [activeRow, gridApi, selectedRows.length]);
};
const useGetCreateButton = (gridApi) => {
    return useMemo(() => {
        var _a;
        const gridProps = gridApi.gridProps;
        const editFormApi = gridApi.editFormApi;
        if (!gridProps.editFormProps || gridProps.readOnly || ((_a = gridProps.buttons) === null || _a === void 0 ? void 0 : _a.create) === null)
            return undefined;
        return {
            title: 'Создать',
            icon: React.createElement(PlusOutlined, null),
            position: 'right',
            size: 'small',
            onClick: () => {
                const dataSet = getRowDataSet(gridApi, false, true);
                editFormApi.open('create', dataSet);
            },
        };
    }, [gridApi]);
};
const useGetCloneButton = (gridApi, activeRow, selectedRows) => {
    return useMemo(() => {
        var _a;
        const gridProps = gridApi.gridProps;
        const editFormApi = gridApi.editFormApi;
        if (!gridProps.editFormProps || gridProps.readOnly || ((_a = gridProps.buttons) === null || _a === void 0 ? void 0 : _a.clone) === null)
            return undefined;
        return {
            title: 'Клонировать',
            icon: React.createElement(CopyOutlined, null),
            position: 'right',
            size: 'small',
            disabled: !activeRow || selectedRows.length !== 1,
            onClick: () => {
                if (!gridApi.getActiveRow())
                    return;
                const dataSet = getRowDataSet(gridApi, true);
                editFormApi.open('clone', dataSet);
            },
        };
    }, [activeRow, gridApi, selectedRows.length]);
};
const useGetUpdateButton = (gridApi, activeRow, selectedRows) => {
    return useMemo(() => {
        var _a;
        const gridProps = gridApi.gridProps;
        const editFormApi = gridApi.editFormApi;
        if (!gridProps.editFormProps || gridProps.readOnly || ((_a = gridProps.buttons) === null || _a === void 0 ? void 0 : _a.update) === null)
            return undefined;
        return {
            title: 'Редактировать',
            icon: React.createElement(EditOutlined, null),
            position: 'right',
            size: 'small',
            disabled: !activeRow || selectedRows.length !== 1,
            onClick: () => {
                if (!gridApi.getActiveRow())
                    return;
                const dataSet = getRowDataSet(gridApi, true);
                editFormApi.open('update', dataSet);
            },
        };
    }, [activeRow, gridApi, selectedRows.length]);
};
const useGetDeleteButton = (gridApi, selectedRows) => {
    return useMemo(() => {
        var _a;
        const gridProps = gridApi.gridProps;
        if (!gridProps.editFormProps || gridProps.readOnly || ((_a = gridProps.buttons) === null || _a === void 0 ? void 0 : _a.delete) === null)
            return undefined;
        return {
            title: 'Удалить',
            icon: React.createElement(DeleteOutlined, null),
            position: 'right',
            danger: true,
            size: 'small',
            disabled: !selectedRows || selectedRows.length === 0,
            onClick: () => {
                deleteHandler(gridApi);
            },
        };
    }, [gridApi, selectedRows]);
};
const deleteHandler = (gridApi) => {
    var _a;
    const gridProps = gridApi.gridProps;
    const selectedRows = gridApi.getSelectedRows();
    let messageBox;
    const removeRows = () => {
        var _a, _b;
        const deletePromise = (_b = (_a = gridProps.callbacks) === null || _a === void 0 ? void 0 : _a.onDelete) === null || _b === void 0 ? void 0 : _b.call(_a, selectedRows, gridApi);
        if (HelpersObjects.isPromise(deletePromise)) {
            if (!gridProps.confirmDelete)
                gridApi.setIsLoading(true);
            const promiseResult = deletePromise;
            promiseResult
                .then(() => {
                if (!gridApi.getIsMounted())
                    return;
                gridApi.deleteRows(selectedRows);
                if (!gridProps.confirmDelete)
                    gridApi.setIsLoading(false);
                else if (messageBox)
                    messageBox.destroy();
            })
                .catch((error) => {
                if (!gridApi.getIsMounted())
                    return;
                if (!gridProps.confirmDelete)
                    gridApi.setIsLoading(false);
                else if (messageBox)
                    messageBox.destroy();
                MessageBox.alert({ content: error.message, type: 'error' });
            });
            return;
        }
        gridApi.deleteRows(selectedRows);
        if (messageBox)
            messageBox.destroy();
    };
    if (gridProps.confirmDelete) {
        messageBox = MessageBox.confirmWaiter({
            content: (_a = gridProps.rowDeleteMessage) !== null && _a !== void 0 ? _a : 'Удалить выбранные строки?',
            onOk: removeRows,
        });
    }
    else {
        removeRows();
    }
};
const useGetFilterToggleButton = (gridApi) => {
    const toggle = useRef(false);
    return useMemo(() => {
        var _a;
        const gridProps = gridApi.gridProps;
        if (((_a = gridProps.buttons) === null || _a === void 0 ? void 0 : _a.filterToggle) === null)
            return undefined;
        return {
            title: '',
            icon: React.createElement(FilterOutlined, null),
            position: 'right',
            size: 'small',
            onClick: () => {
                var _a;
                const filterHeight = 33;
                const tableHolder = document.querySelector('#' + gridApi.getGridId() + ' .tabulator-tableholder');
                const headerElements = document.querySelectorAll('#' + gridApi.getGridId() + ' .tabulator-col');
                const filterElements = document.querySelectorAll('#' + gridApi.getGridId() + ' .tabulator-header-filter');
                if (!tableHolder || !headerElements || !filterElements)
                    return;
                toggle.current = !toggle.current;
                if (!toggle.current)
                    (_a = gridApi.tableApi) === null || _a === void 0 ? void 0 : _a.clearHeaderFilter();
                filterElements.forEach((elem) => {
                    elem.style.display = !toggle.current ? 'none' : 'block';
                });
                let headerHeight = 0;
                headerElements.forEach((elem) => {
                    headerHeight = elem.offsetHeight;
                    elem.style.height = elem.offsetHeight + filterHeight * (toggle.current ? 1 : -1) + 'px';
                });
                const tableHolderOffset = headerHeight + filterHeight * (toggle.current ? 1 : -1);
                tableHolder.style.minHeight = 'calc(100% - ' + tableHolderOffset + 'px)';
                tableHolder.style.height = 'calc(100% - ' + tableHolderOffset + 'px)';
                tableHolder.style.maxHeight = 'calc(100% - ' + tableHolderOffset + 'px)';
                gridApi.buttonsApi.updateButtons({
                    filterToggle: {
                        active: toggle.current,
                    },
                });
            },
        };
    }, [gridApi]);
};
const getRowDataSet = (gridApi, parent, empty) => {
    const activeNode = gridApi.getActiveNode();
    if (!gridApi.tableApi || !activeNode)
        return;
    const gridProps = gridApi.gridProps;
    const dataSet = empty ? {} : Object.assign({}, activeNode.getData());
    if (gridProps.dataTree) {
        const parentFieldKey = gridApi.tableApi.options.dataTreeParentField;
        const childrenKey = gridApi.tableApi.options.dataTreeChildField;
        if (childrenKey)
            delete dataSet[childrenKey];
        if (parentFieldKey && typeof dataSet[parentFieldKey] === 'undefined') {
            const parentNode = parent ? activeNode.getTreeParent() : activeNode;
            if (parentNode)
                dataSet[parentFieldKey] = parentNode.getData();
        }
    }
    return dataSet;
};