// noinspection DuplicatedCode

import React, {useCallback} from 'react';
import {Button} from '@src/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {ITabulatorGridFieldProps, TabulatorGridField} from '@src/dForm/fields/tabulatorGrid/tabulatorGridField';
import {InputField} from '@src/dForm/fields/input/inputField';
import {FormLayoutSwitch} from '../../common/buttonsProps';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
import {ITabsFieldProps, TabsField} from '@src/dForm/fields/tabs';
import {CloneObject} from '@krinopotam/js-helpers/helpersObjects/cloneObject';

const formApi = {} as IDFormModalApi;
const editFormApi = {} as IDFormModalApi;
const editFormApi2 = {} as IDFormModalApi;

/** Tabulator edit form props */
const editFormProps: IDFormModalProps = {
    apiRef: editFormApi,
    formId: 'formWithGrid',
    fieldsProps: {
        name: {component: InputField, label: 'Name'},
        age: {component: InputField, label: 'Age'},
        col: {component: InputField, label: 'Favourite Color'},
        dob: {component: InputField, label: 'Day of Birth'},
    },
    confirmChanges: true,
    buttons: FormLayoutSwitch(editFormApi),
};

const editFormProps2: IDFormModalProps = {
    apiRef: editFormApi2,
    formId: 'formWithGrid',
    fieldsProps: {
        name: {component: InputField, label: 'Name'},
        age: {component: InputField, label: 'Age'},
        col: {component: InputField, label: 'Favourite Color'},
        dob: {component: InputField, label: 'Day of Birth'},
    },
    confirmChanges: true,
    buttons: FormLayoutSwitch(editFormApi2),
};

/** main modal form props */
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    height: 500,
    fieldsProps: {
        tabs: {
            component: TabsField,
            autoHeightResize: true,

            tabs: {
                tab1: {
                    users1: {
                        id: 'users1',
                        component: TabulatorGridField,
                        headerLabel: 'Пользователи 1',
                        columnDefaults: CloneObject(TabulatorBaseColumnsDef),
                        columns: CloneObject(TabulatorBaseColumns),
                        layout: 'fitColumns',
                        editFormProps: editFormProps,
                        confirmDelete: true,
                        selectionMode: true,
                        onDelete: () => {},
                        autoHeightResize: true,
                    } as ITabulatorGridFieldProps,
                },
                /*                tab2: {
                                    users2: {
                                        id:'users2',
                                        component: TabulatorGridField,
                                        headerLabel: 'Пользователи 2',
                                        columnDefaults:CloneObject(TabulatorBaseColumnsDef),
                                        columns: CloneObject(TabulatorBaseColumns),
                                        layout: 'fitColumns',
                                        editFormProps: editFormProps2,
                                        confirmDelete: true,
                                        selectionMode: true,
                                        onDelete: () => {},
                                        autoHeightResize:true,
                                    } as ITabulatorGridFieldProps,
                                },*/
            },
        } as ITabsFieldProps,
    },
    width: 900,
    buttons: FormLayoutSwitch(formApi),
    onDataFetch: api => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const users1Field = api.model.getField('users1');
                const dataSet = CloneObject(TabulatorPlainData);
                users1Field.updateProps({dataSet: dataSet});
                resolve({data: {users1: [{id: '1'}]}});
                //return {data: {permissions: [{id: 'bookCreate'}]}};
            }, 5000);
        });
    },
    onSubmitSuccess: (values) => {
        console.log(values)
    },
};

export const FormWithGridInTabs = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        //formApi.open('update', {dataSet: {users1: CloneObject(TabulatorPlainData)}});
        formApi.open('update');
    }, []);

    return (
        <>
            {/*Description Start*/}
            <h1>Example of a modal form with a several TabulatorGrid fields in tabs</h1>
            {/*Description End*/}

            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Open form</Button>
                <DFormModal {...formProps} />
            </div>
        </>
    );
};
