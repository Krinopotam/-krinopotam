import {MergeObjects} from '@krinopotam/js-helpers/helpersObjects/mergeObjects';
import {useMemo} from 'react';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {IFormButtons} from '@src/buttonsRow';

/** Generate buttons */
export const useInitButtons = (api: IDFormModalApi, props: IDFormModalProps) => {
    return useMemo((): IFormButtons => {
        const defaultButtons: IFormButtons = {
            ok: {
                position: 'right',
                active: props.formMode !== 'view',
                hidden: props.formMode === 'view',
                title: api.t('ok'),
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

        return MergeObjects(defaultButtons, props.buttons);
    }, [api, props.buttons, props.formMode]);
};