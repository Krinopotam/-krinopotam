import React from 'react';
import { createRoot } from 'react-dom/client';
import { ExamplesApp } from "./app";
(() => {
    const rootElement = document.getElementById('root');
    const root = createRoot(rootElement);
    root.render(React.createElement(ExamplesApp, null));
})();
