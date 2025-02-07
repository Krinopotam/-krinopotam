import {FIELDS_INFO_MAP} from '@src/dFormConstructor/renders/fieldsTree/config/fieldsList';

export const findFieldInfoByCode = (code: string) => {
    return FIELDS_INFO_MAP[code];
};