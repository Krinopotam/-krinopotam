import {useMemo} from 'react';
import {IDFormApi, IDFormProps} from '@src/dForm';
import {IFormButtons, mergeButtons} from '@src/buttonsRow';

export const useGetButtonsProps = (formProps: IDFormProps, api: IDFormApi): IFormButtons => {
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

        return mergeButtons(defaultButtons, formProps.buttons);
    }, [formProps.buttons, api]);
};