import {IFormButtons} from '@src/buttonsRow/buttonsRow';
import {MergeObjects} from "@krinopotam/js-helpers";
import {useMemo} from "react";
import {IDFormApi, IDFormProps} from "@src/dForm";

export const useGetButtons = (formProps: IDFormProps, formApi: IDFormApi): IFormButtons => {
    return useMemo(() => {
        if (formProps.buttons === null) return {};
        const defaultButtons: IFormButtons = {
            ok: {
                position: 'left',
                active: true,
                title: 'Сохранить',
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
    }, [formProps.buttons, formApi]);
};