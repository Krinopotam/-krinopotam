import {MergeObjects} from "@krinopotam/js-helpers/helpersObjects/mergeObjects";
import {useMemo} from "react";
import {IDFormModalApi, IDFormModalProps} from "@src/dFormModal";
import {useTranslate} from "@src/_shared/hooks/useTranslate";
import {translations} from "@src/dFormModal/translations/translations";
import {IFormButtons} from "@src/buttonsRow";


/** Generate buttons */
export const useInitButtons = (formApi: IDFormModalApi, props: IDFormModalProps) => {
    const t = useTranslate(props.language, translations, props.translation);
    return useMemo((): IFormButtons => {
        const defaultButtons: IFormButtons = {
            ok: {
                position: 'right',
                active: props.formMode !== 'view',
                hidden: props.formMode === 'view',
                title: t('ok'),
                hotKeys: [
                    {key: 'enter', ctrl: true},
                    {key: 's', ctrl: true},
                    {key: 'ы', ctrl: true},
                ],
                onClick: () => {
                    formApi.submitForm();
                },
            },
            cancel: {
                position: 'right',
                title: t('cancel'),
                hotKeys: [{key: 'escape'}],
                active: props.formMode === 'view',
                onClick: () => {
                    formApi.close();
                },
            },
        };

        return MergeObjects(defaultButtons, props.buttons);
    }, [formApi, props.buttons, props.formMode, t]);
};