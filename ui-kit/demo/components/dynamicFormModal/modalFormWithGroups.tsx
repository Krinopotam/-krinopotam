// noinspection DuplicatedCode

import React, {useCallback} from 'react';
import {Button} from '@src/button';
import {IDFormModalApi, DFormModal} from '@src/dynamicFormModal';
import {DFormModalConfig, DateTimeComponentConfig, InputComponentConfig} from '@src/dynamicFormModal/configBuilder';


interface IFields {
    nameIn: string;
    dateIn: string;
    nameOut: string;
    dateOut: string;
}

const formApi = {} as IDFormModalApi;

const formProps = new DFormModalConfig<IFields>('Test form')
    .apiRef(formApi)
    .confirmChanges(true)
    .addFields(
        new InputComponentConfig<IFields>('nameIn').label('Имя входящего').inlineGroup('row1'),
        new DateTimeComponentConfig<IFields>('dateIn').label('Дата входа').width(150).inlineGroup('row1'),
        new InputComponentConfig<IFields>('nameOut').label('Имя выходящего').inlineGroup('row2'),
        new DateTimeComponentConfig<IFields>('dateOut').label('Дата выхода').width(150).inlineGroup('row2')
    )

    .getConfig();

export const ModalFormWithGroups = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('create');
    }, []);

    return (
        <div style={{maxWidth: 500}}>
            <Button onClick={onClick}>Открыть форму</Button>
            <DFormModal {...formProps} />
        </div>
    );
};