// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react';
import UploadDraggerComponent from './uploadDraggerComponent';

export default {
    title: 'DForm/Fields/UploadDragger',
    component: UploadDraggerComponent,
    tags: ['autodocs'],
    parameters: {
        docs: {
            /* AUTO-SOURCE-INJECT-START */
            source: {
                language: 'tsx',
                format: true,
                // language=text
                code: `
                    import React from 'react';
                    import {DForm} from @krinopotam/ui-kit/dForm';
                    import {IUploadDraggerFieldProps, UploadDraggerField} from @krinopotam/ui-kit/dForm/fields/uploadDragger';
                    type IComponent = IUploadDraggerFieldProps;
                    /** DForm Input field */
                    export const UploadDraggerComponent = (props: IComponent): React.JSX.Element => (
                        <DForm buttons={null} fieldsProps={{field1: {...props, component: UploadDraggerField}}} />
                    );
                    export default UploadDraggerComponent;
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof UploadDraggerComponent>;

type Story = StoryObj<typeof UploadDraggerComponent>;

const baseArgs: Story['args'] = {
    label: 'Upload dragger field',
};
export const Default: Story = {
    args: {
        ...baseArgs,
    },
};

export const DefaultValues: Story = {
    args: {
        ...baseArgs,
        value: [
            {
                uid: '1',
                name: 'xxx.png',
                status: 'uploading',
                url: 'http://www.baidu.com/xxx.png',
                percent: 33,
            },
            {
                uid: '2',
                name: 'yyy.png',
                status: 'done',
                url: 'http://www.baidu.com/yyy.png',
            },
            {
                uid: '3',
                name: 'zzz.png',
                status: 'error',
                response: 'Server Error 500', // custom error message to show
                url: 'http://www.baidu.com/zzz.png',
            },
        ],
    },
};
