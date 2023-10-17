import React from 'react';
import { LoadingError } from '../loadingError';
import { Spin } from 'antd';
export const LoadingContainer = ({ isLoading, error, retryHandler, children, skeleton, notHideContent, caption, spinStyle, errorStyle }) => {
    const tip = caption !== null && caption !== void 0 ? caption : 'Пожалуйста, подождите...';
    return (React.createElement(LoadingError, { errorMessage: error === null || error === void 0 ? void 0 : error.message, retryHandler: retryHandler, style: errorStyle }, React.createElement(Spin, { spinning: isLoading, delay: 0, tip: tip, style: spinStyle, wrapperClassName: 'tabulator-grid-spinner' }, isLoading && !notHideContent ? (React.createElement(React.Fragment, null, skeleton !== null && skeleton !== void 0 ? skeleton : null,
        React.createElement("div", { style: { display: 'none' } }, children))) : (React.createElement(React.Fragment, null, children)))));
};
