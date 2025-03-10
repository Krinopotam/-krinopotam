import React, {CSSProperties, useEffect, useSyncExternalStore} from 'react';
import {CustomField} from '@src/dForm/fields/custom/customField';

export const CustomFieldRender = ({field}: {field: CustomField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();

    const value = field.getValue();
    const curValue = fieldProps?.onRender?.(value, field) ?? value;

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%'};
    const style: CSSProperties = {...defStyle, ...fieldProps.style};

    return <div style={style} className={fieldProps.className}>{curValue}</div>;
};
