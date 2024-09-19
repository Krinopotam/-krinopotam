import React, {useCallback, useMemo, useState} from 'react';
import {FilterOutlined, MenuOutlined} from '@ant-design/icons';
import {MergeObjects} from '@krinopotam/js-helpers/helpersObjects/mergeObjects';
import {IGridApi, IGridProps, IGridRowData, ITabulator} from '@src/tabulatorGrid';
import {ITabulatorButton, ITabulatorButtons} from '@src/tabulatorGrid/types/tabulatorGridTypes';
import {translations} from '@src/tabulatorGrid/translations/translations';
import {useTranslate} from '@src/_shared/hooks/useTranslate';
import {
    defaultButtonClone,
    defaultButtonCreate,
    defaultButtonDelete,
    defaultButtonSelect,
    defaultButtonUpdate,
    defaultButtonView,
    defaultHeaderLabel,
} from '@src/_shared/hooks/buttons/defaultButtonsProps';

export const useInitButtons = (gridApi: IGridApi): ITabulatorButtons => {
    const props = gridApi.getProps();
    const buttons = props.buttons;
    const buttonsSize = props.buttonsSize ?? 'small';
    const buttonsPos = props.buttonsPosition ?? 'right';
    const activeRow = gridApi.getActiveRow();
    const selectedRows = gridApi.getSelectedRows();

    gridApi.getButtonsApi().refreshButtons = useRefreshButtons();

    const headerLabel = useGetHeaderLabel(props);
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
        } as ITabulatorButtons;

        const resultButtons = MergeObjects(defaultButtons, buttons);

        for (const buttonId in resultButtons) {
            const btn = resultButtons[buttonId];
            if (!btn || buttonId === 'headerLabel') continue;
            btn.size = btn.size ?? buttonsSize;
            btn.position = btn.position ?? buttonsPos;
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
        activeRow,
        selectedRows.length,
    ]);
};

const useRefreshButtons = () => {
    const [, refreshButtons] = useState({});
    return useCallback(() => {
        refreshButtons({});
    }, [refreshButtons]);
};

/** Get label props */
const useGetHeaderLabel = (props: IGridProps): ITabulatorButton | undefined => {
    return useMemo(() => {
        if (!props.headerLabel) return undefined;

        return {
            ...defaultHeaderLabel,
            title: props.headerLabel,
        } satisfies ITabulatorButton;
    }, [props]);
};

/** Get view button props */
const useGetViewButton = (gridApi: IGridApi, activeRow: IGridRowData | undefined, selectedRows: IGridRowData[]): ITabulatorButton | undefined => {
    const gridProps = gridApi.getProps();
    const t = useTranslate(gridProps.language, translations, gridProps.translation);

    return useMemo(() => {
        const editFormApi = gridApi.editFormApi;
        if (!gridProps.editFormProps || !gridProps.readOnly || gridProps.buttons?.view === null) return undefined;

        return {
            ...defaultButtonView,
            title: t('view'),
            tooltip: t('viewRecord'),
            disabled: !activeRow || selectedRows.length !== 1,
            onClick: () => {
                if (!gridApi.getActiveRow()) return;
                const dataSet = getRowDataSet(gridApi, false);
                editFormApi.open('view', {dataSet: dataSet});
            },
        } satisfies ITabulatorButton;
    }, [activeRow, gridApi, gridProps.buttons?.view, gridProps.editFormProps, gridProps.readOnly, selectedRows.length, t]);
};

/** Get create button props */
const useGetCreateButton = (gridApi: IGridApi): ITabulatorButton | undefined => {
    const gridProps = gridApi.getProps();
    const t = useTranslate(gridProps.language, translations, gridProps.translation);

    return useMemo(() => {
        const editFormApi = gridApi.editFormApi;
        if (!gridProps.editFormProps || gridProps.readOnly || gridProps.buttons?.create === null) return undefined;
        return {
            ...defaultButtonCreate,
            title: t('create'),
            tooltip: t('createNewRecord'),
            onClick: () => {
                const dataSet = getRowDataSet(gridApi, true, true);
                editFormApi.open('create', {dataSet: dataSet});
            },
        } satisfies ITabulatorButton;
    }, [gridApi, gridProps.buttons?.create, gridProps.editFormProps, gridProps.readOnly, t]);
};

/** Get clone button props */
const useGetCloneButton = (gridApi: IGridApi, activeRow: IGridRowData | undefined, selectedRows: IGridRowData[]): ITabulatorButton | undefined => {
    const gridProps = gridApi.getProps();
    const t = useTranslate(gridProps.language, translations, gridProps.translation);

    return useMemo(() => {
        const editFormApi = gridApi.editFormApi;
        if (!gridProps.editFormProps || gridProps.readOnly || gridProps.buttons?.clone === null) return undefined;

        return {
            ...defaultButtonClone,
            title: t('clone'),
            tooltip: t('cloneRecord'),
            disabled: !activeRow || selectedRows.length !== 1,
            onClick: () => {
                if (!gridApi.getActiveRow()) return;
                const dataSet = getRowDataSet(gridApi, false);
                editFormApi.open('clone', {dataSet: dataSet});
            },
        } satisfies ITabulatorButton;
    }, [activeRow, gridApi, gridProps.buttons?.clone, gridProps.editFormProps, gridProps.readOnly, selectedRows.length, t]);
};

