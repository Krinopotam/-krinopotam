import {IFormButton, IFormButtons} from '@src/buttonsRow/buttonsRow';
import React, {useCallback, useMemo, useState} from 'react';
import {CopyOutlined, DeleteOutlined, EditOutlined, EyeOutlined, FilterOutlined, MenuOutlined, PlusOutlined, PlusSquareOutlined} from '@ant-design/icons';
import {MergeObjects} from '@krinopotam/js-helpers';
import {IGridApi, IGridRowData, ITabulator} from '@src/tabulatorGrid';

export const useInitButtons = (gridApi: IGridApi): IFormButtons => {
    const [, refreshButtons] = useState({});
    const buttons = gridApi.gridProps.buttons;
    const buttonsSize = gridApi.gridProps.buttonsSize ?? 'small';
    const buttonsPos = gridApi.gridProps.buttonsPosition ?? 'right';
    const iconsOnly = gridApi.gridProps.buttonsIconsOnly;
    const activeRow = gridApi.getActiveRow();
    const selectedRows = gridApi.getSelectedRows();

    gridApi.buttonsApi.refreshButtons = useRefreshButtons(refreshButtons);

    const headerLabel = useGetHeaderLabel(gridApi);
    const viewButton = useGetViewButton(gridApi, activeRow, selectedRows);
    const createButton = useGetCreateButton(gridApi);
    const cloneButton = useGetCloneButton(gridApi, activeRow, selectedRows);
    const updateButton = useGetUpdateButton(gridApi, activeRow, selectedRows);
    const deleteButton = useGetDeleteButton(gridApi, selectedRows);
    const selectButton = useGetSelectionButton(gridApi);
    const filterToggleButton = useGetFilterToggleButton(gridApi, gridApi.tableApi);
    const systemButtons = useGetSystemButton(gridApi);

    return useMemo(() => {
        const defaultButtons = {
            headerLabel: headerLabel,
            view: viewButton,
            create: createButton,
            clone: cloneButton,
            update: updateButton,
            select: selectButton,
            delete: deleteButton,
            filterToggle: filterToggleButton,
            system: systemButtons,
        } as IFormButtons;

        const resultButtons = MergeObjects(defaultButtons, buttons);

        for (const key in resultButtons) {
            const btn = resultButtons[key];
            if (!btn || key === 'headerLabel') continue;
            btn.size = btn.size ?? buttonsSize;
            btn.position = btn.position ?? buttonsPos;
            if (iconsOnly) {
                btn.tooltip = btn.tooltip ?? btn.title?.toString();
                btn.title = undefined;
            }

            if (btn.checkDisabled) btn.disabled = !activeRow || selectedRows.length !== 1;
            if (btn.checkHidden) btn.hidden = !activeRow || selectedRows.length !== 1;
        }

        return resultButtons;
    }, [
        headerLabel,
        viewButton,
        createButton,
        cloneButton,
        updateButton,
        selectButton,
        deleteButton,
        filterToggleButton,
        systemButtons,
        buttons,
        buttonsSize,
        buttonsPos,
        iconsOnly,
        activeRow,
        selectedRows.length,
    ]);
};

const useRefreshButtons = (refreshButtons: React.Dispatch<React.SetStateAction<Record<string, unknown>>>) => {
    return useCallback(() => {
        refreshButtons({});
    }, [refreshButtons]);
};

/** Get label props */
const useGetHeaderLabel = (gridApi: IGridApi): IFormButton | undefined => {
    return useMemo(() => {
        const gridProps = gridApi.gridProps;
        if (!gridProps.headerLabel) return undefined;

        return {
            weight: 1,
            title: gridProps.headerLabel,
            type: 'element',
            position: 'left',
        } satisfies IFormButton;
    }, [gridApi]);
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

/** Get selection button props */
const useGetSelectionButton = (gridApi: IGridApi): IFormButton | undefined => {
    return useMemo(() => {
        const gridProps = gridApi.gridProps;
        const selectionFormApi = gridApi.selectionFormApi;
        if (!gridProps.selectionFormProps || gridProps.readOnly || gridProps.buttons?.select === null) return undefined;

        return {
            weight: 130,
            title: 'Выбрать',
            tooltip: 'Выбрать записи',
            icon: <PlusSquareOutlined />,
            position: 'right',
            hotKeys: [{key: 'Insert'}],
            onClick: () => {
                const dataSet = gridApi.getDataSet();
                selectionFormApi.open('update', {select: dataSet});
            },
        } satisfies IFormButton;
    }, [gridApi]);
};

/** Get delete button props */
const useGetDeleteButton = (gridApi: IGridApi, selectedRows: IGridRowData[]): IFormButton | undefined => {
    return useMemo(() => {
        const gridProps = gridApi.gridProps;
        if ((!gridProps.editFormProps && !gridProps.selectionFormProps) || gridProps.readOnly || gridProps.buttons?.delete === null) return undefined;

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
const useGetSystemButton = (gridApi: IGridApi): IFormButton | undefined => {
    //a separate tableApi parameter is required for the memo field to be updated (initially tableApi is undefined)
    return useMemo(() => {
        const gridProps = gridApi.gridProps;
        if (gridProps.buttons?.filterToggle === null) return undefined;

        return {
            weight: 2000,
            expandIcon: <MenuOutlined />, //<EllipsisOutlined />
            //tooltip: 'Параметры таблицы',
            position: 'right',
            children: {
                /*                toCSV: {
                                    title: 'Экспорт в CSV',
                                    onClick: () => {
                                        gridApi.tableApi?.download('csv', 'table.csv');
                                    },
                                },*/
                toXlsx: {
                    title: 'Экспорт в Excel',
                    onClick: () => {
                        const xlsx = import('xlsx'); //dynamic import
                        xlsx.then(value => {
                            (window as unknown as {XLSX: typeof value}).XLSX = value; //WORKAROUND: Tabulator uses external library sheetjs (expects XLSX.utils exists in global scope)
                            gridApi.tableApi?.download('xlsx', 'table.xlsx');
                        });
                    },
                },
                columns: {
                    title: 'Настройки столбцов',
                    onClick: () => {
                        gridApi.openColumnDialog(true);
                    },
                },
            },
        } satisfies IFormButton;
    }, [gridApi]);
};
