import {IGridApi, IGridRowData, IRowKey} from '@src/tabulatorGrid';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';
import {findParentNode} from '@src/tabulatorGrid/helpers/findParentNode';
import {cascadeNodeExpand} from '@src/tabulatorGrid/helpers/cascadeNodeExpand';

export const addTreeRows = (api: IGridApi, rows: IGridRowData[] | IGridRowData, place?: 'above' | 'below', key?: IRowKey) => {
    if (!api.tableApi) return;
    if (!api.getProps().dataTree) {
        console.warn('TreeData mode is disabled. Tree row updating not available');
        return;
    }

    const above = place === 'above';
    const clonedRows: IGridRowData[] = IsArray(rows) ? [...rows] : [rows];

    for (const rowData of clonedRows) {
        const parentNode = findParentNode(api, rowData);
        if (!parentNode) api.tableApi?.addData([rowData], above, key);
        else {
            parentNode.addTreeChild(rowData);
            cascadeNodeExpand(parentNode);
            parentNode.reformat();
        }
    }
};