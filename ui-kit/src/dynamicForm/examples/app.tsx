import {App, ConfigProvider, theme} from 'antd';

import {BrowserRouter} from 'react-router-dom';
import React, {useState} from 'react';
import dayjs from 'dayjs';
import ruRU from 'antd/locale/ru_RU';
import {ExamplesRoutes} from "./exampleRoutes";

dayjs.locale('ru');

export const ExamplesApp = (): React.JSX.Element => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <ConfigProvider
            locale={ruRU}
            theme={{
                token: {
                    colorPrimary: '#0d6efd',
                    borderRadius: 4,
                },
                components: {Modal: {paddingContentHorizontal: 0}},
                //algorithm: theme.darkAlgorithm,
                algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
            }}
        >
            {/** antd context for static Modal (form MessageBox). Should use in root component */}
            <App>
                <BrowserRouter>
                    <ExamplesRoutes darkMode={darkMode} setDarkMode={setDarkMode} />
                </BrowserRouter>
            </App>
        </ConfigProvider>
    );
};
