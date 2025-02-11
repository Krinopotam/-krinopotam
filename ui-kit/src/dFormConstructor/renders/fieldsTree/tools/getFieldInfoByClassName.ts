import {FIELDS_INFO_MAP} from '@src/dFormConstructor/renders/fieldsTree/config/fieldsList';

export const getFieldInfoByClassName = (className: string) => {
    if (!className) return undefined;
    for (const key in FIELDS_INFO_MAP) {
        const fieldInfoClass = FIELDS_INFO_MAP[key];
        const fieldInfo = new fieldInfoClass();
        if (fieldInfo.CLASS?.name === className) return fieldInfo;
    }
    return undefined;
};
