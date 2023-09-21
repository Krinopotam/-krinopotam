import '@storybook/addon-console'
import {Controls, Description, Primary, Title} from "@storybook/blocks";
import React from "react";
import MainDecorator from "./templates/mainDecorator";

import type { Preview } from '@storybook/react';
const preview:Preview = {
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                // The label to show for this toolbar item
                title: 'Theme',
                // Array of plain string values or MenuItem shape (see below)
                items: [
                    {value: 'light', title: 'Light', icon: 'sun'},
                    {value: 'dark', title: 'Dark', icon:'moon'}
                ],
                // Change title based on selected value
                dynamicTitle: true,
            },
        },
    },
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
                order: ['Controls', 'DForm', ['Controls', 'Examples', 'Advanced Examples']],
            },
        },
    },
    decorators: [
        (Story, context) => {
            const mode = context.globals.theme;
            return <MainDecorator mode={mode}>
                <Story/>
            </MainDecorator>
        },
    ],
};

export default preview;
