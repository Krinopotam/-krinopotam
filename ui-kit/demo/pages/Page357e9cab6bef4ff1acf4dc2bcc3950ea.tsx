
    import React from 'react';
    import {PlayGround} from '../components/playGround';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const Page357e9cab6bef4ff1acf4dc2bcc3950ea = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import 'dayjs/locale/ru';
import React, {useCallback} from 'react';
import dayjs from 'dayjs';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {DateTimeField} from @krinopotam/ui-kit/dForm/fields/dateTime/dateTimeField';
import {PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField';
import {TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField';
import {TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField';
import {SwitchField} from @krinopotam/ui-kit/dForm/fields/switch/switchField';
import {ITreeSelectNode} from @krinopotam/ui-kit/treeSelect';
import {IDFormValidationRules} from @krinopotam/ui-kit/dForm';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
dayjs.locale('ru');
const validationRules: IDFormValidationRules = {
    //password: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
    profess: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
    specialty: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
    login: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
    name: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
    //departments: [{type: 'object', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
    //permissions: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
};
const formData = {
    id: '1',
    profess: 'Программист',
    specialty: 'profess2',
    //departments: {value: '0-0-1', label: 'Начальные данные'},
    //departments: '0-0-1',
    //departments: '12345',
    departmentName: 'Департамент главных',
    neverField: 'neverData',
};
const treeDataSet: ITreeSelectNode[] = [
    {
        id: '0-0',
        title: 'Node1',
        label: 'Label из данных',
        children: [
            {id: '0-0-1', title: 'Child Node1', other: 'OK'},
            {id: '0-0-2', title: 'Child Node2', disabled: true},
            {id: '0-0-3', title: 'Child Node3'},
        ],
    },
    {title: 'Node2', id: '0-1'},
];
const formModalApi: IDFormModalApi = {} as IDFormModalApi;
const formProps: IDFormModalProps = {
    formId: 'TestFormModalConfig',
    apiRef: formModalApi,
    colorType: 'info',
    title: 'Форма редактирования',
    formMode: 'update',
    validationRules: validationRules,
    layout: 'vertical',
    contentIndent: 12,
    confirmChanges: true,
    bodyHeight: 600,
    bodyMaxHeight: 500,
    bodyMinHeight: 200,
    width: 500,
    minWidth: 200,
    maxWidth: 1000,
    /*onDataFetch: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.5) reject({message: 'Ошибка загрузки данных', code: 400});
                else resolve({data: {profess: 'Загружено Профессия', specialty: 'Загружено специализация'}});
            }, 3000);
        });
    },*/
    onSubmit: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.5) reject({message: 'Ошибка сохранения', code: 400});
                else resolve({data: {result: 'OK'}});
            }, 3000);
        });
    },
    fieldsProps: {
        tabs: {
            component: TabsField,
            tabs: {
                Tab1: {
                    profess: {component: InputField, label: 'Профессия', showCount: true, maxLength: 50, inlineGroup: 'row1'},
                    specialty: {component: InputField, label: 'Специализация', value: 'дефолтная специализация', dependsOn: ['profess'], inlineGroup: 'row1'},
                    assignDate: {component: DateTimeField, label: 'Дата назначения'},
                    name: {component: InputField, label: 'Имя пользователя', value: 'дефолтное имя пользователя', dependsOn: ['profess'], inlineGroup: 'row2'},
                    login: {component: InputField, label: 'Логин', value: 'дефолтный логин', dependsOn: ['name', 'specialty'], inlineGroup: 'row2'},
                    departments: {
                        component: TreeSelectField,
                        label: 'Подразделение',
                        fetchMode: 'onUse',
                        noCacheFetchedData: false,
                        debounce: 300,
                        // minSearchLength: 1,
                        // value: {label: 'default value', id: 'id-01'},
                        // multiple: true,
                        // treeCheckable: true,
                        // dataSource: GetApiAppUsersSelect('', {search: '', limit: 0}),
                        // dataSource: {
                        //     url: 'http://127.0.0.1:8081/api/do',
                        //     parameters: {action: 'app/users', method: 'List', data: {limit: 100}},
                        // },
                        dataSet: treeDataSet,
                        editFormProps: {formId: 'treeViewEditForm', fieldsProps: {title: {component: InputField, label: 'title'}}},
                        // titleRender: (treeNode: IApiJUser) => {
                        //     return (
                        //         <>
                        //             {treeNode.fio}
                        //             <br /> {treeNode.email}
                        //         </>
                        //     );
                        // },
                        // labelRender: (treeNode: IApiJUser) => {
                        //     return (
                        //         <>
                        //             {treeNode.fio}
                        //             <br /> {treeNode.email}
                        //         </>
                        //     );
                        // },
                        // filterTreeNode: (inputValue, treeNode: IApiJUser) => {
                        //     return (treeNode.fio + ' ' + treeNode.email).toLowerCase().indexOf(inputValue.toLowerCase()) >= 0;
                        // }
                    },
                },
                Tab2: {
                    password: {component: PasswordField, label: 'Пароль'},
                    isLocked: {component: SwitchField, label: 'Заблокировано', checkedChildren: 'Вкл', unCheckedChildren: 'Выкл'},
                },
                Tab3: {
                    permissions: {
                        component: TabulatorGridField,
                        label: 'Полномочия',
                        confirmDelete: true,
                        height: 300,
                        editFormProps: {
                            formId: 'grid_edit_form',
                            fieldsProps: {
                                name: {component: InputField, label: 'Имя'},
                                role: {component: InputField, label: 'Роль'},
                            },
                        },
                        columns: [
                            {
                                title: 'Name',
                                field: 'name',
                            },
                            {
                                title: 'Age',
                                field: 'age',
                            },
                            {
                                title: 'Address',
                                field: 'address',
                            },
                        ],
                    },
                },
            },
        },
    },
};
export const PlayGround = (): React.JSX.Element => {
    const showModal = useCallback(() => {
        formModalApi.open('update', formData);
    }, []);
    return (
        <>
            <DFormModal {...formProps} />
            <Button type="primary" onClick={showModal}>
                Open form
            </Button>
        </>
    );
};
`
    return (
        <>
            <div>
                <PlayGround />
            </div>
            <Divider />
            <div>
                <Collapse 
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco} showLineNumbers={true}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </>
    );
};

export default Page357e9cab6bef4ff1acf4dc2bcc3950ea;
