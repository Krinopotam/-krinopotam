let oldFindRow;
export const setFindRowPatch = tableApi => {
    oldFindRow = tableApi.rowManager.findRow;
    tableApi.rowManager.findRow = findRowPatch;
};
export const findRowPatch = function (subject) {
    if (!this.table.options.dataTree || typeof subject == 'undefined' || typeof subject == 'object')
        return oldFindRow.call(this, subject);
    return recursiveFindRow(this.table, this.rows, subject);
};
const recursiveFindRow = (table, rows, key) => {
    let result = undefined;
    for (const row of rows) {
        const rowComponent = getRowType(row) === 'rowComponent' ? row : row.getComponent();
        if (rowComponent.getData()[table.options.index] === key)
            return rowComponent._getSelf();
        const childRows = rowComponent.getTreeChildren();
        if (childRows && childRows.length > 0) {
            result = recursiveFindRow(table, childRows, key);
            if (result)
                return result;
        }
    }
    return false;
};
const getRowType = row => {
    var _a, _b;
    if (!row)
        return undefined;
    if (((_b = (_a = row._getSelf) === null || _a === void 0 ? void 0 : _a.call(row)) === null || _b === void 0 ? void 0 : _b.type) === 'row')
        return 'rowComponent';
    if (row.type === 'row')
        return 'row';
    return undefined;
};
