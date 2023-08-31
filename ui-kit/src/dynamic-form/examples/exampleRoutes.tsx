
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ExamplesLayout} from './examplesLayout';
import {Home} from './home';
import {FormSimple} from './pages/formSimple';

export const ExamplesRoutes = (props: {darkMode: boolean; setDarkMode: (mode:boolean) => void}) => {
    return (
        <Routes>
            <Route path="/" element={<ExamplesLayout setDarkMode={props.setDarkMode} />}>
                <Route index element={<Home />} />
                <Route path="FormSimple" element={<FormSimple />} />;
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    );
};