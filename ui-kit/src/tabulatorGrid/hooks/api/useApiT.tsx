import {IGridProps} from '@src/tabulatorGrid';
import {useTranslate} from '@src/_shared/hooks/useTranslate';
import {translations} from '@src/tabulatorGrid/translations/translations';

export const useApiT = (props: IGridProps) => {
    return useTranslate(props.language, translations, props.translation);
};