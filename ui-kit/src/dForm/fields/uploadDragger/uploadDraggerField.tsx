import {BaseField, IBaseFieldProps} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {UploadFile} from 'antd/es/upload';
import {UploadDraggerFieldRender} from '@src/dForm/fields/uploadDragger/uploadDraggerFieldRender';
import {GetProps, Upload} from 'antd';

export type IDraggerProps = GetProps<typeof Upload.Dragger>;

//TODO: Test component
interface IUploadDraggerFieldOwnProps extends IBaseFieldProps<UploadDraggerField, Array<UploadFile<unknown>>> {
    /** Upload text */
    uploadText?: React.ReactNode;
    /** Upload text hint */
    uploadHint?: React.ReactNode;
    /** Upload section icon */
    uploadIcon?: React.ReactNode;
    /** The name of uploading file */
    fileName?: string;
}

export type IUploadDraggerFieldProps = IUploadDraggerFieldOwnProps & IDraggerProps;

export class UploadDraggerField extends BaseField<IUploadDraggerFieldProps> {
    getValue() {
        return super.getValue() as Array<UploadFile<unknown>>;
    }

    setValue(value: Array<UploadFile<unknown>>, noEvents?: boolean, noRerender?: boolean) {
        super.setValue(value, noEvents, noRerender);
    }

    protected render() {
        return <UploadDraggerFieldRender field={this} />;
    }
}
