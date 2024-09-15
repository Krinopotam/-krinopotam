import {ITreeSelectApi} from '@src/treeSelect';
import {useTranslate} from '@src/_shared/hooks/useTranslate';
import {translations} from '@src/treeSelect/translations/translations';

export const useT = (api: ITreeSelectApi) => {
    const treeProps = api.getProps();
    return useTranslate(treeProps.language, translations, treeProps.translation);
};