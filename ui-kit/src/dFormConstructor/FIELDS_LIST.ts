import {InputInfo} from '@src/dFormConstructor/fields/inputInfo';
import {NumberInfo} from '@src/dFormConstructor/fields/numberInfo';

export const FIELDS_LIST = [
    {id: 'input', label: 'Текстовое поле', fieldClass: InputInfo},
    {id: 'number', label: 'Числовое поле', fieldClass: NumberInfo},
    {id: 'dateTime', label: 'Дата/время', fieldClass: NumberInfo},
] ;

export const findFieldByType = (fieldType: (typeof FIELDS_LIST)[number]['id']) => {
    for (const field of FIELDS_LIST) {
        if (field.id === fieldType) return field;
    }
};


