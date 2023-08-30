import { App, ConfigProvider, theme } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import ruRU from 'antd/locale/ru_RU';
import { ExamplesRoutes } from "./exampleRoutes";
dayjs.locale('ru');
export const ExamplesApp = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (React.createElement(ConfigProvider, { locale: ruRU, theme: {
            token: {
                colorPrimary: '#0d6efd',
                borderRadius: 4,
            },
            components: { Modal: { paddingContentHorizontal: 0 } },
            algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        } },
        React.createElement(App, null,
            React.createElement(BrowserRouter, null,
                React.createElement(ExamplesRoutes, { darkMode: darkMode, setDarkMode: setDarkMode })))));
};
