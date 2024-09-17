import {IGridApi, IGridRowData} from '@src/tabulatorGrid';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';
import {findParentNode} from '@src/tabulatorGrid/helpers/findParentNode';
import {cascadeNodeExpand} from '@src/tabulatorGrid/helpers/cascadeNodeExpand';

export const updateTreeRows = (api: IGridApi, rows: IGridRowData[] | IGridRowData) => {
    if (!api.tableApi) return;
    if (!api.getProps().dataTree) {
        console.warn('TreeData mode is disabled. Tree row updating not available');
        return;
    }

    const indexField = api.tableApi.options.index;
    const childField = api.tableApi.options.dataTreeChildField;
    if (!indexField || !childField) return;

    const clonedRows: IGridRowData[] = IsArray(rows) ? [...rows] : [rows];

    for (const rowData of clonedRows) {
        const rowKey = rowData[indexField] as string | number;
        const node = api.tableApi.getRow(rowKey);

        // current node has not found
        if (!node) {
            api.tableApi.addData([rowData]).then();
            continue;
        }

        const parentNode = node.getTreeParent();
        const newParentNode = findParentNode(api, rowData);

        if (
            // the same parent
            (!parentNode && !newParentNode) ||
            (parentNode && newParentNode && parentNode.getData()[indexField] === newParentNode.getData()[indexField])
        ) {
            api.tableApi.updateData([rowData]).then();
            continue;
        }

        //remove old node
        rowData[childField] = node.getData()[childField]; //keep row children rows

        api.tableApi.deselectRow(node);
        api.tableApi.deleteRow(rowKey);
        if (parentNode) parentNode.reformat();

        // the parent has changed to root
        if (!newParentNode) {
            api.tableApi.addData([rowData]).then();
            continue;
        }

        // the parent changed to node
        newParentNode.addTreeChild(rowData);
        cascadeNodeExpand(newParentNode);
        newParentNode.reformat();
    }
};