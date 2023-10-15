// noinspection DuplicatedCode

import 'dayjs/locale/ru';

import React, {useCallback} from 'react';

import dayjs from 'dayjs';
import {Button} from '@src/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from '@src/dFormModal';
import {IRuleType} from '@src/dynamicForm/validators/baseValidator';
import {IDFormFieldInputProps, InputComponent} from '@src/dynamicForm/components/inputComponent';
import {IDFormFieldTreeSelectProps, ITreeSelectNode, TreeSelectComponent} from '@src/dynamicForm/components/treeSelectComponent';
import {IDFormFieldSwitchProps, SwitchComponent} from '@src/dynamicForm/components/switchComponent';
import {InputField} from "@src/dForm/fields/input/inputField";
import {DateTimeField} from "@src/dForm/fields/dateTime/dateTimeField";
import {PasswordField} from "@src/dForm/fields/password/passwordField";
import {TabulatorGridField} from "@src/dForm/fields/tabulatorGrid/tabulatorGridField";

dayjs.locale('ru');

const validationRules: Record<string, [IRuleType]> = {
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

const treeDataSet:ITreeSelectNode[] =  [
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
]

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
        /** Tab1 */
        profess: {component: InputField, tab: 'Tab1', label: 'Профессия', showCount: true, maxLength: 50, inlineGroup: 'row1'},
        specialty: {component: InputField, tab: 'Tab1', label: 'Специализация', value: 'дефолтная специализация', dependsOn: ['profess'], inlineGroup: 'row1'},
        assignDate: {component: DateTimeField, tab: 'Tab1', label: 'Дата назначения'},
        name: {component: InputField, tab: 'Tab1', label: 'Имя пользователя', value: 'дефолтное имя пользователя', dependsOn: ['profess'], inlineGroup: 'row2'},
        login: {component: InputField, tab: 'Tab1', label: 'Логин', value: 'дефолтный логин', dependsOn: ['name', 'specialty'], inlineGroup: 'row2'},
        departments: {
            component: TreeSelectComponent,
            tab: 'Tab1',
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
            editFormProps: {formId: 'treeViewEditForm', fieldsProps: {title: {component: InputComponent, label: 'title'} as IDFormFieldInputProps}},

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
        } as unknown as IDFormFieldTreeSelectProps,
        /** Tab2 */
        password: {component: PasswordField, tab: 'Таб 2', label: 'Пароль'} ,
        isLocked: {component: SwitchComponent, tab: 'Tab 2', label: 'Заблокировано', checkedChildren: 'Вкл', unCheckedChildren: 'Выкл'} as IDFormFieldSwitchProps,
        /** Tab3 */
        permissions: {
            component: TabulatorGridField,
            tab: 'Таб 3',
            label: 'Полномочия',
            confirmDelete: true,
            height: 300,
            editFormProps: {
                formId: 'grid_edit_form',
                fieldsProps: {
                    name: {component: InputComponent, label: 'Имя'} as IDFormFieldInputProps,
                    role: {component: InputComponent, label: 'Роль'} as IDFormFieldInputProps,
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
        } ,
    },
};

export const PlayGround = (): React.JSX.Element => {
    const showModal = useCallback(() => {
        formModalApi.open('update', formData);
    }, []);

    return (
        <>
            {/*Description Start*/}
            <h1>Песочница</h1>
            {/*Description End*/}
            <DFormModal {...formProps} />
            <Button type="primary" onClick={showModal}>
                Open form
            </Button>
        </>
    );
};
