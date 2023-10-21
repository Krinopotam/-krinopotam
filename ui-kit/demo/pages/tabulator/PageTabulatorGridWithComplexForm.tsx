
    import React from 'react';
    import {TabulatorGridWithComplexForm} from '../../components/tabulator/tabulatorGridWithComplexForm';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const PageTabulatorGridWithComplexForm = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import {TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {ITabulatorColumn} from @krinopotam/ui-kit/tabulatorBase';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField';
import {ITextAreaFieldProps, TextAreaField} from @krinopotam/ui-kit/dForm/fields/textArea/textAreaField';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField';
import {ISelectNode} from @krinopotam/ui-kit/select';
export const TagsColumns: ITabulatorColumn[] = [
    {field: 'num', title: '№', formatter: 'rownum', width: 50},
    {field: 'name', title: 'Наименование', headerFilter: true, headerFilterFunc: 'like'},
    {
        field: 'format',
        title: 'Формат',
        headerFilter: true,
        headerFilterFunc: 'like',
        formatter: cell => {
            const val = cell.getValue() as ISelectNode;
            return val.label as string;
        },
    },
];
const columns: ITabulatorColumn[] = [
    {field: 'num', title: '№', formatter: 'rownum', width: 50},
    {field: 'name', title: 'Наименование', headerFilter: true, headerFilterFunc: 'like'},
    {field: 'shortName', title: 'Краткое наименование', headerFilter: true, headerFilterFunc: 'like'},
    {field: 'code', title: 'Код', headerFilter: true, headerFilterFunc: 'like'},
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
];
const editFormProps: IDFormModalProps = {
    confirmChanges: true,
    bodyHeight: 400,
    fieldsProps: {
        tabs1: {
            component: TabsField,
            tabs: {
                ' Основные ': {
                    name: {component: InputField, label: 'Наименование'},
                    shortName: {component: InputField, label: 'Краткое наименование'},
                    code: {component: InputField, label: 'Код'},
                    description: {component: TextAreaField, label: 'Описание', autoSize: true} as ITextAreaFieldProps,
                },
                ' Доступ ': {
                    address: {component: InputField, label: 'Адрес'},
                    login: {component: InputField, label: 'Логин'},
                    password: {component: PasswordField, label: 'Пароль'},
                },
                ' Входы ': {
                    inputs: {
                        component: TabulatorGridField,
                        columns: TagsColumns,
                        height: '320px',
                        layout: 'fitColumns',
                        resizeHeightWithForm: true,
                        buttons: {select: {title: 'Выбрать1', size: 'small'}},
                    } as ITabulatorGridFieldProps,
                },
                ' Выходы ': {
                    outputs: {
                        component: TabulatorGridField,
                        columns: TagsColumns,
                        height: '320px',
                        layout: 'fitColumns',
                        resizeHeightWithForm: true,
                    },
                },
            },
        },
    },
};
export const TabulatorGridWithComplexForm = (): React.JSX.Element => {
    return <TabulatorGrid columns={columns} dataSet={dataSet} layout={'fitColumns'} movableColumns editFormProps={editFormProps} height={'100%'} />;
};
`
    return (
        <>
            <div>
                <TabulatorGridWithComplexForm />
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

export default PageTabulatorGridWithComplexForm;
