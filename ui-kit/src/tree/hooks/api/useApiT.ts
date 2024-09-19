import {useTranslate} from '@src/_shared/hooks/useTranslate';
import {translations} from '@src/tree/translations/translations';
import {IExtTreeProps} from '@src/tree/types/types';

export const useT = (props: IExtTreeProps) => {
    return useTranslate(props.language, translations, props.translation);
};
