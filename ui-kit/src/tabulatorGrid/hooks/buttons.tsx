import {IFormButton, IFormButtons} from '@src/buttonsRow/buttonsRow';
import React, {useCallback, useMemo, useState} from 'react';
import {CopyOutlined, DeleteOutlined, EditOutlined, EyeOutlined, FilterOutlined, PlusOutlined} from '@ant-design/icons';
import {MessageBox, MessageBoxApi} from '@src/messageBox';
import {HelpersObjects} from '@krinopotam/js-helpers';
import {IGridApi} from './api';
import {IGridDeletePromise, IGridRowData, ITabulator} from '@src/tabulatorGrid';

export const useInitButtons = (gridApi: IGridApi): IFormButtons => {
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
    const filterToggleButton = useGetFilterToggleButton(gridApi, gridApi.tableApi);

    return useMemo(() => {
        const defaultButtons = {
            view: vewButton,
            create: createButton,
            clone: cloneButton,
            update: updateButton,
            delete: deleteButton,
            filterToggle: filterToggleButton,
        } as IFormButtons;

        return HelpersObjects.mergeObjects(defaultButtons, buttons);
    }, [buttons, cloneButton, createButton, deleteButton, filterToggleButton, updateButton, vewButton]);
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
            title: 'Просмотреть',
            icon: <EyeOutlined/>,
            position: 'right',
            size: 'small',
            disabled: !activeRow || selectedRows.length !== 1,
            hotKeys: [{key: 'Enter'}],
            onClick: () => {
                if (!gridApi.getActiveRow()) return;
                const dataSet = getRowDataSet(gridApi, true);
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
            title: 'Создать',
            icon: <PlusOutlined/>,
            position: 'right',
            size: 'small',
            hotKeys: [{key: 'Insert'}],
            onClick: () => {
                const dataSet = getRowDataSet(gridApi, false, true);
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
            title: 'Клонировать',
            icon: <CopyOutlined/>,
            position: 'right',
            size: 'small',
            disabled: !activeRow || selectedRows.length !== 1,
            hotKeys: [{key: 'F9'}],
            onClick: () => {
                if (!gridApi.getActiveRow()) return;
                const dataSet = getRowDataSet(gridApi, true);
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
            title: 'Редактировать',
            icon: <EditOutlined/>,
            position: 'right',
            size: 'small',
            disabled: !activeRow || selectedRows.length !== 1,
            hotKeys: [{key: 'Enter'}, {key: 'F2'}],
            onClick: () => {
                if (!gridApi.getActiveRow()) return;
                const dataSet = getRowDataSet(gridApi, true);
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
            title: 'Удалить',
            icon: <DeleteOutlined/>,
            position: 'right',
            colorType:'danger',
            size: 'small',
            disabled: !selectedRows || selectedRows.length === 0,
            hotKeys: [{key: 'Delete', ctrl: true}],
            onClick: () => {
                deleteHandler(gridApi);
            },
        } satisfies IFormButton;
    }, [gridApi, selectedRows]);
};

const deleteHandler = (gridApi: IGridApi) => {
    const gridProps = gridApi.gridProps;
    const selectedRows = gridApi.getSelectedRows();

    let messageBox: MessageBoxApi;
    const removeRows = () => {
        const deletePromise = gridProps?.onDelete?.(selectedRows, gridApi);

        if (HelpersObjects.isPromise(deletePromise)) {
            if (!gridProps.confirmDelete) gridApi.setIsLoading(true);
            const promiseResult = deletePromise as IGridDeletePromise;
            promiseResult
                .then(() => {
                    if (!gridApi.getIsMounted()) return;
                    gridApi.deleteRows(selectedRows);
                    if (!gridProps.confirmDelete) gridApi.setIsLoading(false);
                    else if (messageBox) messageBox.destroy();
                })
                .catch((error) => {
                    if (!gridApi.getIsMounted()) return;
                    if (!gridProps.confirmDelete) gridApi.setIsLoading(false);
                    else if (messageBox) messageBox.destroy();
                    MessageBox.alert({content: error.message, colorType: 'danger'});
                });
            return;
        }

        gridApi.deleteRows(selectedRows);
        if (messageBox) messageBox.destroy();
    };

    if (gridProps.confirmDelete) {
        messageBox = MessageBox.confirmWaiter({
            content: gridProps.rowDeleteMessage ?? 'Удалить выбранные строки?',
            onOk: removeRows,
        });
    } else {
        removeRows();
    }
};

/** Get update button props */
const useGetFilterToggleButton = (gridApi: IGridApi, tableApi: ITabulator | undefined): IFormButton | undefined => {
    return useMemo(() => {
        const gridProps = gridApi.gridProps;
        if (gridProps.buttons?.filterToggle === null) return undefined;

        if (!tableApi?.isHeaderFilterAvailable()) return undefined

        return {
            title: '',
            icon: <FilterOutlined/>,
            position: 'right',
            size: 'small',
            active: gridApi.tableApi?.isHeaderFilterVisible(),
            //disabled: !activeRowKey || selectedRow.length !== 1,

            onClick: () => {
                const show = tableApi?.toggleHeaderFilter()

                gridApi.buttonsApi.updateButtons({
                    filterToggle: {
                        active: show,
                    },
                });
            },
        };
    }, [gridApi, tableApi]);
};

const getRowDataSet = (gridApi: IGridApi, parent: boolean, empty?: boolean) => {
    const activeNode = gridApi.getActiveNode();
    if (!gridApi.tableApi || !activeNode) return;
    const gridProps = gridApi.gridProps;

    const dataSet = empty ? {} : {...activeNode.getData()};

    if (gridProps.dataTree) {
        const parentFieldKey = gridApi.tableApi.options.dataTreeParentField;
        const childrenKey = gridApi.tableApi.options.dataTreeChildField;

        if (childrenKey) delete dataSet[childrenKey];

        if (parentFieldKey && typeof dataSet[parentFieldKey] === 'undefined') {
            const parentNode = parent ? activeNode.getTreeParent() : activeNode;
            if (parentNode) dataSet[parentFieldKey] = parentNode.getData();
        }
    }

    return dataSet;
};
