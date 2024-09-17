import {IGridApi} from '@src/tabulatorGrid';
import {RowComponent} from 'tabulator-tables';

export const useApiGetRowData = (api: IGridApi): IGridApi['getRowData'] => {
    return (node: RowComponent | undefined, withParent?: boolean, selfParent?: boolean, parentOnly?: boolean, withChildren?: boolean) => {
        const tableApi = api.tableApi;

        if (!tableApi || !node) return {};

        const rowData = parentOnly ? {} : {...node.getData()};

        if (!tableApi.options.dataTree) return rowData;

        const parentFieldKey = tableApi.options.dataTreeParentField;
        const childrenKey = tableApi.options.dataTreeChildField;

        if (!withChildren && childrenKey) delete rowData[childrenKey];

        if (!parentFieldKey || typeof rowData[parentFieldKey] !== 'undefined') return rowData;

        const parentNode = selfParent ? node : node.getTreeParent();
        if (!parentNode || !withParent) return rowData;

        const parentData = parentNode.getData();
        if (!withChildren && childrenKey) delete parentData[childrenKey];
        rowData[parentFieldKey] = parentNode.getData();

        return rowData;
    };
};