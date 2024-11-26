import React, {CSSProperties, MouseEvent, useCallback, useEffect, useSyncExternalStore} from 'react';
import {LinkField} from '@src/dForm/fields/link/linkField';

export const LinkFieldRender = ({field}: {field: LinkField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();

    const value = field.getValue();

    const onClick = useCallback(
        (e: MouseEvent) => {
            field.setTouched(true);
            fieldProps?.onClick?.(e, field);
        },
        [field, fieldProps]
    );

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%'};
    const style = {...defStyle, ...fieldProps.style};

    return (
        <a
            className={fieldProps.className}
            href={fieldProps.href}
            target={fieldProps.target}
            style={style}
            onClick={e => onClick(e)}
            onContextMenu={e => fieldProps?.onContextMenu?.(e, field)}
            onDoubleClick={e => fieldProps?.onDoubleClick?.(e, field)}
            onDrag={e => fieldProps?.onDrag?.(e, field)}
            onDragEnd={e => fieldProps?.onDragEnd?.(e, field)}
            onDragEnter={e => fieldProps?.onDragEnter?.(e, field)}
            onDragExit={e => fieldProps?.onDragExit?.(e, field)}
            onDragLeave={e => fieldProps?.onDragLeave?.(e, field)}
            onDragOver={e => fieldProps?.onDragOver?.(e, field)}
            onDragStart={e => fieldProps?.onDragStart?.(e, field)}
            onMouseDown={e => fieldProps?.onMouseDown?.(e, field)}
            onMouseEnter={e => fieldProps?.onMouseEnter?.(e, field)}
            onMouseLeave={e => fieldProps?.onMouseLeave?.(e, field)}
            onMouseMove={e => fieldProps?.onMouseMove?.(e, field)}
            onMouseOut={e => fieldProps?.onMouseOut?.(e, field)}
            onMouseOver={e => fieldProps?.onMouseOver?.(e, field)}
            onBlur={e => fieldProps?.onBlur?.(e, field)}
            onFocus={e => fieldProps?.onFocus?.(e, field)}
            onMouseUp={e => fieldProps?.onMouseUp?.(e, field)}
        >
            {value}
        </a>
    );
};
