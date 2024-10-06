import {FilterOutlined, MenuOutlined} from '@ant-design/icons';
import {MergeObjects} from '@krinopotam/js-helpers/helpersObjects/mergeObjects';
import {
    defaultButtonClone,
    defaultButtonCreate,
    defaultButtonDelete,
    defaultButtonSelect,
    defaultButtonUpdate,
    defaultButtonView,
    defaultHeaderLabel,
} from '@src/_shared/hooks/buttons/defaultButtonsProps';
import {IGridApi, IGridProps, IGridRowData, ITabulator} from '@src/tabulatorGrid';
import {ITabulatorButton, ITabulatorButtons} from '@src/tabulatorGrid/types/tabulatorGridTypes';
import React, {useCallback, useState} from 'react';

export const useInitButtons = (api: IGridApi): ITabulatorButtons => {
    const props = api.getProps();
    const buttons = props.buttons;
    const buttonsSize = props.buttonsSize ?? 'small';
    const buttonsPos = props.buttonsPosition ?? 'right';
    const activeRow = api.getActiveRow();
    const selectedRows = api.getSelectedRows();

    api.getButtonsApi().refreshButtons = useRefreshButtons();

    const headerLabel = useGetHeaderLabel(props);
    const viewButton = useGetViewButton(api, activeRow, selectedRows);
    const createButton = useGetCreateButton(api);
    const cloneButton = useGetCloneButton(api, activeRow, selectedRows);
    const updateButton = useGetUpdateButton(api, activeRow, selectedRows);
    const deleteButton = useGetDeleteButton(api, selectedRows);
    const selectButton = useGetSelectionButton(api);
    const filterToggleButton = useGetFilterToggleButton(api, api.tableApi);
    const systemButtons = useGetSystemButton(api);

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
        if (!btn || buttonId === 'headerLabel' || btn.type === 'hotkey') continue;
        btn.size = btn.size ?? buttonsSize;
        btn.position = btn.position ?? buttonsPos;
        if (btn.checkDisabled) btn.disabled = !activeRow || selectedRows.length !== 1;
        if (btn.checkHidden) btn.hidden = !activeRow || selectedRows.length !== 1;
    }

    return resultButtons;
};

const useRefreshButtons = () => {
    const [, refreshButtons] = useState({});
    return useCallback(() => {
        refreshButtons({});
    }, [refreshButtons]);
};

/** Get label props */
const useGetHeaderLabel = (props: IGridProps): ITabulatorButton | undefined => {
    if (!props.headerLabel) return undefined;

    return {
        ...defaultHeaderLabel,
        title: props.headerLabel,
    } satisfies ITabulatorButton;
};

/** Get view button props */
const useGetViewButton = (api: IGridApi, activeRow: IGridRowData | undefined, selectedRows: IGridRowData[]): ITabulatorButton | undefined => {
    const gridProps = api.getProps();

    const editFormApi = api.editFormApi;
    if (!gridProps.editFormProps || !gridProps.readOnly || gridProps.buttons?.view === null) return undefined;

    return {
        ...defaultButtonView,
        title: api.t('view'),
        tooltip: api.t('viewRecord'),
        disabled: !activeRow || selectedRows.length !== 1,
        onClick: () => {
            if (!api.getActiveRow()) return;
            const dataSet = getRowDataSet(api, false);
            editFormApi.open('view', {dataSet: dataSet});
        },
    } satisfies ITabulatorButton;
};

/** Get create button props */
const useGetCreateButton = (api: IGridApi): ITabulatorButton | undefined => {
    const props = api.getProps();

    const editFormApi = api.editFormApi;
    if (!props.editFormProps || props.readOnly || props.buttons?.create === null) return undefined;
    return {
        ...defaultButtonCreate,
        title: api.t('create'),
        tooltip: api.t('createNewRecord'),
        onClick: () => {
            const dataSet = getRowDataSet(api, true, true);
            editFormApi.open('create', {dataSet: dataSet});
        },
    } satisfies ITabulatorButton;
};

/** Get clone button props */
const useGetCloneButton = (api: IGridApi, activeRow: IGridRowData | undefined, selectedRows: IGridRowData[]): ITabulatorButton | undefined => {
    const props = api.getProps();

    const editFormApi = api.editFormApi;
    if (!props.editFormProps || props.readOnly || props.buttons?.clone === null) return undefined;

    return {
        ...defaultButtonClone,
        title: api.t('clone'),
        tooltip: api.t('cloneRecord'),
        disabled: !activeRow || selectedRows.length !== 1,
        onClick: () => {
            if (!api.getActiveRow()) return;
            const dataSet = getRowDataSet(api, false);
            editFormApi.open('clone', {dataSet: dataSet});
        },
    } satisfies ITabulatorButton;
};

