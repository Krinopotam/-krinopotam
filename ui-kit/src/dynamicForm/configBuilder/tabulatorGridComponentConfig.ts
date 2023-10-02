import {IDFormFieldProps} from '@src/dynamicForm/components/baseComponent';
import {BaseComponentConfig} from './baseComponentConfig';
import {IDFormFieldTabulatorGridProps, TabulatorGridComponent} from '@src/dynamicForm/components/tabulatorGridComponent';


export class TabulatorGridComponentConfig<T>  extends BaseComponentConfig<T> {

    constructor(id: keyof T) {
        super(id);
        this._config.component = TabulatorGridComponent; 
    }


    /** Help class */
    helpClass(value: IDFormFieldProps['helpClass']) {
        this._config.helpClass = value;
        return this;
    }

    /** Field label */
    label(value: IDFormFieldProps['label']) {
        this._config.label = value;
        return this;
    }

    /** No rows placeholder */
    placeholder(value: IDFormFieldTabulatorGridProps['placeholder']) {
        this._config.placeholder = value;
        return this;
    }

    /** tab name */
    tab(value: IDFormFieldProps['tab']) {
        this._config.tab = value;
        return this;
    }

    /** inline group name */
    inlineGroup(value: IDFormFieldProps['inlineGroup']) {
        this._config.inlineGroup = value;
        return this;
    }

    /** Field default value */
    value(value: IDFormFieldProps['value']) {
        this._config.value = value;
        return this;
    }

    /** If field default state is hidden */
    hidden(value: IDFormFieldProps['hidden']) {
        this._config.hidden = value;
        return this;
    }

    /** If field default state is disabled */
    disabled(value: IDFormFieldProps['disabled']) {
        this._config.disabled = value;
        return this;
    }

    /** If field default state is readonly */
    readOnly(value: IDFormFieldProps['readOnly']) {
        this._config.readOnly = value;
        return this;
    }

    /** List of fields that must be filled in order to display this field */
    dependsOn(value: IDFormFieldProps['dependsOn']) {
        this._config.dependsOn = value;
        return this;
    }

    /** Grid container width*/
    width(value: IDFormFieldTabulatorGridProps['width']) {
        this._config.width = value;
        return this;
    }

    /** Get focus by default */
    autoFocus(value: IDFormFieldProps['autoFocus']) {
        this._config.autoFocus = value;
        return this;
    }

    /** Mark Field Label as Required */
    requiredMark(value: IDFormFieldProps['requiredMark']) {
        this._config.requiredMark = value;
        return this;
    }

    /** Config tooltip info */
    tooltip(value: IDFormFieldProps['tooltip']) {
        this._config.tooltip = value;
        return this;
    }

    /** Field CSS style */
    style(value: IDFormFieldProps['style']) {
        this._config.style = value;
        return this;
    }

    /** Row field container CSS style */
    rowStyle(value: IDFormFieldProps['rowStyle']) {
        this._config.rowStyle = value;
        return this;
    }

    /** fires when the value of a field changed */
    onValueChanged(value: IDFormFieldProps['onValueChanged']) {
        this._config.onValueChanged = value;
        return this;
    }

    /** fires when the touched state of a field changed */
    onTouchedStateChanged(value: IDFormFieldProps['onTouchedStateChanged']) {
        this._config.onTouchedStateChanged = value;
        return this;
    }

    /** fires when the dirty state of a field changed */
    onDirtyStateChanged(value: IDFormFieldProps['onDirtyStateChanged']) {
        this._config.onDirtyStateChanged = value;
        return this;
    }

    /** fires when the error of a field changed */
    onErrorChanged(value: IDFormFieldProps['onErrorChanged']) {
        this._config.onErrorChanged = value;
        return this;
    }

    /** fires when the hidden state of a field changed */
    onHiddenStateChanged(value: IDFormFieldProps['onHiddenStateChanged']) {
        this._config.onHiddenStateChanged = value;
        return this;
    }

    /** fires when read only state of a field changed */
    onReadOnlyStateChanged(value: IDFormFieldProps['onReadOnlyStateChanged']) {
        this._config.onReadOnlyStateChanged = value;
        return this;
    }

    /** fires when label of a field changed */
    onLabelChanged(value: IDFormFieldProps['onLabelChanged']) {
        this._config.onLabelChanged = value;
        return this;
    }

    /** fires when the disable state of a field changes  */
    onDisabledStateChanged(value: IDFormFieldProps['onDisabledStateChanged']) {
        this._config.onDisabledStateChanged = value;
        return this;
    }

