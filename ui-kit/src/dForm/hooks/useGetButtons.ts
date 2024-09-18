import {MergeObjects} from '@krinopotam/js-helpers/helpersObjects/mergeObjects';
import {useMemo} from 'react';
import {IDFormApi, IDFormProps} from '@src/dForm';
import {IFormButtons} from '@src/buttonsRow';

export const useGetButtons = (formProps: IDFormProps, api: IDFormApi): IFormButtons => {
    return useMemo(() => {
        if (formProps.buttons === null) return {};
        const defaultButtons: IFormButtons = {
            ok: {
                position: 'left',
                active: true,
                title: api.t('confirm'),
                hotKeys: [
                    {key: 'enter', ctrl: true},
                    {key: 's', ctrl: true},
                    {key: 'ы', ctrl: true},
                ],
                onClick: () => {
                    api.submitForm();
                },
            },
        };

        return MergeObjects(defaultButtons, formProps.buttons);
    }, [formProps.buttons, api]);
};