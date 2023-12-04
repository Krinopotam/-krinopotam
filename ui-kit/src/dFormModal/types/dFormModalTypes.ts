import React, {CSSProperties} from "react";
import {IDFormBaseCallbacks, IDFormCallbacks, IDFormDataSet, IDFormProps} from "@src/dForm";
import {IDFormModalApi} from "@src/dFormModal";

export interface IDModalProps {
    /** Modal controls title */
    title?: string;

    /**Modal window width */
    width?: number;

    /**Modal window min width */
    minWidth?: number;

    /**Modal window max width */
    maxWidth?: number;

    /** Content body height*/
    bodyHeight?: number;

    /** Content body min height*/
    bodyMinHeight?: number;

    /** Content body max height*/
    bodyMaxHeight?: number;

    /** Content body CSS style (will be overwritten by bodyHeight, bodyMinHeight, bodyMaxHeight if set)*/
    bodyStyle?: React.CSSProperties;

    /** Content body wil not be scrollable */
    notScrollable?: boolean;

    /** Is modal can be resizable */
    resizable?: boolean;

    /** Is controls visible (for open for without api) */
    isOpened?: boolean;

    /** Form header style */
    headerStyle?: CSSProperties;

    /**Form header icon */
    headerIcon?: React.ReactNode;

    /** Form footer style */
    footerStyle?: CSSProperties;

    /** Confirm message before the form closing, if form is dirty */
    closeFormConfirmMessage?: React.ReactNode;
}

export interface IDFormModalCallbacks extends IDFormBaseCallbacks<IDFormModalApi> {
    onOpen?: (
        formApi: IDFormModalApi,
        dataSet: IDFormDataSet | undefined,
    ) => boolean | void;
    onOpened?: (formApi: IDFormModalApi, dataSet: IDFormDataSet | undefined) => void;
    onClosing?: (formApi: IDFormModalApi) => boolean | void;
    onClosed?: (formApi: IDFormModalApi) => void;
}

export type IDFormModalProps = IDModalProps & IDFormModalCallbacks & Exclude<IDFormProps, keyof IDFormCallbacks>