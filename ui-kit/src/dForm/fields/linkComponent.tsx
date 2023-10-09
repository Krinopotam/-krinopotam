/**
 * @LinkComponent
 * @version 0.0.29.7
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {DragEvent, MouseEvent, useEffect} from 'react';

import {IDFormComponentProps, IDFormFieldProps} from './baseComponent';
import {IDFormApi} from "@src/dynamicForm";

// !used in configGenerator parsing. Don't use multi rows comments!
export interface IDFormFieldLinkProps extends IDFormFieldProps {
    /** Anchor url */
    href?: string;

    /** Anchor target */
    target?: '_blank' | '_self' | '_parent' | '_top';

    onClick?: (event: MouseEvent, formApi: IDFormApi) => void
    onContextMenu?: (event: MouseEvent, formApi: IDFormApi) => void
    onDoubleClick?: (event: MouseEvent, formApi: IDFormApi) => void
    onDrag?: (event: DragEvent, formApi: IDFormApi) => void
    onDragEnd?: (event: DragEvent, formApi: IDFormApi) => void
    onDragEnter?: (event: DragEvent, formApi: IDFormApi) => void
    onDragExit?: (event: DragEvent, formApi: IDFormApi) => void
    onDragLeave?: (event: DragEvent, formApi: IDFormApi) => void
    onDragOver?: (event: DragEvent, formApi: IDFormApi) => void
    onDragStart?: (event: DragEvent, formApi: IDFormApi) => void
    onDrop?: (event: DragEvent, formApi: IDFormApi) => void
    onMouseDown?: (event: MouseEvent, formApi: IDFormApi) => void
    onMouseEnter?: (event: MouseEvent, formApi: IDFormApi) => void
    onMouseLeave?: (event: MouseEvent, formApi: IDFormApi) => void
    onMouseMove?: (event: MouseEvent, formApi: IDFormApi) => void
    onMouseOut?: (event: MouseEvent, formApi: IDFormApi) => void
    onMouseOver?: (event: MouseEvent, formApi: IDFormApi) => void
    onMouseUp?: (event: MouseEvent, formApi: IDFormApi) => void
}

interface IDFormLinkComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldLinkProps
}

export const LinkComponent = ({formApi, fieldName, fieldProps}: IDFormLinkComponentProps): React.JSX.Element => {
    const value = formApi.model.getFieldValue(fieldName) as string | undefined;

    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);

    return (
        <a
            href={fieldProps.href}
            target={fieldProps.target}
            style={fieldProps.style}

            onClick={(e) => fieldProps?.onClick?.(e, formApi)}
            onContextMenu={(e) => fieldProps?.onContextMenu?.(e, formApi)}
            onDoubleClick={(e) => fieldProps?.onDoubleClick?.(e, formApi)}
            onDrag={(e) => fieldProps?.onDrag?.(e, formApi)}
            onDragEnd={(e) => fieldProps?.onDragEnd?.(e, formApi)}
            onDragEnter={(e) => fieldProps?.onDragEnter?.(e, formApi)}
            onDragExit={(e) => fieldProps?.onDragExit?.(e, formApi)}
            onDragLeave={(e) => fieldProps?.onDragLeave?.(e, formApi)}
            onDragOver={(e) => fieldProps?.onDragOver?.(e, formApi)}
            onDragStart={(e) => fieldProps?.onDragStart?.(e, formApi)}
            onMouseDown={(e) => fieldProps?.onMouseDown?.(e, formApi)}
            onMouseEnter={(e) => fieldProps?.onMouseEnter?.(e, formApi)}
            onMouseLeave={(e) => fieldProps?.onMouseLeave?.(e, formApi)}
            onMouseMove={(e) => fieldProps?.onMouseMove?.(e, formApi)}
            onMouseOut={(e) => fieldProps?.onMouseOut?.(e, formApi)}
            onMouseOver={(e) => fieldProps?.onMouseOver?.(e, formApi)}
            onMouseUp={(e) => fieldProps?.onMouseUp?.(e, formApi)}
        >
            {value}
        </a>
    );
};
