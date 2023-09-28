import React from 'react';
import {createRoot} from 'react-dom/client';
import {DemoApp} from "./app";

(() => {
    const rootElement = document.getElementById('root') as Element;
    const root = createRoot(rootElement);

    root.render(
        <DemoApp />
    );
})();
