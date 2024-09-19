import {ITreeSelectProps} from '@src/treeSelect';
import {useTranslate} from '@src/_shared/hooks/useTranslate';
import {translations} from '@src/treeSelect/translations/translations';

export const useApiT = (props: ITreeSelectProps) => {
    return useTranslate(props.language, translations, props.translation);
};