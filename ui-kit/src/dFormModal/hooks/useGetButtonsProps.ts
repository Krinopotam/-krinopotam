import {useMemo} from 'react';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {IFormButtons, mergeButtons} from '@src/buttonsRow';

/** Generate buttons */
export const useGetButtonsProps = (api: IDFormModalApi, props: IDFormModalProps) => {
    return useMemo((): IFormButtons => {
        const defaultButtons: IFormButtons = {
            ok: {
                position: 'right',
                active: props.formMode !== 'view',
                hidden: props.formMode === 'view',
                title: api.t('ok'),
                disabled: true,
                hotKeys: [
                    {key: 'enter', ctrl: true},
                    {key: 's', ctrl: true},
                    {key: 'ы', ctrl: true},
                ],
                onClick: () => {
                    api.submitForm();
                },
            },
            cancel: {
                position: 'right',
                title: api.t('cancel'),
                hotKeys: [{key: 'escape'}],
                active: props.formMode === 'view',
                onClick: () => {
                    api.close();
                },
            },
        };
        return mergeButtons(defaultButtons, props.buttons);
    }, [api, props.buttons, props.formMode]);
};