//import '../src/index.css';
import '@storybook/addon-console'
import {Controls, Description, Primary, Source, Title} from "@storybook/blocks";
import React from "react";

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            page: () => <>
                <Title/>
                <Description/>
                <Primary/>
                <p>Parameters:</p>
                <Controls/>
            </>
        },
        options: {
            storySort: {
                order: ['DForm', ['Components', 'Examples']],
            },
        },
    },
};

export default preview;
