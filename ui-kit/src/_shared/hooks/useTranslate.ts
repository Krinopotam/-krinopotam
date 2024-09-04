import {useCallback} from 'react';
interface ITranslations {
    en: Record<string, string>;
    [keyof: string]: Record<string, string>;
}

export const useTranslate = (language: string|undefined, translations: ITranslations, extraTranslation?: Record<string, string>) => {
    return useCallback(
        (val: keyof typeof translations.en):string => {
            const lang = language ?? 'en';
            const builtInLocale = translations[lang] ?? translations.en;
            const translation = {...builtInLocale, ...extraTranslation};
            if (Object.prototype.hasOwnProperty.call(translation, val)) return translation[val];
            if (Object.prototype.hasOwnProperty.call(translations.en, val)) return translations.en[val];
            return val;
        },
        [translations, language, extraTranslation]
    );
};
