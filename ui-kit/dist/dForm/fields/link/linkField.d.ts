import { BaseField, IBaseFieldProps } from '../../../dForm/fields/base/baseField';
import React, { DragEvent, MouseEvent } from 'react';
export interface ILinkFieldProps extends IBaseFieldProps<LinkField> {
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    onClick?: (event: MouseEvent, field: LinkField) => void;
    onContextMenu?: (event: MouseEvent, field: LinkField) => void;
    onDoubleClick?: (event: MouseEvent, field: LinkField) => void;
    onDrag?: (event: DragEvent, field: LinkField) => void;
    onDragEnd?: (event: DragEvent, field: LinkField) => void;
    onDragEnter?: (event: DragEvent, field: LinkField) => void;
    onDragExit?: (event: DragEvent, field: LinkField) => void;
    onDragLeave?: (event: DragEvent, field: LinkField) => void;
    onDragOver?: (event: DragEvent, field: LinkField) => void;
    onDragStart?: (event: DragEvent, field: LinkField) => void;
    onDrop?: (event: DragEvent, field: LinkField) => void;
    onMouseDown?: (event: MouseEvent, field: LinkField) => void;
    onMouseEnter?: (event: MouseEvent, field: LinkField) => void;
    onMouseLeave?: (event: MouseEvent, field: LinkField) => void;
    onMouseMove?: (event: MouseEvent, field: LinkField) => void;
    onMouseOut?: (event: MouseEvent, field: LinkField) => void;
    onMouseOver?: (event: MouseEvent, field: LinkField) => void;
    onMouseUp?: (event: MouseEvent, field: LinkField) => void;
}
export declare class LinkField extends BaseField<ILinkFieldProps> {
    protected render(): React.JSX.Element;
}
