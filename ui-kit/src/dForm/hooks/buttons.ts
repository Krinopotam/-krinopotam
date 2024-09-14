import {MergeObjects} from "@krinopotam/js-helpers/helpersObjects/mergeObjects";
import {useMemo} from "react";
import {IDFormApi, IDFormProps} from "@src/dForm";
import {translations} from "@src/dForm/translations/translations";
import {useTranslate} from "@src/_shared/hooks/useTranslate";
import {IFormButtons} from "@src/buttonsRow";

export const useGetButtons = (formProps: IDFormProps, formApi: IDFormApi): IFormButtons => {
    const t = useTranslate(formProps.language, translations, formProps.translation);
    return useMemo(() => {
        if (formProps.buttons === null) return {};
        const defaultButtons: IFormButtons = {
            ok: {
                position: 'left',
                active: true,
                title: t('confirm'),
                hotKeys: [
                    {key: 'enter', ctrl: true},
                    {key: 's', ctrl: true},
                    {key: 'ы', ctrl: true},
                ],
                onClick: () => {
                    formApi.submitForm();
                },
            },
        };

        return MergeObjects(defaultButtons, formProps.buttons);
    }, [formProps.buttons, t, formApi]);
};