import {useCallback, useMemo} from 'react';
import {translations} from '@src/treeSelect/translations/translations';

export const useTranslate = <
    T extends {
        en: Record<string, string>;
    },
>(
    language: keyof T | undefined,
    translations: T,
    extraTranslation?: Partial<T['en']>
) => {
    const lang = language ?? 'en';
    const [locale, fallbackLocale] = useGetLocale(lang as string, translations, extraTranslation);
    return useCallback((val: keyof T[typeof lang]): string => locale[val] ?? fallbackLocale[val] ?? (val as string), [locale, fallbackLocale]);
};

const t = useTranslate('ru1', translations);
t('confirmChangesQs');
t('confirmChangesQs1');

export const useGetLocale = (language: string, translations: Record<string, Record<string, string>>, extraTranslation?: Partial<Record<string, string>>) => {
    return useMemo(() => {
        const lang = language ?? 'en';
        const builtInLocale = translations[lang] ?? translations.en;
        const locale = {...builtInLocale, ...extraTranslation};
        const fallbackLocale = {...translations.en, ...extraTranslation};
        return [locale, fallbackLocale];
    }, [extraTranslation, language, translations]);
};
