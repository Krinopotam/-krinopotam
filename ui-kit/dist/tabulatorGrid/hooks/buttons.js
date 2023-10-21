import React, { useCallback, useMemo, useState } from 'react';
import { CopyOutlined, DeleteOutlined, EditOutlined, EyeOutlined, FilterOutlined, PlusOutlined } from '@ant-design/icons';
import { HelpersObjects } from '@krinopotam/js-helpers';
export const useInitButtons = (gridApi) => {
    var _a, _b;
    const [, refreshButtons] = useState({});
    const buttons = gridApi.gridProps.buttons;
    const buttonsSize = (_a = gridApi.gridProps.buttonsSize) !== null && _a !== void 0 ? _a : 'small';
    const buttonsPos = (_b = gridApi.gridProps.buttonsPosition) !== null && _b !== void 0 ? _b : 'right';
    const activeRow = gridApi.getActiveRow();
    const selectedRows = gridApi.getSelectedRows();
    gridApi.buttonsApi.refreshButtons = useRefreshButtons(refreshButtons);
    const vewButton = useGetViewButton(gridApi, activeRow, selectedRows);
    const createButton = useGetCreateButton(gridApi);
    const cloneButton = useGetCloneButton(gridApi, activeRow, selectedRows);
    const updateButton = useGetUpdateButton(gridApi, activeRow, selectedRows);
    const deleteButton = useGetDeleteButton(gridApi, selectedRows);
    const filterToggleButton = useGetFilterToggleButton(gridApi, gridApi.tableApi);
    return useMemo(() => {
        var _a, _b;
        const defaultButtons = {
            view: vewButton,
            create: createButton,
            clone: cloneButton,
            update: updateButton,
            delete: deleteButton,
            filterToggle: filterToggleButton,
        };
        const resultButtons = HelpersObjects.mergeObjects(defaultButtons, buttons);
        for (const key in resultButtons) {
            const btn = resultButtons[key];
            if (!btn)
                continue;
            btn.size = (_a = btn.size) !== null && _a !== void 0 ? _a : buttonsSize;
            btn.position = (_b = btn.position) !== null && _b !== void 0 ? _b : buttonsPos;
        }
        return resultButtons;
    }, [buttons, buttonsPos, buttonsSize, cloneButton, createButton, deleteButton, filterToggleButton, updateButton, vewButton]);
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
            weight: 100,
            title: 'Просмотреть',
            icon: React.createElement(EyeOutlined, null),
            position: 'right',
            disabled: !activeRow || selectedRows.length !== 1,
            hotKeys: [{ key: 'Enter' }],
            onClick: () => {
                if (!gridApi.getActiveRow())
                    return;
                const dataSet = getRowDataSet(gridApi, false);
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
            weight: 110,
            title: 'Создать',
            icon: React.createElement(PlusOutlined, null),
            position: 'right',
            hotKeys: [{ key: 'Insert' }],
            onClick: () => {
                const dataSet = getRowDataSet(gridApi, true, true);
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
            weight: 120,
            title: 'Клонировать',
            icon: React.createElement(CopyOutlined, null),
            position: 'right',
            disabled: !activeRow || selectedRows.length !== 1,
            hotKeys: [{ key: 'F9' }],
            onClick: () => {
                if (!gridApi.getActiveRow())
                    return;
                const dataSet = getRowDataSet(gridApi, false);
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
            weight: 130,
            title: 'Редактировать',
            icon: React.createElement(EditOutlined, null),
            position: 'right',
            disabled: !activeRow || selectedRows.length !== 1,
            hotKeys: [{ key: 'Enter' }, { key: 'F2' }],
            onClick: () => {
                if (!gridApi.getActiveRow())
                    return;
                const dataSet = getRowDataSet(gridApi, false);
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
            weight: 140,
            title: 'Удалить',
            icon: React.createElement(DeleteOutlined, null),
            position: 'right',
            colorType: 'danger',
            disabled: !selectedRows || selectedRows.length === 0,
            hotKeys: [{ key: 'Delete', ctrl: true }],
            onClick: () => {
                const selectedRows = gridApi.getSelectedRows();
                gridApi.deleteRows(selectedRows);
            },
        };
    }, [gridApi, selectedRows]);
};
const useGetFilterToggleButton = (gridApi, tableApi) => {
    return useMemo(() => {
        var _a, _b;
        const gridProps = gridApi.gridProps;
        if (((_a = gridProps.buttons) === null || _a === void 0 ? void 0 : _a.filterToggle) === null)
            return undefined;
        if (!(tableApi === null || tableApi === void 0 ? void 0 : tableApi.isHeaderFilterAvailable()))
            return undefined;
        return {
            weight: 1000,
            title: '',
            icon: React.createElement(FilterOutlined, null),
            position: 'right',
            active: (_b = gridApi.tableApi) === null || _b === void 0 ? void 0 : _b.isHeaderFilterVisible(),
            onClick: () => {
                const show = tableApi === null || tableApi === void 0 ? void 0 : tableApi.toggleHeaderFilter();
                gridApi.buttonsApi.updateButtons({
                    filterToggle: {
                        active: show,
                    },
                });
            },
        };
    }, [gridApi, tableApi]);
};
const getRowDataSet = (gridApi, selfParent, parentOnly) => {
    const node = gridApi.getActiveNode();
    return gridApi.getRowData(node, true, selfParent, parentOnly);
};
