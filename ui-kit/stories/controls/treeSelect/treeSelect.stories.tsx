// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import {ITreeSelectNode, TreeSelect} from "@src/treeSelect";
import {UserOutlined} from "@ant-design/icons"
import React from "react";
import {HelpersObjects} from "@krinopotam/js-helpers";
import {InputField} from "@src/dForm/fields/input/inputField";
import {TreeSelectDataSet} from "../../datasets/treeSelect";


export default {
    title: 'Controls/TreeSelect',
    component: TreeSelect,
    tags: ['autodocs'],
    parameters: {
        docs: {
            /* AUTO-SOURCE-INJECT-START */
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof TreeSelect>

type Story = StoryObj<typeof TreeSelect>;

const commonArgs: Story['args'] = {
    dataSet: TreeSelectDataSet,
    style: {width: 400},
    placeholder: 'Select value',
}
export const Simple: Story = {
    args: {
        ...commonArgs
    },
}

export const AllowClear: Story = {
    args: {
        ...commonArgs,
        allowClear: true
    },
}
export const NoBorder: Story = {
    args: {
        ...commonArgs,
        bordered: false
    },
}

export const Disabled: Story = {
    args: {
        ...commonArgs,
        disabled: true
    },
}

export const ReadOnly: Story = {
    args: {
        ...commonArgs,
        readOnly: true
    },
}

export const DefaultValue: Story = {
    args: {
        ...commonArgs,
        value:'03-03-01'

    },
}

export const CustomRenders: Story = {
    args: {
        ...commonArgs,
        /** node title render */
        titleRender: (treeNode: ITreeSelectNode) => {
            return (
                <>
                    {treeNode.title}
                    <br/>
                    <small style={{color: '#808080'}}><UserOutlined/> {' ' + treeNode.head}</small>
                </>
            );
        },
        /** selected value render */
        labelRender: (treeNode: ITreeSelectNode) => {
            return (
                <>
                    {treeNode.title} <small style={{color: '#808080'}}>{' (' + treeNode.head + ')'}</small>
                </>
            )
        },
        /** custom filter */
        filterTreeNode: (inputValue: string, treeNode: ITreeSelectNode) => {
            const nodeString = (treeNode.title + ' (' + treeNode.head + ')').toLowerCase();
            return nodeString.indexOf(inputValue.toLowerCase()) >= 0;
        }
    },
}

export const AsyncFetch: Story = {
    args: {
        ...commonArgs,

        fetchMode: 'onUse',
        noCacheFetchedData: true,
        onDataFetch: () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() < 0.0) reject({message: 'Ошибка загрузки данных', code: 400});
                    else resolve({data: TreeSelectDataSet});
                }, 2000);
            });
        },
    },
}

const filterDataSet = (nodes: ITreeSelectNode[], search: string) => {
    const result: ITreeSelectNode[] = [];
    let resultChildren: ITreeSelectNode[] = [];
    for (const node of nodes) {
        const nodeClone = HelpersObjects.cloneObject(node);
        if (node.children && node.children.length > 0) resultChildren = filterDataSet(node.children, search);

        if (resultChildren.length > 0) {
            nodeClone.children = resultChildren;
            result.push(nodeClone);
            continue;
        }

        const findIndex = node.title?.toString().toLowerCase().indexOf(search.toLowerCase());
        if (typeof findIndex !== 'undefined' && findIndex >= 0) result.push(nodeClone);
    }

    return result;
};

export const AsyncSearch: Story = {
    args: {
        ...commonArgs,

        fetchMode: 'onUse',
        noCacheFetchedData: true,
        minSearchLength: 1,
        onDataFetch: (search: string) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = filterDataSet(TreeSelectDataSet, search);
                    resolve({data: result});
                }, 1000);
            })
        }
    },
}

export const Editable: Story = {
    args: {
        ...commonArgs,
        confirmDelete: true,
        editFormProps: {
            confirmChanges: true,
            bodyHeight: 100,
            fieldsProps: {
                title: {component: InputField, label: 'Department'}
            }
        }
    },
}

export const EditableAsync: Story = {
    args: {
        ...commonArgs,
        confirmDelete: true,
        onDelete: () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() < 0.1) reject({message: 'Ошибка удаления строк', code: 400});
                    else resolve({data: {result: 'OK'}});
                }, 2000);
            });
        },
        editFormProps: {
            confirmChanges: true,
            bodyHeight: 100,

            onSubmit: (values: Record<string, unknown>) => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (Math.random() < 0.3) reject({message: 'Ошибка сохранения', code: 400});
                        else resolve({data: values});
                    }, 3000);
                });
            },
            fieldsProps: {
                title: {component: InputField, label: 'Department'}
            }
        }
    },
}
