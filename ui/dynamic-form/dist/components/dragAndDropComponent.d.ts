import { HttpRequestHeader, ItemRender, ShowUploadListInterface, UploadListProgressProps, UploadListType, UploadType } from 'antd/es/upload/interface';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';
import React from 'react';
import { IDFormComponentProps, IDFormFieldProps } from './baseComponent';
export interface IDFormFieldDragAndDropProps extends IDFormFieldProps {
    accept?: string;
    action?: string | ((file: RcFile) => string) | ((file: RcFile) => Promise<string>);
    beforeUpload?: (file: RcFile, fileList: RcFile[]) => boolean | Promise<File>;
    data?: Record<string, unknown> | ((file: UploadFile<unknown>) => Record<string, unknown> | Promise<Record<string, unknown>>);
    defaultFileList?: Array<UploadFile<unknown>>;
    directory?: boolean;
    fileList?: Array<UploadFile<unknown>>;
    headers?: HttpRequestHeader;
    iconRender?: (file: UploadFile<unknown>, listType?: UploadListType) => React.ReactNode;
    isImageUrl?: (file: UploadFile) => boolean;
    itemRender?: ItemRender<unknown>;
    listType?: UploadListType;
    maxCount?: number;
    method?: 'POST' | 'PUT' | 'PATCH' | 'post' | 'put' | 'patch';
    multiple?: boolean;
    fileName?: string;
    openFileDialogOnClick?: boolean;
    previewFile?: (file: File | Blob) => Promise<string>;
    progress?: UploadListProgressProps;
    showUploadList?: boolean | ShowUploadListInterface;
    withCredentials?: boolean;
    onChange?: (info: UploadChangeParam<UploadFile<unknown>>) => void;
    onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
    onDownload?: (file: UploadFile<unknown>) => void;
    onPreview?: (file: UploadFile<unknown>) => void;
    onRemove?: (file: UploadFile<unknown>) => void | boolean | Promise<void | boolean>;
    type?: UploadType;
}
interface IDFormDragAndDropComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldDragAndDropProps;
}
export declare const DragAndDropComponent: ({ formApi, fieldName, fieldProps }: IDFormDragAndDropComponentProps) => React.JSX.Element;
export {};
