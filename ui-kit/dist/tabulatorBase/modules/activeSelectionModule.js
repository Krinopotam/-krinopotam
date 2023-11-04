import { Module } from 'tabulator-tables';
export class ActiveSelectionModule extends Module {
    constructor(table) {
        super(table);
        this.activeRow = undefined;
        this.table = table;
        const _this = this;
        _this.registerTableOption('multiSelect', true);
        _this.registerTableOption('selectionMode', false);
        _this.registerTableFunction('getFirstRow', this.getFirstRow.bind(this));
        _this.registerTableFunction('getLastRow', this.getLastRow.bind(this));
        _this.registerTableFunction('setActiveRow', this.setActiveRow.bind(this));
        _this.registerTableFunction('setActiveRowByKey', this.setActiveRowByKey.bind(this));
        _this.registerTableFunction('getActiveRowKey', this.getActiveRowKey.bind(this));
        _this.registerTableFunction('getActiveRow', this.getActiveRow.bind(this));
        _this.registerTableFunction('getActiveRowData', this.getActiveRowData.bind(this));
        _this.registerTableFunction('setTableBodyFocus', this.setTableBodyFocus.bind(this));
        _this.registerComponentFunction('row', 'isActive', this.isRowActive.bind(this));
        _this.registerComponentFunction('row', 'setActive', this.setRowActive.bind(this));
    }
    initialize() {
        const _this = this;
        _this.subscribe('row-click', this.rowClickHandler.bind(this));
        this.bindEvents();
        _this.subscribe('table-destroy', this.unbindEvents.bind(this));
    }
    rowClickHandler(e, row) {
        const options = this.table.options;
        if (options.selectionMode)
            return;
        const rowNode = row.getComponent();
        if (!rowNode)
            return;
        if (!options.multiSelect || (!e.ctrlKey && !e.shiftKey)) {
            e.preventDefault();
            this.setActiveRow(rowNode, true, 'nearest');
            return;
        }
        if (e.ctrlKey && !e.shiftKey) {
            e.preventDefault();
            if (rowNode === this.getActiveRow()) {
                const newNode = this.findNewActiveRowInSelection(rowNode);
                rowNode.deselect();
                this.setActiveRow(newNode, false);
            }
            else if (rowNode.isSelected()) {
                rowNode.deselect();
            }
            else {
                this.setActiveRow(rowNode, false);
            }
        }
        else if (!e.ctrlKey && e.shiftKey) {
            e.preventDefault();
            const curActiveRow = this.getActiveRow();
            if (curActiveRow)
                this.selectRowsFromTo(curActiveRow, rowNode, 'select');
            this.setActiveRow(rowNode, false);
        }
    }
    setActiveRow(row, clearSelection, scrollPosition) {
        var _a, _b, _c, _d;
        const _this = this;
        const prevActiveRow = this.activeRow;
        this.activeRow = row || undefined;
        if (prevActiveRow !== this.activeRow) {
            if (clearSelection || !row)
                this.table.deselectRow();
            prevActiveRow === null || prevActiveRow === void 0 ? void 0 : prevActiveRow.reformat();
            if (row !== false) {
                row === null || row === void 0 ? void 0 : row.reformat();
                row === null || row === void 0 ? void 0 : row.select();
                (_b = (_a = row === null || row === void 0 ? void 0 : row.getElement()) === null || _a === void 0 ? void 0 : _a.classList) === null || _b === void 0 ? void 0 : _b.add('tabulator-active');
            }
            (_d = (_c = prevActiveRow === null || prevActiveRow === void 0 ? void 0 : prevActiveRow.getElement()) === null || _c === void 0 ? void 0 : _c.classList) === null || _d === void 0 ? void 0 : _d.remove('tabulator-active');
            _this.dispatchExternal('activeRowChanged', row);
        }
        if (scrollPosition && row && !row.isFrozen())
            this.table.scrollToRow(row, scrollPosition, false).then();
    }
    setActiveRowByKey(key, clearSelection, scrollPosition) {
        const row = key ? this.table.getRow(key) : undefined;
        this.setActiveRow(row, clearSelection, scrollPosition);
    }
    getActiveRowKey() {
        var _a;
        return (_a = this.activeRow) === null || _a === void 0 ? void 0 : _a.getIndex();
    }
    getActiveRow() {
        return this.activeRow;
    }
    getActiveRowData() {
        var _a;
        return (_a = this.getActiveRow()) === null || _a === void 0 ? void 0 : _a.getData();
    }
    isRowActive(row) {
        return row === this.activeRow;
    }
    setRowActive(row, clearSelection, scrollPosition) {
        this.setActiveRow(row, clearSelection, scrollPosition);
    }
    getFirstRow() {
        const rows = this.table.getRows('active');
        if (!rows || rows.length === 0)
            return undefined;
        for (const row of rows) {
            if (!row.isFrozen())
                return row;
        }
        return undefined;
    }
    getLastRow() {
        const rows = this.table.getRows('active');
        if (!rows || rows.length === 0)
            return undefined;
        return rows[rows.length - 1];
    }
    getNextPageRow(row) {
        if (!row)
            return this.getFirstRow();
        let clientHeight = this.table.rowManager.element.clientHeight - row._row.getHeight();
        let curRow = row;
        let rowCandidate = row;
        while (clientHeight > 0 && curRow) {
            curRow = curRow.getNextRow();
            if (!curRow)
                break;
            clientHeight = clientHeight - curRow._row.getHeight();
            rowCandidate = curRow;
        }
        return rowCandidate;
    }
    getPrevPageRow(row) {
        if (!row)
            return this.getFirstRow();
        let clientHeight = this.table.rowManager.element.clientHeight - row._row.getHeight();
        let curRow = row;
        let rowCandidate = row;
        while (clientHeight > 0 && curRow) {
            curRow = curRow.getPrevRow();
            if (!curRow)
                break;
            clientHeight = clientHeight - curRow._row.getHeight();
            rowCandidate = curRow;
        }
        return rowCandidate;
    }
    findNewActiveRowInSelection(row) {
        const selectedRows = this.table.getSelectedRows();
        if (selectedRows.length === 1)
            return undefined;
        let newRow = undefined;
        let activeReached = false;
        for (const curRow of selectedRows) {
            if (curRow === row) {
                activeReached = true;
                continue;
            }
            newRow = curRow;
            if (activeReached && newRow)
                break;
        }
        return newRow;
    }
    selectRowsFromTo(rowStart, rowEnd, mode) {
        mode = mode !== null && mode !== void 0 ? mode : 'select';
        if (!rowStart || !rowEnd)
            return;
        if (rowStart === rowEnd) {
            rowStart.select();
            return;
        }
        const rowNodes = this.table.getRows('active');
        this.recursiveSelectNode(rowStart, rowEnd, rowNodes, undefined, mode, this.table.options.dataTree);
    }
    recursiveSelectNode(rowStart, rowEnd, nodes, inProcess, mode, recursive) {
        for (const node of nodes) {
            if (node === rowStart || node === rowEnd) {
                if (typeof inProcess === 'undefined') {
                    inProcess = true;
                }
                else {
                    this.selectNode(node, mode);
                    inProcess = false;
                }
            }
            if (inProcess)
                this.selectNode(node, mode);
            if (inProcess === false)
                return false;
            if (recursive)
                inProcess = this.recursiveSelectNode(rowStart, rowEnd, node.getTreeChildren(), inProcess, mode, recursive);
        }
        return inProcess;
    }
    selectNode(node, mode) {
        if (mode === 'select' || (mode === 'invert' && !node.isSelected()))
            node.select();
        else if (mode === 'deselect' || (mode === 'invert' && node.isSelected()))
            node.deselect();
    }
    bindEvents() {
        this.table.element.addEventListener('keydown', this.onKeyDownHandler.bind(this));
        this.table.element.addEventListener('keyup', this.onKeyUpHandler.bind(this));
    }
    unbindEvents() {
        this.table.element.removeEventListener('keydown', this.onKeyDownHandler.bind(this));
        this.table.element.removeEventListener('keyup', this.onKeyUpHandler.bind(this));
    }
    onKeyDownHandler(e) {
        const options = this.table.options;
        if (options.selectionMode)
            return;
        const _this = this;
        _this.dispatchExternal('keyDown', e);
        switch (e.key) {
            case 'Shift':
                return this.onShiftKeyDown();
            case 'ArrowUp':
                return this.onKeyPressArrowUp(e);
            case 'ArrowDown':
                return this.onKeyPressArrowDown(e);
            case 'ArrowRight':
                return this.onKeyPressArrowRight(e);
            case 'ArrowLeft':
                return this.onKeyPressArrowLeft(e);
            case 'PageDown':
                return this.onKeyPressPageDown(e);
            case 'PageUp':
                return this.onKeyPressPageUp(e);
            case 'Home':
                return this.onKeyPressHome(e);
            case 'End':
                return this.onKeyPressEnd(e);
            case 'a':
            case 'A':
            case 'ф':
            case 'Ф':
                return this.onKeyPressA(e);
        }
    }
    onKeyUpHandler(e) {
        const options = this.table.options;
        if (options.selectionMode)
            return;
        const _this = this;
        _this.dispatchExternal('keyUp', e);
        if (e.key === 'Shift')
            this.onShiftKeyUp();
    }
    onKeyPressArrowUp(e) {
        if (e.ctrlKey) {
            this.onKeyPressHome(e);
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        let nextRow;
        const prevRow = this.getActiveRow();
        if (prevRow)
            nextRow = prevRow.getPrevRow() || this.getFirstRow();
        else
            nextRow = this.getFirstRow();
        const multiSelect = this.table.options.multiSelect;
        if (!multiSelect || !e.shiftKey)
            this.setActiveRow(nextRow, true, 'top');
        else {
            if (prevRow !== nextRow && (nextRow === null || nextRow === void 0 ? void 0 : nextRow.isSelected()))
                prevRow === null || prevRow === void 0 ? void 0 : prevRow.deselect();
            this.setActiveRow(nextRow, false, 'top');
        }
    }
    onKeyPressArrowDown(e) {
        if (e.ctrlKey) {
            this.onKeyPressEnd(e);
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        let nextRow;
        const prevRow = this.getActiveRow();
        if (prevRow)
            nextRow = prevRow.getNextRow() || this.getLastRow();
        else
            nextRow = this.getFirstRow();
        const multiSelect = this.table.options.multiSelect;
        if (!multiSelect || !e.shiftKey)
            this.setActiveRow(nextRow, true, 'bottom');
        else {
            if (prevRow !== nextRow && (nextRow === null || nextRow === void 0 ? void 0 : nextRow.isSelected()))
                prevRow === null || prevRow === void 0 ? void 0 : prevRow.deselect();
            this.setActiveRow(nextRow, false, 'bottom');
        }
    }
    onKeyPressArrowLeft(e) {
        if (!this.table.options.dataTree)
            return;
        e.preventDefault();
        e.stopPropagation();
        const curRow = this.getActiveRow();
        if (!curRow)
            return;
        if (curRow.isTreeExpanded())
            curRow.treeCollapse();
    }
    onKeyPressArrowRight(e) {
        if (!this.table.options.dataTree)
            return;
        e.preventDefault();
        e.stopPropagation();
        const curRow = this.getActiveRow();
        if (!curRow)
            return;
        if (!curRow.isTreeExpanded())
            curRow === null || curRow === void 0 ? void 0 : curRow.treeExpand();
    }
    onKeyPressPageDown(e) {
        var _a;
        e.preventDefault();
        e.stopPropagation();
        const prevRow = (_a = this.getActiveRow()) !== null && _a !== void 0 ? _a : this.getLastRow();
        const nextRow = this.getNextPageRow(prevRow);
        const multiSelect = this.table.options.multiSelect;
        if (!multiSelect || !e.shiftKey)
            this.setActiveRow(nextRow, true, 'bottom');
        else {
            this.selectRowsFromTo(prevRow, nextRow, 'select');
            this.setActiveRow(nextRow, false, 'bottom');
        }
    }
    onKeyPressPageUp(e) {
        var _a;
        e.preventDefault();
        e.stopPropagation();
        const prevRow = (_a = this.getActiveRow()) !== null && _a !== void 0 ? _a : this.getFirstRow();
        const nextRow = this.getPrevPageRow(prevRow);
        const multiSelect = this.table.options.multiSelect;
        if (!multiSelect || !e.shiftKey)
            this.setActiveRow(nextRow, true, 'top');
        else {
            this.selectRowsFromTo(prevRow, nextRow, 'select');
            this.setActiveRow(nextRow, false, 'top');
        }
    }
    onKeyPressHome(e) {
        var _a;
        e.preventDefault();
        e.stopPropagation();
        const prevRow = (_a = this.getActiveRow()) !== null && _a !== void 0 ? _a : this.getFirstRow();
        const nextRow = this.getFirstRow();
        const multiSelect = this.table.options.multiSelect;
        if (!multiSelect || !e.shiftKey)
            this.setActiveRow(nextRow, true, 'top');
        else {
            this.selectRowsFromTo(prevRow, nextRow, 'select');
            this.setActiveRow(nextRow, false, 'top');
        }
    }
    onKeyPressEnd(e) {
        var _a;
        e.preventDefault();
        e.stopPropagation();
        const prevRow = (_a = this.getActiveRow()) !== null && _a !== void 0 ? _a : this.getLastRow();
        const nextRow = this.getLastRow();
        const multiSelect = this.table.options.multiSelect;
        if (!multiSelect || !e.shiftKey)
            this.setActiveRow(nextRow, true, 'bottom');
        else {
            this.selectRowsFromTo(prevRow, nextRow, 'select');
            this.setActiveRow(nextRow, false, 'bottom');
        }
    }
    onKeyPressA(e) {
        const multiSelect = this.table.options.multiSelect;
        if (!multiSelect || !e.ctrlKey)
            return;
        e.preventDefault();
        e.stopPropagation();
        this.selectRowsFromTo(this.getFirstRow(), this.getLastRow(), 'select');
    }
    onShiftKeyDown() {
        this.table.element.style.userSelect = 'none';
    }
    onShiftKeyUp() {
        this.table.element.style.userSelect = 'initial';
    }
    setTableBodyFocus() {
        const body = this.table.element.querySelector('.tabulator-tableholder');
        if (!body)
            return;
        setTimeout(() => {
            body.focus({ preventScroll: true });
        }, 300);
    }
}
ActiveSelectionModule.moduleName = 'activeSelection';
//# sourceMappingURL=activeSelectionModule.js.map