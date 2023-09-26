import {IDFormFieldProps} from '@src/dynamicForm/components/baseComponent';
import {BaseComponentConfig} from './baseComponentConfig';
import {IDFormFieldTreeSelectProps, TreeSelectComponent} from '@src/dynamicForm/components/treeSelectComponent';
import {ITreeSelectProps} from '@src/treeselect';


export class TreeSelectComponentConfig<T>  extends BaseComponentConfig<T> {

    constructor(id: keyof T) {
        super(id);
        this._config.component = TreeSelectComponent; 
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

    /** Field placeholder*/
    placeholder(value: IDFormFieldProps['placeholder']) {
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

    /** Default value */
    value(value: IDFormFieldTreeSelectProps['value']) {
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

    /** Is TreeSelect read only  */
    readOnly(value: ITreeSelectProps['readOnly']) {
        this._config.readOnly = value;
        return this;
    }

    /** List of fields that must be filled in order to display this field */
    dependsOn(value: IDFormFieldProps['dependsOn']) {
        this._config.dependsOn = value;
        return this;
    }

    /** Field width */
    width(value: IDFormFieldProps['width']) {
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

    
    onReady(value: IDFormFieldTreeSelectProps['onReady']) {
        this._config.onReady = value;
        return this;
    }

    /** fires when a field validated */
    onValidated(value: IDFormFieldProps['onValidated']) {
        this._config.onValidated = value;
        return this;
    }

    /** A mutable object to merge with these controls api */
    apiRef(value: ITreeSelectProps['apiRef']) {
        this._config.apiRef = value;
        return this;
    }

    /** Tree TreeSelect id */
    treeSelectId(value: ITreeSelectProps['treeSelectId']) {
        this._config.treeSelectId = value;
        return this;
    }

    /** Value */
    defaultValueCallback(value: ITreeSelectProps['defaultValueCallback']) {
        this._config.defaultValueCallback = value;
        return this;
    }

    /**  Title renderer */
    titleRender(value: ITreeSelectProps['titleRender']) {
        this._config.titleRender = value;
        return this;
    }

    /**  Label renderer */
    labelRender(value: ITreeSelectProps['labelRender']) {
        this._config.labelRender = value;
        return this;
    }

    /**  Custom filter */
    filterTreeNode(value: ITreeSelectProps['filterTreeNode']) {
        this._config.filterTreeNode = value;
        return this;
    }

    /** Local data set */
    dataSet(value: ITreeSelectProps['dataSet']) {
        this._config.dataSet = value;
        return this;
    }

    /**  Start fetching remote data on load control or on use control (example, open dropdown). Default OnLoad */
    fetchMode(value: ITreeSelectProps['fetchMode']) {
        this._config.fetchMode = value;
        return this;
    }

    /**  Loaded data without parameters (like searchString) will not be cached */
    noCacheFetchedData(value: ITreeSelectProps['noCacheFetchedData']) {
        this._config.noCacheFetchedData = value;
        return this;
    }

    /**  Minimum length of search string before fetch data */
    minSearchLength(value: ITreeSelectProps['minSearchLength']) {
        this._config.minSearchLength = value;
        return this;
    }

    /**  debounce in ms */
    debounce(value: ITreeSelectProps['debounce']) {
        this._config.debounce = value;
        return this;
    }

    /**Selected value label. Will render as content of select. Default: title */
    selectedLabelProp(value: ITreeSelectProps['selectedLabelProp']) {
        this._config.selectedLabelProp = value;
        return this;
    }

    /** Customize node label, value, children field name */
    fieldNames(value: ITreeSelectProps['fieldNames']) {
        this._config.fieldNames = value;
        return this;
    }

    /** Edit item controls props. If not set then component not editable */
    editFormProps(value: ITreeSelectProps['editFormProps']) {
        this._config.editFormProps = value;
        return this;
    }

    /** Confirm message before node delete */
    nodeDeleteMessage(value: ITreeSelectProps['nodeDeleteMessage']) {
        this._config.nodeDeleteMessage = value;
        return this;
    }

    /** Should confirm before delete */
    confirmDelete(value: ITreeSelectProps['confirmDelete']) {
        this._config.confirmDelete = value;
        return this;
    }

    /** Edit buttons*/
    editButtons(value: ITreeSelectProps['editButtons']) {
        this._config.editButtons = value;
        return this;
    }

    /** Fires on input value cleared */
    onClear(value: ITreeSelectProps['onClear']) {
        this._config.onClear = value;
        return this;
    }

    /** fires when the TreeSelect trying to fetch data */
    onDataFetch(value: ITreeSelectProps['onDataFetch']) {
        this._config.onDataFetch = value;
        return this;
    }

    /** fires when the TreeSelect fetch success */
    onDataFetchSuccess(value: ITreeSelectProps['onDataFetchSuccess']) {
        this._config.onDataFetchSuccess = value;
        return this;
    }

    /** fires when the TreeSelect fetch failed */
    onDataFetchError(value: ITreeSelectProps['onDataFetchError']) {
        this._config.onDataFetchError = value;
        return this;
    }

    /** fires after the completion of fetching the data, regardless of the result */
    onDataFetchComplete(value: ITreeSelectProps['onDataFetchComplete']) {
        this._config.onDataFetchComplete = value;
        return this;
    }

    /** Callback executed when selected node delete */
    onDelete(value: ITreeSelectProps['onDelete']) {
        this._config.onDelete = value;
        return this;
    }


    /** Get field config */
    getConfig() {
        return this._config as unknown as IDFormFieldTreeSelectProps
    }
}