import {useCallback, useMemo} from 'react';

/** Get translate function
 * @param language - Language to use
 * @param translations - Translations object
 * @param translation - Extra translation object to override Translations
 * @return Translate function. Will translate to 'en_US' if language, locale or world are not found
 */
export const useTranslate = <
    T extends {
        en_US: Record<string, string>;
    },
>(
    language: keyof T | undefined,
    translations: T,
    translation?: Partial<T['en_US']>
) => {
    const lang = language ?? 'en_US';
    const [locale, fallbackLocale] = useGetLocales(lang as string, translations, translation);
    return useCallback((val: keyof T[typeof lang]): string => locale[val] ?? fallbackLocale[val] ?? (val as string), [locale, fallbackLocale]);
};

export const useGetLocales = (language: string, translations: Record<string, Record<string, string>>, extraTranslation?: Partial<Record<string, string>>) => {
    return useMemo(() => {
        const lang = language ?? 'en_US';
        const builtInLocale = translations[lang] ?? translations.en;
        const locale = {...builtInLocale, ...extraTranslation};
        const fallbackLocale = {...translations.en, ...extraTranslation};
        return [locale, fallbackLocale];
    }, [extraTranslation, language, translations]);
};
