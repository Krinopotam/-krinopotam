import React from 'react';
import { LoadingError } from '@krinopotam/ui-loading-error';
import { Spin } from 'antd';
export const LoadingContainer = ({ isLoading, error, retryHandler, children, skeleton, notHideContent, caption, }) => {
    const tip = caption || 'Пожалуйста, подождите...';
    return (React.createElement(LoadingError, { errorMessage: error === null || error === void 0 ? void 0 : error.message, retryHandler: retryHandler }, React.createElement(Spin, { spinning: isLoading, delay: 0, tip: tip }, isLoading && !notHideContent ? (React.createElement(React.Fragment, null,
        skeleton ? skeleton : null,
        React.createElement("div", { style: { display: 'none' } }, children))) : (React.createElement(React.Fragment, null, children)))));
};
