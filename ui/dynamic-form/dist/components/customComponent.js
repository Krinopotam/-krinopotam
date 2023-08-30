import React, { useEffect } from 'react';
export const CustomComponent = ({ formApi, fieldName }) => {
    const value = formApi.model.getFieldValue(fieldName);
    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);
    return (React.createElement(React.Fragment, null, value));
};
