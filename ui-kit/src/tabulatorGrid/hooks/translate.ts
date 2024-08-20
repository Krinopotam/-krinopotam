import {translations} from "@src/tabulatorGrid/translations/translations";
import {useCallback} from "react";
import {IGridProps} from "@src/tabulatorGrid";

export const useTranslate = (gridProps: IGridProps) => {
    return useCallback(
        (val: keyof typeof translations.en) => {
            const lang = gridProps.language ?? 'en'
            const builtInLocale = translations[lang] ?? translations.en
            const translation = {...builtInLocale, ...gridProps.translation}
            if (Object.prototype.hasOwnProperty.call(translation, val)) return translation[val]
            if (Object.prototype.hasOwnProperty.call(translations.en, val)) return translations.en[val]
            return val
        }, [gridProps.language, gridProps.translation])
}