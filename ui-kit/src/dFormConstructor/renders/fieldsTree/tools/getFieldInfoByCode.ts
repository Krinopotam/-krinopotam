import {FIELDS_INFO_MAP} from '@src/dFormConstructor/renders/fieldsTree/config/fieldsList';

export const getFieldInfoByCode = (code: string) => {
    return FIELDS_INFO_MAP[code];
};