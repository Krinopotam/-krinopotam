// noinspection DuplicatedCode

import React from 'react';
import {TabulatorGrid} from '@src/tabulatorGrid';
import {IDFormModalProps} from '@src/dFormModal';
import {TreeSelectField} from '@src/dForm/fields/treeSelect/treeSelectField';
import {InputField} from '@src/dForm/fields/input/inputField';
import {NumberField} from '@src/dForm/fields/number/numberField';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorTreeData} from "../../data/tabulatorData";


const treeSelectDataSet = [...TabulatorTreeData];

const editFormConfig: IDFormModalProps = {
    formId: 'gridEditForm',
    fieldsProps: {
        parent: {component: TreeSelectField, label: 'Родитель', dataSet: treeSelectDataSet, fieldNames: {title: 'name'}},
        name: {component: InputField, label: 'Name'},
        age: {component: NumberField, label: 'Age'},
        col: {component: InputField, label: 'Favourite Color'},
        dob: {component: InputField, label: 'Day of Birth'},
    },
    confirmChanges: true,
};

export const TabulatorGridTreeWithForm = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Пример иерархического грида Tabulator с формой</h1>
            {/*Description End*/}
            <TabulatorGrid
                id={'TabulatorGridTreeWithForm'}
                columnDefaults={TabulatorBaseColumnsDef}
                columns={TabulatorBaseColumns}
                dataSet={TabulatorTreeData}
                dataTree={true}
                height={500}
                layout={'fitColumns'}
                editFormProps={editFormConfig}
                confirmDelete
                multiSelect
            />
        </>
    );
};
