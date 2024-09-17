import {IGridApi} from '@src/tabulatorGrid';
import {useTranslate} from '@src/_shared/hooks/useTranslate';
import {translations} from '@src/tabulatorGrid/translations/translations';

export const useT = (api: IGridApi) => {
    const props = api.getProps();
    return useTranslate(props.language, translations, props.translation);
};