import React, {CSSProperties, useCallback, useEffect, useSyncExternalStore} from 'react';
import {Upload} from 'antd';
import {UploadDraggerField} from '@src/dForm/fields/fileDrop/uploadDraggerField';
import {UploadChangeParam, UploadFile} from 'antd/es/upload';
import {InboxOutlined} from '@ant-design/icons';

const {Dragger} = Upload;
export const UploadDraggerFieldRender = ({field}: {field: UploadDraggerField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();

    const onChange = useCallback(
        (e: UploadChangeParam<UploadFile<unknown>>) => {
            if (field.isReady()) {
                field.setValue(e.fileList || null);
                field.setDirty(true);
                field.setTouched(true);
            }
            fieldProps.onChange?.(e);
        },
        [field, fieldProps]
    );

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    let defStyle: CSSProperties = {};
    if (fieldProps.width) {
        defStyle = {width: fieldProps.width};
    }

    const style = {...defStyle, ...fieldProps.style};

    return (
        <Dragger
            accept={fieldProps.accept}
            action={fieldProps.action}
            data={fieldProps.data}
            //defaultFileList={field.getValue()}
            directory={fieldProps.directory}
            disabled={field.isReadOnly() || field.isDisabled()}
            fileList={field.getValue()}
            headers={fieldProps.headers}
            iconRender={fieldProps.iconRender}
            isImageUrl={fieldProps.isImageUrl}
            itemRender={fieldProps.itemRender}
            listType={fieldProps.listType}
            maxCount={fieldProps.maxCount}
            method={fieldProps.method}
            multiple={fieldProps.multiple}
            name={fieldProps.fileName}
            openFileDialogOnClick={fieldProps.openFileDialogOnClick}
            previewFile={fieldProps.previewFile}
            progress={fieldProps.progress}
            showUploadList={fieldProps.showUploadList}
            type={fieldProps.type}
            withCredentials={fieldProps.withCredentials}
            style={style}
            height={fieldProps.height}
            customRequest={fieldProps.customRequest}
            /******** Callbacks *******/
            beforeUpload={fieldProps.onBeforeUpload}
            onChange={onChange}
            onDownload={fieldProps.onDownload}
            onDrop={fieldProps.onDrop}
            onPreview={fieldProps.onPreview}
            onRemove={fieldProps.onRemove}
        >
            <p className="ant-upload-drag-icon">{fieldProps.uploadIcon ?? <InboxOutlined />}</p>
            <p className="ant-upload-text">{fieldProps.uploadText ?? 'Click or drag a file into this area to upload'}</p>
            <p className="ant-upload-hint">{fieldProps.uploadHint ?? 'Support single or bulk download'}</p>
        </Dragger>
    );
};
