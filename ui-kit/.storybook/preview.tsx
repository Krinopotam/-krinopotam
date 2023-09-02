//import '../src/index.css';
import '@storybook/addon-console'
import {Controls, Description, Primary, Title} from "@storybook/blocks";
import React, {FC} from "react";
import MainDecorator from "./templates/mainDecorator";

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
    decorators: [
        (Story: FC) => (
            <MainDecorator>
                <Story/>
            </MainDecorator>
        ),
    ],
};

export default preview;
