import {FormModalInfo} from "@src/dFormConstructor/fields/formModalInfo";
import {FIELDS_INFO_MAP} from '@src/dFormConstructor/renders/fieldsTree/config/fieldsList';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';

/** Generates a description of the interfaces so that Monaco does not display the errors of unknown interfaces*/
export const generateDummyTypes = () => {
    let result = '';
    for (const key in FIELDS_INFO_MAP) {
        const cls = FIELDS_INFO_MAP[key];
        const fieldInfo = new cls();

        if (fieldInfo.INTERFACE_NAME) result = result + `declare interface ${fieldInfo.INTERFACE_NAME} {}\n`;
        if (fieldInfo.CLASS?.name) result = result + `declare class ${fieldInfo.CLASS.name} {}\n`;
    }

    const formInfo = new FormInfo();
    if (formInfo.INTERFACE_NAME) result = result + `declare interface ${formInfo.INTERFACE_NAME} {}\n`;

    const formModalInfo = new FormModalInfo();
    if (formModalInfo.INTERFACE_NAME) result = result + `declare interface ${formModalInfo.INTERFACE_NAME} {}\n`;

    return result;
};
