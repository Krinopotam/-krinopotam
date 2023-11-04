import React, { useCallback, useEffect, useSyncExternalStore } from 'react';
import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;
export const UploadDraggerFieldRender = ({ field }) => {
    var _a, _b, _c;
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));
    const fieldProps = field.getProps();
    const onChange = useCallback((e) => {
        var _a;
        if (field.isReady()) {
            field.setValue(e.fileList || null);
            field.setDirty(true);
            field.setTouched(true);
        }
        (_a = fieldProps.onChange) === null || _a === void 0 ? void 0 : _a.call(fieldProps, e);
    }, [field, fieldProps]);
    useEffect(() => {
        field.setReady(true);
    }, [field]);
    let defStyle = {};
    if (fieldProps.width) {
        defStyle = { width: fieldProps.width };
    }
    const style = Object.assign(Object.assign({}, defStyle), fieldProps.style);
    return (React.createElement(Dragger, { accept: fieldProps.accept, action: fieldProps.action, data: fieldProps.data, directory: fieldProps.directory, disabled: field.isReadOnly() || field.isDisabled(), fileList: field.getValue(), headers: fieldProps.headers, iconRender: fieldProps.iconRender, isImageUrl: fieldProps.isImageUrl, itemRender: fieldProps.itemRender, listType: fieldProps.listType, maxCount: fieldProps.maxCount, method: fieldProps.method, multiple: fieldProps.multiple, name: fieldProps.fileName, openFileDialogOnClick: fieldProps.openFileDialogOnClick, previewFile: fieldProps.previewFile, progress: fieldProps.progress, showUploadList: fieldProps.showUploadList, type: fieldProps.type, withCredentials: fieldProps.withCredentials, style: style, height: fieldProps.height, customRequest: fieldProps.customRequest, beforeUpload: fieldProps.onBeforeUpload, onChange: onChange, onDownload: fieldProps.onDownload, onDrop: fieldProps.onDrop, onPreview: fieldProps.onPreview, onRemove: fieldProps.onRemove },
        React.createElement("p", { className: "ant-upload-drag-icon" }, (_a = fieldProps.uploadIcon) !== null && _a !== void 0 ? _a : React.createElement(InboxOutlined, null)),
        React.createElement("p", { className: "ant-upload-text" }, (_b = fieldProps.uploadText) !== null && _b !== void 0 ? _b : 'Click or drag a file into this area to upload'),
        React.createElement("p", { className: "ant-upload-hint" }, (_c = fieldProps.uploadHint) !== null && _c !== void 0 ? _c : 'Support single or bulk download')));
};
//# sourceMappingURL=uploadDraggerFieldRender.js.map