// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import {TabulatorBase} from "@src/tabulatorBase";
import React from "react";
import {TabulatorGridColumns, TabulatorTreeDataset} from "../../datasets/tabulator";

export default {
    title: 'Controls/TabulatorBase',
    component: TabulatorBase,
    tags: ['autodocs'],
    parameters: {
        docs: {
            /* AUTO-SOURCE-INJECT-START */
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof TabulatorBase>



const baseArgs: Story['args'] = {
    data: TabulatorTreeDataset,
    columns: TabulatorGridColumns,
    columnDefaults: {
        resizable: 'header',
        headerFilter: true,
        headerFilterFunc: 'like'
    },
    height: 500,
    layout: 'fitColumns',
    movableColumns: true,
}

type Story = StoryObj<typeof TabulatorBase>;
export const Simple: Story = {
    args: {
        ...baseArgs
    },
}

export const WithHeaderFilter: Story = {
    args: {
        ...baseArgs,
        showHeaderFilter: true,
        footerElement: <div>My Footer</div>
    },
}
export const Tree: Story = {
    args: {
        ...baseArgs,
        dataTree: true
    },
}

export const WithFooter: Story = {
    args: {
        ...baseArgs,
        footerElement: <div>My Footer</div>
    },
}


export const PaginationLocal: Story = {
    args: {
        ...baseArgs,
        height: undefined,
        pagination: true,
        paginationMode: 'local',
        paginationSize: 10,
        paginationSizeSelector: [5, 10, 50, 100],
        paginationCounter: "rows",
    },
}

export const PaginationRemote: Story = {
    args: {
        ...baseArgs,
        data: undefined,
        height: undefined,
        pagination: true,
        paginationSize: 5,
        paginationSizeSelector: [5, 10, 50, 100],
        paginationCounter: "rows",
        paginationMode: 'remote',
        filterMode: "remote",
        sortMode: 'remote',
        ajaxURL: '-', //ajax URL. Workaround: if you need to use your own fetcher (for example Axios), then you must specify any non-empty string
        ajaxRequestFunc: (url, config, params) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    //make any remote fetch
                    const page = params?.page ?? 1;
                    const size = params?.size ?? 5;
                    const lastPage = Math.ceil(TabulatorTreeDataset.length / size);
                    const dataSet = TabulatorTreeDataset.slice((page - 1) * size, page * size); //remote fetch imitation
                    resolve({data: dataSet, last_page: lastPage})
                }, 1000)
            })
        },
        ajaxParams: {key1: "value1", key2: "value2"} //any additional params (you can pass a callback)
    },
}