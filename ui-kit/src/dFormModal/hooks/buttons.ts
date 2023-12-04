import {IFormButtons} from '@src/buttonsRow/buttonsRow';
import {MergeObjects} from "@krinopotam/js-helpers";
import {useMemo} from "react";
import {IDFormModalApi, IDFormModalProps} from "@src/dFormModal";

/** Generate buttons */
export const useInitButtons = (formApi: IDFormModalApi, props: IDFormModalProps) => {
    return useMemo((): IFormButtons => {
        const defaultButtons: IFormButtons = {
            ok: {
                position: 'right',
                active: props.formMode !== 'view',
                hidden: props.formMode === 'view',
                title: 'ОК',
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
                title: 'Отмена',
                hotKeys: [{key: 'escape'}],
                active: props.formMode === 'view',
                onClick: () => {
                    formApi.close();
                },
            },
        };

        return MergeObjects(defaultButtons, props.buttons);
    }, [formApi, props.buttons, props.formMode]);
};