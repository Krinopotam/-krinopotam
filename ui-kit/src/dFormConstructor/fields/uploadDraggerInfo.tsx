import {UploadOutlined } from '@ant-design/icons';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import React from 'react';
import {IUploadDraggerFieldProps, UploadDraggerField} from '@src/dForm/fields/uploadDragger';

export class UploadDraggerInfo extends BaseComponentInfo {
    public override readonly TITLE = 'Upload dragger';
    public override readonly CODE = 'uploadDragger';
    public override readonly CLASS = UploadDraggerField;
    public override readonly INTERFACE_NAME = 'IUploadDraggerFieldProps';
    public override readonly ICON = (<UploadOutlined  />);

    override getPropsInfo() {
        const {placeholder, id, label, ...baseProps} = super.getPropsInfo();
        return {
            id,
            label,
            uploadText: 'string',
            uploadHint: 'string',
            fileName: 'string',
            ...baseProps,
        } satisfies IComponentPropsInfo<IUploadDraggerFieldProps>;
    }
}
