import {useMemo} from 'react';
import {IButtonRowProps, IFormButtons} from '@src/buttonsRow';
import {prepareButtons} from '@src/buttonsRow/helpers/buttonMethods';

export const useGetPreparedButtons = (buttons: IFormButtons | undefined, props: IButtonRowProps) => {
    return useMemo(() => {
        return prepareButtons(buttons, props);
    }, [props, buttons]);
};
