import {IGridApi, IGridRowData} from '@src/tabulatorGrid';

export const findParentNode = (api: IGridApi, row: IGridRowData) => {
    if (!api.tableApi) return undefined;
    const parentFieldKey = api.tableApi.options.dataTreeParentField;
    const indexField = api.tableApi.options.index;
    if (!indexField || !parentFieldKey || !row[parentFieldKey]) return undefined;
    let parentKey: string | number | undefined;
    if (typeof row[parentFieldKey] === 'string' || typeof row[parentFieldKey] === 'number') parentKey = row[parentFieldKey] as string | number;
    else if (typeof row[parentFieldKey] === 'object') parentKey = (row[parentFieldKey] as IGridRowData)[indexField] as string | number | undefined;

    if (!parentKey) return undefined;

    return api.tableApi.getRow(parentKey) || undefined;
};