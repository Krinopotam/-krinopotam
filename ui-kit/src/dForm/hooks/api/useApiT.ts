import {useTranslate} from '@src/_shared/hooks/useTranslate';
import {translations} from '@src/dForm/translations/translations';
import {IDFormApi} from "@src/dForm";

export const useApiT = (api: IDFormApi) => {
    const props = api.getProps();
    return useTranslate(props.language, translations, props.translation);
};