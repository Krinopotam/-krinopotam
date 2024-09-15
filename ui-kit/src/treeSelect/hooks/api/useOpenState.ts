import {ITreeSelectProps} from '@src/treeSelect';
import React, {useState} from 'react';
import {useUpdateEffect} from '@krinopotam/common-hooks';

export const useOpenState = (props: ITreeSelectProps): [open: boolean | undefined, setOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>] => {
    const [open, setOpen] = useState<boolean | undefined>(props.open);

    useUpdateEffect(() => {
        /** Set open if props changed*/
        setOpen(props.open);
    }, [props.open]);

    return [open, setOpen];
};
