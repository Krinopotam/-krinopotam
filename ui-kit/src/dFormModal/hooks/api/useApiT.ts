import {useTranslate} from '@src/_shared/hooks/useTranslate';
import {translations} from '@src/dFormModal/translations/translations';
import {IDFormModalProps} from "@src/dFormModal";

export const useApiT = (props: IDFormModalProps) => {
    return useTranslate(props.language, translations, props.translation);
};