/** Get update button props */
const useGetUpdateButton = (api: IGridApi, activeRow: IGridRowData | undefined, selectedRows: IGridRowData[]): ITabulatorButton | undefined => {
    const props = api.getProps();

    const editFormApi = api.editFormApi;
    if (!props.editFormProps || props.readOnly || props.buttons?.update === null) return undefined;

    return {
        ...defaultButtonUpdate,
        title: api.t('edit'),
        tooltip: api.t('editRecord'),
        disabled: !activeRow || selectedRows.length !== 1,
        onClick: () => {
            if (!api.getActiveRow()) return;
            const dataSet = getRowDataSet(api, false);
            editFormApi.open('update', {dataSet: dataSet});
        },
    } satisfies ITabulatorButton;
};

/** Get selection button props */
const useGetSelectionButton = (api: IGridApi): ITabulatorButton | undefined => {
    const props = api.getProps();

    const selectionFormApi = api.selectionFormApi;
    if (!props.selectionFormProps || props.readOnly || props.buttons?.select === null) return undefined;

    return {
        ...defaultButtonSelect,
        title: api.t('select'),
        tooltip: api.t('selectRecord'),
        onClick: () => {
            const dataSet = api.getDataSet();
            selectionFormApi.open('update', {dataSet: {select: dataSet}});
        },
    } satisfies ITabulatorButton;
};

/** Get delete button props */
const useGetDeleteButton = (api: IGridApi, selectedRows: IGridRowData[]): ITabulatorButton | undefined => {
    const props = api.getProps();

    if ((!props.editFormProps && !props.selectionFormProps) || props.readOnly || props.buttons?.delete === null) return undefined;

    return {
        ...defaultButtonDelete,
        title: api.t('delete'),
        tooltip: api.t('deleteRecord'),
        disabled: !selectedRows?.length,
        onClick: () => {
            const selectedRows = api.getSelectedRows();
            api.deleteRows(selectedRows);
        },
    } satisfies ITabulatorButton;
};

/** Get filter button props */
const useGetFilterToggleButton = (api: IGridApi, tableApi: ITabulator | undefined): ITabulatorButton | undefined => {
    const gridProps = api.getProps();

    if (gridProps.buttons?.filterToggle === null) return undefined;
    if (!tableApi?.isHeaderFilterAvailable()) return undefined;

    return {
        weight: 1000,
        icon: <FilterOutlined />,
        position: gridProps.systemButtonsPosition ?? 'right',
        active: tableApi?.isHeaderFilterVisible(),
        tooltip: api.t('filter'),
        onClick: () => {
            const show = tableApi?.toggleHeaderFilter();
            api.getButtonsApi().updateButtons({
                filterToggle: {
                    active: show,
                },
            });
        },
    } satisfies ITabulatorButton;
};

const getRowDataSet = (api: IGridApi, selfParent: boolean, parentOnly?: boolean) => {
    const node = api.getActiveNode();
    return api.getRowData(node, true, selfParent, parentOnly);
};

/** Get system button props */
const useGetSystemButton = (api: IGridApi): ITabulatorButton | undefined => {
    const gridProps = api.getProps();

    if (gridProps.buttons?.system === null) return undefined;

    const toCSV =
        gridProps.export?.CSV !== false
            ? {
                  toCSV: {
                      title: api.t('exportCsv'),
                      onClick: () => {
                          api.tableApi?.download('csv', 'table.csv');
                      },
                  },
              }
            : undefined;

    const toXLS =
        gridProps.export?.XlS !== false
            ? {
                  toXlS: {
                      title: api.t('exportXls'),
                      onClick: () => {
                          const xlsx = import('xlsx'); //dynamic import
                          xlsx.then(value => {
                              (window as unknown as {XLSX: typeof value}).XLSX = value; //WORKAROUND: Tabulator uses external library sheetjs (expects XLSX.utils exists in global scope)
                              api.tableApi?.download('xlsx', 'table.xlsx');
                          });
                      },
                  },
              }
            : undefined;

    return {
        weight: 2000,
        expandIcon: <MenuOutlined />, //<EllipsisOutlined />
        position: gridProps.systemButtonsPosition ?? 'right',
        children: {
            ...toCSV,
            ...toXLS,
            columns: {
                title: api.t('columnsSettings'),
                onClick: () => {
                    api.openColumnDialog(true);
                },
            },
        },
    } satisfies ITabulatorButton;
};
