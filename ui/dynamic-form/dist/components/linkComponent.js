import React, { useEffect } from 'react';
export const LinkComponent = ({ formApi, fieldName, fieldProps }) => {
    const value = formApi.model.getFieldValue(fieldName);
    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);
    return (React.createElement("a", { href: fieldProps.href, target: fieldProps.target }, value));
};
