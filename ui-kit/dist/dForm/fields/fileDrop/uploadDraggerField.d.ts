import { BaseField, IBaseFieldProps } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';
import type { UploadRequestOption } from 'rc-upload/lib/interface';
import { HttpRequestHeader, ItemRender, ShowUploadListInterface, UploadListProgressProps, UploadListType, UploadType } from 'antd/es/upload/interface';
export interface IUploadDraggerFieldProps extends IBaseFieldProps<UploadDraggerField> {
    value?: Array<UploadFile<unknown>>;
    accept?: string;
    action?: string | ((file: RcFile) => string) | ((file: RcFile) => Promise<string>);
    customRequest: (options: UploadRequestOption) => void;
    uploadText?: React.ReactNode;
    uploadHint?: React.ReactNode;
    uploadIcon?: React.ReactNode;
    data?: Record<string, unknown> | ((file: UploadFile<unknown>) => Record<string, unknown> | Promise<Record<string, unknown>>);
    directory?: boolean;
    fileList?: Array<UploadFile<unknown>>;
    headers?: HttpRequestHeader;
    iconRender?: (file: UploadFile<unknown>, listType?: UploadListType) => React.ReactNode;
    isImageUrl?: (file: UploadFile) => boolean;
    itemRender?: ItemRender<unknown>;
    listType?: UploadListType;
    maxCount?: number;
    method?: 'post' | 'put' | 'patch';
    multiple?: boolean;
    fileName?: string;
    openFileDialogOnClick?: boolean;
    previewFile?: (file: File | Blob) => Promise<string>;
    progress?: UploadListProgressProps;
    showUploadList?: boolean | ShowUploadListInterface;
    withCredentials?: boolean;
    type?: UploadType;
    height?: number;
    onBeforeUpload?: (file: RcFile, fileList: RcFile[]) => boolean | Promise<File>;
    onChange?: (info: UploadChangeParam<UploadFile<unknown>>) => void;
    onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
    onDownload?: (file: UploadFile<unknown>) => void;
    onPreview?: (file: UploadFile<unknown>) => void;
    onRemove?: (file: UploadFile<unknown>) => void | boolean | Promise<void | boolean>;
}
export declare class UploadDraggerField extends BaseField<IUploadDraggerFieldProps> {
    getValue(): UploadFile<unknown>[];
    setValue(value: Array<UploadFile<unknown>>, noEvents?: boolean, noRerender?: boolean): void;
    protected render(): React.JSX.Element;
}
