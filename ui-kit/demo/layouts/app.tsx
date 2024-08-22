import {App, ConfigProvider, theme} from 'antd';

import {RouterProvider} from 'react-router-dom';
import {useDemoRoutes} from './demoRoutes';
import React, {useState} from 'react';
import ruRU from 'antd/locale/ru_RU';

export const DemoApp = (): React.JSX.Element => {
    const [darkMode, setDarkMode] = useState(false);
    const demoRoutes = useDemoRoutes({darkMode, setDarkMode});
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
            <App style={{height: '100%'}}>
                <RouterProvider router={demoRoutes} />
            </App>
        </ConfigProvider>
    );
};
