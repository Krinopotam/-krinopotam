import { mergeObjects } from "@krinopotam/js-helpers";
import { useMemo } from "react";
export const useGetButtons = (formProps, formApi) => {
    return useMemo(() => {
        if (formProps.buttons === null)
            return {};
        const defaultButtons = {
            ok: {
                position: 'left',
                active: true,
                title: 'Сохранить',
                hotKeys: [
                    { key: 'enter', ctrl: true },
                    { key: 's', ctrl: true },
                    { key: 'ы', ctrl: true },
                ],
                onClick: () => {
                    formApi.submitForm();
                },
            },
        };
        return mergeObjects(defaultButtons, formProps.buttons);
    }, [formProps.buttons, formApi]);
};
//# sourceMappingURL=buttons.js.map