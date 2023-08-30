import { BaseComponentConfig } from './baseComponentConfig';
import { TabulatorGridComponent } from '../components/tabulatorGridComponent';
export class TabulatorGridComponentConfig extends BaseComponentConfig {
    constructor(id) {
        super(id);
        this._config.component = TabulatorGridComponent;
    }
    helpClass(value) {
        this._config.helpClass = value;
        return this;
    }
    label(value) {
        this._config.label = value;
        return this;
    }
    placeholder(value) {
        this._config.placeholder = value;
        return this;
    }
    tab(value) {
        this._config.tab = value;
        return this;
    }
    inlineGroup(value) {
        this._config.inlineGroup = value;
        return this;
    }
    default(value) {
        this._config.default = value;
        return this;
    }
    hidden(value) {
        this._config.hidden = value;
        return this;
    }
    disabled(value) {
        this._config.disabled = value;
        return this;
    }
    readOnly(value) {
        this._config.readOnly = value;
        return this;
    }
    dependsOn(value) {
        this._config.dependsOn = value;
        return this;
    }
    width(value) {
        this._config.width = value;
        return this;
    }
    autoFocus(value) {
        this._config.autoFocus = value;
        return this;
    }
    requiredMark(value) {
        this._config.requiredMark = value;
        return this;
    }
    callbacks(value) {
        this._config.callbacks = value;
        return this;
    }
    style(value) {
        this._config.style = value;
        return this;
    }
    id(value) {
        this._config.id = value;
        return this;
    }
    gridMode(value) {
        this._config.gridMode = value;
        return this;
    }
    dataTree(value) {
        this._config.dataTree = value;
        return this;
    }
    dataTreeChildField(value) {
        this._config.dataTreeChildField = value;
        return this;
    }
    dataTreeParentField(value) {
        this._config.dataTreeParentField = value;
        return this;
    }
    dataTreeChildIndent(value) {
        this._config.dataTreeChildIndent = value;
        return this;
    }
    columns(value) {
        this._config.columns = value;
        return this;
    }
    className(value) {
        this._config.className = value;
        return this;
    }
    buttons(value) {
        this._config.buttons = value;
        return this;
    }
    editFormProps(value) {
        this._config.editFormProps = value;
        return this;
    }
    noHover(value) {
        this._config.noHover = value;
        return this;
    }
    rowDeleteMessage(value) {
        this._config.rowDeleteMessage = value;
        return this;
    }
    confirmDelete(value) {
        this._config.confirmDelete = value;
        return this;
    }
    layout(value) {
        this._config.layout = value;
        return this;
    }
    layoutColumnsOnNewData(value) {
        this._config.layoutColumnsOnNewData = value;
        return this;
    }
    maxWidth(value) {
        this._config.maxWidth = value;
        return this;
    }
    minWidth(value) {
        this._config.minWidth = value;
        return this;
    }
    height(value) {
        this._config.height = value;
        return this;
    }
    minHeight(value) {
        this._config.minHeight = value;
        return this;
    }
    maxHeight(value) {
        this._config.maxHeight = value;
        return this;
    }
    multiSelect(value) {
        this._config.multiSelect = value;
        return this;
    }
    resizableColumnFit(value) {
        this._config.resizableColumnFit = value;
        return this;
    }
    rowHeight(value) {
        this._config.rowHeight = value;
        return this;
    }
    resizableRows(value) {
        this._config.resizableRows = value;
        return this;
    }
    movableColumns(value) {
        this._config.movableColumns = value;
        return this;
    }
    movableRows(value) {
        this._config.movableRows = value;
        return this;
    }
    groupBy(value) {
        this._config.groupBy = value;
        return this;
    }
    persistence(value) {
        this._config.persistence = value;
        return this;
    }
    persistenceID(value) {
        this._config.persistenceID = value;
        return this;
    }
    persistentLayout(value) {
        this._config.persistentLayout = value;
        return this;
    }
    persistentFilter(value) {
        this._config.persistentFilter = value;
        return this;
    }
    persistentSort(value) {
        this._config.persistentSort = value;
        return this;
    }
    frozenRows(value) {
        this._config.frozenRows = value;
        return this;
    }
    frozenRowsField(value) {
        this._config.frozenRowsField = value;
        return this;
    }
    initialFilter(value) {
        this._config.initialFilter = value;
        return this;
    }
    initialSort(value) {
        this._config.initialSort = value;
        return this;
    }
    initialHeaderFilter(value) {
        this._config.initialHeaderFilter = value;
        return this;
    }
    headerVisible(value) {
        this._config.headerVisible = value;
        return this;
    }
    columnDefaults(value) {
        this._config.columnDefaults = value;
        return this;
    }
    getConfig() {
        return this._config;
    }
}
