import React, {useEffect, useSyncExternalStore} from 'react';
import {CustomField} from '@src/dForm/fields/custom/customField';

export const CustomFieldRender = ({field}: {field: CustomField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();

    const value = field.getValue();
    const render = fieldProps?.onRender?.(value, field) ?? value;

    useEffect(() => {
        field.setReady(true);
    }, [field]);

    return <>{render} </>;
};
