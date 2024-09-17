import {useTranslate} from '@src/_shared/hooks/useTranslate';
import {translations} from '@src/tree/translations/translations';
import {IExtTreeApi} from "@src/tree/types/types";

export const useT = (api: IExtTreeApi) => {
    const treeProps = api.getProps();
    return useTranslate(treeProps.language, translations, treeProps.translation);
};