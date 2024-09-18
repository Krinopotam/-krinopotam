import {useTranslate} from '@src/_shared/hooks/useTranslate';
import {translations} from '@src/dFormModal/translations/translations';
import {IDFormModalApi} from "@src/dFormModal";

export const useApiT = (api: IDFormModalApi) => {
    const props = api.getProps();
    return useTranslate(props.language, translations, props.translation);
};