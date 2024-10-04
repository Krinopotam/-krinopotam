import {defaultHeaderLabel} from '@src/_shared/hooks/buttons/defaultButtonsProps';
import {IFormButton} from '@src/buttonsRow';
import React, {useMemo} from 'react';

/** Get label props */
export const useGetHeaderLabel = (props: {headerLabel?: React.ReactNode}): IFormButton | undefined => {
    return useMemo(() => {
        if (!props.headerLabel) return undefined;

        return {
            ...defaultHeaderLabel,
            title: props.headerLabel,
        } satisfies IFormButton;
    }, [props.headerLabel]);
};
