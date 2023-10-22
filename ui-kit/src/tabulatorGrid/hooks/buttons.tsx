import {IFormButton, IFormButtons} from '@src/buttonsRow/buttonsRow';
import React, {useCallback, useMemo, useState} from 'react';
import {CopyOutlined, DeleteOutlined, EditOutlined, EyeOutlined, FilterOutlined, MenuOutlined, PlusOutlined} from '@ant-design/icons';
import {HelpersObjects} from '@krinopotam/js-helpers';
import {IGridApi} from './api';
import {IGridRowData, ITabulator} from '@src/tabulatorGrid';
import {ColumnsDialog} from "@src/tabulatorGrid/renders/columnsDialog";

export const useInitButtons = (gridApi: IGridApi): IFormButtons => {
    const [, refreshButtons] = useState({});
    const buttons = gridApi.gridProps.buttons;
    const buttonsSize = gridApi.gridProps.buttonsSize ?? 'small';
    const buttonsPos = gridApi.gridProps.buttonsPosition ?? 'right';
    const iconsOnly = gridApi.gridProps.buttonsIconsOnly;
    const activeRow = gridApi.getActiveRow();
    const selectedRows = gridApi.getSelectedRows();

    gridApi.buttonsApi.refreshButtons = useRefreshButtons(refreshButtons);

    const viewButton = useGetViewButton(gridApi, activeRow, selectedRows);
    const createButton = useGetCreateButton(gridApi);
    const cloneButton = useGetCloneButton(gridApi, activeRow, selectedRows);
    const updateButton = useGetUpdateButton(gridApi, activeRow, selectedRows);
    const deleteButton = useGetDeleteButton(gridApi, selectedRows);
    const filterToggleButton = useGetFilterToggleButton(gridApi, gridApi.tableApi);
    const systemButtons = useGetSystemButton(gridApi, gridApi.tableApi);

    return useMemo(() => {
        const defaultButtons = {
            view: viewButton,
            create: createButton,
            clone: cloneButton,
            update: updateButton,
            delete: deleteButton,
            filterToggle: filterToggleButton,
            system: systemButtons,
        } as IFormButtons;

        const resultButtons = HelpersObjects.mergeObjects(defaultButtons, buttons);

        for (const key in resultButtons) {
            const btn = resultButtons[key];
            if (!btn) continue;
            btn.size = btn.size ?? buttonsSize;
            btn.position = btn.position ?? buttonsPos;
            if (iconsOnly) {
                btn.tooltip = btn.tooltip ?? btn.title?.toString();
                btn.title = undefined;
            }
        }

        return resultButtons;
    }, [buttons, buttonsPos, buttonsSize, cloneButton, createButton, deleteButton, filterToggleButton, iconsOnly, systemButtons, updateButton, viewButton]);
};

const useRefreshButtons = (refreshButtons: React.Dispatch<React.SetStateAction<Record<string, unknown>>>) => {
    return useCallback(() => {
        refreshButtons({});
    }, [refreshButtons]);
};

/** Get view button props */
const useGetViewButton = (gridApi: IGridApi, activeRow: IGridRowData | undefined, selectedRows: IGridRowData[]): IFormButton | undefined => {
    return useMemo(() => {
        const gridProps = gridApi.gridProps;
        const editFormApi = gridApi.editFormApi;
        if (!gridProps.editFormProps || !gridProps.readOnly || gridProps.buttons?.view === null) return undefined;

        return {
            weight: 100,
            title: 'Просмотреть',
            tooltip: 'Просмотреть запись',
            icon: <EyeOutlined />,
            position: 'right',
            disabled: !activeRow || selectedRows.length !== 1,
            hotKeys: [{key: 'Enter'}],
            onClick: () => {
                if (!gridApi.getActiveRow()) return;
                const dataSet = getRowDataSet(gridApi, false);
                editFormApi.open('view', dataSet);
            },
        } satisfies IFormButton;
    }, [activeRow, gridApi, selectedRows.length]);
};

/** Get create button props */
const useGetCreateButton = (gridApi: IGridApi): IFormButton | undefined => {
    return useMemo(() => {
        const gridProps = gridApi.gridProps;

        const editFormApi = gridApi.editFormApi;
        if (!gridProps.editFormProps || gridProps.readOnly || gridProps.buttons?.create === null) return undefined;
        return {
            weight: 110,
            title: 'Создать',
            tooltip: 'Создать новую запись',
            icon: <PlusOutlined />,
            position: 'right',
            hotKeys: [{key: 'Insert'}],
            onClick: () => {
                const dataSet = getRowDataSet(gridApi, true, true);
                editFormApi.open('create', dataSet);
            },
        } satisfies IFormButton;
    }, [gridApi]);
};

