const elVisible = function (el) {
    return !(el.offsetWidth <= 0 && el.offsetHeight <= 0);
};
const elOffset = function (el) {
    var box = el.getBoundingClientRect();
    return {
        top: box.top + window.pageYOffset - document.documentElement.clientTop,
        left: box.left + window.pageXOffset - document.documentElement.clientLeft,
    };
};
const scrollToRowPosition = function (row, position, ifVisible) {
    var rowIndex = this.rows().indexOf(row), rowEl = row.getElement(), offset = 0;
    const _this = this;
    return new Promise((resolve, reject) => {
        if (rowIndex > -1) {
            if (typeof ifVisible === 'undefined') {
                ifVisible = _this.table.options.scrollToRowIfVisible;
            }
            if (!ifVisible) {
                if (elVisible(rowEl)) {
                    offset = elOffset(rowEl).top - elOffset(_this.elementVertical).top;
                    if (offset > 0 && offset < _this.elementVertical.clientHeight - rowEl.offsetHeight) {
                        resolve();
                        return false;
                    }
                }
            }
            if (typeof position === 'undefined') {
                position = _this.table.options.scrollToRowPosition;
            }
            if (position === 'nearest') {
                position = _this.scrollToRowNearestTop(row) ? 'top' : 'bottom';
            }
            _this.scrollToRow(row);
            switch (position) {
                case 'middle':
                case 'center':
                    _this.elementVertical.scrollTop = rowEl.offsetTop - _this.elementVertical.clientHeight / 2 + rowEl.offsetHeight / 2;
                    break;
                case 'bottom':
                    _this.elementVertical.scrollTop = rowEl.offsetTop - _this.elementVertical.clientHeight + rowEl.offsetHeight;
                    break;
                case 'top':
                    _this.elementVertical.scrollTop = rowEl.offsetTop;
                    break;
            }
            resolve();
        }
        else {
            console.warn('Scroll Error - Row not visible');
            reject('Scroll Error - Row not visible');
        }
    });
};
const scrollToRowPatch = function (row, position, ifVisible) {
    return scrollToRowPosition.call(this.renderer, row, position, ifVisible);
};
export const setScrollToRowPatch = (tableApi) => {
    tableApi.rowManager.scrollToRow = scrollToRowPatch.bind(tableApi.rowManager);
};
