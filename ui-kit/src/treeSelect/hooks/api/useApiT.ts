import {ITreeSelectApi} from '@src/treeSelect';
import {useTranslate} from '@src/_shared/hooks/useTranslate';
import {translations} from '@src/treeSelect/translations/translations';

export const useApiT = (api: ITreeSelectApi) => {
    const props = api.getProps();
    return useTranslate(props.language, translations, props.translation);
};