import {IInlineGroupFieldProps, InlineGroupField} from '@src/dForm/fields/inlineGroup';
import {IPasswordFieldProps, PasswordField} from '@src/dForm/fields/password';
import {ITreeSelectFieldProps, TreeSelectField} from '@src/dForm/fields/treeSelect';
import React from 'react';
import {TabulatorGrid} from '@src/tabulatorGrid';
import {ITabulatorColumn} from '@src/tabulatorBase';
import {IDFormModalProps} from '@src/dFormModal';
import {TabsField} from '@src/dForm/fields/tabs/tabsField';
import {IInputFieldProps, InputField} from '@src/dForm/fields/input/inputField';
import {ITextAreaFieldProps, TextAreaField} from '@src/dForm/fields/textArea/textAreaField';
import {ITabulatorGridFieldProps, TabulatorGridField} from '@src/dForm/fields/tabulatorGrid/tabulatorGridField';
import {ISelectFieldProps, SelectField} from '@src/dForm/fields/select';

export const TagsColumns: ITabulatorColumn[] = [
    {field: 'num', title: '№', formatter: 'rownum', accessor: 'rownum', width: 50},
    {field: 'name', title: 'Наименование', headerFilter: true, headerFilterFunc: 'like'},
    {field: 'format.label', title: 'Формат', headerFilter: true, headerFilterFunc: 'like'},
];

const columns: ITabulatorColumn[] = [
    {field: 'num', title: '№', formatter: 'rownum', accessor: 'rownum', width: 50, vertAlign: 'middle'},
    {field: 'name', title: 'Наименование', headerFilter: true, headerFilterFunc: 'like', vertAlign: 'middle'},
    {field: 'shortName', title: 'Краткое наименование', headerFilter: true, headerFilterFunc: 'like', vertAlign: 'middle'},
    {field: 'code', title: 'Код', headerFilter: true, headerFilterFunc: 'like', vertAlign: 'middle'},
];

const dataSet = [
    {
        id: '01',
        name: '1С Зарплата и управление персоналом',
        shortName: '1С ЗиУП',
        code: '1C_ZIUP',
        inputs: [
            {id: '01', name: 'Штатная расстановка', format: {id: '01', label: 'JSON'}},
            {id: '02', name: 'Адресная книга', format: {id: '03', label: 'XML'}},

            {id: '021', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '022', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '023', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '024', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '025', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '026', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '027', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '028', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '029', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '0210', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '0211', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '0212', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
        ],
        outputs: [{id: '04', name: 'Товарная накладная', format: {id: '02', label: 'PDF'}}],
    },
    {id: '02', name: '1С Бухгалтерия', shortName: '1С BuNU', code: '1C_BUNU'},
    {id: '03', name: 'SAP Кадровый модуль', shortName: 'SAP HT', code: 'SAP_HR'},
    {id: '04', name: 'Галактика', shortName: 'Galaxy', code: 'GAL'},
    {id: '05', name: 'Босс кадровик', shortName: 'BOSS', code: 'BOSS'},
];

const FormatsList = [
    {id: '01', label: 'JSON', description: 'Файлы в формате JSON'},
    {id: '02', label: 'PDF', description: 'Файлы в формате PDF'},
    {id: '03', label: 'XML', description: 'Файлы в формате PDF'},
    {id: '04', label: 'PNG', description: 'Файлы в формате PNG'},
    {id: '05', label: 'JPEG', description: 'Файлы в формате JPEG'},
];

const tagsList = [
    {id: '01', title: 'Тег 1'},
    {id: '02', title: 'Тег 2'},
    {id: '03', title: 'Тег 3'},
    {id: '04', title: 'Тег 4'},
    {id: '05', title: 'Тег 5'},
    {id: '06', title: 'Тег 6'},
    {id: '07', title: 'Тег 7'},
    {id: '08', title: 'Тег 8'},
    {id: '09', title: 'Тег 9'},
    {id: '10', title: 'Тег 10'},
    {id: '11', title: 'Тег 11'},
    {id: '12', title: 'Тег 12'},
    {id: '13', title: 'Тег 13'},
    {id: '14', title: 'Тег 14'},
    {id: '15', title: 'Тег 15'},
    {id: '16', title: 'Тег 16'},
];

const inputsFormProps: IDFormModalProps = {
    confirmChanges: false,
    height: 400,
    fieldsProps: {
        inline1: {
            component: InlineGroupField,
            fieldsProps: {
                name: {component: InputField, label: 'Наименование'},
                format: {component: SelectField, label: 'Формат', dataSet: FormatsList, fullItemValue: true} satisfies ISelectFieldProps,
            },
        } satisfies IInlineGroupFieldProps,
        description: {component: TextAreaField, label: 'Описание', autoSize: true},
    },
};

const useEditFormProps = () => {
    return {
        confirmChanges: true,
        height: 500,
        width: 600,
        fieldsProps: {
            tabs1: {
                component: TabsField,
                autoHeightResize: true,
                tabs: {
                    ['Основные']: {
                        inline1: {
                            component: InlineGroupField,
                            fieldsProps: {
                                code: {component: InputField, label: 'Код', width: 100} satisfies IInputFieldProps,
                                shortName: {component: InputField, label: 'Наименование'} satisfies IInputFieldProps,
                            },
                        } satisfies IInlineGroupFieldProps,
                        name: {component: InputField, label: 'Полное наименование'} satisfies IInputFieldProps,
                        tags: {
                            component: TreeSelectField,
                            label: 'Теги',
                            multiple: true,
                            dataSet: tagsList,
                        } satisfies ITreeSelectFieldProps,
                        description: {
                            component: TextAreaField,
                            label: 'Описание',
                            autoSize: true,
                        } satisfies ITextAreaFieldProps,
                    },

                    ['Доступ']: {
                        address: {component: InputField, label: 'Адрес', dependsOn:['name']} satisfies IInputFieldProps,
                        login: {component: InputField, label: 'Логин', dependsOn:['name']} satisfies IInputFieldProps,
                        password: {component: PasswordField, label: 'Пароль', dependsOn:['name']} satisfies IPasswordFieldProps,
                    },
                    ['Входы']: {
                        inputs: {
                            component: TabulatorGridField,
                            columns: TagsColumns,
                            headerFilterHidden: true,
                            height: '300px',
                            autoHeightResize: true,
                            layout: 'fitColumns',
                            editFormProps: inputsFormProps,
                            onDelete: () => {},
                            //value: [{id: '111', name: '3232', format: {id: 1, label: '111'}}],
                        } satisfies ITabulatorGridFieldProps,
                    },
                    ['Выходы']: {
                        outputs: {
                            component: TabulatorGridField,
                            columns: TagsColumns,
                            headerFilterHidden: true,
                            height: '300px',
                            autoHeightResize: true,
                            layout: 'fitColumns',
                            editFormProps: inputsFormProps,
                            onDelete: () => {},
                        } as ITabulatorGridFieldProps,
                    },
                },
            },
        },
    } satisfies IDFormModalProps;
};

export const WithComplexForm = (): React.JSX.Element => {
    const editFormProps = useEditFormProps();
    return (
        <TabulatorGrid
            columns={columns}
            dataSet={dataSet}
            layout={'fitColumns'}
            movableColumns
            buttonsSize={'middle'}
            editFormProps={editFormProps}
            onDelete={ () => {}}
            height={'100%'}
            rowHeight={50}
            confirmDelete={true}
            buttons={{title: {type: 'element', title: <b style={{fontSize: 18}}>Системы</b>, position: 'left'}}}
        />
    );
};
