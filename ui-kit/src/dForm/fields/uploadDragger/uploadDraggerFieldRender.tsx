import React, {CSSProperties, useCallback, useEffect, useSyncExternalStore} from 'react';
import {Upload} from 'antd';
import {IUploadDraggerFieldProps, UploadDraggerField} from '@src/dForm/fields/uploadDragger/uploadDraggerField';
import {InboxOutlined} from '@ant-design/icons';

const {Dragger} = Upload;
export const UploadDraggerFieldRender = ({field}: {field: UploadDraggerField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();

    const onChange = useCallback<NonNullable<IUploadDraggerFieldProps['onChange']>>(
        e => {
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

    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%'};
    const style: React.CSSProperties = {...defStyle, ...fieldProps.style};

    return (
        <Dragger
            {...fieldProps}
            disabled={field.isReadOnly() || field.isDisabled()}
            name={fieldProps.fileName}
            style={style}
            /******** Callbacks *******/
            onChange={onChange}
        >
            <p className="ant-upload-drag-icon">{fieldProps.uploadIcon ?? <InboxOutlined />}</p>
            <p className="ant-upload-text">{fieldProps.uploadText ?? 'Click or drag a file into this area to upload'}</p>
            <p className="ant-upload-hint">{fieldProps.uploadHint ?? 'Support single or bulk download'}</p>
        </Dragger>
    );
};
