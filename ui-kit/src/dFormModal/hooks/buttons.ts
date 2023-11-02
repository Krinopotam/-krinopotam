import {IDFormModalApi} from './api';
import {IDFormModalProps} from '../dFormModal';
import {IFormButtons} from '@src/buttonsRow/buttonsRow';
import {HelpersObjects} from "@krinopotam/js-helpers";
import {useMemo} from "react";

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

        return HelpersObjects.mergeObjects(defaultButtons, props.buttons);
    }, [formApi, props.buttons, props.formMode]);
};