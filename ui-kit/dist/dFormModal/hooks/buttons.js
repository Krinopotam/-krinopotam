import { MergeObjects } from "@krinopotam/js-helpers";
import { useMemo } from "react";
export const useInitButtons = (formApi, props) => {
    return useMemo(() => {
        const defaultButtons = {
            ok: {
                position: 'right',
                active: props.formMode !== 'view',
                hidden: props.formMode === 'view',
                title: 'ОК',
                hotKeys: [
                    { key: 'enter', ctrl: true },
                    { key: 's', ctrl: true },
                    { key: 'ы', ctrl: true },
                ],
                onClick: () => {
                    formApi.submitForm();
                },
            },
            cancel: {
                position: 'right',
                title: 'Отмена',
                hotKeys: [{ key: 'escape' }],
                active: props.formMode === 'view',
                onClick: () => {
                    formApi.close();
                },
            },
        };
        return MergeObjects(defaultButtons, props.buttons);
    }, [formApi, props.buttons, props.formMode]);
};