/** Get update button props */
const useGetUpdateButton = (gridApi: IGridApi, activeRow: IGridRowData | undefined, selectedRows: IGridRowData[]): ITabulatorButton | undefined => {
    const gridProps = gridApi.getProps();
    const t = useTranslate(gridProps.language, translations, gridProps.translation);

    return useMemo(() => {
        const editFormApi = gridApi.editFormApi;
        if (!gridProps.editFormProps || gridProps.readOnly || gridProps.buttons?.update === null) return undefined;

        return {
            ...defaultButtonUpdate,
            title: t('edit'),
            tooltip: t('editRecord'),
            disabled: !activeRow || selectedRows.length !== 1,
            onClick: () => {
                if (!gridApi.getActiveRow()) return;
                const dataSet = getRowDataSet(gridApi, false);
                editFormApi.open('update', {dataSet: dataSet});
            },
        } satisfies ITabulatorButton;
    }, [activeRow, gridApi, gridProps.buttons?.update, gridProps.editFormProps, gridProps.readOnly, selectedRows.length, t]);
};

/** Get selection button props */
const useGetSelectionButton = (gridApi: IGridApi): ITabulatorButton | undefined => {
    const gridProps = gridApi.getProps();
    const t = useTranslate(gridProps.language, translations, gridProps.translation);

    return useMemo(() => {
        const selectionFormApi = gridApi.selectionFormApi;
        if (!gridProps.selectionFormProps || gridProps.readOnly || gridProps.buttons?.select === null) return undefined;

        return {
            ...defaultButtonSelect,
            title: t('select'),
            tooltip: t('selectRecord'),
            onClick: () => {
                const dataSet = gridApi.getDataSet();
                selectionFormApi.open('update', {dataSet: {select: dataSet}});
            },
        } satisfies ITabulatorButton;
    }, [gridApi, gridProps.buttons?.select, gridProps.readOnly, gridProps.selectionFormProps, t]);
};

/** Get delete button props */
const useGetDeleteButton = (gridApi: IGridApi, selectedRows: IGridRowData[]): ITabulatorButton | undefined => {
    const gridProps = gridApi.getProps();
    const t = useTranslate(gridProps.language, translations, gridProps.translation);

    return useMemo(() => {
        if ((!gridProps.editFormProps && !gridProps.selectionFormProps) || gridProps.readOnly || gridProps.buttons?.delete === null) return undefined;

        return {
            ...defaultButtonDelete,
            title: t('delete'),
            tooltip: t('deleteRecord'),
            disabled: !selectedRows?.length,
            onClick: () => {
                const selectedRows = gridApi.getSelectedRows();
                gridApi.deleteRows(selectedRows);
            },
        } satisfies ITabulatorButton;
    }, [gridApi, gridProps.buttons?.delete, gridProps.editFormProps, gridProps.readOnly, gridProps.selectionFormProps, selectedRows, t]);
};

/** Get filter button props */
const useGetFilterToggleButton = (gridApi: IGridApi, tableApi: ITabulator | undefined): ITabulatorButton | undefined => {
    const gridProps = gridApi.getProps();
    const t = useTranslate(gridProps.language, translations, gridProps.translation);

    //a separate tableApi parameter is required for the memo field to be updated (initially tableApi is undefined)
    return useMemo(() => {
        if (gridProps.buttons?.filterToggle === null) return undefined;
        if (!tableApi?.isHeaderFilterAvailable()) return undefined;

        return {
            weight: 1000,
            icon: <FilterOutlined />,
            position: 'right',
            active: tableApi?.isHeaderFilterVisible(),
            tooltip: t('filter'),
            onClick: () => {
                const show = tableApi?.toggleHeaderFilter();
                gridApi.getButtonsApi().updateButtons({
                    filterToggle: {
                        active: show,
                    },
                });
            },
        } satisfies ITabulatorButton;
    }, [gridApi, gridProps.buttons?.filterToggle, t, tableApi]);
};

const getRowDataSet = (gridApi: IGridApi, selfParent: boolean, parentOnly?: boolean) => {
    const node = gridApi.getActiveNode();
    return gridApi.getRowData(node, true, selfParent, parentOnly);
};

/** Get system button props */
const useGetSystemButton = (gridApi: IGridApi): ITabulatorButton | undefined => {
    const gridProps = gridApi.getProps();
    const t = useTranslate(gridProps.language, translations, gridProps.translation);

    return useMemo(() => {
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
                    title: t('exportXls'),
                    onClick: () => {
                        const xlsx = import('xlsx'); //dynamic import
                        xlsx.then(value => {
                            (window as unknown as {XLSX: typeof value}).XLSX = value; //WORKAROUND: Tabulator uses external library sheetjs (expects XLSX.utils exists in global scope)
                            gridApi.tableApi?.download('xlsx', 'table.xlsx');
                        });
                    },
                },
                columns: {
                    title: t('columnsSettings'),
                    onClick: () => {
                        gridApi.openColumnDialog(true);
                    },
                },
            },
        } satisfies ITabulatorButton;
    }, [gridApi, gridProps.buttons?.filterToggle, t]);
};
