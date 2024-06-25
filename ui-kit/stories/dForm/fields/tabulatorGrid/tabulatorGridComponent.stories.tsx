// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react';
import TabulatorGridComponent from './tabulatorGridComponent';
import {TabulatorGridColumns, TabulatorTreeDataset} from '../../../datasets/tabulator';
import React from 'react';

export default {
    title: 'DForm/Fields/TabulatorGrid',
    component: TabulatorGridComponent,
    tags: ['autodocs'],
    parameters: {
        docs: {
            /* AUTO-SOURCE-INJECT-START */
            source: {
                language: 'tsx',
                format: true,
                // language=text
                code: `
                    import React from "react";
                    import {DForm} from @krinopotam/ui-kit/dForm";
                    import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField";
                    type IComponent = ITabulatorGridFieldProps
                    /** DForm TabulatorGrid field */
                    export const TabulatorGridComponent = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: TabulatorGridField}}
                        }
                    />
                    export default TabulatorGridComponent
                `,
            },
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof TabulatorGridComponent>;

const baseArgs: Story['args'] = {
    value: TabulatorTreeDataset,
    columns: TabulatorGridColumns,
    columnDefaults: {
        resizable: 'header',
        headerFilter: true,
        headerFilterFunc: 'like',
    },
    height: 500,
    layout: 'fitColumns',
    movableColumns: true,
};

type Story = StoryObj<typeof TabulatorGridComponent>;

export const Simple: Story = {
    args: {
        ...baseArgs,
    },
};

export const WithHeaderFilter: Story = {
    args: {
        ...baseArgs,
        showHeaderFilter: true,
        footerElement: <div>My Footer</div>,
    },
};
export const Tree: Story = {
    args: {
        ...baseArgs,
        dataTree: true,
    },
};

export const WithFooter: Story = {
    args: {
        ...baseArgs,
        footerElement: <div>My Footer</div>,
    },
};

export const PaginationLocal: Story = {
    args: {
        ...baseArgs,
        height: undefined,
        pagination: true,
        paginationMode: 'local',
        paginationSize: 10,
        paginationSizeSelector: [5, 10, 50, 100],
        paginationCounter: 'rows',
    },
};

export const PaginationRemote: Story = {
    args: {
        ...baseArgs,
        data: undefined,
        height: undefined,
        pagination: true,
        paginationSize: 5,
        paginationSizeSelector: [5, 10, 50, 100],
        paginationCounter: 'rows',
        paginationMode: 'remote',
        filterMode: 'remote',
        sortMode: 'remote',
        ajaxURL: '-', //ajax URL. Workaround: if you need to use your own fetcher (for example Axios), then you must specify any non-empty string
        ajaxRequestFunc: (url, config, params) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    //make any remote fetch
                    const dataSet = TabulatorTreeDataset.slice((params.page - 1) * params.size, params.page * params.size); //remote fetch imitation
                    resolve({data: dataSet, last_page: 4});
                }, 1000);
            });
        },
        ajaxParams: {key1: 'value1', key2: 'value2'}, //any additional params (you can pass a callback)
    },
};
