import {FIELDS_INFO_MAP} from '@src/dFormConstructor/renders/fieldsTree/config/fieldsList';

export const getFieldsListForSelect = () => {
    const result = [];
    for (const key in FIELDS_INFO_MAP) {
        const infoClass = FIELDS_INFO_MAP[key];
        const infoClassInstance = new infoClass();
        result.push({id: infoClassInstance.CODE, label: infoClassInstance.TITLE, infoClass});
    }

    return result;
};