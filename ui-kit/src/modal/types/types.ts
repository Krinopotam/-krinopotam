import {ModalProps as AntModalProps} from "antd/es/modal/interface";
import React from "react";
import {IColorType} from "@src/button";

export interface IExtendedModalProps
    extends Omit<AntModalProps, 'afterOpenChange' | 'okButtonProps' | 'okType' | 'okText' | 'onOk' | 'cancelText' | 'cancelButtonProps' | 'bodyStyle' | 'onClose' | 'footer' | 'height' | 'width'> {
    /** The modal ID for form dispatcher */
    modalId?: string;
    /** Is the form body not scrollable */
    notScrollable?: boolean;
    /** Footer content */
    footer?: React.ReactNode;
    /** Is the for can be resized (show the resize handler). Default: true */
    resizable?: boolean;
    /** Form color type */
    colorType?: IColorType;
    /**Form header icon */
    headerIcon?: React.ReactNode;
    /** Is the form draggable */
    isDraggable?: boolean;
    /** initial form width */
    width?:number;
    /** Initial form height */
    height?:number;

    /********** Callbacks *********/
    /** Callback when the animation ends when Modal is turned on and off */
    onAfterOpenChange?: (open: boolean) => void;
}