import {useTranslate} from '@src/_shared/hooks/useTranslate';
import {translations} from '@src/dForm/translations/translations';
import {IDFormProps} from '@src/dForm';

export const useApiT = (props: IDFormProps) => {
    return useTranslate(props.language, translations, props.translation);
};
