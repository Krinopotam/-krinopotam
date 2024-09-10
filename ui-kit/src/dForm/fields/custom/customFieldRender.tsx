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

    const defStyle: CSSProperties = {width: fieldProps.width ?? '100%'};
    const style = {...defStyle, ...fieldProps.style};

    return <div style={style}>{curValue}</div>;
};
