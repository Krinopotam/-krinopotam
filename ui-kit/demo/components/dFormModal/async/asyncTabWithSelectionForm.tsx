// noinspection DuplicatedCode

import {ITextAreaFieldProps, TextAreaField} from "@src/dForm/fields/textArea";
import React, {useCallback} from 'react';
import {Button} from '@src/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {ITabulatorGridFieldProps, TabulatorGridField} from '@src/dForm/fields/tabulatorGrid/tabulatorGridField';
import {IInputFieldProps, InputField} from '@src/dForm/fields/input/inputField';
import {FormLayoutSwitch} from '../../../common/buttonsProps';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../../data/tabulatorData';
import {ITabsFieldProps, TabsField} from '@src/dForm/fields/tabs';
import {CloneObject} from '@krinopotam/js-helpers/helpersObjects/cloneObject';

const formApi = {} as IDFormModalApi;

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
            onTabDataFetch: (tabName, field) => {
                if (tabName !== 'tab2') return;
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (Math.random() < 0.3) {
                            reject({message: 'Random loading data error', code: 400});
                            return
                        }

                        const usersField = field.getModel().getField('users');
                        const dataSet = CloneObject(TabulatorPlainData);
                        usersField.updateProps({dataSet: dataSet});
                        resolve({data: {users: [{id: '1'}], name:'newName'}});
                    }, 2000);
                });
            },
            tabs: {
                tab1: {
                    name: {component: InputField, label: 'Name'} as IInputFieldProps,
                    desc: {component: TextAreaField, label: 'Description'} as ITextAreaFieldProps,
                },
                tab2: {
                    users: {
                        id: 'users',
                        component: TabulatorGridField,
                        headerLabel: 'Users',
                        columnDefaults: CloneObject(TabulatorBaseColumnsDef),
                        columns: CloneObject(TabulatorBaseColumns),
                        layout: 'fitColumns',
                        selectionMode: true,
                        autoHeightResize: true,
                    } as ITabulatorGridFieldProps,
                },
            },
        } as ITabsFieldProps,
    },
    width: 900,
    buttons: FormLayoutSwitch(formApi),

    onSubmitSuccess: values => {
        console.log(values);
    },
};

export const Example = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        //formApi.open('update', {dataSet: {users1: CloneObject(TabulatorPlainData)}});
        formApi.open('update');
    }, []);

    return (
        <>
            {/*Description Start*/}
            <h1>Example of a modal form with tabulator in selection mode with async loading tab</h1>
            {/*Description End*/}

            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Open form</Button>
                <DFormModal {...formProps} />
            </div>
        </>
    );
};
