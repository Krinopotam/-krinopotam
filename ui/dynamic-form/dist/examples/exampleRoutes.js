import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ExamplesLayout } from './examplesLayout';
import { Home } from './home';
import { FormSimple } from './pages/formSimple';
export const ExamplesRoutes = (props) => {
    return (React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(ExamplesLayout, { setDarkMode: props.setDarkMode }) },
            React.createElement(Route, { index: true, element: React.createElement(Home, null) }),
            React.createElement(Route, { path: "FormSimple", element: React.createElement(FormSimple, null) }),
            ";",
            React.createElement(Route, { path: "*", element: React.createElement(Home, null) }))));
};
