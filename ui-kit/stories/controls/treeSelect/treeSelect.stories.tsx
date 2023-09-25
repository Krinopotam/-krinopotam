// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import {ITreeSelectNode, TreeSelect} from "@src/treeselect";
import {UserOutlined} from "@ant-design/icons"
import React from "react";
import {HelpersObjects} from "@krinopotam/js-helpers";
import {InputComponent} from "@src/dynamicForm/components/inputComponent";


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

const dataSet: ITreeSelectNode[] = [
    {
        id: '01',
        title: 'Департамент аналитики данных',
        head: 'Иванов Иван Иванович',
        children: [
            {
                id: '01-01',
                title: 'Управление аналитики продаж',
                head: 'Аридзе Семен Аркович',
                children: [
                    {id: '01-01-01', title: 'Отдел продаж север', head: 'Петров Петр Петрович'},
                    {id: '01-01-02', title: 'Отдел продаж юг', head: 'Сидоров Сидр Сидорович'},
                    {id: '01-01-03', title: 'Отдел продаж запад', head: 'Дмитриев Дмитрий Дмитриевич'},
                ],
            },
            {
                id: '01-02',
                title: 'Управление аналитики закупок',
                head: 'Семенов Семен Семенович',
                children: [
                    {id: '01-02-01', title: 'Отдел закупок север', head: 'Максимов Максим Максимович'},
                    {id: '01-02-02', title: 'Отдел закупок юг', head: 'Русланов Руслан Русланович'},
                    {id: '01-02-03', title: 'Отдел закупок запад', head: 'Сметанин Сметан Сметанович'},
                ],
            },
            {
                id: '01-03',
                title: 'Управление аналитики производства',
                head: 'Саратов Сарат Саратович',
                children: [
                    {id: '01-03-01', title: 'Отдел производства север', head: 'Трибратов Трибрат Трибратович'},
                    {id: '01-03-02', title: 'Отдел производства юг', head: 'Уваров Увар Уварович'},
                    {id: '01-03-03', title: 'Отдел производства запад', head: 'Каямов Каям Каямович'},
                ],
            },
        ],
    },
    {
        id: '02',
        title: 'Департамент инженерных работ',
        head: 'Примеров Пример Примерович',
        children: [
            {
                id: '02-01',
                title: 'Управление строительства',
                head: 'Копылов Максим Валерьевич',
                children: [
                    {id: '02-01-01', title: 'Отдел строительства север', head: 'Неверов Невер Неверович'},
                    {id: '02-01-02', title: 'Отдел строительства юг', head: 'Занудов Зануд Занудович'},
                    {id: '02-01-03', title: 'Отдел строительства запад', head: 'Сигизмундов Сигизмунд Сигизмундович'},
                ],
            },
            {
                id: '02-02',
                title: 'Управление демонтажа',
                head: 'Картонов Картон Картонович',
                children: [
                    {id: '02-02-01', title: 'Отдел демонтажа север', head: 'Помидоров Помидор Помидорович'},
                    {id: '02-02-02', title: 'Отдел демонтажа юг', head: 'Бананов Банан Бананович'},
                    {id: '02-02-03', title: 'Отдел демонтажа запад', head: 'Огурцов Огурец Огурцович'},
                ],
            },
            {
                id: '02-03',
                title: 'Управление реконструкции',
                head: 'Ремонтов Ремонт Ремонтович',
                children: [
                    {id: '02-03-01', title: 'Отдел реконструкции север', head: 'Лимонов Лимон Лимонович'},
                    {id: '02-03-02', title: 'Отдел реконструкции юг', head: 'Маркелов Маркел Маркелович'},
                    {id: '02-03-03', title: 'Отдел реконструкции запад', head: 'Карпелов Карпел Карпелович'},
                ],
            },
        ],
    },
    {
        id: '03',
        title: 'Департамент проектных работ',
        head: 'Терпелов Терпел Терпелович',
        children: [
            {
                id: '03-01',
                title: 'Управление проектирования',
                head: 'Пыхтелов Парад Самойлович',
                children: [
                    {id: '03-01-01', title: 'Отдел проектирования север', head: 'Березин Берез Березович'},
                    {id: '03-01-02', title: 'Отдел проектирования юг', head: 'Битов Бит Битович'},
                    {id: '03-01-03', title: 'Отдел проектирования запад', head: 'Литеров Литер Литерович'},
                ],
            },
            {
                id: '03-02',
                title: 'Управление согласования',
                head: 'Самвелов Самвел Самвелович',
                children: [
                    {id: '03-02-01', title: 'Отдел согласования север', head: 'Рамов Рама Рамович'},
                    {id: '03-02-02', title: 'Отдел согласования юг', head: 'Груздев Грузд Груздевич'},
                    {id: '03-02-03', title: 'Отдел согласования запад', head: 'Блинов Блин Блинович'},
                ],
            },
            {
                id: '03-03',
                title: 'Управление анализа проектов',
                head: 'Измаилов Измаил Измаилович',
                children: [
                    {id: '03-03-01', title: 'Отдел анализа север', head: 'Котов Кот Котович'},
                    {id: '03-03-02', title: 'Отдел анализа юг', head: 'Самолетов Самолет Самолетович'},
                    {id: '03-03-03', title: 'Отдел анализа запад', head: 'Кораллов Коралл Кораллович'},
                ],
            },
        ],
    },
];

const commonArgs: Story['args'] = {
    dataSet: dataSet,
    style: {width: 400},
    placeholder: 'Select value',
}
export const Default: Story = {
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
                    else resolve({data: dataSet});
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
                    const result = filterDataSet(dataSet, search);
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
                title: {component: InputComponent, label: 'Department'}
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
            callbacks: {
                onSubmit: (values: Record<string, unknown>) => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if (Math.random() < 0.3) reject({message: 'Ошибка сохранения', code: 400});
                            else resolve({data: values});
                        }, 3000);
                    });
                },
            },
            fieldsProps: {
                title: {component: InputComponent, label: 'Department'}
            }
        }
    },
}
