import {translations} from "@src/dForm/translations/translations";
import {useCallback} from "react";
import {IDFormProps} from "@src/dForm";

export const useTranslate = (formProps: IDFormProps) => {
    return useCallback(
        (val: keyof typeof translations.en) => {
            const lang = formProps.language ?? 'en'
            const builtInLocale = translations[lang] ?? translations.en
            const translation = {...builtInLocale, ...formProps.translation}
            if (Object.prototype.hasOwnProperty.call(translation, val)) return translation[val]
            if (Object.prototype.hasOwnProperty.call(translations.en, val)) return translations.en[val]
            return val
        }, [formProps.language, formProps.translation])
}