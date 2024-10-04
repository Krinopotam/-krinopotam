// noinspection DuplicatedCode

import React, {useState} from 'react';
import {IDFormModalProps} from '@src/dFormModal';
import {IInputFieldProps, InputField} from '@src/dForm/fields/input/inputField';
import {ITreeSelectFieldProps, TreeSelectField} from '@src/dForm/fields/treeSelect/treeSelectField';
import {ITreeSelectNode} from '@src/treeSelect';
import {IExtTreeApi, IExtTreeProps, Tree} from '@src/tree';
import {Space, Switch} from 'antd';
import {FolderOutlined} from '@ant-design/icons';
import {AnyType} from '@krinopotam/service-types';

export const Example = (): React.JSX.Element => {
    const treeProps = useTreeProps();
    const [readOnly, setReadOnly] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [multiple, setMultiple] = useState(false);
    return (
        <>
            {/*Description Start*/}
            <h1>Example of Extended Tree in group mode with edit form</h1>
            {/*Description End*/}

            <Space style={{paddingBottom: 10}}>
                <div>
                    Multi select <Switch onClick={e => setMultiple(e)} />
                </div>
                <div>
                    Read only <Switch onClick={e => setReadOnly(e)} />
                </div>
                <div>
                    Disabled <Switch onClick={e => setDisabled(e)} />
                </div>
            </Space>
            <div style={{maxWidth: 500, maxHeight: 500, height: '100%', overflow: 'auto'}}>
                <Tree {...treeProps} multiple={multiple} readOnly={readOnly} disabled={disabled} />
            </div>
        </>
    );
};

const departmentsApi = {} as IExtTreeApi;
const useTreeProps = () => {
    const editFormProps = useGetEditFormProps(false, departmentsApi);
    const editGroupFormProps = useGetEditFormProps(true, departmentsApi);
    return {
        apiRef: departmentsApi,
        dataSet: dataSet,
        defaultExpandAll: true,
        confirmDelete: true,
        confirmMove: true,
        selectNewNode: true,
        sortOnChange: true,
        buttonsIconsOnly: true,
        groupsMode: true,
        titleRender: groupNodeRender,
        editFormProps: editFormProps,
        editGroupFormProps: editGroupFormProps,
        onDelete: () => {},

    } satisfies IExtTreeProps;
};

export const groupNodeRender = (node: Record<string, AnyType>) => {
    if (node.isGroup)
        return (
            <>
                <FolderOutlined /> {node.title}
            </>
        );
    return node.title;
};

const useGetEditFormProps = (isGroup: boolean, treeApi: IExtTreeApi): IDFormModalProps => {
    const name = isGroup ? 'Group' : 'Department';
    return {
        confirmChanges: true,
        fieldsProps: {
            title: {
                component: InputField,
                label: name,
                rules: [{type: 'string', rule: 'not-empty', message: name + ' is required'}],
                autoFocus: true,
            } satisfies IInputFieldProps,
            parent: {
                component: TreeSelectField,
                label: 'Parent Group',
                placeholder: 'Choose parent group',
                groupsMode: true,
                titleRender: groupNodeRender,
                selectedRender: groupNodeRender,
            } as ITreeSelectFieldProps,
        },
        onFormInit: formApi => {
            const model = formApi.model;
            const field = model.getField('parent');
            const formMode = model.getFormMode();
            const id = model.getFormDataSet()['id'];
            /** modify dataset for update to avoid the possibility of a parent node choosing itself or its own child node */
            const dataSet = treeApi.getGroupsOnly(formMode !== 'update' ? undefined : id);
            field.updateProps({dataSet: dataSet});
        },
        onSubmit: values => {
            return {data: {...values, isGroup: isGroup}};
        },
    };
};

const dataSet: ITreeSelectNode[] = [
    {
        id: '01',
        title: 'Департамент аналитики данных',
        isGroup: true,
        children: [
            {
                id: '01-01',
                title: 'Управление аналитики продаж',
                isGroup: true,
                children: [
                    {id: '01-01-01', title: 'Отдел продаж север'},
                    {id: '01-01-02', title: 'Отдел продаж юг'},
                    {id: '01-01-03', title: 'Отдел продаж запад'},
                ],
            },
            {
                id: '01-02',
                title: 'Управление аналитики закупок',
                isGroup: true,
                children: [
                    {id: '01-02-01', title: 'Отдел закупок север'},
                    {id: '01-02-02', title: 'Отдел закупок юг'},
                    {id: '01-02-03', title: 'Отдел закупок запад'},
                ],
            },
            {
                id: '01-03',
                title: 'Управление аналитики производства',
                isGroup: true,
                children: [
                    {id: '01-03-01', title: 'Отдел производства север'},
                    {id: '01-03-02', title: 'Отдел производства юг'},
                    {id: '01-03-03', title: 'Отдел производства запад'},
                ],
            },
        ],
    },
    {
        id: '02',
        title: 'Департамент инженерных работ',
        isGroup: true,
        children: [
            {
                id: '02-01',
                title: 'Управление строительства',
                isGroup: true,
                children: [
                    {id: '02-01-01', title: 'Отдел строительства север'},
                    {id: '02-01-02', title: 'Отдел строительства юг'},
                    {id: '02-01-03', title: 'Отдел строительства запад'},
                ],
            },
            {
                id: '02-02',
                title: 'Управление демонтажа',
                isGroup: true,
                children: [
                    {id: '02-02-01', title: 'Отдел демонтажа север'},
                    {id: '02-02-02', title: 'Отдел демонтажа юг'},
                    {id: '02-02-03', title: 'Отдел демонтажа запад'},
                ],
            },
            {
                id: '02-03',
                title: 'Управление реконструкции',
                isGroup: true,
                children: [
                    {id: '02-03-01', title: 'Отдел реконструкции север'},
                    {id: '02-03-02', title: 'Отдел реконструкции юг'},
                    {id: '02-03-03', title: 'Отдел реконструкции запад'},
                ],
            },
        ],
    },
    {
        id: '03',
        title: 'Департамент проектных работ',
        isGroup: true,
        children: [
            {
                id: '03-01',
                title: 'Управление проектирования',
                isGroup: true,
                children: [
                    {id: '03-01-01', title: 'Отдел проектирования север'},
                    {id: '03-01-02', title: 'Отдел проектирования юг'},
                    {id: '03-01-03', title: 'Отдел проектирования запад'},
                ],
            },
            {
                id: '03-02',
                title: 'Управление согласования',
                isGroup: true,
                children: [
                    {id: '03-02-01', title: 'Отдел согласования север'},
                    {id: '03-02-02', title: 'Отдел согласования юг'},
                    {id: '03-02-03', title: 'Отдел согласования запад'},
                ],
            },
            {
                id: '03-03',
                title: 'Управление анализа проектов',
                isGroup: true,
                children: [
                    {id: '03-03-01', title: 'Отдел анализа север'},
                    {id: '03-03-02', title: 'Отдел анализа юг'},
                    {id: '03-03-03', title: 'Отдел анализа запад'},
                ],
            },
        ],
    },
];
