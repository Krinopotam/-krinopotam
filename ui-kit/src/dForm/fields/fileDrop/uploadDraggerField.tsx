import {BaseField, IBaseFieldProps} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {RcFile, UploadChangeParam, UploadFile} from 'antd/es/upload';
import type {UploadRequestOption} from 'rc-upload/lib/interface';
import {HttpRequestHeader, ItemRender, ShowUploadListInterface, UploadListProgressProps, UploadListType, UploadType} from 'antd/es/upload/interface';
import {UploadDraggerFieldRender} from '@src/dForm/fields/fileDrop/uploadDraggerFieldRender';

//TODO: Test component
export interface IUploadDraggerFieldProps extends IBaseFieldProps<UploadDraggerField> {
    /** Default list of files that have been uploaded*/
    value?: Array<UploadFile<unknown>>;
    /** File types that can be accepted (See html input accept Attribute) */
    accept?: string;
    /** Uploading URL/promise */
    action?: string | ((file: RcFile) => string) | ((file: RcFile) => Promise<string>);
    /** Override for the default xhr behavior allowing for additional customization and the ability to implement your own XMLHttpRequest */
    customRequest: (options: UploadRequestOption) => void;
    /** Upload text */
    uploadText?: React.ReactNode;
    /** Upload text hint */
    uploadHint?: React.ReactNode;
    /** Upload section icon */
    uploadIcon?: React.ReactNode;
    /** Uploading extra params or function which can return uploading extra params */
    data?: Record<string, unknown> | ((file: UploadFile<unknown>) => Record<string, unknown> | Promise<Record<string, unknown>>);
    /** Support upload whole directory */
    directory?: boolean;
    /** List of files that have been uploaded (controlled) */
    fileList?: Array<UploadFile<unknown>>;
    /** Request headers*/
    headers?: HttpRequestHeader;
    /** Custom show icon */
    iconRender?: (file: UploadFile<unknown>, listType?: UploadListType) => React.ReactNode;
    /** Customize if render <img /> in thumbnail*/
    isImageUrl?: (file: UploadFile) => boolean;
    /** Custom item of uploadList */
    itemRender?: ItemRender<unknown>;
    /** Built-in stylesheets, support for four types: text, picture, picture-card or picture-circle */
    listType?: UploadListType;
    /** Limit the number of uploaded files. Will replace current one when maxCount is 1 */
    maxCount?: number;
    /** The http method of upload request */
    method?: 'post' | 'put' | 'patch';
    /** Whether to support selected multiple files. IE10+ supported. You can select multiple files with CTRL holding down while multiple is set to be true */
    multiple?: boolean;
    /** The name of uploading file */
    fileName?: string;
    /** Click open file dialog */
    openFileDialogOnClick?: boolean;
    /** Customize preview file logic */
    previewFile?: (file: File | Blob) => Promise<string>;
    /** Custom progress bar */
    progress?: UploadListProgressProps;
    /** Whether to show default upload list, could be an object to specify showPreviewIcon, showRemoveIcon, showDownloadIcon, removeIcon and downloadIcon individually */
    showUploadList?: boolean | ShowUploadListInterface;
    /** The ajax upload with cookie sent */
    withCredentials?: boolean;
    /** Upload type: drag | select */
    type?: UploadType;
    /** Dragger height */
    height?: number;

    /********** Callbacks **************/
    /** Hook function which will be executed before uploading. Uploading will be stopped with false or a rejected Promise returned. When returned value is Upload.LIST_IGNORE, the list of files that have been uploaded will ignore it*/
    onBeforeUpload?: (file: RcFile, fileList: RcFile[]) => boolean | Promise<File>;
    /** A callback function, can be executed when uploading state is changing. It will trigger by every uploading phase */
    onChange?: (info: UploadChangeParam<UploadFile<unknown>>) => void;
    /** A callback function executed when files are dragged and dropped into the upload area */
    onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
    /** Click the method to download the file, pass the method to perform the method logic, and do not pass the default jump to the new TAB */
    onDownload?: (file: UploadFile<unknown>) => void;
    /** A callback function, will be executed when the file link or preview icon is clicked */
    onPreview?: (file: UploadFile<unknown>) => void;
    /** A callback function, will be executed when removing file button is clicked, remove event will be prevented when the return value is false or a Promise which resolve(false) or reject */
    onRemove?: (file: UploadFile<unknown>) => void | boolean | Promise<void | boolean>;
}

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