    /** fires when a field is completely initialized, its data is loaded */
    onReady(value: IDFormFieldProps['onReady']) {
        this._config.onReady = value;
        return this;
    }

    /** fires when a field validated */
    onValidated(value: IDFormFieldProps['onValidated']) {
        this._config.onValidated = value;
        return this;
    }

    /** Grid Id */
    id(value: IDFormFieldTabulatorGridProps['id']) {
        this._config.id = value;
        return this;
    }

    /** Grid mode: local or remote*/
    gridMode(value: IDFormFieldTabulatorGridProps['gridMode']) {
        this._config.gridMode = value;
        return this;
    }

    /** Tree view mode */
    dataTree(value: IDFormFieldTabulatorGridProps['dataTree']) {
        this._config.dataTree = value;
        return this;
    }

    /** The children field name */
    dataTreeChildField(value: IDFormFieldTabulatorGridProps['dataTreeChildField']) {
        this._config.dataTreeChildField = value;
        return this;
    }

    /** The parent key field name */
    dataTreeParentField(value: IDFormFieldTabulatorGridProps['dataTreeParentField']) {
        this._config.dataTreeParentField = value;
        return this;
    }

    /** The data tree children indentation */
    dataTreeChildIndent(value: IDFormFieldTabulatorGridProps['dataTreeChildIndent']) {
        this._config.dataTreeChildIndent = value;
        return this;
    }

    /** Grid columns */
    columns(value: IDFormFieldTabulatorGridProps['columns']) {
        this._config.columns = value;
        return this;
    }

    /** Grid class name */
    className(value: IDFormFieldTabulatorGridProps['className']) {
        this._config.className = value;
        return this;
    }

    
    buttons(value: IDFormFieldTabulatorGridProps['buttons']) {
        this._config.buttons = value;
        return this;
    }

    /** Edit modal controls parameters */
    editFormProps(value: IDFormFieldTabulatorGridProps['editFormProps']) {
        this._config.editFormProps = value;
        return this;
    }

    /** Disable row hover effect */
    noHover(value: IDFormFieldTabulatorGridProps['noHover']) {
        this._config.noHover = value;
        return this;
    }

    /** Confirm message before rows delete */
    rowDeleteMessage(value: IDFormFieldTabulatorGridProps['rowDeleteMessage']) {
        this._config.rowDeleteMessage = value;
        return this;
    }

    /** Should confirm before delete */
    confirmDelete(value: IDFormFieldTabulatorGridProps['confirmDelete']) {
        this._config.confirmDelete = value;
        return this;
    }

    /** Table layout */
    layout(value: IDFormFieldTabulatorGridProps['layout']) {
        this._config.layout = value;
        return this;
    }

    /** Adjust to the data each time you load it into the table */
    layoutColumnsOnNewData(value: IDFormFieldTabulatorGridProps['layoutColumnsOnNewData']) {
        this._config.layoutColumnsOnNewData = value;
        return this;
    }

    /** Grid container max width*/
    maxWidth(value: IDFormFieldTabulatorGridProps['maxWidth']) {
        this._config.maxWidth = value;
        return this;
    }

    /** Grid container min width*/
    minWidth(value: IDFormFieldTabulatorGridProps['minWidth']) {
        this._config.minWidth = value;
        return this;
    }

    /** Grid height*/
    height(value: IDFormFieldTabulatorGridProps['height']) {
        this._config.height = value;
        return this;
    }

    /** Min grid height*/
    minHeight(value: IDFormFieldTabulatorGridProps['minHeight']) {
        this._config.minHeight = value;
        return this;
    }

    /** Max grid height*/
    maxHeight(value: IDFormFieldTabulatorGridProps['maxHeight']) {
        this._config.maxHeight = value;
        return this;
    }

    /** allow multi select */
    multiSelect(value: IDFormFieldTabulatorGridProps['multiSelect']) {
        this._config.multiSelect = value;
        return this;
    }

    /** Resize a column its neighbouring column has the opposite resize applied to keep to total width of columns the same */
    resizableColumnFit(value: IDFormFieldTabulatorGridProps['resizableColumnFit']) {
        this._config.resizableColumnFit = value;
        return this;
    }

    /** Row height */
    rowHeight(value: IDFormFieldTabulatorGridProps['rowHeight']) {
        this._config.rowHeight = value;
        return this;
    }

