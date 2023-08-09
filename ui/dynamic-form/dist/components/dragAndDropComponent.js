import React, { useCallback, useEffect } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
const { Dragger } = Upload;
export const DragAndDropComponent = ({ formApi, fieldName, fieldProps }) => {
    const onChange = useCallback((e) => {
        var _a;
        formApi.model.setFieldValue(fieldName, e.fileList || null);
        formApi.model.setFieldDirty(fieldName, true);
        formApi.model.setFieldTouched(fieldName, true);
        (_a = fieldProps.onChange) === null || _a === void 0 ? void 0 : _a.call(fieldProps, e);
    }, [fieldName, fieldProps, formApi.model]);
    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);
    return (React.createElement(Dragger, { accept: fieldProps.accept, action: fieldProps.action, beforeUpload: fieldProps.beforeUpload, data: fieldProps.data, defaultFileList: fieldProps.defaultFileList, directory: fieldProps.directory, disabled: formApi.model.isFieldReadOnly(fieldName) || formApi.model.isFieldDisabled(fieldName), fileList: fieldProps.fileList, headers: fieldProps.headers, iconRender: fieldProps.iconRender, isImageUrl: fieldProps.isImageUrl, itemRender: fieldProps.itemRender, listType: fieldProps.listType, maxCount: fieldProps.maxCount, method: fieldProps.method, multiple: fieldProps.multiple, name: fieldProps.fileName, onChange: onChange, onDownload: fieldProps.onDownload, onDrop: fieldProps.onDrop, onPreview: fieldProps.onPreview, onRemove: fieldProps.onRemove, openFileDialogOnClick: fieldProps.openFileDialogOnClick, previewFile: fieldProps.previewFile, progress: fieldProps.progress, showUploadList: fieldProps.showUploadList, type: fieldProps.type, withCredentials: fieldProps.withCredentials },
        React.createElement("p", { className: "ant-upload-drag-icon" },
            React.createElement(InboxOutlined, null)),
        React.createElement("p", { className: "ant-upload-text" }, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B \u0432 \u044D\u0442\u0443 \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"),
        React.createElement("p", { className: "ant-upload-hint" }, "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043E\u0434\u0438\u043D\u043E\u0447\u043D\u043E\u0439 \u0438\u043B\u0438 \u043C\u0430\u0441\u0441\u043E\u0432\u043E\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438.")));
};
