import fs from 'fs';

export const generateRoutes = (folderPath: string, routesStr: string) => {
    // language=text
    const result = `
    import React, {useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    import {ComponentLoader} from './componentLoader';

export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
${routesStr}
                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

`;
    fs.writeFileSync(folderPath + '/demoRoutes.tsx', result, {encoding: 'utf8', flag: 'w'});
};