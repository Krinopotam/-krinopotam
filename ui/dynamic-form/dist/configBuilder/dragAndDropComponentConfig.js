import { BaseComponentConfig } from './baseComponentConfig';
import { DragAndDropComponent } from '../components/dragAndDropComponent';
export class DragAndDropComponentConfig extends BaseComponentConfig {
    constructor(id) {
        super(id);
        this._config.component = DragAndDropComponent;
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
    accept(value) {
        this._config.accept = value;
        return this;
    }
    action(value) {
        this._config.action = value;
        return this;
    }
    beforeUpload(value) {
        this._config.beforeUpload = value;
        return this;
    }
    data(value) {
        this._config.data = value;
        return this;
    }
    defaultFileList(value) {
        this._config.defaultFileList = value;
        return this;
    }
    directory(value) {
        this._config.directory = value;
        return this;
    }
    fileList(value) {
        this._config.fileList = value;
        return this;
    }
    headers(value) {
        this._config.headers = value;
        return this;
    }
    iconRender(value) {
        this._config.iconRender = value;
        return this;
    }
    isImageUrl(value) {
        this._config.isImageUrl = value;
        return this;
    }
    itemRender(value) {
        this._config.itemRender = value;
        return this;
    }
    listType(value) {
        this._config.listType = value;
        return this;
    }
    maxCount(value) {
        this._config.maxCount = value;
        return this;
    }
    method(value) {
        this._config.method = value;
        return this;
    }
    multiple(value) {
        this._config.multiple = value;
        return this;
    }
    fileName(value) {
        this._config.fileName = value;
        return this;
    }
    openFileDialogOnClick(value) {
        this._config.openFileDialogOnClick = value;
        return this;
    }
    previewFile(value) {
        this._config.previewFile = value;
        return this;
    }
    progress(value) {
        this._config.progress = value;
        return this;
    }
    showUploadList(value) {
        this._config.showUploadList = value;
        return this;
    }
    withCredentials(value) {
        this._config.withCredentials = value;
        return this;
    }
    onChange(value) {
        this._config.onChange = value;
        return this;
    }
    onDrop(value) {
        this._config.onDrop = value;
        return this;
    }
    onDownload(value) {
        this._config.onDownload = value;
        return this;
    }
    onPreview(value) {
        this._config.onPreview = value;
        return this;
    }
    onRemove(value) {
        this._config.onRemove = value;
        return this;
    }
    type(value) {
        this._config.type = value;
        return this;
    }
    getConfig() {
        return this._config;
    }
}
