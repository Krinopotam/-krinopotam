import type {Meta, StoryObj} from '@storybook/react';
import App from "./antd";


export default {
    title: 'DForm/Examples/Antd',
    component: App,
    tags: ['autodocs'],
    parameters: {
        docs: {
            /* AUTO-SOURCE-INJECT-START */
            /* AUTO-SOURCE-INJECT-END */
        }
    },

} as Meta<typeof App>;

type Story = StoryObj<typeof App>;

export const Playground: Story = {
    args:{
    }
};

