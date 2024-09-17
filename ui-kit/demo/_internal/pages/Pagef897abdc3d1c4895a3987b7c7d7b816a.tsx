
    import React from 'react';
    import {PageLayout} from '../layouts/pageLayout';
    import {TreeSelectWithForm} from '../../components/treeSelect/withForm';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const Pagef897abdc3d1c4895a3987b7c7d7b816a = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React, {useMemo} from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField';
import {ITreeSelectApi, ITreeSelectNode} from @krinopotam/ui-kit/treeSelect';
import {removeFromTree} from @krinopotam/ui-kit/_shared/hooks/treeComponentApiMethods/serviceMethods/removeFromTree';
import {CloneObject} from '@krinopotam/js-helpers';
export const TreeSelectWithForm = (): React.JSX.Element => {
    const formProps = useFormProps();
    return (
        <>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
const departmentsApi = {} as ITreeSelectApi;
const useFormProps = () => {
    const editFormProps = useTreeEditFormProps();
    return useMemo(
        (): IDFormProps => ({
            formId: 'Test form',
            confirmChanges: true,
            fieldsProps: {
                departments: {
                    component: TreeSelectField,
                    apiRef: departmentsApi,
                    label: 'Подразделения',
                    editFormProps: editFormProps,
                    confirmDelete: true,
                    dataSet: dataSet,
                } satisfies ITreeSelectFieldProps,
            },
            buttons: null,
        }),
        [editFormProps]
    );
};
const useTreeEditFormProps = () => {
    return useMemo(
        (): IDFormModalProps => ({
            onFormInit: formApi => {
                const model = formApi.model;
                const field = model.getField('parent');
                const data = departmentsApi.getDataSet();
                const formMode = model.getFormMode();
                if (formMode !== 'update') {
                    field.updateProps({dataSet: data});
                    return;
                }
                /** modify dataset for update to avoid the possibility of a parent node choosing itself or its own child node */
                const id = model.getFormDataSet()['id'];
                const clonedData = CloneObject(data);
                removeFromTree(id, clonedData, {key: 'id', children: 'children'});
                field.updateProps({dataSet: clonedData});
            },
            formId: 'EditForm',
            confirmChanges: true,
            fieldsProps: {
                title: {component: InputField, label: 'Подразделение'} satisfies IInputFieldProps,
                parent: {
                    component: TreeSelectField,
                    label: 'Родитель',
                } satisfies ITreeSelectFieldProps,
            },
        }),
        []
    );
};
const dataSet: ITreeSelectNode[] = [
    {
        id: '01',
        title: 'Департамент аналитики данных',
        children: [
            {
                id: '01-01',
                title: 'Управление аналитики продаж',
                children: [
                    {id: '01-01-01', title: 'Отдел продаж север'},
                    {id: '01-01-02', title: 'Отдел продаж юг'},
                    {id: '01-01-03', title: 'Отдел продаж запад'},
                ],
            },
            {
                id: '01-02',
                title: 'Управление аналитики закупок',
                children: [
                    {id: '01-02-01', title: 'Отдел закупок север'},
                    {id: '01-02-02', title: 'Отдел закупок юг'},
                    {id: '01-02-03', title: 'Отдел закупок запад'},
                ],
            },
            {
                id: '01-03',
                title: 'Управление аналитики производства',
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
        children: [
            {
                id: '02-01',
                title: 'Управление строительства',
                children: [
                    {id: '02-01-01', title: 'Отдел строительства север'},
                    {id: '02-01-02', title: 'Отдел строительства юг'},
                    {id: '02-01-03', title: 'Отдел строительства запад'},
                ],
            },
            {
                id: '02-02',
                title: 'Управление демонтажа',
                children: [
                    {id: '02-02-01', title: 'Отдел демонтажа север'},
                    {id: '02-02-02', title: 'Отдел демонтажа юг'},
                    {id: '02-02-03', title: 'Отдел демонтажа запад'},
                ],
            },
            {
                id: '02-03',
                title: 'Управление реконструкции',
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
        children: [
            {
                id: '03-01',
                title: 'Управление проектирования',
                children: [
                    {id: '03-01-01', title: 'Отдел проектирования север'},
                    {id: '03-01-02', title: 'Отдел проектирования юг'},
                    {id: '03-01-03', title: 'Отдел проектирования запад'},
                ],
            },
            {
                id: '03-02',
                title: 'Управление согласования',
                children: [
                    {id: '03-02-01', title: 'Отдел согласования север'},
                    {id: '03-02-02', title: 'Отдел согласования юг'},
                    {id: '03-02-03', title: 'Отдел согласования запад'},
                ],
            },
            {
                id: '03-03',
                title: 'Управление анализа проектов',
                children: [
                    {id: '03-03-01', title: 'Отдел анализа север'},
                    {id: '03-03-02', title: 'Отдел анализа юг'},
                    {id: '03-03-03', title: 'Отдел анализа запад'},
                ],
            },
        ],
    },
];
`
    return (
        <PageLayout>
            <div>
                <TreeSelectWithForm />
            </div>
            <Divider />
            <div>
                <Collapse 
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco} showLineNumbers={true}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </PageLayout>
    );
};

export default Pagef897abdc3d1c4895a3987b7c7d7b816a;
