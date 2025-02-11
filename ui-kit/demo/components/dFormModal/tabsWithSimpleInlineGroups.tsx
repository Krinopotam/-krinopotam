// noinspection DuplicatedCode

import React, {useCallback} from 'react';
import {Button} from '@src/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from '@src/dFormModal';
import {TabsField} from '@src/dForm/fields/tabs/tabsField';
import {InputField} from '@src/dForm/fields/input/inputField';
import {DateTimeField} from '@src/dForm/fields/dateTime/dateTimeField';
import {FormLayoutSwitch} from '../../common/buttonsProps';
import {IInlineGroupFieldProps, InlineGroupField} from '@src/dForm/fields/inlineGroup';

const formApi = {} as IDFormModalApi;

const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        tabsPages: {
            component: TabsField,
            tabs: {
                ' Visitor ': {
                    object: {component: InputField, label: 'Object'},
                    row1: {
                        component: InlineGroupField,
                        fieldsProps: {
                            nameIn: {component: InputField, label: 'Inbound Name'},
                            dateIn: {component: DateTimeField, label: 'Inbound Date', width: 150},
                        },
                    } satisfies IInlineGroupFieldProps,
                    row2: {
                        component: InlineGroupField,
                        fieldsProps: {
                            nameOut: {component: InputField, label: 'Outbound Name'},
                            dateOut: {component: DateTimeField, label: 'Outbound Date', width: 150},
                        },
                    } satisfies IInlineGroupFieldProps,
                },
                ' Transport ': {
                    vehicle: {component: InputField, label: 'Vehicle model'},
                    number: {component: InputField, label: 'Registration number'},
                },
            },
        },
    },
    height: 330,
    buttons: FormLayoutSwitch(formApi),
};

export const TabsWithSimpleInlineGroups = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('create');
    }, []);

    return (
        <>
            {/*Description Start*/}
            <h1>An example of a form with tabs containing several fields on one line (InlineGroups)</h1>
            {/*Description End*/}

            <Button onClick={onClick}>Open form</Button>
            <DFormModal {...formProps} />
        </>
    );
};
