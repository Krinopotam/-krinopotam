
import {useCallback} from "react";
import {translations} from '@src/components/extendedTree/translations/translations';
import {IExtTreeProps} from '@src/components/extendedTree/types/types';

export const useTranslate = (extendedTreeProps: IExtTreeProps) => {
    return useCallback(
        (val: keyof typeof translations.en) => {
            const lang = extendedTreeProps.language ?? 'en'
            const builtInLocale = translations[lang] ?? translations.en
            const translation = {...builtInLocale, ...extendedTreeProps.translation}
            if (Object.prototype.hasOwnProperty.call(translation, val)) return translation[val]
            if (Object.prototype.hasOwnProperty.call(translations.en, val)) return translations.en[val]
            return val
        }, [extendedTreeProps.language, extendedTreeProps.translation])
}