    /** is columns movable */
    movableColumns(value: IDFormFieldTabulatorGridProps['movableColumns']) {
        this._config.movableColumns = value;
        return this;
    }

    /** is rows movable */
    movableRows(value: IDFormFieldTabulatorGridProps['movableRows']) {
        this._config.movableRows = value;
        return this;
    }

    /** Group rows by field/fields data*/
    groupBy(value: IDFormFieldTabulatorGridProps['groupBy']) {
        this._config.groupBy = value;
        return this;
    }

    /** Store column state in browser local storage */
    persistence(value: IDFormFieldTabulatorGridProps['persistence']) {
        this._config.persistence = value;
        return this;
    }

    /** Local storage key  */
    persistenceID(value: IDFormFieldTabulatorGridProps['persistenceID']) {
        this._config.persistenceID = value;
        return this;
    }

    /** Persistent layout */
    persistentLayout(value: IDFormFieldTabulatorGridProps['persistentLayout']) {
        this._config.persistentLayout = value;
        return this;
    }

    /** Persistent Filter */
    persistentFilter(value: IDFormFieldTabulatorGridProps['persistentFilter']) {
        this._config.persistentFilter = value;
        return this;
    }

    /** Persistent sort */
    persistentSort(value: IDFormFieldTabulatorGridProps['persistentSort']) {
        this._config.persistentSort = value;
        return this;
    }

    /** Frozen rows*/
    frozenRows(value: IDFormFieldTabulatorGridProps['frozenRows']) {
        this._config.frozenRows = value;
        return this;
    }

    /** Frozen row field name/names (default: id) */
    frozenRowsField(value: IDFormFieldTabulatorGridProps['frozenRowsField']) {
        this._config.frozenRowsField = value;
        return this;
    }

    /** Initial filter */
    initialFilter(value: IDFormFieldTabulatorGridProps['initialFilter']) {
        this._config.initialFilter = value;
        return this;
    }

    /** Initial sort */
    initialSort(value: IDFormFieldTabulatorGridProps['initialSort']) {
        this._config.initialSort = value;
        return this;
    }

    /** Initial header filter */
    initialHeaderFilter(value: IDFormFieldTabulatorGridProps['initialHeaderFilter']) {
        this._config.initialHeaderFilter = value;
        return this;
    }

    /** Is the header should be visible */
    headerVisible(value: IDFormFieldTabulatorGridProps['headerVisible']) {
        this._config.headerVisible = value;
        return this;
    }

    /** Default column properties */
    columnDefaults(value: IDFormFieldTabulatorGridProps['columnDefaults']) {
        this._config.columnDefaults = value;
        return this;
    }

    /** Fires when menu visibility status changed */
    onMenuVisibilityChanged(value: IDFormFieldTabulatorGridProps['onMenuVisibilityChanged']) {
        this._config.onMenuVisibilityChanged = value;
        return this;
    }

    /** Fires, when the dataSet changed. User can modify the dataSet before dataSet will apply */
    onDataSetChange(value: IDFormFieldTabulatorGridProps['onDataSetChange']) {
        this._config.onDataSetChange = value;
        return this;
    }

    /** fires when the grid trying to fetch data */
    onDataFetch(value: IDFormFieldTabulatorGridProps['onDataFetch']) {
        this._config.onDataFetch = value;
        return this;
    }

    /** fires when the grid data fetch success */
    onDataFetchSuccess(value: IDFormFieldTabulatorGridProps['onDataFetchSuccess']) {
        this._config.onDataFetchSuccess = value;
        return this;
    }

    /** fires when the grid data fetch failed */
    onDataFetchError(value: IDFormFieldTabulatorGridProps['onDataFetchError']) {
        this._config.onDataFetchError = value;
        return this;
    }

    /** fires when the grid data fetch completed */
    onDataFetchCompleted(value: IDFormFieldTabulatorGridProps['onDataFetchCompleted']) {
        this._config.onDataFetchCompleted = value;
        return this;
    }

    /** Callback executed when selected rows change */
    onSelectionChange(value: IDFormFieldTabulatorGridProps['onSelectionChange']) {
        this._config.onSelectionChange = value;
        return this;
    }

    /** Callback executed when selected rows delete */
    onDelete(value: IDFormFieldTabulatorGridProps['onDelete']) {
        this._config.onDelete = value;
        return this;
    }


    /** Get field config */
    getConfig() {
        return this._config as unknown as IDFormFieldTabulatorGridProps
    }
}