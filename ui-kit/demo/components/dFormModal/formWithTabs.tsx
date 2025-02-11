// noinspection DuplicatedCode

import React, {useCallback} from 'react';
import {Button} from '@src/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from '@src/dFormModal';
import {InputField} from '@src/dForm/fields/input/inputField';
import {DateTimeField} from '@src/dForm/fields/dateTime/dateTimeField';
import {TabsField} from '@src/dForm/fields/tabs/tabsField';
import {FormLayoutSwitch} from '../../common/buttonsProps';
import {IInlineGroupFieldProps, InlineGroupField} from '@src/dForm/fields/inlineGroup';

const formApi = {} as IDFormModalApi;

const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        tabs: {
            component: TabsField,
            tabs: {
                ' Inbound ': {
                    row1: {
                        component: InlineGroupField,
                        fieldsProps: {
                            nameIn: {component: InputField, label: 'Inbound Name'},
                            dateIn: {component: DateTimeField, label: 'Inbound Date', width: 150},
                        },
                    } satisfies IInlineGroupFieldProps,
                },
                ' Outbound ': {
                    row2: {
                        component: InlineGroupField,
                        fieldsProps: {
                            nameOut: {component: InputField, label: 'Outbound Name'},
                            dateOut: {component: DateTimeField, label: 'Outbound Date', width: 150},
                        },
                    } satisfies IInlineGroupFieldProps,
                },
            },
        },
    },
    height: 250,
    buttons: FormLayoutSwitch(formApi),
};

export const FormWithTabs = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('create');
    }, []);

    return (
        <div style={{maxWidth: 500}}>
            <Button onClick={onClick}>Open form</Button>
            <DFormModal {...formProps} />
        </div>
    );
};
