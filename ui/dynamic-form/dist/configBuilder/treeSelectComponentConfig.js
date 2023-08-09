import { BaseComponentConfig } from './baseComponentConfig';
import { TreeSelectComponent } from '../components/treeSelectComponent';
export class TreeSelectComponentConfig extends BaseComponentConfig {
    constructor(id) {
        super(id);
        this._config.component = TreeSelectComponent;
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
    callbacks(value) {
        this._config.callbacks = value;
        return this;
    }
    apiRef(value) {
        this._config.apiRef = value;
        return this;
    }
    treeSelectId(value) {
        this._config.treeSelectId = value;
        return this;
    }
    value(value) {
        this._config.value = value;
        return this;
    }
    defaultValueCallback(value) {
        this._config.defaultValueCallback = value;
        return this;
    }
    titleRender(value) {
        this._config.titleRender = value;
        return this;
    }
    labelRender(value) {
        this._config.labelRender = value;
        return this;
    }
    filterTreeNode(value) {
        this._config.filterTreeNode = value;
        return this;
    }
    dataSet(value) {
        this._config.dataSet = value;
        return this;
    }
    fetchMode(value) {
        this._config.fetchMode = value;
        return this;
    }
    noCacheFetchedData(value) {
        this._config.noCacheFetchedData = value;
        return this;
    }
    minSearchLength(value) {
        this._config.minSearchLength = value;
        return this;
    }
    debounce(value) {
        this._config.debounce = value;
        return this;
    }
    selectedLabelProp(value) {
        this._config.selectedLabelProp = value;
        return this;
    }
    fieldNames(value) {
        this._config.fieldNames = value;
        return this;
    }
    editFormProps(value) {
        this._config.editFormProps = value;
        return this;
    }
    nodeDeleteMessage(value) {
        this._config.nodeDeleteMessage = value;
        return this;
    }
    confirmDelete(value) {
        this._config.confirmDelete = value;
        return this;
    }
    editButtons(value) {
        this._config.editButtons = value;
        return this;
    }
    onCustomChange(value) {
        this._config.onCustomChange = value;
        return this;
    }
    getConfig() {
        return this._config;
    }
}
