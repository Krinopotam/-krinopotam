// noinspection DuplicatedCode

import React from 'react';
import {IGridProps, TabulatorGrid} from '@src/tabulatorGrid';
import {IDFormModalProps} from '@src/dFormModal';
import {InputField} from '@src/dForm/fields/input/inputField';
import {NumberField} from '@src/dForm/fields/number/numberField';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';

const editFormConfig: IDFormModalProps = {
    formId: 'gridEditForm',
    layout: 'horizontal',
    fieldsProps: {
        name: {component: InputField, label: 'Name'},
        age: {component: NumberField, label: 'Age'},
        col: {component: InputField, label: 'Favourite Color'},
        dob: {component: InputField, label: 'Day of Birth'},
    },
    confirmChanges: true,
};

const props: IGridProps = {
    id: 'TabulatorGridWithForm',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    dataSet: TabulatorPlainData,
    multiSelect: true,
    editFormProps: editFormConfig,
    confirmDelete: true,
    onDelete: () => {},
    height: '100%',
    layout: 'fitColumns',
    language: 'en_US',
};
export const WithForm = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>An example of a simple grid Tabulator with a form editing</h1>
            {/*Description End*/}
            <div style={{padding: 5, height: 300}}>
                <TabulatorGrid {...props} />
            </div>
        </>
    );
};
