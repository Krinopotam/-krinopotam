import React, { useEffect } from 'react';
import { Divider } from "antd";
export const DividerComponent = ({ formApi, fieldName, fieldProps }) => {
    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);
    return (React.createElement(Divider, { orientation: fieldProps.orientation, orientationMargin: fieldProps.orientation, plain: fieldProps.plain }, fieldProps.title));
};