/** Get clone button props */
const useGetCloneButton = (gridApi: IGridApi, activeRow: IGridRowData | undefined, selectedRows: IGridRowData[]): IFormButton | undefined => {
    return useMemo(() => {
        const gridProps = gridApi.gridProps;
        const editFormApi = gridApi.editFormApi;
        if (!gridProps.editFormProps || gridProps.readOnly || gridProps.buttons?.clone === null) return undefined;

        return {
            weight: 120,
            title: 'Клонировать',
            tooltip: 'Клонировать запись',
            icon: <CopyOutlined />,
            position: 'right',
            disabled: !activeRow || selectedRows.length !== 1,
            hotKeys: [{key: 'F9'}],
            onClick: () => {
                if (!gridApi.getActiveRow()) return;
                const dataSet = getRowDataSet(gridApi, false);
                editFormApi.open('clone', dataSet);
            },
        } satisfies IFormButton;
    }, [activeRow, gridApi, selectedRows.length]);
};

/** Get update button props */
const useGetUpdateButton = (gridApi: IGridApi, activeRow: IGridRowData | undefined, selectedRows: IGridRowData[]): IFormButton | undefined => {
    return useMemo(() => {
        const gridProps = gridApi.gridProps;
        const editFormApi = gridApi.editFormApi;
        if (!gridProps.editFormProps || gridProps.readOnly || gridProps.buttons?.update === null) return undefined;

        return {
            weight: 130,
            title: 'Редактировать',
            tooltip: 'Редактировать запись',
            icon: <EditOutlined />,
            position: 'right',
            disabled: !activeRow || selectedRows.length !== 1,
            hotKeys: [{key: 'Enter'}, {key: 'F2'}],
            onClick: () => {
                if (!gridApi.getActiveRow()) return;
                const dataSet = getRowDataSet(gridApi, false);
                editFormApi.open('update', dataSet);
            },
        } satisfies IFormButton;
    }, [activeRow, gridApi, selectedRows.length]);
};

/** Get delete button props */
const useGetDeleteButton = (gridApi: IGridApi, selectedRows: IGridRowData[]): IFormButton | undefined => {
    return useMemo(() => {
        const gridProps = gridApi.gridProps;
        if (!gridProps.editFormProps || gridProps.readOnly || gridProps.buttons?.delete === null) return undefined;

        return {
            weight: 140,
            title: 'Удалить',
            tooltip: 'Удалить запись',
            icon: <DeleteOutlined />,
            position: 'right',
            colorType: 'danger',
            disabled: !selectedRows || selectedRows.length === 0,
            hotKeys: [{key: 'Delete', ctrl: true}],
            onClick: () => {
                const selectedRows = gridApi.getSelectedRows();
                gridApi.deleteRows(selectedRows);
            },
        } satisfies IFormButton;
    }, [gridApi, selectedRows]);
};

/** Get filter button props */
const useGetFilterToggleButton = (gridApi: IGridApi, tableApi: ITabulator | undefined): IFormButton | undefined => {
    //a separate tableApi parameter is required for the memo field to be updated (initially tableApi is undefined)
    return useMemo(() => {
        const gridProps = gridApi.gridProps;
        if (gridProps.buttons?.filterToggle === null) return undefined;
        if (!tableApi?.isHeaderFilterAvailable()) return undefined;

        return {
            weight: 1000,
            icon: <FilterOutlined />,
            position: 'right',
            active: gridApi.tableApi?.isHeaderFilterVisible(),
            tooltip: 'Фильтр',
            onClick: () => {
                const show = tableApi?.toggleHeaderFilter();

                gridApi.buttonsApi.updateButtons({
                    filterToggle: {
                        active: show,
                    },
                });
            },
        } satisfies IFormButton;
    }, [gridApi.buttonsApi, gridApi.gridProps, gridApi.tableApi, tableApi]);
};

const getRowDataSet = (gridApi: IGridApi, selfParent: boolean, parentOnly?: boolean) => {
    const node = gridApi.getActiveNode();
    return gridApi.getRowData(node, true, selfParent, parentOnly);
};

/** Get system button props */
const useGetSystemButton = (gridApi: IGridApi, tableApi: ITabulator | undefined): IFormButton | undefined => {
    //a separate tableApi parameter is required for the memo field to be updated (initially tableApi is undefined)
    return useMemo(() => {
        const gridProps = gridApi.gridProps;
        if (gridProps.buttons?.filterToggle === null) return undefined;

        //if (tableApi?.disableSystemMenu) return undefined;

        return {
            weight: 2000,
            expandIcon: <MenuOutlined />, //<EllipsisOutlined />
            //tooltip: 'Параметры таблицы',
            position: 'right',
            children: {
                columns: {
                    title: 'Настройки столбцов',
                    onClick: () => {
                        gridApi.openColumnDialog(true)
                    },
                },
            },
            //onClick: () => {}
            //active: gridApi.tableApi?.isHeaderFilterVisible(),
            //disabled: !activeRowKey || selectedRow.length !== 1,
        } satisfies IFormButton;
    }, [gridApi]);
};
